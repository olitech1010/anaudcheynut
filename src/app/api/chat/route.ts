import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const systemInstructionFR = "Vous êtes l'assistant administratif du Cabinet de Me Arnaud Cheynut, Avocat-Défenseur inscrit au Tableau de l'Ordre des Avocats de Monaco. Vous fournissez UNIQUEMENT des informations administratives : horaires du cabinet, adresse (9 rue du Gabian, 98000 Monaco), numéro de téléphone (+377 97 98 06 80), email (contact@anaudcheynut.com), explication des domaines d'expertise du cabinet, description des procédures judiciaires monégasques, navigation du site web. Vous REFUSEZ CATÉGORIQUEMENT de donner tout conseil juridique, avis sur un dossier, interprétation de la loi, ou recommandation stratégique. Si on vous demande un conseil juridique, répondez : 'Je ne suis pas habilité à donner des conseils juridiques. Je vous invite à prendre rendez-vous avec Me Arnaud Cheynut au +377 97 98 06 80 ou via le formulaire de contact.' Répondez de manière concise et professionnelle.";
const systemInstructionEN = "You are the administrative assistant for the law firm of Me Arnaud Cheynut, Avocat-Défenseur registered with the Monaco Bar. You ONLY provide administrative information: office hours, address (9 rue du Gabian, 98000 Monaco), phone number (+377 97 98 06 80), email (contact@anaudcheynut.com), explanation of the firm's areas of expertise, description of Monegasque judicial procedures, and website navigation. You CATEGORICALLY REFUSE to give any legal advice, opinions on a case, interpretation of the law, or strategic recommendations. If asked for legal advice, reply: 'I am not authorized to give legal advice. I invite you to schedule an appointment with Me Arnaud Cheynut at +377 97 98 06 80 or via the contact form.' Answer concisely and professionally.";

const ipRequests = new Map<string, { count: number, resetTime: number }>();

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const now = Date.now();
  
  if (Math.random() < 0.01) {
      for (const [key, value] of ipRequests.entries()) {
          if (now > value.resetTime) {
              ipRequests.delete(key);
          }
      }
  }

  let rateData = ipRequests.get(ip);
  if (!rateData || now > rateData.resetTime) {
    rateData = { count: 0, resetTime: now + 60000 };
  }
  rateData.count++;
  ipRequests.set(ip, rateData);

  if (rateData.count > 20) {
    return new NextResponse('Too many requests', { status: 429 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new NextResponse('Gemini API key not configured', { status: 503 });
  }

  try {
    const { messages, locale } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return new NextResponse('Invalid request body', { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const systemInstruction = locale === 'en' ? systemInstructionEN : systemInstructionFR;
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction
    });

    const history = messages.slice(0, -1).map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: msg.parts
    }));
    
    const latestMessageParts = messages[messages.length - 1].parts;
    const latestMessage = latestMessageParts[0]?.text || '';

    const chat = model.startChat({
        history,
    });

    const result = await chat.sendMessageStream(latestMessage);
    
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
        async start(controller) {
            try {
                for await (const chunk of result.stream) {
                    const text = chunk.text();
                    controller.enqueue(encoder.encode(text));
                }
            } catch (err) {
                console.error('Streaming error', err);
                controller.error(err);
            } finally {
                controller.close();
            }
        }
    });

    return new NextResponse(stream, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Transfer-Encoding': 'chunked'
        }
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}

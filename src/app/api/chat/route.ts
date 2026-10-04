import { NextRequest, NextResponse } from 'next/server';

const systemInstructionFR = `Tu es l'assistant administratif du Cabinet de Me Arnaud Cheynut, Avocat-Défenseur inscrit au Tableau de l'Ordre des Avocats de Monaco (9 rue du Gabian, 98000 Monaco, +377 97 98 06 80, contact@anaudcheynut.com).

Tu donnes UNIQUEMENT des informations administratives : horaires, adresse, téléphone, email, domaines d'expertise, procédures judiciaires monégasques, navigation du site.

Tu REFUSES de donner tout conseil juridique, avis sur un dossier, interprétation de la loi, ou recommandation stratégique. Si on te demande un conseil juridique, réponds naturellement : "Je ne suis pas habilité à donner des conseils juridiques. Je vous invite à prendre rendez-vous avec Me Arnaud Cheynut au +377 97 98 06 80 ou via le formulaire de contact."

Quand quelqu'un veut prendre rendez-vous ou a un problème juridique concret, propose naturellement : "Je peux vous aider à prendre rendez-vous avec Me Cheynut. Voulez-vous que je note votre demande pour qu'on vous rappelle, ou préférez-vous appeler directement au +377 97 98 06 80 ?"

Sois naturel, empathique et professionnel. Ne sois pas robotique. Utilise "je" et "nous" naturellement.`;
const systemInstructionEN = `You are the administrative assistant for the law firm of Me Arnaud Cheynut, Avocat-Défenseur registered with the Monaco Bar (9 rue du Gabian, 98000 Monaco, +377 97 98 06 80, contact@anaudcheynut.com).

You ONLY provide administrative information: office hours, address, phone, email, areas of expertise, Monegasque judicial procedures, website navigation.

You CATEGORICALLY REFUSE to give any legal advice, opinions on a case, interpretation of the law, or strategic recommendations. If asked for legal advice, reply naturally: "I'm not authorized to give legal advice. I invite you to schedule an appointment with Me Arnaud Cheynut at +377 97 98 06 80 or via the contact form."

When someone wants to book an appointment or has a concrete legal issue, offer naturally: "I can help you book an appointment with Me Cheynut. Would you like me to note your request so we can call you back, or would you prefer to call directly at +377 97 98 06 80?"

Be natural, empathetic, and professional. Don't sound robotic. Use "I" and "we" naturally.`;

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

  const apiKey = process.env.OPENROUTER_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new NextResponse('API key not configured', { status: 503 });
  }

  try {
    const { messages, locale } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return new NextResponse('Invalid request body', { status: 400 });
    }

    const systemInstruction = locale === 'en' ? systemInstructionEN : systemInstructionFR;
    
    const openRouterMessages = [
      { role: 'system', content: systemInstruction },
      ...messages.slice(0, -1).map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.parts[0]?.text || ''
      })),
      { role: 'user', content: messages[messages.length - 1].parts[0]?.text || '' }
    ];

    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'X-Title': 'Cabinet Arnaud Cheynut'
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: openRouterMessages,
        stream: true,
        temperature: 0.3,
        max_tokens: 256
      })
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('OpenRouter API error:', res.status, errorText);
      return new NextResponse('AI service error', { status: 503 });
    }

    if (!res.body) {
      return new NextResponse('No response body', { status: 500 });
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const reader = res.body!.getReader();
          const decoder = new TextDecoder();
          
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');
            
            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6);
                if (data === '[DONE]') continue;
                
                try {
                  const parsed = JSON.parse(data);
                  const content = parsed.choices[0]?.delta?.content;
                  if (content) {
                    controller.enqueue(encoder.encode(content));
                  }
                } catch (e) {
                  // Ignore parse errors for incomplete chunks
                }
              }
            }
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

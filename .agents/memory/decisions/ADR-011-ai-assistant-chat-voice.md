# ADR-011: AI Assistant — Chat + Voice (Web Speech API) + Human-like Behavior

**Date:** 2026-10-03
**Status:** Accepted
**Author:** Orchestrator

## Context
The law firm website required an administrative assistant chatbot that:
1. Provides only administrative information (hours, address, contact, expertise areas, procedures)
2. Categorically refuses legal advice with required disclaimer
3. Supports both text and voice interaction
4. Behaves naturally like a human assistant (not robotic)
5. Proactively offers appointment booking when users mention legal issues

## Decision
Implemented the AI Assistant with:

### Text Chat
- **API:** `/api/chat` (Next.js App Router route)
- **Provider:** OpenRouter with `google/gemini-2.5-flash` model (free tier compatible)
- **Streaming:** Server-Sent Events (SSE) via `ReadableStream`
- **Rate limiting:** 20 requests/minute per IP
- **System prompt:** Bilingual (FR/EN) with strict administrative-only guardrails

### Voice Chat
- **Technology:** Browser Web Speech API
  - `SpeechRecognition` (webkitSpeechRecognition) for microphone input
  - `SpeechSynthesis` for text-to-speech output
- **No external WebSocket server** — runs entirely client-side
- **Voice:** French voice preference, natural rate/pitch/volume
- **Toggle:** Microphone button in chat header

### Human-like Behavior
- Natural, empathetic language (uses "je"/"nous")
- Legal advice refusal: "Je ne suis pas habilité à donner des conseils juridiques. Je vous invite à prendre rendez-vous avec Me Arnaud Cheynut au +377 97 98 06 80 ou via le formulaire de contact."
- Proactive appointment booking offer: "Je peux vous aider à prendre rendez-vous avec Me Cheynut. Voulez-vous que je note votre demande pour qu'on vous rappelle, ou préférez-vous appeler directement au +377 97 98 06 80 ?"

## Consequences
- **Positive:** Zero infrastructure cost for voice (no WebSocket server, no Live API fees)
- **Positive:** Works with free OpenRouter credits
- **Positive:** Privacy-friendly — audio processed locally in browser
- **Negative:** SpeechRecognition requires HTTPS in production (works on localhost for dev)
- **Negative:** Browser support varies (Chrome/Edge best, Safari limited)
- **Negative:** No server-side voice activity detection — relies on browser VAD

## Alternatives Considered
1. **Gemini Live API (WebSocket)** — Requires paid tier, special model access not available
2. **Twilio Media Streams + STT/TTS** — Adds cost and complexity
3. **Custom WebSocket + Vosk/Whisper** — Requires GPU server

## Verification
- `npm run typecheck` — passes
- `npm run build` — passes (23 static pages + 1 dynamic API route)
- Manual test: Text chat responds correctly, voice toggle works in Chrome
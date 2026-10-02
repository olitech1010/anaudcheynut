# ADR-004: AI Assistant — Gemini Live (Voice) + OpenRouter Fallback

## Metadata
- **Status:** Accepted
- **Date:** 2026-10-01
- **Author(s):** Human Lead (decision), Orchestrator (record)
- **Triage Level:** CRITICAL
- **Superseded By:** N/A

## Context & Problem Statement
The Human Lead requested a live AI assistant for the site — voice (real-time speech-to-speech, like Gemini voice mode) and chat modes. The Human will provide a **paid Gemini API key** and a **paid OpenRouter API key** for fallback.

**Critical framing from the Human:** the assistant is an **assistant, not an adviser**. It must not give legal advice.

## Decision Drivers
- Monaco Bar deontological rules: only avocats may give legal advice; an AI dispensing legal guidance would create deontological risk for Me Cheynut.
- API keys are paid/real money: abuse or runaway sessions create cost exposure.
- Keys must never reach the browser bundle (Hard Rule #9).
- Voice transcripts and audio are personal data under RGPD + Monaco Law No. 1.165 — consent and retention obligations apply.

## Decision Outcome
Chosen Option: **Dual-mode AI assistant. Gemini primary, OpenRouter fallback.**

- **Voice mode:** Gemini Live API (WebSocket, native audio dialog) via the client SDK with **ephemeral tokens minted server-side** — the paid key never leaves the server. Session caps (max duration, per-session turn limit) bound cost.
- **Chat mode:** streaming text via a server-side proxy route. Primary: Gemini generateContent streaming. Fallback: OpenRouter chat completions (SSE). Fallback triggers on error/timeout/rate-limit; the assistant degrades to chat-only (with a notice) if the voice channel fails.
- **Assistant scope (system prompt, enforced server-side where possible):** office information, navigation, practice-area summaries, process explanations, pointing to the contact form/phone. Refuses legal advice explicitly; every session opens with a disclaimer. No case-specific guidance, no document interpretation.
- **Compliance guardrails:** visible "assistant, not legal advice" disclaimer on the widget; consent notice before voice capture; transcript retention window with auto-delete; refusal patterns logged for review.
- **Cost control:** per-IP/session rate limits, session duration caps, graceful session end, usage visible in provider dashboards.
- **Keys:** `GEMINI_API_KEY`, `OPENROUTER_API_KEY` in environment variables only; documented in `.env.example` with placeholders.

### Positive Consequences
- A differentiated, modern feature no audited Monaco competitor has (voice assistant on a law firm site).
- Dual-provider fallback removes single-vendor availability risk.
- Strict assistant scope keeps Me Cheynut's deontological exposure near zero.

### Negative Consequences / Trade-offs
- Real money per session; requires quota discipline and monitoring.
- Voice adds moving parts (WebSocket channel, mic permissions, browser support variance).
- Transcript storage adds RGPD surface (consent + retention + deletion procedure).

## Compliance & Verification Gate
- `env-check.sh` enforces key parity in `.env.example`.
- Security Agent reviews the proxy routes (injection, prompt-injection abuse, rate limiting) before launch.
- Researcher verifies current Gemini Live API browser SDK and OpenRouter streaming signatures before implementation (no hallucinated APIs).
- RGPD: consent checkbox/notice precedes voice capture; `ai_conversations` retention window set with the DBA.

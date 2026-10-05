# Project State

> This file is maintained by the Orchestrator agent. It is updated at each phase transition to preserve context across long sessions.

## Current Task
- **Task:** Site-Wide End-to-End Bilingual Translation & Localization (FR/EN)
- **Branch:** main
- **Triage Level:** STANDARD
- **Status:** Expanded bilingual translation system across all remaining pages: The Firm (/a-propos), Practice Areas index (/expertise), all individual practice area detail pages (/expertise/[slug]), Fees & billing models (/honoraires), Legal News index (/actualites), News article detail pages (/actualites/[slug]), Sitemap (/plan-du-site), PageHeader dynamic breadcrumbs, and ChatWidget AI Assistant (French/English speech synthesis, recognition, text prompts, and UI). All 28 static routes compiled and prerendered cleanly.


## Project
**Law Firm Website — Me Arnaud Cheynut** (Avocat-Défenseur, Ordre des Avocats de Monaco)
- Client contact: contact@arnaudcheynut.com / arnaud@arnaudcheynut.com | +33 5 75 28 23 81 | 9 rue du Gabian Phase III, 98000 Monaco
- Domain: arnaudcheynut.com
- Launch languages: FR (default) + EN (live client toggle, cookie & localStorage persisted)

- Intake: email + phone only (no Calendly/self-service booking)
- Complete research package: `arnaud-cheynut/` (profile, content strategy, technical spec, design system, competitor analysis, assets)

## Active Agents
| Agent | Status | Current Assignment |
|---|---|---|
| Orchestrator | ACTIVE | TASK-011 HUMAN CHECKPOINT — AI Assistant chat + voice delivered, awaiting review |
| Developer | ACTIVE | TASK-011 complete — OpenRouter chat API, Web Speech API voice, human-like prompt |
| DBA | IDLE | TASK-004 complete — schema migration, RLS policies, seeds delivered |
| UI Designer | IDLE | DESIGN.md updated to Montserrat and section design system |
| Architect | IDLE | TASK-002 complete — PRD v3 + ADR-005 delivered |
| Tester | QUEUED | TASK-007 — test suite + docs/TESTING_GUIDE.md |
| Security | BACKLOG | TASK-008 — OWASP/RGPD audit |
| Release Manager / DevOps | BACKLOG | TASK-009 — changelog + deploy plan |

## Recent Decisions
- **ADR-001**: Orchestrator mounted; project initialized as Law Firm Website; framework aligned to Next.js 15 App Router per CODING_STANDARDS.md.
- **ADR-002**: Stack locked — Next.js 15 + Supabase + Vercel (Human decision).
- **ADR-003**: Email automation — transactional notifications for every user-initiated process; Resend default, SMTP swap-in.
- **ADR-004**: AI assistant — dual-mode (voice + chat), Gemini Live + OpenRouter fallback, assistant-not-adviser guardrails.
- **ADR-005 (October 2, 2026)**: Domain (arnaudcheynut.com), languages (FR + EN at launch with geo-detect toggle, IT Phase 2), intake (email/phone only), plus Architect-recommended defaults for remaining open questions.
- **ADR-006 (October 2, 2026)**: Design System baseline — Dev-OS v4.3.0 catalog synchronization and root `DESIGN.md` establishing Monaco Navy (#0B1D3A), Monaco Gold (#C8A850), Fraunces display serif, and WCAG AA compliance.
- **ADR-007 (October 2, 2026)**: Database Architecture — 6 core tables with mandatory RLS, foreign key indexing, server/client `@supabase/ssr` utilities, and `.env.example` parity.
- **ADR-008 (October 3, 2026)**: Sprint 1 Core Pages Architecture — 14 static pages prerendered via SSG, 5-step visual procedural timelines on all practice areas, honeypot spam protection, and Server Action direct DB integration.
- **ADR-009 (October 3, 2026)**: Sprint 2 Content & Legal — Blog system with client-side CategoryFilter, 3-model fee transparency page, Monaco-specific legal compliance (Loi n° 1.047, AMSF/SICCFIN LCB-FT, CCIN/RGPD privacy), HTML sitemap for SEO.
- **ADR-010 (October 3, 2026)**: UI Overhaul & Craft Realignment — Migrated typography to Montserrat across entire application, added geometric AC monogram logo, un-crowded navbar with Expertise dropdown, replaced card grids with alternating rows and split sections (Justica inspiration), deployed authentic client photos and hero headers.
- **ADR-011 (October 4, 2026)**: Hostinger SMTP Email System & HTML Signatures — Migrated transactional email delivery to Hostinger SMTP (smtp.hostinger.com:465 SSL) using nodemailer. Created responsive HTML email signatures for info@, contact@, and arnaud@arnaudcheynut.com in docs/email-signatures/. Embedded official signature into client intake confirmation emails. Configured environment variables in .env.example and .env.local. Replaced firm phone number across entire site with +33 5 75 28 23 81 and consolidated domain to arnaudcheynut.com.

## Blockers
- None. Ready for human review and commit.

## Context Summary
TASK-011 complete. AI Assistant with text chat (OpenRouter/Gemini 2.5 Flash streaming), voice chat (Web Speech API — SpeechRecognition + SpeechSynthesis), and human-like behavior (natural refusal of legal advice, proactive appointment booking). 23 routes + /api/chat compiled cleanly via `next build` and `tsc --noEmit`. Next phase: TASK-007 Test Suite & Testing Guide, TASK-008 Security Audit.
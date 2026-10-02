# Project State

> This file is maintained by the Orchestrator agent. It is updated at each phase transition to preserve context across long sessions.

## Current Task
- **Task:** TASK-004 — Database Architecture, Schema, Seeds & Env Setup → HUMAN CHECKPOINT
- **Branch:** main
- **Triage Level:** CRITICAL
- **Status:** Initialized Next.js 15 App Router scaffold, Tailwind design tokens, Supabase client utilities, and `.env.example` / `.env.local` templates. Authored initial migration (`supabase/migrations/20261002000000_init_lawfirm_schema.sql`) with strict RLS on all 6 tables, foreign key indexes, and public/staff access policies. Created `supabase/seed.sql` with authentic Monegasque practice areas and articles. All Dev-OS gates (db-check, env-check, ui-taste-check, humanize-check, typecheck) passed with 0 errors.

## Project
**Law Firm Website — Me Arnaud Cheynut** (Avocat-Défenseur, Ordre des Avocats de Monaco)
- Client contact: contact@zabaldano.com | +377 97 98 06 80 | 9 rue du Gabian Phase III, 98000 Monaco
- Domain: arnaud-cheynut.com
- Launch languages: FR (default) + EN (geo-detected, cookie-persisted)
- Intake: email + phone only (no Calendly/self-service booking)
- Complete research package: `arnaud-cheynut/` (profile, content strategy, technical spec, design system, competitor analysis, assets)

## Active Agents
| Agent | Status | Current Assignment |
|---|---|---|
| Orchestrator | ACTIVE | TASK-004 HUMAN CHECKPOINT — Schema and env ready, awaiting review |
| DBA | ACTIVE | TASK-004 complete — schema migration, RLS policies, seeds delivered |
| Developer | QUEUED | TASK-005 — Implementation Sprint 1 (core pages) |
| UI Designer | IDLE | TASK-003 complete — root DESIGN.md delivered |
| Architect | IDLE | TASK-002 complete — PRD v3 + ADR-005 delivered |
| Tester | BACKLOG | TASK-007 — test suite + docs/TESTING_GUIDE.md |
| Security | BACKLOG | TASK-008 — OWASP/RGPD audit |
| Release Manager / DevOps | BACKLOG | TASK-009 — changelog + deploy plan |

## Recent Decisions
- **ADR-001**: Orchestrator mounted; project initialized as Law Firm Website; framework aligned to Next.js 15 App Router per CODING_STANDARDS.md.
- **ADR-002**: Stack locked — Next.js 15 + Supabase + Vercel (Human decision).
- **ADR-003**: Email automation — transactional notifications for every user-initiated process; Resend default, SMTP swap-in.
- **ADR-004**: AI assistant — dual-mode (voice + chat), Gemini Live + OpenRouter fallback, assistant-not-adviser guardrails.
- **ADR-005 (October 2, 2026)**: Domain (arnaud-cheynut.com), languages (FR + EN at launch with geo-detect toggle, IT Phase 2), intake (email/phone only), plus Architect-recommended defaults for remaining open questions.
- **ADR-006 (October 2, 2026)**: Design System baseline — Dev-OS v4.3.0 catalog synchronization and root `DESIGN.md` establishing Monaco Navy (#0B1D3A), Monaco Gold (#C8A850), Fraunces display serif, and WCAG AA compliance.
- **ADR-007 (October 2, 2026)**: Database Architecture — 6 core tables with mandatory RLS, foreign key indexing, server/client `@supabase/ssr` utilities, and `.env.example` parity.

## Blockers
- None. Ready for human review and Supabase credentials configuration in `.env.local`.

## Context Summary
TASK-004 complete. Database schema authored and mechanically verified via `.agents/scripts/db-check.sh`. Environment configuration template `.env.example` and working copy `.env.local` created and verified via `.agents/scripts/env-check.sh`. Next phase: TASK-005 Implementation Sprint 1.
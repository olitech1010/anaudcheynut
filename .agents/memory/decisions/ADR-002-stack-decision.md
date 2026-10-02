# ADR-002: Stack Decision — Next.js 15 + Supabase + Vercel

## Metadata
- **Status:** Accepted
- **Date:** 2026-10-01
- **Author(s):** Human Lead (decision), Orchestrator (record)
- **Triage Level:** CRITICAL
- **Superseded By:** N/A

## Context & Problem Statement
ADR-001 left the data-layer choice open (research package proposed Sanity.io; Dev-OS stack law specifies Supabase). The Human Lead has now ruled.

## Decision Drivers
- `CODING_STANDARDS.md` is stack law: Next.js 15 (App Router), TypeScript strict, Supabase (Postgres, Auth, Edge Functions), Vercel, Tailwind/shadcn/ui.
- Dev-OS mechanical gates (`db-check.sh`, RLS enforcement) are Supabase-native.
- One vendor for database + auth + storage reduces operational surface for a solo lawyer client.

## Decision Outcome
Chosen Option: **Next.js 15 + Supabase + Vercel** (Human decision, 2026-10-01).

### Positive Consequences
- Full alignment with CODING_STANDARDS.md and all Dev-OS gates — zero hook conflicts.
- Supabase Auth + RLS natively satisfies Hard Rule #21 and Security requirements.
- Vercel Edge deployment per research package's performance targets.

### Negative Consequences / Trade-offs
- Sanity.io editing UX (superior for non-technical content editors) is sacrificed; content will be managed via Supabase tables (or Sanity retained as optional Phase-2 add-on if Human requests).
- Research package's `technical-spec.md` CMS sections (Sanity schemas) are superseded; Supabase schema design is owned by the DBA (TASK-004).

## Compliance & Verification Gate
- `db-check.sh` enforces RLS on all created tables.
- `env-check.sh` enforces `.env.example` parity for Supabase keys (`NEXT_PUBLIC_SUPABASE_URL`, etc.).
- Architect (TASK-002) must produce `docs/PROJECT_REQUIREMENTS.md` reflecting this stack; no Sanity references in the MVP scope.

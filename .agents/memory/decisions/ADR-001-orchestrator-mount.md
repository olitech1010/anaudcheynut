# ADR-001: Orchestrator Mount, Project Initialization & Framework Reconciliation

## Metadata
- **Status:** Accepted
- **Date:** 2026-10-01
- **Author(s):** Orchestrator Agent
- **Triage Level:** STANDARD
- **Superseded By:** N/A

## Context & Problem Statement
Dev-OS v4.1.0 was initialized in `/Users/user/development/lawfirm` with its default framework state — which contained stale records from the Dev-OS framework's own self-development (v3/v4 upgrades, branch `feat/v3-runtime-harness-packs`, 89/89 smoke tests). The actual project is different: a **law firm website for Me Arnaud Cheynut**, a Monaco Avocat-Défenseur with no current website.

Two problems existed at mount time:
1. **Stale state**: `docs/TASK_BOARD.md`, `docs/CURRENT_STATE.md`, and `.agents/memory/context.json` referenced framework-internal tasks and a non-existent branch, providing zero context for the real project.
2. **Stack discrepancy**: `CODING_STANDARDS.md` specifies **Next.js 15 + Supabase + Vercel**, while the pre-built research package (`arnaud-cheynut/specs/technical-spec.md`) specifies **Next.js 14 + Sanity.io**. The two are incompatible as written.

## Decision Drivers
- Dev-OS runtime hooks mechanically enforce Supabase conventions (`db-check.sh` requires RLS on SQL tables; CODING_STANDARDS.md is stack law).
- The research package's tech spec is high-quality strategic guidance but was authored before Dev-OS was installed (it could not have known the stack standard).
- Content requirements (blog, testimonials, practice areas) need a structured CMS either way.
- Hard Rule #11 (Verify Before Implementing) and Hard Rule #3 (no silently ignored constraints) require surfacing the discrepancy, not working around it.

## Considered Options
1. **Option 1:** Keep Sanity.io from the research spec, amend CODING_STANDARDS.md
2. **Option 2:** Align fully to Next.js 15 + Supabase per CODING_STANDARDS.md; defer CMS/data-layer details to the inception phase (TASK-002) where the Architect and DBA can make an informed schema-level decision
3. **Option 3:** Run both stacks in parallel and decide later

## Decision Outcome
Chosen Option: **Option 2**, because:
- `CODING_STANDARDS.md` is the stack law of record and hooks enforce it mechanically.
- Next.js 15 (App Router) is backward-compatible with everything in the research spec's architecture (RSC, ISR, next-intl, Tailwind, shadcn/ui, Vercel Edge) — only the version bumps.
- The Sanity-vs-Supabase choice is genuinely open (Supabase could host structured content via tables + RLS, matching the db-check.sh gate; Sanity offers superior editing UX for a non-technical lawyer). Deciding it requires the Architect's requirements analysis (TASK-002) and DBA schema design (TASK-004), not a unilateral call at mount time.
- The research package's strategic content (positioning, design system, content strategy, competitor analysis) is stack-agnostic and remains 100% valid.

### Positive Consequences
- Single coherent stack law; no hook conflicts.
- Inception phase (TASK-002) gets full authority over the data-layer decision with requirements evidence.
- Research package preserved intact; only `technical-spec.md` requires a version/CMS annotation.

### Negative Consequences / Trade-offs
- Slight delay: CMS decision moves from mount time to TASK-002/TASK-004.
- Research spec's Next.js 14 references need a correction note when the project brief is consolidated.

## Compliance & Verification Gate
- Task Board (`docs/TASK_BOARD.md`) reflects the real project DAG (TASK-001 → TASK-009) with triage levels and gates.
- `docs/CURRENT_STATE.md` and `.agents/memory/context.json` reset to the actual project.
- When TASK-002 concludes, the CMS decision must be recorded as ADR-002 and linked from `docs/CURRENT_STATE.md`.
- Framework alignment verifiable via `devos status` (detected stack: nextjs).

## Scope Note
The pre-existing research package in `arnaud-cheynut/` (8 documents) is treated as **completed research-phase artifacts** feeding TASK-002. It is not itself part of the website codebase; website code will be scaffolded per CODING_STANDARDS.md at the repo root.

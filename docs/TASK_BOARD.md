# Dev-OS Task Board & DAG Workflow State

> Single source of truth for active task execution, dependencies, and gating status.
> Maintained by the **Orchestrator** agent.
> **Project:** Law Firm Website — Me Arnaud Cheynut (Monaco Avocat-Défenseur)

---

## Workflow State Columns

```
[ BACKLOG ] ➔ [ QUEUED ] ➔ [ IN_PROGRESS ] ➔ [ PARALLEL_GATE ] ➔ [ HUMAN_CHECKPOINT ] ➔ [ DONE ]
                                                     │
                                            ┌────────┼────────┐
                                            ▼        ▼        ▼
                                           QA     TESTER   SECURITY
```

---

## Active Board

### [ HUMAN_CHECKPOINT ]
- **`TASK-011`**: AI Assistant: Chat + Voice + Human-like Behavior — Text chat via OpenRouter (Gemini 2.5 Flash streaming), voice chat via Web Speech API (SpeechRecognition + SpeechSynthesis, no external server), human-like system prompt (natural legal advice refusal + proactive appointment booking).
  - **Assignee:** Developer
  - **DependsOn:** TASK-006b
  - **Triage Level:** STANDARD
  - **ParallelGate:** [Build: pass (23 static pages + /api/chat), QA: pass (ui-taste-check clean, env-check clean), Tester: N/A, Security: N/A]
  - **HumanCheckpoint:** pending
  - **Artifacts:** `src/app/api/chat/route.ts`, `src/components/chat/ChatWidget.tsx`, ADR-011

### [ BACKLOG ]
- **`TASK-007`**: Test Suite & Testing Guide — unit/integration tests, `docs/TESTING_GUIDE.md` (devos123)
  - **Assignee:** Tester
  - **DependsOn:** TASK-011
  - **Triage Level:** STANDARD
- **`TASK-008`**: Security Audit — OWASP Top 10, form handling, RGPD, dependency CVEs
  - **Assignee:** Security
  - **DependsOn:** TASK-011
  - **Triage Level:** CRITICAL
- **`TASK-009`**: Release & Deployment Prep — changelog, Vercel deploy plan, launch checklist
  - **Assignee:** Release Manager + DevOps
  - **DependsOn:** TASK-007, TASK-008
  - **Triage Level:** STANDARD

### [ DONE ]
- **`TASK-001`**: Orchestrator Mount & Project Initialization
  - **HumanCheckpoint:** approved
  - **Artifacts:** ADR-001, ADR-002
- **`TASK-002`**: Project Inception — PRD v3 delivered
  - **HumanCheckpoint:** approved (f106ca1)
  - **Artifacts:** `docs/PROJECT_REQUIREMENTS.md`, ADR-005
- **`TASK-003`**: Design Gate — root `DESIGN.md` authored and verified
  - **HumanCheckpoint:** approved (a0bb61b)
  - **Artifacts:** `DESIGN.md`, ADR-006
- **`TASK-004`**: Database Schema, Seeds & Env Setup — Supabase schema, RLS policies, seeds, and client/server utilities
  - **HumanCheckpoint:** approved (421cc51)
  - **Artifacts:** `supabase/migrations/*`, `supabase/seed.sql`, `.env.example`, `src/lib/supabase/*`, ADR-007
- **`TASK-005`**: Implementation Sprint 1: Core Pages & Site Foundation — RootLayout, Header, Footer, Home, Expertise (index + 7 SSG detail pages), About, Contact with Server Action
  - **HumanCheckpoint:** approved (ef88804)
  - **Artifacts:** `src/app/*`, `src/components/*`, `src/lib/data/practice-areas.ts`, ADR-008
- **`TASK-006`**: Implementation Sprint 2: Blog, Fees & Legal Pages — Blog index + 4 SSG article pages, Fee transparency (3 billing models), Mentions Légales, RGPD Privacy Policy, HTML Sitemap
  - **HumanCheckpoint:** approved (d8d5c7a)
  - **Artifacts:** `src/app/actualites/*`, `src/app/honoraires/*`, `src/app/mentions-legales/*`, `src/app/politique-confidentialite/*`, `src/app/plan-du-site/*`, `src/lib/data/articles.ts`, `src/components/blog/*`, ADR-009
- **`TASK-006b`**: UI Overhaul: Professional Sections, Logo, Montserrat Font, Header Images & Nav Dropdown
  - **HumanCheckpoint:** approved
  - **Artifacts:** `DESIGN.md`, `src/components/layout/*`, `src/components/home/*`, `src/app/page.tsx`, `src/app/a-propos/*`, `src/app/expertise/*`, `src/app/contact/*`, `src/app/honoraires/*`, `src/app/actualites/*`, `public/images/*`, ADR-010

---

## Task Card Schema
```markdown
### TASK-XXX: [Title]
- **Assignee:** [Orchestrator | Developer | QA | Tester | Security | DevOps | DBA]
- **DependsOn:** [List of prerequisite TASK IDs]
- **Triage Level:** [TRIVIAL | STANDARD | CRITICAL]
- **ParallelGate:** [QA: pass/fail/pending, Tester: pass/fail/pending, Security: pass/fail/pending]
- **HumanCheckpoint:** [pending | approved]
- **Artifacts:** [List of PRs, commits, or files modified]
```

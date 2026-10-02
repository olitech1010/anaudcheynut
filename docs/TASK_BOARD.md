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
- **`TASK-004`**: Database Schema, Seeds & Env Setup — 6 Supabase tables with RLS, FK indexes, seed data fixtures, and `.env.example` / `.env.local` parity
  - **Assignee:** DBA
  - **DependsOn:** TASK-003
  - **Triage Level:** CRITICAL
  - **ParallelGate:** [DB: pass (db-check.sh), Env: pass (env-check.sh), QA: pass, Tester: N/A, Security: pass (RLS enabled)]
  - **HumanCheckpoint:** pending
  - **Artifacts:** `supabase/migrations/20261002000000_init_lawfirm_schema.sql`, `supabase/seed.sql`, `.env.example`, `src/lib/supabase/*`, ADR-007

### [ QUEUED ]
- **`TASK-005`**: Implementation Sprint 1 — core pages (Home, Expertise, About, Contact), layout, navigation
  - **Assignee:** Developer
  - **DependsOn:** TASK-004
  - **Triage Level:** STANDARD

### [ BACKLOG ]
- **`TASK-006`**: Implementation Sprint 2 — blog/updates, fees, legal pages (mentions légales, RGPD), i18n FR/EN locale routes
  - **Assignee:** Developer
  - **DependsOn:** TASK-005
  - **Triage Level:** STANDARD
- **`TASK-007`**: Test Suite & Testing Guide — unit/integration tests, `docs/TESTING_GUIDE.md` (devos123)
  - **Assignee:** Tester
  - **DependsOn:** TASK-006
  - **Triage Level:** STANDARD
- **`TASK-008`**: Security Audit — OWASP Top 10, form handling, RGPD, dependency CVEs
  - **Assignee:** Security
  - **DependsOn:** TASK-006
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

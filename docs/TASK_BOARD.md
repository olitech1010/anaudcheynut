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

### [ IN_PROGRESS ] → [ DONE ]
- **`TASK-001`**: Orchestrator Mount & Project Initialization — reset stale framework state, initialize memory vault, log ADR-001 (stack reconciliation), declare team roster
  - **Assignee:** Orchestrator
  - **DependsOn:** None
  - **Triage Level:** STANDARD
  - **ParallelGate:** [QA: N/A, Tester: N/A, Security: N/A]
  - **HumanCheckpoint:** approved (Human directed stack + inception)
  - **Artifacts:** ADR-001, ADR-002, reset TASK_BOARD/CURRENT_STATE/context.json

### [ HUMAN_CHECKPOINT ]
- **`TASK-002`**: Project Inception — consolidate `arnaud-cheynut/` research package into `docs/PROJECT_REQUIREMENTS.md` (PRD)
  - **Assignee:** Architect (skills: brainstorming + project-requirements; grill-me not installed)
  - **DependsOn:** TASK-001
  - **Triage Level:** STANDARD
  - **ParallelGate:** [Humanizer: pass (v3 clean), QA: N/A (docs task), Tester: N/A, Security: N/A]
  - **HumanCheckpoint:** pending — OQ 1, 6, 7 answered; 6 Architect recommendations logged pending Human confirmation (ADR-005)
  - **Artifacts:** `docs/PROJECT_REQUIREMENTS.md` (v3, ~245 lines, humanizer clean), `ADR-005` (domain, languages, intake)

### [ QUEUED ]
- **`TASK-003`**: Design Gate — author root `DESIGN.md` from `ui-ux-pro-max` archetypes + tokens from `arnaud-cheynut/specs/design-system.md`
  - **Assignee:** UI Designer (skill: `ui-ux-pro-max`)
  - **DependsOn:** TASK-002
  - **Triage Level:** STANDARD
  - **ParallelGate:** [QA: pending, Tester: N/A, Security: N/A]
  - **HumanCheckpoint:** pending

### [ BACKLOG ]
- **`TASK-004`**: Architecture & Schema — Next.js 15 scaffold, Supabase schema, seed fixtures (password `devos123`)
  - **Assignee:** DBA
  - **DependsOn:** TASK-003
  - **Triage Level:** CRITICAL
- **`TASK-005`**: Implementation Sprint 1 — core pages (Home, Expertise, About, Contact), layout, navigation
  - **Assignee:** Developer
  - **DependsOn:** TASK-004
  - **Triage Level:** STANDARD
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
- *(No tasks completed yet)*

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

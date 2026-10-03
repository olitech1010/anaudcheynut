# Lessons Learned

> This file is a persistent episodic memory store. When an agent encounters a significant error and resolves it, the root cause and resolution are logged here. Agents SHOULD query this file before starting tasks involving similar domains.

## Format
Each entry follows this structure:

```
### [DATE] — [SHORT TITLE]
- **Domain:** (e.g., Git, Auth, Deployment, UI, Database)
- **What went wrong:** (brief description of the failure)
- **Root cause:** (why it happened)
- **Resolution:** (how it was fixed)
- **Prevention rule:** (what to do differently next time)
```

---

### 2026-08-10 — Hardcoded Secret Leaked in PR
- **Domain:** Git, Security
- **What went wrong:** The Orchestrator agent directly wrote code and committed a hardcoded API key into a Pull Request, bypassing the Developer → QA → Human pipeline.
- **Root cause:** The Orchestrator's TRIVIAL triage level allowed direct code execution and commits. Combined with context window truncation, the agent fell back to raw `git commit` instead of `commit.sh`.
- **Resolution:** Removed the TRIVIAL direct-commit loophole. Added mechanical pre-commit hooks (`gitleaks` + `DEVOS_COMMIT_APPROVED` gate). Added Hard Rules #8 and #9.
- **Prevention rule:** Orchestrator NEVER writes production code. All commits route through `commit.sh`. Pre-commit hooks mechanically block secrets.

---

### 2026-10-03 — Recurring "Cannot find module './XXX.js'" Runtime Error

- **Domain:** Next.js, Dev Environment, Build System
- **What went wrong:** The UI broke repeatedly with `Cannot find module './611.js'` (and similar chunk IDs) after running `next build` during an active session.
- **Root cause:** Two conflicting processes wrote to the same `.next/` directory simultaneously:
  1. `next build` generated a production `.next/` folder with a frozen `BUILD_ID` and locked chunk manifests.
  2. A background `next dev` process (left running from an earlier terminal session) rewrote parts of `.next/build-manifest.json` and `app-build-manifest.json` with dev-mode chunk references at a different timestamp.
  The webpack runtime then tried to `require()` chunk IDs from the stale production manifest that no longer existed in the dev-rewritten output, causing a fatal module-not-found error. This happened silently — no warning is emitted when dev and build outputs collide.
- **Resolution:** (1) Killed the stale `next dev` process (`kill -9 <PID>`). (2) Deleted the corrupted `.next/` directory (`rm -rf .next`). (3) Restarted the dev server fresh.
- **Prevention rule (PERMANENT FIX APPLIED):** Added `"predev": "rm -rf .next"` to `package.json` scripts. npm runs `predev` automatically before every `npm run dev`, ensuring the build cache is always purged before a fresh dev server boots. This eliminates the collision entirely. Agents must also check `ps aux | grep next` at session start and kill any stale lawfirm Next.js processes before running `next build`.

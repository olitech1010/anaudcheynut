# ADR-003: Email Automation & Transport

## Metadata
- **Status:** Accepted
- **Date:** 2026-10-01
- **Author(s):** Human Lead (decision), Orchestrator (record)
- **Triage Level:** STANDARD
- **Superseded By:** N/A

## Context & Problem Statement
The PRD (v1) scoped email to Resend transactional notifications for the contact form only. The Human Lead expanded the requirement: emails must be sent for form fills **and any process the user performs** — and the transport is flexible ("smtp or supabase or anyways possible").

## Decision Drivers
- Every user-initiated process should produce an email touchpoint (form receipt, lawyer notification, future newsletter).
- Supabase built-in email only covers auth templates — not custom transactional email at scale.
- SMTP (via nodemailer) works with an existing provider the client may already run (law firms often have one).
- Resend HTTP API offers the best deliverability and React Email templating.

## Decision Outcome
Chosen Option: **Flexible transport, Resend as PRD default with SMTP as documented swap-in.**

- **Email touchpoints (MVP):** contact form receipt (auto-reply) + lawyer notification; process-triggered emails added as features land.
- **Transport options:**
  1. **Resend HTTP API** (recommended) — from a Server Action, React Email templates, domain verification required.
  2. **SMTP via nodemailer** — from a Server Action or Supabase Edge Function, using the client's SMTP credentials.
  3. Supabase built-in — auth emails only; insufficient for custom transactional mail.
- Final transport pick is a Developer implementation decision confirmed by the Researcher, gated on which credentials the Human provides. Env parity enforced (`RESEND_API_KEY` or `SMTP_HOST/PORT/USER/PASS` in `.env.example`).

### Positive Consequences
- No lead lost: database row persists before any email step; email is the notification, DB is the source of truth.
- Swap-in transport keeps vendor lock-in near zero.

### Negative Consequences / Trade-offs
- Requires the Human to supply either a Resend account or SMTP credentials before launch.
- Deliverability (SPF/DKIM/DMARC) must be configured for whichever sending domain is chosen (PRD OQ 8 remains open).

## Compliance & Verification Gate
- `env-check.sh` enforces `.env.example` parity for email credentials.
- Email sending code paths reviewed by Security (injection/header-splitting vectors).
- Resend/SMTP failures logged and visible in Supabase Studio for manual follow-up.

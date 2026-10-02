# ADR-005: Domain, Language Strategy & Intake Model

## Metadata
- **Status:** Accepted
- **Date:** 2026-10-02
- **Author(s):** Human Lead (decisions), Architect (recommendations), Orchestrator (record)
- **Triage Level:** CRITICAL
- **Supersedes:** OQ 6 recommendation (FR-only MVP) superseded by Human decision (FR + EN at launch)
- **Superseded By:** N/A

## Context & Problem Statement

PRD v2 left nine open questions (OQ 1–9) pending Human direction. Three have now received explicit answers; the remaining six receive Architect-recommended defaults so development can proceed. The three answered questions carry broad architectural implications — they fix the domain identity, the language model of the entire site, and the intake pipeline for all leads.

## Decision Drivers

- OQ 1: The domain name fixes canonical URLs, transactional email SPF/DKIM/DMARC domain, Resend domain verification, and OG images. It is the project's public identity.
- OQ 6: The language choice affects every content page (FR/EN column pairs), the next-intl routing strategy, the AI assistant scope, the SEO sitemap structure, and the translation QA load at launch.
- OQ 7: The intake model shapes the contact page layout, the CTA design across the site, and the AI assistant's scheduling-triage instructions.

## Decision Outcome

### Chosen: Domain — arnaud-cheynut.com (Human decision, October 2, 2026)

`.mc` was considered but carries local-presence / trademark restrictions through Openregistry that add delay and cost without proportional value for a Monaco-based practice. `.com` is globally recognised, verifiable without Monaco-specific domain knowledge, and the lawyer's current email is `@zabaldano.com` (a different `.com`) — the site domain should be his own.

### Chosen: Language Strategy — FR + EN at Launch (Human decision, October 2, 2026)

- **Default locale:** FR (Monaco is a French-speaking jurisdiction).
- **Locale detection:** Visitor's country via `Accept-Language` header; FR as the fallback for all non-matched locales.
- **Toggle:** Visible language switcher in the site header.
- **Persistence:** Locale preference persisted in a cookie.
- **Scope impact:**
  - All content tables carry `_fr` and `_en` columns (title, summary, description, excerpt) — `_it` deferred to Phase 2.
  - The AI chat assistant serves FR and EN at launch; the AI voice mode (P2, conditional on OQ 9) serves FR only at launch.
  - The next-intl routing scaffold reads FR route names (slugs) with EN mirrors; the default locale lives at `/` (or `/fr`) — the prefix strategy is a Developer implementation decision.
  - SEO: hreflang annotations (`fr`, `en`) on every page; sitemap includes both locale variants.
  - Professional legal translation is an explicit launch-blocker for both languages; machine translation is explicitly rejected.
- **IT deferred to Phase 2**: Italian translations follow in a later contract once the site is live and stable.

### Chosen: Intake Model — Email + Phone Only (Human decision, October 2, 2026)

- No Calendly embed or self-service booking at launch.
- The contact form routes all scheduling requests to email/phone; the AI assistant's scheduling-triage instruction is: direct to `<form|phone>`.
- Phase 2: revisit self-service booking if intake volume justifies it and the lawyer wants it.

### Architect Recommendations for Remaining OQs (pending Human confirmation)

| OQ | Recommended Default | Rationale | Gates |
|----|---------------------|-----------|-------|
| 2 | Conservative launch: no testimonials, no published fee ranges, no anonymized case studies; neutral emergency wording | Bar deontological rules are a binding constraint that only the lawyer can interpret. Conservative ≠ reversible; aggressive = risk. | Testimonials section, fee page copy, emergency CTA wording |
| 3 | Schedule 6 photos during development; fallback to restrained typography (no stock) | Photos materially improve conversion but a law firm site must not use stock people. Hero/About placeholder spec in DESIGN.md. | Hero, About page, trust signals |
| 4 | €15,000 mid-point working ceiling; P0 first, P1 in order, voice P2 only after P1 acceptance | The research estimate (€11k–22k) gives a reasonable mid-point. Overruns halt and return. | All feature scope decisions |
| 5 | Ship with verifiable trust signals only (Bar number, RCP, languages, address); testimonials table exists empty | Testimonials are gated on OQ 2 + sourcing. Empty != broken; the section renders with trust signals. | Homepage social-proof section |
| 8 | Send from `arnaud-cheynut.com` (no-reply sender, contact@ reply-to); Resend default; Human provides RESEND_API_KEY | Brand consistency. Resend for deliverability + SPF/DKIM/DMARC tooling. SMTP swap-in if Human has existing provider. | .env.example parity, env-check.sh |
| 9 | FR-only voice at launch; chat carries FR + EN (OQ 6) | Monaco primary market bounds QA load for the complex voice integration. IT voice is pure Phase 2. | Voice mode P2 conditional; gates the §7.3 milestone |

### Positive Consequences
- Domain is registered, canonicalized, and built around from day 1 — no redirects later.
- Bilingual launch from day 1 captures the EN-speaking Monaco market (international clients, corporate counsel) without waiting for a Phase 2.
- Email + phone intake keeps the lead pipeline simple, respects the solo practice's capacity, and avoids Calendly abuse (unqualified slots, no-shows).
- Conservative defaults (OQ 2, 5, 9) protect the lawyer's deontological position; reverting them later is additive rather than corrective.

### Negative Consequences / Trade-offs
- Bilingual launch raises the content-production cost and QA load vs. the FR-only recommendation. Every practice area, about copy, and actualité needs professional translation before launch.
- `.com` vs. `.mc` loses the Monaco-specific TLD signal for SEO; hreflang + geotargeting in Search Console partially mitigates.
- Email-only intake means more screening calls for the lawyer vs. a self-service booking system that filters basic questions.
- The recommended defaults for OQ 2, 4, 5, 8, 9 may not match the lawyer's preferences — they are defaults, not decisions, and carry the cost of potential rework if overridden mid-build.

## Compliance & Verification Gate
- Domain DNS: A/AAAA/CNAME records, SPF/DKIM/DMARC for send domain, configured before Vercel deploy and verified by DevOps.
- next-intl config: locales `['fr', 'en']`, default `fr`, geo-detect via headers, cookie persistence — verified by Developer + Tester.
- AI assistant bilingual scope: the server-side system prompt includes EN instructions alongside FR; verified by test coverage (chat proxy unit tests).
- env-check.sh: `RESEND_API_KEY` (or SMTP vars) documented in `.env.example`; domain verification verified by Resend dashboard.
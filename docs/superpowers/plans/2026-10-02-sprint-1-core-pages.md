# Implementation Plan — Sprint 1: Core Pages & Site Foundation

> **Date:** October 2, 2026  
> **Target Task:** TASK-005 (Implementation Sprint 1)  
> **Status:** Draft for Review  
> **Standards:** Next.js 15 App Router, TypeScript, Tailwind CSS, Supabase SSR, Anti-AI UI

---

## 1. Goal & Architectural Overview

The objective of Sprint 1 is to establish the production-grade frontend foundation for **Cabinet de Me Arnaud Cheynut**, Avocat-Défenseur at the Ordre des Avocats de Monaco.

The implementation translates the approved [`DESIGN.md`](file:///Users/user/development/lawfirm/DESIGN.md) and [`docs/PROJECT_REQUIREMENTS.md`](file:///Users/user/development/lawfirm/docs/PROJECT_REQUIREMENTS.md) into accessible, performant Next.js 15 Server and Client Components.

```
src/
├── app/
│   ├── layout.tsx                # Root layout, fonts, header, footer, emergency banner
│   ├── page.tsx                  # Home page: Hero, trust signals, practices, process
│   ├── globals.css               # Design tokens, CSS variables, typography reset
│   ├── expertise/
│   │   ├── page.tsx              # Practice areas index
│   │   └── [slug]/
│   │       └── page.tsx          # Practice area details with procedural timeline
│   ├── a-propos/
│   │   └── page.tsx              # Biography, Monaco Bar credential, legal philosophy
│   ├── contact/
│   │   └── page.tsx              # Form, office details, direct contact, urgent hotline
│   └── actions/
│       └── contact.ts            # Server Action for validated contact submission
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky navigation, logo, phone, language toggle
│   │   ├── Footer.tsx            # Bar registrations, address, hours, legal links
│   │   ├── LanguageSwitcher.tsx  # FR / EN segmented control
│   │   └── EmergencyBanner.tsx   # Persistent 24/7 emergency intake bar
│   ├── home/
│   │   ├── HeroSection.tsx       # Monumental display typography, primary CTAs
│   │   ├── TrustBar.tsx          # Bar #, Court of Appeal, Monaco credentials
│   │   ├── PracticePreview.tsx   # Practice cards with gold reveal on hover
│   │   ├── ProcessTimeline.tsx   # 5-step client representation lifecycle
│   │   └── AboutBrief.tsx        # Personal touch summary
│   ├── expertise/
│   │   └── PracticeCard.tsx      # Reusable practice area card
│   └── contact/
│       └── ContactForm.tsx       # Validated form with status states and honeypot
└── lib/
    ├── data/
    │   └── practice-areas.ts     # Static seed fallback for zero-latency SSR
    └── validation/
        └── contact-schema.ts     # Zod schema for client and server validation
```

---

## 2. Key Modules & Technical Specifications

### 2.1 Design Token Integration & Typography
- Fonts loaded via Next.js Google Fonts optimization: `Fraunces` (variable optical serif) and `Inter` (sans-serif).
- Tailwind utilities mapped directly to tokens from `DESIGN.md`:
  - Primary Navy: `bg-navy-900`, `text-navy-900` (`#0B1D3A`)
  - Monaco Gold: `bg-gold-500`, `text-gold-500`, `border-gold-500` (`#C8A850`)
  - Warm Canvas: `bg-stone-50` (`#FAFAF9`), Surface: `bg-white`
  - High-contrast body: `text-stone-700` (`#44403C`) on light, `text-stone-100` on dark
- Zero raw unicode emojis. Pure SVG iconography from `lucide-react`.

### 2.2 Navigation & Sticky Header
- Clean brand mark: "Me Arnaud Cheynut — Avocat-Défenseur à la Cour".
- Nav items: Accueil, Domaines d'Expertise, Le Cabinet, Contact, Honoraires.
- Action items:
  - Phone link: `+377 97 98 06 80` (click-to-call)
  - Language toggle pill: `FR` (active) / `EN`
  - Primary button: "Prendre Rendez-vous" (navigates to contact)

### 2.3 Core Pages Implementation Details
1. **Home (`/`)**:
   - Hero banner with authoritative headline, value proposition for individuals and businesses in Monaco.
   - Practice domains grid highlighting criminal defense, corporate SAM/SARL structuring, private wealth, emergency injunctions.
   - Process timeline illustrating the 5 distinct phases of legal defense and representation.
2. **Domaines d'Expertise (`/expertise` & `/expertise/[slug]`)**:
   - Dynamic routing matching the 7 core domains populated in Supabase.
   - Fallback dataset to guarantee instantaneous first paint and static generation.
3. **À Propos (`/a-propos`)**:
   - Full professional journey: admission to the Ordre des Avocats de Monaco, oath of confidentiality, representation across Monaco's jurisdictions.
4. **Contact (`/contact`)**:
   - Office location at 9 rue du Gabian, Fontvieille, 98000 Monaco.
   - Server Action handling contact submissions: validates fields with Zod, checks honeypot, persists to `contact_submissions` table via Supabase client.

---

## 3. Step-by-Step Delivery Order

1. **Step 1:** Establish styles and fonts in `src/app/globals.css` and `src/app/layout.tsx`.
2. **Step 2:** Build layout components: `Header.tsx`, `Footer.tsx`, `EmergencyBanner.tsx`, `LanguageSwitcher.tsx`.
3. **Step 3:** Implement static practice areas data fallback in `src/lib/data/practice-areas.ts`.
4. **Step 4:** Build Home page sections in `src/components/home/` and assemble in `src/app/page.tsx`.
5. **Step 5:** Build Expertise pages: `src/app/expertise/page.tsx` and `src/app/expertise/[slug]/page.tsx`.
6. **Step 6:** Build About page: `src/app/a-propos/page.tsx`.
7. **Step 7:** Build Contact page and Server Action: `src/app/contact/page.tsx` and `src/app/actions/contact.ts`.
8. **Step 8:** Run all automated quality checks:
   - `npm run typecheck`
   - `ui-taste-check.sh`
   - `env-check.sh`
   - `db-check.sh`
   - `humanize-check.sh docs/`

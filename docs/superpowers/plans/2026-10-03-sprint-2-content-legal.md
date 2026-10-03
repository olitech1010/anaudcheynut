# Implementation Plan — Sprint 2: Legal Content, Fee Transparency & Compliance

> **Date:** October 3, 2026  
> **Target Task:** TASK-006 (Implementation Sprint 2)  
> **Status:** Draft for Review  
> **Standards:** Next.js 15 App Router, TypeScript, Tailwind CSS, RGPD Monaco Law n° 1.165, Anti-AI UI

---

## 1. Goal & Architectural Overview

The objective of Sprint 2 is to deliver the legal authority, fee transparency, and regulatory compliance infrastructure for **Cabinet de Me Arnaud Cheynut**:

1. **Actualités Juridiques (`/actualites` & `/actualites/[slug]`)**:
   - Monégasque legal analysis and case law insights citing the *Journal de Monaco* and *Legimonaco*.
   - Filterable by practice category (Jurisprudence Monégasque, Droit Pénal des Affaires, Immobilier & Résidence).
   - SSG generation with metadata for search engine indexation.
2. **Honoraires & Transparence (`/honoraires`)**:
   - Distinctive differentiator: published fee philosophy and billing models (hourly rates, fixed retainer, success fee agreement permitted under Monegasque Bar rules).
   - Clear distinction between legal advice, judicial representation, and court costs.
3. **Regulatory & Compliance Pages**:
   - **Mentions Légales (`/mentions-legales`)**: Full compliance with Monegasque statutory disclosures (Loi n° 1.047 du 28 juillet 1982, Ordre des Avocats de Monaco, assurance RCP).
   - **Politique de Confidentialité (`/politique-confidentialite`)**: CCIN & RGPD compliant privacy terms, data retention protocols, rights of access and rectification.
   - **Plan du Site (`/plan-du-site`)**: Comprehensive HTML sitemap for visitors and search engine discoverability.

---

## 2. Directory Layout & Key Modules

```
src/
├── app/
│   ├── actualites/
│   │   ├── page.tsx              # Blog / articles index with category filtering
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic article detail with author box & citations
│   ├── honoraires/
│   │   └── page.tsx              # Fee philosophy, hourly rates, retainer framework
│   ├── mentions-legales/
│   │   └── page.tsx              # Monaco statutory disclosures & Bar details
│   ├── politique-confidentialite/
│   │   └── page.tsx              # Privacy policy & CCIN/RGPD client rights
│   └── plan-du-site/
│       └── page.tsx              # Structural HTML sitemap
├── components/
│   └── blog/
│       ├── ArticleCard.tsx       # Reusable card with date, category & reading time
│       └── CategoryFilter.tsx    # Interactive client category filter pills
└── lib/
    └── data/
        └── articles.ts           # Articles and categories fallback dataset
```

---

## 3. Step-by-Step Delivery Order

1. **Step 1:** Author articles fallback dataset in `src/lib/data/articles.ts` with authentic Monegasque legal topics from `content-strategy.md`.
2. **Step 2:** Build reusable blog components in `src/components/blog/`: `ArticleCard.tsx` and `CategoryFilter.tsx`.
3. **Step 3:** Implement `/actualites` index page and `/actualites/[slug]` detail page with static params prerendering.
4. **Step 4:** Build `/honoraires` page with transparent billing methods and convention d'honoraires explanation.
5. **Step 5:** Build statutory compliance pages: `/mentions-legales`, `/politique-confidentialite`, and `/plan-du-site`.
6. **Step 6:** Run all automated quality checks:
   - `npm run typecheck`
   - `npm run build` (confirming all new routes prerender cleanly)
   - `ui-taste-check.sh`
   - `env-check.sh`
   - `db-check.sh`
   - `humanize-check.sh docs/`

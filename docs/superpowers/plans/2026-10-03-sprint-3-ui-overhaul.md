# Sprint 3 — UI Overhaul: Professional Sections, Images, Logo, Navbar & Font

**Date:** October 3, 2026
**Task:** TASK-006b — Major UI/UX Overhaul
**Triage:** STANDARD
**Dependencies:** TASK-006 (Sprint 2 content pages complete)

---

## Scope

Complete visual overhaul transforming card-heavy layout into a premium law firm website
inspired by the Justica theme (designesia.com). Seven workstreams executed in sequence.

---

## Workstream 1 — Asset Pipeline & Image Generation

### Available Client Assets (from `arnaud-cheynut/assets/`)
| File | Usage |
|------|-------|
| `arnaudpic.jpg` | Primary portrait (desk, formal suit) — Hero, About |
| `arnaaud pic.jpg` | Speaking photo (microphone, conference) — About, Trust |
| `heroslider.jpg` | Conference panel 4-person — Hero/background |
| `heroslider2.jpg` | Conference panel wide with IMFPJ banners — Authority |
| `heroslider 3.jpg` | Office reception (modern, art, black desk) — Contact, About |
| `header image.jpg` | Office lounge (navy couches, walnut panels) — Header backgrounds |
| `imgi_61_Zabaldano-Arnaud.jpg` | Chambers HNW 2026 badge |
| `imgi_8_EMEA_Leading_partner_2025-272x300-2025.webp` | Legal 500 Leading Partner |
| `imgi_10_EMEA_Next_generation_partner_2025-272x300-1.webp` | Legal 500 Next Gen |
| `imgi_11_leadersleague-label-certification-300x157.jpg` | Décideurs / Leaders League |
| `imgi_13_ranked-by-LL-2025-1-300x300.jpg` | Leaders League Ranked Firm 2025 |
| `imgi_5_Firm-Logo-leading-300x252.jpg` | Chambers Global Leading Firm 2025 |
| `imgi_12_Ranked-by-LL-2025-leadng-300x300.jpg` | Leaders League Leading badge |
| `imgi_4_Next-Generation-Partner-272x300-1.jpg` | Next Gen Partner badge |

### Images to Generate
1. **Law firm logo** — "AC" monogram + "ARNAUD CHEYNUT" wordmark, Montserrat, navy/gold
2. **Practice area header images** (7 total):
   - Criminal defense: Monaco courthouse/courtroom
   - Civil litigation: Legal documents and gavel
   - Commercial law: Monaco business district
   - Family law: Protective/family estate imagery
   - Emergency procedures: Urgent legal action
   - Arbitration: Negotiation table
   - Real estate: Monaco skyline/property
3. **Page header images** where client photos insufficient:
   - Contact page header: Monaco harbor/city view
   - Blog page header: Law books and legal research

### Steps
- Copy all client assets to `public/images/` with clean filenames
- Optimize via Next.js `<Image>` with width/height/alt
- Generate missing images via `generate_image`

---

## Workstream 2 — Font System: Montserrat

Replace Fraunces + Inter with Montserrat throughout.

### Files to Modify
- `src/app/layout.tsx` — Import Montserrat from `next/font/google`, remove Fraunces/Inter
- `tailwind.config.ts` — Replace `fontFamily.serif` and `fontFamily.sans` with Montserrat
- `src/app/globals.css` — Update CSS custom properties
- `DESIGN.md` — Update font specification

### Montserrat Weights
- 300 (light) — body text alternate
- 400 (regular) — body text
- 500 (medium) — labels, nav links
- 600 (semibold) — subheadings
- 700 (bold) — headings
- 800 (extrabold) — hero display

---

## Workstream 3 — Navbar Redesign

Replace crowded flat nav with clean, organized structure.

### Desktop Navigation
```
[LOGO]  Accueil  Expertise ▼  Le Cabinet  Honoraires  Actualités  Contact  [FR|EN]  [Phone]
                    └─ Dropdown:
                       ├─ Droit Pénal & Défense
                       ├─ Droit Civil & Litiges
                       ├─ Droit Commercial & SAM/SARL
                       ├─ Droit de la Famille
                       ├─ Référés d'Urgence
                       ├─ Arbitrage & Résolution
                       └─ Droit Immobilier
```

### Mobile Navigation
- Hamburger → full-screen overlay
- Expertise section collapsible accordion

### Implementation
- Replace text "Me Arnaud Cheynut" with logo image
- Add dropdown state management for Expertise
- Smooth dropdown animation with `transition-all`
- Gold underline on hover, gold left-border on dropdown items

---

## Workstream 4 — Hero Section Overhaul

Replace text-only hero with full-width image background hero (Justica-inspired).

### Layout
- Full viewport height hero with `arnaudpic.jpg` or `header image.jpg` as background
- Dark overlay gradient (left-to-right or bottom-up)
- Large Montserrat heading: "Avocat-Défenseur à Monaco"
- Subtitle: "Votre représentation devant les juridictions de la Principauté"
- Two CTAs: "Consulter Me Cheynut" + "Appeler le Cabinet"
- Award badges row at bottom of hero

---

## Workstream 5 — Section Design System (Beyond Cards)

Replace uniform card grids with varied professional sections inspired by Justica.

### Section Types
1. **Split Content** — Image left / text right (or reversed). Used for About, Process.
2. **Full-width Banner** — Dark background, centered text, CTA. Used for urgency callouts.
3. **Alternating Rows** — Image/text rows alternating sides. Used for practice areas on homepage.
4. **Stat Counter Strip** — Navy background, gold numbers, key metrics.
5. **Testimonial/Award Strip** — Logo bar with award badges.
6. **Image Grid** — Office photos in masonry-like arrangement.

### Pages Getting Section Overhaul
- **Home** — Hero → Award Bar → Split About → Practice Alternating Rows → Stats → Process → CTA
- **About** — Header image → Bio split → Awards grid → Office gallery → Conference photos
- **Expertise index** — Header image → Practice areas as alternating image/text rows
- **Each practice area detail** — Header image banner → Content with sidebar
- **Contact** — Header image → Split (form left, info right)
- **Honoraires** — Header image → Billing models as alternating rows
- **Actualités** — Header image → Articles grid

---

## Workstream 6 — Practice Area Pages with Images

Each practice area detail page gets:
- Full-width header banner with generated image + overlay + title
- Breadcrumb navigation
- Content area with procedural timeline
- Sidebar with CTA and related articles

---

## Workstream 7 — Page Header Banners

Every sub-page gets a consistent header banner:
- Full-width image with navy overlay (50-70% opacity)
- Montserrat heading (white, bold)
- Breadcrumb below title
- Consistent height (~300px desktop, ~200px mobile)

---

## File Manifest (Expected Changes)

### New Files
- `public/images/logo.png` — Generated logo
- `public/images/logo-white.png` — White variant for dark backgrounds
- `public/images/portrait-primary.jpg` — Optimized arnaudpic.jpg
- `public/images/portrait-speaking.jpg` — Optimized conference photo
- `public/images/office-reception.jpg` — Optimized reception photo
- `public/images/office-lounge.jpg` — Optimized lounge photo
- `public/images/conference-panel.jpg` — Optimized heroslider.jpg
- `public/images/conference-wide.jpg` — Optimized heroslider2.jpg
- `public/images/awards/chambers-hnw-2026.jpg` — Optimized badge
- `public/images/awards/legal500-leading.webp` — Optimized badge
- `public/images/awards/legal500-nextgen.webp` — Optimized badge
- `public/images/awards/leaders-league-ranked.jpg` — Optimized badge
- `public/images/awards/leaders-league-label.jpg` — Optimized badge
- `public/images/awards/chambers-global.jpg` — Optimized badge
- `public/images/headers/hero-bg.jpg` — Generated/composed hero background
- `public/images/headers/expertise-*.jpg` — Generated practice area headers (×7)
- `public/images/headers/contact.jpg` — Generated Monaco harbor
- `public/images/headers/blog.jpg` — Generated legal research
- `public/images/headers/about.jpg` — Uses office/lounge
- `public/images/headers/honoraires.jpg` — Generated fee-related
- `src/components/layout/PageHeader.tsx` — Reusable page header banner
- `src/components/layout/NavDropdown.tsx` — Expertise dropdown component

### Modified Files
- `src/app/layout.tsx` — Montserrat font, logo
- `tailwind.config.ts` — Montserrat font family
- `src/app/globals.css` — Font custom properties
- `DESIGN.md` — Font and section updates
- `src/components/layout/Header.tsx` — Complete rewrite with dropdown, logo
- `src/components/layout/Footer.tsx` — Logo image
- `src/app/page.tsx` — Full hero + section overhaul
- `src/components/home/*.tsx` — All section components redesigned
- `src/app/expertise/page.tsx` — Alternating rows design
- `src/app/expertise/[slug]/page.tsx` — Image header banner
- `src/app/a-propos/page.tsx` — Split sections with photos
- `src/app/contact/page.tsx` — Image header + split layout
- `src/app/honoraires/page.tsx` — Image header + alternating rows
- `src/app/actualites/page.tsx` — Image header
- `src/app/actualites/[slug]/page.tsx` — Image header
- `src/app/mentions-legales/page.tsx` — Image header
- `src/app/politique-confidentialite/page.tsx` — Image header
- `src/app/plan-du-site/page.tsx` — Image header

---

## Execution Order

1. Copy + optimize client assets → `public/images/`
2. Generate logo and missing header images
3. Font swap (Montserrat)
4. Build `PageHeader` and `NavDropdown` reusable components
5. Rewrite Header with logo + dropdown
6. Rewrite Hero section with image background
7. Redesign homepage sections (alternating rows, stats, awards)
8. Add `PageHeader` to all sub-pages
9. Redesign About page with photo sections
10. Redesign Expertise pages with image headers
11. Update Contact, Honoraires, Blog pages
12. Update Footer with logo
13. Build verification + quality gates

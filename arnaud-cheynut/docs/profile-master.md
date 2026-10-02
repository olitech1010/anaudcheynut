# Me Arnaud Cheynut - Master Profile Document
**Prepared for Website Development Handoff**
**Date:** October 1, 2026
**Source:** Ordre des Avocats de Monaco (Official Bar Association Directory)

---

## 1. CORE IDENTITY

| Field | Value |
|-------|-------|
| **Full Name** | M. Arnaud Cheynut |
| **Professional Title** | Avocat-Défenseur (Defense Lawyer / Barrister) |
| **Bar Admission** | Ordre des Avocats de Monaco |
| **Practice Status** | Active |

---

## 2. CONTACT INFORMATION

| Channel | Details |
|---------|---------|
| **Email** | contact@zabaldano.com |
| **Phone** | +377 97 98 06 80 |
| **Office Address** | 9, rue du Gabian - Phase III, 98000 Monaco |
| **Website** | **None** (Primary opportunity) |

---

## 3. PRACTICE CONTEXT

### Current Affiliation
- **Email domain:** `zabaldano.com` → Indicates collaboration with **Cabinet Zabaldano** (Me Régis Bergonzi)
- **No independent website** → Operates under shared infrastructure
- **Office location:** Rue du Gabian, Phase III - Central Monaco business district

### Practice Area: Avocat-Défenseur
In Monaco, **Avocat-Défenseur** = Full rights of audience before all courts:
- **Cour d'Appel** (Court of Appeal)
- **Tribunal de Première Instance** (First Instance Court)
- **Juge des Libertés et de la Détention** (Liberty & Detention Judge)
- **Cour d'Assises** (Assize Court - serious criminal cases)
- **Conseil de Prud'hommes** (Labor Court)
- **All emergency/injunctive proceedings** (Référés)

---

## 4. MONACO LEGAL MARKET CONTEXT

### Competitive Landscape
- **Total Avocats-Défenseurs in Monaco:** ~25 (per Bar directory)
- **Large firms with websites:** CMS Law, 99avocats, Zabaldano, PBLB
- **Solo/Small practitioners WITHOUT websites:** 8 identified (including Cheynut)
- **Market gap:** High-net-worth clients expect digital presence; Monaco has 38,000+ residents + 100,000+ daily workers

### Target Client Segments
1. **Monaco residents** (civil, family, property disputes)
2. **International clients** (cross-border litigation, arbitration)
3. **Corporate clients** (commercial disputes, contract enforcement)
4. **High-net-worth individuals** (asset protection, succession disputes)
5. **Foreign lawyers** seeking Monaco correspondent counsel

---

## 5. BRAND POSITIONING OPPORTUNITIES

### Differentiators to Highlight
- **Independent practitioner** - Direct access, no junior delegation
- **Monaco-native expertise** - Deep local court knowledge
- **Bilingual capability** (French/English essential for Monaco market)
- **Rue du Gabian location** - Prestigious legal district
- **No website = First-mover advantage** for modern digital presence

### Messaging Pillars
1. **"Votre défense, mon engagement"** (Your defense, my commitment)
2. **Expertise locale, vision internationale** (Local expertise, international vision)
3. **Accessible, transparent, réactif** (Accessible, transparent, responsive)

---

## 6. TECHNICAL SPECIFICATIONS FOR DEVELOPERS

### Required Pages (MVP)
| Page | Priority | Notes |
|------|----------|-------|
| Home / Hero | P0 | Clear value prop, CTA to contact |
| Expertise / Practice Areas | P0 | 6-8 practice area cards |
| About / Profile | P0 | Photo, bio, Bar admission, languages |
| Contact | P0 | Form + direct contact info + map |
| Mentions Légales / RGPD | P0 | Legal requirement in Monaco/EU |
| Actualités / Publications | P1 | Blog/legal updates (SEO) |
| Honoraire / Transparence | P1 | Fee structure transparency |
| Équipe / Réseau | P2 | Referral network, correspondents |

### Technical Stack Recommendations
- **Framework:** Next.js 14+ (App Router) - SSR for SEO, Vercel deployment
- **CMS:** Sanity.io or Contentful (headless, easy for lawyer to update)
- **Forms:** React Hook Form + Zod validation + Resend/EmailJS
- **Analytics:** Vercel Analytics + Plausible (privacy-friendly)
- **Performance:** Target 90+ Lighthouse, <2s LCP
- **Accessibility:** WCAG 2.1 AA minimum

### SEO Strategy
- **Primary keywords:** "avocat défenseur Monaco", "avocat Monaco", "défense pénale Monaco", "litige commercial Monaco"
- **Local SEO:** Google My Business, schema.org LegalService, Monaco directories
- **Content:** Monthly legal updates (Monaco law changes, case summaries)

---

## 7. CONTENT REQUIREMENTS

### Copy Needed (Client to Provide)
- [ ] Professional biography (200-300 words)
- [ ] Practice area descriptions (6-8 areas, 100 words each)
- [ ] Notable cases (anonymized, 3-5 examples)
- [ ] Education & Bar admission details
- [ ] Languages spoken
- [ ] Professional memberships
- [ ] Fee philosophy/structure
- [ ] Client testimonials (3-5, anonymized)
- [ ] Professional headshot (high-res)
- [ ] Office photos (2-3)

### Content We Can Draft
- [ ] Practice area frameworks (standard Monaco categories)
- [ ] Legal process explanations (Monaco-specific)
- [ ] FAQ sections
- [ ] GDPR/legal notices (standard templates)
- [ ] Meta descriptions for all pages

---

## 8. COMPLIANCE CHECKLIST (MONACO/EU)

| Requirement | Status | Notes |
|-------------|--------|-------|
| RGPD/GDPR compliance | ⬜ Pending | Privacy policy, cookie consent, data processing |
| Mentions légales | ⬜ Pending | Required by French/Monaco law |
| Bar Association rules | ⬜ Pending | Check Ordre des Avocats advertising rules |
| Professional liability insurance | ⬜ Verify | Display certificate |
| Anti-money laundering (LCB/FT) | ⬜ Verify | Client onboarding forms |
| Accessibility (WCAG 2.1 AA) | ⬜ Target | Legal requirement for public services |

---

## 9. ASSETS INVENTORY

### Currently Available
- [ ] Bar directory profile text (captured above)
- [ ] Office address for Google Maps embed
- [ ] Phone/email for click-to-call/mail links

### Needed from Client
- [ ] Professional headshot (portrait + landscape)
- [ ] Office interior/exterior photos
- [ ] Logo/brand assets (if any exist)
- [ ] Favicon source files
- [ ] PDF brochures or existing marketing materials

### To Create/Source
- [ ] Hero background (Monaco courthouse, Palais de Justice, cityscape)
- [ ] Practice area icons (custom or licensed)
- [ ] Team/placeholder photos
- [ ] Favicon set (16x16 through 512x512)
- [ ] OG/Twitter card images (1200x630)

---

## 10. COMPETITOR ANALYSIS SUMMARY

| Firm | Website Quality | Strengths | Gaps Cheynut Can Exploit |
|------|-----------------|-----------|-------------------------|
| CMS Law (cms.law/pcm) | Enterprise, corporate | International brand, multi-jurisdiction | Impersonal, expensive, not boutique |
| 99avocats.com | Modern, clean | Clear practice areas, good UX | Generic, firm-focused not individual |
| Zabaldano.com | Professional | Established, clear expertise | Shared brand, not individual lawyer |
| PBLB-avocats.com | Traditional | Reputation, network | Dated design, no individual profiles |

**Opportunity:** Build a **personal brand site** that feels boutique, accessible, and modern - distinct from firm sites.

---

## 11. UNIQUE FEATURES TO CONSIDER

### Modern Differentiators
1. **Interactive Practice Area Explorer** - Filter by legal issue, see process timeline
2. **Live Availability Calendar** - Calendly integration for initial consultations
3. **Secure Client Portal** - Document upload, case status (Phase 2)
4. **Legal Fee Estimator** - Transparent pricing calculator
5. **Monaco Law Updates Feed** - Curated legal changes affecting clients
6. **Multilingual Toggle** - FR/EN/IT (Monaco's key languages)
7. **Dark/Light Mode** - Professional preference
8. **Print-Optimized Pages** - For client meeting prep
9. **WhatsApp Business Integration** - Monaco client preference
10. **Video Introduction** - 60-second personal welcome

### Technical Innovations
- **View Transitions API** - Smooth page transitions (React 19)
- **Server Components** - Optimal SEO + performance
- **Edge Functions** - Fast form processing globally
- **Structured Data (JSON-LD)** - Rich snippets for legal services
- **Progressive Web App** - Installable, offline-capable

---

## 12. PROJECT TIMELINE ESTIMATE

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Discovery & Content | 1-2 weeks | Signed brief, all copy/assets |
| Design System & UI | 1 week | Figma mockups, component library |
| Development (MVP) | 2-3 weeks | Staging site, all core pages |
| Testing & Compliance | 1 week | Accessibility, GDPR, performance |
| Launch & Handoff | 1 week | Production deploy, training docs |
| **Total** | **6-8 weeks** | **Production website** |

---

## 13. BUDGET CONSIDERATIONS

| Item | Estimate Range |
|------|----------------|
| Design & Development | €8,000 - €15,000 |
| CMS Setup (Sanity) | €1,500 - €3,000 |
| Copywriting (if needed) | €1,000 - €2,500 |
| Photography | €500 - €1,500 |
| Annual Hosting (Vercel Pro) | €240/year |
| Domain & SSL | €50/year |
| Maintenance Retainer | €300-500/month |

---

## 14. NEXT STEPS

1. **Client Meeting** - Review this brief, confirm scope, gather missing content
2. **Contract & Deposit** - Sign agreement, collect 50% deposit
3. **Content Collection** - Client provides bio, photos, practice area details
4. **Design Kickoff** - Present 3 homepage concepts in Figma
5. **Development Sprint** - Build in 2-week iterations with demos

---

## 15. CONTACT FOR QUESTIONS

**Project Lead:** [Your Name/Company]
**Technical Lead:** [Developer Name]
**Designer:** [Designer Name]

---

*This document is confidential and prepared exclusively for the Me Arnaud Cheynut website development project.*
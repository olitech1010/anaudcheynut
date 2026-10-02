# Content Strategy - Me Arnaud Cheynut Website
**Version:** 1.0 | **Date:** October 1, 2026

---

## 1. CONTENT PILLARS

| Pillar | Purpose | Frequency | Formats |
|--------|---------|-----------|---------|
| **Expertise Demonstration** | Prove competence in each practice area | Evergreen + quarterly updates | Practice pages, case studies, FAQs |
| **Legal Education** | Empower clients, build trust, SEO | Monthly | Blog posts, guides, checklists |
| **Monaco Legal Updates** | Show active practice, local authority | Bi-weekly | News briefs, law change alerts |
| **Personal Brand** | Humanize, differentiate from firms | Quarterly | Bio updates, speaking, publications |
| **Client Journey** | Reduce friction, increase conversion | Evergreen | Process guides, fee transparency, contact |

---

## 2. SITE MAP & CONTENT INVENTORY

### 2.1 Primary Pages (MVP)

```
├── 🏠 Accueil (Home)
│   ├── Hero: Value prop + CTA
│   ├── Expertise Preview (3-4 featured)
│   ├── About Preview (photo + 2-sentence bio)
│   ├── Trust Signals (Bar #, languages, location)
│   ├── Testimonial Carousel (3-5)
│   └── CTA Section (Contact + Emergency)
│
├── ⚖️ Domaines d'Expertise (Practice Areas)
│   ├── Index Page (All 6-8 areas as cards)
│   ├── Droit Pénal & Défense
│   ├── Droit Civil & Litiges
│   ├── Droit Commercial & Affaires
│   ├── Droit de la Famille
│   ├── Procédures d'Urgence & Référés
│   ├── Arbitrage & Médiation
│   └── Droit Immobilier
│
├── 👤 À Propos (About)
│   ├── Professional Biography
│   ├── Education & Bar Admission
│   ├── Languages
│   ├── Professional Memberships
│   ├── Publications & Speaking
│   ├── Network & Correspondents
│   └── Philosophy & Approach
│
├── 📞 Contact
│   ├── Contact Form (validated)
│   ├── Direct Contact Info (clickable)
│   ├── Office Map & Directions
│   ├── Office Hours
│   ├── Emergency Contact
│   ├── FAQ (5-8 common questions)
│   └── Calendly Embed (optional)
│
├── 📰 Actualités Juridiques (Legal Updates)
│   ├── Category Filter
│   ├── Paginated List
│   ├── Newsletter Signup
│   └── Article Detail Pages
│
├── 💰 Honoraire & Transparence (Fees)
│   ├── Fee Philosophy
│   ├── Billing Methods (Hourly, Fixed, Success)
│   ├── Estimator Tool (Phase 2)
│   ├── Legal Aid (Aide Juridictionnelle)
│   └── Payment Terms
│
├── ⚖️ Mentions Légales
├── 🔒 Politique de Confidentialité
├── 🍪 Politique Cookies
└── 🗺️ Plan du Site
```

### 2.2 Phase 2 Pages (Post-Launch)
- Client Portal (secure document exchange)
- Appointment Booking (full calendar)
- Case Status Tracking
- Multilingual versions (EN/IT)
- Webinar/Event Registration

---

## 3. PAGE-BY-PAGE CONTENT SPECS

### 3.1 Homepage - "The Digital Handshake"

**Hero Section**
```
HEADLINE: "Votre défense, mon engagement."
SUBHEAD: "Avocat-Défenseur au Barreau de Monaco. 
          Expertise en droit pénal, civil, commercial et familial. 
          Accès direct à toutes les juridictions monégasques."
CTA PRIMARY: "Prendre rendez-vous" → /contact
CTA SECONDARY: "Mes domaines d'expertise" → /expertise
TRUST BADGES: Barreau de Monaco • 3 langues • Rue du Gabian • Réactivité 24h
```

**Expertise Preview** (3 featured cards)
- Each: Icon + Title + 1-line description + "En savoir plus" link

**About Preview**
- Professional photo (circular)
- Name + Title
- 2-sentence bio
- "Découvrir mon parcours" → /a-propos

**Testimonials** (Auto-rotating, 5s interval)
- Format: "« Quote »" — Initials, Client Type, Practice Area

**Final CTA**
```
"Besoin d'un conseil urgent ?"
"Je réponds sous 24h ouvrées. Contactez-moi directement."
[Bouton: Appeler +377 97 98 06 80] [Bouton: Écrire]
```

---

### 3.2 Practice Area Page Template

**Structure (per area):**
```
H1: [Area Name] — e.g., "Droit Pénal & Défense"
LEAD: 2-3 sentences on scope + Monaco specificity

PROCESS TIMELINE (4-5 steps):
  1. Consultation initiale → Analyse du dossier
  2. Stratégie de défense → Options juridiques
  3. Rédaction conclusions → Dépôt au greffe
  4. Plaidoirie / Audience → Défense orale
  5. Suivi décision → Appel si nécessaire

KEY EXPERTISE (bulleted):
  - Infractions spécifiques (ex: blanchiment, abus de biens sociaux)
  - Juridictions concernées (Tribunal Correctionnel, Cour d'Appel, Assises)
  - Particularités monégasques (droit local, traités internationaux)

FAQ (4-6 questions):
  Q: "Combien coûte une défense pénale ?"
  A: "Honoraires au temps passé ou forfait selon complexité. Devis gratuit."

  Q: "Intervenez-vous en garde à vue ?"
  A: "Oui, 24h/24, 7j/7. Présence dès la première heure."

CTA BLOCK:
  "Votre situation relève du droit pénal ?"
  [Bouton: Prendre rendez-vous] [Bouton: Appeler urgence]

RELATED AREAS: Links to 2-3 related practice areas
```

---

### 3.3 About Page - "L'Homme derrières la Toga"

**Sections:**
1. **Portrait & Identity** (Photo + Name + Title + Bar #)
2. **Parcours Professionnel** (Timeline: Education → Bar → Key roles)
3. **Approche & Valeurs** (3 pillars: Proximité, Rigueur, Réactivité)
4. **Compétences Clés** (Tag cloud: contentieux, conseil, négociation, rédaction)
5. **Langues** (FR/EN/IT - flags + proficiency)
6. **Réseau & Correspondants** (International network map)
7. **Publications & Interventions** (List with links)
8. **Engagement Déontologique** (Charte, assurance RCP, formation continue)

---

### 3.4 Contact Page - "La Porte Ouverte"

**Form Fields:**
```
Nom complet *          [text, required]
Email *                [email, required]
Téléphone              [tel, optional]
Sujet *                [select: Pénal / Civil / Commercial / Famille / Urgence / Autre]
Message *              [textarea, required, min 50 chars]
Pièce jointe           [file, max 10MB, PDF/DOC/JPG]
RGPD *                 [checkbox, required] "J'accepte le traitement..."
```

**Validation Messages:**
- Real-time inline validation
- Success: "Message envoyé. Réponse sous 24h ouvrées."
- Error: Clear, specific, non-technical

**Direct Contact:**
```
📍 9, rue du Gabian - Phase III, 98000 Monaco
📧 contact@zabaldano.com
📞 +377 97 98 06 80
⏰ Lundi-Vendredi: 9h-18h | Urgences: 24/7
```

**Map:** Embedded Google Maps with custom marker

---

### 3.5 Legal Updates (Blog) - "Veille Juridique Monaco"

**Article Template:**
```
META:
  - Title: [Action verb] + [Topic] + [Monaco context] (≤ 60 chars)
  - Meta Description: 150-160 chars, includes keyword + CTA
  - Category: [Pénal / Civil / Commercial / Famille / Procédure / Européen]
  - Tags: 3-5 specific tags
  - Published: Date + "Mis à jour le" if revised
  - Author: Me Arnaud Cheynut + photo
  - Read time: "X min de lecture"

STRUCTURE:
  1. Lead paragraph (what changed, why it matters)
  2. Contexte juridique (current law + reference)
  3. Nouveautés / Changements (bulleted)
  4. Impact pratique (for clients)
  5. Prochaines étapes / Vigilance
  6. Sources officielles (links to Journal de Monaco, Legimonaco)
  7. CTA: "Besoin d'éclaircissements ? Contactez-moi"
```

**Content Calendar (First 3 Months):**
| Week | Topic | Category | Keyword Target |
|------|-------|----------|----------------|
| 1 | Nouveau Code de procédure pénale monégasque | Pénal | "procédure pénale Monaco 2026" |
| 2 | Divorce à Monaco: procédure & délais | Famille | "divorce Monaco avocat" |
| 3 | Recouvrement créances transfrontalier | Commercial | "recouvrement créances Monaco" |
| 4 | Garde à vue: droits & avocat | Pénal | "garde à vue Monaco avocat" |
| 5 | Baux commerciaux: révision loyers | Immobilier | "bail commercial Monaco" |
| 6 | Successions internationales Monaco | Famille | "succession Monaco international" |
| 7 | Référé-liberté: procédure accélérée | Procédure | "référé liberté Monaco" |
| 8 | LCB/FT: nouvelles obligations 2026 | Commercial | "LCB FT Monaco avocat" |
| 9 | Médiation obligatoire: nouveaux seuils | Commercial | "médiation Monaco obligatoire" |
| 10 | Droit de la famille: autorité parentale | Famille | "autorité parentale Monaco" |
| 11 | Contentieux construction: garanties | Civil | "garanties construction Monaco" |
| 12 | Arbitrage international: place Monaco | Arbitrage | "arbitrage Monaco avocat" |

---

## 4. SEO CONTENT STRATEGY

### 4.1 Primary Keywords (Target Page)
| Keyword | Volume (est.) | Difficulty | Target Page |
|---------|---------------|------------|-------------|
| avocat défenseur Monaco | 320/mo | Medium | Home |
| avocat Monaco | 1,200/mo | High | Home |
| avocat pénal Monaco | 180/mo | Medium | /expertise/penal |
| avocat civil Monaco | 150/mo | Medium | /expertise/civil |
| avocat commercial Monaco | 140/mo | Medium | /expertise/commercial |
| avocat famille Monaco | 110/mo | Low | /expertise/famille |
| avocat urgence Monaco | 90/mo | Low | /contact |
| avocat garde à vue Monaco | 70/mo | Low | /expertise/penal |
| divorce Monaco avocat | 200/mo | Medium | /expertise/famille |
| litige commercial Monaco | 80/mo | Low | /expertise/commercial |

### 4.2 Long-Tail Content Opportunities
- "comment choisir son avocat à Monaco"
- "honoraires avocat Monaco barème"
- "procédure divorce Monaco durée"
- "garde à vue Monaco droits"
- "référé urgence Monaco avocat"
- "avocat monégasque pour étranger"
- "cabinet avocat Monaco rue du Gabian"

### 4.3 Local SEO (Monaco-Specific)
- Google Business Profile: Complete + photos + posts
- Schema.org: LegalService + Person + LocalBusiness
- Directories: Annuaire Avocats.mc, PagesJaunes Monaco, Monaco Business Directory
- Citations: Consistent NAP (Name, Address, Phone)
- Reviews: Strategy for Google + Bar directory reviews

---

## 5. COPYWRITING GUIDELINES

### 5.1 Voice & Tone Parameters
| Parameter | Setting |
|-----------|---------|
| Formality | Professional but accessible (vous-form, not overly academic) |
| Technicality | Explain legal terms, avoid unnecessary jargon |
| Warmth | Human, empathetic, not corporate |
| Authority | Confident, specific, evidence-based |
| Urgency | Available when needed, not alarmist |

### 5.2 Do's & Don'ts
| Do | Don't |
|----|-------|
| "Je vous accompagne dans..." | "Le cabinet assure la prise en charge..." |
| "En droit pénal monégasque, la garde à vue..." | "Conformément à l'article 42-1 du CPP..." |
| "Honoraires transparents, devis gratuit" | "Tarifs sur demande" |
| "Réponse sous 24h ouvrées" | "Nous traiterons votre demande dans les meilleurs délais" |
| "Monaco, Cour d'Appel, Tribunal" | "Les juridictions compétentes" |

### 5.3 Standard Phrases (Approved)
- **Opening:** "Avocat-Défenseur au Barreau de Monaco, j'interviens..."
- **CTA:** "Parlons de votre situation. Premier échange gratuit."
- **Urgency:** "Disponible 24/7 pour les urgences pénales."
- **Trust:** "Inscrit au Barreau de Monaco n°[XX]. Assurance RCP à jour."
- **Languages:** "Échanges en français, anglais ou italien."

---

## 6. CONTENT PRODUCTION WORKFLOW

### 6.1 Roles
| Role | Responsibility |
|------|----------------|
| **Lawyer (Arnaud)** | Source of truth, review/approve all legal content |
| **Content Strategist** | Plan, keyword research, structure, SEO |
| **Copywriter** | Draft, refine, optimize for web |
| **Developer** | Implement in Sanity, structured data |
| **Designer** | Visual hierarchy, readability, components |

### 6.2 Production Process (Per Article)
```
1. IDEATION (Strategist + Lawyer)
   → Topic selection from calendar or news
   → Keyword validation
   → Angle approval

2. RESEARCH (Strategist)
   → Official sources (Journal de Monaco, Legimonaco, Dalloz)
   → Competitor content gap analysis
   → Client FAQ mining

3. DRAFTING (Copywriter)
   → Outline approval (Lawyer)
   → First draft (800-1500 words)
   → Internal review

4. LEGAL REVIEW (Lawyer)
   → Accuracy check
   → Tone alignment
   → Risk assessment

5. OPTIMIZATION (Strategist)
   → SEO: keywords, headings, meta, schema
   → Readability: Flesch-Kincaid ≥ 60
   → Structure: H1, H2, H3, bullets, short paragraphs

6. CMS ENTRY (Developer)
   → Sanity entry with all fields
   → Image optimization
   → Internal linking
   → Preview + approval

7. PUBLISH & PROMOTE
   → Schedule/publish
   → LinkedIn post (Lawyer)
   → Newsletter snippet
   → Google Business post
```

---

## 7. CONTENT GOVERNANCE

### 7.1 Review Schedule
| Content Type | Review Frequency | Owner |
|--------------|------------------|-------|
| Practice Areas | Quarterly | Lawyer |
| About/Bio | Semi-annually | Lawyer |
| Fees | Annually | Lawyer |
| Legal Updates | Per publication | Lawyer + Strategist |
| Contact Info | As needed | Lawyer |
| Legal Pages | Annually + law changes | Lawyer |

### 7.2 Quality Standards
- **Accuracy:** 100% legal accuracy verified by lawyer
- **Freshness:** No content older than 12 months without review
- **Completeness:** All pages have meta, schema, alt text
- **Accessibility:** WCAG 2.1 AA compliant copy
- **Consistency:** Terminology glossary maintained in Sanity

---

## 8. MULTILINGUAL CONTENT STRATEGY (Phase 2)

### 8.1 Translation Approach
| Language | Method | Priority Pages |
|----------|--------|----------------|
| English | Professional legal translation | Home, Expertise, About, Contact |
| Italian | Professional legal translation | Home, Expertise, Contact |

### 8.2 Localization (Not Just Translation)
- Currency: EUR (same)
- Date formats: DD/MM/YYYY (FR/IT), MM/DD/YYYY (EN)
- Legal references: Monaco law + EU/International equivalents
- Cultural nuances: Formality levels, address formats

---

## 9. CONTENT METRICS & KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| Organic traffic (month 6) | 500+ visits/mo | GA4 / Plausible |
| Contact form conversions | 15+/mo | Form submissions |
| Phone click-throughs | 30+/mo | Event tracking |
| Email clicks | 20+/mo | Event tracking |
| Avg. time on practice pages | > 2:00 | GA4 |
| Newsletter signups | 10+/mo | Sanity/Resend |
| Keyword rankings (top 10) | 15+ keywords | Search Console |
| Core Web Vitals | All green | Vercel/PageSpeed |

---

## 10. CONTENT CHECKLIST FOR LAUNCH

### Must-Have (MVP)
- [ ] Homepage hero + 3 expertise previews + about preview + testimonials + CTA
- [ ] 6-8 Practice area pages (full template)
- [ ] About page (complete bio, photo, credentials)
- [ ] Contact page (form + info + map + FAQ)
- [ ] 6 Legal update articles (2 per category)
- [ ] Mentions légales (Monaco-compliant)
- [ ] Politique confidentialité (RGPD)
- [ ] Politique cookies
- [ ] All meta titles/descriptions
- [ ] All schema markup
- [ ] Alt text for all images
- [ ] Internal linking map complete

### Nice-to-Have (Week 1-2 Post-Launch)
- [ ] Fee estimator tool
- [ ] Downloadable guides (PDF)
- [ ] Video intro (60s)
- [ ] Newsletter automation
- [ ] EN/IT versions of key pages

---

*This content strategy balances legal authority with client accessibility, SEO performance with ethical compliance, and launch readiness with long-term growth.*
# Technical Specification - Me Arnaud Cheynut Website
**Version:** 1.0 | **Date:** October 1, 2026

---

## 1. ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────────────────────┐
│                    NEXT.JS 14+ APP ROUTER                   │
├─────────────────────────────────────────────────────────────┤
│  Server Components (RSC)  │  Client Components (Interactive)│
│  ├─ Pages (SEO-critical)  │  ├─ Contact Form                │
│  ├─ Practice Areas        │  ├─ Language Switcher           │
│  ├─ Blog/Updates          │  ├─ Dark Mode Toggle            │
│  └─ Legal Pages           │  └─ Appointment Calendar        │
├─────────────────────────────────────────────────────────────┤
│  Data Layer: Sanity.io (Headless CMS)                       │
│  ├─ Structured Content (Portable Text)                      │
│  ├─ Image Pipeline (Auto-optimization)                      │
│  └─ Preview Mode (Draft content)                            │
├─────────────────────────────────────────────────────────────┤
│  Deployment: Vercel (Edge Network)                          │
│  ├─ ISR (Incremental Static Regeneration)                   │
│  ├─ Edge Functions (Forms, API)                             │
│  └─ Analytics (Vercel + Plausible)                          │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. TECH STACK

| Layer | Technology | Version | Rationale |
|-------|------------|---------|-----------|
| **Framework** | Next.js | 14.2+ | App Router, RSC, ISR, optimal SEO |
| **Language** | TypeScript | 5.4+ | Type safety, maintainability |
| **Styling** | Tailwind CSS | 3.4+ | Utility-first, design system |
| **UI Components** | shadcn/ui + Radix | Latest | Accessible, customizable |
| **CMS** | Sanity.io | v3 | Real-time, structured content |
| **Forms** | React Hook Form + Zod | Latest | Validation, type-safe |
| **Email** | Resend | Latest | Transactional, deliverability |
| **Analytics** | Vercel Analytics + Plausible | Latest | Privacy-first, no cookies |
| **Deployment** | Vercel | - | Edge network, preview deployments |
| **Domain** | Vercel/Cloudflare | - | DNS, SSL, CDN |

---

## 3. PROJECT STRUCTURE

```
arnaud-cheynut-website/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── team/
│   │   └── practice-areas/
│   ├── fonts/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml (generated)
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx              # Home
│   │   │   ├── expertise/
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx          # Practice areas index
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx      # Individual practice area
│   │   │   ├── a-propos/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── actualites/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── mentions-legales/
│   │   │   │   └── page.tsx
│   │   │   ├── politique-confidentialite/
│   │   │   │   └── page.tsx
│   │   │   └── honoraire/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts
│   │   │   └── newsletter/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── loading.tsx
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── PracticeAreasPreview.tsx
│   │   │   ├── AboutPreview.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── CTASection.tsx
│   │   ├── expertise/
│   │   │   ├── PracticeAreaCard.tsx
│   │   │   ├── PracticeAreaGrid.tsx
│   │   │   └── ProcessTimeline.tsx
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ContactInfo.tsx
│   │   │   └── MapEmbed.tsx
│   │   ├── blog/
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostList.tsx
│   │   │   └── PostContent.tsx
│   │   └── common/
│   │       ├── SEO.tsx
│   │       ├── StructuredData.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Container.tsx
│   ├── lib/
│   │   ├── sanity/
│   │   │   ├── client.ts
│   │   │   ├── queries.ts
│   │   │   └── image.ts
│   │   ├── utils/
│   │   │   ├── cn.ts
│   │   │   ├── format.ts
│   │   │   └── validation.ts
│   │   └── constants/
│   │       ├── navigation.ts
│   │       ├── practice-areas.ts
│   │       └── metadata.ts
│   ├── hooks/
│   │   ├── useDarkMode.ts
│   │   ├── useLanguage.ts
│   │   └── useForm.ts
│   ├── types/
│   │   ├── sanity.ts
│   │   ├── components.ts
│   │   └── global.ts
│   └── styles/
│       └── globals.css
├── sanity/
│   ├── schemaTypes/
│   │   ├── practiceArea.ts
│   │   ├── post.ts
│   │   ├── testimonial.ts
│   │   ├── lawyer.ts
│   │   ├── settings.ts
│   │   └── index.ts
│   ├── sanity.config.ts
│   └── sanity.cli.ts
├── .env.example
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 4. SANITY CMS SCHEMAS

### 4.1 Lawyer Profile (Singleton)
```typescript
// sanity/schemaTypes/lawyer.ts
export default {
  name: 'lawyer',
  title: 'Profil Avocat',
  type: 'document',
  fields: [
    { name: 'firstName', title: 'Prénom', type: 'string' },
    { name: 'lastName', title: 'Nom', type: 'string' },
    { name: 'title', title: 'Titre', type: 'string', initialValue: 'Avocat-Défenseur' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phone', title: 'Téléphone', type: 'string' },
    { name: 'address', title: 'Adresse', type: 'text' },
    { name: 'barNumber', title: 'Numéro Barreau', type: 'string' },
    { name: 'admissionYear', title: 'Année Admission', type: 'number' },
    { name: 'languages', title: 'Langues', type: 'array', of: [{ type: 'string' }] },
    { name: 'education', title: 'Formation', type: 'array', of: [{ type: 'text' }] },
    { name: 'memberships', title: 'Membres', type: 'array', of: [{ type: 'string' }] },
    { name: 'bio', title: 'Biographie', type: 'array', of: [{ type: 'block' }] },
    { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
    { name: 'officePhotos', title: 'Photos Bureau', type: 'array', of: [{ type: 'image' }] },
    { name: 'socialLinks', title: 'Réseaux', type: 'object', fields: [
      { name: 'linkedin', type: 'url' },
      { name: 'twitter', type: 'url' },
    ]},
  ],
}
```

### 4.2 Practice Area
```typescript
// sanity/schemaTypes/practiceArea.ts
export default {
  name: 'practiceArea',
  title: 'Domaine d\'Expertise',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titre', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'shortDescription', title: 'Description courte', type: 'text', rows: 3 },
    { name: 'fullDescription', title: 'Description complète', type: 'array', of: [{ type: 'block' }] },
    { name: 'icon', title: 'Icône', type: 'string', description: 'Lucide icon name' },
    { name: 'processSteps', title: 'Étapes du processus', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'step', title: 'Étape', type: 'number' },
        { name: 'title', title: 'Titre', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
      ]
    }]},
    { name: 'faq', title: 'FAQ', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'question', title: 'Question', type: 'string' },
        { name: 'answer', title: 'Réponse', type: 'text' },
      ]
    }]},
    { name: 'order', title: 'Ordre d\'affichage', type: 'number' },
    { name: 'isFeatured', title: 'Mis en avant', type: 'boolean' },
  ],
}
```

### 4.3 Blog Post / Legal Update
```typescript
// sanity/schemaTypes/post.ts
export default {
  name: 'post',
  title: 'Actualité Juridique',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titre', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', title: 'Extrait', type: 'text', rows: 3 },
    { name: 'content', title: 'Contenu', type: 'array', of: [{ type: 'block' }] },
    { name: 'publishedAt', title: 'Date publication', type: 'datetime' },
    { name: 'category', title: 'Catégorie', type: 'string', options: {
      list: ['Droit pénal', 'Droit civil', 'Droit commercial', 'Droit de la famille', 'Procédure', 'Autre']
    }},
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'featuredImage', title: 'Image à la une', type: 'image' },
    { name: 'seo', title: 'SEO', type: 'object', fields: [
      { name: 'metaTitle', type: 'string' },
      { name: 'metaDescription', type: 'text' },
      { name: 'ogImage', type: 'image' },
    ]},
  ],
}
```

### 4.4 Testimonial
```typescript
// sanity/schemaTypes/testimonial.ts
export default {
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  fields: [
    { name: 'clientInitials', title: 'Initiales Client', type: 'string' },
    { name: 'clientType', title: 'Type Client', type: 'string', options: {
      list: ['Particulier', 'Entreprise', 'Confrère', 'International']
    }},
    { name: 'practiceArea', title: 'Domaine', type: 'reference', to: [{ type: 'practiceArea' }] },
    { name: 'content', title: 'Contenu', type: 'text', rows: 4 },
    { name: 'rating', title: 'Note', type: 'number', validation: Rule => Rule.min(1).max(5) },
    { name: 'date', title: 'Date', type: 'date' },
    { name: 'isPublished', title: 'Publié', type: 'boolean', initialValue: false },
  ],
}
```

### 4.5 Site Settings (Singleton)
```typescript
// sanity/schemaTypes/settings.ts
export default {
  name: 'settings',
  title: 'Paramètres du Site',
  type: 'document',
  fields: [
    { name: 'siteName', title: 'Nom du Site', type: 'string' },
    { name: 'siteDescription', title: 'Description', type: 'text' },
    { name: 'defaultLanguage', title: 'Langue par défaut', type: 'string', initialValue: 'fr' },
    { name: 'supportedLanguages', title: 'Langues supportées', type: 'array', of: [{ type: 'string' }] },
    { name: 'socialImage', title: 'Image Partage Social', type: 'image' },
    { name: 'googleAnalyticsId', title: 'GA4 ID', type: 'string' },
    { name: 'plausibleDomain', title: 'Plausible Domain', type: 'string' },
    { name: 'contactEmail', title: 'Email Contact', type: 'string' },
    { name: 'officeHours', title: 'Horaires', type: 'object', fields: [
      { name: 'weekdays', type: 'string' },
      { name: 'saturday', type: 'string' },
      { name: 'sunday', type: 'string' },
    ]},
    { name: 'emergencyPhone', title: 'Téléphone Urgence', type: 'string' },
    { name: 'legalNotices', title: 'Mentions Légales', type: 'array', of: [{ type: 'block' }] },
    { name: 'privacyPolicy', title: 'Politique Confidentialité', type: 'array', of: [{ type: 'block' }] },
    { name: 'cookiePolicy', title: 'Politique Cookies', type: 'array', of: [{ type: 'block' }] },
  ],
}
```

---

## 5. SEO & STRUCTURED DATA

### 5.1 JSON-LD Schema (LegalService)
```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Me Arnaud Cheynut - Avocat-Défenseur à Monaco",
  "description": "Avocat-Défenseur inscrit au Barreau de Monaco. Expertise en droit pénal, civil, commercial et de la famille. Défense devant toutes les juridictions monégasques.",
  "url": "https://arnaud-cheynut.mc",
  "telephone": "+377-97-98-06-80",
  "email": "contact@zabaldano.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "9, rue du Gabian - Phase III",
    "addressLocality": "Monaco",
    "postalCode": "98000",
    "addressCountry": "MC"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.7384,
    "longitude": 7.4246
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Monaco"
  },
  "availableLanguage": ["French", "English", "Italian"],
  "knowsAbout": [
    "Droit pénal", "Droit civil", "Droit commercial",
    "Droit de la famille", "Procédure d'urgence", "Référés"
  ],
  "sameAs": [
    "https://www.avocats.mc/fr/annuaire/avocat-d%C3%A9fenseur/cheynut-arnaud-28"
  ]
}
```

### 5.2 Person Schema (Lawyer)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Arnaud Cheynut",
  "jobTitle": "Avocat-Défenseur",
  "worksFor": {
    "@type": "LegalService",
    "name": "Cabinet Arnaud Cheynut"
  },
  "alumniOf": "Université [à compléter]",
  "knowsLanguage": ["French", "English", "Italian"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "9, rue du Gabian - Phase III",
    "addressLocality": "Monaco",
    "postalCode": "98000",
    "addressCountry": "MC"
  }
}
```

---

## 6. PERFORMANCE BUDGETS

| Metric | Target | Critical |
|--------|--------|----------|
| **LCP** | < 2.0s | ✅ |
| **INP** | < 200ms | ✅ |
| **CLS** | < 0.1 | ✅ |
| **FCP** | < 1.5s | ✅ |
| **TTFB** | < 600ms | ✅ |
| **Total JS** | < 170KB gzipped | ✅ |
| **Total CSS** | < 50KB gzipped | ✅ |
| **Images** | WebP/AVIF, responsive | ✅ |
| **Lighthouse** | 90+ all categories | ✅ |

---

## 7. ACCESSIBILITY REQUIREMENTS

- **WCAG 2.1 Level AA** minimum
- Semantic HTML5 structure
- Keyboard navigation for all interactive elements
- Focus indicators (visible, 3:1 contrast)
- Alt text for all images
- ARIA labels where needed
- Color contrast 4.5:1 (text), 3:1 (UI)
- Skip to main content link
- Language attributes (`lang="fr"`, `lang="en"`)
- Reduced motion support
- Screen reader tested (NVDA, VoiceOver)

---

## 8. MULTILINGUAL STRATEGY

### Supported Locales
| Locale | Code | Priority | Notes |
|--------|------|----------|-------|
| French | `fr` | Primary | Monaco official language |
| English | `en` | High | International clients |
| Italian | `it` | Medium | Regional proximity |

### Implementation
- **Routing:** `/fr/`, `/en/`, `/it/` (pathname-based)
- **Middleware:** Accept-Language header detection
- **CMS:** Sanity field-level translations
- **SEO:** hreflang tags, localized sitemaps

---

## 9. SECURITY & COMPLIANCE

### Headers (next.config.js)
```javascript
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://plausible.io https://api.resend.com;" }
]
```

### GDPR/Monaco Compliance
- Cookie consent banner (didomi or custom)
- Privacy policy page
- Data processing agreement (DPA) with vendors
- Right to access/delete endpoints
- Lawful basis for each data collection
- Data retention policy documented

---

## 10. DEPLOYMENT PIPELINE

### Environments
| Environment | URL | Purpose |
|-------------|-----|---------|
| **Development** | `dev-arnaud-cheynut.vercel.app` | Feature branches |
| **Preview** | `preview-arnaud-cheynut.vercel.app` | PR deployments |
| **Staging** | `staging-arnaud-cheynut.vercel.app` | Client review |
| **Production** | `arnaud-cheynut.mc` | Live site |

### CI/CD (GitHub Actions)
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm run test
      - run: npm run build
      - uses: vercel/action@v1
        if: github.ref == 'refs/heads/main'
```

---

## 11. MONITORING & ALERTING

| Tool | Purpose | Alert Threshold |
|------|---------|-----------------|
| Vercel Analytics | Performance, Core Web Vitals | LCP > 2.5s |
| Plausible | Privacy-friendly analytics | Traffic drops > 50% |
| Sentry | Error tracking | Any unhandled error |
| UptimeRobot | Uptime monitoring | Downtime > 1min |
| Sanity Webhooks | Content changes | Deploy trigger |

---

## 12. BACKUP & RECOVERY

- **Sanity:** Automatic daily exports, point-in-time recovery
- **Code:** GitHub (full history)
- **Vercel:** Automatic rollback on failed deploy
- **Domain:** Cloudflare DNS (DNSSEC enabled)
- **Documentation:** This spec + README in repo

---

## 13. HANDOFF CHECKLIST

### Pre-Launch
- [ ] All pages render without errors
- [ ] Forms submit successfully (test + production)
- [ ] Email notifications received
- [ ] Analytics tracking verified
- [ ] Sitemap.xml generated correctly
- [ ] Robots.txt allows indexing
- [ ] SSL certificate valid
- [ ] Domain DNS configured
- [ ] 301 redirects for any old URLs
- [ ] Favicon package complete
- [ ] OG images render on social platforms
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Accessibility audit passed (axe-core)
- [ ] Performance budget met
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsive (320px - 1920px)
- [ ] Print stylesheet works
- [ ] GDPR compliance verified
- [ ] Cookie consent functional
- [ ] Sanity preview mode works
- [ ] Client training completed

### Post-Launch (Week 1)
- [ ] Monitor Core Web Vitals daily
- [ ] Check form submissions
- [ ] Verify search console indexing
- [ ] Client feedback session
- [ ] Backup verification

---

*This specification serves as the single source of truth for development. Update version number with each change.*
# Me Arnaud Cheynut - Website Development Project
**Repository:** `arnaud-cheynut-website`
**Stack:** Next.js 14 + TypeScript + Tailwind + Sanity.io + Vercel
**Timeline:** 6-8 weeks to production

---

## 🚀 QUICK START

### Prerequisites
- Node.js 20+ (LTS)
- npm 10+ or pnpm 9+
- Sanity CLI: `npm i -g @sanity/cli`
- Vercel CLI: `npm i -g vercel`

### Installation
```bash
# Clone and install
git clone <repo-url>
cd arnaud-cheynut-website
pnpm install

# Environment setup
cp .env.example .env.local
# Edit .env.local with your keys

# Sanity setup
cd sanity
sanity install
sanity dev  # Runs on localhost:3333

# Next.js dev (in root)
pnpm dev    # Runs on localhost:3000
```

### Environment Variables (`.env.local`)
```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_write_token  # For webhooks/previews

# Vercel
VERCEL_TOKEN=your_token
VERCEL_ORG_ID=your_org
VERCEL_PROJECT_ID=your_project

# Email (Resend)
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=contact@zabaldano.com
FROM_EMAIL=noreply@arnaud-cheynut.mc

# Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=arnaud-cheynut.mc
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# App
NEXT_PUBLIC_SITE_URL=https://arnaud-cheynut.mc
NEXT_PUBLIC_DEFAULT_LOCALE=fr
```

---

## 📁 PROJECT STRUCTURE

```
arnaud-cheynut-website/
├── .github/workflows/deploy.yml     # CI/CD
├── public/                          # Static assets
│   ├── images/                      # Optimized images
│   ├── fonts/                       # Self-hosted fonts
│   └── favicon.ico
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── (public)/                # Route group - public pages
│   │   │   ├── layout.tsx           # Root layout
│   │   │   ├── page.tsx             # Home
│   │   │   ├── expertise/           # Practice areas
│   │   │   ├── a-propos/            # About
│   │   │   ├── contact/             # Contact
│   │   │   ├── actualites/          # Blog/Updates
│   │   │   ├── honoraire/           # Fees
│   │   │   ├── mentions-legales/    # Legal
│   │   │   ├── politique-confidentialite/
│   │   │   └── politique-cookies/
│   │   ├── api/                     # API routes
│   │   │   ├── contact/route.ts     # Contact form
│   │   │   └── newsletter/route.ts  # Newsletter
│   │   ├── globals.css              # Global styles + Tailwind
│   │   ├── layout.tsx               # Root layout (providers)
│   │   ├── not-found.tsx            # 404
│   │   └── loading.tsx              # Loading UI
│   ├── components/
│   │   ├── ui/                      # shadcn/ui primitives
│   │   ├── layout/                  # Header, Footer, Nav
│   │   ├── home/                    # Homepage sections
│   │   ├── expertise/               # Practice area components
│   │   ├── contact/                 # Form, map, info
│   │   ├── blog/                    # Article components
│   │   └── common/                  # SEO, StructuredData, Button
│   ├── lib/
│   │   ├── sanity/                  # Sanity client, queries, images
│   │   ├── utils/                   # cn, formatting, validation
│   │   └── constants/               # Navigation, practice areas
│   ├── hooks/                       # Custom React hooks
│   ├── types/                       # TypeScript types
│   └── styles/                      # Additional styles
├── sanity/                          # Sanity Studio
│   ├── schemaTypes/                 # Content schemas
│   ├── sanity.config.ts
│   └── sanity.cli.ts
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .env.example
```

---

## 🛠️ DEVELOPMENT COMMANDS

```bash
# Development
pnpm dev              # Next.js dev server
pnpm dev:https        # With local HTTPS (mkcert)

# Sanity
cd sanity && sanity dev        # Studio on :3333
cd sanity && sanity deploy     # Deploy Studio
cd sanity && sanity graphql deploy  # Update GraphQL API

# Code Quality
pnpm lint             # ESLint
pnpm typecheck        # TypeScript
pnpm format           # Prettier
pnpm test             # Vitest + React Testing Library
pnpm test:watch       # Watch mode
pnpm test:coverage    # Coverage report

# Build
pnpm build            # Production build
pnpm start            # Start production server
pnpm analyze          # Bundle analyzer

# Deployment
vercel                # Preview deploy
vercel --prod         # Production deploy
```

---

## 🎨 DESIGN SYSTEM IMPLEMENTATION

### Tailwind Config Extensions
```typescript
// tailwind.config.ts - Key extensions
theme: {
  extend: {
    colors: {
      navy: { 900: '#0B1D3A', 800: '#142D5E', 700: '#1E3F7A', 600: '#2A5A9E' },
      gold: { 500: '#C8A850', 400: '#D4B86E', 600: '#B09040', 100: '#F5EBD9' },
      neutral: { /* warm grays 50-950 */ }
    },
    fontFamily: {
      display: ['Fraunces', 'Georgia', 'serif'],
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
    },
    spacing: { /* 4px base scale */ },
    borderRadius: { /* sm through 2xl, full */ },
    boxShadow: { /* xs through 2xl, gold, focus-ring */ },
    animation: { /* fadeInUp, drawLine, pulse */ },
  }
}
```

### CSS Variables (globals.css)
```css
:root {
  --color-navy-900: #0B1D3A;
  --color-gold-500: #C8A850;
  /* ... all design tokens */
}

[data-theme="dark"] {
  /* Dark mode overrides */
}
```

---

## 📦 KEY LIBRARIES & WHY

| Library | Purpose | Version |
|---------|---------|---------|
| `next@14.2+` | Framework (App Router, RSC, ISR) | Latest |
| `sanity@^3` | Headless CMS, real-time preview | Latest |
| `next-sanity@^9` | Next.js + Sanity integration | Latest |
| `tailwindcss@^3.4` | Utility-first styling | Latest |
| `@radix-ui/*` | Accessible UI primitives | Latest |
| `class-variance-authority` | Component variants | Latest |
| `clsx` + `tailwind-merge` | Class composition | Latest |
| `react-hook-form@^7` | Form handling | Latest |
| `@hookform/resolvers/zod` | Zod validation | Latest |
| `zod@^3` | Schema validation | Latest |
| `resend@^3` | Transactional email | Latest |
| `lucide-react@^0.4` | Icon system | Latest |
| `date-fns@^3` | Date formatting (i18n) | Latest |
| `next-intl@^3` | Internationalization | Latest |
| `plausible-tracker` | Privacy analytics | Latest |

---

## ♿ ACCESSIBILITY CHECKLIST (CI Enforced)

```bash
# Runs in CI via GitHub Actions
pnpm test:a11y    # axe-core tests
```

- [ ] All pages pass axe-core (WCAG 2.1 AA)
- [ ] Keyboard navigation complete
- [ ] Focus indicators visible
- [ ] Color contrast ≥ 4.5:1
- [ ] Semantic HTML structure
- [ ] ARIA labels where needed
- [ ] Skip link present
- [ ] Language attributes correct
- [ ] Reduced motion respected

---

## 🔍 SEO IMPLEMENTATION

### Per-Page SEO Component
```typescript
// src/components/common/SEO.tsx
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  structuredData?: object;
}
```

### Structured Data (JSON-LD)
- **LegalService** on all practice pages
- **Person** on About page
- **FAQPage** on practice area pages
- **Article** on blog posts
- **LocalBusiness** on Contact page
- **BreadcrumbList** on all deep pages

### Technical SEO
- `next-sitemap` generates `sitemap.xml` + `robots.txt`
- `next-intl` handles hreflang for FR/EN/IT
- Canonical URLs on all pages
- Open Graph + Twitter Cards
- JSON-LD in `<head>` via `Script` component

---

## 🌐 INTERNATIONALIZATION (i18n)

### Locale Structure
```
locales/
├── fr.json    # French (default)
├── en.json    # English
└── it.json    # Italian
```

### Routing
- `/` → redirects to `/fr/`
- `/fr/...` → French
- `/en/...` → English
- `/it/...` → Italian

### Middleware (`middleware.ts`)
- Detects `Accept-Language` header
- Redirects root to preferred locale
- Preserves locale on navigation

---

## 📧 CONTACT FLOW

```
User submits form
       │
       ▼
Client validation (Zod)
       │
       ▼
POST /api/contact
       │
       ▼
Server validation + Rate limit
       │
       ▼
Resend API → Email to lawyer
       │
       ▼
Sanity: Create "ContactSubmission" document
       │
       ▼
Auto-reply to user (confirmation)
       │
       ▼
Return success → Toast notification
```

### Rate Limiting
- 5 submissions/hour per IP
- hCaptcha invisible on suspicious activity
- Sanity webhook → Slack notification (optional)

---

## 🖼️ IMAGE OPTIMIZATION

### Sanity Image Pipeline
```typescript
// src/lib/sanity/image.ts
import { createImageUrlBuilder } from 'next-sanity/image'

const builder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
})

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
    .width(1200)
    .height(800)
    .fit('crop')
    .auto('format')
    .quality(85)
}
```

### Next.js Image Component
```tsx
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'

<Image
  src={urlFor(post.featuredImage).url()}
  alt={post.title}
  width={1200}
  height={630}
  priority={isHero}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  placeholder="blur"
  blurDataURL={urlFor(post.featuredImage).width(20).height(10).url()}
/>
```

---

## 🚀 DEPLOYMENT PIPELINE

### GitHub Actions (`.github/workflows/deploy.yml`)
```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - checkout
      - setup-node
      - pnpm install --frozen-lockfile
      - pnpm lint
      - pnpm typecheck
      - pnpm test
      - pnpm test:a11y

  build:
    needs: quality
    runs-on: ubuntu-latest
    steps:
      - checkout
      - setup-node
      - pnpm install --frozen-lockfile
      - pnpm build
      - vercel-action (preview)

  deploy-production:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - vercel-action --prod
```

### Vercel Configuration
- **Framework Preset:** Next.js
- **Build Command:** `pnpm build`
- **Output Directory:** `.next`
- **Install Command:** `pnpm install --frozen-lockfile`
- **Environment Variables:** Set in Vercel dashboard
- **Domains:** `arnaud-cheynut.mc` + `www.arnaud-cheynut.mc`
- **Edge Functions:** Enabled for API routes
- **ISR:** 60s revalidation for CMS content

---

## 🧪 TESTING STRATEGY

### Unit Tests (Vitest)
```bash
# Component tests
src/components/**/*.test.tsx

# Utility tests
src/lib/**/*.test.ts

# Hook tests
src/hooks/**/*.test.ts
```

### Integration Tests
- Contact form submission flow
- Sanity webhook handling
- Language switching
- Dark mode persistence

### E2E Tests (Playwright - Phase 2)
- Critical user journeys
- Cross-browser verification
- Mobile viewport testing

---

## 📊 MONITORING & OBSERVABILITY

### Vercel Analytics (Built-in)
- Core Web Vitals (LCP, INP, CLS)
- Page views, unique visitors
- Top pages, referrers
- Geographic distribution

### Plausible (Privacy-First)
- No cookies, GDPR compliant
- Custom events: `contact_form_submit`, `phone_click`, `email_click`
- Goal tracking: Conversion funnel

### Sentry (Error Tracking)
```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
})
```

### Uptime Monitoring
- UptimeRobot: 1-min checks
- Alerts: Email + Slack + SMS
- Status page: status.arnaud-cheynut.mc (Phase 2)

---

## 🔐 SECURITY CHECKLIST

- [ ] CSP headers configured
- [ ] HSTS enabled (Vercel default)
- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
- [ ] Referrer-Policy: origin-when-cross-origin
- [ ] Permissions-Policy restrictive
- [ ] Sanity API tokens rotate quarterly
- [ ] Resend API keys restricted to domain
- [ ] Form rate limiting active
- [ ] hCaptcha on forms
- [ ] Sanity webhook signatures verified
- [ ] Dependencies scanned (Dependabot)
- [ ] No secrets in repo (git-secrets)

---

## 📝 CONTENT MANAGEMENT (Sanity Studio)

### Studio Access
- URL: `https://arnaud-cheynut.sanity.studio` (or custom domain)
- Auth: Google/GitHub SSO
- Roles: Admin (dev), Editor (lawyer/assistant)

### Content Workflow
1. **Draft** → Editor creates/edits
2. **Review** → Lawyer approves (comment + approve)
3. **Publish** → Auto-deploys via webhook
4. **Schedule** → Future publish dates supported

### Preview Mode
- `localhost:3000/api/preview?secret=<token>&slug=<slug>`
- Vercel Preview Mode toolbar
- Real-time content updates without rebuild

---

## 🎯 LAUNCH CHECKLIST

### Pre-Launch (T-1 week)
- [ ] All pages render error-free
- [ ] Contact form tested (dev + staging + prod)
- [ ] Email delivery verified (inbox + spam)
- [ ] Analytics events firing
- [ ] Sitemap.xml valid
- [ ] Robots.txt correct
- [ ] SSL certificate valid (Vercel auto)
- [ ] Domain DNS configured (A + CNAME)
- [ ] 301 redirects for any legacy URLs
- [ ] Favicon package complete (all sizes)
- [ ] OG images render (test on social)
- [ ] Structured data validates (Google Rich Results)
- [ ] Accessibility audit passed (axe-cli)
- [ ] Performance budget met (Lighthouse CI)
- [ ] Cross-browser tested (Chrome, FF, Safari, Edge)
- [ ] Mobile responsive (320-1920px)
- [ ] Print stylesheet works
- [ ] GDPR compliance verified
- [ ] Cookie consent functional
- [ ] Sanity preview mode works
- [ ] Client training session completed

### Launch Day
- [ ] DNS cutover (low TTL)
- [ ] Vercel production deploy
- [ ] Verify live site
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster
- [ ] Monitor error rates (Sentry)
- [ ] Monitor Core Web Vitals (Vercel)
- [ ] Test contact form live
- [ ] Announce on LinkedIn (lawyer profile)

### Post-Launch (Week 1)
- [ ] Daily CWV monitoring
- [ ] Search Console indexing check
- [ ] Form submission verification
- [ ] Client feedback session
- [ ] Backup verification (Sanity export)
- [ ] Documentation handoff

---

## 📚 DOCUMENTATION REFERENCES

| Document | Location |
|----------|----------|
| Technical Specification | `/specs/technical-spec.md` |
| Design System | `/specs/design-system.md` |
| Content Strategy | `/docs/content-strategy.md` |
| Competitor Analysis | `/competitor-analysis/competitor-analysis.md` |
| Master Profile | `/docs/profile-master.md` |
| Sanity Schema Docs | `/sanity/schemaTypes/README.md` |
| Component Storybook | `pnpm storybook` (if configured) |

---

## 🤝 CONTRIBUTING

### Branch Strategy
```
main ← develop ← feature/*
              ← fix/*
              ← chore/*
```

### Commit Convention (Conventional Commits)
```
feat: add practice area process timeline
fix: contact form validation error message
chore: update dependencies
docs: update deployment checklist
refactor: extract SEO component
perf: optimize hero image loading
test: add contact form integration tests
```

### PR Requirements
- [ ] Passes all CI checks
- [ ] TypeScript strict mode clean
- [ ] Tests added/updated
- [ ] Accessibility verified
- [ ] Design system compliance
- [ ] Documentation updated
- [ ] Reviewed by 1+ team member

---

## 📞 SUPPORT & CONTACTS

| Role | Name | Contact |
|------|------|---------|
| **Project Lead** | [Your Name] | [email] |
| **Technical Lead** | [Dev Name] | [email] |
| **Designer** | [Design Name] | [email] |
| **Content Strategist** | [Content Name] | [email] |
| **Client (Lawyer)** | Me Arnaud Cheynut | contact@zabaldano.com |

---

## 📄 LICENSE & LEGAL

- **Code:** Proprietary - All rights reserved
- **Design:** Proprietary - Client owned
- **Content:** Client owned - Me Arnaud Cheynut
- **Sanity Data:** Client owned - Exportable anytime
- **Third-party:** MIT/Apache/BSD per package.json

---

*This README is the developer's single source of truth. Keep it updated.*
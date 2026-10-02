# Design System - Me Arnaud Cheynut Website
**Version:** 1.0 | **Date:** October 1, 2026

---

## 1. BRAND IDENTITY

### 1.1 Brand Personality
| Attribute | Expression |
|-----------|------------|
| **Professional** | Clean, structured, authoritative |
| **Approachable** | Warm, human, accessible |
| **Modern** | Contemporary, not trendy |
| **Trustworthy** | Consistent, transparent, reliable |
| **Monaco-native** | Subtle local references, sophisticated |

### 1.2 Brand Voice
- **Tone:** Professional yet conversational
- **Language:** Clear, jargon-free where possible
- **Perspective:** Client-first, solution-oriented
- **Values:** Excellence, integrity, proximity, reactivity

---

## 2. COLOR PALETTE

### 2.1 Primary Colors
```css
/* Monaco Navy - Authority, Trust, Depth */
--color-navy-900: #0B1D3A;  /* Primary dark - headers, footers */
--color-navy-800: #142D5E;  /* Cards, secondary backgrounds */
--color-navy-700: #1E3F7A;  /* Hover states, borders */
--color-navy-600: #2A5A9E;  /* Accent links, focus rings */

/* Monaco Gold - Prestige, Excellence, Warmth */
--color-gold-500: #C8A850;  /* Primary accent - CTAs, highlights */
--color-gold-400: #D4B86E;  /* Hover states */
--color-gold-600: #B09040;  /* Active/pressed states */
--color-gold-100: #F5EBD9;  /* Subtle backgrounds, badges */
```

### 2.2 Neutral Colors
```css
/* Warm Grays - Sophisticated, not cold */
--color-neutral-50:  #FAFAF9;   /* Page background */
--color-neutral-100: #F5F5F4;   /* Card backgrounds */
--color-neutral-200: #E7E5E4;   /* Borders, dividers */
--color-neutral-300: #D6D3D1;   /* Disabled states */
--color-neutral-400: #A8A29E;   /* Placeholder text */
--color-neutral-500: #78716C;   /* Secondary text */
--color-neutral-600: #57534E;   /* Body text */
--color-neutral-700: #44403C;   /* Headings */
--color-neutral-800: #292524;   /* Dark headings */
--color-neutral-900: #1C1917;   /* Near black */
--color-neutral-950: #0C0A09;   /* Pure dark mode */
```

### 2.3 Semantic Colors
```css
--color-success: #059669;   /* Emerald-600 */
--color-success-bg: #ECFDF5;
--color-warning: #D97706;   /* Amber-600 */
--color-warning-bg: #FFFBEB;
--color-error: #DC2626;     /* Red-600 */
--color-error-bg: #FEF2F2;
--color-info: #0284C7;      /* Sky-600 */
--color-info-bg: #F0F9FF;
```

### 2.4 Dark Mode Variants
```css
[data-theme="dark"] {
  --color-bg-primary: #0C0A09;
  --color-bg-secondary: #1C1917;
  --color-bg-tertiary: #292524;
  --color-text-primary: #FAFAF9;
  --color-text-secondary: #D6D3D1;
  --color-text-muted: #A8A29E;
  --color-border: #44403C;
  --color-navy-900: #F5EBD9;  /* Gold becomes primary in dark */
  --color-gold-500: #D4B86E;
}
```

---

## 3. TYPOGRAPHY

### 3.1 Font Stack
```css
/* Display/Headlines - Elegant, authoritative serif */
--font-display: 'Fraunces', 'Georgia', serif;
/* Supports: Variable weight 100-900, optical sizing */

/* Body/UI - Clean, readable sans-serif */
--font-sans: 'Inter', 'system-ui', sans-serif;
/* Supports: Variable weight 100-900, excellent readability */

/* Monospace - Code, references */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### 3.2 Type Scale
| Token | Size (rem) | Size (px) | Line Height | Weight | Use Case |
|-------|------------|-----------|-------------|--------|----------|
| `--text-display-xl` | 4.5rem | 72px | 1.1 | 700 | Hero headline (desktop) |
| `--text-display-lg` | 3.5rem | 56px | 1.15 | 700 | Hero headline (mobile) |
| `--text-display-md` | 2.5rem | 40px | 1.2 | 600 | Section headlines |
| `--text-display-sm` | 2rem | 32px | 1.25 | 600 | Card headlines |
| `--text-heading-xl` | 1.5rem | 24px | 1.3 | 600 | H1 in content |
| `--text-heading-lg` | 1.25rem | 20px | 1.35 | 600 | H2 |
| `--text-heading-md` | 1.125rem | 18px | 1.4 | 600 | H3 |
| `--text-heading-sm` | 1rem | 16px | 1.45 | 600 | H4 |
| `--text-body-lg` | 1.125rem | 18px | 1.7 | 400 | Lead paragraphs |
| `--text-body` | 1rem | 16px | 1.7 | 400 | Body text |
| `--text-body-sm` | 0.875rem | 14px | 1.6 | 400 | Secondary text |
| `--text-caption` | 0.75rem | 12px | 1.5 | 500 | Labels, metadata |
| `--text-button` | 0.875rem | 14px | 1 | 600 | Buttons, CTAs |

### 3.3 Responsive Type Scale (Fluid)
```css
/* Using clamp() for fluid typography */
--text-display-xl: clamp(2.5rem, 5vw + 1rem, 4.5rem);
--text-display-lg: clamp(2rem, 4vw + 0.5rem, 3.5rem);
--text-display-md: clamp(1.75rem, 3vw + 0.5rem, 2.5rem);
--text-body: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);
```

---

## 4. SPACING SYSTEM

### 4.1 Base Unit: 4px (0.25rem)
```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### 4.2 Layout Spacing
```css
--container-padding: clamp(1rem, 5vw, 3rem);
--container-max: 72rem;        /* 1152px */
--container-wide: 88rem;       /* 1408px */
--section-gap: clamp(3rem, 8vw, 6rem);
--card-gap: clamp(1.5rem, 3vw, 2rem);
```

---

## 5. BORDER RADIUS

```css
--radius-none: 0;
--radius-sm: 0.25rem;    /* 4px - buttons, inputs */
--radius-md: 0.5rem;     /* 8px - cards, dropdowns */
--radius-lg: 0.75rem;    /* 12px - modals, panels */
--radius-xl: 1rem;       /* 16px - hero elements */
--radius-2xl: 1.5rem;    /* 24px - featured cards */
--radius-full: 9999px;   /* Pills, badges, avatars */
```

---

## 6. SHADOWS & ELEVATION

```css
/* Subtle, sophisticated shadows - not Material Design heavy */
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.03);
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.08);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.08);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.15);

/* Gold accent shadow for primary CTAs */
--shadow-gold: 0 4px 14px 0 rgb(200 168 80 / 0.35);
--shadow-gold-hover: 0 8px 25px -5px rgb(200 168 80 / 0.45);

/* Focus ring */
--focus-ring: 0 0 0 3px rgb(200 168 80 / 0.4);
```

---

## 7. COMPONENT SPECIFICATIONS

### 7.1 Buttons

#### Primary (Gold)
```css
.btn-primary {
  background: var(--color-gold-500);
  color: var(--color-navy-900);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  box-shadow: var(--shadow-gold);
}
.btn-primary:hover {
  background: var(--color-gold-400);
  box-shadow: var(--shadow-gold-hover);
  transform: translateY(-1px);
}
.btn-primary:active {
  background: var(--color-gold-600);
  transform: translateY(0);
}
```

#### Secondary (Navy Outline)
```css
.btn-secondary {
  background: transparent;
  color: var(--color-navy-900);
  border: 2px solid var(--color-navy-900);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}
.btn-secondary:hover {
  background: var(--color-navy-900);
  color: white;
}
```

#### Ghost (Minimal)
```css
.btn-ghost {
  background: transparent;
  color: var(--color-navy-700);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  transition: all 0.15s ease;
}
.btn-ghost:hover {
  background: var(--color-neutral-100);
  color: var(--color-navy-900);
}
```

### 7.2 Cards

#### Practice Area Card
```css
.practice-card {
  background: white;
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.practice-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--color-gold-500);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.practice-card:hover {
  border-color: var(--color-neutral-300);
  box-shadow: var(--shadow-xl);
  transform: translateY(-4px);
}
.practice-card:hover::before {
  transform: scaleX(1);
}
```

#### Testimonial Card
```css
.testimonial-card {
  background: var(--color-neutral-50);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  border-left: 4px solid var(--color-gold-500);
}
```

### 7.3 Form Elements
```css
.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: var(--text-body);
  color: var(--color-neutral-900);
  background: white;
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--radius-md);
  transition: all 0.15s ease;
}
.form-input:focus {
  outline: none;
  border-color: var(--color-gold-500);
  box-shadow: var(--focus-ring);
}
.form-input::placeholder {
  color: var(--color-neutral-400);
}
.form-input:invalid:not(:placeholder-shown) {
  border-color: var(--color-error);
}
.form-label {
  display: block;
  font-size: var(--text-body-sm);
  font-weight: 500;
  color: var(--color-neutral-700);
  margin-bottom: var(--space-2);
}
```

### 7.4 Navigation
```css
.nav-link {
  font-size: var(--text-body-sm);
  font-weight: 500;
  color: var(--color-neutral-600);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  transition: all 0.15s ease;
}
.nav-link:hover,
.nav-link.active {
  color: var(--color-navy-900);
  background: var(--color-gold-100);
}
```

---

## 8. ICONOGRAPHY

### 8.1 Icon Library: Lucide React
- Consistent 24x24px stroke-based icons
- 2px stroke weight
- Rounded caps and joins

### 8.2 Practice Area Icons Mapping
| Practice Area | Lucide Icon | Rationale |
|---------------|-------------|-----------|
| Droit pénal | `Scale` / `Gavel` | Justice, balance |
| Droit civil | `FileText` / `Contract` | Documents, agreements |
| Droit commercial | `Briefcase` / `Building2` | Business, corporate |
| Droit de la famille | `Users` / `Heart` | Family, relationships |
| Procédure d'urgence | `AlertTriangle` / `Zap` | Urgency, speed |
| Référés | `Clock` / `Timer` | Time-sensitive |
| Arbitrage | `Handshake` | Negotiation, resolution |
| Droit immobilier | `Home` / `Building` | Property |

---

## 9. IMAGERY STYLE

### 9.1 Photography Direction
- **Style:** Natural light, candid moments, professional but not staged
- **Color grading:** Warm, slightly desaturated, gold highlights
- **Subjects:** Lawyer in office, Monaco courthouse architecture, client meetings (anonymized), Rue du Gabian streetscape
- **Avoid:** Stock photo clichés (gavel closeups, blind justice statues)

### 9.2 Image Treatments
```css
/* Subtle gold overlay for hero images */
.hero-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    rgba(11, 29, 58, 0.8) 0%, 
    rgba(200, 168, 80, 0.15) 100%
  );
}

/* Portrait crop: 4:5 ratio */
/* Landscape crop: 16:9 ratio */
/* Card images: 4:3 ratio */
```

### 9.3 Required Image Assets
| Asset | Dimensions | Format | Usage |
|-------|------------|--------|-------|
| Hero background (desktop) | 1920x1080 | WebP/AVIF | Home hero |
| Hero background (mobile) | 750x1000 | WebP/AVIF | Home hero mobile |
| Lawyer portrait | 800x1000 | WebP/AVIF | About page, hero |
| Office interior 1 | 1200x800 | WebP/AVIF | About, contact |
| Office interior 2 | 1200x800 | WebP/AVIF | About, contact |
| Monaco courthouse | 1200x800 | WebP/AVIF | Hero alt, expertise |
| Practice area icons | 64x64 | SVG | Cards, navigation |
| OG/Twitter card | 1200x630 | WebP | Social sharing |
| Favicon set | 16-512px | PNG/ICO | Browser tabs |

---

## 10. LAYOUT GRID

### 10.1 Container Widths
```css
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.container-wide {
  max-width: var(--container-wide);
}
```

### 10.2 Grid System
```css
.grid {
  display: grid;
  gap: var(--card-gap);
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

@media (max-width: 1024px) {
  .lg\:grid-cols-3 { grid-template-columns: repeat(2, 1fr); }
  .lg\:grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: 1fr; }
  .md\:grid-cols-3 { grid-template-columns: 1fr; }
  .md\:grid-cols-4 { grid-template-columns: 1fr; }
}
```

---

## 11. ANIMATION & MOTION

### 11.1 Timing Functions
```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;
```

### 11.2 Key Animations
```css
/* Fade in up - for page sections */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Stagger children */
.stagger-children > * {
  animation: fadeInUp var(--duration-normal) var(--ease-out) both;
}
.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 100ms; }
.stagger-children > *:nth-child(3) { animation-delay: 200ms; }
.stagger-children > *:nth-child(4) { animation-delay: 300ms; }

/* Gold line draw */
@keyframes drawLine {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

/* Pulse for live indicators */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### 11.3 Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 12. RESPONSIVE BREAKPOINTS

```css
--bp-sm: 640px;   /* Large phones */
--bp-md: 768px;   /* Tablets */
--bp-lg: 1024px;  /* Laptops */
--bp-xl: 1280px;  /* Desktops */
--bp-2xl: 1536px; /* Large desktops */
```

### Breakpoint Usage
| Breakpoint | Target | Layout Changes |
|------------|--------|----------------|
| `< 640px` | Mobile | Single column, stacked nav, larger touch targets |
| `640-768px` | Large mobile | Two-column cards, side-by-side buttons |
| `768-1024px` | Tablet | Three-column grids, sidebar layouts |
| `1024-1280px` | Laptop | Full navigation, multi-column content |
| `> 1280px` | Desktop | Max container width, generous whitespace |

---

## 13. PRINT STYLESHEET

```css
@media print {
  .no-print { display: none !important; }
  header, footer, .cta-section { display: none !important; }
  main { padding: 0; }
  .container { max-width: 100%; padding: 0; }
  a { color: var(--color-neutral-900); text-decoration: underline; }
  a[href^="http"]::after { content: " (" attr(href) ")"; font-size: 0.8em; }
  .practice-card { break-inside: avoid; box-shadow: none; border: 1px solid #ccc; }
  body { font-size: 12pt; line-height: 1.5; color: #000; background: #fff; }
}
```

---

## 14. ACCESSIBILITY CHECKLIST (DESIGN)

- [ ] Color contrast ratios met (4.5:1 text, 3:1 UI)
- [ ] Focus states visible and distinct
- [ ] Touch targets ≥ 44x44px
- [ ] Text resizing to 200% works
- [ ] No color-only information
- [ ] Meaningful link text (no "cliquez ici")
- [ ] Heading hierarchy logical (h1→h2→h3)
- [ ] Form labels associated with inputs
- [ ] Error messages clear and specific
- [ ] Language attributes on page and changes
- [ ] Skip link at top of page
- [ ] ARIA landmarks (main, nav, aside, footer)

---

## 15. FIGMA FILE STRUCTURE

```
Figma File: "Arnaud Cheynut - Design System"
├── 📐 01 Foundations
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   ├── Shadows
│   └── Border Radius
├── 🧩 02 Components
│   ├── Buttons (Primary, Secondary, Ghost, states)
│   ├── Forms (Input, Textarea, Select, Checkbox, Radio)
│   ├── Cards (Practice, Testimonial, Blog, Lawyer)
│   ├── Navigation (Header, Footer, Mobile Menu)
│   ├── Feedback (Alert, Toast, Modal, Loading)
│   └── Media (Image, Video, Avatar, Icon)
├── 📄 03 Pages
│   ├── Home (Desktop, Tablet, Mobile)
│   ├── Expertise Index
│   ├── Practice Area Detail
│   ├── About
│   ├── Contact
│   ├── Blog/Updates Index
│   ├── Article Detail
│   ├── Mentions Légales
│   └── 404
├── 🌙 04 Dark Mode Variants
└── 📱 05 Responsive Breakpoints
```

---

*This design system ensures consistency across all touchpoints and enables rapid, quality development.*
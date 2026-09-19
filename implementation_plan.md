# Abd El Rahman — World-Class 3D Portfolio Website

## Overview

Build a complete, production-ready, visually stunning bilingual (EN/AR) personal portfolio website for Abd El Rahman — a Software Engineer & Mobile Application Developer. The site features 3D visuals, dark/light themes, RTL/LTR layouts, a full payment center, project gallery with Google Play links, and WhatsApp integration.

---

## Technology Stack

| Concern | Choice | Reason |
|---|---|---|
| Framework | **React + Vite** | Fast HMR, great ecosystem, easy deployment |
| Language | **TypeScript** | Type safety, maintainability |
| Styling | **Tailwind CSS** | Rapid responsive styling, utility-first |
| 3D | **Three.js + React Three Fiber + Drei** | Rich 3D scenes |
| Animation | **Framer Motion** | Smooth, accessible animations |
| i18n | **i18next + react-i18next** | Mature, RTL-ready |
| Icons | **Lucide React** | Clean, consistent icons |
| Form | **React Hook Form + Zod** | Validation |
| QR | **qrcode.react** | Client-side QR generation |
| Clipboard | **navigator.clipboard API** | Copy-to-clipboard |

---

## Project Structure

```
src/
├── components/
│   ├── ui/            # Button, Card, Modal, Badge, Toast, etc.
│   ├── layout/        # Navbar, Footer, FloatingButtons
│   ├── sections/      # Hero, About, Services, Projects, Experience, Skills, Contact
│   └── 3d/            # Three.js scenes and canvas components
├── data/              # config.ts — centralized content/config
├── hooks/             # useTheme, useLanguage, useScrollSpy, useCopyToClipboard
├── i18n/              # en.json, ar.json, i18n config
├── styles/            # globals.css, tailwind config
├── lib/               # utils.ts
└── App.tsx
```

---

## Proposed Changes

### [NEW] Project Bootstrap
#### [NEW] `package.json`, `vite.config.ts`, `tsconfig.json`, `tailwind.config.ts`
Bootstrap with Vite + React + TypeScript, configure Tailwind, add all dependencies.

---

### [NEW] Data Layer
#### [NEW] `src/data/config.ts`
Centralized config: personal info, profile image, services, projects (with Google Play links), skills, contact/payment details, social links.

---

### [NEW] Internationalization
#### [NEW] `src/i18n/en.json` — English translations
#### [NEW] `src/i18n/ar.json` — Arabic translations (full RTL)
#### [NEW] `src/i18n/index.ts` — i18next setup

---

### [NEW] Hooks
#### [NEW] `src/hooks/useTheme.ts` — dark/light mode with system preference + localStorage
#### [NEW] `src/hooks/useLanguage.ts` — language switching + RTL direction + localStorage
#### [NEW] `src/hooks/useScrollSpy.ts` — active nav section detection
#### [NEW] `src/hooks/useCopyToClipboard.ts` — clipboard with toast feedback

---

### [NEW] UI Components
#### [NEW] `src/components/ui/Button.tsx`
#### [NEW] `src/components/ui/Card.tsx`
#### [NEW] `src/components/ui/Modal.tsx`
#### [NEW] `src/components/ui/Toast.tsx`
#### [NEW] `src/components/ui/Badge.tsx`

---

### [NEW] Layout
#### [NEW] `src/components/layout/Navbar.tsx`
Sticky, glassy navbar with logo, nav links, language switcher, dark/light toggle, mobile hamburger, CTA.

#### [NEW] `src/components/layout/Footer.tsx`
#### [NEW] `src/components/layout/FloatingButtons.tsx`
WhatsApp floating button + Support/Payment floating button.

---

### [NEW] 3D Components
#### [NEW] `src/components/3d/HeroScene.tsx`
React Three Fiber canvas — floating laptop/device, particles, ambient lighting, mouse-follow. Falls back gracefully if WebGL unavailable.

#### [NEW] `src/components/3d/SkillsOrb.tsx`
Interactive 3D skill visualization (floating tags/orbs).

#### [NEW] `src/components/3d/ParticlesBackground.tsx`
Subtle animated particle field for section backgrounds.

---

### [NEW] Sections
#### [NEW] `src/components/sections/Hero.tsx`
Cinematic hero — real profile photo, 3D scene, animated headings, CTA buttons.

#### [NEW] `src/components/sections/About.tsx`
About content (EN/AR), highlight cards, qualifications.

#### [NEW] `src/components/sections/Services.tsx`
10 animated service cards with modals and "Request Service" CTA.

#### [NEW] `src/components/sections/Projects.tsx`
Gallery of 8 Google Play apps + Egyptian Financial Broker. Filter by category, modal detail view, Google Play badges.

#### [NEW] `src/components/sections/Experience.tsx`
Interactive professional journey timeline.

#### [NEW] `src/components/sections/Skills.tsx`
Category-based interactive skill cards.

#### [NEW] `src/components/sections/TechnicalServices.tsx`
"Professional App & Technical Services" pricing cards.

#### [NEW] `src/components/sections/Contact.tsx`
Premium contact form + WhatsApp buttons + copy number buttons.

#### [NEW] `src/components/sections/PaymentCenter.tsx`
Modal/bottom-sheet payment center — InstaPay (QR), IBAN, Binance (TRC20/BEP20), Vodafone Cash.

---

### [NEW] Root Files
#### [NEW] `src/App.tsx` — Root app, theme/lang providers, section assembly
#### [NEW] `src/main.tsx` — Entry point
#### [NEW] `index.html` — SEO meta tags, OG tags, favicon, fonts
#### [NEW] `src/styles/globals.css` — Design tokens, RTL utilities, custom scrollbar

---

## Key Technical Decisions

> [!IMPORTANT]
> **3D Performance**: Heavy Three.js scenes are lazy-loaded with React.lazy/Suspense. Mobile devices get simplified scenes. `prefers-reduced-motion` disables animations entirely.

> [!IMPORTANT]
> **Payment Center**: Payment details are ONLY visible inside the dedicated modal/bottom-sheet — never exposed on the main page.

> [!IMPORTANT]
> **Contact Form**: No backend is available. Form submissions open a pre-filled WhatsApp message with form data. A configuration point is clearly labeled for adding a real email service (EmailJS/Resend/Formspree).

> [!IMPORTANT]
> **Project Images**: Google Play store pages cannot be scraped at runtime. Each project uses a high-quality branded placeholder with the app icon color palette, or a configurable `imageUrl` field in `config.ts` for the owner to supply real screenshots.

> [!WARNING]
> **QR Code**: The InstaPay URL `https://ipn.eg/S/sirabdoosama/instapay/6CIRJ1` will be used to generate a QR code client-side using `qrcode.react`. The fallback is a direct clickable link.

---

## Open Questions

None — all required information has been supplied. Ready to build.

---

## Verification Plan

### Automated
- `npm run build` — TypeScript compilation + Vite production build must complete with no errors.

### Manual
- Desktop layout (all sections, both themes, both languages).
- Mobile layout (hamburger menu, responsive cards, payment bottom-sheet).
- Arabic RTL — full layout flip, typography.
- English LTR — default state.
- Copy buttons — clipboard + toast feedback.
- WhatsApp links — open correct wa.me URLs.
- Google Play badges — open correct Play Store URLs.
- Egyptian Financial Broker "Visit Website" — opens egbroker.web.app.
- InstaPay button — opens payment link in new tab.
- QR code renders from InstaPay URL.
- Payment Center modal — accessible from nav, floating button, contact section.
- Contact form — WhatsApp pre-fill on submit.
- Dark ↔ Light theme switch.
- Language EN ↔ AR switch.
- Reduced-motion: animations disabled.
- WebGL unavailable fallback: hero still renders.

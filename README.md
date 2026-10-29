# TRX Residences II — Landing Page

Single-page marketing landing page for **TRX Residences II**, a luxury residential development in Kuala Lumpur.

**Client:** Lendlease | **Built by:** UNCANNY

---

## Tech Stack

- Vanilla HTML / CSS / JavaScript — no frameworks, no bundler, no build step
- [GSAP 3.12.5](https://gsap.com/) (CDN) — page-load timeline, SplitText word reveals, modal transitions
- [intl-tel-input 26.7.6](https://intl-tel-input.com/) (CDN) — international phone input with country picker
- Custom fonts: **New Paris** (headings) and **Circular** (body) via `@font-face`

---

## Project Structure

```
trx-landing/
├── index.html                  — Main document
├── content.js                  — All copy, features, asset URLs, API endpoint
├── css/
│   ├── reset.css               — CSS reset
│   ├── variables.css           — Design tokens (colours, fonts, spacing)
│   ├── layout.css              — Hero, logo, headline, bottom bar
│   ├── modal.css               — Modal, form fields, states
│   └── animations.css          — Initial hidden states for GSAP
├── js/
│   ├── modal.js                — Open/close with GSAP slide + backdrop
│   ├── form.js                 — Validation, fetch POST, loading/success states
│   └── animations.js           — GSAP timelines (splash, hero, headline, modal)
├── assets/
│   ├── fonts/                  — Circular and New Paris font files
│   ├── img/
│   │   ├── hero-desktop.png    — Desktop hero (landscape, swapped via CSS at 768px+)
│   │   └── hero-mobile.png     — Mobile hero (portrait, default)
│   └── svg/
│       ├── chevron.svg
│       └── geometric-corner.svg
└── README.md
```

---

## Getting Started

No build step required — serve the files with any static server:

```bash
npx serve .
# or
python3 -m http.server 3000
```

Then open `http://localhost:3000` in your browser.

---

## Configuration

All copy and settings are centralised in `content.js`.

### API Endpoint

Before going live, replace the placeholder endpoint:

```javascript
apiEndpoint: "#",  // ← replace with confirmed endpoint
```

### Features Carousel

The bottom bar auto-rotates through features every 5 seconds. Features are defined as an array in `content.js`:

```javascript
features: [
  { number: "①", title: "Unrivalled Address", body: "..." },
  { number: "②", title: "Feature Two", body: "..." },
  // ...
],
```

---

## Key Features

| Feature | Description |
|---|---|
| **Hero** | Full-screen responsive background with dark overlay |
| **Splash Screen** | Logo hold → fade-out on page load |
| **Headline Reveal** | Per-word mask animation using GSAP SplitText |
| **Feature Carousel** | Auto-rotating features bar with word reveal/unreveal |
| **Registration Modal** | Slide-up (mobile) or slide-from-right (desktop) form |
| **Phone Input** | International phone formatting with country picker (defaults to Malaysia) |
| **Spam Protection** | Honeypot hidden field |
| **Policy Viewer** | Inline Privacy Policy & Website Disclaimer (English/Malay) |

---

## Registration Form

The modal form collects:

- **Full Name** — text input
- **Email** — validated email
- **Phone** — international format via intl-tel-input
- **Unit Type** — dropdown (1BR, 2BR, 3BR)
- **Consent** — two required checkboxes (Privacy Policy + Website Disclaimer)

Form behaviour:
- Real-time inline validation on blur
- JSON POST to configured API endpoint
- Loading spinner during submission
- Success message with 5-second auto-dismiss
- Full form reset on modal close

---

## Animations

| Element | Effect | Method |
|---|---|---|
| Splash | Logo hold → fade out | GSAP |
| Hero | Slides up from bottom | GSAP |
| Logo | Fades in | GSAP |
| Headline | Per-word mask reveal with stagger | GSAP + SplitText |
| Bottom bar | Fades in + slides up | GSAP |
| Modal (mobile) | Slides up from bottom | GSAP |
| Modal (desktop) | Slides in from right | GSAP |
| Backdrop | Opacity + 4px blur | CSS transition |

---

## Responsive Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 768px | Base styles, portrait hero |
| Tablet | ≥ 768px (+ min-height 500px) | Larger fonts, desktop hero image |
| Laptop | ≥ 1024px | Modal slides from right |
| Desktop | ≥ 1440px | Wider layout |
| XL Desktop | ≥ 1920px | Maximum content widths |

The 768px breakpoint includes a `min-height: 500px` guard to prevent tablet styles on landscape phones. Typography scales fluidly using `clamp()`.

---

## Assets Checklist

| File | Dimensions | Notes |
|---|---|---|
| `hero-desktop.png` | 1920×1080 | Main building photo, landscape |
| `hero-mobile.png` | 390×844 | Portrait crop of same photo |

---

## Pre-Launch Checklist

- [ ] Set `apiEndpoint` in `content.js` to the production URL
- [ ] Replace hero images with final assets
- [ ] Verify form submission against the live API
- [ ] Test across breakpoints and devices
# trx-landing-phase2
# trx-landing-phase2

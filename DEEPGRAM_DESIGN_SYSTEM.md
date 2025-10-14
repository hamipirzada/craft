# Deepgram Design System - Complete Specification

## Overview
This document provides a comprehensive breakdown of Deepgram's design system, extracted from their website (deepgram.com). This specification can be used to replicate their design aesthetic precisely.

---

## 1. COLOR PALETTE

### Primary Colors
```css
/* Background Colors */
--bg-primary: #101014;        /* Main dark background */
--bg-secondary: #0B0B0C;      /* Darker variant */
--bg-tertiary: #18181D;       /* Card/section background */

/* Text Colors */
--text-primary: #FFFFFF;      /* Pure white for headings */
--text-secondary: #EDEDF2;    /* Slightly off-white for body */
--text-muted: #A9A9AD;        /* Gray for secondary text */
--text-neutral: #CECED2;      /* Neutral gray for labels */

/* Accent Colors */
--accent-teal: #13EF95;       /* Primary teal accent */
--accent-blue: #149AFB;       /* Primary blue accent */
--accent-green: #13EF93;      /* Hover/interaction green */
--accent-mid: #378daf;        /* Gradient middle tone */
--accent-green-alt: #38edac;  /* Gradient end tone */

/* Border Colors */
--border-primary: #2C2C33;    /* Subtle dark gray borders */

/* Code/Terminal */
--code-bg: #1E2C3C;          /* Dark blue-gray for code blocks */
```

### Gradients
```css
/* Primary Brand Gradient */
background: linear-gradient(90deg, #149AFB -30.22%, #13EF95 78.93%);

/* Alternative Gradient (3-color) */
background: linear-gradient(90deg, #149AFB 0%, #378daf 50%, #38edac 100%);

/* Radial Gradients (for backgrounds) */
background: radial-gradient(circle at center, rgba(20, 154, 251, 0.1) 0%, transparent 70%);
```

---

## 2. TYPOGRAPHY

### Font Families
```css
/* Primary Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Heading Font */
font-family: 'Roobert', 'Inter', sans-serif;

/* Code/Monospace */
font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
```

### Font Sizes (Responsive)
```css
/* Headings */
h1 {
  font-size: 1.875rem;  /* 30px mobile */
  font-size: 4.5rem;    /* 72px desktop */
  line-height: 1.2;
  letter-spacing: -0.02em;
  font-weight: 700;
}

h2 {
  font-size: 1.5rem;    /* 24px mobile */
  font-size: 3rem;      /* 48px desktop */
  line-height: 1.3;
  letter-spacing: -0.01em;
  font-weight: 700;
}

h3 {
  font-size: 1.25rem;   /* 20px mobile */
  font-size: 2rem;      /* 32px desktop */
  line-height: 1.4;
  font-weight: 600;
}

h4 {
  font-size: 1.125rem;  /* 18px mobile */
  font-size: 1.5rem;    /* 24px desktop */
  line-height: 1.5;
  font-weight: 600;
}

/* Body Text */
body {
  font-size: 1rem;      /* 16px base */
  line-height: 1.75;
  font-weight: 400;
}

/* Small Text */
small, .text-small {
  font-size: 0.875rem;  /* 14px */
  line-height: 1.5rem;
}
```

### Font Weights
```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

---

## 3. NAVIGATION STRUCTURE

### Header Layout
```css
/* Header Container */
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(16, 16, 20, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #2C2C33;
}

/* Navigation Wrapper */
.nav-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.logo {
  height: 32px;
  width: auto;
}

/* Desktop Menu */
.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: #EDEDF2;
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #13EF93;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: block;
  }

  .nav-menu {
    display: none;
  }
}
```

### Navigation Items (Typical Structure)
- Products (with dropdown)
- Solutions
- Pricing
- Resources (with dropdown)
- Docs
- Company (with dropdown)
- Sign In
- Start Building (CTA button)

---

## 4. HERO SECTION DESIGN

### Hero Layout
```css
.hero-section {
  position: relative;
  padding: 8rem 1.5rem 6rem;
  overflow: hidden;
  background: #0B0B0C;
}

/* Background Effects */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

/* Starry Overlay */
.hero-stars {
  background-image: url('data:image/svg+xml,...');
  opacity: 0.3;
  animation: backgroundMove 5s infinite alternate;
}

/* Radial Gradients */
.hero-gradient-1 {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(20, 154, 251, 0.15) 0%, transparent 70%);
  filter: blur(80px);
  top: -300px;
  left: 50%;
  transform: translateX(-50%);
}

.hero-gradient-2 {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(19, 239, 149, 0.1) 0%, transparent 70%);
  filter: blur(60px);
  bottom: -200px;
  right: 10%;
}

/* Content Container */
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

/* Headline */
.hero-headline {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #FFFFFF 0%, #EDEDF2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Gradient Text Variant */
.hero-headline-gradient {
  background: linear-gradient(90deg, #149AFB 0%, #13EF95 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Subheadline */
.hero-subheadline {
  font-size: 1.25rem;
  color: #A9A9AD;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 2.5rem;
}

/* CTA Buttons */
.hero-cta-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 5rem 1.5rem 4rem;
  }

  .hero-headline {
    font-size: 2.5rem;
  }

  .hero-subheadline {
    font-size: 1.125rem;
  }
}
```

### Background Animation
```css
@keyframes backgroundMove {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, 20px);
  }
  100% {
    transform: translate(-20px, -20px);
  }
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```

---

## 5. BUTTON STYLES

### Primary Button
```css
.btn-primary {
  background: linear-gradient(90deg, #149AFB 0%, #13EF95 100%);
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(20, 154, 251, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(20, 154, 251, 0.4);
}

.btn-primary:active {
  transform: translateY(0);
}
```

### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: #EDEDF2;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #2C2C33;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: #13EF95;
}
```

### Ghost/Outline Button
```css
.btn-ghost {
  background: transparent;
  color: #13EF95;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #13EF95;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-ghost:hover {
  background: rgba(19, 239, 149, 0.1);
  box-shadow: 0 0 20px rgba(19, 239, 149, 0.3);
}
```

### Rounded Button Variant
```css
.btn-rounded {
  border-radius: 30px;
}
```

### Small Button
```css
.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  height: 34px;
}
```

### Large Button
```css
.btn-large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  height: 48px;
}
```

---

## 6. CARD COMPONENTS

### Feature Card
```css
.feature-card {
  background: #18181D;
  border: 1px solid #2C2C33;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #149AFB 0%, #13EF95 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: rgba(19, 239, 149, 0.5);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.feature-card:hover::before {
  opacity: 1;
}

/* Card Icon */
.feature-card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(20, 154, 251, 0.1) 0%, rgba(19, 239, 149, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-card-icon svg {
  width: 24px;
  height: 24px;
  color: #13EF95;
}

/* Card Title */
.feature-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 0.75rem;
}

/* Card Description */
.feature-card-description {
  font-size: 1rem;
  color: #A9A9AD;
  line-height: 1.6;
}
```

### Pricing Card
```css
.pricing-card {
  background: #101014;
  border: 1px solid #2C2C33;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.pricing-card.featured {
  border: 1px solid transparent;
  background: linear-gradient(#18181D, #18181D) padding-box,
              linear-gradient(90deg, #149AFB, #13EF95) border-box;
}

.pricing-card:hover {
  background: #18181D;
}

/* Pricing Header */
.pricing-header {
  margin-bottom: 1.5rem;
}

.pricing-plan-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
}

.pricing-plan-description {
  font-size: 0.875rem;
  color: #CECED2;
}

/* Pricing Price */
.pricing-price {
  font-size: 3rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
}

.pricing-price-period {
  font-size: 1rem;
  color: #A9A9AD;
  font-weight: 400;
}

/* Pricing Features */
.pricing-features {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex-grow: 1;
}

.pricing-feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #CECED2;
}

.pricing-feature-item svg {
  width: 20px;
  height: 20px;
  color: #13EF95;
  flex-shrink: 0;
  margin-top: 0.125rem;
}
```

### Grid Layout for Cards
```css
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (min-width: 992px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1280px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## 7. SPACING & GRID SYSTEM

### Container Widths
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.container-narrow {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.container-wide {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
}
```

### Section Spacing
```css
.section {
  padding: 6rem 0;
}

.section-large {
  padding: 8rem 0;
}

.section-small {
  padding: 4rem 0;
}

@media (max-width: 768px) {
  .section {
    padding: 4rem 0;
  }

  .section-large {
    padding: 5rem 0;
  }

  .section-small {
    padding: 3rem 0;
  }
}
```

### Spacing Scale
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;    /* 24px */
--space-6: 2rem;      /* 32px */
--space-7: 3rem;      /* 48px */
--space-8: 4rem;      /* 64px */
--space-9: 6rem;      /* 96px */
--space-10: 8rem;     /* 128px */
```

### Grid Gaps
```css
--gap-small: 1rem;
--gap-medium: 1.5rem;
--gap-large: 2rem;
--gap-xlarge: 3rem;
```

---

## 8. BORDER RADIUS SYSTEM

```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;
--radius-rounded: 30px;
```

---

## 9. SHADOW SYSTEM

```css
/* Subtle Shadow */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);

/* Default Shadow */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);

/* Medium Shadow */
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.15);

/* Large Shadow */
--shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.2);

/* Extra Large Shadow */
--shadow-2xl: 0 20px 40px rgba(0, 0, 0, 0.3);

/* Colored Shadows (for buttons/cards) */
--shadow-primary: 0 4px 12px rgba(20, 154, 251, 0.2);
--shadow-primary-hover: 0 6px 20px rgba(20, 154, 251, 0.4);
--shadow-accent: 0 4px 12px rgba(19, 239, 149, 0.2);

/* Glow Effects */
--glow-sm: 0 0 10px rgba(19, 239, 149, 0.3);
--glow-md: 0 0 20px rgba(19, 239, 149, 0.4);
--glow-lg: 0 0 30px rgba(19, 239, 149, 0.5);
```

---

## 10. ANIMATION PATTERNS

### Transitions
```css
/* Default Transitions */
--transition-fast: 0.15s ease;
--transition-base: 0.2s ease;
--transition-medium: 0.3s ease;
--transition-slow: 0.5s ease;

/* Transition Properties */
.animated-element {
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}
```

### Hover Effects
```css
/* Card Hover */
.hover-lift:hover {
  transform: translateY(-4px);
  transition: transform 0.3s ease;
}

/* 3D Tilt Effect */
.hover-tilt {
  transition: transform 0.3s ease;
}

.hover-tilt:hover {
  transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
}

/* Glow on Hover */
.hover-glow:hover {
  box-shadow: 0 0 20px rgba(19, 239, 149, 0.4);
  transition: box-shadow 0.3s ease;
}

/* Scale on Hover */
.hover-scale:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
```

### Scroll Animations (Fade In)
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

.fade-in-up.visible {
  opacity: 1;
}
```

### Loading Animations
```css
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Gradient Animation
```css
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animated-gradient {
  background: linear-gradient(90deg, #149AFB, #378daf, #13EF95);
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
}
```

---

## 11. FOOTER DESIGN

```css
.footer {
  background: #0B0B0C;
  border-top: 1px solid #2C2C33;
  padding: 4rem 0 2rem;
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Footer Grid */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .footer-grid {
    grid-template-columns: 2fr repeat(4, 1fr);
    gap: 2rem;
  }
}

/* Footer Column */
.footer-column h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: #A9A9AD;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: #13EF95;
}

/* Footer Brand */
.footer-brand {
  margin-bottom: 1.5rem;
}

.footer-logo {
  height: 32px;
  width: auto;
  margin-bottom: 1rem;
}

.footer-description {
  color: #A9A9AD;
  font-size: 0.9375rem;
  line-height: 1.6;
  max-width: 300px;
}

/* Footer Bottom */
.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid #2C2C33;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer-copyright {
  color: #A9A9AD;
  font-size: 0.875rem;
}

/* Social Links */
.footer-social {
  display: flex;
  gap: 1rem;
}

.footer-social a {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #2C2C33;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #A9A9AD;
  transition: all 0.2s ease;
}

.footer-social a:hover {
  background: rgba(19, 239, 149, 0.1);
  border-color: #13EF95;
  color: #13EF95;
}
```

### Typical Footer Structure
```
Footer
├── Brand Column
│   ├── Logo
│   └── Description
├── Product Column
│   ├── API
│   ├── Features
│   ├── Pricing
│   └── Documentation
├── Solutions Column
│   ├── Speech-to-Text
│   ├── Text-to-Speech
│   └── Audio Intelligence
├── Resources Column
│   ├── Blog
│   ├── Case Studies
│   ├── Guides
│   └── Support
├── Company Column
│   ├── About
│   ├── Careers
│   ├── Contact
│   └── Press
└── Footer Bottom
    ├── Copyright
    ├── Privacy Policy
    ├── Terms of Service
    └── Social Links
```

---

## 12. CODE/TERMINAL STYLING

```css
.code-block {
  background: #1E2C3C;
  border: 1px solid #2C2C33;
  border-radius: 12px;
  padding: 1.5rem;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #EDEDF2;
}

/* Syntax Highlighting Colors */
.code-keyword {
  color: #149AFB;
}

.code-string {
  color: #13EF95;
}

.code-comment {
  color: #A9A9AD;
  font-style: italic;
}

.code-function {
  color: #38edac;
}

.code-number {
  color: #149AFB;
}

/* Terminal Header */
.terminal-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #2C2C33;
}

.terminal-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-dot.red {
  background: #ff5f56;
}

.terminal-dot.yellow {
  background: #ffbd2e;
}

.terminal-dot.green {
  background: #27c93f;
}
```

---

## 13. FORM INPUT STYLING

```css
.input-field {
  background: #18181D;
  border: 1px solid #2C2C33;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: #FFFFFF;
  font-size: 1rem;
  font-family: inherit;
  width: 100%;
  transition: all 0.2s ease;
}

.input-field:focus {
  outline: none;
  border-color: #13EF95;
  box-shadow: 0 0 0 3px rgba(19, 239, 149, 0.1);
}

.input-field::placeholder {
  color: #A9A9AD;
}

/* Label */
.input-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #EDEDF2;
  margin-bottom: 0.5rem;
}

/* Textarea */
.textarea-field {
  min-height: 120px;
  resize: vertical;
}

/* Select */
.select-field {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23A9A9AD' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

/* Checkbox */
.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.checkbox-input {
  width: 20px;
  height: 20px;
  border: 1px solid #2C2C33;
  border-radius: 4px;
  background: #18181D;
  cursor: pointer;
}

.checkbox-input:checked {
  background: linear-gradient(90deg, #149AFB 0%, #13EF95 100%);
  border-color: #13EF95;
}
```

---

## 14. UNIQUE DESIGN ELEMENTS

### Gradient Border Technique
```css
.gradient-border {
  position: relative;
  background: #18181D;
  border-radius: 16px;
  padding: 2px;
}

.gradient-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  padding: 2px;
  background: linear-gradient(90deg, #149AFB, #13EF95);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.gradient-border-content {
  position: relative;
  background: #18181D;
  border-radius: 14px;
  padding: 2rem;
  z-index: 1;
}
```

### Glassmorphism Effect
```css
.glass-card {
  background: rgba(24, 24, 29, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

### Logo Grid with Grayscale
```css
.logo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  align-items: center;
}

.logo-item {
  filter: grayscale(100%) brightness(0.8);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.logo-item:hover {
  filter: grayscale(0%) brightness(1);
  opacity: 1;
}
```

### Gradient Text Effect
```css
.gradient-text {
  background: linear-gradient(90deg, #149AFB 0%, #13EF95 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

/* Animated Gradient Text */
.gradient-text-animated {
  background: linear-gradient(90deg, #149AFB, #378daf, #13EF95, #149AFB);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease infinite;
}
```

### Spotlight Effect
```css
.spotlight-container {
  position: relative;
  overflow: hidden;
}

.spotlight-container::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(19, 239, 149, 0.15) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.spotlight-container:hover::before {
  opacity: 1;
}
```

---

## 15. RESPONSIVE BREAKPOINTS

```css
/* Mobile First Approach */

/* Extra Small (Mobile) */
/* Default styles - no media query needed */

/* Small (Landscape phones, 576px and up) */
@media (min-width: 576px) {
  /* Styles */
}

/* Medium (Tablets, 768px and up) */
@media (min-width: 768px) {
  /* Styles */
}

/* Large (Desktops, 992px and up) */
@media (min-width: 992px) {
  /* Styles */
}

/* Extra Large (Large desktops, 1280px and up) */
@media (min-width: 1280px) {
  /* Styles */
}

/* 2K Screens (1440px and up) */
@media (min-width: 1440px) {
  /* Styles */
}
```

---

## 16. ACCESSIBILITY CONSIDERATIONS

```css
/* Focus States */
*:focus {
  outline: 2px solid #13EF95;
  outline-offset: 2px;
}

*:focus:not(:focus-visible) {
  outline: none;
}

*:focus-visible {
  outline: 2px solid #13EF95;
  outline-offset: 2px;
}

/* Skip to Content Link */
.skip-to-content {
  position: absolute;
  top: -100px;
  left: 0;
  background: #13EF95;
  color: #0B0B0C;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 0 0 8px 0;
  z-index: 9999;
}

.skip-to-content:focus {
  top: 0;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 17. UTILITY CLASSES

```css
/* Text Alignment */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }

/* Display */
.d-none { display: none; }
.d-block { display: block; }
.d-flex { display: flex; }
.d-grid { display: grid; }

/* Flex Utilities */
.flex-row { flex-direction: row; }
.flex-column { flex-direction: column; }
.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
.justify-end { justify-content: flex-end; }
.justify-between { justify-content: space-between; }
.align-start { align-items: flex-start; }
.align-center { align-items: center; }
.align-end { align-items: flex-end; }

/* Gap */
.gap-1 { gap: 0.25rem; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }
.gap-8 { gap: 2rem; }

/* Margins */
.m-0 { margin: 0; }
.mt-4 { margin-top: 1rem; }
.mb-4 { margin-bottom: 1rem; }
.my-4 { margin-top: 1rem; margin-bottom: 1rem; }
.mx-auto { margin-left: auto; margin-right: auto; }

/* Padding */
.p-0 { padding: 0; }
.p-4 { padding: 1rem; }
.pt-4 { padding-top: 1rem; }
.pb-4 { padding-bottom: 1rem; }
.py-4 { padding-top: 1rem; padding-bottom: 1rem; }

/* Width */
.w-full { width: 100%; }
.w-auto { width: auto; }

/* Max Width */
.max-w-sm { max-width: 24rem; }
.max-w-md { max-width: 28rem; }
.max-w-lg { max-width: 32rem; }
.max-w-xl { max-width: 36rem; }
.max-w-2xl { max-width: 42rem; }
```

---

## 18. IMPLEMENTATION NOTES

### Critical CSS Load Order
1. CSS Reset/Normalize
2. CSS Variables (Design Tokens)
3. Base Typography
4. Layout Components
5. UI Components
6. Utilities
7. Animations

### Font Loading Strategy
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Performance Considerations
- Use CSS transforms for animations (translateY, scale) instead of positioning
- Implement lazy loading for images below the fold
- Use `will-change` property sparingly for animated elements
- Implement proper image optimization and WebP format
- Use CSS containment for isolated components

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge - latest 2 versions)
- CSS Grid and Flexbox required
- CSS Custom Properties (variables) required
- Backdrop filter may need fallbacks for older browsers

---

## SUMMARY

This design system represents Deepgram's modern, dark-themed aesthetic with:

1. **Color Foundation**: Dark backgrounds (#101014, #0B0B0C) with vibrant teal-to-blue gradient accents
2. **Typography**: Inter and Roobert fonts with responsive scaling
3. **Spacing**: Consistent 8px grid system with responsive adjustments
4. **Components**: Elevated cards with gradient borders and hover effects
5. **Animations**: Subtle transitions, gradient animations, and lift effects
6. **Accessibility**: Focus states, reduced motion support, semantic HTML

The key to replicating this design is maintaining the balance between the dark, technological aesthetic and the vibrant gradient accents that create visual interest without overwhelming the content.

---

**Document Version**: 1.0
**Last Updated**: 2025-10-12
**Extracted From**: deepgram.com

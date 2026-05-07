# LaunchPad - Startup SaaS Landing Template

A premium React + Vite + Bootstrap landing page template designed for startups, SaaS products, and agencies.

## Features

- Modern multi-section landing page:
  - Navbar
  - Hero
  - Features
  - Pricing
  - About
  - Contact form
  - Final CTA
  - Footer
- Responsive layout (mobile/tablet/desktop)
- Violet premium theme
- Theme preset toggle (Light/Dark Violet)
- Interactive pricing cards
- Contact form validation + success feedback
- Clean component-based structure

## Tech Stack

- React
- Vite
- Bootstrap 5

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/
    Navbar.jsx
    Hero.jsx
    Features.jsx
    Pricing.jsx
    About.jsx
    Contact.jsx
    FinalCta.jsx
    Footer.jsx
  App.jsx
  App.css
  index.css
  main.jsx
```

## Customization Guide

### 1) Brand Name

Update brand text in:

- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`

### 2) Pricing Plans

Edit plan data in:

- `src/components/Pricing.jsx`

### 3) Theme Colors

Primary visual styling is controlled in:

- `src/App.css`
- `src/index.css`

### 4) Contact Details

Update support email and phone in:

- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

## Accessibility Notes

- Keyboard support for interactive pricing cards
- Visible focus states for interactive controls
- Reduced-motion support via CSS media query
- Contact form validation with clear inline errors

## Marketplace Readiness Checklist

- [x] Responsive design
- [x] Clean folder structure
- [x] Reusable components
- [x] Form validation
- [x] Theme presets
- [x] Production build passes

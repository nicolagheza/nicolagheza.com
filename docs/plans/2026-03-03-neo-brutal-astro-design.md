# Neo-Brutalism Personal Website — Astro + Tailwind

**Date**: 2026-03-03
**Status**: Approved

## Summary

Rebuild Nicola Gheza's personal portfolio as an Astro SSG project with Tailwind CSS 4, deploying to Netlify. The design follows a neo-brutalism aesthetic evolved from an existing HTML/CSS prototype: Syne/Outfit fonts, bright saturated colors, thick black borders, hard offset shadows, and bouncy interactive animations.

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Astro (SSG) | Content-driven, zero JS by default, fast builds |
| Styling | Tailwind CSS 4 | Utility-first, easy iteration, custom theme for neo-brutal tokens |
| Deployment | Netlify | User preference, free tier, git-based deploys |
| Rendering | Static (SSG) | No dynamic features needed, fastest possible delivery |
| Content management | TypeScript data files | Single source of truth, typed, easy to update |
| Design fidelity | Evolve from prototype | Keep DNA (colors, fonts, shadows), improve spacing/animations/a11y |

## Project Structure

```
new-website/
├── astro.config.mjs
├── tailwind.config.mjs          # (if needed, otherwise @theme in CSS)
├── tsconfig.json
├── netlify.toml
├── package.json
├── public/
│   ├── DeepFruit.pdf
│   └── favicon.svg
└── src/
    ├── layouts/
    │   └── BaseLayout.astro      # HTML shell, <head>, fonts, view transitions
    ├── components/
    │   ├── Navbar.astro           # Sticky nav: logo badge + page links + mobile hamburger
    │   ├── Footer.astro           # Footer: copyright + social links
    │   ├── MarqueeBanner.astro    # Infinite scrolling keyword banner
    │   ├── HeroSection.astro      # Homepage hero: name, badges, bio, CTA links, floating decos
    │   ├── ServiceCard.astro      # Props: title, icon, color, items[]
    │   ├── ExperienceItem.astro   # Props: number, role, company, location, dates, color
    │   ├── ProjectCard.astro      # Props: title, type, description, links[]
    │   └── SkillGroup.astro       # Props: category, skills[], color
    ├── pages/
    │   ├── index.astro            # Homepage
    │   ├── about.astro            # About + Skills + Experience
    │   ├── services.astro         # Services grid + CTA
    │   └── projects.astro         # Project cards
    ├── styles/
    │   └── global.css             # @import "tailwindcss" + @theme + keyframes + base resets
    └── data/
        └── content.ts             # All website text as typed TS objects
```

## Design System — Tailwind Theme Extension

### Colors
- `cream: #fef3e2` — page background
- `brutal-blue: #4361ee` — primary accent
- `brutal-pink: #f72585` — secondary accent
- `brutal-yellow: #ffd60a` — highlights, logo badge
- `brutal-green: #80ed99` — tertiary accent
- `brutal-black: #1a1a1a` — borders, text, shadows

### Typography
- **Headings**: Syne (weights 400–800) via Google Fonts CDN
- **Body**: Outfit (weights 300–700) via Google Fonts CDN
- Heading sizes use `clamp()` for fluid scaling

### Borders & Shadows
- Standard border: `3px solid #1a1a1a`
- Thick border: `4px solid #1a1a1a`
- `shadow-brutal-sm`: `4px 4px 0 #1a1a1a`
- `shadow-brutal-md`: `6px 6px 0 #1a1a1a`
- `shadow-brutal-lg`: `8px 8px 0 #1a1a1a`
- `shadow-brutal-xl`: `10px 10px 0 #1a1a1a`

### Border Radius
- `radius-brutal-sm`: `8px`
- `radius-brutal-md`: `12px`
- `radius-brutal-lg`: `16px`

### Animations
- Bounce easing: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- `fadeInUp`, `bounceIn`, `wiggle`, `float`, `popIn`, `marquee` keyframes
- Staggered reveal on scroll via IntersectionObserver (small inline script)
- `prefers-reduced-motion` respected — disables all animations

### Interaction Patterns
- Cards: hover → translateY(-4px) + rotate(-0.5deg) + shadow grows
- Buttons: hover → translateY(-3px) + scale(1.03) + shadow grows; active → translateY(2px) + shadow shrinks
- Tags: hover → translateY(-2px) + rotate(2deg)
- Nav links: hover → black bg, white text, slight lift + tilt

## Component Design

### BaseLayout.astro
- Accepts `title`, `description` props
- Renders `<html>`, `<head>` with meta, fonts, favicon
- Includes Astro `<ViewTransitions />` for smooth page transitions
- Wraps content: `<Navbar />` → `<slot />` → `<Footer />`

### Navbar.astro
- Sticky top, cream bg, thick bottom border
- Left: "NG" logo badge (yellow bg, shadow, tilts on hover)
- Right: page links, active state = blue bg + white text
- Mobile: hamburger button (pink bg), slide-down menu
- Accepts `currentPage` prop for active state

### HeroSection.astro
- Full-viewport height
- Centered: name in yellow box (rotated -2deg), subtitle badges (blue/pink/green), bio paragraph, 3 CTA buttons
- 5 floating geometric decorations (colored squares/circles) with float animation
- Hidden on mobile (decorations only)

### ServiceCard.astro
- Colored background card with thick border + hard shadow
- Header with emoji icon + title
- Bullet list with custom square markers
- Sub-items indented with circle markers

### ExperienceItem.astro
- Numbered badge (colored square) + role title + company + location + dates
- Stacks vertically on mobile

### ProjectCard.astro
- Two-part card: colored banner header (title + type badge) + white body (description + links)
- Links as buttons

### MarqueeBanner.astro
- Full-width, yellow bg, thick top/bottom borders
- Infinite CSS scroll of keyword items
- Duplicated content for seamless loop

## Pages

### index.astro (Homepage)
`<MarqueeBanner />` → `<HeroSection />`

### about.astro
Section title → bio card → skills grid (4 SkillGroup cards) → experience list (6 ExperienceItem)

### services.astro
Section title → intro text → services grid (4 ServiceCard) → CTA card with Calendly link

### projects.astro
Section title → projects grid (2 ProjectCard)

## Content Data (src/data/content.ts)

Typed exports:
- `siteConfig`: title, description, author
- `navigation`: array of {label, href}
- `homepage`: heading, subtitle, bio, links
- `about`: bio paragraphs, skills[], experience[]
- `services`: intro, categories[]
- `projects`: array of {title, type, description, links[]}

## Accessibility

- Semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`)
- Focus-visible styles (thick outline matching theme)
- Skip-to-content link
- `aria-label` on icon-only buttons
- `prefers-reduced-motion: reduce` disables all animations
- Alt text on any future images
- Sufficient color contrast (all combos tested)

## Performance

- Zero client JS by default (Astro SSG)
- Fonts loaded via `display=swap` for no FOIT
- CSS inlined/bundled by Astro
- Only inline JS: IntersectionObserver for scroll reveals + mobile nav toggle
- View transitions handled by Astro's built-in module

## Deployment

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"
```

No adapter needed — pure static output.

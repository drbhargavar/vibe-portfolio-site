# Portfolio Project (Astro + Tailwind)

This repository contains a small, clean, minimal, bold personal portfolio site for **Dr. Bhargava R** with a weekly newsletter signup CTA.

## What’s the site?

- Tech: **Astro** (static-first) + **Tailwind CSS**
- Pages (exactly 3):
  - `/` -> `src/pages/index.astro`
  - `/about` -> `src/pages/about.astro`
  - `/projects` -> `src/pages/projects.astro`
- Newsletter UI (frontend-only placeholder form):
  - `src/components/NewsletterForm.astro`

## Folder structure

- `src/pages/`
  - Route entrypoints for the three pages.
  - Placeholders are clearly marked as “Lorem ipsum placeholder” or “placeholder”.
- `src/components/`
  - `Header.astro`: top navigation + active link styling
  - `Footer.astro`: minimal footer with dynamic current year
  - `NewsletterForm.astro`: email + submit button, UI-only (no backend)
  - `ProjectCard.astro`: simple reusable project preview card
- `src/layouts/`
  - `SiteLayout.astro`: shared HTML shell, font link injection, and `<Header/>` + `<Footer/>`.
- `src/styles/`
  - `globals.css`: Tailwind base layers + minimal global rules
- `public/`
  - `favicon.svg`: placeholder favicon
  - `robots.txt`: references sitemap index

## Styling rules (keep the design consistent)

- Color palette: use only
  - White: `#ffffff`
  - Black: `#000000`
  - Accent red: `#FF2D2D` (Tailwind `accent`)
- Layout:
  - Content is centered with max-width around `960px` (see `max-w-[960px]` usage).
  - Plenty of whitespace; minimal sections per page.
- Fonts:
  - Headings: `Khand` (bold)
  - Body: `Switzer` (regular)
  - The required Fontshare CSS link is injected in `src/layouts/SiteLayout.astro`.

## Newsletter integration (placeholder only)

`NewsletterForm.astro` renders a functional HTML `<form>` with:
- `input[type="email"]` for email capture
- a red accent submit button

There is intentionally no backend wiring yet. When you connect a real provider later, update the form `action` and/or add client handling as needed.

## Projects data (placeholders)

`src/pages/projects.astro` defines a local `projectList` array with placeholder project titles/descriptions, then renders:
- `ProjectCard.astro` for each item.

To update content later, replace the placeholder strings in `projectList`.

## SEO / robots / sitemap

- Sitemap integration:
  - `@astrojs/sitemap` is enabled in `astro.config.mjs`
  - Generated at build time into `dist/sitemap-index.xml`
- Robots:
  - `public/robots.txt` points crawlers to `/sitemap-index.xml`

Each page sets:
- `<title>`
- `<meta name="description">`
via props passed to `SiteLayout.astro`.

## Cloudflare Pages deployment (static)

Build output:
- `astro build` generates a static site in `dist/`.

Recommended Cloudflare Pages settings:
- Framework preset: **Astro**
- Build command: `npm run build`
- Output directory: `dist`
- (Optional) If you want real absolute URLs in the sitemap:
  - set `SITE="https://your-domain.com"` before `npm run build`

## Useful commands

- Install:
  - `npm install`
- Local dev:
  - `npm run dev` (Astro dev server)
- Production build:
  - `npm run build`
- Static preview:
  - `npm run preview`

## Note about leftover Next.js files

This repo previously had a Next.js experiment left in place (for example, `.next/` and `src/app/*` from the earlier attempt).

The Astro site uses:
- `src/pages/*`
- `src/components/*`
- `src/layouts/*`
- `src/styles/*`

If you want a fully clean Astro-only repo later, you can remove the unused Next.js artifacts safely (but do so only if you’re comfortable cleaning history/extra files).


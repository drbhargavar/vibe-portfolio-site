# Dr. Bhargava R — Portfolio (Astro + Tailwind)

Clean, minimal, bold personal portfolio with a weekly newsletter signup CTA.

## Setup

1. Install dependencies
   ```bash
   npm install
   ```
2. Run locally
   ```bash
   npm run dev
   ```
   Site URL: `http://localhost:4321`

## Build

```bash
npm run build
```

The production output will be generated in `dist/`.

## SEO / Sitemap / Robots

- Sitemap is generated via `@astrojs/sitemap`
- Robots is available at `public/robots.txt` and points to `/sitemap-index.xml`

Optional (recommended): set your real domain so sitemap URLs are correct:

```bash
SITE="https://your-domain.com" npm run build
```

## Deploy to Cloudflare Pages

1. Create a Cloudflare Pages project
2. Connect this repo (or upload the code)
3. Configure the build settings:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables (optional): `SITE=https://your-domain.com`
4. Deploy

## Notes

- Newsletter form UI is frontend-only (no backend integration yet).
- Content is currently placeholder and intended to be replaced later.


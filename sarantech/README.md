# SaranTech — Business Website

A business/services website for SaranTech, built with Angular 21. Static-only
(no backend, no database) and pre-rendered per route at build time, so every
page ships with real `<title>`, meta description, canonical URL, Open Graph
and Twitter card tags baked into the HTML — including on WhatsApp/Facebook/
LinkedIn shares, which don't execute JavaScript.

## Before you launch — replace these placeholders

Everything business-specific lives in **one file**:
`src/app/core/config/site-config.ts`

Update:
- `email`, `phone`, `whatsappNumber` (digits only, with country code)
- `siteUrl` (your real production domain)
- `social` links

Also replace:
- `public/favicon.ico`, `public/apple-touch-icon.png`, `public/icon-512.png` — placeholder brand mark, swap for your real logo
- `public/social-preview.png` — placeholder Open Graph image (1200×630)
- `public/sitemap.xml` and `public/robots.txt` — currently point at `https://sarantech.example`; update to your real domain (or regenerate the sitemap by editing the route list in whatever script you use going forward)

## Project structure

- `src/app/core/config/` — **all editable content**: business info, the 8
  services (`services-data.ts`), real projects (`projects-data.ts`), FAQs
  (`faq-data.ts`). Add a service or project by adding an entry to these
  arrays — no component changes needed.
- `src/app/core/services/` — `SeoService` (per-page meta tags),
  `NotifyService` (turns the contact form into WhatsApp/SMS/email links)
- `src/app/shared/components/` — Header, Footer, floating WhatsApp button,
  the contact form section, icon set, page header
- `src/app/pages/` — one folder per route; the homepage assembles its
  sections from `pages/home/sections/`

## Routes

`/`, `/services`, `/services/:slug` (one page per service, real per-page SEO),
`/projects`, `/about`, `/faq`, `/contact`, plus a styled `404`.

## Development

```bash
npm install --legacy-peer-deps   # required — see note below
npm start                        # ng serve, http://localhost:4200
```

**Note:** plain `npm install` currently fails on Angular 21's dependency
tree due to an npm/arborist bug — use `--legacy-peer-deps`.

## Production build

```bash
npm run build
```

This runs `ng build` (which prerenders every route to static HTML, including
each `/services/:slug` page) and a `postbuild` step that copies the
prerendered 404 page to `dist/sarantech/browser/404.html`, which Cloudflare
Pages automatically serves for unmatched paths.

**Output to deploy:** `dist/sarantech/browser/` — every file in this
folder is static; there is no server to run.

## Deploying to Cloudflare Pages

1. Push this project to a Git repository.
2. In Cloudflare Pages, create a project from that repo.
3. Build command: `npm run build` (make sure the build step also runs
   `npm install --legacy-peer-deps`, e.g. via a `.npmrc` with
   `legacy-peer-deps=true`, or set it in your CI config)
4. Build output directory: `dist/sarantech/browser`
5. No environment variables or backend are required for this version.

## What's intentionally not included yet (see the original brief)

- Payment gateway integration for the e-commerce service (scoped per project)
- A real backend (Spring Boot + MongoDB) for storing enquiries — the contact
  form currently opens WhatsApp/SMS/email pre-filled instead; `NotifyService`
  is the one place to swap in a real API call later
- Individual live project links on the Projects page — add a `url` to any
  entry in `projects-data.ts` once a project has a public link
- Fully separate landing pages per business-type (retail, restaurants, etc.)
  beyond the homepage "Solutions" section — can be split into their own
  routes later using the same pattern as `/services/:slug`

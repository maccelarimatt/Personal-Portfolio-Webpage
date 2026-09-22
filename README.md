# Matthew Maccelari – Portfolio

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and React Router. It builds to a fully static single-page app in `dist/` and is hosted on Cloudflare (Workers static assets).

## Getting Started

```bash
npm install
npm run dev      # local dev server (Vite)
npm run build    # production build -> dist/
npm run preview  # preview the built site with Vite
npm run cf:dev   # build, then serve dist/ with Cloudflare's runtime (wrangler dev)
npm run deploy   # build, then deploy to Cloudflare
```

## Deploying to Cloudflare

Cloudflare config lives in `wrangler.jsonc`. It serves `dist/` as static assets, with `not_found_handling: "single-page-application"` so client-side routes like `/about` work on refresh. `public/_headers` adds security headers and long-lived caching for hashed assets.

### Option A: automatic deploys from GitHub (recommended)

1. Push this repo to GitHub.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Import a repository** and pick this repo.
3. Build command: `npm run build`. Deploy command: `npx wrangler deploy` (the defaults Cloudflare detects).
4. Every push to `main` now rebuilds and redeploys. The site is live at `https://matthew-maccelari-portfolio.<your-subdomain>.workers.dev`.

### Option B: deploy from your machine

```bash
npx wrangler login   # one-time, opens a browser
npm run deploy
```

### Custom domain (optional)

In the Worker's **Settings → Domains & Routes → Add → Custom domain**, enter a domain whose DNS is managed by Cloudflare. HTTPS certificates are issued automatically.

## Editing Content

All content is data-driven:

- `src/data/profile.ts` – name, contact links, summary, stats, education, experience, outreach, skills
- `src/data/projects.ts` – projects and filter categories
- `src/data/papers.ts` – publications and their status
- `src/data/competitions.ts` – achievements and awards
- `public/cv.pdf` – downloadable CV (replace the file to update it)

## Project Structure

- `src/components` – Reusable UI (navbar, cards, buttons, timeline, etc.)
- `src/layouts` – Shared layout shell with header/footer
- `src/pages` – Route pages (Home, About, Projects, Research, Achievements, Contact)
- `src/data` – Content sources
- `src/context` – Accent palette toggle context

## Contact Form

The site is static, so the contact form opens the visitor's email client with a pre-filled message addressed to the email in `src/data/profile.ts`.

# Matthew Maccelari – Portfolio

Production-ready personal portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and React Router. It ships as a static SPA suitable for Cloudflare Pages.

## Getting Started

```bash
npm install
npm run dev     # local dev server
npm run build   # production build -> dist/
npm run preview # preview the built site locally
```

## Deploying to Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: `None` (pure Vite SPA)

## Customization Notes

- **Accent palette toggle:** Controlled in `src/context/AccentContext.tsx` and CSS variables in `src/index.css`. Swap the hex values to your preferred palette.
- **Data-driven content:** Edit `src/data/projects.ts`, `src/data/papers.ts`, and `src/data/competitions.ts` to change displayed items. Education/skills live in `src/data/profile.ts`.
- **CV download:** Replace `public/cv.pdf` with your actual CV.
- **Branding & meta:** Update `index.html` (title/description) and social links inside `src/components/Footer.tsx` and `src/components/Navbar.tsx`.

## Project Structure

- `src/components` – Reusable UI (navbar, cards, buttons, timeline, etc.)
- `src/layouts` – Shared layout shell with header/footer
- `src/pages` – Route pages (Home, About, Projects, Papers, Competitions, Contact)
- `src/data` – Data sources for projects, papers, competitions, profile
- `src/context` – Accent palette toggle context

## Design System

- Tailwind configured in `tailwind.config.js` with dark theme defaults and glassmorphism-ready utilities.
- Base styles and CSS variables live in `src/index.css` (backgrounds, gradients, accent colors, typography).
- Animations and page transitions use Framer Motion (`src/components/PageTransition.tsx` and per-page motion elements).

## Contact

The contact form is front-end only and shows a “message sent (demo)” toast. Swap the mailto/email values to your own to receive messages directly.

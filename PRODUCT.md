# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Academic:** PhD admissions committees, prospective supervisors, research collaborators and scholarship panels evaluating Matthew as a researcher in free-space optical communication and applied ML.
- **Industry:** engineering hiring managers in RF/communications, machine learning and software, evaluating him for roles.

Both typically arrive from a CV, email signature, LinkedIn or a paper, and spend a few minutes deciding whether he is worth a conversation. They are technical readers who distrust hype and respond to specifics.

## Product Purpose

The personal portfolio of Matthew Maccelari, an MSc (Eng) by dissertation candidate at the University of the Witwatersrand (Optical Communication Laboratory). It exists so a visitor can quickly understand what he works on, see evidence that it is real (validated models, hardware, shipped software, rankings), and then contact him, download his CV or follow his GitHub/LinkedIn.

Success: a visitor leaves knowing his research problem (predicting turbulence-induced fades on free-space optical links so the radio can adapt before the channel degrades, for affordable rural connectivity in South Africa) and has a clear way to reach him.

## Positioning

He spans the full stack of a communications link: atmospheric wave-optics physics, neural channel prediction, real-time software-defined radio (GNU Radio, USRP B210, ZeroMQ) on a real 800 m outdoor link, plus production software engineering (Isode Ltd, a live e-commerce platform). Rankings (2nd of 112), competition results and national sporting colours (Protea, kayak sprint) back it up.

## Operating Context

- Static single-page app (React 19, TypeScript, Vite, Tailwind CSS 3, Framer Motion, React Router), hosted on Cloudflare Workers static assets.
- Content is data-driven from `src/data/` (profile, projects, papers, competitions). `public/cv.pdf` is the downloadable CV.
- The contact form has no backend: it opens the visitor's email client with a pre-filled message.

## Capabilities and Constraints

- Existing content and copy stay as written; the owner approves any change to factual copy.
- Structure is free to change: pages may be merged, reordered or replaced if it reads better, as long as all content remains reachable.
- Photos must remain throughout (award, outreach, lab, graduation, kayak, portrait and headshot).
- The contact form, project filters and rotating role titles are not required and may be removed or replaced.

## Brand Commitments

- Name: Matthew Maccelari. No logo exists.
- The owner explicitly wants the site to stop looking AI-generated and to read as professional.

## Evidence on Hand

- Photos in `public/images/` (portrait, headshot, graduation, OCLab group, EIE awards, Investec Tech Explore, NICIS 2024, kayak Protea, Optica outreach, Science Month booth, PureHerb screenshot).
- Real figures: ~2% agreement with gamma-gamma theory, ~33 000-window dataset, ~16% lower prediction error than tuned persistence, 800 m folded outdoor link, 100 kb/s FSO demonstrator, ~90% QSVM accuracy, 82% final-year average, 2nd of 112.
- Papers: one SATNAC 2026 submission, one MSc dissertation in progress. No published DOIs or links yet.
- No testimonials, no publication metrics, no measured link-performance plots exist; do not fabricate them.

## Product Principles

1. Show the work, not adjectives: lead with the research problem and the specific numbers that prove it.
2. Serve both audiences in one read: research depth and engineering delivery sit side by side, not on separate tracks.
3. Every claim on the page is one he can defend in an interview.
4. Contact is always one step away.

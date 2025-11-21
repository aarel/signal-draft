# SignalDraft Ghostwriting Site

Marketing + portfolio site for Quiet Authority / SignalDraft: LinkedIn posts and short articles for tech, compliance, veteran, and career-focused leaders.

## What & Why
- Single-page, high-signal site to show positioning, services, samples, and a lead form that routes to your inbox/form handler.
- Stack: Astro + Tailwind (static export) for fast loads, low ops, and easy hosting on Vercel/Netlify.
- Content is data-driven (`src/content`) so you can edit offers/samples without touching layout code.

## Getting Started (How)
Prereqs: Node 20+, npm.
1) Install: `npm install`
2) Develop: `npm run dev` and open `http://localhost:4321`
3) Build: `ASTRO_TELEMETRY_DISABLED=1 npm run build` (telemetry flag avoids WSL permission issues) → output in `dist/`
4) Preview build: `npm run preview`
5) Tests: `npm test` (Vitest; validates service/portfolio data shape)
6) Lint/types: `npm run check`

## Configuration
- Lead form: set `PUBLIC_FORM_ENDPOINT` in `.env` (Formspree/Getform/etc.). See `.env.example`. Update the email copy in `src/components/Contact.astro`.
- Analytics/embeds: add scripts in `src/layouts/BaseLayout.astro`; document any new env vars in `.env.example`.
- Branding: update `public/favicon.svg`, colors in `tailwind.config.cjs`, and global look in `src/styles/global.css`.

## Project Structure
- `src/pages/index.astro` — page shell assembling sections.
- `src/components/` — hero, services, process, portfolio, about, CTA, contact, footer.
- `src/content/` — `services.ts`, `portfolio.ts` provide copy/data objects.
- `src/styles/global.css` — global styles (fonts, background, helper classes).
- `public/` — static assets (`favicon.svg`, `robots.txt`).
- `tests/` — Vitest coverage for content structure.

## Deployment
- Vercel/Netlify (static) recommended. Build command: `npm run build`; output dir: `dist/`.
- Set `PUBLIC_FORM_ENDPOINT` in host env vars before deploying.
- Optional: add custom domain/redirects in host settings (none required by default).

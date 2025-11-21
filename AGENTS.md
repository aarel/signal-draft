# Repository Guidelines

## Project Structure & Module Organization
- Current artifacts: `GhostwriterSite.Dev.yaml` (delivery spec), `ghost-writing.task` (side-hustle brief), and `project_development.tasks` (architect workflow). Keep these in the repo root as source of truth.
- When the web project is scaffolded, place it under `site/` (Astro or Next.js + Tailwind). Use `src/` for pages/components, `public/` for static assets, `styles/` or `globals.css` for shared styles, and `tests/` or `e2e/` for automated coverage. Add a `docs/` folder for updated briefs and client-facing copy blocks.
- Prefer small, composable components; keep CTA/lead-capture logic isolated (e.g., `src/components/LeadForm.tsx`).

## Build, Test, and Development Commands
- Run commands inside `site/` once the project is initialized.
- `npm install` — install dependencies.
- `npm run dev` — start local dev server.
- `npm run build` — production build (CI gate).
- `npm run lint` — static analysis; fix with `npm run lint -- --fix` when safe.
- `npm test` (or `npm run test:unit`) — unit tests; prefer `npm run test:e2e` for Playwright/Cypress when configured.

## Coding Style & Naming Conventions
- JavaScript/TypeScript, 2-space indent, semicolons on, single quotes where lint allows. Use ESLint + Prettier defaults; do not disable rules without documented rationale.
- Components PascalCase (`LeadForm.tsx`); hooks/utilities camelCase; Next.js route segments/kebab paths lower-case.
- Keep Tailwind classes readable; extract reusable patterns into small components or `styles` utilities.
- Keep copy in dedicated JSON/MD modules where possible to simplify localization/edits.

## Testing Guidelines
- Unit: Vitest/Jest-style specs under `tests/` mirroring `src` (`tests/components/LeadForm.test.tsx`).
- E2E: Playwright/Cypress under `e2e/` targeting critical flows (landing render, CTA click, form submit states). Stub network calls to form handlers.
- Aim for meaningful coverage on CTA, form validation, and analytics events; prefer deterministic tests over broad snapshots.

## Commit & Pull Request Guidelines
- Use Conventional Commit prefixes (`feat:`, `fix:`, `docs:`, `chore:`, `test:`). Keep scope small and messages imperative.
- Before opening a PR: run lint/build/tests, update docs (README, AGENTS.md) when behavior or commands change, and add screenshots for UI-affecting changes.
- PR description should include purpose, key changes, testing performed, and linked issue/task; call out risk areas or follow-ups explicitly.

## Security & Configuration
- Do not commit secrets. Store endpoints/keys (e.g., `FORM_ENDPOINT`, `EMAIL_TARGET`, `ANALYTICS_KEY`) in `.env` and provide a scrubbed `.env.example`.
- Keep dependency set minimal; prefer host-provided form handlers or serverless functions before adding backend services.
- For analytics or embeds (Calendly, Formspree), document required env vars and data flows in `docs/` and keep usage GDPR-friendly (no unnecessary PII logging).

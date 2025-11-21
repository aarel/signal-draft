# Gemini Project Overview: SignalDraft Ghostwriting Site

This document provides a comprehensive overview of the SignalDraft Ghostwriting Site project for future AI-powered development sessions.

## Project Overview

This is a single-page marketing and portfolio website for a ghostwriting service called SignalDraft. It's designed to showcase the service's offerings, portfolio samples, and provide a contact form for lead generation.

**Key Technologies:**

*   **Framework:** [Astro](https://astro.build/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Testing:** [Vitest](https://vitest.dev/)

**Architecture:**

The project follows a component-based architecture, with Astro components in `src/components/` assembling the main page at `src/pages/index.astro`. Layout and most long-form copy live directly inside those section components (Hero, Process, About, etc.). Content that benefits from being data-driven—services, portfolio samples, CTA buttons, and the contact form fields—is stored in TypeScript modules under `src/content/` so key marketing elements can be updated without editing layout code.

## Building and Running

The following commands are used to build, run, and test the project. They are defined in the `site/package.json` file.

*   **Install Dependencies:**
    ```bash
    npm install
    ```
    or if you encounter issues with `npm`:
    ```bash
    yarn install
    ```

*   **Run Development Server:**
    ```bash
    npm run dev
    ```
    This will start a development server at `http://localhost:4321`.

*   **Build for Production:**
    ```bash
    npm run build
    ```
    This will create a production-ready build in the `site/dist/` directory.

*   **Preview Production Build:**
    ```bash
    npm run preview
    ```

*   **Run Tests:**
    ```bash
    npm test
    ```

*   **Type Checking and Linting:**
    ```bash
    npm run check
    ```

## Development Conventions

*   **Content Management:** Data that changes often (services, portfolio, CTA labels/targets, and contact form fields) is centralized in `src/content/{services,portfolio,cta,contactForm}.ts`. Narrative copy stays in the relevant components (e.g., `Hero.astro`, `Process.astro`).
*   **Assets:** Illustrations for the hero collage and portfolio cards live in `public/images/`. Replace `hero-collage.svg` or the `portfolio-sample-*.svg` files (and update `src/content/portfolio.ts` if needed) to bring in custom artwork.
*   **Testing:** The project uses Vitest for testing. Tests under `site/tests/` validate the service/portfolio schemas with `zod` and add guardrails for CTA anchors plus the contact form configuration. Component rendering tests are not enabled to keep dependencies light.
*   **Styling:** Styling is primarily handled by Tailwind CSS classes directly in the Astro components. Global styles are located in `src/styles/global.css`.
*   **Performance:**
    *   **Font Loading:** The Google Fonts are loaded in `src/layouts/BaseLayout.astro` using `<link>` tags with `preconnect` for optimal performance.
*   **SEO:**
    *   **Canonical URL:** A canonical URL is automatically generated for each page using `Astro.url.href` in `src/layouts/BaseLayout.astro`.
    *   **Open Graph:** `og:title`, `og:description`, and `og:image` meta tags are included in `src/layouts/BaseLayout.astro`. The `og:image` is currently a placeholder and should be replaced with a real image.
*   **Configuration:** The lead generation form endpoint is configured via the `PUBLIC_FORM_ENDPOINT` environment variable in the `.env` file. An example is provided in `.env.example`.

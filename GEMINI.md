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

The project follows a component-based architecture, with Astro components in `src/components/` assembling the main page at `src/pages/index.astro`. Layout and most page copy live directly inside those section components (Hero, Process, About, CTA, Contact, etc.) so marketing edits generally happen there. Content that benefits from being data-driven (services and portfolio samples) is stored in TypeScript modules under `src/content/` to simplify frequent updates without touching layout markup.

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

*   **Content Management:** Services/portfolio data is centralized in `src/content/`. Other copy blocks currently live in their respective components (e.g., `Hero.astro`, `Process.astro`, `Contact.astro`). To update data-driven sections, edit `src/content/portfolio.ts` or `src/content/services.ts`; to update narrative copy, work in the matching component.
*   **Testing:** The project uses Vitest for testing. Tests are located in the `site/tests/` directory. The current test suite focuses on data validation using `zod` to ensure the content in `src/content/` conforms to the expected schema. Component tests were previously attempted but have been removed due to dependency issues.
*   **Styling:** Styling is primarily handled by Tailwind CSS classes directly in the Astro components. Global styles and font definitions are located in `src/styles/global.css`.
*   **Configuration:** The lead generation form endpoint is configured via the `PUBLIC_FORM_ENDPOINT` environment variable in the `.env` file. An example is provided in `.env.example`.

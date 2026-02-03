<!-- .github/copilot-instructions.md -->
# Project-specific Copilot Instructions

Purpose: give AI coding agents immediate, actionable context to be productive in this repository (a single-page React portfolio).

- Quick start:
  - Install deps: `npm install`
  - Dev server: `npm start` (uses `react-scripts start` as defined in `package.json`)
  - Build for production: `npm run build`

- High-level architecture:
  - Single Page React app. Entry: `src/index.js` -> `src/App.js`.
  - UI composed from small, focused components in `src/components/` (e.g. `Hero.js`, `Header.js`, `Projects.js`, `Contact.js`).
  - `App.js` composes sections in the exact order they appear on the page — adding a section requires importing it into `App.js`.

- Navigation & data-flow patterns to follow:
  - Navigation is handled by `react-scroll` in `src/components/Header.js`. The header maps an array of section names to `Link to="<section>"` — each section component must include an `id` that exactly matches the link name (e.g. `id="contact"` in `Contact.js`).
  - There is no backend in this repo; state is local to components. Treat the project as a static SPA when making changes.

- Styling & theming:
  - Tailwind CSS is used. Config: `tailwind.config.js` (note: `darkMode: 'class'`).
  - Global styles and Tailwind imports are in `src/index.css` and `src/App.css`.
  - Dark mode is toggled by adding/removing the `dark` class on `document.documentElement` (see `Header.js`). Keep utility-first classes inline — don't refactor into many custom CSS files without strong reason.

- Animations & icons:
  - `framer-motion` is used for reveal/hover animations (see `Contact.js`, `Hero.js`). Prefer small, declarative motion variants and reuse where practical.
  - Icons come from `react-icons` (imports in each component).

- Integrations & assets:
  - `public/index.html` is the static shell. Place downloadable assets (resume PDF, images) under `public/` — `Contact.js` expects a resume at `/resume/<file>.pdf`.
  - `emailjs-com` is listed in `package.json` and referenced in the README, but contact UI in `src/components/Contact.js` currently uses mailto/tel links and a resume download. If implementing form submissions, configure service IDs and secrets via environment variables and prefer `@emailjs/browser` (package-lock notes SDK rename).

- Conventions & patterns to preserve:
  - Component filenames are PascalCase and export a default functional component.
  - Keep components small and focused (each file in `src/components/` maps to a page section).
  - When adding a new section: create `src/components/MySection.js`, export default, import and mount in `App.js`, and add the section name to the nav array in `Header.js` so `react-scroll` works.

- Project-specific examples:
  - Header navigation list: `src/components/Header.js` shows the exact nav array; new entries must match `id` attributes.
  - Resume download: `src/components/Contact.js` uses `<a href="/resume/Your_Resume.pdf" download>` — put the file in `public/resume/`.

- Tests & dev workflow:
  - This repo uses `react-scripts` default test runner. Use `npm test` for interactive testing; there are no project-specific unit tests present.
  - For quick verification of UI changes, run `npm start` and test in the browser.

- Safety & upgrade notes for AI agents:
  - Do not remove or rename section `id`s without updating `Header.js` and `App.js` — that will break client navigation.
  - `emailjs-com` is present but the lockfile shows a deprecation note; if you add EmailJS code, prefer `@emailjs/browser` and update `package.json` accordingly.
  - Keep changes minimal and visually verify styling after edits (Tailwind classes are sensitive to small changes).

- Where to look first when asked to modify UI:
  - `src/components/` for the section file
  - `src/App.js` to see mounting order
  - `src/components/Header.js` for navigation changes
  - `tailwind.config.js` & `src/index.css` for styling/theme rules

If anything in this file is unclear or you want me to include more examples (component lifecycle hooks, sample `emailjs` usage, or a checklist for adding sections), tell me which area to expand and I'll update this file.

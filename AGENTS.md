# Repository Guidelines

## Project Structure & Module Organization

This is an Arabic, right-to-left, mobile-first driving-instruction website built with React 19 and Vite. `src/main.jsx` contains the page components and content; `src/analytics.js` handles contact-click tracking. `src/styles.css` combines Tailwind directives with custom styles. Place static assets in `public/`; the favicon is `public/favicon.svg`. `index.html` provides the HTML shell and GoatCounter script. Root configuration files control Vite, Tailwind, and PostCSS. `.github/workflows/deploy.yml` builds and deploys to GitHub Pages. Generated output belongs in `dist/` and is ignored by Git.

## Build, Test, and Development Commands

- `npm install`: install dependencies for local development.
- `npm run dev`: start Vite with network access enabled through `0.0.0.0`.
- `npm run build`: produce the production website in `dist/`.
- `npm run preview`: serve the production build for local inspection.

Use Node.js 22 to match CI. The deployment workflow uses `npm ci`, which requires a committed lockfile consistent with `package.json`.

## Coding Style & Naming Conventions

Follow surrounding code: use two-space indentation, semicolons, and double-quoted strings in JavaScript/JSX source. Name React components in PascalCase, such as `WhatsAppLink`, and functions and variables in camelCase, such as `trackContactClick`. Prefer Tailwind utilities for layout and existing theme colors; keep shared CSS in `src/styles.css`. Preserve Arabic text, RTL layout, accessible labels, keyboard focus indicators, and reduced-motion support. No formatter or lint script is currently configured.

## Testing Guidelines

There is no automated test framework, test script, or coverage threshold. Run `npm run build` and inspect the result with `npm run preview`. Check mobile and desktop layouts, section navigation, FAQ interactions, telephone links, and WhatsApp links. Verify contact navigation still works when analytics is blocked. GoatCounter skips localhost by default; keep any local tracking override out of production.

## Commit & Pull Request Guidelines

Recent commits use short, plain-language subjects such as `fixed counter` and `added dark mode`; no formal commit convention is established. Use concise, specific subjects. Pull requests should describe the change, link relevant issues, report validation, and include mobile/desktop screenshots for visual changes. Pushing to `main` triggers deployment.

## Configuration & Content

Keep Vite's `/asmaa-driving/` base path aligned with GitHub Pages hosting. No backend or environment variables are required. Confirm business details before changing contact information or adding prices, schedules, or claims.

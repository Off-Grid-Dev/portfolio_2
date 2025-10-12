# skinnyK — Front-end Developer Portfolio

This repository contains the Portfolio 2 site for the Noroff front-end course. It is a multipage React + TypeScript site built with Vite and Tailwind CSS that showcases three projects: CSS Frameworks, JavaScript Frameworks (Greedy Little Pigs), and Semester Project 2.

Owner / contact

- Developer handle: `skinnyK`
- GitHub profile: https://github.com/Off-Grid-Dev
- Email (from site): skinnykdev@gmail.com

Live site

- The portfolio is deployed and available at the URL you provided when deploying (replace below when publishing):

  Live: (your deployed URL here)

What this repo contains

- A React + TypeScript application scaffolded with Vite.
- `src/` — application source. Key locations:
  - `src/pages/` — pages including `Home`, `Projects`, and `Project`.
  - `src/components/ui/` — UI components such as `ProjectCard`, `ProjectGrid` and the Suspense placeholder.
  - `src/assets/` — bundled screenshots and project article markdown files (`article-text-*.md`).
  - `src/fetch/fetchProjectInfo.ts` — helper that fetches repo data from GitHub.
- `public/` — (optional) static, un-bundled files served at site root.
- `assignment_instructions.md` — the course assignment requirements. Use this to confirm grading requirements.

Key features / implementation notes

- Routing: app uses React Router routes for `/`, `/projects` and `/projects/:name`.
- Project cards: `ProjectCard` pre-fetches repo metadata (using Suspense + `use()`) and passes repo data and the screenshot to the Project page via `Link` state for instant rendering.
- Deep-link fallback: `Project` page supports deep links (direct `/projects/:name`) by suspending on a fetch promise (same cache pattern as cards) and shows the same Suspense fallback UI.
- Articles: project articles are stored as markdown under `src/assets` and imported with Vite's `?raw` suffix. They render with `react-markdown` and are styled using Tailwind classes.
- Styling: Tailwind v4 utility classes are used; CSS variables in `src/index.css` provide the color system (no `tailwind.config.js` needed with v4 mapping).

Running locally

1. Install dependencies

```powershell
npm install
```

2. Start dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

4. Preview the production build

```powershell
npm run preview
```

Deployment notes (Netlify / Vercel / similar)

- Build command: `npm run build`
- Publish directory: `dist`
- If you host at a subpath, set `base` in `vite.config.ts` to your subpath before building.

Accessibility and contrast

- Article cards were changed to a light card (white background + dark text) to ensure high contrast against the page background (#f5e7fe). Color variables live in `src/index.css` — if you need to tweak color tokens to meet WCAG contrast thresholds, change the `--color-...` variables there.

Where assets live and why

- Markdown and screenshots are bundled in `src/assets` so they can be imported and included in the production build (hashed URLs) — this helps with cache-busting and ensures assets are available in `dist`.
- Alternative: `public/` serves files from site root with fixed filenames. Use `public/` when you need predictable, non-hashed URLs (e.g., externally maintained content or user-uploaded files).

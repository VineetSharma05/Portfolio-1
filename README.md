# Vineet Sharma · Portfolio

Personal portfolio: projects, research, experience and contact.

**Design:** near-black "aurora" background with drifting teal and violet glows and film grain.
The navbar switch toggles the glow mood (teal ↔ violet). **Quick view** opens a one-screen résumé.

**Stack:** React 19, Vite, Tailwind CSS 3, Framer Motion, React Router.

## Editing content

All content lives in `src/data/`:

| File | What it holds |
|---|---|
| `profile.js` | name, links (GitHub, LinkedIn, résumé, LeetCode, Instagram), headline stats, education |
| `projects.js` | projects, metrics, badges and links (`code` / `demo` / `paper`; empty links are hidden) |
| `experience.js` | current venture, work experience, leadership |
| `skills.js` | skill groups |

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run lint
```

SPA rewrites for `/about` are included for Vercel (`vercel.json`) and Netlify (`public/_redirects`).

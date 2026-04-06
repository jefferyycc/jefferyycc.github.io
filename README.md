# Jeffery Yu Portfolio

Personal portfolio site for Jeffery Yu, positioned primarily for `Senior Backend / Platform Engineer` roles and secondarily for `Applied AI / AI Systems` opportunities.

The site is a single-page portfolio built with:

- `Next.js 16`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`
- `next/font` for self-hosted Inter and Lora fonts
- static export for GitHub Pages

## Current Site Structure

The live site is composed of 6 main sections:

1. `Navbar`
2. `Hero`
3. `About`
4. `Selected Work`
5. `Experience`
6. `Education`
7. `Let's connect` footer

The content is centralized in [lib/data.ts](/Users/jefferyyu/playspace/jefferyycc.github.io/lib/data.ts).

Current content includes:

- `3` projects
- `4` experience entries
- `2` education entries
- `2` about paragraphs
- social links for GitHub and LinkedIn, plus an email contact action in the footer

## Quick Start

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Build static output:

```bash
npm run build
```

## Notes

- The site uses `output: 'export'` for GitHub Pages compatibility.
- Fonts are loaded through `next/font`, so the site does not depend on runtime Google Fonts requests.
- The large hero image lives in `public/hero-bg.JPG`; keep it compressed because it is used above the fold.
- Older `d3/` and `d3-lab-exercise/` folders are preserved as archive material and are not part of the main portfolio flow.

## Key Files

- [app/layout.tsx](/Users/jefferyyu/playspace/jefferyycc.github.io/app/layout.tsx) - metadata and font setup
- [app/page.tsx](/Users/jefferyyu/playspace/jefferyycc.github.io/app/page.tsx) - page composition
- [app/globals.css](/Users/jefferyyu/playspace/jefferyycc.github.io/app/globals.css) - global styles
- [components/Hero.tsx](/Users/jefferyyu/playspace/jefferyycc.github.io/components/Hero.tsx) - hero section
- [components/Projects.tsx](/Users/jefferyyu/playspace/jefferyycc.github.io/components/Projects.tsx) - featured work
- [components/Experience.tsx](/Users/jefferyyu/playspace/jefferyycc.github.io/components/Experience.tsx) - work history
- [components/Footer.tsx](/Users/jefferyyu/playspace/jefferyycc.github.io/components/Footer.tsx) - contact section
- [lib/data.ts](/Users/jefferyyu/playspace/jefferyycc.github.io/lib/data.ts) - portfolio content

## Deployment

Build the project and publish the generated `out/` directory to GitHub Pages.

The intended live URL is:

- [jefferyycc.github.io](https://jefferyycc.github.io)

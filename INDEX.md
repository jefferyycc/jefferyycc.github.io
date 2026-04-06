# Portfolio Docs Index

This repository contains the code for Jeffery Yu's personal portfolio site.

Use this short index instead of the older generated summaries.

## Primary Docs

- [README.md](/Users/jefferyyu/playspace/jefferyycc.github.io/README.md) - current project overview and setup
- [DEPLOYMENT.md](/Users/jefferyyu/playspace/jefferyycc.github.io/DEPLOYMENT.md) - deployment notes
- [CUSTOMIZATION.md](/Users/jefferyyu/playspace/jefferyycc.github.io/CUSTOMIZATION.md) - customization guidance

## Current Source Layout

- `app/` - Next.js app shell, metadata, page composition, global styles
- `components/` - portfolio sections and reusable UI
- `lib/data.ts` - project, experience, education, and about content
- `public/` - public assets such as the hero image and `robots.txt`

## Current Stack

- `Next.js 16`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`
- `next/font`
- static export for GitHub Pages

## Current Site Shape

The live page includes:

1. `Navbar`
2. `Hero`
3. `About`
4. `Selected Work`
5. `Experience`
6. `Education`
7. `Let's connect`

Current content totals:

- `3` projects
- `4` experience entries
- `2` education entries

## Maintenance Notes

- Keep [README.md](/Users/jefferyyu/playspace/jefferyycc.github.io/README.md) aligned with the live site when sections or stack change.
- Prefer editing [lib/data.ts](/Users/jefferyyu/playspace/jefferyycc.github.io/lib/data.ts) for most content updates.
- Treat the old generated summary files as archive material unless they are explicitly refreshed.

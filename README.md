# Transez Nigeria Limited Modernization

This repository contains a static-export Next.js rebuild of the legacy `transez-nigeria.com` website for GitHub Pages deployment.

## What changed

- Rebuilt the site as a static Next.js application using the App Router
- Preserved key legacy business content, page structure, and image assets
- Replaced WordPress-era theme, plugin, shortcode, feed, and PHP dependencies with reusable static components
- Added modern responsive navigation, homepage sections, metadata, accessibility improvements, and cleaner internal pages
- Kept deployment compatible with GitHub Pages via `output: "export"` and unoptimized local images
- Preserved the custom domain setup through `public/CNAME` and included `public/.nojekyll` for GitHub Pages

## Legacy artifacts removed from the new implementation

- WordPress theme framework assets from Warp and YOOtheme
- Widgetkit, NextGEN Gallery, and Custom Contact Forms dependencies
- `wp-json` content export usage at runtime
- Feed routes, XML-RPC hooks, WordPress metadata, and broken AJAX/search behavior
- PHP and login-era links that cannot work in a static GitHub Pages deployment

## Project structure

- `src/app`: page routes and layout
- `src/components`: reusable UI sections
- `src/data/site.js`: preserved content, navigation, and page data
- `public/assets`: curated legacy images and logos reused by the new site

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build static export

```bash
npm run build
```

The exported static site will be written to `out/`.

## Deploy to GitHub Pages

1. Build the project with `npm run build`.
2. Publish the contents of `out/` to the GitHub Pages branch or deployment target.
3. The current repo already includes `public/CNAME` for the existing custom domain. Update it only if the domain changes.

## Notes on content preservation

- The source legacy export in the neighboring archive folder was used only as migration input.
- Team, client, service, product, and contact information was preserved and lightly edited for clarity.
- Sparse or broken legacy pages such as FAQs and careers were modernized without inventing unsupported claims.
- News posts are presented as archive notes where the export did not provide enough trustworthy detail for fuller articles.

## Recommended next improvements

- Add a formal project or case studies section once verified source material is available
- Replace low-resolution legacy logos and product images with higher quality brand-approved assets
- Add a static contact workflow through Formspree, Basin, or another backend-free form service if desired
- Review all historical client references and leadership biographies for current accuracy before public relaunch

# Cognidamesh website

A bilingual, provider-independent presentation of the Cognidamesh AI-team blueprint.

- `/`: English by default.
- `/en/`: English.
- `/fr/`: French.
- Production domain: `cognidamesh.org`.

## Development

Use Node.js 22 or later:

```sh
npm ci
npm run check
npm run build
```

Serve `dist/` with a static HTTP server. The content is rendered at build time; JavaScript powers only the runtime and deployment selectors. Mermaid diagrams are prerendered as SVG and their `.mmd` sources are downloadable. No external fonts, analytics, API credentials or backend are required.

## Content

`src/content.mjs` contains the English and French content and the Mermaid definitions. `src/architecture-en.svg` and `src/architecture-fr.svg` are rendered from those definitions with Mermaid 11.12.0. Regenerate both SVGs when modifying the diagrams.

The blueprint was checked against the deployment specification and Ansible roles on 2026-10-13. It describes the core components and distinguishes the existing single-host implementation from further portability work. No private deployment configuration is included.

## Publication

GitHub Actions builds and publishes the static website to GitHub Pages on pushes to `main`. Set the Pages source to GitHub Actions and the custom domain to `cognidamesh.org`. DNS must point to GitHub Pages before the TLS certificate can be issued. The build emits a `CNAME`, sitemap, robots file, canonical URLs and language alternates.

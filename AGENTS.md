# Website contributor instructions

## Scope

This repository builds the bilingual Cognidamesh architecture website. It is not
the deployed AI infrastructure. The public implementation guide is maintained at
`src/blueprint/AGENTS.md` and published at `/blueprint/AGENTS.md`; its instructions
apply when an operator adopts it for an infrastructure project, not to website
maintenance.

## Commands

Use Node.js 22 or later. Install the locked dependencies with `npm ci`, check
JavaScript with `npm run check`, then build with `npm run build`. Serve `dist/`
with a static HTTP server to inspect the rendered English and French pages.
Before committing, run those checks and `git diff --check`. For interactive
changes, verify the affected behaviour in a browser, including failure handling.

## Files and conventions

- `src/content.mjs`: English and French copy, plus Mermaid diagram definitions.
- `src/app.js`: runtime/deployment selectors and prompt copying.
- `src/style.css`: responsive layout and visual styling.
- `build.mjs`: static HTML generation and public asset copying.
- `src/architecture-*.svg`: prerendered diagrams. Regenerate both if their Mermaid
  definitions change; keep downloadable diagram sources consistent with SVGs.
- `src/blueprint/AGENTS.md`: public infrastructure brief, copied by the build.

Keep both languages aligned. Write code, comments, identifiers, documentation and
commit messages in English; French page copy is intentional localisation. Preserve
semantic HTML, keyboard access and readable content without JavaScript. Keep copy
and primary links in generated HTML. Do not edit generated `dist/` files directly.

## Publishing and security

Pushes to `main` trigger `.github/workflows/pages.yml` to publish to GitHub Pages.
Confirm deployment status
and the live content before claiming publication. Never commit secrets, private
configuration or deployment credentials. Avoid AI attribution in commits.

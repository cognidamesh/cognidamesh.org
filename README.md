# Cognidamesh website

A bilingual blueprint for building open-source AI agent teams for scientific research, OSINT, authorised pentesting, countering disinformation, administrative management and financial management. The website shares an architectural blueprint and component choices, not a ready-to-install stack distribution.

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

The blueprint was checked against the deployment specification and Ansible roles on 2026-10-13. It presents generic capabilities first, followed by recommended components. Hindsight is the current preferred memory component. vLLM, TensorFold and the open-source LiteLLM core are proposed inference options, not claims about the reference deployment. Runtime and model licences must be evaluated separately. No private deployment configuration is included.

## Publication

GitHub Actions builds and publishes the static website to GitHub Pages on pushes to `main`. Set the Pages source to GitHub Actions and the custom domain to `cognidamesh.org`. DNS must point to GitHub Pages before the TLS certificate can be issued. The build emits a `CNAME`, sitemap, robots file, canonical URLs and language alternates.

The component catalogue also includes optional commercial or source-available choices (Tavily, the CloakBrowser binary, Claude Code, Bob Shell and Terraform). These are identified separately from the fully open-source goal. OpenTofu provides an open-source infrastructure-as-code option. BMAD and Strix illustrate reusable skills and domain workflows. Abliterated models are described as a way to reduce learned refusals, with independent harness security and intent guardrails required. Unsloth is an optional model fine-tuning component with a separate training and evaluation workflow.

## Build your own infrastructure

The final section on each language page provides a short copyable prompt linking
to `https://cognidamesh.org/agents.md`. The build publishes the English
implementation guide from `src/blueprint/AGENTS.md` at that URL. It covers component
selection, harness security, fine-tuning, infrastructure code, target validation
and deployment. The agent adapts it to the operator's project and existing
instructions; it is not an automatic installer or a guarantee of agent support.

The repository root `AGENTS.md` contains website contributor instructions. Keep
it distinct from the public infrastructure guide. Prompt copying uses the browser
clipboard API, with text selection and manual copying as a fallback. The prompt
and guide link remain available without JavaScript.

An in-page agent compass appears above the hero on every language page. Its static
links point to the implementation guide, architecture and starter prompt, so they
remain discoverable without JavaScript. The HTML head also links to the guide with
`rel="describedby"` and `type="text/markdown"`; this advertises the resource without
assuming automatic discovery or execution by every coding agent.

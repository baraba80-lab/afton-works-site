# afton-works-site

Official website source for **AFTON**.

> Familiar, not identifiable.

This repository is intentionally separate from FormulLab, FMOC2, `fomull`, `FormulLab-3-`, and `worktwin-control-plane`.

## Status

- Site: temporary AFTON landing v0.1
- Domain: `afton.works`
- Source of truth: this GitHub repository
- Deployment: Cloudflare Workers Static Assets, not connected yet

## Local development

```powershell
npm install
npm run dev
```

## Verification

```powershell
npm run check
npm run build
npm run cf:dry-run
```

## Deployment boundary

Cloudflare deployment and custom-domain attachment happen only after the local preview is reviewed. Do not add FMOC2 APIs, commerce, analytics, tracking, CMS, or personal-data collection to v0.1.

## Brand asset provenance

`public/brand/afton-wordmark.svg` is a vector-path export from the supplied official `afton매인.pdf`; the lettering is not retyped.
Official AFTON website — fragrance, objects, perception, and records around what remains after scent.

## Current priority
Build and publish a lightweight temporary landing experience before the full personalization system.

## Source-of-truth documents
- [`AGENTS.md`](./AGENTS.md) — rules for Codex / collaborating agents
- [`docs/00_PROJECT_STATUS.md`](./docs/00_PROJECT_STATUS.md) — current stage and scope
- [`docs/01_CONCEPT.md`](./docs/01_CONCEPT.md) — visual concept
- [`docs/02_VISUAL_REFERENCE_PLAN.md`](./docs/02_VISUAL_REFERENCE_PLAN.md) — reference and image-generation plan
- [`docs/04_GENERATED_ASSET_INDEX.md`](./docs/04_GENERATED_ASSET_INDEX.md) — generated-image index
- [`docs/05_CONCEPT_SHEET_BATCH01.md`](./docs/05_CONCEPT_SHEET_BATCH01.md) — first concept sheet

## Core line
**Familiar, but not identifiable.**

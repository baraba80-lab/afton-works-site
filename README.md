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

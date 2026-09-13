# AFTON Site — Agent Instructions

This repository is the source of truth for the AFTON public website.

## Current priority
The immediate goal is NOT to build the full personalization system. The immediate goal is to publish a lightweight temporary landing experience that establishes AFTON's visual language.

## Design principle
**Structure is precise. Perception is slightly unstable.**

AFTON should feel familiar but difficult to identify. Keep layout, navigation, typography hierarchy, and buying paths clear. Introduce strangeness only through image behavior, repetition, timing, cropping, small spatial displacement, or one contradictory detail.

### One Wrong Thing Rule
Each screen may contain one intentionally anomalous element. Never stack multiple anomalies at once.

## Do not implement yet
- FMOC2 production API integration
- checkout / reservations
- review crawling pipelines
- personal scent zero-point calculation
- heavy WebGL or realtime generative rendering
- workshop hardware integration

These remain documented future targets.

## Performance rule
The temporary site must remain extremely light. Prefer static image / CSS / SVG. Any animation or generated media must have a static fallback.

## Working method
1. Read `/docs` before design or code changes.
2. Treat concept and measurement separately.
3. Do not invent final numeric design tokens prematurely.
4. Record every tested value in `docs/03_MEASUREMENT_LEDGER.md`.
5. Reference images may guide composition and behavior, but do not directly copy another studio's work.
6. Commit coherent, reviewable changes.

## Current visual references
Use as directional references only:
- Studio Dumbar / DEMO: controlled variation, variable identity
- FIELD.IO: data-driven behavior
- onformative: translating invisible data into perceptual form
- Bureau Borsche: contemporary editorial tension
- Teenage Engineering: functional hierarchy and restraint

AFTON must not look like any one of these references.

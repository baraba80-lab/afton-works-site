# AFTON Site — Agent Instructions

This repository is the source of truth for the AFTON public website.

## Current priority
The immediate goal is NOT to build the full personalization system. The immediate goal is to publish a lightweight temporary landing experience that establishes AFTON's visual language.

Before implementing the landing, complete the current visual research / concept-sheet task in `CODEX_TASK.md`.

## Founder continuity rule
AFTON is not an anonymous perfume brief and this repository is not a disposable delivery package.

The founder is a technician, builder, researcher, designer, and venture/system architect whose work moves from concept through physical execution, operating design, research, and commercialization. Previous projects repeatedly created value that was later handed to other operators. AFTON must preserve authorship, reusable IP, research data, customer relationships, and commercial return without turning collaboration into a struggle for total control.

Before changing positioning, information architecture, business logic, credits, ownership language, or the public narrative, read:
- `docs/15_HINGE_AND_RULE_ARCHIVE_ANALYSIS.md`
- `docs/16_FOUNDER_OPERATING_SYSTEM.md`
- `docs/17_AFTON_VENTURE_ARCHITECTURE_AND_ROADMAP.md`
- `docs/18_CROSS_AGENT_HANDOFF_2026-09-13.md`

Allocate work by demonstrated fit: the founder leads planning, structure, design, systems, and marketing; Soappuccino leads perfumery practice, materials, sampling, and sensory evaluation. Do not reduce either party to a hidden service provider, and do not imply ownership transfers that have not been explicitly agreed in writing.

## Design principle
**Structure is precise. Perception is slightly unstable.**

AFTON should feel familiar but difficult to identify. Keep layout, navigation, typography hierarchy, and buying paths clear. Introduce strangeness only through image behavior, repetition, timing, cropping, small spatial displacement, or one contradictory detail.

### One Wrong Thing Rule
Each screen may contain one intentionally anomalous element. Never stack multiple anomalies at once.

## Image-generation execution boundary
AFTON image prompts are planned and versioned in this repository.

**New visual generation must be executed through Codex browser control in the Higgsfield web UI.**

Do not generate new AFTON visual assets through ChatGPT-side image tools, direct Higgsfield API calls, Higgsfield MCP generation calls, or automated batch generation unless the user explicitly changes this rule.

Follow:
- `docs/06_HIGGSFIELD_BROWSER_EXECUTION.md`
- `docs/07_IMAGE_PROMPT_LIBRARY.md`
- `docs/08_CONCEPT_SHEET_SPEC.md`
- `CODEX_TASK.md`

Existing Batch 01 images are archival exploration only and do not authorize additional direct generation.

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
6. External reference imagery is research-only unless separately licensed.
7. Keep browser-generation logs free of credentials, cookies, billing details, tokens, and account secrets.
8. Commit coherent, reviewable changes.

## Internal archive boundary

Hinge & Rule's internal estimates, contracts, project documents, furniture drawings, shop drawings, site drawings, CAD/model files, and field records are private source material. They may be inspected read-only when the founder has already made the relevant storage available, but they must not be copied into this public repository.

For internal-archive research, follow `docs/28_HINGE_INTERNAL_ARCHIVE_RESEARCH_HANDOFF.md`. Commit only sanitized indexes and findings. Use abstract source IDs instead of exact private paths, and never commit customer contacts, signatures, bank or tax identifiers, exact residential addresses, credentials, confidential contract terms, or unapproved line-item pricing.

## Current visual references
Use as directional references only:
- Studio Dumbar / DEMO: controlled variation, variable identity
- Studio Dumbar / Aithyra: organic computation without literal science graphics
- FIELD.IO: data-driven behavior
- onformative: translating invisible data into perceptual form
- Bureau Borsche: contemporary editorial tension
- Teenage Engineering: functional hierarchy and restraint
- Ffern: process, archive and physical evidence

AFTON must not look like any one of these references.

# AFTON — Reference Contact Sheet Spec / Phase B

## Objective
Turn the completed Phase A reference collection into one review surface so the user can judge the actual visual evidence before any Higgsfield generation begins.

This phase is **curation only**. Generation remains on HOLD.

## Inputs
Use only:
- `research/REFERENCE_MANIFEST.md`
- `docs/12_MOTIF_REVIEW_CURRENT.md`
- files already committed under `research/reference-only/`

Do not add unrelated web references unless an existing entry is broken or unusable.

## Required output
Create:
- `docs/13_REFERENCE_CONTACT_SHEET_CURRENT.md`

Optional browser-friendly companion:
- `research/reference-contact-sheet.html`

The Markdown file is the source of truth.

## Image normalization
Before building the sheet, normalize the filenames in `research/reference-only/` so every image has a real image extension (`.jpg`, `.png`, `.webp`) matching the actual file format.

Rules:
- preserve content bytes
- preserve one-to-one mapping with `research/REFERENCE_MANIFEST.md`
- update manifest paths after rename
- do not recompress, resize, crop, recolor, or otherwise alter third-party references in this phase
- do not move reference-only images into `public/`

## Contact sheet organization
Group by motif, in this order:

### M01 — CONTROLLED VARIATION
- Studio Dumbar / DEMO
- FIELD.IO / Scalable Storytelling
- FIELD.IO / adidas REAL-RAW-FAST

### M03 — AMBIGUOUS CENTER
- onformative / AI Inspiration Tool

### M04 — ORDER + ONE CONTRADICTION
- Bureau Borsche / Bavarian State Opera
- Teenage Engineering / OP-1 + field system

### M06 — ARCHIVE / RETURN / TIME
- Ffern / Archive + Artefacts

### Supporting only
#### M02 — DATA BECOMES BEHAVIOR
- FIELD.IO / IBM Think 2020
- onformative / Growing Data

#### M05 — AMBIENT RESIDUE
- onformative / Samsung The Wall

## Card format
For every reference frame show:
1. image thumbnail
2. reference ID
3. source / project
4. exact source URL
5. motif
6. `BORROW` — one sentence describing the design principle AFTON may borrow
7. `DO NOT COPY` — one sentence naming the source-specific visual treatment that must not be copied
8. `AFTON USE` — choose one or more:
   - HERO STRUCTURE
   - IMAGE BEHAVIOR
   - TYPOGRAPHY RELATION
   - GRID / SPACING
   - ONE WRONG THING
   - ARCHIVE / NAVIGATION
   - FUTURE INTERACTION

## Review layer
At the top of `docs/13_REFERENCE_CONTACT_SHEET_CURRENT.md`, add a compact matrix for the four primary motifs:

| Motif | Landing relevance | Visual distinctiveness | Copy-risk | Decision |
|---|---:|---:|---:|---|

Use qualitative scores only: LOW / MEDIUM / HIGH.
Do not invent numeric precision.

## Micro-selection task
For M01, M03, and M04, identify the **specific transferable visual moves** rather than keeping only abstract labels.

Examples of acceptable output:
- stable outer grid + one variable internal field
- central unresolved object occupying less than one-third of the viewport
- one displaced micro-label against otherwise exact alignment
- image crop that hides the explanatory context but preserves material evidence

Examples of unacceptable output:
- make it like Studio Dumbar
- use Bureau Borsche style
- copy OP-1 colors
- add generic AI distortion

For M06, define only the information-architecture implication, not a visual imitation.

## Required conclusion
End the contact sheet with:

### PROPOSED AFTON LANDING GRAMMAR v0.1
No more than 6 rules total.
Each rule must be implementable later in CSS/layout/image direction.

Then add:

### USER APPROVAL GATE
- APPROVE AS-IS
- APPROVE WITH CHANGES
- RECOLLECT REFERENCES

Do not advance to prompt execution without explicit user approval.

## Hard rules
- No Higgsfield generation
- No image-generation API/MCP use
- No credit spend
- No landing deployment
- No third-party reference asset may ship publicly
- Do not silently add new motifs

## Completion condition
Phase B is complete when:
1. reference filenames are normalized
2. manifest paths are updated
3. the contact sheet renders all collected references
4. each frame has BORROW / DO NOT COPY / AFTON USE annotations
5. M01/M03/M04 are reduced to concrete transferable moves
6. `PROPOSED AFTON LANDING GRAMMAR v0.1` exists
7. generation remains on HOLD

# CODEX TASK — AFTON Visual Research / Phase B

## Current objective
Build the **reference contact sheet and concrete landing grammar** from the completed Phase A collection.

Phase A reference collection is complete.

**Do not generate images yet.**
Higgsfield generation remains on HOLD until the user reviews and explicitly approves the contact sheet / landing grammar.

## Read first
1. `AGENTS.md`
2. `docs/18_CROSS_AGENT_HANDOFF_2026-09-13.md`
3. `docs/16_FOUNDER_OPERATING_SYSTEM.md`
4. `docs/17_AFTON_VENTURE_ARCHITECTURE_AND_ROADMAP.md`
5. `research/REFERENCE_MANIFEST.md`
6. `docs/11_DESIGN_MOTIF_LIBRARY_V01.md`
7. `docs/12_MOTIF_REVIEW_CURRENT.md`
8. `docs/13_REFERENCE_CONTACT_SHEET_SPEC.md`
9. `docs/07_IMAGE_PROMPT_LIBRARY.md` — planning material only; do not execute

## Phase B — contact sheet + motif micro-selection

### Step 1 — normalize reference filenames
Inspect the existing files under:
`research/reference-only/`

Normalize filenames so every reference file has the correct image extension matching its actual format.

Rules:
- preserve the original bytes
- do not resize / recompress / crop / recolor
- keep all third-party references under `research/reference-only/`
- update `research/REFERENCE_MANIFEST.md` to the final normalized paths

### Step 2 — build the contact sheet
Create:
`docs/13_REFERENCE_CONTACT_SHEET_CURRENT.md`

Follow `docs/13_REFERENCE_CONTACT_SHEET_SPEC.md` exactly.

If useful for visual inspection, also create:
`research/reference-contact-sheet.html`

The Markdown file remains the source of truth.

The contact sheet must show all 14 collected references and group them by motif.

### Step 3 — annotate every frame
For each reference frame record:
- source / project
- exact source URL
- motif
- BORROW
- DO NOT COPY
- AFTON USE

Keep the analysis tied to what the actual collected frame demonstrates.
Do not fill gaps from general design knowledge when the frame does not support the claim.

### Step 4 — motif micro-selection
Use the evidence to reduce the primary motifs into **concrete visual moves**.

Focus first on:
- M01 CONTROLLED VARIATION
- M03 AMBIGUOUS CENTER
- M04 ORDER + ONE CONTRADICTION

M06 ARCHIVE / RETURN / TIME should become an information-architecture rule rather than a copied visual treatment.

M02 and M05 remain supporting/future interaction motifs.

### Step 5 — proposed landing grammar
End `docs/13_REFERENCE_CONTACT_SHEET_CURRENT.md` with:
`PROPOSED AFTON LANDING GRAMMAR v0.1`

Maximum 6 rules.
Every rule must be concrete enough to implement later in CSS/layout/image direction.

Do not define fake precision. If no real measurement has been tested, describe the relationship qualitatively.

### Step 6 — stop for user approval
Stop after the contact sheet and landing grammar are committed.

Do **not**:
- generate in Higgsfield
- use image-generation API/MCP tools
- spend credits
- execute P01–P24
- build or merge a final landing
- deploy the site

Wait for explicit user approval.

## Completion condition for Phase B
The task is complete when the repository contains:
1. normalized reference filenames
2. updated `research/REFERENCE_MANIFEST.md`
3. `docs/13_REFERENCE_CONTACT_SHEET_CURRENT.md`
4. optional `research/reference-contact-sheet.html` if useful
5. concrete micro-selection for M01/M03/M04
6. `PROPOSED AFTON LANDING GRAMMAR v0.1`
7. a concise commit / issue comment reporting Phase B completion
8. no new generated media and no credit spend

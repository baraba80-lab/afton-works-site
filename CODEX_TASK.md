# CODEX TASK — AFTON Visual Research / Phase B

## Current objective
Build the **reference contact sheet and concrete landing grammar** from the completed Phase A collection.

Phase A reference collection is complete.

**Do not generate images yet.**
Higgsfield generation remains on HOLD until the user reviews and explicitly approves the contact sheet / landing grammar.

## Binding founder correction — Hinge & Rule

For any Hinge & Rule strategy, archive interpretation, feed planning or service-language work, read:

- `docs/31_HINGE_FIELD_DESIGN_MAKING_TRANSITION.md` v0.2
- `docs/33_GIT_RECEIPT_HINGE_CARPENTRY_DAY_CORRECTION.md`

Do not recreate the superseded standalone `FIELD DESIGN DAY`, `DRAWING SPRINT` or design-consulting products. The binding model is one design-capable carpenter paid by the carpentry workday; planning, measurement, sketches, CAD, material takeoff, order support and direct tool work occur inside that workday. Design-only and planning-only commissions are excluded. Clients directly order and pay for materials and directly select, contract, pay and may replace all other trades. Hinge & Rule does not take the full interior contract or manage the whole site.

## Read first
1. `AGENTS.md`
2. `docs/18_CROSS_AGENT_HANDOFF_2026-09-13.md`
3. `docs/16_FOUNDER_OPERATING_SYSTEM.md`
4. `docs/17_AFTON_VENTURE_ARCHITECTURE_AND_ROADMAP.md`
5. `docs/20_INSTAGRAM_ARCHIVE_TRANSITION_PLAN.md`
6. `docs/22_HINGE_CLOSING_EDITION_CONTACT_SHEET.md`
7. `docs/23_UNSEEN_ISSUE01_CONTACT_SHEET.md`
8. `docs/25_HINGE_AND_RULE_PUBLIC_TRACE_REPORT.md`
9. `research/REFERENCE_MANIFEST.md`
10. `docs/11_DESIGN_MOTIF_LIBRARY_V01.md`
11. `docs/12_MOTIF_REVIEW_CURRENT.md`
12. `docs/13_REFERENCE_CONTACT_SHEET_SPEC.md`
13. `docs/07_IMAGE_PROMPT_LIBRARY.md` — planning material only; do not execute

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

---

## Parallel authorized task — Hinge & Rule internal archive research

The founder confirmed that the public-web trace is only an outer index. The primary evidence is held in internal estimates, saved project documents, furniture drawings, shop drawings, site drawings, revision files, and related records.

Read and follow:

- `docs/28_HINGE_INTERNAL_ARCHIVE_RESEARCH_HANDOFF.md`
- `research/hinge-and-rule-internal-archive/INTERNAL_ARCHIVE_INDEX_TEMPLATE.csv`

This is a read-only discovery and indexing task. It does not cancel or relax the Phase B image-generation HOLD.

Do not commit original internal documents, exact private storage paths, customer contact details, signatures, account/tax identifiers, residential addresses, confidential contract terms, or unapproved line-item pricing. Use abstract source IDs in the public repository and keep any source locator local and untracked.

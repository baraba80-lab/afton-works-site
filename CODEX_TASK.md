# CODEX TASK — AFTON Visual Research + Higgsfield Browser Run

## Objective
Use browser control to research references, generate AFTON visual studies in the Higgsfield web UI, collect the outputs, curate them, and build the current concept sheet.

Do not use ChatGPT-side image tools, direct Higgsfield API generation, or Higgsfield MCP generation for this task.

## Read first
1. `AGENTS.md`
2. `docs/00_PROJECT_STATUS.md`
3. `docs/01_CONCEPT.md`
4. `docs/02_VISUAL_REFERENCE_PLAN.md`
5. `docs/06_HIGGSFIELD_BROWSER_EXECUTION.md`
6. `docs/07_IMAGE_PROMPT_LIBRARY.md`
7. `docs/08_CONCEPT_SHEET_SPEC.md`

## Browser sequence

### Step 1 — reference research
Use the browser to visit primary/official pages for the reference list in `docs/06_HIGGSFIELD_BROWSER_EXECUTION.md`.

Create or update:
`research/REFERENCE_MANIFEST.md`

Target 12–18 reference images total. Capture only what is needed to study composition, behavior and material logic. Do not use reference images as public site assets.

If screenshots are saved, put them under:
`research/reference-only/`

### Step 2 — Higgsfield preflight
Open Higgsfield in the browser using the user's existing authenticated session.

Record only non-sensitive state in:
`research/HIGGSFIELD_RUN_LOG.md`

Record:
- date/time
- visible model selected
- visible image format / quality
- whether an applicable Unlimited toggle is visibly available
- visible credit cost before a run when the UI shows it

Never record credentials, cookies, tokens, billing details, or account identifiers.

If login/MFA/payment/upgrade is required, stop and report the blocker.

### Step 3 — Round 1
Run exactly these prompt IDs first:
- P01
- P04
- P07
- P10
- P13
- P16

Use the full prompt text in `docs/07_IMAGE_PROMPT_LIBRARY.md`.

Default:
- 16:9
- one output per prompt
- highest already-included quality that does not require a purchase or plan upgrade
- private/non-public generation when the UI offers a privacy choice

Do not multiply outputs automatically.

Download all six results to:
`public/assets/concept/higgsfield/r01/`

Use deterministic names beginning with the prompt ID.

### Step 4 — Round 1 concept sheet
Create:
`docs/09_CONCEPT_SHEET_CURRENT.md`

Follow `docs/08_CONCEPT_SHEET_SPEC.md`.

Score every result. Mark each:
- KEEP
- DEVELOP
- REJECT

Select at most three families for further work.

### Step 5 — Round 2 only if justified
For each surviving family, execute the two remaining core prompts in that family.

Examples:
- if FIELD / DIFFUSION survives, run P02 and P03
- if FIELD / RESIDUE survives, run P05 and P06
- etc.

Maximum Round 2 output count: 6.

Save to:
`public/assets/concept/higgsfield/r02/`

Update run log and concept sheet.

### Step 6 — landing adaptation
Only after a winner is clear, use P19–P24 as needed.

Do not run all six by default. Use only the deployment prompts that solve an actual page need.

If the Higgsfield UI supports reference-image input, use only selected AFTON-generated studies as references unless the user explicitly asks for an external-reference experiment.

Save to:
`public/assets/concept/higgsfield/r03/`

### Step 7 — final curation
Update:
- `research/REFERENCE_MANIFEST.md`
- `research/HIGGSFIELD_RUN_LOG.md`
- `docs/09_CONCEPT_SHEET_CURRENT.md`
- `docs/03_MEASUREMENT_LEDGER.md` if any real crop/file-weight values were tested

Do not build the full landing page until the concept sheet has a clear selected visual direction.

## Hard stop rules
Stop and report rather than improvise when:
- login/MFA is needed
- purchase or plan upgrade is needed
- a generation appears unexpectedly expensive
- privacy/publication state is unclear
- download fails
- the model/UI has materially changed and the prompt cannot be executed faithfully

## Completion condition
The task is complete when the repository contains:
1. attributed reference manifest
2. Higgsfield browser run log
3. downloaded original AFTON studies from the executed rounds
4. current concept sheet with curation decisions
5. a concise commit message describing the browser run

Do not publish the site or Higgsfield outputs publicly unless separately requested by the user.
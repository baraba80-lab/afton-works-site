# CODEX TASK: non-design editorial core review and continuation

Status: IMPLEMENTATION_CANDIDATE / USER_PREPARING_DESIGN
Boundary: GENERATION HOLD / CREDIT SPEND HOLD / MERGE HOLD / DEPLOY HOLD

The user delegated non-design work after taking visual design back. Do not restart mood research or generate images. The earlier contact-sheet phase is historical; retain its evidence.

## Read first
1. AGENTS.md
2. docs/20_DIRECTION_APPROVAL_AND_FOUNDER_HANDOFF.md (context-only correction)
3. docs/EDITORIAL_CORE_V01.md
4. Current branch source and tests; re-read refs and check other work before edits.

## Immediate task
Review the executable candidate slice, not another strategy memo. Reuse the eight entity contracts and implement/fix only what actual test evidence requires. The web GPT has prepared a tested reference implementation on an isolated branch; this is not a claim that Codex executed it.

1. Verify the candidate against the current repo and existing Astro lockfile.
2. Run npm ci under Node >=22.12.0, then npm run verify:editorial.
3. Serve dist only on localhost and run the Playwright smoke harness. Check Home -> Issue -> Article -> Scent Dossier -> Info and the direct Home -> Scent route.
4. Inspect candidate/public boundaries, missing data, valid link/anchor destinations, and correct handling of issue query context.
5. Check the strict renderer boundary: no personal notes, reference images, formula/private data, invented product facts or new design themes.
6. Reconcile any differences from the long-form candidate contract; keep design separate. Do not quietly claim full conformance where the current slice is deliberately narrower.
7. Return tested SHA, changed files, actual logs, concrete remaining items and next action.

## Do not block on
User artwork, new photography, founder/profile content, CMS setup, equipment, payment, or filename normalization.

## Next functional backlog after review
- Optional unpublished-related-content warnings (currently excluded from public views without warnings).
- Expanded accessibility regression: screen-reader manual review, real browser zoom and long-title fixture build.
- Route redirect map only if a previously published slug actually changes.
- Install user's design later through rendering components, not by changing source entities or inventing content.

Source-record work on main is a separate track; do not overwrite it or expose its contents. No automatic timer or external agent execution is established by this file.

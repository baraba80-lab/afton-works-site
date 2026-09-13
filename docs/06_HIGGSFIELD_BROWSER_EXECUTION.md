# AFTON — Higgsfield Browser Execution Protocol

## Authority
This document defines how visual research and Higgsfield generation must be executed for the AFTON website.

**Important boundary:** planning happens in the repository; image generation happens only through Codex browser control in the Higgsfield web UI. Do not generate new AFTON images from ChatGPT-side image tools, API calls, MCP generation calls, or background automation unless the user explicitly changes this rule.

Existing Batch 01 images are archival exploration only. They are not approval and they are not permission to continue direct generation outside the browser workflow.

## Goal
Build an internal visual reference board, generate controlled original AFTON studies in Higgsfield through the browser, curate them, and assemble a concept sheet that can drive the temporary landing page.

The public site must eventually use only original or properly licensed assets. External references are research-only.

---

# 1. Browser-control rules

1. Use the user's already-authenticated browser session when available.
2. Never request, expose, copy, or store passwords, recovery codes, payment details, or session tokens in the repository.
3. If login, MFA, payment, subscription change, credit purchase, or any other sensitive action is required, stop and request user action.
4. Never buy credits, upgrade plans, or start paid subscriptions automatically.
5. Before generating, inspect the visible Higgsfield balance / Unlimited state in the UI and record only the non-sensitive status in the run log.
6. If an Unlimited toggle exists in the UI, use it only when it clearly applies to the selected model and the user already has access. Do not infer entitlement.
7. Use browser UI controls, not Higgsfield API/MCP generation endpoints.
8. Do not publish to the Higgsfield community feed unless the user explicitly requests publication.

---

# 2. Research collection before generation

Collect references from official or primary-source pages where possible. Avoid Pinterest-style reuploads as the main source.

Target reference sources:
- Studio Dumbar / DEMO — controlled variation
- Studio Dumbar / Aithyra — organic computation without molecule cliché
- FIELD.IO — generative behavior driven by invisible data
- onformative — perceptual translation of data
- Bureau Borsche — editorial image/type tension
- Teenage Engineering — functional hierarchy and precise information design
- Ffern — process, archive, seasonality, physical evidence

## Reference capture target
Collect 12–18 images total, not hundreds.

For each reference capture, record:
- source / studio
- original URL
- page title
- what AFTON is studying from it
- what must NOT be copied
- local reference filename if a screenshot is saved

Store the manifest at:
`research/REFERENCE_MANIFEST.md`

If screenshots are saved, place them under:
`research/reference-only/`

Reference-only images must never be imported into the production public asset directory.

## What to study
- negative-space ratios
- scale contrast
- crop behavior
- translucent material behavior
- restrained physical texture
- systematic repetition
- one controlled visual contradiction
- relationship between exact typography and unstable imagery

Do not study reference images for direct formal copying.

---

# 3. AFTON visual DNA

Core statement:
**Familiar, but not identifiable.**

System statement:
**Structure is precise. Perception is slightly unstable.**

Image balance target:
- evidence / real physical material: about 60%
- field / memory / perceptual abstraction: about 40%

This is a curatorial ratio, not a hard numeric token.

## Material vocabulary
- warm ivory paper
- cold brushed or dull metal
- natural rough linen
- clear or pale blue-grey glass
- faint moisture rings
- blotter paper
- masking tape without readable text
- fine granular fields
- translucent planar overlaps
- slight pressure marks / residue
- faded mineral blue
- dusty grey-green
- graphite
- very small artificial coral / peach contradiction

## Lighting
- soft indirect daylight
- ordinary quiet room / studio light
- restrained editorial photography
- no glossy campaign lighting
- no black-background luxury perfume hero shot

## Composition
- strict underlying order
- large negative space
- asymmetric but balanced
- one wrong thing only
- delayed recognition rather than instant spectacle
- enough clean space for oversized typography
- crop resilience for desktop and mobile

## Global exclusions
Never ask the model for:
- perfume bottle as the hero object
- flowers as fragrance shorthand
- smoke / vapor clouds
- floating scent particles that look like glitter
- molecule diagrams
- brains / EEG / neuroscience graphics
- cyber HUD overlays
- neon sci-fi interface
- generic liquid CGI blobs
- obvious Bauhaus primary-color pastiche
- marble-and-gold luxury styling
- readable fake labels
- fake AFTON logo or generated typography

All logos and final typography must be added in layout, not generated inside the image.

---

# 4. Browser generation stages

## Round 0 — reference board only
Do not generate yet. Complete `research/REFERENCE_MANIFEST.md` first.

## Round 1 — six probes
Use prompt IDs:
- P01
- P04
- P07
- P10
- P13
- P16

Generate one result per prompt unless the browser clearly offers an included no-cost batch. Do not multiply results simply because the UI permits it.

Preferred initial format:
- 16:9
- highest reasonable quality that does not trigger a purchase or plan upgrade
- no text inside image

Download every result, even rejects, so the decision trail remains inspectable.

Naming:
`public/assets/concept/higgsfield/r01/P01_field-diffusion-a_01.ext`

Repeat the naming pattern for all prompt IDs.

## Round 1 review
Build a contact sheet and score each result before further generation.

Do not continue all six directions. Select at most three families.

## Round 2 — depth
For each selected family, run its remaining two core variants from the prompt library. Maximum 6 new images if three families survive.

If only one or two families are strong, generate less.

## Round 3 — landing adaptation
Use P19–P24 only after a clear winning visual language exists.

If Higgsfield browser supports image reference input, use only AFTON-generated images from prior rounds as references. Do not upload external studio reference images as direct generation references unless the user explicitly asks for that experiment.

---

# 5. Download and repository handling

Generated originals:
`public/assets/concept/higgsfield/`

Round structure:
- `r01/`
- `r02/`
- `r03/`

Do not silently overwrite files.

For every generation record:
- prompt ID
- date
- visible model name
- aspect ratio
- visible quality setting
- Unlimited / credits state shown in UI
- result filename
- KEEP / DEVELOP / REJECT
- one-line reason

Store run records in:
`research/HIGGSFIELD_RUN_LOG.md`

Do not store passwords, cookies, auth headers, billing identifiers, or account secrets.

---

# 6. Selection rubric

Score 1–5:
1. AFTON specificity
2. familiar-but-unidentifiable quality
3. material credibility
4. low cliché
5. negative-space quality
6. desktop crop resilience
7. mobile crop resilience
8. typography compatibility
9. ability to compress for the web
10. emotional aftertone

Reject an image even if attractive when it reads immediately as:
- generic perfume advertising
- generic AI abstraction
- science explainer
- luxury cosmetics campaign
- copied reference aesthetic

---

# 7. Concept sheet deliverables

After each round update:
- `research/REFERENCE_MANIFEST.md`
- `research/HIGGSFIELD_RUN_LOG.md`
- `docs/09_CONCEPT_SHEET_CURRENT.md`

The concept sheet must show:
- reference lessons, with source attribution
- original AFTON generated studies
- KEEP / DEVELOP / REJECT state
- winning image language
- palette/material observations
- cropping tests
- next prompt IDs to execute

Do not put external reference images into the public site assets.

---

# 8. Stop conditions

Stop browser execution and report instead of improvising if:
- Higgsfield requires login or MFA
- purchase / plan upgrade is required
- a requested model is not available
- the UI appears to charge an unexpectedly high credit amount
- generation terms or public/private setting is unclear
- file downloads cannot be confirmed
- the browser cannot safely distinguish the user's workspace from public/community areas

The goal is a reproducible art-direction workflow, not maximum image volume.
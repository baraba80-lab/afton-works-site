# CODEX TASK — AFTON Non-Visual Editorial Core

## Current objective

Implement the design-neutral AFTON editorial core and five-page reading path while the user prepares the visual design separately.

Primary handoff:
- `docs/22_NON_VISUAL_EDITORIAL_CORE_HANDOFF.md`

The R08-led design direction remains approved as research context, but final visual design is user-owned and must not block this implementation slice.

## Read first

1. `AGENTS.md`
2. `docs/20_DIRECTION_APPROVAL_AND_FOUNDER_HANDOFF.md`
3. `docs/22_NON_VISUAL_EDITORIAL_CORE_HANDOFF.md`
4. `docs/13_REFERENCE_CONTACT_SHEET_CURRENT.md` — design research history only
5. `research/REFERENCE_MANIFEST.md` — research provenance only

Do not restart Phase B reference approval or image-generation planning.

## Required implementation

Reuse the existing Astro project.

Implement and validate:

- `/`
- `/issues/[slug]/`
- `/articles/[slug]/`
- `/scents/[slug]/`
- `/info/`

Required paths:

`Home → Issue → Article → Scent Dossier → Info / sample information`

and:

`Home → Scent Dossier`

Implement the eight core entity contracts:

- Issue
- Article
- ScentDossier
- Material
- Object
- Record
- Product
- Availability

Use one clearly marked candidate fixture set. Keep unknown facts genuinely unknown. Do not insert personal context, private research, reference imagery or excluded generated images into public-facing fixtures.

## Implementation rules

- IDs and slugs are separate.
- Issue owns ordered Article references.
- Reverse relationships are derived, not duplicated.
- Runtime validation is required.
- Sensory reference material is distinct from documented formula ingredients.
- Availability defaults to `unknown` unless a valid accepted state exists.
- No image is required for the core to work.
- Semantic HTML and minimal legibility CSS only; do not make final design decisions.
- Preserve the official wordmark.
- Existing exploratory visual files may remain, but do not force ScentField or legacy visual tokens into the new core.

## Fresh validation required

Run and report fresh results for:

- `npm run check`
- `npm run build`
- newly added unit/content-integrity tests

Test at minimum:

- required fields and enums;
- duplicate IDs/slugs;
- broken/wrong-type references;
- Issue article order;
- reverse indexing;
- Availability constraints;
- candidate/public separation;
- raw-HTML safety;
- internal links and anchors;
- valid/invalid Issue context on Article;
- empty/product/availability states;
- headings, main landmark, skip link and keyboard navigation;
- narrow viewport / long title overflow;
- no personal-context, third-party reference or excluded generated assets in build output;
- no checkout/login/personalization/FMOC2 code;
- adding one Article to data automatically exposes a working list entry and page.

Do not reuse old PR test results as proof of the new implementation.

## Deliverable

Return:

1. working local five-page path;
2. content contracts and candidate dataset;
3. runtime and relationship validation;
4. fresh check/build/test output;
5. exact tested SHA;
6. changed files;
7. blockers;
8. next owner/action;
9. concise Git receipt.

Do not stop at another strategy document.

## Hard HOLDs

Do not:

- generate images;
- spend credits;
- run Higgsfield prompt rounds;
- merge PR #1;
- deploy or attach `afton.works`;
- add checkout/reservations;
- synchronize real inventory;
- add accounts/login;
- add personalization;
- connect FMOC2;
- publish candidate fixtures as confirmed product facts.

FINAL STATUS: IMPLEMENTATION_AUTHORIZED / DESIGN_USER_OWNED / MOOD_APPROVAL_REQUIRED / GENERATION HOLD / CREDIT SPEND HOLD / MERGE HOLD / DEPLOY HOLD

# AFTON — Non-Visual Editorial Core Handoff

Date: 2026-09-14
Status: IMPLEMENTATION_AUTHORIZED / DESIGN_USER_OWNED / MOOD_APPROVAL_REQUIRED
Release boundary: GENERATION HOLD / CREDIT SPEND HOLD / MERGE HOLD / DEPLOY HOLD

## 1. User decision

The user explicitly delegated the next website step to the agents with one important division:

- the user will prepare the visual design / mood;
- web GPT and Codex should continue the non-visual website work autonomously;
- do not keep generating design mockups or mood images;
- do not wait for final visual design before implementing the content/data/navigation core.

Personal background and founder-analysis documents remain collaboration context only. They are not website content unless separately authorized.

## 2. Immediate implementation objective

Build a working, design-neutral editorial core using the existing Astro project.

Required routes:

- `/`
- `/issues/[slug]/`
- `/articles/[slug]/`
- `/scents/[slug]/`
- `/info/`

Required reading paths:

`Home → Issue → Article → Scent Dossier → Info / sample information`

and the shortcut:

`Home → Scent Dossier`

The implementation must work without approved image assets or final CSS art direction.

## 3. Core entity contracts

Implement and validate these eight entities:

- Issue
- Article
- ScentDossier
- Material
- Object
- Record
- Product
- Availability

Rules:

- IDs are stable and separate from slugs.
- Slugs are route identifiers and must be unique within their route namespace.
- Issue owns ordered `articleIds`.
- Article references related ScentDossier entities.
- ScentDossier references Material / Object / Record.
- Product references one ScentDossier.
- Availability references one Product; at most one current Availability record per Product in v0.1.
- Reverse relationships are derived by indexes, not duplicated in both directions.
- Sensory-reference material must not be presented as a documented fragrance ingredient.
- TypeScript declarations do not replace runtime validation.

## 4. Candidate fixture set

Use one clearly marked CANDIDATE dataset for structural testing:

- one Issue;
- one Article;
- one ScentDossier;
- optional one Material, one Object, one Record and one sample-format Product;
- Availability defaults to `unknown` unless an accepted manual state exists.

Candidate names and descriptive copy must not be promoted to confirmed product facts.

Do not invent:

- prices;
- launch dates;
- availability dates;
- customer reviews;
- contacts;
- production claims;
- real observations or experiments.

Personal archive or personality-context material must not enter fixtures, metadata or generated output.

## 5. Rendering boundary

The user owns visual design decisions. Therefore this slice should use semantic, neutral rendering only.

Allowed now:

- semantic HTML;
- basic layout needed for legibility and QA;
- official AFTON wordmark already in the repository;
- clear review-only state labels;
- empty and unavailable states.

Not authorized now:

- final color system;
- final typography;
- mood imagery;
- new hero art;
- image generation;
- WebGL or heavy motion;
- redesigning the official logo.

Do not force the existing ScentField or legacy visual CSS into the new core. Preserve old exploratory files unless an exact implementation conflict requires an isolated change.

## 6. Route and relationship behavior

### Home

Show the available candidate Issue and ScentDossier entries and provide valid routes into them. Do not require visitors to read the editorial path before accessing scent information.

### Issue

Show title, optional introduction and the actual ordered Article list. If there is only one Article, render one Article. Do not fabricate filler entries.

### Article

Show structured body content and related ScentDossier navigation. When an Issue context is provided, verify that the Issue actually contains the Article; otherwise discard the false context and render the Article independently.

### Scent Dossier

Show available candidate description, related context and informational Product / Availability state. Product information remains non-transactional.

### Info

Show AFTON/service/sample information only. Do not add founder biography or private collaboration context. Do not invent contact details.

## 7. Empty and unavailable states

- missing Issue: honest empty state and retain usable routes to scent/Info where possible;
- empty Article list in draft/review mode: explicit incomplete state;
- missing ScentDossier: truthful empty state, no broken link;
- missing Product: state that product format information is not registered;
- missing price: omit it, never display zero;
- missing Availability: `unknown`;
- unavailable/discontinued Product: keep Dossier readable;
- missing image: emit no broken image element and keep the page usable.

Do not convert unknown into sold out or available.

## 8. Tests required

Implement and run tests for:

1. missing required fields;
2. duplicate IDs;
3. duplicate route slugs;
4. invalid enum/state values;
5. broken references;
6. wrong entity-type references;
7. Issue Article ordering;
8. reverse relationship indexing;
9. one-Availability-per-Product rule;
10. candidate content not treated as public confirmed content;
11. structured content not executed as raw HTML;
12. valid internal routes and anchors;
13. direct Article route with valid and invalid Issue context;
14. unknown / unavailable / no-product states;
15. one h1, logical headings, main landmark and skip link;
16. keyboard navigation and descriptive link names;
17. narrow viewport and long Korean/English title overflow;
18. absence of personal-context material, third-party reference images and excluded generated imagery in build output;
19. absence of checkout, login, personalization and FMOC2 integration;
20. adding another Article entity makes it appear in the Issue list and produces a working Article page without hand-editing the page template.

Use the existing `npm run check` and `npm run build` commands and add a real test command if needed. Do not report prior PR checks as fresh validation.

## 9. Active instruction reconciliation

Before implementation, update active project instructions so they no longer send Codex back to Phase B visual research.

Preserve:

- the 14-frame reference record;
- the approved R08-led direction as design research history;
- official brand assets;
- existing exploratory code and documents unless a specific conflict is documented.

Supersede as active task:

- the old `CODEX_TASK.md` Phase B contact-sheet objective;
- any interpretation that image generation must precede the editorial core;
- legacy palette or layout values as if they were final approved mood.

## 10. Completion condition

The slice is complete only when Codex provides:

- working local routes for Home, Issue, Article, Scent Dossier and Info;
- a design-neutral candidate dataset and runtime validation;
- working relationship indexes and navigation;
- explicit empty/unavailable states;
- fresh check/build/test results;
- exact tested commit SHA;
- changed-file list;
- specific blockers and next owner/action;
- a Git receipt on the candidate branch.

Do not end with a strategy-only document and call the task implemented.

## 11. Hard HOLDs

Do not:

- generate images;
- spend credits;
- execute Higgsfield prompt rounds;
- merge PR #1;
- deploy or attach `afton.works`;
- implement checkout or reservations;
- synchronize real inventory;
- add login/accounts;
- add personalization;
- connect FMOC2;
- publish candidate fixtures as confirmed product information.

FINAL STATUS: IMPLEMENTATION_AUTHORIZED / DESIGN_USER_OWNED / MOOD_APPROVAL_REQUIRED / GENERATION HOLD / CREDIT SPEND HOLD / MERGE HOLD / DEPLOY HOLD

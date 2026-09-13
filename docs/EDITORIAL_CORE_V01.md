# AFTON Headless Editorial Core v0.1: executable candidate

Status: IMPLEMENTATION_CANDIDATE / USER_PREPARING_DESIGN
Release: GENERATION HOLD / CREDIT SPEND HOLD / MERGE HOLD / DEPLOY HOLD

## Scope
This is a non-designed functional prototype. It replaces the legacy one-page renderer only in an isolated candidate workstream. The existing Astro dependency lock, reference collection, official logo, legacy CSS and historical documents remain intact. Legacy CSS and ScentField are not imported by this renderer.

The user supplies final design. This slice uses semantic HTML, browser defaults and overflow safeguards only. The logo width is a review constraint, not an approved design token. No mood, font, palette, imagery or mockup was selected.

## Files and flow
- src/editorial/contracts.ts: eight entity contracts and structured body blocks.
- src/editorial/validate.ts: runtime validation, field errors and relationship integrity; no type assertion without runtime checks.
- src/editorial/core.ts: visibility, reverse relations, availability, safe routes and renderer-only page data.
- src/content/candidate-v01.ts: explicit non-personal candidate fixture with no invented price, volume, release date or contact.
- src/content/load.ts: review-only loader; public mode deliberately fails.
- src/components/editorial: replaceable semantic renderer, not a final visual layout.
- src/pages/index.astro and src/pages/[...path].astro: static Home / Issue / Article / Scent Dossier / Info.
- src/pages/404.astro: custom static 404 artifact; hosting-specific 404 wiring remains a release concern.
- tests/editorial.test.ts: 41 executable unit/content-integrity checks.
- scripts/browser-smoke.cjs: local-only Playwright checks.
- scripts/deploy-hold.mjs: explicitly blocks npm run deploy.

## Routes
/ ; /issues/unnamed-sensations/ ; /articles/what-remains/ ; /scents/after-blue-sunset/ ; /info/ . Names and copy are CANDIDATE fixtures, not final product facts. New entities produce new static routes automatically. No separate index, Material, Object or Record route is added.

Home offers the Issue path and a direct Dossier path. Article query context is honored only for actual containing Issues. Without JavaScript or valid context, explicit containing-Issue links still work. Dossier embeds related context and informational product state. Info links to #samples. There are no transactions.

## Contract rules
Required fields cannot be blank. Invalid enums, IDs, calendar dates, duplicate IDs/slugs/relations, unsupported blocks, executable URLs and broken targets fail validation. Unknown extra fields fail rather than leaking into output. Missing optional arrays become empty arrays without mutating the source. IDs are independent of slugs; slugs are lowercase hyphenated ASCII, maximum 80 characters.

Issue.articleIds is the ordered membership source. Article owns its scent links. Dossier owns material/object/record links. Product owns scentId. Availability owns productId with at most one row per product. Reverse relationships are computed rather than duplicated.

Candidate and draft remain review-only. Published/archived require accepted review and publication time. Public mandatory links cannot point to hidden content. Illustrative records are excluded from public views. Actual ingredient and documented-record claims need evidence. Evidence locators and SKUs never enter page views.

Availability is informational, not real inventory. Missing/unverified/expired availability becomes unknown. Available requires accepted manual evidence with checkedAt and validUntil. All actions lead to internal information, never orders. Missing prices are not zero prices. All fixtures remain candidates even after tests pass.

## Deliberate v0.1 limits
- Public policy can be unit-tested but no approved public dataset or public release loader is supplied.
- The default review build contains candidate copy and must not be deployed. noindex is not privacy/access control.
- Optional unpublished relations are omitted safely; diagnostic warnings for those omissions are a continuation item.
- Whitespace-only optional text is rejected rather than silently normalized. Existing content contracts are not secretly rewritten.
- One generic semantic renderer is sufficient for this slice; user design will determine actual components and composition.
- No new images, credit spend, personal-context content, subscriptions, commerce, login, FMOC2, analytics or database.
- No deployment workflow is created or executed. A manual wrangler command is outside the npm guard and remains prohibited.

## Reproduce
Use Node >=22.12.0 before installation (required by the existing locked Astro version). Set ASTRO_TELEMETRY_DISABLED=1 in the shell if desired. Run npm ci --ignore-scripts --no-audit --no-fund and npm run verify:editorial.

For browser checks, serve dist on localhost:8765 and run node scripts/browser-smoke.cjs with Playwright available in the tool environment. PLAYWRIGHT_MODULE can point to an existing installation; no browser package is added to production dependencies.

## Baseline and integration
Candidate code baseline: c8544c7f591e2b163f63ea42be2673836f366ed4. Main was separately observed at 415860831be5eed235ae053709d1176f4608868d. PR #1's mergeability reported false at the initial read. This slice does not resolve main's unrelated document divergence or merge PR #1. Use a stacked candidate review and preserve both workstreams.

Checks are recorded in the Git receipt. They are tool-run results, not evidence that Codex automatically started. User design remains pending and does not block further non-design fixes.

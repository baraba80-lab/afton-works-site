# Git Receipt: AFTON Editorial Core v0.1

Status: IMPLEMENTATION_CANDIDATE / USER_PREPARING_DESIGN / INDEPENDENT_CODEX_REVIEW_PENDING
Boundary: GENERATION HOLD / CREDIT SPEND HOLD / MERGE HOLD / DEPLOY HOLD

## Git evidence

- Branch: `work/afton-editorial-core-v01`
- Baseline candidate: `c8544c7f591e2b163f63ea42be2673836f366ed4`
- Implementation and tested commit: `aab43d3a901be802d6db325756ac9aa14f88fc14`
- Tested tree: `cf22264c113b9751e135b47aa3bbee62ea9a245b`
- The new GitHub branch was fetched back into the test workspace. Its tree matched the staged/tested files exactly. Tests were then rerun at the fetched commit with a clean working tree.
- Main and the original candidate branch were not modified or merged by this implementation. No Git history was rewritten.
- This receipt is a documentation-only child of the tested implementation.

## Implemented

- Eight TypeScript entity contracts, runtime validation, relationship integrity and candidate/public policy.
- Home, Issue, Article, Scent Dossier and Info as actual static routes, plus a 404 artifact.
- Automatic route/list generation from content entries; one issue/article/dossier fixture set.
- Explicit related-content links, valid/invalid issue query handling, direct Home-to-Dossier path.
- Informational availability; no invented price, volume, launch date or contact.
- Review-only loader and a fail-closed npm deploy command.
- Semantic HTML and overflow safeguards only. No new visual design or generated images.

## Actual validation

Environment: isolated cloud shell, Node `22.23.2`, existing committed dependency lock. Browser tests used the environment's Playwright/Chromium, not a new production dependency.

| Check | Actual result |
|---|---|
| Clean lockfile installation under supported Node | PASS |
| `npm run test:editorial` | 41 tests, 41 pass, 0 fail |
| `npm run check` | 0 errors, 0 warnings, 0 hints |
| `npm run build:review` | 6 static pages: five content routes and 404 |
| Local browser: 5 content routes at 320, 390, 1440 px widths | 15 route/viewport checks passed |
| h1/main/lang, candidate notice, internal link HTTP status, loaded logo | PASS in tested routes/viewports |
| Horizontal overflow | None in tested routes/viewports |
| Skip link keyboard focus to main | PASS |
| Home -> Issue -> Article -> Dossier -> Info | PASS |
| Home -> Dossier shortcut | PASS |
| Direct article / invalid issue context | No false context displayed |
| 200% root-text-size smoke check at 320 px | PASS; not a full browser zoom audit |
| Unknown URL against local static server | HTTP 404 |
| Browser page errors | None observed |
| Public-mode fixture build guard | Expected exit 1, DEPLOY_HOLD |
| npm deploy guard | Expected exit 1, DEPLOY_HOLD; no deployment command executed |
| Dependency lock | Unchanged |
| Build scan for selected personal-context identifiers | No matches; not a comprehensive privacy audit |

The original shell used Node 20.9.0, below the existing Astro requirement, causing an initial check failure. Installation and verification were repeated under Node 22 with the committed lockfile; this resolved the environment issue without changing production dependencies.

## Changed files in implementation commit

- `.gitignore`
- `AGENTS.md`
- `CODEX_TASK.md`
- `astro.config.mjs`
- `docs/EDITORIAL_CORE_V01.md`
- `package.json`
- `scripts/browser-smoke.cjs`
- `scripts/deploy-hold.mjs`
- `src/components/editorial/Body.astro`
- `src/components/editorial/Document.astro`
- `src/content/candidate-v01.ts`
- `src/content/load.ts`
- `src/editorial/contracts.ts`
- `src/editorial/core.ts`
- `src/editorial/validate.ts`
- `src/pages/404.astro`
- `src/pages/[...path].astro`
- `src/pages/index.astro`
- `tests/editorial.test.ts`
- `tsconfig.editorial.json`

## Remaining and next owner

Codex: independently review/reproduce the candidate, then continue non-design correctness work. Optional hidden-relation warnings and expanded accessibility/long-title regression remain. Hosting-specific 404 behavior and final visual checks belong to a later approved release/design pass. No claim of full accessibility certification or production readiness is made.

User: prepares visual design; this does not block non-design work. Previous rejected generated designs are not implementation inputs. Personal background material is not website content.

The test runner was invoked in this turn by the web GPT. A Codex job or 30-minute scheduler was not started or verified. A handoff or PR is not proof of autonomous execution.

No image generation, media credit purchase, checkout, real inventory integration, personalization, FMOC2 connection, login, merge or site deployment occurred.

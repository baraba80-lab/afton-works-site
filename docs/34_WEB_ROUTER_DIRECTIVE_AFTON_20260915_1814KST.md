# AFTON Web Router Directive — 2026-09-15 18:14 KST

Status: ROUTED_REVIEW
Router: Web GPT
Primary builder: Codex

## Observed state before routing

- Repository: `baraba80-lab/afton-works-site`
- Main HEAD observed: `5b90ccf66794e6beb114b2949c5fb0aec720c926`
- Active implementation branch: `work/afton-editorial-core-v01`
- Draft PR: `#3`
- PR #3 head: `6f391fe602f11e5903dba0d9b2fcf707474815f7`
- Tested implementation SHA recorded by the existing handoff: `aab43d3a901be802d6db325756ac9aa14f88fc14`
- Existing result claims: 41 content/unit tests, Astro check clean, five content routes + 404, multi-viewport browser checks.
- User owns visual design. Codex must not restart image, palette, typography, final-layout, or motif generation work.
- MERGE HOLD / DEPLOY HOLD / GENERATION HOLD / CREDIT SPEND HOLD remain active.

## Router interpretation

AFTON is active but implementation progress is currently in review/verification rather than new visual production. The main risk is stale project-status text and unverified reuse of the candidate claims.

## Codex next work order

1. Re-fetch refs and independently inspect PR #3 against its current base `codex/afton-landing-v0-1`.
2. Determine why GitHub currently reports the PR as non-mergeable before proposing any ref/base change. Do not rebase, force-push, merge, or retarget automatically.
3. Re-run the supported install and verification path using the existing lockfile and supported Node version.
4. Reproduce the executable candidate claims, including content-integrity tests, Astro check/build, core route journeys, and local browser smoke checks.
5. Continue only non-design correctness work that is already within the candidate contract, especially:
   - optional/unpublished relationship diagnostics,
   - expanded accessibility regressions,
   - long-title/content-boundary regressions,
   - link and route integrity,
   - failure behavior that must remain fail-closed.
6. Reconcile stale operational documents after verification. In particular, update current-status/handoff language that still implies Codex owns visual generation when the user now owns visual design. Preserve historical decisions as history rather than rewriting old receipts.
7. Record exact tested SHA, commands, results, changed files, remaining HOLDs, and next action.
8. Back up substantive receipts/results to the project Drive location and record the backup identity before claiming DONE.

## Forbidden scope

- no new imagery or visual concept generation;
- no final palette/font/layout decisions;
- no Higgsfield generation unless the user explicitly reauthorizes it;
- no merge or deploy;
- no Cloudflare/custom-domain release;
- no commerce, real inventory, personalization, FMOC2 integration, login, or analytics;
- no use of personal/background collaboration notes as public website content.

## Acceptance criteria

The next candidate step may be reported PASS only when Codex independently reproduces the relevant tests from the current remote ref, explains any divergence from the prior receipt, preserves all HOLD boundaries, and leaves a verifiable Git + Drive receipt.

## Router follow-up

Web GPT will re-check the next PR/commit event and route either further non-design implementation, user visual review, conflict resolution, or HOLD based on evidence.

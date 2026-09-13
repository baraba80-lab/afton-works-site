# AFTON Direction Approval and Collaboration-Context Handoff

Date: 2026-09-13
Status: DIRECTION_APPROVED / IMPLEMENTATION_CANDIDATE / MOOD_APPROVAL_REQUIRED
Release boundary: GENERATION HOLD / CREDIT SPEND HOLD / MERGE HOLD / DEPLOY HOLD

## 1. User correction: context for collaboration, not site content

The user clarified that the background material was supplied to help the agents understand the user's working tendencies and make collaboration smoother. It was NOT a request to disclose that material, adapt the personal archive into website content, or add a founder narrative.

This correction supersedes the public-content interpretation in the earlier version of this handoff at commit `c8f0f0d72cd009b5feda583c2a1e69a246599808` and its associated issue/PR instructions. It also governs how to use the older founder-context notes in documents 15–19: those notes are working context, not publication permission or a new consumer-content brief.

The R08-led editorial direction remains approved. Do not ask the user to approve that same direction again. Final colors, typography, image style and layout mood remain subject to user approval.

## 2. Withdrawn requirements

The following were assistant-added interpretations and are withdrawn from this task:

- deriving Home stories or a brand-origin narrative from the user's personal accounts, career or archive;
- adding a founder biography, personal timeline, method/profile passage or contribution/partner-credit module because the background notes mention them;
- requiring native archive images or captions to complete the landing;
- extending the 14-frame contact sheet with personal-archive evidence;
- using the background material to populate Issue, Article, Record, Info, metadata, image prompts or consumer-facing fixtures;
- treating founder visibility or archive migration as acceptance criteria for this implementation slice.

Do not substitute paraphrases, fictionalized biography or personal-archive placeholders for the withdrawn material. Do not reproduce further personal analysis, contract details or account observations in public commits or comments. Any later use of specific personal material as content needs a separate explicit request or authorization.

Existing source notes are not being deleted or made private by this correction. This is a use boundary, not a repository visibility change or history purge. Preserve unrelated work and do not rewrite Git history.

## 3. How the context should affect collaboration

Use the background to adapt the work process rather than the subject matter of the website:

- build on settled decisions instead of restarting the brand discussion;
- favor a small, inspectable artifact over another broad strategy document;
- split architecture/content review and implementation/testing according to the established web GPT/Codex roles;
- keep explanations concrete and report only changed decisions, actual results, blockers and the next responsible action;
- proceed with delegated non-mood work without asking for repetitive approval;
- keep final mood decisions with the user and honor the separate execution HOLDs;
- treat interpretations of working preferences as revisable, not as diagnoses or public brand claims.

Do not reproduce the personal analysis itself to demonstrate that it was understood.

## 4. Exact next task: continue the approved editorial core

The next artifact remains one reviewable candidate Home and the minimal reading path:

`Home → Issue → Article → Scent Dossier → Info / sample information`

Also support `Home → Scent Dossier` directly. Reuse the existing Astro setup rather than restarting the project.

Use the previously supplied Headless Editorial Core v0.1 as CANDIDATE input, verified against the current repository. Its eight entity contracts remain Issue, Article, ScentDossier, Material, Object, Record, Product and Availability. No extra founder/profile entity or archive application is required.

Use only independently authorized AFTON content or clearly marked, non-personal candidate fixtures for structural testing. Keep missing product facts, prices, dates and availability unknown. Info is for AFTON/service/sample information, not a required founder profile.

If usable image assets are absent, proceed with an image-free semantic preview. Do not treat missing personal-archive assets as a blocker, reuse the excluded six generated images, or ship third-party reference frames as AFTON assets.

R08 supplies the consumer editorial hierarchy and reading sequence. R09 remains a supporting reference for functional hierarchy only. Candidate visual choices must not silently become approved mood.

## 5. Repository alignment and verification

1. Re-read current PR/base/head and relevant instructions before editing.
2. Apply the context-only correction where an active task or candidate instruction still requires personal/founder material in the site. Preserve unrelated source records and approved work.
3. If earlier candidate UI or fixtures already implement the withdrawn requirements, identify the exact affected pieces, remove or replace only those unsupported additions, and report the diff. Do not claim that removal occurred without inspecting the code.
4. Preserve the existing 14-frame contact sheet and R08 direction approval. Finish filename/format normalization separately when necessary, without changing image bytes or blocking unrelated structural work.
5. Existing palette instructions are legacy candidates, not final user-approved mood. Preserve verified official logo assets.
6. Do not import the background notes into the site's content loader, static output, metadata or downloadable public assets.
7. Do not force-push, merge PR #1 into main or deploy.

A mergeable PR is not evidence of semantic agreement between instructions. Previous PR test reports are not fresh tests of the new work.

## 6. Delivery and acceptance criteria

Deliver an actual local/review artifact, not another document-only completion claim:

- candidate Home in desktop and mobile conditions;
- functioning minimal click-through reading path;
- valid internal links and explicit empty/unavailable states;
- keyboard navigation, heading structure, mobile flow and missing-asset checks;
- candidate content clearly distinguished from confirmed AFTON product facts;
- no personal-context material used as content without separate authorization;
- no sample/order/research-start action that implies an unavailable transaction or service;
- actual test results and the exact tested commit;
- specific content/technical blockers, without requiring founder-profile material.

Local rendering and screenshots of implemented pages are review evidence, not generated-image jobs. Do not publish a hosted preview if that would constitute deployment.

## 7. Coordination and unchanged stop gate

Codex reports the new SHA/branch, changed files, tests actually run, blockers and next owner/action. A Git handoff or comment is not proof that an automatic Codex run has started.

The requested 30-minute coordination cadence is not installed or verified by this document. Do not report an active timer without scheduler evidence.

No checkout, real inventory synchronization, personalization, FMOC2 connection, login, new image generation, credit spend, merge or deployment is authorized. If generation is separately authorized later, the existing Codex-browser-only rule remains in force.

FINAL STATUS: DIRECTION_APPROVED / CONTEXT_ONLY_REFERENCE / IMPLEMENTATION_CANDIDATE / MOOD_APPROVAL_REQUIRED / GENERATION HOLD / CREDIT SPEND HOLD / MERGE HOLD / DEPLOY HOLD

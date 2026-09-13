# AFTON HOME WIREFRAME v0.1

Status: DESIGN_CANDIDATE / MOOD_APPROVAL_REQUIRED
Boundary: GENERATION HOLD / CREDIT SPEND HOLD / MERGE HOLD / DEPLOY HOLD

## 1. Scope and source boundary

The user has approved the R08-led direction and requested that design proceed. This document supplies the concrete Home wireframe, candidate copy placement, responsive reading order and implementation handoff. It is not final mood approval.

Read baseline: candidate `a057f52b792dd52562b22338a56601a56db1ad3c`, `AGENTS.md`, `CODEX_TASK.md`, and corrected `docs/20_DIRECTION_APPROVAL_AND_FOUNDER_HANDOFF.md`. The contact sheet remains the reference record. Re-read current refs before implementation; do not assume that PR mergeability establishes instruction consistency.

The corrected document 20 and the latest user instructions govern the old Phase B stop language and the legacy palette. Do not restart reference approval. Do not use background/personality/archive analysis as site content or content dependencies. Do not interpret this document as permission for generation, credit use, merging or deployment.

This file is a wireframe specification, not a rendered-page delivery or a report of implementation tests. Actual application code, browser renders and tests remain Codex's implementation task.

## 2. The specific Home decision

Combine Hero and Current Issue into ONE editorial cover. Do not add a slogan-only hero followed by a second cover repeating the same title.

Home contains four content zones:

1. Editorial cover: one current candidate Issue and a direct Scent Dossier route.
2. Issue contents: the actual Article list for that Issue, not filler cards.
3. Scent Dossier preview: one related scent plus truthful information status.
4. Compact service information/footer: valid Info and sample-information destinations.

There is no separate Issue index route in this slice. Home's `#issues` is the Issue entry; preserve the five-screen scope Home / Issue / Article / Scent Dossier / Info.

All copy and product references below are CANDIDATE fixtures from the previously supplied editorial-core packet, not confirmed product claims. Use an obvious review-only notice. Do not write personal information into fixtures or metadata.

## 3. Desktop wireframe

This is an adjacency and reading-order sketch, not a measured layout. Brackets denote a role, not final UI copy or a real image.

```text
[REVIEW ONLY / CANDIDATE]

[official AFTON wordmark]          발행물    향기 기록    안내

[ZONE 1 + ZONE 2: #issues]

ISSUE 01 / CANDIDATE

이름 붙이기 전의 감각              [EDITORIAL IMAGE SLOT]
                                  [이미지 미선정]
한 장면에서 시작해                 [이 자리는 구조 검토용]
하나의 향으로 이어지는 단서.

이슈 읽기 →
향기 기록 바로 보기 →

---------------------------------------------------------
이번 이슈의 글

ARTICLE     사라진 뒤에 더 또렷해지는 것      기사 읽기 →
            향의 이름보다 먼저 떠오르는
            표면과 장면에 관한 글.

[Only add more rows when actual Article entities exist.]

---------------------------------------------------------
[ZONE 3: #scents]

SCENT DOSSIER
After Blue Sunset

[검토용 이름 / 확정 향 설명 아님]
[Approved description absent: omit invented sensory claims.]

향기 기록 보기 →                    제공 일정 미정
                                   샘플 안내 읽기 →

---------------------------------------------------------
[ZONE 4: SERVICE / FOOTER]

AFTON 안내                         샘플 안내
[confirmed service information]    [information, not ordering]
```

The image slot must not delay or cover the title or either entry link. In a structural review it can be a plain bounded area labeled '이미지 미선정'. Do not fill it with generic blobs, simulated fragrance data, third-party references, excluded generated images or private archive material. Remove the placeholder from any later public mode unless an approved asset is supplied.

The title/visual relationship is the only dominant editorial event proposed here. Do not stack dot displacement, random margins, color interruptions and UI movement on top of it. Exact scale, alignment and image style remain candidate design decisions.

## 4. Mobile wireframe

```text
[REVIEW ONLY / CANDIDATE]
[official AFTON wordmark]
발행물 / 향기 기록 / 안내

ISSUE 01 / CANDIDATE
이름 붙이기 전의 감각
짧은 소개
이슈 읽기 →
향기 기록 바로 보기 →

[이미지 미선정 / 구조 검토용]

이번 이슈의 글
ARTICLE
사라진 뒤에 더 또렷해지는 것
짧은 요약
기사 읽기 →

SCENT DOSSIER
After Blue Sunset
향기 기록 보기 →
제공 일정 미정
샘플 안내 읽기 →

AFTON 안내 / 샘플 안내
```

Keep the title, introduction and entry links before the image in DOM reading order. On wider screens CSS may place the visual beside the copy; do not reorder meaningful links for screen readers. The image must not become a full-screen barrier before the first action. Do not hide the scent shortcut or service information on mobile. A short wrapping text navigation is sufficient for the three destinations; do not add a menu system merely for appearance.

## 5. Copy and destination contract

The following URLs are PROPOSED implementation targets inherited from the candidate core packet, not claims that those routes already exist or are live. Codex must implement/verify targets before exposing the links in the preview.

| Element | Candidate copy | Target / source |
|---|---|---|
| Brand link | Official wordmark; accessible name AFTON 홈 | `/` |
| Main navigation | 발행물 | `/#issues` |
| Main navigation | 향기 기록 | `/#scents` |
| Main navigation | 안내 | `/info/` |
| Cover marker | ISSUE 01 / CANDIDATE in review | Issue issueNumber and review state |
| Cover title | 이름 붙이기 전의 감각 | Issue title; Home's single h1 |
| Cover introduction | 한 장면에서 시작해 하나의 향으로 이어지는 단서. | Candidate copy, optional |
| Cover primary link | 이슈 읽기 | `/issues/unnamed-sensations/` |
| Cover secondary link | 향기 기록 바로 보기 | `/scents/after-blue-sunset/` |
| Contents heading | 이번 이슈의 글 | Existing candidate Issue article order |
| Article title | 사라진 뒤에 더 또렷해지는 것 | Candidate Article title |
| Article summary | 향의 이름보다 먼저 떠오르는 표면과 장면에 관한 글. | Candidate Article summary |
| Article link | 기사 읽기 | `/articles/what-remains/?issue=unnamed-sensations` |
| Scent section | 향기 기록 | Section heading for `#scents` |
| Scent title | After Blue Sunset | Candidate ScentDossier title |
| Scent link | 향기 기록 보기 | `/scents/after-blue-sunset/` |
| Product status | 제공 일정 미정 | Effective unknown availability; never inferred from sample format |
| Information link | 샘플 안내 읽기 | `/info/#samples` |
| Service information | 현재 이 화면에서는 주문이나 예약을 받지 않습니다. | Candidate but accurate scope disclosure |

One issue, one article and one dossier are sufficient for the first preview. Do not invent additional products, issue dates, testimonials, authors, research findings, launch dates, prices or contacts to make the page look populated. Omit the prior conversational examples Sunset / Yeo-un / Lavender study unless separately authorized as real content.

Do not offer 업데이트 추적하기, a waitlist, newsletter, purchase, booking or 연구 시작 without the corresponding authorized feature. The current next action is information reading only.

## 6. Components and hierarchy

Proposed roles, not requirements to create duplicate components if equivalent code already exists:

| Component role | Data | Responsibility |
|---|---|---|
| ReviewNotice | Content mode | Identify candidate fixtures separately from consumer copy |
| SiteHeader | Verified logo + route map | Home, Issue anchor, scent anchor, Info |
| IssueCover | One selected Issue + optional featured scent | One editorial cover, one principal reading link, one scent shortcut |
| IssueContents | Issue.articleIds resolved in order | Actual articles only; no repeated cover |
| ArticleTeaserRow | Article title/summary | Title, optional summary, explicit destination |
| ScentDossierPreview | One ScentDossier | Name, optional verified/candidate description, direct dossier link |
| AvailabilityNotice | Product and effective Availability | Informational state, no transactional promise |
| SiteFooter | Info destinations | Compact scope and information links; no biography requirement |

Text hierarchy roles: cover title / section title / article or dossier title / description / metadata. Do not make metadata so small or faint that it is unreadable. 'Large versus small' is a hierarchy relationship, not permission for unusable text.

Colors, typefaces, actual font sizes, line breaks, borders, spacing values, radius and image ratios are not final tokens. Codex may test provisional values for a local candidate, label them as provisional and record measured outcomes. Do not freeze legacy palette values merely because they already exist in AGENTS or CSS. No new font service, animation framework or asset dependency is needed for the structural review.

## 7. Reading-path extension

Reuse the approved core scope instead of expanding navigation:

- Issue: title, introduction, actual ordered article list, related scent, return to Home's Issue entry.
- Article: title, body, valid Issue context, primary related scent, back to contents. If a query names an unrelated Issue, discard the false context.
- Scent Dossier: title, available candidate description, optional related context, informational availability and sample guide. Do not claim physical materials are actual perfume ingredients.
- Info: AFTON/service/sample information only. No contact unless verified. No founder/profile material required.

Support `Home → Issue → Article → Scent Dossier → Info` and `Home → Scent Dossier → Info`. No login, purchase or forced reading sequence.

## 8. Empty states and review checks

- If an Issue is absent, show an honest Issue empty state and keep the scent/Info route available.
- If an Article list has one item, render one item. Never duplicate it to fill a row count.
- If all Article entries are absent, label the draft as incomplete. Do not call it a complete published issue.
- If a Dossier is absent, retain a truthful section empty state and Info link; do not create a broken destination.
- If price, volume, availability date or contact is absent, leave it absent. Missing price is not zero price and unknown availability is not sold out.
- Without an approved image the review remains usable and no broken img element is emitted.
- Test one h1, logical headings, main landmark, skip link, keyboard focus and descriptive link names.
- Test all proposed internal routes and fixed anchors, including direct Article entry and invalid Issue context.
- Use narrow and wide viewport checks, long Korean/English titles and text zoom. Record actual widths and overflow results, not an assumed pass.
- Confirm no new generative assets, API calls, analytics, checkout, private context or background-document text enters the page, metadata or build output.

## 9. Codex next action and delivery

Implement this as a CANDIDATE local preview in the existing Astro workstream after reading current refs and corrected document 20. Reconcile obsolete active instructions without deleting unrelated work. The latest direction approval authorizes this non-production structural slice; it does not authorize a production merge or release.

Deliver the rendered Home at desktop and mobile, a functioning five-screen path, exact changed files, test commands and results, and the tested code SHA. Missing images are not a reason to restart reference research or wait for personal archive access.

Do not respond with another generic plan instead of a viewable review artifact. Do not cite earlier PR checks as validation of this new implementation. This web-GPT commit contains a wireframe spec only; it has not produced or validated those renders.

Direction is approved; actual visual mood is not. Preserve official logo assets; do not approximate them. Preserve the fourteen-reference contact sheet and keep filename normalization separate from the Home structure.

A Git commit or PR comment is a handoff, not proof that Codex started or a monitor is running. No timer is installed by this document.

FINAL STATUS: DESIGN_CANDIDATE / MOOD_APPROVAL_REQUIRED / GENERATION HOLD / CREDIT SPEND HOLD / MERGE HOLD / DEPLOY HOLD

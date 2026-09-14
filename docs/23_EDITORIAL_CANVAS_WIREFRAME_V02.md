# AFTON EDITORIAL CANVAS / WIREFRAME v0.2

Status: STRUCTURE_CANDIDATE / DESIGN_USER_OWNED / MOOD_APPROVAL_REQUIRED
Boundary: GENERATION HOLD / CREDIT SPEND HOLD / MERGE HOLD / DEPLOY HOLD

## 1. Basis and relationship to existing work

The latest user brief selects a magazine-like site containing AFTON products, development and experiments, raw-material stories, perfumery commentary, third-party product reviews, and the future personal-fragrance workshop journey. The user wants bold chromatic and psychedelic visual relationships, overlapping images/text, and a finite canvas larger than the browser, explored primarily by scrolling downward to new categories and routes. This is a visual direction, not a request to reproduce intoxication, induce a psychological state, or expose private research.

Read baseline: candidate commit `dcac32ab3ad50a19bda8210c90f2bb96caf90334`, `AGENTS.md`, `CODEX_TASK.md`, `docs/21_HOME_WIREFRAME_V01.md`, and `docs/22_NON_VISUAL_EDITORIAL_CORE_HANDOFF.md`. At this read PR #1 was open, unmerged, and mergeable=false. Re-read refs before writing implementation changes. No merge or conflict resolution was performed for this document.

This is a proposed evolution of document 21's four-zone Home into a connected editorial canvas. It does not replace document 22's independently authorized non-visual core, force a return to reference collection, or assert that the core is already implemented. Complete/reuse that core and then bind this proposed composition to its actual entities and routes. Final colour, typeface, asset selection and spatial art direction remain user-owned.

The 15 selected generated screenshots in the conversation are composition studies, not official logos, proven observations, product catalogues, licensed third-party assets or ready-to-publish pages. Attachment-order images 08/09/15 are not identical to reference-library IDs R08/R09. Their respectively discussed archive-grid, layered-relation and editorial-spread structures inform this proposal. Some earlier attachment originals have expired; the present basis is the visible conversation and user description. Do not claim fresh original-pixel inspection. Missing originals must not stop the semantic core; source extraction/cropping requires accessible original files later.

Founder/personality material remains internal collaboration context only. Do not add biography, private archives, internal formulas or customer data to the site, metadata or fixtures.

## 2. What the canvas means

Build a finite vertically explored editorial field, not seven identical full-screen banners, an infinite feed, a drag-only map, a single giant screenshot, or an obligation to use HTML canvas/WebGL.

The visual composition may extend beyond the viewport to both sides; the important content and every action must remain reachable in the ordinary document. Clip decorative overflow locally, never hide essential controls or mask layout defects by globally cutting them off. No mandatory horizontal scroll or drag to discover categories. Start with semantic HTML, CSS layout, separated image layers and limited SVG connectors. Retain native wheel/touch/keyboard scrolling. No scroll hijacking or mandatory snap panels.

Each zone has a real document boundary for anchors, reading order and loading, but adjacent zones can share a visual element across their seam. Only decorative layers cross these boundaries. Do not duplicate meaningful content, focus targets or IDs to simulate continuity.

No final page-height, colour ratio, type scale or animation timing is specified. Heights follow real content. Large lettering, selected spatial relationships and meaningful density contrasts must survive without resorting to a generic left-copy/right-photo template. Test provisional values and record measurements rather than calling estimates measured results.

## 3. Shared navigation and layer contract

Proposed main navigation: 매거진 / 향 / 원료 / 공방, plus 목차 for all seven zones and an Info link. These are semantic destinations, not approved typography or a requirement to add crowded navigation. On narrow screens use a readable compact menu or wrapping links; never shrink labels into unreadability.

Proposed zone order and anchors:

| Zone | Meaning | Anchor |
|---|---|---|
| 01 | Entry / current issue cover | #entry |
| 02 | Featured editorial | #issues |
| 03 | Scents and development | #scents |
| 04 | Materials and relationships | #materials |
| 05 | Personal-fragrance workshop information | #workshop |
| 06 | Selected studio records | #records |
| 07 | Reviews and industry commentary | #perspectives |

These are proposed Home anchors, not claims of live routes. Preserve existing #issues/#scents semantics where compatible. Route links must resolve from the implemented content registry. The workshop nav is available from the first viewport, so the service is not buried after a compulsory reading funnel.

Layer roles:

- Field layer: colour planes, cropped letter/image fragments, static abstract forms. Decorative elements are not focusable or advertised as meaningful data.
- Content layer: images, complete titles, metadata, relationship cards. Every meaningful item has an entity or explicit review-only placeholder.
- Reading/action layer: navigation, readable descriptions, links, selection state. Other layers may not cover its labels or hit areas.

Oversized decorative display lettering may be cropped. The real page title and action labels remain complete, with no duplicate screen-reader announcement. Preserve the official wordmark rather than generating or retyping it.

The old quiet-centre, warm-neutral/mineral-blue palette and blanket no-overlap interpretations are not approved constraints on this new user brief. Multiple static overlaps are allowed within an authored composition. Limit competing animated behaviours, not all layering, to one dominant action in a viewed scene. This does not select any final palette or asset.

## 4. Continuous adjacency sketch

```text
FIXED OR STICKY NAVIGATION
[official wordmark]  매거진  향  원료  공방  목차

01 ENTRY
  [overscale title crossing the visual field]
       [cropped image A] [overlapping abstract B]
  [what AFTON contains]   [issue link] [workshop information]
                         [edge of next editorial item]

02 EDITORIAL
  [large feature]         [short article]
                         [material-story entry]
  [clear title/caption strip; not identical cards]
                  [related-scent cue continues downward]

03 SCENTS
  [selected scent]        [development entry, if real]
       [related article] [published experiment entry, if real]
  [read dossier]          [actual informational status]
                  [one verified relationship leads to materials]

04 MATERIALS / RELATIONS
  [selected material] --- [linked article]
              |---------- [linked scent]
              |---------- [publishable observation]
  [one readable selected detail area, stable return path]
                         [bridge: finding your own direction]

05 WORKSHOP
  [purpose / reference / preference examples, not a live form]
              -> [research and candidate direction]
              -> [visit, choose, blend, take home]
  [service proposal / read information; no booking or payment]

06 RECORDS
  [short note]       [test record]       [change log]
  [complete titles, verified dates only, relationship back to scent]

07 PERSPECTIVES
  [lead commentary] [review entry] [industry note]
  [evidence basis and sources] [next actual article]

FINITE END
  [issue index] [workshop information] [Info] [back to top]
```

The sketch specifies adjacency and reading sequence, not exact coordinates, visible quantities, fabricated entries or final art direction. In sparse mode render only real content; review placeholders must be explicitly non-editorial and never masquerade as published cards.

## 5. Seven zones: content, form, action, seam

### 01 / Entry canvas

Purpose: establish a distinctive impression while making the magazine and workshop roles understandable immediately.

Composition candidate: a large, partly overflowing typographic event with two or more differently scaled visual layers, without a separate advertising hero followed by a repeated current-issue cover. Display the actual current Issue and one clear content type. The lower edge reveals part of the next readable entry, signalling continued space.

Candidate text: “익숙한데, 이름은 모르겠다.” Supporting description: “향, 원료, 실험과 그 사이의 이야기. 직접 만드는 향까지.” These are draft copy, not approved brand taglines. Until the workshop operates, qualify its introduction as 준비 중 or 서비스 구상.

Primary action: open the current Issue. Secondary action: jump to #workshop to read service information. No mandatory intro, wait animation, sound or login.

Seam: one image crop or display-letter edge extends toward the editorial cluster. A meaningful article title remains fully visible and clickable within its own zone.

### 02 / Featured editorial

Purpose: establish that there is something to read, not merely a striking image to observe.

Composition candidate: a principal story occupying more space than supporting entries, borrowing the discussed image 15's editorial hierarchy and image 08's scannable density. Do not repeat the cover title/intro as a second hero. Use unequal importance, not arbitrary card sizing.

Content: development story, raw-material story, or an editorial topic selected by the current Issue. Show content type, title, optional short synopsis, and author/date only when known. A target pattern of one lead plus a few supports is a compositional test, never a demand to fabricate articles.

Candidate editorial topic: “깨끗하다는 향은 왜 사람마다 다르게 느껴질까?” This is a writing topic, not a reported study or a claim of measured findings.

Action: Article route or Issue contents. Only link an AFTON scent when an actual relationship exists; general industry pieces may remain independent.

Seam: a related-scent link previews Zone 03. The same card need not be cloned in both zones.

### 03 / Scents and development

Purpose: let visitors distinguish a scent's story from its development and availability states.

Composition candidate: one readable selected scent with subordinate related items around it; support an ordinary list as the baseline. Node-like placement belongs to the composition layer, not an analytics interface.

Content: ScentDossier and linked Articles/Records, plus Product/Availability only where they actually exist. A future development label may distinguish concept / testing / revising / released / retired, but it is a proposed separate field, not PublicationState or Availability. Unknown development state stays absent.

Never equate a public article with a released perfume, or a sample-format record with available stock. Never expose batch formulas, customer traces or private research.

Action: open Dossier; current commercial substitute is /info/#samples after route validation. No purchase button without an authorized transactional feature.

Seam: one genuinely linked material becomes the entry to Zone 04; sensory_reference is labelled separately from documented_ingredient.

### 04 / Materials and relationships

Purpose: show why an ingredient/material, article, scent and observation belong together. A node is a content object, not a decorative circle.

Composition candidate: the discussed image 09's layered relationship space plus images 10/11's contextual links. Keep one selected detail area fully readable; surrounding cards may be staggered but not all equally translucent or blurred.

A typical bounded relation group contains a selected subject and a small number of curated immediate neighbours. Do not construct a global force-directed graph or pretend that every record is related. Each line requires a typed relation and a short human-readable reason, such as “이 글에서 다룬 원료”, “감각을 설명하는 참조”, or “이 향에 연결된 공개 기록”.

Action: select a visible card to update the local detail area, or follow its existing canonical Article/Dossier route. Selection changes UI state only; it does not run fragrance design, record user preferences, or infer a personal profile. Connections have an equivalent linked list. No drag is required.

Source boundary: factual ingredient properties require separately sourced editorial text. An impression is an attributed impression, not a universal property. Do not treat a visual linen reference as a formula ingredient.

Seam: move from the idea of many possible scent directions to the clearly explained workshop service.

### 05 / Personal-fragrance workshop

Purpose: make the business proposition visible before the visitor reaches the footer, without turning this prototype into an ordering system.

Candidate headline: “읽던 향에서, 내가 만드는 향으로.” Candidate explanation: “온라인에서 준비하고, 방문해서 마지막 방향을 고르고, 직접 배합해 가져가는 향.” Present as a planned service until operation is confirmed.

Separate the public service explanation from the future operational sequence. Preserve the user's intended order:

서비스·조건 확인 → 선결제 → 고객 리서치와 설계 연산 시작 → 후보 준비 → 방문 시향·선택·운영자가 관리하는 배합 → 포장·수령 → 안내된 시점에 개봉.

Do not move full bespoke research before payment by silently adopting a generic quiz-first funnel. Purpose (self/gift), context (daily/occasion), known fragrance references and desired/undesired impressions belong to the future post-payment research. A neutral public example may explain these steps but must not collect data or imply a formula has been calculated.

Packaging concept: record blending date, packing date and a proposed recommended opening date. The earlier two-week idea is a product-testing/operations proposal, not a verified universal safety or maturation guarantee. Do not promise a fixed duration or vacuum process as technically validated. No fabricated calendar countdown.

Current action: read verified or clearly proposed workshop information in Info; proposed anchor /info/#workshop must be implemented before linking. No booking, payment, email capture, questionnaire backend, FMOC2 API or fulfillment integration. Show “서비스 준비 중” and an explanatory link instead of a misleading disabled purchase interface.

Seam: lead into selected public preparation and experimentation records, not private founder analysis.

### 06 / Notes and records

Purpose: give readers short, concrete observations without repeating the larger development feature in Zone 02 or a scent catalogue in Zone 03.

Composition candidate: compact editorial notes alternating with a few larger evidence slots. Dates are verified and labels are readable. Density is created through meaningful items, never invented observations.

Content: short published observation, experiment note, revision summary or preparation record. Clearly distinguish documented records from review-only constructed examples. Public selection/redaction is deliberate: no full recipe, stock list, personal customer information or private R&D export.

Action: read the underlying record as implemented, its hosting Dossier, or an Article. Do not add a broken /records route simply to fit the layout.

Seam: contrast the brand's own selected work with the wider industry's discussion in Zone 07.

### 07 / Reviews and industry commentary

Purpose: provide an AFTON editorial viewpoint beyond its own products without disguising advertising or unsupported claims as independent testing.

Composition candidate: a strong lead column plus compact secondary reading entries, reusing the editorial grammar rather than creating another visual identity.

Content types: first-hand review, source-based new-product introduction, review roundup, or industry commentary. Distinguish those bases explicitly. A press-release summary is not a hands-on review. External reviews are not a representative population survey. Do not invent percentages, performance findings or other-brand formulation ingredients.

Display the assessed product/version when known, date/context of the assessment, attribution/source, and product-provision/sponsorship status where applicable and known. Actual current product reporting requires a separate research/verification task; this document provides no new market facts or review verdicts. Rights clearance for other-brand media is separate.

No forced AFTON-product CTA under every competitor review. Offer the genuinely related next Article or a return to the Issue. The finite end of the canvas exposes the issue index, workshop information, Info and back to top. No automatic infinite loading or subscription form.

## 6. Journey states and return paths

Implement ordinary deep links first. Each Article/Dossier has a canonical route independent of the canvas so it can be shared, opened in a new tab and read without decorative layers.

Three principal paths:

1. Reader: entry → editorial → Article → related Dossier if relevant → sample information.
2. Research-minded visitor: materials → selected local relation → Article/Dossier → return to the same Home zone.
3. Workshop visitor: header workshop link → service overview → Info. The later paid-research journey is described, not executed.

Navigation must communicate current zone, current content type and one principal next action. Zone progress means position in the document, never percentage of a person's scent profile completed. Use native browser history and anchor context; no analytics or persistent visitor profile is required. Prefer full pages to a giant mandatory modal; local node detail can remain inline. Optional drawers later need focus handling and keyboard dismissal.

## 7. Content model additions, not a replacement core

Reuse Issue, Article, ScentDossier, Material, Object, Record, Product and Availability from document 22. The seven Home zones are editorial placements, not seven new databases and not mutually exclusive types. A Material article can be featured in the magazine and linked in the materials zone without duplicating the article record.

Proposed Home composition record per zone: zoneId, order, heading, resolved entity references, optional principal destination, layout role, optional bridge reference. References use existing validated IDs. Decoration has a separate optional asset reference, never fabricated content IDs. Every referenced target must exist and be visible in the selected mode.

Proposed additive fields only where the implementation needs them:

- Article topic: ingredient / development / industry / review / other.
- Review evidence basis: first_hand / press_summary / review_roundup / commentary; factual review publication requires source/context validation.
- Optional scent development state, distinct from publication and availability.
- Curated relation reason and relation type; retain the existing single-owner/reverse-index rules rather than duplicating the graph on both entities.
- Publishable/source/asset approval markers aligned with the actual core contract, not a parallel approval system.

Do not force every Article to reference a product. Do not silently promote candidate copy, generated text, selected layout screenshots or private context into approved records. Missing public content results in a truthful sparse view. A review-only layout skeleton can identify unfilled zones; those placeholders must not ship as editorial claims.

## 8. Responsive and motion rules

Desktop: preserve unequal block scales, overlapping images and text, peripheral crops and a central readable action layer. Not all zones need the same number of columns or the same height. Shared typography roles and clear labels hold the field together; a final theme is not decided here.

Mobile: preserve native vertical exploration. Reflow relation groups into a selected subject and associated cards/list. Keep image overlaps only where they do not obstruct text or create horizontal navigation requirements. Keep workshop and contents accessible without reaching the bottom. Touch and keyboard must not depend on hover.

Psychedelic visual language is proposed through hue contrast, altered scale, sharp crops and controlled layering, not flashing, rapid high-contrast oscillation, strobing or claims of altered consciousness. Begin with motion disabled. Motion must be optional and respect reduced-motion preferences. Do not assert that the eventual visual experience is universally safe; actual visual QA is still required.

Use one primary interactive action in a currently viewed composition. Multiple static layers are compatible with this. Decorative layers have no pointer interception. Stable reading surfaces keep text contrast and focus legible.

## 9. Implementation and performance handoff

Continue the existing Astro workstream and five routes. Do not introduce a renderer or platform migration merely because the word canvas is used. New section links may be Home anchors and material/record content may resolve through existing Articles/Dossiers. Info can explain the proposed workshop without adding transactional routes.

Candidate module roles, to adapt to existing components: EditorialCanvas, CanvasZone, ZoneIndex, FeatureCluster, ScentCluster, RelationView, WorkshopOverview, RecordList, PerspectiveList, ContextReturn. Do not create duplicate components when equivalent ones exist.

Start with semantic flow and a static authored layout. Prefer responsive image assets and bounded CSS/SVG effects; preserve dimensions before load and defer below-fold media. Do not load every high-resolution source or apply live background blur to every card. No always-running simulation or animation framework is required. A long canvas is not permission for a long blocking download.

Profile image bytes, JS bytes, layout shifts, main-thread behaviour and total page weight in the existing measurement ledger or a clearly identified new measurement record. Values are measured after implementation; this brief does not fabricate performance results.

Preserve the repository's official wordmark and reference-only boundary. The selected generated full-page mockups are not to be pasted as the real homepage. Approved crops/foreground assets must be supplied separately; no generation is authorized by this document.

## 10. Work order and acceptance

P0 / Non-visual: complete the document-22 core and valid links. Reconcile old AGENTS visual defaults without deleting history or overriding the user's new direction. A missing image does not block data/navigation work.

P1 / Canvas structure: bind a seven-zone Home composition to the core in a local review build, with a readable static fallback and explicit incomplete zones. The first useful continuous slice is entry → editorial → scent; add materials → workshop → records → perspectives as an extension of the same composition, not seven disconnected design studies.

P2 / User-owned art direction: apply only selected supplied assets/theme decisions. Produce a continuous desktop and mobile review view plus a local relation-selection demonstration. The user approves visual mood; node actions and content integrity are tested, not submitted as extra mood questions.

Required checks:

- Native vertical scroll; no forced wheel translation, drag, zoom or horizontal discovery.
- Every core title/action remains reachable with images and motion disabled.
- Home is not seven repeated left-copy/right-image banners.
- Relation connectors all have verified endpoints/reasons and an equivalent list.
- Deep links work independently, including invalid-context fallback and return to Home zone.
- Workshop is reachable from the first navigation; planned service is not mistaken for live booking.
- Candidate/example, development, publication and availability states remain distinct.
- No invented products, experiments, review statistics, launch dates, authors or contacts.
- Review articles distinguish source-derived reporting from actual first-hand evaluation.
- No private context, recipes, customer information or unapproved image output enters public fixtures/builds.
- Mobile and keyboard can reach the same meaningful content; overlays do not hide focus.
- Fresh check/build/tests and viewport measurements are recorded against the actual tested code SHA.

Deliver a working local review when implemented, not another strategy-only response. This web-GPT change adds a brief only: it does not constitute a rendered page, executed tests, successful merge, deployment or running timer. Current PR conflict handling is a separate Codex task; do not force-push, merge or redeploy to clear it.

FINAL STATUS: STRUCTURE_CANDIDATE / DESIGN_USER_OWNED / MOOD_APPROVAL_REQUIRED / GENERATION HOLD / CREDIT SPEND HOLD / MERGE HOLD / DEPLOY HOLD

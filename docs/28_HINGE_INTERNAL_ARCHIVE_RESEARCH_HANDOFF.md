# Hinge & Rule Internal Archive Research Handoff

Date: 2026-09-13  
Audience: next Codex research session  
Status: authorized for read-only discovery and sanitized indexing

## Purpose

Public search results and Instagram traces are discovery leads, not the complete Hinge & Rule record. The founder confirms that internal estimates, saved project documents, furniture drawings, shop drawings, site drawings, revisions, and field records contain a much deeper body of design and execution evidence.

The objective is to recover that evidence as a structured founder archive without exposing private client information or placing confidential source files in this public repository.

## Binding interpretation

Treat the internal archive as primary evidence for:

- project identity, spelling, location category, and chronology;
- founder authorship and exact role;
- concept, space, furniture, detail, fabrication, and site scope;
- drawing-to-making-to-use continuity;
- revisions, constraints, coordination, and problem solving;
- work volume that public social feeds do not show;
- reusable methods and case-study candidates.

Do not treat a filename or folder name alone as proof of authorship. Cross-check title blocks, author fields, revision history, estimate scope, dates, and related public traces.

## Authorization boundary

The next Codex may inspect files and storage locations that are already mounted, connected, or explicitly made available for this project. The first pass is read-only.

Do not:

- request or extract credentials;
- broaden the search into unrelated personal storage;
- move, rename, delete, overwrite, or reorganize source files;
- upload originals to GitHub or another external service;
- publish drawings, estimates, contracts, messages, or photographs;
- contact clients, collaborators, contractors, or rights holders;
- infer ownership merely because a file is present.

If access requires a new login, permission grant, cloud connection, or access to a location not already authorized, stop and ask the founder.

## Public-repository privacy rule

This repository is public. Never commit:

- raw internal files or screenshots of them;
- exact private storage paths or share links;
- names of private individuals not already approved for public credit;
- phone numbers, email addresses, signatures, account numbers, tax identifiers, or credentials;
- exact residential addresses;
- confidential contract language or commercial terms;
- unapproved line-item pricing, margins, or supplier costs;
- third-party media without confirmed reuse rights.

Use abstract identifiers such as `INT-0001` in committed work. A local source locator may map `INT-0001` to the real path, but it must be named `PRIVATE_SOURCE_LOCATOR.*` and remain untracked under `.gitignore`.

## Priority source classes

| Source class | Likely formats | Evidence value |
|---|---|---|
| Estimates and scope sheets | XLS/XLSX, PDF, DOC/DOCX, HWP | client/project identity, date, work scope, quantities, commercial scale |
| Contracts and proposals | PDF, DOC/DOCX, HWP | parties, role, deliverables, period, rights constraints |
| Furniture and shop drawings | DWG, DXF, PDF, AI, SKP, 3DM | dimensions, materials, joinery, fabrication authorship, revisions |
| Site and construction drawings | DWG, DXF, PDF, SKP | layout, details, field conditions, coordination, as-built changes |
| Models, renders, presentations | SKP, 3DM, AI, PSD, PDF, PPT/PPTX | design intent, options, presentation chronology |
| Field records | JPG/JPEG, PNG, HEIC, MOV, PDF | making, installation, completion, defects, correction, use |
| Production and revision records | email exports, notes, spreadsheets, PDFs | decision trail and problem-solving evidence; index only if private |
| Delivery and closeout records | PDFs, spreadsheets, photographs | completion, installed scope, handoff, outcome |

Archives and backups such as ZIP files may be inventoried, but do not extract them into a tracked directory. Deduplicate conservatively using filename, byte size, date, and an optional local checksum.

## Priority project search set

Begin with the founder-supplied local network and preserve spelling variants:

- 차덕분
- 페브
- 해피브릭
- 요가뜰 / 요가원 뜰
- 예원피아노
- 정갈스레
- 취리희
- 뭐해줄까
- 체이스커피
- 벗터
- 알파콜렉티브 / Ahlfah! Collective

Also connect evidence to the first six case clusters already identified in `docs/25_HINGE_AND_RULE_PUBLIC_TRACE_REPORT.md` and to older Hinge & Rule records where internal documents reveal stronger or previously invisible work.

Search aliases must be recorded rather than silently normalized. Resolve final display names only after the internal and public evidence agree.

## Research sequence

1. Read `AGENTS.md`, `CODEX_TASK.md`, `docs/18_CROSS_AGENT_HANDOFF_2026-09-13.md`, `docs/25_HINGE_AND_RULE_PUBLIC_TRACE_REPORT.md`, and both public-trace ledgers.
2. Identify only the storage roots already authorized and accessible. Record each as an abstract root ID, never as a committed exact path.
3. Build a read-only file inventory using metadata first: source ID, filename, extension, modified date, byte size, candidate project, and document class.
4. Search filenames and, where safely supported, document text/title blocks for project names, aliases, Hinge & Rule name variants, addresses reduced to city/district level, dates, drawing numbers, and revision labels.
5. Cluster related files without moving them. Preserve uncertainty and alternate matches.
6. Inspect the minimum content necessary to determine evidence type, project link, authorship indicators, confidentiality, and rights status.
7. Cross-reference internal source IDs against the public source IDs in `SOURCE_LEDGER_2026-09-13.csv` and project seeds in `FOUNDER_PROJECT_SEED_LEDGER_2026-09-13.csv`.
8. Produce a sanitized project evidence matrix and a findings report. Separate verified facts, founder-supplied claims, working hypotheses, and unresolved conflicts.
9. Stop before publishing source media or making new public claims that expose client/private information.

## Evidence grades

| Grade | Minimum basis | Permitted interpretation |
|---|---|---|
| A | Multiple mutually reinforcing primary records, such as dated scope/estimate plus authored drawings and completion evidence | strong project-role and chronology claim, subject to privacy and rights review |
| B | One strong primary record, such as a dated authored drawing set, signed scope, or revision trail | credible project-role claim with explicit source limitation |
| C | Internal photo/render/export or filename cluster without sufficient authorship chain | archive lead; do not publish as a verified authorship claim |
| D | Ambiguous name match, duplicate, collision, or orphan file | unresolved lead only |

Evidence grade is not media permission. A Grade A file can still be confidential or unusable publicly.

## Required committed deliverables

Create or update:

1. `research/hinge-and-rule-internal-archive/INTERNAL_ARCHIVE_INDEX.csv` — sanitized, one record per relevant file or grouped duplicate set;
2. `research/hinge-and-rule-internal-archive/PROJECT_EVIDENCE_MATRIX.csv` — project-by-evidence summary linked to public source IDs;
3. `docs/30_HINGE_INTERNAL_ARCHIVE_FINDINGS.md` — verified findings, unresolved identities, archive scale, and case-study recommendations;
4. `research/hinge-and-rule-internal-archive/RIGHTS_AND_REUSE_QUEUE.csv` — rights/credit checks needed before public use;
5. a concise Git receipt naming the commit and the exact next action.

Start from `research/hinge-and-rule-internal-archive/INTERNAL_ARCHIVE_INDEX_TEMPLATE.csv`.

## Minimum metadata rules

- Use ISO dates when known; otherwise preserve partial dates and mark certainty.
- Store only city/district-level location in committed files.
- Record currency and price presence, but omit private amounts until explicitly approved.
- Record whether a document contains personal data, pricing, signatures, residential information, or third-party IP.
- Record authorship indicators exactly: title block, filename initials, author metadata, drawing issue sheet, estimate issuer, revision notes, or related correspondence.
- Do not quote confidential text. Summarize the evidence function.
- Keep a `confidence` field and a short `reason` field for every project association.

## Stop and approval gates

Stop and ask the founder before:

- connecting new storage or signing into a new service;
- scanning an unrelated personal root;
- uploading, converting, OCR-processing, or sharing internal files through an external service;
- committing any price, contract term, identifiable client data, or exact private location;
- publishing a drawing, estimate, site photograph, or case-study claim;
- deleting, relocating, or renaming archive originals.

## Exact first action for the next Codex

Perform a read-only discovery pass over already available project storage. Report only:

1. abstract root IDs;
2. file counts by type;
3. date range;
4. candidate project clusters;
5. privacy/risk flags;
6. which roots or formats require separate permission or tooling.

Then pause for review before deep content extraction.

# AFTON SESSION REVIEW AND CONTENT BATCH 01

Recorded: 2026-09-15
Status: CONTENT_DRAFTS_CREATED / SOURCE_MAPPED / CODE_INSPECTED / TESTS_NOT_RERUN / MOOD_APPROVAL_REQUIRED
Boundary: ACCOUNT_ACTIONS HOLD / EXTERNAL PUBLISHING HOLD / GENERATION HOLD / CREDIT SPEND HOLD / MERGE HOLD / DEPLOY HOLD

## 1. 이번 요청과 저장 범위

사용자는 이 세션에서 콘텐츠 생성, 기존 웹 구축 작업, AFTON 메인 디자인과 콘셉트를 함께 확인하고 각 콘텐츠의 근거를 기록하도록 요청했다. 이 파일은 계획만 추가한 문서가 아니라 AFTON 원고 3개와 현재 저장소 대조 결과를 담는다.

전체 생산 묶음은 AFTON 3개, 힌지앤룰 오피셜 1개, 힌지앤룰 디자인 개인 계정 1개, UNSEEN RATIO 1개로 총 6개다. 다른 계정의 실제 원고와 전체 근거대장은 사용자 Google Drive에 별도 저장했다. 이 공개 웹사이트 저장소에는 AFTON 원고와 일반화된 작업·출처 기록만 남긴다. 다른 계정의 글을 AFTON 페이지에 자동 편입하지 않는다.

본문은 전부 CANDIDATE다. 소비자용 문장은 GPT가 쓴 초안이며 사용자의 기존 발언을 직접 인용한 것으로 가장하지 않는다. 사용자 결정, 프로젝트 문서, 코드 관찰, 이전 테스트 보고, 창작 카피를 구분한다. 외부 과학·시장·플랫폼 사실을 새로 조사한 묶음은 아니다.

## 2. 실제 Git 상태: 두 작업 흐름을 구분

### PR #1: 기존 랜딩 + 캔버스·운영 계획

- URL: https://github.com/baraba80-lab/afton-works-site/pull/1
- 읽은 head: `3e78c2cf9eae0b600d17b18b3d56e6facc49fa15`
- branch: `codex/afton-landing-v0-1`
- 읽기 시점: open / merged=false / mergeable=false
- `src/pages` 조회에는 `index.astro` 하나가 있다.
- 실제 파일은 이전 ScentField 기반 단일 랜딩이다. 7구간 캔버스와 5개 콘텐츠 화면이 이 브랜치에 구현되었다고 보고하지 않는다.
- 기존 `SEOUL`, 향 설명, `Material before category` 및 초기 색상 지시는 코드에 있다는 이유만으로 최신 검증 사실·무드 승인으로 재사용하지 않는다.

### PR #3: 별도의 구현 후보가 존재함

- URL: https://github.com/baraba80-lab/afton-works-site/pull/3
- head: `6f391fe602f11e5903dba0d9b2fcf707474815f7`
- branch: `work/afton-editorial-core-v01`
- target: `codex/afton-landing-v0-1`
- 읽기 시점: draft / open / merged=false / mergeable=false
- 변경 파일 목록과 `src/editorial/contracts.ts`, `src/content/candidate-v01.ts`, `src/components/editorial/Document.astro`, 구현 영수증을 실제로 읽었다.
- 여덟 엔티티 계약과 다섯 화면용 코어, 후보 데이터, 별도 테스트 파일이 존재한다. 구현이 전혀 없다는 이전 상태 해석을 반복하지 않는다.
- Document.astro는 기능 검토용이며 최종 디자인이 아님을 명시한다. 이 코어를 승인된 메인 화면으로 보지 않는다.

### 테스트 증거의 등급

`docs/GIT_RECEIPT_EDITORIAL_CORE_V01.md`가 보고한 tested SHA는 `aab43d3a901be802d6db325756ac9aa14f88fc14`다. 41개 단위·콘텐츠 테스트, Astro check, 6개 정적 페이지 빌드, 15개 route/viewport 점검 통과가 기록되어 있다.

이는 **기존 실행자의 영수증 보고**다. 이번 세션에서 앱 테스트나 브라우저 렌더를 재실행하지 못했다. 로컬 container/python 실행 도구가 오류를 반환했으므로 이번 결과는 CODE_INSPECTED이지 FRESH_TEST_PASS가 아니다. Git 원문 열람과 원고 저장은 성공했으며 앱 실행과 구분한다.

PR mergeability는 읽기 시점의 값이다. 두 PR의 충돌 원인을 전체 diff 대조 없이 특정하지 않는다. 강제 push, main 병합, 자동배포로 해결하지 않는다.

## 3. 메인 디자인·콘셉트 검토 기준

| 항목 | 기준 | 현재 판단 |
|---|---|---|
| AFTON 중심 | 익숙하지만 특정하기 어려운 감각, 향·원료·개발·실험·업계 이야기 | 사용자 방향으로 기록 |
| 메인 구조 | 브라우저보다 큰 유한한 세로 편집 캔버스 | 23~24번에 설계됨, 적용 렌더 미검증 |
| 표현 | 강한 색·타이포·이미지 중첩·추상적 관계 | 방향은 반영, 개별 색·서체·자산은 사용자 승인 전 |
| R08·R09 | 편집 위계, 정보·노드 관계 | 메인 구조의 핵심 근거 |
| R06·R07·R10 | 탐색·공간 표현, 기록의 연결과 복귀 | 보조 역할, 독립된 효과 강제 금지 |
| 공방 | 온라인 선결제 후 리서치·설계, 방문 선택·관리된 배합·수령 | 준비 중 서비스로만 설명 |
| 개인정보 | 개인 배경·가족·재정·건강·처방·고객 자료 | 공개 콘텐츠에서 제외 |
| 이미지 | 기존 6개 생성 이미지 제외; 후속 15개는 레이아웃 연구 | 새 픽셀 검수 안 함, 실제 사용 승인과 분리 |

큰 화면이 가로 이동 강제를 의미하지 않는다. 의미 있는 글·링크는 정상 DOM에 남기고 중첩은 시각층에서 다룬다. 대비·겹침의 과감함을 일반 베이지 향수 광고로 되돌리지 않는다. 반대로 사이키델릭이라는 말로 실제 심리 효과를 주장하지 않는다.

이번 문서는 최종 화면 승인을 수행하지 않았다. 다음 무드 검토는 사용자 공급 자산을 적용한 실제 PC·모바일 렌더와 선택·복귀 상태를 기준으로 한다. 단순 기능 검토본을 최종 시안으로 다시 제출하지 않는다.

## 4. AFTON 원고 AF-001

- ID: `AF-001`
- version: `0.1`
- owner: AFTON
- format: 공식 첫 게시물 / 홈 문구 / 캐러셀
- basis: S01, S02, S03
- claim class: USER_DIRECTION + EDITORIAL_CREATION + PLANNED_SERVICE
- editorial status: ready_for_review
- publishing status: on_hold
- public URL / published_at / verified account handle: null

### 제목

익숙한데, 이름은 모르겠다.

### 게시물 본문

무슨 향인지 모르겠는데, 좋다.
어디선가 맡은 것 같은데, 떠오르는 이름은 없다.

AFTON은 그 사이를 출발점으로 삼습니다.
향의 이름만 나열하기보다, 향을 만드는 선택과 그 주변의 이야기를 함께 다루려 합니다.

원료에 대한 이야기, 개발 중에 바뀌는 방향, 향을 바라보는 서로 다른 시선. 읽던 이야기가 자기 향을 만드는 경험으로 이어지는 공방도 준비하고 있습니다.

설명할 수 없는 감각을 서둘러 정답으로 바꾸지는 않겠습니다.
무엇이 마음에 남는지부터 따라가겠습니다.

Familiar, but not identifiable.

### 캐러셀 문안

1. 익숙한데, 이름은 모르겠다.
2. 이름보다 먼저 마음에 남는 향.
3. 원료, 개발, 실험과 그 사이의 이야기.
4. 읽던 향에서, 직접 만드는 향으로. 공방 서비스 준비 중.
5. AFTON. Familiar, but not identifiable.

### Home 필드 후보

- heading: 익숙한데, 이름은 모르겠다.
- introduction: 향, 원료, 실험과 그 사이의 이야기. 직접 만드는 향의 여정도 준비하고 있습니다.
- primary action: 이슈 읽기.
- secondary action: 공방 안내 · 준비 중.

### 7개 구간의 문안

| 구간 | 후보 제목 | 설명 |
|---|---|---|
| Entry | 익숙한데, 이름은 모르겠다. | Home introduction 사용. 현재 Issue 표지를 두 번 반복하지 않음 |
| Editorial | 향을 둘러싼 이야기 | 개발기와 원료 이야기, 업계를 바라보는 글을 읽습니다 |
| Scents | 만드는 중인 향, 남겨둔 기록 | 설명과 개발·제공 상태를 구분합니다 |
| Materials | 하나의 원료에서 다른 이야기로 | 관련 글과 감각적 참조를 따라갑니다 |
| Workshop | 읽던 향에서, 내가 만드는 향으로 | 방문 제작 경험을 준비하고 있습니다 |
| Records | 바뀐 부분을 남깁니다 | 공개 가능한 관찰과 수정 기록을 모읍니다 |
| Perspectives | 다른 향을 읽는 시선 | 직접 경험한 평가와 자료를 바탕으로 쓴 소개를 구분합니다 |

### 검증 한계

구간 문안은 분류와 편집 방향이다. 이미 실제 글·실험·제품이 모두 공개되었다는 주장으로 사용하지 않는다. 없는 구간은 준비 상태로 표시한다. 해당 원고는 특정 향의 효능·구성·지속력을 설명하지 않는다. 계정·자산·링크·운영 상태 확인 전 외부 발행 금지.

## 5. AFTON 원고 AF-002

- ID: `AF-002`
- version: `0.1`
- owner: AFTON
- format: 웹 Article / 공식 계정 파생 캡션
- basis: S02, S03; 예시 대화는 이번 창작 표현
- claim class: EDITORIAL_VIEWPOINT, not SCIENTIFIC_REPORT
- editorial status: ready_for_review
- publishing status: on_hold

### 제목

좋아하는 향을 꼭 설명할 수 있어야 할까?

### 요약

좋아한다는 판단과 무엇인지 설명하는 말 사이에서 시작하는 AFTON의 첫 글.

### 본문

“무슨 향인지 모르겠는데, 좋다.”

AFTON이 출발점으로 삼고 싶은 말이다. 특정한 꽃이나 나무의 이름이 먼저 나오지 않아도 괜찮다. 이 글에서는 향을 정확히 맞히는 일보다, 무엇이 마음에 남았는지를 이야기해보려 한다.

우리는 향의 설명을 정답지로 사용하지 않으려 한다. 설명은 먼저 맡아본 사람이 남긴 단서이고, 다음 사람이 자신의 감각과 대조해볼 수 있는 말이었으면 한다.

편안하다는 말을 읽었는데 내게는 날카롭게 느껴진다면, 여기서 필요한 질문은 누가 틀렸는가가 아니다. 어느 부분이 날카로웠는지, 처음부터 그랬는지, 시간이 지나고도 남았는지에 더 관심을 두려 한다. 이는 한 반응으로 특정 원료나 후각의 특성을 진단하겠다는 뜻은 아니다.

이름을 모르더라도 방향은 말해볼 수 있다. 처음보다 마지막이 더 좋다. 가까이에서는 좋은데 멀리 퍼지지는 않았으면 한다. 이 부분은 남기고 저 부분은 덜어내고 싶다. 이런 문장들을 개인향을 설계하기 위한 대화의 출발점으로 삼으려 한다.

AFTON의 매거진에서는 그 대화 주변의 맥락도 다룰 예정이다. 원료를 이야기하는 글, 개발 과정에서 선택이 바뀐 이유, 다른 향을 읽는 시선. 직접 관찰한 기록과 자료를 읽고 정리한 글은 구분해 싣겠다.

좋은 향을 하나의 말로 끝내기보다, 계속 읽고 확인할 수 있는 대상으로 남겨두고 싶다. 설명을 잘하는 사람에게만 열리는 세계가 아니라, 아직 말이 붙지 않은 감각도 들어올 수 있는 곳으로.

그래서 첫 질문은 “어떤 향조를 좋아하세요?”보다 이렇게 시작하려 한다.

“어떤 부분을 남기고 싶으세요?”

### 파생 캡션

좋아한다는 말과 설명할 수 있다는 말은 같지 않습니다.
AFTON은 향을 맞히는 답보다, 어떤 부분을 남기고 싶은지 묻는 대화에서 출발하려 합니다.
첫 글: 좋아하는 향을 꼭 설명할 수 있어야 할까?

### 연결과 검증 한계

기존 PR #3의 `article:a001`, slug `what-remains`에 편집 후보로 매핑할 수 있다. 제목을 바꿨다는 이유만으로 ID·slug를 자동 변경하지 않는다. 기존 테스트 fixture를 보존해야 한다면 별도 편집 후보 데이터로 분리한다.

이 글은 뇌과학·후각 진단·집단 통계를 뒷받침하는 자료가 아니다. 예시 반응은 가상 대화이며 실제 고객 인용이 아니다. 특정 향수·원료에 대한 사실을 추가하려면 별도 1차 출처가 필요하다. 후보 `scent:s001`과 연결하더라도 제품 특성이 검증되었다는 뜻은 아니다.

## 6. AFTON 원고 AF-003

- ID: `AF-003`
- version: `0.1`
- owner: AFTON
- format: Info 공방 안내 / 블로그 재편집 원문 / 캐러셀
- basis: U02, S01 §2.4, S03 §5
- claim class: PLANNED_SERVICE
- editorial status: ready_for_review
- publishing status: on_hold

### 제목

방문하기 전에 시작되는 향

### 필수 상태문

AFTON 개인향 공방은 현재 준비 중입니다. 아래는 계획 중인 서비스 방식이며, 이 페이지에서는 결제나 예약을 받지 않습니다.

### 본문

공방에 도착한 뒤에야 모든 질문을 시작하는 대신, 만나기 전부터 필요한 대화를 준비하는 방식을 구상하고 있습니다.

서비스와 조건을 확인하고 결제를 마치면 고객 리서치와 향 설계를 시작하는 구조입니다. 나를 위한 향인지 선물인지, 어떤 상황에서 쓰고 싶은지, 이미 알고 있는 향 중 무엇이 좋았고 무엇이 불편했는지를 묻습니다. 특정 향수의 처방을 복제하기보다 원하는 방향을 함께 설명하기 위한 질문입니다.

그 답을 바탕으로 방문 전에 비교할 후보를 준비하고, 현장에서는 실제로 맡아보며 마지막 방향을 선택하도록 계획하고 있습니다. 배합 참여는 운영자의 관리 아래 이루어지는 방식으로 준비하며, 완성한 향은 포장해 가져가는 흐름입니다.

배합한 날짜와 포장한 날짜, 사용·보관 안내도 결과물과 함께 전달할 계획입니다. 구체적인 방문 시간, 용량, 금액, 제공 일정, 포장 방식과 권장 개봉 시점은 확정 후 안내하겠습니다.

아직 향을 전문적인 말로 설명하지 못해도 대화를 시작할 수 있는 공방. 오래 고민해야 하는 일은 방문 전에 나누고, 현장에서는 실제 향을 맡고 결정하는 데 집중하는 경험을 목표로 합니다.

### FAQ

**지금 예약할 수 있나요?**
아직 예약과 결제 기능은 열리지 않았습니다. 준비 상황과 운영 조건이 정리된 뒤 안내합니다.

**좋아하는 향수 이름을 꼭 알아야 하나요?**
알고 있는 향이 있다면 비교의 단서로 사용할 계획입니다. 특정 향을 모르는 경우에는 용도와 원하는 인상부터 대화를 시작하는 방식을 준비하고 있습니다.

**기존 향수를 그대로 만들어주는 서비스인가요?**
기존 향수는 원하는 방향을 설명하는 참고점으로 다루려 합니다. 특정 브랜드의 비공개 처방을 재현한다고 약속하는 서비스가 아닙니다.

**만든 날 바로 사용할 수 있나요?**
사용·보관·권장 개봉 안내는 실제 배합과 포장 조건을 확인한 뒤 정합니다. 현재 일률적인 기간을 약속하지 않습니다.

### 캐러셀 문안

1. 방문하기 전에 시작되는 향.
2. 서비스와 조건 확인.
3. 결제 후, 고객 리서치와 향 설계 시작.
4. 방문해서 실제 향을 맡고 마지막 방향 선택.
5. 관리된 배합 참여, 포장과 수령.
6. AFTON 개인향 공방 준비 중. 현재 예약·결제 미운영.

### 검증 한계

실제 운영 개시·자격·안전성·소요시간·용량·가격·재고는 이 원고에서 확인하지 않았다. 2주·진공 포장 구상은 검증 전이므로 보편적인 기술 조건으로 쓰지 않는다. 이미 승인된 외부 공개 사실처럼 표시하지 않는다.

기존 SiteContent에는 독립 workshopGuide 필드가 없다. `site.info.body`의 구조화된 본문으로 수용하거나 정확히 필요한 최소 계약 변경을 검토한다. `/info/#workshop`은 실제 anchor 구현·테스트 이후에만 링크한다. 운영 설명은 결제·설문·예약·FMOC2 실행으로 확장하지 않는다.

## 7. 콘텐츠별 근거대장

수집·대조일: 2026-09-15. 원본 수정 시 파생 캡션과 안내 문안의 재검토 필요 여부를 표시한다. 아래 SHA는 실제 Git blob 식별자이며 별도 SHA-256을 계산한 것으로 표기하지 않는다.

| Source ID | 종류 | 원문 위치 | 지원 범위 | 지원하지 않는 것 |
|---|---|---|---|---|
| U01 | 사용자 결정 | 이 대화의 네 계정 역할 지정 발언 | 오피셜/개인/아티스트/브랜드의 독립 목적 | 수익·계정 소유·발행 상태 |
| U02 | 사용자 서비스 구상 | 이 대화의 선결제 후 향설계·방문제작 설명 | AF-003의 계획 순서 | 실운영·기술 검증·기간 보장 |
| U03 | 이번 사용자 요청 | 이 세션에서 콘텐츠·사이트·메인 디자인·근거를 함께 확인 | 이번 생산 및 검토 범위 | 공개·병합·배포 승인 |
| S01 | 사용자 결정 정리 문서 | docs/25_ECOSYSTEM_AND_CHANNEL_OPERATING_PLAN_V01.md §1~3 | 계정 역할, AFTON 준비 서비스, 선택적 연결 | 과학적 성과·플랫폼 성과 |
| S02 | 구조 제안 | docs/24_CANVAS_FIRST_SEQUENCE_AND_DETAIL_V01.md §2~4 | Home·Article·Dossier·Info 연결 | 최종 무드·브라우저 검증 |
| S03 | 구조 제안 | docs/23_EDITORIAL_CANVAS_WIREFRAME_V02.md §1~5 | 캔버스·7구간·공방 계획·기록 구분 | 실제 실험·다른 브랜드 평가 |
| S04 | 실제 코드 열람 | PR #3 src/editorial/contracts.ts | 필드와 타입의 존재 | 검증 실행 성공 |
| S05 | 실제 코드 열람 | PR #3 src/content/candidate-v01.ts | 기존 후보 ID·slug | 확정 제품 정보 |
| S06 | 실제 코드 열람 | PR #3 src/components/editorial/Document.astro | 디자인 없는 semantic renderer | 최종 디자인 승인 |
| S07 | 기존 테스트 영수증 | PR #3 docs/GIT_RECEIPT_EDITORIAL_CORE_V01.md | 이전 실행 결과의 보고 | 이번 세션 재실행 |

### 원본 식별자

- S01 commit `3e78c2cf9eae0b600d17b18b3d56e6facc49fa15`; blob `1ce3dbc204e9fd813ee42ffb507111fe59c2d311`
  https://github.com/baraba80-lab/afton-works-site/blob/3e78c2cf9eae0b600d17b18b3d56e6facc49fa15/docs/25_ECOSYSTEM_AND_CHANNEL_OPERATING_PLAN_V01.md
- S02 commit `3e78c2cf9eae0b600d17b18b3d56e6facc49fa15`; blob `e27f8d5a52b60368d70566246aa8d9d8d33cf6ba`
  https://github.com/baraba80-lab/afton-works-site/blob/3e78c2cf9eae0b600d17b18b3d56e6facc49fa15/docs/24_CANVAS_FIRST_SEQUENCE_AND_DETAIL_V01.md
- S03 commit `3e78c2cf9eae0b600d17b18b3d56e6facc49fa15`; blob `0e9807afde846ca28cb205ed8666cb42e08e2b2f`
  https://github.com/baraba80-lab/afton-works-site/blob/3e78c2cf9eae0b600d17b18b3d56e6facc49fa15/docs/23_EDITORIAL_CANVAS_WIREFRAME_V02.md
- S04 commit `6f391fe602f11e5903dba0d9b2fcf707474815f7`; blob `5825fae42a9aaad6157ebf8e6f90376bf7142c02`
  https://github.com/baraba80-lab/afton-works-site/blob/6f391fe602f11e5903dba0d9b2fcf707474815f7/src/editorial/contracts.ts
- S05 same core commit; blob `11317cd547886d6b46343b7c30f289e3d92dfa7f`
  https://github.com/baraba80-lab/afton-works-site/blob/6f391fe602f11e5903dba0d9b2fcf707474815f7/src/content/candidate-v01.ts
- S06 same core commit; blob `7e367cd1db90898184b87402504d6f8d4319056c`
  https://github.com/baraba80-lab/afton-works-site/blob/6f391fe602f11e5903dba0d9b2fcf707474815f7/src/components/editorial/Document.astro
- S07 same core commit; blob `2998440d46f15c7344df38b64e8defc6bc0ebff5`
  https://github.com/baraba80-lab/afton-works-site/blob/6f391fe602f11e5903dba0d9b2fcf707474815f7/docs/GIT_RECEIPT_EDITORIAL_CORE_V01.md

### 6개 원고의 추적 기록

| Content ID | 소유 주체 | 근거 | 완료 | 미확정 |
|---|---|---|---|---|
| AF-001 | AFTON | S01/S02/S03 | 첫 게시물·캐러셀·Home 문안 | 무드·실제 링크·계정·발행 |
| AF-002 | AFTON | S02/S03 + 창작 에세이 | 전체 Article·파생 캡션 | 콘텐츠 적용·공개 |
| AF-003 | AFTON | U02/S01/S03 | 공방 계획 설명·FAQ·캐러셀 | 운영 조건·실제 링크·발행 |
| HO-001 | 힌지앤룰 오피셜 | U01/S01 §2.1 | 사업 계정 문의 준비 안내, 사용자 Drive 보관 | 품목·사례 권리·문의 창구·발행 |
| HD-001 | 힌지앤룰 디자인 | U01/S01 §2.2 | 개인 리뷰 원칙·블로그 초안, 사용자 Drive 보관 | 저자 목소리 검토·발행 |
| UR-001 | UNSEEN RATIO | U01/S01 §2.3 + 창작 | 아티스트 노트·캡션, 사용자 Drive 보관 | 대응 작품·무드·발행 |

모든 원고는 version 0.1이며 public URL과 published_at은 null이다. 근거 유형을 '출처 있음' 하나로 합치지 않는다. 사용자 결정은 사업 구상을, 실제 제품 평가에는 별도의 관찰·공식 자료를, 창작 문구에는 그 창작 성격을 기록한다.

## 8. Codex 다음 작업: 새 기획서 대신 기존 코어에 연결

1. 현재 PR #1과 PR #3 HEAD를 다시 읽는다. 본 문서 작성 뒤의 이동을 덮어쓰지 않는다.
2. PR #3의 이미 구현된 코어를 재사용한다. PR #1 쪽 23~25번의 최신 캔버스·역할 지시와 충돌을 검토하되 main 병합·강제 push·배포는 하지 않는다.
3. 필요하면 통합 후보 브랜치에서 변경을 검토한다. 기존 코드나 fixture를 무턱대고 삭제하지 않는다. 이 문서는 MERGE HOLD를 해제하지 않는다.
4. AF-001은 Home, AF-002는 Article, AF-003은 Info에 각각 후보 원고로 매핑한다. 기존 stable ID·slug를 유지하고 변경한 entity revision을 기록한다.
5. 원고 출처 메타데이터는 렌더되는 문자열과 분리한다. private 문서 참조·개인 채널 원고·내부 검증 메모가 소비자 payload에 섞이지 않게 한다.
6. 실제 없는 원료·제품·가격·지역·연락처를 채우지 않는다. 테스트 예시는 테스트라고 표시하고 실제 콘텐츠처럼 만들지 않는다.
7. 24번 상단 세 구간과 실제 읽기 경로를 연결하고 정확한 tested SHA, check/build/tests, PC·모바일 검토 경로를 제출한다. 기존 영수증의 결과를 새 통합 검증으로 재사용하지 않는다.
8. 주요 수용기준: 네이티브 세로 이동, 유효한 제목·목차·관계·복귀, 공방 준비 고지, 후보/공개 분리, 무이미지 동작, 내부 자료 미노출, 생성·외부 발행·거래 없음.

## 9. 세션 운영과 권한

각 검토에서는 새 SHA·변경 내용·테스트 증거·콘텐츠 ID/버전·출처·미확정 항목을 함께 제시한다. 무드 질문은 색·서체·자산·레이아웃 감성의 실제 시안으로만 좁힌다. 이미 결정된 IA를 다시 승인받거나 읽지 않은 파일을 확인했다고 보고하지 않는다.

이번 기록이 상시 감시기나 30분 타이머의 실행 증거는 아니다. 계정 소개 변경, 게시, 이미지 생성, 크레딧 소비, PR 병합, 배포는 모두 보류다.

FINAL STATUS: CONTENT_DRAFTS_CREATED / SOURCE_MAPPED / CODE_INSPECTED / TESTS_NOT_RERUN / MOOD_APPROVAL_REQUIRED / EXTERNAL PUBLISHING HOLD / GENERATION HOLD / CREDIT SPEND HOLD / MERGE HOLD / DEPLOY HOLD

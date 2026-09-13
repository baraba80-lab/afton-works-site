import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const repoRoot = process.argv[2];
const raw = JSON.parse(await fs.readFile(path.join(repoRoot, "research/instagram/raw_inventory_2026-09-13.json"), "utf8"));
const reviewed = JSON.parse(await fs.readFile(path.join(repoRoot, "research/instagram/reviewed_post_details_2026-09-13.json"), "utf8"));

const manual = new Map([
  ["Dbaq836PyoM", ["RIGHTS-CHECK", "EXHIBITION", "전시·협업 크레딧과 사용 범위 확인 후 기록", "Ahlfah! Collective 기획전"]],
  ["Daj0wMVj2Op", ["KEEP", "SPACE / SYSTEM", "메종판타지아의 공간·가구·운영 설계를 함께 증명", "MAISON FANTASIA"]],
  ["DaRLV7zkoDR", ["REWRITE", "OBJECT / USE", "르미식탁 가구의 목적과 제작 역할을 보강", "르미식탁"]],
  ["DX27Bz9j6IX", ["REWRITE", "SYSTEM", "연구·시스템 설계의 전환 증거. 비공개 기술은 제거", "LLM 시스템 연구"]],
  ["DSAAl1qj4gC", ["KEEP", "SPACE", "공간의 기본 풍경을 보여주는 최근 증거", "카페 오즈"]],
  ["DQA17MtD6kc", ["ARCHIVE", "PERSONAL", "전환 아카이브의 첫 화면에서는 맥락이 약함", "개인 기록"]],
  ["DO7jOJDD-c7", ["KEEP", "USE / OBJECT", "사용을 상상하며 만든다는 핵심 방법론을 직접 표현", "사용 중심 제작"]],
  ["DOwzVQfks_T", ["REWRITE", "SPACE", "완성 결과와 역할·연도를 보강", "상업 인테리어"]],
  ["C_h4oWOyatF", ["ARCHIVE", "PERSONAL", "단독으로는 작업 증거가 부족함", "개인 기록"]],
  ["C_b6t5USAVj", ["KEEP", "SPACE / SYSTEM", "카페 리뉴얼의 운영 목적을 가진 프로젝트", "5PM 리뉴얼"]],
  ["CxvZ6ztSgno", ["ARCHIVE", "PERSONAL", "낚시 기록은 공식 전환 그리드에서 분리", "개인 기록"]],
  ["CxvZu5hy--K", ["REWRITE", "SPACE / OBJECT", "재료 비율과 카페 리뉴얼 맥락을 보강", "헤이 카페"]],
  ["Cm1ySZ1Sxdw", ["REWRITE", "ARCHIVE", "연도 표지는 유지 가능하나 구체 작업 근거 연결 필요", "2023 시작 기록"]],
  ["CmtcohMy3E3", ["KEEP", "SPACE", "상업공간 포트폴리오 증거", "네일바유"]],
  ["CV5lngzBuIm", ["ARCHIVE", "PERSONAL", "낚시 장비 기록은 공식 작업 아카이브에서 분리", "개인 기록"]],
  ["CVctlUVhFbL", ["ARCHIVE", "PERSONAL", "차량 오디오 기록은 현재 전문 범위와 연결이 약함", "개인 기록"]],
  ["CIam9fsA8yd", ["KEEP", "SPACE / MAKING", "카페 외부 요소와 현장 대응 기록", "체이스커피"]],
  ["CIXrOwvA8w7", ["KEEP", "SPACE / MAKING", "중식당 구축 과정의 프로젝트 증거", "취리희"]],
  ["B6u8X00guyE", ["ARCHIVE", "REFERENCE", "타 작가 추모·레퍼런스는 본인 작업 인덱스에서 분리", "Syd Mead 기록"]],
  ["B6u1RFHA_l1", ["KEEP", "SPACE", "프로젝트 섬소년의 공간 작업 증거", "프로젝트 섬소년"]],
  ["BrwVbWNneFl", ["KEEP", "SPACE", "주거 인테리어 연대기 증거", "한라비발디"]],
  ["Brg7n8in_qV", ["KEEP", "SPACE / USE", "키즈 베이킹 공간과 실제 사용 맥락", "벗터"]],
  ["BSQzbf6jnuY", ["REWRITE", "MAKING", "셀프 인테리어 지원 역할을 명확히 기록", "마나올라나"]],
  ["BDciwwFKJU7", ["REVIEW", "ORIGIN", "초기 기록. 이미지와 캡션을 직접 확인해 기원 서사 판단", "2016 시작 기록"]],
]);

function shortcode(url) {
  const parts = url.split("/").filter(Boolean);
  return parts.at(-1) || "";
}

function parseDate(alt) {
  const m = alt.match(/on ([A-Za-z]+ \d{2}, \d{4})/);
  return m ? new Date(`${m[1]} 00:00:00 UTC`) : null;
}

function mediaType(url) {
  return url.includes("/reel/") ? "REEL" : "POST";
}

function compactDescription(alt) {
  return alt.replace(/^Photo by .*?(?: on [A-Za-z]+ \d{2}, \d{4}\.| in .*?\.)\s*/, "").slice(0, 480);
}

function captionExcerpt(text) {
  const lines = text.split("\n").map(v => v.trim()).filter(Boolean);
  const stop = ["아직 댓글이 없습니다.", "댓글을 남겨보세요.", "Meta"];
  const useful = lines.filter(v => !["hinge_and_rule", "sumboy_v_and_v", "팔로우", "AI 콘텐츠", "수정됨", "•", " "].includes(v) && !/^\d+주$/.test(v));
  const end = useful.findIndex(v => stop.includes(v));
  return useful.slice(0, end >= 0 ? end : 12).join(" ").slice(0, 650);
}

const detailMap = new Map();
for (const x of [...reviewed.hingeCandidates, ...reviewed.unseenPosts]) detailMap.set(x.url, x);

function buildRows(account, items) {
  return items.map((x, i) => {
    const code = shortcode(x.url);
    const detail = detailMap.get(x.url);
    let action = "REVIEW";
    let theme = "UNCLASSIFIED";
    let rationale = "이미지·캡션 직접 검토 필요";
    let title = "";
    if (account === "sumboy_v_and_v") {
      action = x.url.includes("/reel/") ? "REVIEW" : "KEEP";
      theme = "PROLOGUE 00";
      rationale = x.url.includes("/reel/") ? "영상 내용과 서사 위치 확인" : "기존 15개 연재의 순서를 보존";
      title = "BEFORE THE NAME";
    } else if (manual.has(code)) {
      [action, theme, rationale, title] = manual.get(code);
    }
    return [account, i + 1, parseDate(x.alt), code, mediaType(x.url), title, theme, action, rationale, detail ? captionExcerpt(detail.text) : "", compactDescription(x.alt), x.url, "", "", ""];
  });
}

const mainRows = buildRows("hinge_and_rule", raw.accounts.hinge_and_rule);
const officialRows = buildRows("hinge_and_rule_official", raw.accounts.hinge_and_rule_official);
const unseenRows = buildRows("sumboy_v_and_v", raw.accounts.sumboy_v_and_v);

const wb = Workbook.create();
const reviewSheet = wb.worksheets.add("Review");
const mainSheet = wb.worksheets.add("Hinge Main");
const officialSheet = wb.worksheets.add("Official");
const unseenSheet = wb.worksheets.add("UNSEEN");
for (const s of [reviewSheet, mainSheet, officialSheet, unseenSheet]) s.showGridLines = false;

const black = "#171717";
const ivory = "#F3F0E8";
const blue = "#A7B8C6";
const paleBlue = "#E7EDF1";
const line = "#D8D3C9";
const muted = "#6C6A65";

reviewSheet.getRange("A1:H1").merge();
reviewSheet.getRange("A1").values = [["Hinge & Rule / UNSEEN_RATIO Post Review"]];
reviewSheet.getRange("A1:H1").format = { fill: black, font: { color: ivory, bold: true, size: 20 }, rowHeight: 34, verticalAlignment: "center" };
reviewSheet.getRange("A3:H3").values = [["Account", "Collected", "Reviewed", "Keep", "Rewrite", "Archive", "Rights check", "Remaining review"]];
reviewSheet.getRange("A3:H3").format = { fill: blue, font: { color: black, bold: true }, borders: { preset: "all", style: "thin", color: line }, wrapText: true };
reviewSheet.getRange("A4:A6").values = [["Hinge Main"], ["Official"], ["UNSEEN"]];
reviewSheet.getRange("B4:B6").values = [[mainRows.length], [officialRows.length], [unseenRows.length]];
reviewSheet.getRange("C4:H4").formulas = [["=COUNTIF('Hinge Main'!$H$2:$H$540,\"<>REVIEW\")", "=COUNTIF('Hinge Main'!$H$2:$H$540,\"KEEP\")", "=COUNTIF('Hinge Main'!$H$2:$H$540,\"REWRITE\")", "=COUNTIF('Hinge Main'!$H$2:$H$540,\"ARCHIVE\")", "=COUNTIF('Hinge Main'!$H$2:$H$540,\"RIGHTS-CHECK\")", "=COUNTIF('Hinge Main'!$H$2:$H$540,\"REVIEW\")"]];
reviewSheet.getRange("C5:H5").formulas = [["=COUNTIF(Official!$H$2:$H$132,\"<>REVIEW\")", "=COUNTIF(Official!$H$2:$H$132,\"KEEP\")", "=COUNTIF(Official!$H$2:$H$132,\"REWRITE\")", "=COUNTIF(Official!$H$2:$H$132,\"ARCHIVE\")", "=COUNTIF(Official!$H$2:$H$132,\"RIGHTS-CHECK\")", "=COUNTIF(Official!$H$2:$H$132,\"REVIEW\")"]];
reviewSheet.getRange("C6:H6").formulas = [["=COUNTIF(UNSEEN!$H$2:$H$16,\"<>REVIEW\")", "=COUNTIF(UNSEEN!$H$2:$H$16,\"KEEP\")", "=COUNTIF(UNSEEN!$H$2:$H$16,\"REWRITE\")", "=COUNTIF(UNSEEN!$H$2:$H$16,\"ARCHIVE\")", "=COUNTIF(UNSEEN!$H$2:$H$16,\"RIGHTS-CHECK\")", "=COUNTIF(UNSEEN!$H$2:$H$16,\"REVIEW\")"]];
reviewSheet.getRange("A4:H6").format = { fill: ivory, borders: { preset: "all", style: "thin", color: line }, verticalAlignment: "center" };
reviewSheet.getRange("A8:H8").merge();
reviewSheet.getRange("A8").values = [["Decision rules"]];
reviewSheet.getRange("A8:H8").format = { fill: black, font: { color: ivory, bold: true } };
reviewSheet.getRange("A9:B13").values = [
  ["KEEP", "Preserve evidence of outcome, making, use, or founder method"],
  ["REWRITE", "Keep media; rewrite role, year, result, and credits"],
  ["ARCHIVE", "Remove from the active surface only after founder approval"],
  ["RIGHTS-CHECK", "Verify collaborator, artist, client, and photographer rights"],
  ["REVIEW", "Inspect image and caption before assigning a decision"],
];
reviewSheet.getRange("A9:B13").format = { fill: ivory, borders: { preset: "all", style: "thin", color: line }, wrapText: true, verticalAlignment: "top" };
reviewSheet.getRange("A15:H15").merge();
reviewSheet.getRange("A15").values = [["Source: public Instagram profile surfaces inspected read-only on 2026-09-13. No live account changes were made."]];
reviewSheet.getRange("A15:H15").format = { font: { color: muted, italic: true, size: 9 }, wrapText: true };
reviewSheet.getRange("A1:H15").format.font.name = "Noto Sans CJK KR";
reviewSheet.getRange("A1:H15").format.columnWidth = 16;
reviewSheet.getRange("B9:B13").format.columnWidth = 48;
reviewSheet.freezePanes.freezeRows(3);

const headers = ["Account", "Grid order", "Date", "Shortcode", "Media", "Project / title", "Evidence class", "Proposed action", "Reason", "Caption excerpt", "Visible description", "URL", "Rights / credit note", "Founder decision", "Final note"];
function writeLedger(sheet, rows, maxRow) {
  sheet.getRange("A1:O1").values = [headers];
  sheet.getRange("A1:O1").format = { fill: black, font: { color: ivory, bold: true, size: 10 }, wrapText: true, verticalAlignment: "center", rowHeight: 32, borders: { preset: "all", style: "thin", color: "#3A3A3A" } };
  sheet.getRange("A2").write(rows);
  sheet.getRange(`A2:O${maxRow}`).format = { fill: ivory, font: { color: black, size: 9, name: "Noto Sans CJK KR" }, wrapText: true, verticalAlignment: "top", borders: { preset: "all", style: "thin", color: line } };
  sheet.getRange(`C2:C${maxRow}`).setNumberFormat("yyyy-mm-dd");
  sheet.getRange(`B2:B${maxRow}`).setNumberFormat("0");
  sheet.getRange(`N2:N${maxRow}`).dataValidation = { rule: { type: "list", values: ["KEEP", "REWRITE", "ARCHIVE", "RIGHTS-CHECK", "REVIEW"] } };
  sheet.getRange(`A2:A${maxRow}`).format.columnWidth = 22;
  sheet.getRange(`B2:B${maxRow}`).format.columnWidth = 10;
  sheet.getRange(`C2:C${maxRow}`).format.columnWidth = 12;
  sheet.getRange(`D2:D${maxRow}`).format.columnWidth = 16;
  sheet.getRange(`E2:E${maxRow}`).format.columnWidth = 9;
  sheet.getRange(`F2:G${maxRow}`).format.columnWidth = 20;
  sheet.getRange(`H2:H${maxRow}`).format.columnWidth = 16;
  sheet.getRange(`I2:I${maxRow}`).format.columnWidth = 42;
  sheet.getRange(`J2:K${maxRow}`).format.columnWidth = 54;
  sheet.getRange(`L2:L${maxRow}`).format.columnWidth = 48;
  sheet.getRange(`M2:O${maxRow}`).format.columnWidth = 28;
  sheet.getRange(`H2:H${maxRow}`).format.fill = paleBlue;
  sheet.freezePanes.freezeRows(1);
  sheet.freezePanes.freezeColumns(4);
}

writeLedger(mainSheet, mainRows, mainRows.length + 1);
writeLedger(officialSheet, officialRows, officialRows.length + 1);
writeLedger(unseenSheet, unseenRows, unseenRows.length + 1);

wb.recalculate();
const inspect = await wb.inspect({ kind: "table", range: "Review!A1:H15", include: "values,formulas", tableMaxRows: 15, tableMaxCols: 8 });
console.log(inspect.ndjson);
const errors = await wb.inspect({ kind: "match", searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!", options: { useRegex: true, maxResults: 100 }, summary: "final formula error scan" });
console.log(errors.ndjson);
const preview = await wb.render({ sheetName: "Review", range: "A1:H15", scale: 1.5 });
await fs.writeFile(path.join(repoRoot, "research/instagram/HINGE_UNSEEN_POST_LEDGER_PREVIEW.png"), new Uint8Array(await preview.arrayBuffer()));
for (const [sheetName, fileName, range] of [
  ["Hinge Main", "HINGE_MAIN_LEDGER_PREVIEW.png", "A1:O12"],
  ["Official", "HINGE_OFFICIAL_LEDGER_PREVIEW.png", "A1:O12"],
  ["UNSEEN", "UNSEEN_LEDGER_PREVIEW.png", "A1:O16"],
]) {
  const sheetPreview = await wb.render({ sheetName, range, scale: 1 });
  await fs.writeFile(path.join(repoRoot, `research/instagram/${fileName}`), new Uint8Array(await sheetPreview.arrayBuffer()));
}
const output = await SpreadsheetFile.exportXlsx(wb);
await output.save(path.join(repoRoot, "research/instagram/HINGE_UNSEEN_POST_LEDGER_2026-09-13.xlsx"));

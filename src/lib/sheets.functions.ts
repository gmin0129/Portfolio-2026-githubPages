import { createServerFn } from "@tanstack/react-start";

const SPREADSHEET_ID = "14vEhUvQAoFGUH1zjHUK3UI7HMXzRy1n0W3Ji4huwP5c";
const SHEET_NAME = "경험정리";
const HEADER_ROW = 3;
const GATEWAY = "https://connector-gateway.lovable.dev/google_sheets/v4";

/** slug -> 1-based row number in the sheet. */
const PROJECT_ROWS: Record<string, number> = {
  "comento-hr": 4,
  "comento-convention": 5,
  "daljjanheun-haru": 6,
  urisigak: 8,
  waynabox: 10,
  "kasteel-rouge": 11,
  "ssu-tutoring": 12,
  "photogray-shyungshyung": 13,
  "die-buehne": 14,
  adt: 15,
};

/** Experience slug -> 1-based row number in the sheet. */
const EXPERIENCE_ROWS: Record<string, number> = {
  "dyb-choisun": 9,
};

/** Column letter -> which section/column of the UI it belongs to. */
const BACKGROUND_COLS = ["B", "C", "G", "H"] as const;
const PROCESS_COLS = ["E", "I"] as const;
const OUTCOME_COLS = ["J"] as const;

function colIndex(letter: string) {
  return letter.charCodeAt(0) - 65;
}

export type SheetTextRun = { startIndex?: number; format?: { bold?: boolean } };
export type SheetField = { label: string; value: string; runs?: SheetTextRun[] };
export type SheetSection = { title: string; fields: SheetField[] };
export type SheetDetail = {
  meta: { title: string; period: string; task: string };
  background: SheetSection;
  process: SheetSection;
  outcome: SheetSection;
} | null;
export type ProjectSheetDetail = SheetDetail;

type GridCell = {
  formattedValue?: string;
  textFormatRuns?: SheetTextRun[];
  effectiveFormat?: { textFormat?: { bold?: boolean } };
};
type GridResponse = {
  sheets?: { data?: { rowData?: { values?: GridCell[] }[] }[] }[];
};

type RichCell = { value: string; runs?: SheetTextRun[] };

function toRichCell(cell: GridCell | undefined): RichCell {
  const value = (cell?.formattedValue ?? "").trim();
  if (!value) return { value };
  if (cell?.effectiveFormat?.textFormat?.bold) {
    return { value, runs: [{ startIndex: 0, format: { bold: true } }] };
  }
  const runs = (cell?.textFormatRuns ?? []).filter((r) => r.format?.bold);
  return runs.length ? { value, runs: cell!.textFormatRuns } : { value };
}

/** Fetches rows with cell formatting (bold runs) via grid data. */
async function sheetsFetchGrid(ranges: string[]): Promise<RichCell[][]> {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const sheetsKey = process.env["GOOGLE_SHEETS_API_KEY"];
  if (!lovableKey || !sheetsKey) {
    throw new Error("Google Sheets gateway credentials are not configured");
  }
  const params = new URLSearchParams();
  for (const range of ranges) params.append("ranges", range);
  params.set("includeGridData", "true");
  params.set(
    "fields",
    "sheets.data.rowData.values(formattedValue,textFormatRuns,effectiveFormat.textFormat.bold)",
  );
  const res = await fetch(`${GATEWAY}/spreadsheets/${SPREADSHEET_ID}?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": sheetsKey,
    },
  });
  if (!res.ok) {
    throw new Error(`Google Sheets ${res.status}: ${await res.text()}`);
  }
  const json = (await res.json()) as GridResponse;
  const data = json.sheets?.[0]?.data ?? [];
  return data.map((block) => (block.rowData?.[0]?.values ?? []).map(toRichCell));
}

function buildSection(
  title: string,
  cols: readonly string[],
  headers: RichCell[],
  row: RichCell[],
): SheetSection {
  const fields: SheetField[] = [];
  for (const col of cols) {
    const i = colIndex(col);
    const label = (headers[i]?.value ?? "").trim();
    const cell = row[i] ?? { value: "" };
    if (!label || !cell.value) continue;
    fields.push({ label, value: cell.value, runs: cell.runs });
  }
  return { title, fields };
}

async function loadRow(rowNumber: number): Promise<SheetDetail> {
  try {
    const [headers = [], row = []] = await sheetsFetchGrid([
      `${SHEET_NAME}!A${HEADER_ROW}:L${HEADER_ROW}`,
      `${SHEET_NAME}!A${rowNumber}:L${rowNumber}`,
    ]);
    if (!row.length) return null;
    return {
      meta: {
        title: (row[0]?.value ?? "").trim(),
        period: (row[1]?.value ?? "").trim(),
        task: (row[2]?.value ?? "").trim(),
      },
      background: buildSection("프로젝트 배경", BACKGROUND_COLS, headers, row),
      process: buildSection("진행과정", PROCESS_COLS, headers, row),
      outcome: buildSection("성과 및 인사이트", OUTCOME_COLS, headers, row),
    };
  } catch (err) {
    console.error("[sheets] row load failed:", err);
    return null;
  }
}

export const getProjectSheetDetail = createServerFn({ method: "GET" })
  .inputValidator((input: { slug: string }) => input)
  .handler(async ({ data }): Promise<SheetDetail> => {
    const rowNumber = PROJECT_ROWS[data.slug];
    if (!rowNumber) return null;
    return loadRow(rowNumber);
  });

export const getExperienceSheetDetail = createServerFn({ method: "GET" })
  .inputValidator((input: { slug: string }) => input)
  .handler(async ({ data }): Promise<SheetDetail> => {
    const rowNumber = EXPERIENCE_ROWS[data.slug];
    if (!rowNumber) return null;
    return loadRow(rowNumber);
  });

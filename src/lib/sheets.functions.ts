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

export type SheetField = { label: string; value: string };
export type SheetSection = { title: string; fields: SheetField[] };
export type SheetDetail = {
  meta: { title: string; period: string; task: string };
  background: SheetSection;
  process: SheetSection;
  outcome: SheetSection;
} | null;
export type ProjectSheetDetail = SheetDetail;

async function sheetsFetch(range: string): Promise<string[][]> {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const sheetsKey = process.env["GOOGLE_SHEETS_API_KEY"];
  if (!lovableKey || !sheetsKey) {
    throw new Error("Google Sheets gateway credentials are not configured");
  }
  const res = await fetch(`${GATEWAY}/spreadsheets/${SPREADSHEET_ID}/values/${range}`, {
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": sheetsKey,
    },
  });
  if (!res.ok) {
    throw new Error(`Google Sheets ${res.status}: ${await res.text()}`);
  }
  const json = (await res.json()) as { values?: string[][] };
  return json.values ?? [];
}

function buildSection(
  title: string,
  cols: readonly string[],
  headers: string[],
  row: string[],
): SheetSection {
  const fields: SheetField[] = [];
  for (const col of cols) {
    const i = colIndex(col);
    const label = (headers[i] ?? "").trim();
    const value = (row[i] ?? "").trim();
    if (!label || !value) continue;
    fields.push({ label, value });
  }
  return { title, fields };
}

async function loadRow(rowNumber: number): Promise<SheetDetail> {
  try {
    const [headers = [], row = []] = await Promise.all([
      sheetsFetch(`${SHEET_NAME}!A${HEADER_ROW}:L${HEADER_ROW}`).then((v) => v[0] ?? []),
      sheetsFetch(`${SHEET_NAME}!A${rowNumber}:L${rowNumber}`).then((v) => v[0] ?? []),
    ]);
    if (!row.length) return null;
    return {
      meta: {
        title: (row[0] ?? "").trim(),
        period: (row[1] ?? "").trim(),
        task: (row[2] ?? "").trim(),
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

/** Never let a transient server-fn/network failure break the page or the poll loop. */
async function safeCall(fn: () => Promise<SheetDetail>): Promise<SheetDetail> {
  try {
    return await fn();
  } catch (err) {
    console.error("[sheets] fetch failed:", err);
    return null;
  }
}

export function projectSheetQueryOptions(slug: string) {
  return {
    queryKey: ["project-sheet", slug] as const,
    queryFn: () => safeCall(() => getProjectSheetDetail({ data: { slug } })),
    staleTime: 0,
    gcTime: 5 * 60 * 1000,
    refetchOnMount: "always" as const,
    refetchInterval: 10 * 1000,
    refetchIntervalInBackground: false,
  };
}

export function experienceSheetQueryOptions(slug: string) {
  return {
    queryKey: ["experience-sheet", slug] as const,
    queryFn: () => safeCall(() => getExperienceSheetDetail({ data: { slug } })),
    staleTime: 0,
    gcTime: 5 * 60 * 1000,
    refetchOnMount: "always" as const,
    refetchInterval: 10 * 1000,
    refetchIntervalInBackground: false,
  };
}

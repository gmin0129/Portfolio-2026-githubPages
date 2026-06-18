import { createServerFn } from "@tanstack/react-start";

/**
 * Maps local slug -> Notion page ID for projects.
 */
const PROJECT_PAGE_IDS: Record<string, string> = {
  "daljjanheun-haru": "ee9e574e-4279-83c8-abcf-01c7a4d0dccd",
  "photogray-shyungshyung": "32be574e-4279-80a8-a59e-d04cd8a587d8",
  "die-buehne": "d1be574e-4279-8272-8f2f-81d965f9ffc6",
  "adt": "332e574e-4279-80bf-ae19-ed03abf00e84",
  "woori-sigak": "381e574e-4279-8021-b8f7-f7523c6532f6",
};

const EXPERIENCE_PAGE_IDS: Record<string, string> = {
  "exchange-vienna": "196e574e-4279-83a6-b614-012bcc403e5f",
  "kosac-2025": "332e574e-4279-8096-af47-d112411d85b6",
};

const GATEWAY = "https://connector-gateway.lovable.dev/notion/v1";

type NotionFile = { url: string };
type NotionImageObj = { type: "file" | "external"; file?: NotionFile; external?: NotionFile };
type NotionBlock = {
  id: string;
  type: string;
  has_children?: boolean;
  image?: NotionImageObj;
  file?: NotionImageObj;
  [key: string]: unknown;
};

function extractUrl(obj: NotionImageObj | undefined): string | null {
  if (!obj) return null;
  if (obj.type === "external") return obj.external?.url ?? null;
  if (obj.type === "file") return obj.file?.url ?? null;
  return null;
}

async function notionFetch(path: string, init?: RequestInit): Promise<unknown> {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const notionKey = process.env.NOTION_API_KEY;
  if (!lovableKey || !notionKey) {
    throw new Error("Notion gateway credentials are not configured");
  }
  const res = await fetch(`${GATEWAY}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": notionKey,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  if (!res.ok) {
    throw new Error(`Notion API ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

async function collectImagesFromBlocks(pageId: string, depth = 0): Promise<string[]> {
  if (depth > 2) return [];
  const data = (await notionFetch(`/blocks/${pageId}/children?page_size=100`)) as {
    results?: NotionBlock[];
  };
  const urls: string[] = [];
  for (const block of data.results ?? []) {
    if (block.type === "image") {
      const url = extractUrl(block.image);
      if (url) urls.push(url);
    } else if (block.type === "file" && block.file) {
      // Skip non-image file attachments unless extension looks visual.
      const url = extractUrl(block.file);
      if (url && /\.(png|jpe?g|gif|webp|avif|heic)(\?|$)/i.test(url)) urls.push(url);
    } else if (block.has_children) {
      try {
        const nested = await collectImagesFromBlocks(block.id, depth + 1);
        urls.push(...nested);
      } catch {
        // ignore nested fetch errors
      }
    }
  }
  return urls;
}

async function fetchPageImages(pageId: string): Promise<string[]> {
  const urls: string[] = [];
  // 1) page cover (if any)
  try {
    const page = (await notionFetch(`/pages/${pageId}`)) as {
      cover?: NotionImageObj | null;
    };
    const coverUrl = extractUrl(page.cover ?? undefined);
    if (coverUrl) urls.push(coverUrl);
  } catch {
    // ignore — try blocks anyway
  }
  // 2) image blocks (and one level of nesting)
  try {
    urls.push(...(await collectImagesFromBlocks(pageId)));
  } catch {
    // ignore
  }
  // de-dupe preserving order. Notion S3 signed URLs include changing query
  // params (X-Amz-*), so we key by pathname + filename only.
  const seen = new Set<string>();
  const out: string[] = [];
  for (const u of urls) {
    let key = u;
    try {
      const parsed = new URL(u);
      key = parsed.origin + parsed.pathname;
    } catch {
      // keep raw url as key
    }
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(u);
  }
  return out;
}

export const getNotionImages = createServerFn({ method: "GET" })
  .inputValidator((input: { kind: "project" | "experience"; slug: string }) => input)
  .handler(async ({ data }) => {
    const map = data.kind === "project" ? PROJECT_PAGE_IDS : EXPERIENCE_PAGE_IDS;
    const pageId = map[data.slug];
    if (!pageId) return { images: [] as string[] };
    try {
      const images = await fetchPageImages(pageId);
      return { images };
    } catch (err) {
      console.error("[getNotionImages] failed:", err);
      return { images: [] as string[] };
    }
  });

export function notionImagesQueryOptions(kind: "project" | "experience", slug: string) {
  return {
    queryKey: ["notion-images", kind, slug] as const,
    queryFn: () => getNotionImages({ data: { kind, slug } }),
    staleTime: 30 * 60 * 1000, // S3 signed URLs are valid ~1h; refresh comfortably before expiry
    gcTime: 60 * 60 * 1000,
  };
}
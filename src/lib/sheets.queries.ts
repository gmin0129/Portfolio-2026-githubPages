import type { SheetDetail } from "./sheets.functions";
import { getProjectSheetDetail, getExperienceSheetDetail } from "./sheets.functions";

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

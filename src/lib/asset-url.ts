/**
 * Lovable CDN asset URL helper.
 * Some browsers/extensions block the legacy *.lovableproject.com preview
 * domain (ERR_BLOCKED_BY_CLIENT). Asset files are immutable and served from
 * any Lovable domain, so when the app runs on lovableproject.com we rewrite
 * the URL to the stable lovable.app preview origin.
 */
const FALLBACK_ORIGIN =
  "https://id-preview--7af69fa8-433e-470d-990e-c12e96027377.lovable.app";

export function assetUrl(url: string): string {
  if (!url.startsWith("/")) return url;
  if (url.startsWith("/__l5e/")) return `${FALLBACK_ORIGIN}${url}`;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${url}`;
}

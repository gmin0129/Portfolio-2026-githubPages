/**
 * Common asset URL helper.
 *
 * - Repository assets live under `public/assets/...` and are referenced as
 *   `/assets/...`. When the site is deployed under a sub-path (GitHub Pages
 *   project sites), Vite's BASE_URL must be prefixed.
 * - Some browsers/extensions block the legacy *.lovableproject.com preview
 *   domain (ERR_BLOCKED_BY_CLIENT). Lovable CDN asset files are immutable and
 *   served from any Lovable domain, so when the app runs on lovableproject.com
 *   we rewrite those URLs to the stable lovable.app preview origin.
 */
const FALLBACK_ORIGIN =
  "https://id-preview--7af69fa8-433e-470d-990e-c12e96027377.lovable.app";

const BASE = (import.meta.env?.BASE_URL ?? "/").replace(/\/$/, "");

export function assetUrl(url: string): string {
  if (!url || !url.startsWith("/")) return url;

  if (url.startsWith("/__l5e/")) {
    if (typeof window !== "undefined" && window.location.hostname.endsWith("lovableproject.com")) {
      return `${FALLBACK_ORIGIN}${url}`;
    }
    return url;
  }

  if (BASE && !url.startsWith(`${BASE}/`)) return `${BASE}${url}`;
  return url;
}

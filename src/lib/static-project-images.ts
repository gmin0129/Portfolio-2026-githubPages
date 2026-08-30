/**
 * Static local copies of the Notion-hosted gallery images, so the portfolio
 * keeps working when deployed as a fully static site (e.g. GitHub Pages)
 * where the Notion server function is unavailable and signed S3 URLs expire.
 * The live site still prefers fresh Notion images when the fetch succeeds.
 */
export const STATIC_PROJECT_IMAGES: Record<string, string[]> = {
  "daljjanheun-haru": [
    "/assets/notion/daljjanheun-haru-0.png",
    "/assets/notion/daljjanheun-haru-1.png",
    "/assets/notion/daljjanheun-haru-2.png",
    "/assets/notion/daljjanheun-haru-3.png",
    "/assets/notion/daljjanheun-haru-4.jpg",
    "/assets/notion/daljjanheun-haru-5.jpg",
    "/assets/notion/daljjanheun-haru-6.jpg",
    "/assets/notion/daljjanheun-haru-7.png",
  ],
  // Matches the live reorder: first Notion image moved to the end.
  "photogray-shyungshyung": [
    "/assets/notion/photogray-shyungshyung-1.jpg",
    "/assets/notion/photogray-shyungshyung-2.png",
    "/assets/notion/photogray-shyungshyung-0.png",
  ],
  "die-buehne": [
    "/assets/notion/die-buehne-0.jpg",
    "/assets/notion/die-buehne-1.png",
    "/assets/notion/die-buehne-2.png",
    "/assets/notion/die-buehne-3.png",
    "/assets/notion/die-buehne-4.png",
    "/assets/notion/die-buehne-5.png",
  ],
  "adt": [
    "/assets/notion/adt-0.jpg",
    "/assets/notion/adt-1.png",
    "/assets/notion/adt-2.png",
    "/assets/notion/adt-3.png",
    "/assets/notion/adt-4.png",
    "/assets/notion/adt-5.png",
    "/assets/notion/adt-6.png",
    "/assets/notion/adt-7.png",
    "/assets/notion/adt-8.png",
  ],
};

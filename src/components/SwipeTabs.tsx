import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  title: string;
  images?: string[];
  children: ReactNode; // text content (page 1)
  loading?: boolean;
};

/**
 * Inline two-page horizontal swiper. Page 1 = children (text content),
 * page 2 = a photo grid built from `images`. Toggle via the pill tabs
 * at the top, by swiping horizontally, or with the arrow keys.
 */
export function SwipeTabs({ title, images, children, loading = false }: Props) {
  const [page, setPage] = useState<0 | 1>(0);
  const [dragX, setDragX] = useState(0);
  const widthRef = useRef(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const tracking = useRef(false);

  useEffect(() => {
    const update = () => {
      widthRef.current = trackRef.current?.clientWidth ?? 0;
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setPage(1);
      if (e.key === "ArrowLeft") setPage(0);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    tracking.current = false;
    setDragX(0);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current == null || startY.current == null) return;
    const dx = e.touches[0].clientX - startX.current;
    const dy = e.touches[0].clientY - startY.current;
    if (!tracking.current) {
      if (Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy)) {
        tracking.current = true;
      } else if (Math.abs(dy) > 12) {
        startX.current = null;
        return;
      } else {
        return;
      }
    }
    const clamped = page === 0 ? Math.min(0, dx) : Math.max(0, dx);
    setDragX(clamped);
  };
  const onTouchEnd = () => {
    if (startX.current == null) {
      setDragX(0);
      return;
    }
    const threshold = Math.min(120, Math.max(60, widthRef.current * 0.15));
    if (page === 0 && dragX < -threshold) setPage(1);
    else if (page === 1 && dragX > threshold) setPage(0);
    startX.current = null;
    startY.current = null;
    tracking.current = false;
    setDragX(0);
  };

  const w = widthRef.current || 1;
  const basePct = page === 0 ? 0 : -50;
  const dragPct = (dragX / w) * 50; // each page = 50% of track width
  const trackStyle: React.CSSProperties = {
    transform: `translateX(${basePct + dragPct}%)`,
    transition: dragX === 0 ? "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
  };

  return (
    <div className="w-full">
      {/* Pill tabs with sliding indicator */}
      <div className="sticky top-[calc(4rem+0px)] z-30 bg-transparent pointer-events-none">
        <div className="mx-auto max-w-5xl px-6 pt-6 pb-2 flex justify-center md:justify-start pointer-events-auto">
          <div
            className="relative inline-flex items-center rounded-full p-1.5 text-sm bg-background/90 backdrop-blur-xl clay-sm"
          >
            <span
              aria-hidden
              className="absolute top-1.5 bottom-1.5 left-1.5 rounded-full tile-1 animate-hue transition-transform duration-400 ease-out"
              style={{
                width: "calc(50% - 0.375rem)",
                transform: `translateX(${page === 0 ? "0%" : "100%"})`,
                boxShadow: "inset 1px 1px 3px oklch(1 0 0 / 0.6), 0 4px 14px -4px oklch(0.3 0.05 40 / 0.35)",
              }}
            />
            <button
              type="button"
              onClick={() => setPage(0)}
              className={`relative z-10 px-6 py-2 rounded-full font-medium transition-colors ${
                page === 0 ? "text-foreground" : "text-[var(--ink-soft)] hover:text-foreground"
              }`}
            >
              ✦ 내용
            </button>
            <button
              type="button"
              onClick={() => setPage(1)}
              className={`relative z-10 px-6 py-2 rounded-full font-medium transition-colors ${
                page === 1 ? "text-foreground" : "text-[var(--ink-soft)] hover:text-foreground"
              }`}
            >
              사진 →
            </button>
          </div>
        </div>
      </div>

      {/* Swipable track */}
      <div
        ref={trackRef}
        className="relative overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex w-[200%] will-change-transform" style={trackStyle}>
          <div className="w-1/2 shrink-0">{children}</div>
          <div className="w-1/2 shrink-0">
            <section className="mx-auto max-w-5xl px-6 py-16">
              <h2 className="font-serif text-2xl mb-6">{title} · Photos</h2>
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-busy="true" aria-label="사진 불러오는 중">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] rounded-md border border-border bg-muted overflow-hidden relative"
                    >
                      <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,transparent_30%,oklch(1_0_0/0.35)_50%,transparent_70%)]" />
                    </div>
                  ))}
                </div>
              ) : images && images.length > 0 ? (
                <PhotoGallery title={title} images={images} />
              ) : (
                <div>
                  <p className="text-sm text-[var(--ink-soft)] mb-6">
                    아직 등록된 사진이 없습니다. 연동된 Notion 페이지에 이미지를 추가하면 자동으로 표시됩니다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`aspect-[4/3] rounded-md tile-${(i % 6) + 1} clay-sm grain opacity-80 flex items-center justify-center text-foreground/70 text-xs uppercase tracking-widest`}
                      >
                        사진 슬롯 {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoGallery({ title, images }: { title: string; images: string[] }) {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const visible = images.filter((_, i) => !failed[i]);
  if (visible.length === 0) return null;

  return (
    <div className="space-y-6">
      {/* Carousel: horizontal snap scroller */}
      <div className="relative">
        <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-6 px-6 scroll-smooth"
          style={{ scrollbarWidth: "thin" }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const idx = Math.round(el.scrollLeft / (el.clientWidth * 0.85));
            setActive(Math.min(Math.max(idx, 0), images.length - 1));
          }}
        >
          {images.map((src, i) => (
            <figure
              key={src + i}
              className="snap-center shrink-0 w-[85%] md:w-[70%] aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted clay-sm"
            >
              <img
                src={src}
                alt={`${title} 사진 ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => setFailed((p) => ({ ...p, [i]: true }))}
              />
            </figure>
          ))}
        </div>
        {images.length > 1 && (
          <div className="mt-2 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-[var(--terracotta)]" : "w-1.5 bg-[var(--ink-soft)]/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Grid: full set */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((src, i) =>
          failed[i] ? null : (
            <figure
              key={"g" + src + i}
              className="aspect-square overflow-hidden rounded-md border border-border bg-muted"
            >
              <img
                src={src}
                alt={`${title} 썸네일 ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={() => setFailed((p) => ({ ...p, [i]: true }))}
              />
            </figure>
          ),
        )}
      </div>
    </div>
  );
}
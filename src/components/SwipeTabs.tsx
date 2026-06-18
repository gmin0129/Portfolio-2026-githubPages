import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  title: string;
  images?: string[];
  children: ReactNode; // text content (page 1)
};

/**
 * Inline two-page horizontal swiper. Page 1 = children (text content),
 * page 2 = a photo grid built from `images`. Toggle via the pill tabs
 * at the top, by swiping horizontally, or with the arrow keys.
 */
export function SwipeTabs({ title, images, children }: Props) {
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
      <div className="mx-auto max-w-5xl px-6 pt-8">
        <div className="relative inline-flex items-center rounded-full border border-border bg-background/60 backdrop-blur-md p-1 text-sm">
          <span
            aria-hidden
            className="absolute top-1 bottom-1 w-1/2 rounded-full bg-foreground transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${page === 0 ? "0%" : "100%"})` }}
          />
          <button
            type="button"
            onClick={() => setPage(0)}
            className={`relative z-10 px-5 py-2 rounded-full transition-colors ${
              page === 0 ? "text-background" : "text-[var(--ink-soft)] hover:text-foreground"
            }`}
          >
            내용
          </button>
          <button
            type="button"
            onClick={() => setPage(1)}
            className={`relative z-10 px-5 py-2 rounded-full transition-colors ${
              page === 1 ? "text-background" : "text-[var(--ink-soft)] hover:text-foreground"
            }`}
          >
            사진 →
          </button>
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
              {images && images.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {images.map((src, i) => (
                    <figure key={src + i} className="overflow-hidden rounded-md border border-border bg-muted">
                      <img
                        src={src}
                        alt={`${title} 사진 ${i + 1}`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </figure>
                  ))}
                </div>
              ) : (
                <div>
                  <p className="text-sm text-[var(--ink-soft)] mb-6">
                    아직 등록된 사진이 없습니다. 데이터의 <code className="font-mono">images</code> 배열에 이미지 URL을 추가하면 여기에 표시됩니다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="aspect-[4/3] rounded-md border border-dashed border-border flex items-center justify-center text-[var(--ink-soft)] text-sm"
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
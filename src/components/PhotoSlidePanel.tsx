import { useEffect, useRef, useState, type ReactNode } from "react";
import { assetUrl } from "@/lib/asset-url";

type Props = {
  title: string;
  images?: string[];
  children: ReactNode;
};

/**
 * Wraps a detail page without altering its layout, and adds a horizontally
 * sliding photo panel that opens with a left swipe (or via the floating button)
 * and closes with a right swipe (or via the close button / Esc).
 */
export function PhotoSlidePanel({ title, images, children }: Props) {
  const [open, setOpen] = useState(false);
  const [dragX, setDragX] = useState(0);
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const tracking = useRef(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight" && !open) setOpen(true);
      if (e.key === "ArrowLeft" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
    // when closed: only allow leftward drag (negative dx -> opening)
    // when open: only allow rightward drag (positive dx -> closing)
    const clamped = open ? Math.max(0, dx) : Math.min(0, dx);
    setDragX(clamped);
  };
  const onTouchEnd = () => {
    if (startX.current == null) {
      setDragX(0);
      return;
    }
    const threshold = 80;
    if (!open && dragX < -threshold) setOpen(true);
    else if (open && dragX > threshold) setOpen(false);
    startX.current = null;
    startY.current = null;
    tracking.current = false;
    setDragX(0);
  };

  // Panel translate: when open -> 0; closed -> 100%. Add drag offset in px.
  const baseTranslate = open ? "0%" : "100%";
  const panelStyle = {
    transform: `translateX(calc(${baseTranslate} + ${dragX}px))`,
    transition: dragX === 0 ? "transform 300ms ease-out" : "none",
  } as React.CSSProperties;

  return (
    <div
      className="relative"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {children}

      {/* Floating toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-[60] rounded-full bg-foreground text-background px-4 py-2 text-xs shadow-lg hover:opacity-90 transition-opacity"
        aria-label={open ? "상세 보기로 돌아가기" : "사진 보기"}
      >
        {open ? "← 상세 보기" : "사진 보기 →"}
      </button>

      {/* Backdrop (only when open) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* Sliding photo panel */}
      <aside
        className="fixed inset-y-0 right-0 z-50 w-full md:w-[80%] lg:w-[70%] bg-background border-l border-border overflow-y-auto will-change-transform"
        style={panelStyle}
        aria-hidden={!open}
      >
        <div className="sticky top-0 z-10 backdrop-blur-md bg-[oklch(0.975_0.012_80/0.85)] border-b border-border">
          <div className="px-6 h-16 flex items-center justify-between">
            <div className="font-serif text-lg truncate">{title} · Photos</div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-sm text-[var(--ink-soft)] hover:text-[var(--terracotta)]"
            >
              닫기 ×
            </button>
          </div>
        </div>

        <div className="px-6 py-10">
          {images && images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {images.map((src, i) => (
                <figure key={src + i} className="overflow-hidden rounded-md border border-border bg-muted">
                  <img
                    src={assetUrl(src)}
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
        </div>
      </aside>
    </div>
  );
}
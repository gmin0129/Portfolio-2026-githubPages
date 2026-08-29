import type { SheetField } from "@/lib/sheets.functions";

/** Splits a sheet cell into list items, stripping any leading hyphen/bullet marks. */
export function toItems(value: string): string[] {
  return value
    .split("\n")
    .map((line) => line.replace(/^[\s\-–—•*]+/, "").trim())
    .filter(Boolean);
}

export function Bullet({ marker }: { marker: "arrow" | "diamond" }) {
  if (marker === "diamond") {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="currentColor"
        className="shrink-0 mt-[0.35em] text-[var(--terracotta)]"
        aria-hidden="true"
      >
        <path d="M6 0.5L11.5 6L6 11.5L0.5 6L6 0.5Z" />
      </svg>
    );
  }
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-[0.35em] text-[var(--terracotta)]"
      aria-hidden="true"
    >
      <path d="M2.5 7H11.5" />
      <path d="M7.5 3.5L11.5 7L7.5 10.5" />
    </svg>
  );
}

export function SheetRow({
  title,
  fields,
  layout,
  marker,
}: {
  title: string;
  fields: SheetField[];
  layout: "four" | "two" | "columns" | "background" | "rows";
  marker: "arrow" | "diamond";
}) {
  if (!fields.length) return null;

  // background: 2 columns (left: 기간/과제, right: 적용지식/이론 + 적용기술), each field stacks vertically
  if (layout === "background") {
    return (
      <div className="text-left break-keep border-b border-border pb-12 last:border-b-0 last:pb-0">
        <h2 className="font-serif text-2xl mb-12">
          <span className="text-[var(--terracotta)]">&lt;</span>
          {title}
          <span className="text-[var(--terracotta)]">&gt;</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fields.map((f) => (
            <div key={f.label} className="border-l-2 border-border pl-4">
              <div className="text-[0.95rem] font-bold text-[var(--terracotta)]">
                {f.label}
              </div>
              <ul className="mt-2 space-y-2 text-[var(--ink-soft)] leading-relaxed text-[0.95rem]">
                {toItems(f.value).map((item, i) => (
                  <li key={`${f.label}-${i}`} className="flex items-start gap-3">
                    <Bullet marker={marker} />
                    <span className="whitespace-pre-line">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // rows: stack each field as a full-width row, one after another
  if (layout === "rows") {
    return (
      <div className="text-left break-keep border-b border-border pb-12 last:border-b-0 last:pb-0">
        <h2 className="font-serif text-2xl mb-12">
          <span className="text-[var(--terracotta)]">&lt;</span>
          {title}
          <span className="text-[var(--terracotta)]">&gt;</span>
        </h2>
        <div className="space-y-8">
          {fields.map((f) => (
            <div key={f.label} className="border-l-2 border-border pl-4">
              <div className="text-[0.95rem] font-bold text-[var(--terracotta)]">
                {f.label}
              </div>
              <ul className="mt-2 space-y-2 text-[var(--ink-soft)] leading-relaxed text-[0.95rem]">
                {toItems(f.value).map((item, i) => (
                  <li key={`${f.label}-${i}`} className="flex items-start gap-3">
                    <Bullet marker={marker} />
                    <span className="whitespace-pre-line">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const gridClass =
    layout === "four"
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      : "grid grid-cols-1 md:grid-cols-2 gap-8";

  return (
    <div className="text-left break-keep border-b border-border pb-12 last:border-b-0 last:pb-0">
      <h2 className="font-serif text-2xl mb-12">
        <span className="text-[var(--terracotta)]">&lt;</span>
        {title}
        <span className="text-[var(--terracotta)]">&gt;</span>
      </h2>
      {layout === "columns" ? (
        <div className="space-y-6">
          {fields.map((f) => (
            <div key={f.label}>
              <div className="text-[0.95rem] font-bold text-[var(--terracotta)] mb-3">
                {f.label}
              </div>
              <ul className="text-[var(--ink-soft)] leading-relaxed text-[0.95rem] md:columns-2 md:gap-8">
                {toItems(f.value).map((item, i) => (
                  <li
                    key={`${f.label}-${i}`}
                    className="flex items-start gap-3 [break-inside:avoid] mb-4"
                  >
                    <Bullet marker={marker} />
                    <span className="whitespace-pre-line">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className={gridClass}>
          {fields.map((f) => (
            <div key={f.label} className="border-l-2 border-border pl-4">
              <div className="text-[0.95rem] font-bold text-[var(--terracotta)]">
                {f.label}
              </div>
              <ul className="mt-2 space-y-2 text-[var(--ink-soft)] leading-relaxed text-[0.95rem]">
                {toItems(f.value).map((item, i) => (
                  <li key={`${f.label}-${i}`} className="flex items-start gap-3">
                    <Bullet marker={marker} />
                    <span className="whitespace-pre-line">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

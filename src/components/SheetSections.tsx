import type { SheetField } from "@/lib/sheets.functions";

export type RichSegment = { text: string; bold: boolean };
export type RichItem = { text: string; segs: RichSegment[] };

/**
 * Splits a sheet cell into list items, stripping any leading hyphen/bullet
 * marks, and maps the cell's bold format runs onto each item.
 */
export function toRichItems(field: SheetField): RichItem[] {
  const { value, runs } = field;
  const boldMap = new Array<boolean>(value.length).fill(false);
  if (runs) {
    for (let i = 0; i < runs.length; i++) {
      if (!runs[i].format?.bold) continue;
      const start = runs[i].startIndex ?? 0;
      const next = i + 1 < runs.length ? (runs[i + 1].startIndex ?? value.length) : value.length;
      for (let j = start; j < next && j < value.length; j++) boldMap[j] = true;
    }
  }

  const items: RichItem[] = [];
  let offset = 0;
  for (const rawLine of value.split("\n")) {
    const line = rawLine.replace(/^[\s\-–—•*]+/, "");
    const start = offset + (rawLine.length - line.length);
    const text = line.trim();
    offset += rawLine.length + 1;
    if (!text) continue;

    const segs: RichSegment[] = [];
    for (let i = 0; i < text.length; i++) {
      const bold = boldMap[start + i] ?? false;
      const last = segs[segs.length - 1];
      if (last && last.bold === bold) last.text += text[i];
      else segs.push({ text: text[i], bold });
    }
    items.push({ text, segs });
  }
  return items;
}

function ItemText({ item }: { item: RichItem }) {
  if (!item.segs.some((s) => s.bold)) {
    return <span className="whitespace-pre-line">{item.text}</span>;
  }
  return (
    <span className="whitespace-pre-line">
      {item.segs.map((s, i) =>
        s.bold ? (
          <strong key={i} className="font-bold text-[var(--ink)]">
            {s.text}
          </strong>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </span>
  );
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
  hideBulletsFor,
}: {
  title: string;
  fields: SheetField[];
  layout: "four" | "two" | "columns" | "background" | "rows";
  marker: "arrow" | "diamond";
  hideBulletsFor?: string[];
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
                {toRichItems(f).map((item, i) => (
                  <li key={`${f.label}-${i}`} className="flex items-start gap-3">
                    {!hideBulletsFor?.includes(item.text) && <Bullet marker={marker} />}
                    <ItemText item={item} />
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
                {toRichItems(f).map((item, i) => (
                  <li key={`${f.label}-${i}`} className="flex items-start gap-3">
                    {!hideBulletsFor?.includes(item.text) && <Bullet marker={marker} />}
                    <ItemText item={item} />
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
                {toRichItems(f).map((item, i) => (
                  <li
                    key={`${f.label}-${i}`}
                    className="flex items-start gap-3 [break-inside:avoid] mb-4"
                  >
                    {!hideBulletsFor?.includes(item.text) && <Bullet marker={marker} />}
                    <ItemText item={item} />
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
                {toRichItems(f).map((item, i) => (
                  <li key={`${f.label}-${i}`} className="flex items-start gap-3">
                    {!hideBulletsFor?.includes(item.text) && <Bullet marker={marker} />}
                    <ItemText item={item} />
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

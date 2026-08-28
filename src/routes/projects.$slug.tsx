import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { HTMLAttributes } from "react";
import { getProject, PROJECTS, type Project } from "@/lib/projects";
import { SwipeTabs } from "@/components/SwipeTabs";
import { useQuery } from "@tanstack/react-query";
import { notionPageQueryOptions } from "@/lib/notion-images.functions";
import { projectSheetQueryOptions, type SheetField } from "@/lib/sheets.functions";
import { ExternalLink } from "lucide-react";


export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.title ?? "Project"} — 윤지민 Portfolio` },
      { name: "description", content: loaderData?.project.overview ?? "프로젝트 상세" },
    ],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="font-serif italic text-[var(--terracotta)]">404</p>
      <h1 className="font-serif text-3xl mt-2">프로젝트를 찾을 수 없어요</h1>
      <Link to="/" hash="projects" className="inline-block mt-6 underline">
        ← Projects로 돌아가기
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-serif text-3xl">문제가 발생했습니다</h1>
      <button onClick={reset} className="mt-6 underline">다시 시도</button>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const { data, isLoading } = useQuery(notionPageQueryOptions("project", project.slug));
  const { data: sheetRaw } = useQuery(projectSheetQueryOptions(project.slug));
  const sheet = sheetRaw ?? sampleSheet;
  const images = data?.images?.length ? data.images : project.images;
  const overview = data?.summary?.trim() ? data.summary : project.overview;
  const role = data?.highlights?.length ? data.highlights : project.role;

  const hasSheet =
    !!sheet &&
    (sheet.background.fields.length > 0 ||
      sheet.process.fields.length > 0 ||
      sheet.outcome.fields.length > 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[oklch(0.975_0.012_80/0.78)] border-b border-border">
        <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-serif text-lg font-bold tracking-tight">
            윤지민<span className="text-[var(--terracotta)]">.</span>
          </Link>
          <Link to="/" hash="projects" className="text-sm text-[var(--ink-soft)] hover:text-[var(--terracotta)]">
            ← All projects
          </Link>
        </div>
      </header>

      <main className="w-full mx-auto max-w-[1440px] px-6 pt-4 flex flex-col md:flex-row gap-12">
        <TitleCard project={project} idx={idx} className="w-full md:w-[30%] md:sticky md:top-16 h-fit shrink-0" />

        <div className="w-full flex-1 min-w-0">
          <SwipeTabs title={project.title} images={images} loading={isLoading}>
            {hasSheet ? (
              <section className="w-full px-6 py-16 space-y-12">
                <SheetRow title={sheet!.background.title} fields={sheet!.background.fields} layout="four" marker="arrow" />
                <SheetRow title={sheet!.process.title} fields={sheet!.process.fields} layout="two" marker="arrow" />
                <SheetRow title={sheet!.outcome.title} fields={sheet!.outcome.fields} layout="columns" marker="diamond" />
              </section>
            ) : (
              <section className="px-6 py-16 grid md:grid-cols-3 gap-12">
                <aside className="space-y-6 text-sm">
                  <Meta k="기간" v={project.period} />
                  <Meta k="기여" v={project.contribution} />
                  <Meta k="Skills" v={project.skills} />
                </aside>
                <div className="md:col-span-2 space-y-12">
                  {overview && (
                    <div>
                      <h2 className="font-serif text-2xl mb-3">Overview</h2>
                      <p className="text-[var(--ink-soft)] leading-relaxed">{overview}</p>
                    </div>
                  )}
                  {role && role.length > 0 && (
                    <div>
                      <h2 className="font-serif text-2xl mb-3">My Role</h2>
                      <ul className="space-y-2 text-[var(--ink-soft)]">
                        {role.map((r) => (
                          <li key={r} className="flex gap-3">
                            <span className="text-[var(--terracotta)]">→</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.outcome && project.outcome.length > 0 && (
                    <div>
                      <h2 className="font-serif text-2xl mb-3">Outcome</h2>
                      <ul className="space-y-2 text-[var(--ink-soft)]">
                        {project.outcome.map((o) => (
                          <li key={o} className="flex gap-3">
                            <span className="text-[var(--terracotta)]">✦</span>
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}
          </SwipeTabs>
        </div>
      </main>

      <nav className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-10 flex items-center justify-between gap-6">
          <Link
            to="/projects/$slug"
            params={{ slug: prev.slug }}
            className="group text-left"
          >
            <div className="text-xs uppercase tracking-widest text-[var(--ink-soft)]">← Prev</div>
            <div className="font-serif text-lg group-hover:text-[var(--terracotta)] transition-colors">
              {prev.title}
            </div>
          </Link>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group text-right"
          >
            <div className="text-xs uppercase tracking-widest text-[var(--ink-soft)]">Next →</div>
            <div className="font-serif text-lg group-hover:text-[var(--terracotta)] transition-colors">
              {next.title}
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

function SheetRow({
  title,
  fields,
  layout,
  marker,
}: {
  title: string;
  fields: SheetField[];
  layout: "four" | "two" | "columns";
  marker: "arrow" | "diamond";
}) {
  if (!fields.length) return null;
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

function toItems(value: string): string[] {
  return value
    .split("\n")
    .map((line) => line.replace(/^[\s\-–—•]+/, "").trim())
    .filter(Boolean);
}

function Bullet({ marker }: { marker: "arrow" | "diamond" }) {
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


function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-b border-border pb-3">
      <div className="uppercase tracking-widest text-xs text-[var(--ink-soft)]">{k}</div>
      <div className="mt-1 text-foreground">{v}</div>
    </div>
  );
}

function TitleCard({ project, idx, className, ...props }: { project: Project; idx: number } & HTMLAttributes<HTMLElement>) {
  return (
    <section {...props} className={`${className ?? ""}`}>
      <div className={`relative ${TILES[idx % TILES.length]} shape-squircle px-6 md:px-10 py-7 md:py-9 clay overflow-hidden animate-galaxy-pulse shadow-lg`}>
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
        <div className="relative flex flex-col items-start break-keep text-left">
          <div className="font-serif italic text-foreground/75 text-sm tracking-widest uppercase">
            Project · {String(idx + 1).padStart(2, "0")}
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold mt-2 leading-[1.1] text-foreground drop-shadow-[1px_1px_0_oklch(1_0_0/0.55)]">
            {project.linkUrl ? (
              <a
                href={project.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                {project.title}
                <ExternalLink
                  className="w-5 h-5 md:w-7 md:h-7 opacity-70"
                  aria-hidden="true"
                />
              </a>
            ) : (
              project.title
            )}
          </h1>
          <p className="mt-2 text-foreground/80 text-base md:text-lg">{project.sub}</p>
          <div className="mt-4 flex flex-col items-start gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs rounded-full px-3 py-1 text-foreground bg-background/75 backdrop-blur clay-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const sampleSheet: { background: { title: string; fields: SheetField[] }; process: { title: string; fields: SheetField[] }; outcome: { title: string; fields: SheetField[] } } = {
  background: {
    title: "프로젝트 배경",
    fields: [
      { label: "기간", value: "2025.08.04 — 2025.09.26" },
      { label: "과제", value: "- 다양한 관객층을 고려한 전시 기획\n- 데이터 기반 관객 분석" },
      { label: "적용 지식/이론", value: "- 문화 콘텐츠 기획 이론\n- 전시 디자인 원리" },
      { label: "적용 기술", value: "- Notion, Excel\n- 슬라이드 제작" },
    ],
  },
  process: {
    title: "진행과정",
    fields: [
      { label: "나의 역할/업무내용", value: "- 전시 기획 및 운영\n- 작가 매니징, 데이터 아카이빙\n- 프로모션 홍보 매체 및 배포" },
      { label: "지식 및 기술 적용한 부분", value: "- 매력적인 전시 포스터 부스 이미지 무언드라 실시\n- 대학교 마스코트 캐릭터를 활용해 관객과의 저격적 메시지 전달\n- 대학교 공식 SNS, 교내 홍보물 부스 등 설계 홍보물안 설치 및 관리" },
    ],
  },
  outcome: {
    title: "성과 및 인사이트",
    fields: [
      { label: "최종 결과물 내용 (모양)", value: "- 브랜드/상품 : 포토그레이(PHOTOGRAY) / 숭실대 교내 스토어\n- 8일간 안정적인 전시 운영과 관람객 만족도 확보\n- 전시 관련 데이터를 정리해 다음 전시 기획의 기초 자료로 활용" },
    ],
  },
};

const TILES = ["tile-1", "tile-2", "tile-3", "tile-4", "tile-5", "tile-6"];
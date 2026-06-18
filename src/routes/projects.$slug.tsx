import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, PROJECTS, type Project } from "@/lib/projects";
import { SwipeTabs } from "@/components/SwipeTabs";

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

      {/* Fixed project title — painterly ceramic tile banner */}
      <section className="sticky top-16 z-40">
        <div className="mx-auto max-w-5xl px-4 md:px-6 pt-4">
          <div className={`relative ${TILES[idx % TILES.length]} shape-squircle px-6 md:px-10 py-7 md:py-9 clay overflow-hidden`}>
            <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
            <div className="relative">
              <div className="font-serif italic text-foreground/75 text-sm tracking-widest uppercase">
                Project · {String(idx + 1).padStart(2, "0")}
              </div>
              <h1 className="font-serif text-3xl md:text-5xl font-semibold mt-2 leading-[1.1] text-foreground drop-shadow-[1px_1px_0_oklch(1_0_0/0.55)]">
                {project.title}
              </h1>
              <p className="mt-2 text-foreground/80 text-base md:text-lg">{project.sub}</p>
              <div className="mt-4 flex flex-wrap gap-2">
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
        </div>
      </section>

      <SwipeTabs title={project.title} images={project.images}>
      <section className="mx-auto max-w-5xl px-6 py-16 grid md:grid-cols-3 gap-12">
        <aside className="space-y-6 text-sm">
          <Meta k="기간" v={project.period} />
          <Meta k="기여" v={project.contribution} />
          <Meta k="Skills" v={project.skills} />
        </aside>
        <div className="md:col-span-2 space-y-12">
          {project.overview && (
            <div>
              <h2 className="font-serif text-2xl mb-3">Overview</h2>
              <p className="text-[var(--ink-soft)] leading-relaxed">{project.overview}</p>
            </div>
          )}
          {project.role && project.role.length > 0 && (
            <div>
              <h2 className="font-serif text-2xl mb-3">My Role</h2>
              <ul className="space-y-2 text-[var(--ink-soft)]">
                {project.role.map((r) => (
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
      </SwipeTabs>

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

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-b border-border pb-3">
      <div className="uppercase tracking-widest text-xs text-[var(--ink-soft)]">{k}</div>
      <div className="mt-1 text-foreground">{v}</div>
    </div>
  );
}

const TILES = ["tile-1", "tile-2", "tile-3", "tile-4", "tile-5", "tile-6"];
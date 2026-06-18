import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getExperience, EXPERIENCES, type Experience } from "@/lib/experiences";

export const Route = createFileRoute("/experiences/$slug")({
  loader: ({ params }) => {
    const experience = getExperience(params.slug);
    if (!experience) throw notFound();
    return { experience };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.experience.title ?? "Experience"} — 윤지민 Portfolio` },
      { name: "description", content: loaderData?.experience.overview ?? loaderData?.experience.blurb ?? "경험 상세" },
    ],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="font-serif italic text-[var(--terracotta)]">404</p>
      <h1 className="font-serif text-3xl mt-2">경험을 찾을 수 없어요</h1>
      <Link to="/" hash="experience" className="inline-block mt-6 underline">
        ← Experience로 돌아가기
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-serif text-3xl">문제가 발생했습니다</h1>
      <button onClick={reset} className="mt-6 underline">다시 시도</button>
    </div>
  ),
  component: ExperienceDetail,
});

function ExperienceDetail() {
  const { experience } = Route.useLoaderData() as { experience: Experience };
  const idx = EXPERIENCES.findIndex((e) => e.slug === experience.slug);
  const prev = EXPERIENCES[(idx - 1 + EXPERIENCES.length) % EXPERIENCES.length];
  const next = EXPERIENCES[(idx + 1) % EXPERIENCES.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[oklch(0.975_0.012_80/0.78)] border-b border-border">
        <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-serif text-lg font-bold tracking-tight">
            윤지민<span className="text-[var(--terracotta)]">.</span>
          </Link>
          <Link to="/" hash="experience" className="text-sm text-[var(--ink-soft)] hover:text-[var(--terracotta)]">
            ← All experiences
          </Link>
        </div>
      </header>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="font-serif italic text-[var(--ochre)] text-sm tracking-widest uppercase">
            Experience · {String(idx + 1).padStart(2, "0")}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-medium mt-4 leading-[1.1]">
            {experience.title}
          </h1>
          <p className="mt-4 text-background/70 text-lg">{experience.place}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-3 gap-12">
        <aside className="space-y-6 text-sm">
          <Meta k="기간" v={experience.period} />
          <Meta k="장소" v={experience.place} />
        </aside>
        <div className="md:col-span-2 space-y-12">
          {experience.overview && (
            <div>
              <h2 className="font-serif text-2xl mb-3">Overview</h2>
              <p className="text-[var(--ink-soft)] leading-relaxed">{experience.overview}</p>
            </div>
          )}
          {experience.role && experience.role.length > 0 && (
            <div>
              <h2 className="font-serif text-2xl mb-3">My Role</h2>
              <ul className="space-y-2 text-[var(--ink-soft)]">
                {experience.role.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span className="text-[var(--terracotta)]">→</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {experience.outcome && experience.outcome.length > 0 && (
            <div>
              <h2 className="font-serif text-2xl mb-3">Outcome</h2>
              <ul className="space-y-2 text-[var(--ink-soft)]">
                {experience.outcome.map((o) => (
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

      <nav className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-10 flex items-center justify-between gap-6">
          <Link
            to="/experiences/$slug"
            params={{ slug: prev.slug }}
            className="group text-left"
          >
            <div className="text-xs uppercase tracking-widest text-[var(--ink-soft)]">← Prev</div>
            <div className="font-serif text-lg group-hover:text-[var(--terracotta)] transition-colors">
              {prev.title}
            </div>
          </Link>
          <Link
            to="/experiences/$slug"
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
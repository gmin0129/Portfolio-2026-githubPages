import { createFileRoute, Link } from "@tanstack/react-router";
import profileImg from "@/assets/윤지민.jpg.asset.json";
import { PROJECTS } from "@/lib/projects";
import { EXPERIENCES } from "@/lib/experiences";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "윤지민 · Yun Jimin — Portfolio" },
      { name: "description", content: "공감과 소통, 적응력과 끈기로 다양성을 추구하는 윤지민의 포트폴리오." },
      { property: "og:title", content: "윤지민 · Yun Jimin — Portfolio" },
      { property: "og:description", content: "공감과 소통, 적응력과 끈기로 다양성을 추구하는 윤지민의 포트폴리오." },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const EDUCATION = [
  {
    school: "숭실대학교",
    detail: "독어독문학과 / 언론홍보학과",
    period: "2021.03 — 2026.02 (졸업)",
    note: "학점 3.69 / 4.5",
  },
  {
    school: "FHWien der WKW, Austria",
    detail: "교환학생",
    period: "2024.02 — 2024.07",
  },
  {
    school: "전남외국어고등학교",
    detail: "독일어과",
    period: "2018.03 — 2021.02 (졸업)",
  },
  {
    school: "봄온 아카데미",
    detail: "아나운서 전문가 과정 · 실전 방송 역량 및 공채 맞춤 훈련",
    period: "2022.12 — 2023.05",
  },
  {
    school: "숭실대 X 코멘토",
    detail: "진로고민해결 프로젝트 · 컨벤션 기획, 인사 실무과제 수행",
    period: "2026.04 — 2026.06",
  },
];

const CERTS = [
  { name: "TOEIC", score: "905" },
  { name: "OPIc", score: "IH" },
  { name: "Zertifikat Deutsch", score: "B1" },
  { name: "ADsP", score: "데이터분석 준전문가" },
  { name: "운전면허", score: "2종 보통" },
];

const CAREER = [
  {
    org: "주식회사 에이블라인드",
    period: "2025.08 — 2025.12",
    role: "전시·행사 기획 및 운영, SNS 마케팅, 디자인, 작가 매니지먼트",
  },
  {
    org: "DYB최선어학원 중계캠퍼스",
    period: "2023.01 — 2026.04 (간헐)",
    role: "고객응대 및 사무보조",
  },
  {
    org: "인문학 콘텐츠 소모임 ‘아데테’",
    period: "2023.03 — 2023.12",
    role: "소모임 기획·운영, SNS 운영",
  },
  {
    org: "원어연극부 디 뷔네 (DIE BÜHNE)",
    period: "2021.03 — 2022.09",
    role: "홍보물 제작, SNS 운영, 무대 지원",
  },
];

const SKILLS = [
  { group: "Google Workspace", items: ["Docs", "Sheets", "Drive", "Meet", "Forms"] },
  { group: "MS Office", items: ["Word", "PowerPoint", "Excel"] },
  { group: "Collaboration", items: ["Slack", "Notion"] },
  { group: "Design & Media", items: ["Fresco", "Premiere", "Canva", "Miricanvas"] },
  { group: "AI Tools", items: ["Gemini", "ChatGPT", "Genspark"] },
];

const TILES = ["tile-1", "tile-2", "tile-3", "tile-4", "tile-5", "tile-6"];
const SHAPES = ["shape-squircle", "shape-blob", "shape-pebble", "shape-petal", "shape-leaf", "shape-arch"];
const ROTATIONS = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "rotate-0", "-rotate-1"];
const ACCENTS = [
  "var(--pop-coral)",
  "var(--pop-purple)",
  "var(--pop-sky)",
  "var(--pop-lime)",
  "var(--pop-magenta)",
  "var(--pop-orange)",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[oklch(0.985_0.012_95/0.78)] border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-lg font-bold tracking-tight">
          윤지민<span className="text-[var(--terracotta)]">.</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm text-[var(--ink-soft)]">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-[var(--terracotta)] transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:dbswlals0129@gmail.com"
          className="hidden sm:inline-flex items-center gap-2 text-sm font-medium border border-foreground/80 rounded-full px-4 py-1.5 hover:bg-foreground hover:text-background transition-colors"
        >
          Say hi →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
      <div className="absolute -top-24 -left-20 w-72 h-72 shape-outline shape-outline-coral pointer-events-none" />
      <div className="absolute top-20 right-0 w-80 h-80 shape-outline shape-outline-sky pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 shape-outline shape-outline-lime pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7">
          <p className="text-sm tracking-[0.3em] uppercase text-[var(--ink-soft)] mb-6">
            Portfolio · 2026
          </p>
          <h1 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.5] font-medium">
            <span className="word-lift text-[var(--pop-magenta)]">공감</span>과 <span className="word-lift text-[var(--pop-coral)]">소통</span>,<br />
            <span className="word-lift italic text-[var(--pop-purple)]">적응력</span>과 <span className="word-lift text-[var(--pop-sky)]">끈기</span>,<br />
            그리고 <span className="word-lift text-rainbow font-semibold">다양성</span>.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-[var(--ink-soft)] leading-relaxed">
            안녕하세요. 기획과 운영, 그리고 사람들 사이를 잇는 일을 좋아하는
            <span className="font-medium text-foreground"> 윤지민</span>입니다.
            언어와 문화를 가로지르며 쌓아온 경험으로 콘텐츠와 브랜드의 이야기를 만듭니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-5 py-2.5 text-sm font-medium clay-sm hover:-translate-y-0.5 transition-all">
              프로젝트 보기 →
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 tile-1 text-foreground rounded-full px-5 py-2.5 text-sm font-medium clay-sm hover:-translate-y-0.5 transition-all">
              연락하기
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["기획", "Communication", "전시 운영", "Branding", "콘텐츠", "Deutsch · English · 한국어", "Curation"].map((tag) => (
              <span key={tag} className="text-xs border border-foreground/15 rounded-full px-3 py-1 bg-background/60 backdrop-blur text-foreground/80">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="absolute -inset-4 shape-outline shape-outline-magenta pointer-events-none" />
          <img
            src={profileImg.url}
            alt="윤지민 프로필 사진"
            width={896}
            height={1152}
            className="relative shape-squircle w-full object-cover clay"
          />
          <div className="absolute -bottom-4 -left-4 tile-4 text-foreground rounded-full px-4 py-2 text-xs tracking-widest uppercase font-serif italic rotate-[-6deg] clay-sm">
            Yun Jimin
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["기획", "Communication", "전시 운영", "Branding", "콘텐츠", "Deutsch · English · 한국어", "Curation"];
  return (
    <div className="bg-rainbow py-4 overflow-hidden animate-galaxy-pulse">
      <div className="flex gap-12 whitespace-nowrap animate-[scroll_30s_linear_infinite] font-serif italic text-2xl text-foreground/90">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            {it}
            <span className="text-background/80">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-33.33%)}}`}</style>
    </div>
  );
}

function SectionHeader({ num, kicker, title }: { num: string; kicker: string; title: string }) {
  return (
    <div className="flex items-end justify-between mb-12 border-b border-foreground/15 pb-4">
      <div>
        <span className="section-num text-lg">{num}</span>
        <h2 className="font-serif text-4xl md:text-5xl font-medium mt-1">{title}</h2>
      </div>
      <span className="text-xs tracking-[0.3em] uppercase text-[var(--ink-soft)] hidden md:block">
        {kicker}
      </span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader num="01 —" kicker="Who I am" title="About" />
      <div className="grid md:grid-cols-3 gap-10">
        <p className="md:col-span-2 font-display text-2xl md:text-3xl leading-[1.5] text-foreground">
          저는 사람과 사람 사이의 <span className="mark-pop mark-pop-interactive mark-magenta">공감</span>에서 시작해,<br />
          새로운 환경에 빠르게 스며드는 <span className="mark-pop mark-pop-interactive mark-sky">적응력</span>과<br />
          끝까지 마무리하는 <span className="mark-pop mark-pop-interactive mark-lime">끈기</span>를 가지고 기획과 운영을 합니다.
        </p>
        <div className="space-y-4 text-sm text-[var(--ink-soft)]">
          <Fact k="Based in" v="Seoul, KR" />
          <Fact k="Languages" v="한국어 · English · Deutsch" />
          <Fact k="Currently" v="에이블라인드 / 졸업 후 진로 탐색" />
          <Fact k="Interest" v="브랜드 · 전시 · 콘텐츠 기획" />
        </div>
      </div>
    </section>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border pb-3">
      <span className="uppercase tracking-widest text-xs">{k}</span>
      <span className="text-foreground font-medium text-right">{v}</span>
    </div>
  );
}

function Education() {
  return (
    <section id="education" className="bg-[var(--paper-deep)] border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader num="02 —" kicker="Education & Career" title="Education" />
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-2xl mb-6"><span className="mark-pop mark-coral">교육</span></h3>
            <ul className="space-y-7">
              {EDUCATION.map((e) => (
                <li key={e.school} className="grid grid-cols-[80px_1fr] gap-4">
                  <span className="text-xs tracking-widest text-[var(--ink-soft)] pt-1">
                    {e.period.split(" ")[0]}
                  </span>
                  <div>
                    <div className="font-medium text-foreground">{e.school}</div>
                    <div className="text-sm text-[var(--ink-soft)] mt-1">{e.detail}</div>
                    <div className="text-xs text-[var(--ink-soft)]/80 mt-1">{e.period}</div>
                    {e.note && (
                      <div className="inline-block mt-2 text-xs bg-background border border-border rounded-full px-2 py-0.5">
                        {e.note}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <h4 className="font-serif text-lg mt-12 mb-4"><span className="mark-pop mark-lime">자격증 & 어학</span></h4>
            <div className="flex flex-wrap gap-2">
              {CERTS.map((c) => (
                <span key={c.name} className="inline-flex items-center gap-2 text-xs border border-foreground/20 rounded-full px-3 py-1.5">
                  <span className="font-medium">{c.name}</span>
                  <span className="text-[var(--terracotta)]">{c.score}</span>
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-6"><span className="mark-pop mark-lavender">경력 & 경험</span></h3>
            <ul className="space-y-7">
              {CAREER.map((c) => (
                <li key={c.org} className="grid grid-cols-[80px_1fr] gap-4">
                  <span className="text-xs tracking-widest text-[var(--ink-soft)] pt-1">
                    {c.period.split(" ")[0]}
                  </span>
                  <div>
                    <div className="font-medium text-foreground">{c.org}</div>
                    <div className="text-sm text-[var(--ink-soft)] mt-1">{c.role}</div>
                    <div className="text-xs text-[var(--ink-soft)]/80 mt-1">{c.period}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader num="03 —" kicker="Tools I use" title="Skills" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((s, i) => (
          <div
            key={s.group}
            className={`group relative ${TILES[i % TILES.length]} ${SHAPES[i % SHAPES.length]} ${ROTATIONS[i % ROTATIONS.length]} card-pop p-7 overflow-hidden animate-galaxy-pulse`}
          >
            <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
            <div className="relative">
              <div className="text-foreground font-serif italic text-sm">0{i + 1}</div>
              <h3 className="font-serif text-xl mt-2">{s.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li key={it} className="text-xs bg-background/75 backdrop-blur rounded-full px-3 py-1 clay-sm">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative bg-[var(--paper-deep)] text-foreground overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 tile-3 shape-blob blur-2xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 tile-5 shape-pebble blur-2xl opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between mb-12 border-b border-foreground/15 pb-4">
          <div>
            <span className="font-serif italic text-lg text-[var(--terracotta)]">04 —</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mt-1 text-rainbow">Projects</h2>
          </div>
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--ink-soft)] hidden md:block">
            Things I built
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((p, i) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className={`relative block group ${TILES[i % TILES.length]} ${SHAPES[i % SHAPES.length]} ${ROTATIONS[i % ROTATIONS.length]} card-pop p-7 overflow-hidden animate-galaxy-pulse`}
            >
              <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
              <div className="relative flex flex-col h-full min-h-[15rem]">
                <div
                  className="font-serif italic text-2xl"
                  style={{ color: ACCENTS[i % ACCENTS.length] }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-xl md:text-2xl mt-1 leading-tight text-foreground">
                  {p.title}
                  <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-foreground">→</span>
                </h3>
                <p className="text-sm text-foreground/75 mt-1">{p.sub}</p>
                <div className="mt-4 text-xs text-foreground/80 space-y-1">
                  <div><span className="uppercase tracking-widest text-[10px] text-foreground/60 mr-2">기여</span>{p.contribution}</div>
                  <div><span className="uppercase tracking-widest text-[10px] text-foreground/60 mr-2">기간</span>{p.period}</div>
                </div>
                <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] rounded-full px-2.5 py-0.5 text-foreground font-medium bg-background/75 backdrop-blur clay-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader num="05 —" kicker="Beyond the desk" title="Experiences" />
      <div className="grid md:grid-cols-2 gap-8">
        {EXPERIENCES.map((e, i) => (
          <Link
            key={e.slug}
            to="/experiences/$slug"
            params={{ slug: e.slug }}
            className={`group relative ${TILES[(i + 2) % TILES.length]} ${SHAPES[(i + 1) % SHAPES.length]} ${ROTATIONS[(i + 1) % ROTATIONS.length]} card-pop p-8 overflow-hidden cursor-pointer animate-galaxy-pulse`}
          >
            <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
            <div className="relative">
              <div className="text-xs uppercase tracking-widest text-foreground/70">{e.period}</div>
              <h3 className="font-serif text-2xl mt-2">
                {e.title}
                <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </h3>
              <div className="text-sm text-foreground/80 font-medium mt-1">{e.place}</div>
              <p className="mt-4 text-foreground/85 leading-relaxed">{e.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[var(--paper-deep)] border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <span className="section-num text-lg">06 —</span>
          <h2 className="font-display text-pop-hover text-5xl md:text-6xl mt-2 leading-[1.5]">
            함께 좋은 이야기를<br />
            만들고 싶다면, <span className="word-lift italic text-[var(--terracotta)]">언제든.</span>
          </h2>
        </div>
        <div className="md:col-span-5 space-y-4">
          <ContactRow label="Email" value="dbswlals0129@gmail.com" href="mailto:dbswlals0129@gmail.com" />
          <ContactRow label="Phone" value="010-4234-5652" href="tel:+821042345652" />
          <ContactRow label="Instagram" value="@y0oniverse._" href="https://www.instagram.com/y0oniverse._/" />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-foreground/20 py-4 hover:border-[var(--terracotta)] transition-colors">
      <span className="text-xs uppercase tracking-widest text-[var(--ink-soft)]">{label}</span>
      <span className="font-serif text-lg group-hover:text-[var(--terracotta)] transition-colors">
        {value} →
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/70">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div>© 2026 Yun Jimin · 윤지민</div>
        <div className="font-serif italic">감사합니다.</div>
      </div>
    </footer>
  );
}

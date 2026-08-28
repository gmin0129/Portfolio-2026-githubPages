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
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const EDUCATION = [
  {
    school: "전남외국어고등학교",
    detail: "독일어과",
    period: "2018.03. - 2021.02. (졸업)",
  },
  {
    school: "숭실대학교",
    detail: "독어독문학과 / 언론홍보학과",
    period: "2021.03. - 2026.02 (졸업)",
  },
  {
    school: "FHWien der WKW, 오스트리아",
    detail: "교환학생",
    period: "2024.02. - 2024.07.",
  },
];

const CAREER = [
  {
    org: "원어연극부 ‘디 뷔네’",
    period: "2021.03. - 2022.09.",
    role: "홍보물 제작, SNS 운영, 기타 무대지원",
  },
  {
    org: "숭실대 언론홍보학과 <광고론>",
    period: "2022.03. - 2022.06.",
    role: "PHOTOGRAY 협업 - 슝슝이 프레임 제작",
  },
  {
    org: "인문학 콘텐츠 소모임 ‘아데테’",
    period: "2023.03. - 2025.06.",
    role: "소모임 기획 및 운영/참여, SNS 운영",
  },
  {
    org: "DYB최선어학원 중계캠퍼스",
    period: "2023.01. - 2026.04. (*실근무 22개월)",
    role: "고객응대, 재원생 데이터 관리, 사무보조",
  },
  {
    org: "주식회사 에이블라인드",
    period: "2025.08. - 2025.12.",
    role: "전시회 기획/운영, SNS 운영, 행사운영",
  },
  {
    org: "코멘토 X 숭실대 진로취업센터",
    period: "2026.04. - 2026.06.",
    role: "HR: 채용공고문, 컨벤션 기획: 행사제안서 제작",
  },
];

const PROGRAMS = [
  { group: "MS OA", items: ["Word", "PPT", "Excel"] },
  { group: "Google Workspace", items: ["Drive", "Sheet", "Docs", "Form", "Meet"] },
  { group: "Design Tool", items: ["Canva", "Miricanvas", "Fresco", "Premiere Pro"] },
  { group: "AI Tool", items: ["Gemini", "ChatGPT", "Lovable", "Genspark"] },
  { group: "Collaboration Tool", items: ["Slack", "Notion"] },
];

const CERTS = [
  "ADsP (데이터분석 준전문가)",
  "TOEIC 905점",
  "Zertifikat Deutsch B1 (일상회화 가능)",
];

const ACTIVITIES = [
  {
    title: "2025 대한민국 대학생 광고대회 (KOSAC)",
    period: "2025.03. - 2025.05.",
    desc: "‘건강한 스마트폰 사용 캠페인’ 기획 및 참가",
  },
  {
    title: "서울시자원봉사센터 현직자 연계 진로 멘토링 '청춘잡담'",
    period: "2026.07.",
    desc: "",
    extra: "S-OIL 'HRD' 직무 멘토링 1,2차 참여",
  },
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
    <div className="relative min-h-screen bg-background text-foreground">
      <ConnectionLines />
      <Header />
      <Hero />
      <Education />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function ConnectionLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--pop-coral)" />
          <stop offset="50%" stopColor="var(--pop-lime)" />
          <stop offset="100%" stopColor="var(--pop-sky)" />
        </linearGradient>
      </defs>
      <path
        d="M 10 5 C 40 0, 70 8, 85 12 C 96 15, 93 22, 82 28 C 60 38, 30 34, 12 42 C 2 46, 2 54, 12 58 C 35 66, 70 62, 88 68 C 98 72, 95 80, 85 86 C 65 96, 30 92, 15 97"
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
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
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
      <div className="absolute -top-16 -left-14 w-56 h-56 md:-top-24 md:-left-20 md:w-72 md:h-72 shape-outline shape-outline-coral pointer-events-none" />
      <div className="absolute top-20 right-0 w-80 h-80 shape-outline shape-outline-sky pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 shape-outline shape-outline-lime pointer-events-none" />
<div className="mx-auto max-w-6xl px-6 pt-14 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 grid md:grid-cols-12 gap-10 md:gap-12 items-center">
        <div className="md:col-span-7 flex flex-col items-start">
          <p className="text-sm tracking-[0.3em] uppercase text-[var(--ink-soft)] mb-5">
            Portfolio · 2026
          </p>
          <p className="max-w-2xl text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-snug md:leading-[1.35] text-foreground">
            안녕하세요, <span className="font-bold text-[var(--pop-magenta)]">윤지민</span>입니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-5 py-2.5 text-sm font-medium clay-sm hover:-translate-y-0.5 transition-all">
              프로젝트 보기 →
            </a>
            <a href="#experience" className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-5 py-2.5 text-sm font-medium clay-sm hover:-translate-y-0.5 transition-all">
              경험 보기 →
            </a>
          </div>
          <div className="mt-6 h-[2px] w-40 bg-[var(--pop-lime)] rounded-full opacity-90" />
        </div>
        <div className="md:col-span-5 relative">
          <div className="absolute -inset-4 shape-outline shape-outline-magenta pointer-events-none" />
<img
            src={profileImg.url}
            alt="윤지민 프로필 사진"
            width={896}
            height={1152}
            className="relative shape-squircle w-full object-cover object-top clay md:h-[460px] lg:h-[500px]"
          />
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


function Education() {
  return (
    <section id="education" className="bg-[var(--paper-deep)] border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <SectionHeader num="01 —" kicker="Education & Career" title="About" />
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
          {/* Left column */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl mb-4"><span className="mark-pop mark-coral">교육</span></h3>
              <ul className="space-y-3">
                {EDUCATION.map((e) => (
                  <li key={e.school} className="grid grid-cols-[80px_1fr] gap-3">
                    <span className="text-xs tracking-widest text-[var(--ink-soft)] pt-1">
                      {e.period.split(" ")[0]}
                    </span>
                    <div>
                      <div className="font-medium text-foreground text-sm">{e.school}</div>
                      <div className="text-sm text-[var(--ink-soft)] mt-0.5">{e.detail}</div>
                      <div className="text-xs text-[var(--ink-soft)]/80 mt-0.5">{e.period}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-4"><span className="mark-pop mark-lime">프로그램 활용능력</span></h3>
              <div className="space-y-1.5">
                {PROGRAMS.map((p) => (
                  <div key={p.group} className="text-sm leading-snug">
                    <span className="font-medium text-foreground">{p.group}</span>
                    <span className="text-[var(--ink-soft)] mx-1.5">-</span>
                    <span className="text-[var(--ink-soft)]">{p.items.join(" / ")}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-4"><span className="mark-pop mark-coral">대외활동</span></h3>
              <ul className="space-y-3">
                {ACTIVITIES.map((a) => (
                  <li key={a.title} className="grid grid-cols-[80px_1fr] gap-3">
                    <span className="text-xs tracking-widest text-[var(--ink-soft)] pt-1">
                      {a.period ? a.period.split(" ")[0] : ""}
                    </span>
                    <div>
                      <div className="font-medium text-foreground text-sm">{a.title}</div>
                      {a.extra && <div className="text-sm text-[var(--ink-soft)] mt-0.5">{a.extra}</div>}
                      {a.desc && <div className="text-sm text-[var(--ink-soft)] mt-0.5">{a.desc}</div>}
                      {a.period && <div className="text-xs text-[var(--ink-soft)]/80 mt-0.5">{a.period}</div>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl mb-4"><span className="mark-pop mark-lavender">실무경험</span></h3>
              <ul className="space-y-3">
                {CAREER.map((c) => (
                  <li key={c.org} className="grid grid-cols-[80px_1fr] gap-3">
                    <span className="text-xs tracking-widest text-[var(--ink-soft)] pt-1">
                      {c.period.split(" ")[0]}
                    </span>
                    <div>
                      <div className="font-medium text-foreground text-sm">{c.org}</div>
                      <div className="text-sm text-[var(--ink-soft)] mt-0.5">{c.role}</div>
                      <div className="text-xs text-[var(--ink-soft)]/80 mt-0.5">{c.period}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-4"><span className="mark-pop mark-sky">자격증 & 어학</span></h3>
              <div className="flex flex-col gap-2 items-start">
                <div className="flex flex-wrap gap-2">
                  {CERTS.slice(0, 2).map((c) => (
                    <span key={c} className="inline-flex items-center gap-1.5 text-xs whitespace-nowrap border border-foreground/20 rounded-full px-2.5 py-1 shrink-0">
                      <span className="font-medium">{c}</span>
                    </span>
                  ))}
                </div>
                {CERTS[2] && (
                  <span className="inline-flex items-center gap-1.5 text-xs whitespace-nowrap border border-foreground/20 rounded-full px-2.5 py-1 shrink-0">
                    <span className="font-medium">{CERTS[2]}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
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
            <span className="font-serif italic text-lg text-[var(--terracotta)]">02 —</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mt-1 text-foreground">Projects</h2>
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
      <SectionHeader num="03 —" kicker="Beyond the desk" title="Experiences" />
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
          <span className="section-num text-lg mb-6 block">04 —</span>
          <h2 className="font-display text-pop-hover text-5xl md:text-6xl lg:text-7xl leading-[1.3]">
            <span className="word-lift font-bold italic text-[var(--terracotta)] tracking-[0.05em]">THANK YOU</span>
          </h2>
        </div>
        <div className="md:col-span-5 space-y-0">
          <ContactRow label="Email" value="dbswlals0129@gmail.com" href="mailto:dbswlals0129@gmail.com" />
          <ContactRow label="Phone" value="010-4234-5652" href="tel:+821042345652" />
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
      </div>
    </footer>
  );
}

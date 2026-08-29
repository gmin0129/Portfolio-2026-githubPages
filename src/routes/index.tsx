import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { PROJECTS } from "@/lib/projects";
import profileAboutAsset from "@/assets/profile-about.jpg.asset.json";
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
    school: "숭실대학교 독어독문학과 / 언론홍보학과",
    period: "2021.03. - 2026.02 (졸업)",
  },
  {
    school: "전남외국어고등학교 독일어과",
    period: "2018.03. - 2021.02. (졸업)",
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
    org: "FHWien der WKW, 오스트리아",
    period: "2024.02. - 2024.07.",
    role: "비엔나 교환학생, 인플루언서 마케팅 수강",
  },
  {
    org: "숭실대학교 초등영어캠프 엔허브",
    period: "2025.01.06 - 30.",
    role: "원어민 수업 보조강사, 학생 안전관리",
  },
  {
    org: "숭실대학교 교수학습혁신센터 ‘숭실튜터링’",
    period: "2025.03. - 2025.06.",
    role: "독어독문학과 ‘기초독회화’ 튜터 참여",
  },
  {
    org: "주식회사 에이블라인드 (인턴)",
    period: "2025.08. - 2025.12.",
    role: "전시회 기획/운영, SNS 관리, 행사운영",
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
  { title: "ADsP (데이터분석 준전문가)", period: "2026.06." },
  { title: "영어 : TOEIC 905점", period: "2026.03." },
  { title: "숭실튜터링 - 우수튜터상", period: "2025.08." },
  { title: "독일어 : Zertifikat Deutsch B1 (일상회화 가능)", period: "2023.01." },
];

const ACTIVITIES = [
  {
    title: "2025 대한민국 대학생 광고대회 (KOSAC)",
    period: "2025.03. - 2025.05.",
    desc: "‘건강한 스마트폰 사용 캠페인’ 기획 및 참가",
  },
  {
    title: "서울시자원봉사센터 현직자 연계 진로 멘토링 '청춘잡담'",
    period: "2026.07.07. - 28.",
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-25"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 10 5 C 40 0, 70 8, 85 12 C 96 15, 93 22, 82 28 C 60 38, 30 34, 12 42 C 2 46, 2 54, 12 58 C 35 66, 70 62, 88 68 C 98 72, 95 80, 85 86 C 65 96, 30 92, 15 97"
        fill="none"
        stroke="var(--foreground)"
        strokeWidth="1"
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
  // 하나의 연속된 SVG path: 수평(A) → 대각선(B) → 수평(C)
  // 기하학적 기준점 (0~1 비율 좌표)
  const A_Y = 0.2; // 상단 수평선 y
  const KINK_X = 0.56; // 수평선이 꺾이는 x (PORTFOLIO의 'O' 끝과 수직 일치)
  const C_X = 0.76; // 대각선이 끝나고 다시 수평이 되는 x
  const C_Y = 0.86; // 하단 수평선 y

  const containerRef = React.useRef<HTMLDivElement>(null);


  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div ref={containerRef} className="relative mx-auto max-w-[1440px] h-[92vh] min-h-[34rem]">
        {/* 연속 기준선: A(수평) → B(대각선) → C(수평) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M 0 ${A_Y * 1000} L ${KINK_X * 1000} ${A_Y * 1000} L ${C_X * 1000} ${C_Y * 1000} L 1000 ${C_Y * 1000}`}
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* 2021 - 2026 : 상단 수평선 위 좌측 */}
        <span
          className="absolute left-6 md:left-10 font-serif italic text-foreground"
          style={{
            top: `calc(${A_Y * 100}% - 2.4rem)`,
            fontSize: "clamp(0.9rem, 1.4vw, 1.25rem)",
          }}
        >
          2021 - 2026
        </span>

        {/* PORTFOLIO : 우측 끝('O')이 선이 꺾이는 지점(KINK_X)과 수직 일치 */}
        <h1
          className="absolute font-serif font-bold tracking-tight leading-none text-foreground whitespace-nowrap"
          style={{
            right: `${(1 - KINK_X) * 100}%`,
            top: `calc(${A_Y * 100}% - clamp(2.75rem, 7vw, 6.5rem) * 1.02 - 0.6rem)`,
            fontSize: "clamp(2.75rem, 7vw, 6.5rem)",
          }}
        >
          PORTFOLIO
        </h1>

        {/* 메인 카피 : 시작점이 '2021 - 2026' 시작점과 수직 일치 */}
        <div
          className="absolute left-6 md:left-10 right-6 font-serif text-foreground/85 leading-[1.6] tracking-[0.06em] whitespace-nowrap"
          style={{
            top: `calc(${A_Y * 100}% + clamp(2.5rem, 6vh, 4.5rem))`,
            fontSize: "clamp(1.05rem, 3.3vw, 3rem)",
          }}
        >
          <strong className="font-bold">공감</strong>에서 출발한 기획,
          <br />
          서로 <strong className="font-bold">다른</strong> 시선을 <strong className="font-bold">잇는</strong> 콘텐츠로
        </div>


        {/* 윤지민 : 하단 수평선(C) 바로 위, 넓은 자간으로 좌측으로 당겨 배치 */}
        <span
          className="absolute font-serif font-light italic text-foreground whitespace-nowrap"
          style={{
            left: `calc(${C_X * 100}% + 1.25rem)`,
            top: `calc(${C_Y * 100}% - 1.6em)`,
            fontSize: "clamp(1.9rem, 3.3vw, 3rem)",
            letterSpacing: "0.6em",
          }}
        >
          윤지민
        </span>

        {/* 날짜 + CTAs : 시작점을 '2021 - 2026'과 수직 정렬 */}
        <div
          className="absolute left-6 md:left-10 flex flex-col items-start gap-4 sm:gap-5"
          style={{
            top: `calc(${C_Y * 100}% - 1px)`,
            transform: "translateY(-100%)",
          }}
        >
          <span
            className="font-serif text-foreground"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.25rem)" }}
          >
            2026.08.29.
          </span>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-5 py-2.5 text-sm font-medium clay-sm hover:-translate-y-0.5 transition-all">
              프로젝트 보기 →
            </a>
            <a href="#experience" className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-5 py-2.5 text-sm font-medium clay-sm hover:-translate-y-0.5 transition-all">
              경험 보기 →
            </a>
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


function Divider() {
  return <div className="border-t border-foreground/25 my-6" />;
}

/* Projects 페이지 타일(tile-1~6)의 파스텔 조합 — 투명도를 넣어 부드럽게 */
const HEADING_ACCENTS = [
  "linear-gradient(120deg, color-mix(in oklch, var(--pop-peach) 62%, transparent) 0%, color-mix(in oklch, var(--pop-pink) 58%, transparent) 55%, color-mix(in oklch, var(--pop-yellow) 55%, transparent) 110%)",
  "linear-gradient(120deg, color-mix(in oklch, var(--pop-sky) 58%, transparent) 0%, color-mix(in oklch, var(--pop-lime) 55%, transparent) 60%, color-mix(in oklch, var(--pop-mint) 55%, transparent) 110%)",
  "linear-gradient(120deg, color-mix(in oklch, var(--pop-coral) 55%, transparent) 0%, color-mix(in oklch, var(--pop-orange) 52%, transparent) 55%, color-mix(in oklch, var(--pop-peach) 55%, transparent) 110%)",
  "linear-gradient(120deg, color-mix(in oklch, var(--pop-lavender) 58%, transparent) 0%, color-mix(in oklch, var(--pop-pink) 55%, transparent) 55%, color-mix(in oklch, var(--pop-magenta) 50%, transparent) 110%)",
  "linear-gradient(120deg, color-mix(in oklch, var(--pop-lime) 55%, transparent) 0%, color-mix(in oklch, var(--pop-sky) 55%, transparent) 60%, color-mix(in oklch, var(--pop-mint) 55%, transparent) 110%)",
];

function SubHeading({ idx, children }: { idx: number; children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-lg sm:text-xl font-bold mb-4">
      <span className="relative inline-block px-2.5 py-0.5">
        {/* 부드러운 하이라이트 : 흐린 테두리 + 투명도 */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-xl blur-[5px] opacity-90"
          style={{ background: HEADING_ACCENTS[idx % HEADING_ACCENTS.length] }}
        />
        <span className="relative text-foreground">{children}</span>
      </span>
    </h3>
  );
}


function Education() {
  return (
    <section id="education" className="bg-[var(--paper-deep)] border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <SectionHeader num="01 —" kicker="Education & Career" title="About" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {/* Column 1 : 사진 + 인사말 + 학력 */}
          <div>
            <div className="flex items-stretch gap-4">
              <img
                src={profileAboutAsset.url}
                alt="윤지민 프로필 사진"
                className="flex-1 min-w-0 aspect-[5/6] object-cover rounded-2xl"
              />
              <span
                className="font-serif text-lg md:text-xl text-foreground leading-none"
                style={{ writingMode: "vertical-rl", letterSpacing: "0.12em" }}
              >
                안녕하세요, 윤지민입니다
              </span>
            </div>
            <p className="mt-5 font-serif text-[0.95rem] sm:text-base md:text-lg font-bold text-foreground leading-relaxed break-keep">
              자신감과 소신을 잃지 않으면서도,
              <br />
              <span className="block whitespace-nowrap text-right">타인과 화합할 줄 아는 사람으로 성장했습니다.</span>
            </p>
            <Divider />
            <div className="my-4 space-y-1.5 text-[0.95rem] sm:text-base leading-snug tracking-[-0.01em] text-foreground break-keep">
              <div>🎂 2002.01.29. (24세)</div>
              <div className="break-all">✉️ yunjimin0129@naver.com</div>
              <div>📞 010-4234-5652</div>
              <div>🏠 서울시 동작구 상도로60가길 8 306호</div>

            </div>
            <Divider />
            <div>
              <SubHeading idx={0}>학&nbsp;&nbsp;력</SubHeading>
              <ul className="space-y-3">
                {EDUCATION.map((e) => (
                  <li key={e.school}>
                    <div className="font-medium text-foreground text-base">{e.school}</div>
                    <div className="text-sm text-[var(--ink-soft)]/80 mt-0.5">{e.period}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2 : 경력/경험/교육 */}
          <div>
            <SubHeading idx={1}>경력/경험/교육</SubHeading>
            <ul>
                 {CAREER.map((c, i) => (
                 <li key={c.org}>
                   {i > 0 && <div className="text-sm text-foreground/50 py-2">-</div>}
                   <div className="font-medium text-foreground text-base">{c.org}</div>
                   <div className="text-sm text-[var(--ink-soft)]/80 mt-0.5">{c.period}</div>
                   <div className="text-base text-[var(--ink-soft)] mt-0.5">{c.role}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 : 프로그램 활용능력 + 대외활동 + 자격증/어학/수상 */}
          <div>
            <div>
              <SubHeading idx={2}>프로그램 활용능력</SubHeading>
              <ul className="space-y-2.5">
                {PROGRAMS.map((p) => (
                  <li key={p.group} className="text-base leading-snug flex gap-2">
                    <span className="text-foreground">•</span>
                    <div>
                      <div className="font-medium text-foreground">{p.group}</div>
                      <div className="text-[var(--ink-soft)] mt-0.5">{p.items.join(" / ")}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Divider />
            <div>
              <SubHeading idx={3}>대외활동</SubHeading>
              <ul>
                {ACTIVITIES.map((a, i) => (
                   <li key={a.title}>
                     {i > 0 && <div className="text-sm text-foreground/50 py-2">-</div>}
                     <div className="font-medium text-foreground text-base">{a.title}</div>
                     {a.period && <div className="text-sm text-[var(--ink-soft)]/80 mt-0.5">{a.period}</div>}
                     {a.desc && <div className="text-base text-[var(--ink-soft)] mt-0.5">{a.desc}</div>}
                     {a.extra && <div className="text-base text-[var(--ink-soft)] mt-0.5">{a.extra}</div>}
                  </li>
                ))}
              </ul>
            </div>
            <Divider />
            <div>
              <SubHeading idx={4}>자격증/어학/수상</SubHeading>
              <ul className="space-y-2.5">
                {CERTS.map((c) => (
                   <li key={c.title} className="text-base leading-snug flex gap-2">
                    <span className="text-foreground">•</span>
                    <div>
                      <div className="font-medium text-foreground">{c.title}</div>
                      <div className="text-[var(--ink-soft)] mt-0.5">{c.period}</div>
                    </div>
                  </li>
                ))}
              </ul>
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

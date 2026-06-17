export type Project = {
  slug: string;
  title: string;
  sub: string;
  period: string;
  contribution: string;
  tags: string[];
  skills: string;
  overview?: string;
  role?: string[];
  outcome?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "daljjanheun-haru",
    title: "<달찮은 하루> 전시회",
    sub: "서울대학교 관정갤러리",
    period: "2025.11.11 — 2025.11.18",
    contribution: "전시 운영, 작가 매니징",
    tags: ["#전시기획 및 운영", "#외부관계자 소통", "#데이터 정리"],
    skills: "의사소통 · 창의력 · Premiere · Slack · Notion",
    overview:
      "서울대학교 관정갤러리에서 진행된 그룹전 <달찮은 하루>의 운영을 맡아, 작가와 관객 사이를 잇는 전시 경험을 설계했습니다.",
    role: [
      "전시 전반의 운영 계획 수립 및 현장 관리",
      "참여 작가 매니징과 외부 관계자 커뮤니케이션",
      "관람 데이터 수집·정리 및 후속 리포트 작성",
    ],
    outcome: [
      "8일간 안정적인 전시 운영과 작가 만족도 확보",
      "전시 관람 데이터를 정리해 다음 전시 기획의 기초 자료로 활용",
    ],
  },
  {
    slug: "photogray-shyungshyung",
    title: "PHOTOGRAY × 슝슝이",
    sub: "대학생 맞춤형 프레임 기획",
    period: "2022.03 — 2022.06",
    contribution: "아이디어 제공 및 과제물 제작",
    tags: ["#콘텐츠제작", "#광고전략수립", "#팀플레이어"],
    skills: "창의 · 소통 · PPT",
    overview:
      "대학생 타깃의 포토그레이 프레임을 기획하며, 캠퍼스 라이프와 브랜드 캐릭터 ‘슝슝이’를 결합한 광고 전략을 제안했습니다.",
    role: [
      "타깃 인사이트 기반 프레임 컨셉 아이디에이션",
      "광고 전략과 콘텐츠 기획안 PPT 작성",
      "팀 내 역할 분담과 협업 진행",
    ],
    outcome: [
      "대학생 맞춤 프레임 시안 및 광고 전략안 도출",
      "팀 과제 우수 사례로 선정",
    ],
  },
  {
    slug: "die-buehne",
    title: "DIE BÜHNE 정기공연",
    sub: "독일어 원어연극회",
    period: "2022.07 — 2022.09",
    contribution: "공연 기획 및 홍보물 제작",
    tags: ["#콘텐츠디자인", "#타임라인수립", "#작품분석"],
    skills: "Fresco · Photoshop · PPT · 창작",
    overview:
      "독일어 원어연극회 DIE BÜHNE의 정기공연을 위한 기획과 홍보물 제작을 담당했습니다.",
    role: [
      "작품 분석과 공연 컨셉 기획",
      "포스터·SNS 홍보물 디자인 (Fresco, Photoshop)",
      "리허설·공연 일정 타임라인 수립",
    ],
    outcome: [
      "공연 홍보물 시리즈 제작 및 SNS 운영",
      "정기공연 성공적 개최",
    ],
  },
  {
    slug: "adt",
    title: "인문학소모임 A.D.T. 기획",
    sub: "콘텐츠 기획 · 운영",
    period: "2023.03 — 2024.12",
    contribution: "운영 및 콘텐츠 기획",
    tags: ["#소모임운영", "#콘텐츠기획"],
    skills: "기획 · 운영 · 협업",
    overview:
      "인문학 콘텐츠 소모임 A.D.T.를 기획·운영하며, 정기 세미나와 SNS 콘텐츠를 함께 만들었습니다.",
    role: [
      "소모임 운영 전반 (모집·진행·피드백)",
      "월별 콘텐츠 주제 기획 및 자료 제작",
      "SNS 채널 운영과 멤버 커뮤니케이션",
    ],
    outcome: [
      "정기적인 세미나 운영과 안정적인 멤버십 유지",
      "콘텐츠 기획·운영 사이클 경험 축적",
    ],
  },
  {
    slug: "woori-sigak",
    title: "<우리시각>",
    sub: "콘텐츠 프로젝트",
    period: "—",
    contribution: "참여",
    tags: ["#콘텐츠"],
    skills: "—",
    overview: "‘우리의 시각’으로 일상과 사회를 바라보는 콘텐츠 프로젝트에 참여했습니다.",
    role: ["콘텐츠 기획 회의 참여", "리서치 및 자료 정리"],
    outcome: ["프로젝트 콘텐츠 제작 기여"],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
export type Experience = {
  slug: string;
  title: string;
  place: string;
  period: string;
  blurb: string;
  overview?: string;
  role?: string[];
  outcome?: string[];
  images?: string[];
  pdf?: { url: string; label: string };
};

export const EXPERIENCES: Experience[] = [
  {
    slug: "dyb-choisun",
    title: "DYB 최선어학원 중계점 고객지원실",
    place: "DYB 최선어학원 중계점",
    period: "23.01~26.04 (기간 내 22개월 근무)",
    blurb: "대형어학원 학습자 데이터 관리 및 고객지원(VoC) 운영.",
  },
  {
    slug: "kosac-2025",
    title: "2025 KOSAC 광고캠페인",
    place: "대한민국 대학생 광고대회",
    period: "2025.03 — 2025.05",
    blurb: "‘건강한 스마트폰 사용’ 캠페인 기획 · 참가.",
    overview:
      "대한민국 대학생 광고대회 KOSAC에 참가해 ‘건강한 스마트폰 사용’을 주제로 한 광고 캠페인을 기획·제안했습니다.",
    role: [
      "타깃 분석과 캠페인 컨셉 기획",
      "메시지·비주얼 아이디에이션 및 자료 제작",
      "팀 협업과 발표 자료 정리",
    ],
    outcome: [
      "캠페인 기획안 완성 및 대회 출품",
      "공익 광고 기획 사이클 경험 축적",
    ],
    pdf: {
      url: "/assets/kosac-2025-plan.pdf",
      label: "캠페인 기획서 PDF",
    },
  },
];

export function getExperience(slug: string) {
  return EXPERIENCES.find((e) => e.slug === slug);
}

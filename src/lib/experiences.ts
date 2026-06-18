export type Experience = {
  slug: string;
  title: string;
  place: string;
  period: string;
  blurb: string;
  overview?: string;
  role?: string[];
  outcome?: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    slug: "exchange-vienna",
    title: "오스트리아 교환학생",
    place: "FHWien der WKW, Vienna, Austria",
    period: "2024.02 — 2024.06",
    blurb: "다국적 환경에서 학업과 일상을 보내며 적응력과 다양성에 대한 감각을 키웠습니다.",
    overview:
      "FHWien der WKW에서 한 학기 동안 교환학생으로 수학하며, 다국적 팀 프로젝트와 현지 생활을 통해 적응력과 커뮤니케이션 역량을 키웠습니다.",
    role: [
      "다국적 팀 프로젝트에서 협업 및 발표",
      "독일어·영어 환경에서 학업과 일상 수행",
      "현지 문화와 라이프스타일 적응 및 네트워킹",
    ],
    outcome: [
      "다양한 배경의 동료들과 협업 경험 축적",
      "언어·문화 적응력과 자기주도성 향상",
    ],
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
  },
];

export function getExperience(slug: string) {
  return EXPERIENCES.find((e) => e.slug === slug);
}

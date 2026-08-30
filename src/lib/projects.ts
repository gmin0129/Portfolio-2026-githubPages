export type Project = {
  slug: string;
  title: string;
  sub: string;
  period: string;
  contribution: string;
  tags: string[];
  skills: string;
  linkUrl?: string;
  overview?: string;
  role?: string[];
  outcome?: string[];
  images?: string[];
  pdf?: { url: string; label: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "daljjanheun-haru",
    title: "<달찮은 하루> 전시회",
    sub: "장애예술인 에이전시 에이블라인드",
    period: "2025.08.04 — 2025.09.26",
    contribution: "전시 기획 및 운영, 작가 매니징, 데이터 아카이빙",
    linkUrl: "https://litt.ly/dalchaneun_haru",
    tags: ["#배리어프리 콘텐츠", "#전시기획 및 운영", "#데이터 정리"],
    skills: "의사소통 · 창의력 · Premiere · Slack · Notion",
    overview:
      "서울대학교 관정갤러리에서 진행된 그룹전 <달찮은 하루>의 운영을 맡아, 작가와 관객 사이를 잇는 전시 경험을 설계했습니다.",
    role: [
      "전시 전반의 운영 계획 수립 및 현장 관리",
      "참여 작가 매니징과 외부 관계자 커뮤니케이션",
      "관람 데이터 수집·정리 및 후속 리포트 작성",
    ],
    outcome: [
      "8일간 안정적인 전시 운영과 관람객 만족도 확보",
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
    sub: "숭실대 독어독문학과 원어연극부",
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
    title: "인문학 콘텐츠 제작 소모임 A.D.T.",
    sub: "숭실대 독어독문학과 인문학 소모임",
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
    slug: "comento-hr",
    title: "정규직 전환형 인턴 채용안",
    sub: "코멘토 직무 부트캠프 (인사/HR)",
    period: "2026.04 — 2026.06",
    contribution: "사업가형 인재 분석, 채용 프로세스 계획",
    tags: ["#채용기획", "#역량평가모델", "#데이터기반"],
    skills: "Gemini · PPT · 자료조사 · 채용 파이프라인 설계",
    overview:
      "가상 패션기업의 ‘사업가형 인재’ 확보를 위해 서류–면접–인턴십–전환으로 이어지는 채용 프로세스를 기획하고, 현직자 피드백을 반영해 실효성 있는 채용안을 완성했습니다.",
    role: [
      "기업 채용 타깃(인재상) 분석 및 정의",
      "서류–면접–인턴십–정규직 전환 프로세스 기획",
      "역량 평가 모델 기반 평가 지표 및 채용 공고문 작성",
    ],
    outcome: [
      "3단계 특화 선발 프로세스(공고 필터링 · 데이터 분석 과제 · 실무 PT) 설계",
      "8주 인턴십 운영 타임라인과 정규직 전환 심사 기준 수립",
    ],
    pdf: {
      url: "/__l5e/assets-v1/9bc986a8-8625-4d47-92dd-5ab75b1a3dbb/comento-hr-recruiting.pdf",
      label: "정규직 전환형 인턴 채용안 PDF",
    },
  },
  {
    slug: "comento-convention",
    title: "청소년 진로박람회 기획안",
    sub: "코멘토 직무 부트캠프 (컨벤션 기획)",
    period: "2026.04 — 2026.06",
    contribution: "행사 컨셉 도출, 프로그램 기획, 예산·홍보 전략 수립",
    tags: ["#행사기획", "#타깃분석", "#체험형콘텐츠"],
    skills: "Gemini · Genspark · PPT · 통계자료 조사",
    overview:
      "‘나의 진로? 나의 VIBE대로!’를 컨셉으로, 진로 선택의 막막함을 겪는 청소년이 스스로 커리어를 설계해 보는 참여형 진로탐색 박람회를 기획했습니다.",
    role: [
      "중학생 희망직업 부재율·N잡러 트렌드 교차 분석",
      "체험형 부스와 멘토 특강 등 세부 프로그램 설계",
      "운영 예산안 편성 및 온·오프라인 홍보 전략 수립",
    ],
    outcome: [
      "5대 산업군 블렌딩 체험 부스 및 커스텀 키캡 게이미피케이션 기획",
      "타깃 눈높이에 맞춘 실현 가능한 박람회 운영안 도출",
    ],
    pdf: {
      url: "/__l5e/assets-v1/b82cc890-b324-4a9b-b1b5-49c8c5db0d27/youth-career-fair-plan.pdf",
      label: "청소년 진로박람회 기획안 PDF",
    },
  },
  {
    slug: "urisigak",
    title: "<우리시각> 발달장애 예술가 육성사업",
    sub: "장애예술인 에이전시 에이블라인드",
    period: "2025.08 — 2025.11",
    contribution: "멘토링 모니터링, 집체교육·워크숍 기획 및 운영",
    tags: ["#현장운영", "#이해관계자소통", "#모니터링"],
    skills: "Slack · Notion · Google Sheets · 행사 운영",
    overview:
      "현업 예술가와 예비 발달장애 예술가 10팀의 포트폴리오 제작 멘토링 사업에서 현장 모니터링과 오프라인 교육·워크숍 운영을 담당했습니다.",
    role: [
      "평택·서울·수원 등 멘토링 현장 방문 및 모니터링 일지 작성",
      "디지털 소통이 어려운 작가·조력자와 맞춤 채널로 커뮤니케이션",
      "집체교육 2회·결과공유워크숍 공간 기획 및 현장 운영",
    ],
    outcome: [
      "멘토링 진행 상황을 상시 점검해 교육 품질 유지",
      "케이터링·동선·안전 통제를 포함한 오프라인 행사 무사고 운영",
    ],
  },
  {
    slug: "waynabox",
    title: "Waynabox 기업\nSNS 마케팅 전략",
    sub: "오스트리아 교환학생 팀 프로젝트",
    period: "2024.02 — 2024.07",
    contribution: "인플루언서 리서치, 경쟁사 분석, 기획안 작성",
    tags: ["#SNS마케팅", "#페르소나", "#경쟁사분석"],
    skills: "Canva · Google Docs · ChatGPT · 영어 협업",
    overview:
      "‘서프라이즈 여행’ 콘셉트 브랜드 Waynabox의 유럽 시장 확장을 위해 타깃 페르소나 기반의 로컬라이징 SNS 마케팅 전략을 기획했습니다.",
    role: [
      "유럽 인플루언서 리스트 조사 및 동종업계 SNS 콘텐츠 분석",
      "18~30세 타깃 세분화 및 브랜드 포지셔닝 설정",
      "플랫폼별 주간 콘텐츠 플랜과 프로모션 트래킹 체계 설계",
    ],
    outcome: [
      "팔로워 10% 증가·신규 고객 2.5만 명 유치를 목표로 한 종합 전략 수립",
      "트래픽·인게이지먼트·전환율 기반 KPI 및 성과 측정 방안 마련",
    ],
    pdf: {
      url: "/__l5e/assets-v1/3a105fe6-4dec-4b65-a7c5-74e098748d7d/Waynabox_Social_Media_Marketing_Strategy.pdf",
      label: "Waynabox SNS 마케팅 전략 PDF",
    },
  },
  {
    slug: "kasteel-rouge",
    title: "Kasteel Rouge 기업\n오스트리아 진출 전략",
    sub: "오스트리아 교환학생 팀 프로젝트",
    period: "2024.02 — 2024.07",
    contribution: "시장·트렌드 분석, 페르소나 설정, KPI 수립",
    tags: ["#시장분석", "#브랜드전략", "#지속가능소비"],
    skills: "SWOT/PESTEL · Google Docs · Canva · 영어회화",
    overview:
      "벨기에 체리맥주 ‘Kasteel Rouge’의 오스트리아 신규 진출을 위해 현지 시장을 분석하고 로컬라이징 마케팅·커뮤니케이션 전략을 수립했습니다.",
    role: [
      "오스트리아 맥주 시장 데이터 및 건강 트렌드 분석",
      "SWOT·PESTEL·Porter’s 5 Forces 기반 경쟁 환경 분석",
      "구매자 페르소나와 고객 여정 설계, SMART 기반 KPI 수립",
    ],
    outcome: [
      "‘현지 생산 무알코올 체리 맥주’ 신규 라인업 포지셔닝 제안",
      "Bar 중심 유통 전략과 온·오프라인 통합 마케팅 플랜 도출",
    ],
    pdf: {
      url: "/__l5e/assets-v1/0b834e6a-3c95-41f6-b906-034d140f35b3/Kasteel_Rouge_International_Communication_Plan.pdf",
      label: "Kasteel Rouge International Communication Plan PDF",
    },
  },
  {
    slug: "ssu-tutoring",
    title: "숭실 튜터링 (기초독일어)",
    sub: "숭실대 독어독문학과 전공기초과목 튜터",
    period: "2025.03 — 2025.06",
    contribution: "커리큘럼 보완, 학습자료 제작, 성취도 분석",
    tags: ["#교육기획", "#학습자데이터분석", "#AI활용"],
    skills: "Gemini · ChatGPT · Zoom · Word",
    overview:
      "중도 포기율이 높은 독일어입문 수업의 학습자들을 위해 니즈 진단 설문을 바탕으로 실용 중심 튜터링 커리큘럼을 설계했습니다.",
    role: [
      "학습자 니즈 진단 설문 실시 및 페인 포인트 도출",
      "AI 툴을 활용한 주차별 실용 예제·문제 제작",
      "주차별 성취도 정량 분석 리포트 작성",
    ],
    outcome: [
      "총 9회 튜터링 운영, 중도 포기율 0% 달성",
      "학습자 성적 향상 및 ‘우수튜터상’ 수상",
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
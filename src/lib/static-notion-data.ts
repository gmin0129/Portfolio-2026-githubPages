import type { NotionPagePayload } from "./notion-images.functions";

/**
 * Snapshot of the Notion page text/images, generated from the live Notion pages.
 * Used as a fallback when the Notion server function is unavailable
 * (e.g. static hosting such as GitHub Pages). Images point at the local
 * copies under public/assets/notion so no signed S3 URL can expire.
 * Keyed by `${kind}:${slug}`.
 */
export const STATIC_NOTION_PAGES: Record<string, NotionPagePayload> = {
  "project:daljjanheun-haru": {
    "summary": "<달찮은 하루> 전시회",
    "highlights": [
      "에이블라인드 제5회 정기 장애예술인 전시회",
      "참고: <달찮은 하루> 전시회 (Instagram)",
      "작가섭외 및 작품관리",
      "에이블라인드 소속 시각장애 작가 연락 및 작품 수거 일정 관리 (구글 스프레드시트 활용)",
      "전시회 관련 정보 전달 및 작품해설 녹음 요령 안내"
    ],
    "images": [
      "/assets/notion/daljjanheun-haru-0.png",
      "/assets/notion/daljjanheun-haru-1.png",
      "/assets/notion/daljjanheun-haru-2.png",
      "/assets/notion/daljjanheun-haru-3.png",
      "/assets/notion/daljjanheun-haru-4.jpg",
      "/assets/notion/daljjanheun-haru-5.jpg",
      "/assets/notion/daljjanheun-haru-6.jpg",
      "/assets/notion/daljjanheun-haru-7.png"
    ]
  },
  "project:photogray-shyungshyung": {
    "summary": "점주·학교 홍보팀과 협력해 슝슝이 포토프레임 7종 제작, 시험기간에 맞춰 “시험 찍지 말고, 사진 찍자!” 슬로건의 SNS 인증 이벤트 진행",
    "highlights": [
      "숭실대 언론홍보학과 <광고론> 수업 기말 프로젝트",
      "포토그레이 숭실대점을 대상으로, 방학시즌 수요급감 해결을 위한 로컬 마케팅 솔루션 기획 및 실행",
      "‘PRESSU 기획 - 슝슝이 프레임’ 기획자들을 만나다, 언론홍보학과 <광고론> 프로젝트 팀 6인",
      "[슈피플] 숭실대학교 × 포토그레이｜'슝슝이 프레임' 기획자들을 만나다｜언론홍보학과 '광고론' 프로젝트 팀 6인",
      "학교 주변 상권을 조건으로, 실현 가능한 마케팅 전략으로 ‘포토그레이 숭실대점 × 슝슝이’ 콜라보 아이디어를 제안해 팀 주제로 선정"
    ],
    "images": [
      "/assets/notion/photogray-shyungshyung-1.jpg",
      "/assets/notion/photogray-shyungshyung-2.png",
      "/assets/notion/photogray-shyungshyung-0.png"
    ]
  },
  "project:die-buehne": {
    "summary": "<제작 기간 단축(3주)에 맞춰 SNS 카드뉴스 2종 시리즈 제작>",
    "highlights": [
      "독어독문학과 원어연극 공연을 위한 홍보물 제작 및 연극부 SNS 운영",
      "참고: 원어연극부 디 뷔네 <메두사의 뗏목>(Instagram)",
      "20대 초중반 대학생 관객층을 겨냥해 연극의 주제와 분위기를 전달할 디지털·오프라인 홍보물을 단독 기획·제작·배포",
      "단기간 내 성과를 내며 공연을 마쳤고, 전략을 체계화해 후속 기수에 전수",
      "팀 내 갈등 상황에선 중재자 역할로 원활한 소통과 공감으로 갈등 조율"
    ],
    "images": [
      "/assets/notion/die-buehne-0.jpg",
      "/assets/notion/die-buehne-1.png",
      "/assets/notion/die-buehne-2.png",
      "/assets/notion/die-buehne-3.png",
      "/assets/notion/die-buehne-4.png",
      "/assets/notion/die-buehne-5.png"
    ]
  },
  "project:adt": {
    "summary": "작품감상을 토대로 진행하는 인문학 활동이 주로 책상 위에서 이루어진다는 뜻을 담아, 독일어 Auf dem Tisch(책상 위에서)라는 표현의 약자를 활용해 ’A.D.T.(아데테)’라는 소모임을 기획함",
    "highlights": [
      "연극부와 독서모임 경험을 바탕으로, 어려운 작품으로 인문학에 거리감을 느낀 경험이 계기가 됨",
      "‘인문학 입문자도 즐길 수 있는 콘텐츠’가 필요하다는 문제의식으로 소모임을 기획함",
      "인문학 전공자들이 함께 사고하고 표현하며 ‘나’와 ‘타인’을 이해하고 자기결정력을 키울 수 있는 장을 만들겠다는 목표로 활동을 진행함.",
      "작품감상 및 발제토론",
      "전공수업에서 다루는 문학/영화작품 혹은 투표로 결정된 작품감상 후 질문형식의 발제를 한 뒤, 이에 대해 자유롭게 의견을 나누는 활동"
    ],
    "images": [
      "/assets/notion/adt-0.jpg",
      "/assets/notion/adt-1.png",
      "/assets/notion/adt-2.png",
      "/assets/notion/adt-3.png",
      "/assets/notion/adt-4.png",
      "/assets/notion/adt-5.png",
      "/assets/notion/adt-6.png",
      "/assets/notion/adt-7.png",
      "/assets/notion/adt-8.png"
    ]
  },
  "experience:kosac-2025": {
    "summary": "프로젝트명: 균형잡힌 라이프 스타일을 만들기 위한 건강한 스마트폰 사용 캠페인",
    "highlights": [],
    "images": []
  }
};

export function staticNotionPage(
  kind: "project" | "experience",
  slug: string,
): NotionPagePayload | undefined {
  return STATIC_NOTION_PAGES[`${kind}:${slug}`];
}

import type { SheetDetail } from "./sheets.functions";

/**
 * Snapshot of the Google Sheets content, generated from the live sheet.
 * Used as a fallback when the Sheets server function is unavailable
 * (e.g. static hosting such as GitHub Pages).
 */
export const STATIC_PROJECT_SHEETS: Record<string, NonNullable<SheetDetail>> = {
  "comento-hr": {
    "meta": {
      "title": "코멘토 직무 부트캠프\n(인사/HR)",
      "period": "26.04.~26.06",
      "task": "가상패션기업에서 '사업가형 인재'라는 타겟 인재 선발을 위한 '정규직 전환형 인턴 채용안' 일정과 내용 제안"
    },
    "background": {
      "title": "프로젝트 배경",
      "fields": [
        {
          "label": "기간",
          "value": "26.04.~26.06"
        },
        {
          "label": "과제",
          "value": "가상패션기업에서 '사업가형 인재'라는 타겟 인재 선발을 위한 '정규직 전환형 인턴 채용안' 일정과 내용 제안"
        },
        {
          "label": "적용 지식/이론",
          "value": "채용 파이프라인 설계, 역량 평가 모델(Competency Model) 기반 채용"
        },
        {
          "label": "적용 기술",
          "value": "Gemini, PPT, 타기업 채용공고 자료조사"
        }
      ]
    },
    "process": {
      "title": "진행과정",
      "fields": [
        {
          "label": "역할/업무내용",
          "value": "- 기업의 채용 타겟(인재상) 분석\n- 채용 전형(서류-면접-인턴십-전환) 프로세스 기획\n- 평가 기준 수립 및 채용 공고문 기획"
        },
        {
          "label": "지식 및 기술 적용한 부분",
          "value": "- 타겟 인재상에 부합하는 서류 및 면접 평가 지표 수립\n- 기업 내부 일정에 맞춘 현실적인 인턴십 운영 타임라인 설계"
        }
      ]
    },
    "outcome": {
      "title": "성과 및 인사이트",
      "fields": [
        {
          "label": "최종 결과물",
          "value": "사업가형 인재 확보 전략 보고서 (정규직 전환형 인턴 채용안)\n\n핵심 타겟: 데이터 기반 의사결정 및 ROI 마인드셋 보유 인재\n\n벤치마킹: FILA·LF 인턴십 우수 사례 융합 및 자사 맞춤형 3단계 방법론 재설계\n\n선발 프로세스:\n\n1단계(서류): 타겟 요건 명시를 통한 허수 지원자 필터링\n\n2단계(과제): 실제 데이터 활용 수익성 개선안 정량 평가\n\n3단계(면접): 가상 예산 기반 팝업스토어 이익 극대화 실무 PT\n\n인턴십 운영(8주): 실무·데이터 기초 교육(1~2주) → 실전 비즈니스 프로젝트(3~7주) → 최종 PT 및 정규직 심사(8주)\n\n강점: \n경영진 니즈(숫자 감각·논리력) 완벽 반영, 소싱 단계 채용 비용 절감, 실제 데이터를 활용한 테스트베드 시각 제시\n\n보완점: \n기존 공채 방식의 한계 분석 추가, 면접관 행동 관찰 지표 및 평가 가중치 구체화, 실전 프로젝트 예산 리스크 관리 방안 수립",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 35,
              "format": {}
            },
            {
              "startIndex": 36,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 43,
              "format": {}
            },
            {
              "startIndex": 73,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 79,
              "format": {}
            },
            {
              "startIndex": 122,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 131,
              "format": {}
            },
            {
              "startIndex": 132,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 139,
              "format": {}
            },
            {
              "startIndex": 166,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 173,
              "format": {}
            },
            {
              "startIndex": 200,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 207,
              "format": {}
            },
            {
              "startIndex": 238,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 248,
              "format": {}
            },
            {
              "startIndex": 312,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 317,
              "format": {}
            },
            {
              "startIndex": 383,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 389,
              "format": {}
            }
          ]
        }
      ]
    }
  },
  "comento-convention": {
    "meta": {
      "title": "코멘토 직무 부트캠프\n(컨벤션 기획자)",
      "period": "26.04.~26.06",
      "task": "300명 규모 청소년 타겟 맞춤형 '진로박람회 기획안' 작성"
    },
    "background": {
      "title": "프로젝트 배경",
      "fields": [
        {
          "label": "기간",
          "value": "26.04.~26.06"
        },
        {
          "label": "과제",
          "value": "300명 규모 청소년 타겟 맞춤형 '진로박람회 기획안' 작성"
        },
        {
          "label": "적용 지식/이론",
          "value": "행사 기획 프로세스(기획-운영-사후관리), 타겟 분석 마케팅"
        },
        {
          "label": "적용 기술",
          "value": "Gemini, PPT, Genspark, 통계자료 조사"
        }
      ]
    },
    "process": {
      "title": "진행과정",
      "fields": [
        {
          "label": "역할/업무내용",
          "value": "- 진로박람회 전체 컨셉 도출\n- 청소년 타겟 맞춤형 세부 프로그램(부스, 멘토링 등) 기획\n- 운영 예산안 편성 및 홍보 전략 수립"
        },
        {
          "label": "지식 및 기술 적용한 부분",
          "value": "- 청소년의 니즈와 트렌드에 맞춘 체험형 부스 및 멘토링 프로그램을 설계\n- 타겟 접근성이 높은 온/오프라인 채널을 활용한 홍보 전략 도출\n- Gemini, Genspark를 활용하여 기획안 PPT에 활용할 텍스트, 레이아웃 목업 제작 후 PPT로 최종 제작"
        }
      ]
    },
    "outcome": {
      "title": "성과 및 인사이트",
      "fields": [
        {
          "label": "최종 결과물",
          "value": "나의 진로? 나의 VIBE대로!' 청소년 참여형 진로탐색 박람회 기획안\n\n기획 배경: 중학생 희망 직업 부재율(41%) 및 'N잡러(융합형 커리어)' 트렌드 기반 진로 탐색 솔루션 도출\n\n메인 컨셉: '산업군 블렌딩' 체험을 통한 주도적 진로 설계\n\n세부 프로그램 기획:\n\n영감 존(특강): N잡러 융합 커리어 멘토(재쓰비) 섭외를 통한 진로 압박감 환기\n\n발견 존(체험): 5대 산업군 중 3가지 선택 기반 '나만의 융합 직무' 설계 부스\n\n게미피케이션: 융합 진로(키캡 코드) 연계 '커스텀 키캡' 조립을 통한 커리어 설계 시각화\n\n강점: \n적극적인 실무 질의를 통한 구체적 가이드라인 도출 및 방향성 확립\n\n보완점:\n\n타겟 고도화: 예산 집행 주최 기관 중심의 명확한 타겟팅 인지\n\n기획 통일성: 핵심 컨셉 설정 및 프로그램 간 유기적 연계 강화\n\n설득력 강화: 과거 레퍼런스 및 수치화 데이터(모객 효과 등) 기반 기대효과 구체화\n\n가독성 개선: 줄글 지양 및 키워드·시각적 디자인(강조 폰트, 레이아웃) 중심 문서 구성",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 40,
              "format": {}
            },
            {
              "startIndex": 41,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 47,
              "format": {}
            },
            {
              "startIndex": 105,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 112,
              "format": {}
            },
            {
              "startIndex": 140,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 152,
              "format": {}
            },
            {
              "startIndex": 153,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 162,
              "format": {}
            },
            {
              "startIndex": 200,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 210,
              "format": {}
            },
            {
              "startIndex": 248,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 256,
              "format": {}
            },
            {
              "startIndex": 300,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 305,
              "format": {}
            },
            {
              "startIndex": 343,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 348,
              "format": {}
            },
            {
              "startIndex": 349,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 356,
              "format": {}
            },
            {
              "startIndex": 385,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 393,
              "format": {}
            },
            {
              "startIndex": 422,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 429,
              "format": {}
            },
            {
              "startIndex": 470,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 477,
              "format": {}
            }
          ]
        }
      ]
    }
  },
  "daljjanheun-haru": {
    "meta": {
      "title": "에이블라인드 - 배리어프리 전시회 기획 및 운영\n(장애예술인 에이전시)",
      "period": "25.08~25.11",
      "task": "배리어프리 요소 제작 / 전시회 현장 운영 / 현장운영지원 봉사자 관리 / MD 상품 재고 관리 및 판매 / 보고서 작성"
    },
    "background": {
      "title": "프로젝트 배경",
      "fields": [
        {
          "label": "기간",
          "value": "25.08~25.11"
        },
        {
          "label": "과제",
          "value": "배리어프리 요소 제작 / 전시회 현장 운영 / 현장운영지원 봉사자 관리 / MD 상품 재고 관리 및 판매 / 보고서 작성"
        },
        {
          "label": "적용 지식/이론",
          "value": "배리어프리(Barrier-free) 전시 요소, 사용자 경험(UX) 중심 서비스, 신체적/정신적 장애 대한 이해, 공간 대관절차 등"
        },
        {
          "label": "적용 기술",
          "value": "Slack, Notion, HWP, Google Drive/Sheet/Form, Adobe Premiere Pro/Lightroom, Miricanvas, 안내문구 작성, 관람객 안내, 이해관계자 소통"
        }
      ]
    },
    "process": {
      "title": "진행과정",
      "fields": [
        {
          "label": "역할/업무내용",
          "value": "역할: 프로젝트 매니저\n- 전시 현장 운영(설치/운영/철거)\n- 현장운영지원 봉사자 관리\n- 관람객 동선 안내 및 응대\n- 배리어프리 요소(대체 텍스트, QR 오디오 가이드) 제작\n- MD 상품 재고 관리 및 판매",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 13,
              "format": {}
            }
          ]
        },
        {
          "label": "지식 및 기술 적용한 부분",
          "value": "배리어프리 요소 제작: 시각장애인용 홍보물 대체 텍스트 영상, 작품 해설 QR 제작, 공간 내 관람 가이드라인 설치\n\n공간 조성: 가벽 및 체험부스 조성, 작품·캡션 설치 및 철거, 텍스트 시트지 작업\n\n고객 접점 실무: 현장 관람객 안내 및 응대\n\nMD 관리: 전시 MD 상품 판매 및 재고 관리\n\n데이터 아카이빙: 홍보용(보도자료, SNS) 현장 사진·영상 기록, 관람객 만족도 조사 결과 및 MD 판매 내역 데이터화\n\n이해관계자 소통: 작가 관리 및 외부 협력업체 커뮤니케이션\n\n행정 실무: 서울대 관정갤러리 전시 운영 결과보고서 작성 및 제출",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 13,
              "format": {}
            },
            {
              "startIndex": 66,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 73,
              "format": {}
            },
            {
              "startIndex": 114,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 124,
              "format": {}
            },
            {
              "startIndex": 140,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 147,
              "format": {}
            },
            {
              "startIndex": 168,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 178,
              "format": {}
            },
            {
              "startIndex": 237,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 247,
              "format": {}
            },
            {
              "startIndex": 271,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 278,
              "format": {}
            }
          ]
        }
      ]
    },
    "outcome": {
      "title": "성과 및 인사이트",
      "fields": [
        {
          "label": "최종 결과물",
          "value": "<달찮은 하루> 전시회 운영\n- 총 2회차 진행: 25.09.05~12 노들갤러리1관 / 25.11.11~13 서울대 관정갤러리(소규모)\n- 핵심 메시지: 우리는 다르지 않다, 그러나 달라도 괜찮다(장애와 비장애, 평등과 차이가 공존하는 상태를 '달찮다'로 제시)\n- 32인 장애예술가(장애유형 8개) 작품 87점 전시 (주제: 아주 보통의 하루)\n- 공간구성: 하루의 시간 흐름에 따라 구성된 스토리라인형 전시 (부스체험 포함)\n\n- 자원봉사자 33인, 관람객 3,400인\n- 8건 이상 보도자료, 50건 이상 개인 포스팅\n- 배리어프리요소: 입체 가이드라인/터치투어/해설영상QR코드/점자 리플렛/장애인 화장실, 주차장 겸비",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 16,
              "format": {}
            },
            {
              "startIndex": 18,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 28,
              "format": {}
            },
            {
              "startIndex": 79,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 86,
              "format": {}
            },
            {
              "startIndex": 150,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 153,
              "format": {}
            },
            {
              "startIndex": 172,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 176,
              "format": {}
            },
            {
              "startIndex": 196,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 203,
              "format": {}
            }
          ]
        }
      ]
    }
  },
  "urisigak": {
    "meta": {
      "title": "에이블라인드 - <우리시각> 발달장애 예술가 육성사업",
      "period": "25.08 ~ 25.11",
      "task": "멘토링 현장 모니터링을 통한 교육 품질 유지 및 외부 장소 대관을 포함한 오프라인 결과공유워크숍 안전 운영"
    },
    "background": {
      "title": "프로젝트 배경",
      "fields": [
        {
          "label": "기간",
          "value": "25.08 ~ 25.11"
        },
        {
          "label": "과제",
          "value": "멘토링 현장 모니터링을 통한 교육 품질 유지 및 외부 장소 대관을 포함한 오프라인 결과공유워크숍 안전 운영"
        },
        {
          "label": "적용 지식/이론",
          "value": "장기 멘토링 프로세스 모니터링 & 평가, 발달장애인, 예술가, 공공기관 직원 등 다중 이해관계자 소통"
        },
        {
          "label": "적용 기술",
          "value": "Slack, Notion, Google Sheets/Drive, E-mail, Word\n행사 현장 구성, 참가자 응대, 사진촬영"
        }
      ]
    },
    "process": {
      "title": "진행과정",
      "fields": [
        {
          "label": "역할/업무내용",
          "value": "역할: 프로젝트 매니저\n- 맞춤형 채널(전화/메신저) 활용 소통\n- 멘토링 현장 직접 참관 및 모니터링 일지 기록\n- 집체교육/워크숍 공간 기획 및 운영(케이터링 섭외·큐카드 제작 및 당일 인솔/안전 통제)",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 13,
              "format": {}
            }
          ]
        },
        {
          "label": "지식 및 기술 적용한 부분",
          "value": "현장 모니터링 및 실시간 업무 공유: 멘토링 진도 및 불편사항 점검, 방문일지 작성 및 슬랙(Slack) 활용 실시간 상황 보고\n\n맞춤형 커뮤니케이션 및 피드백 관리: 디지털 소통 취약층(작가 및 조력자) 대상 전화 등 맞춤 채널 소통, 피드백 수합 및 유관 담당자 전달\n\n오프라인 행사 운영 및 기획 지원: 예산 맞춤형 케이터링 업체 섭외, 교육 현장 사전 답사, 현장 운영 보조 및 참가자 응대 등 전반적 행사 지원",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 21,
              "format": {}
            },
            {
              "startIndex": 73,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 94,
              "format": {}
            },
            {
              "startIndex": 153,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 173,
              "format": {}
            }
          ]
        }
      ]
    },
    "outcome": {
      "title": "성과 및 인사이트",
      "fields": [
        {
          "label": "최종 결과물",
          "value": "발달장애 예술가 육성사업 <우리시각>\n- 개요: 현업예술가와 예비 발달장애 예술가 10팀의 포트폴리오 제작 멘토링 사업\n- 주최: 우리금융미래재단, 주관: 서울문화재단, 에이블라인드\n- 멘토링 현장 방문 : 멘토링 진행현황 및 환경 체크, 멘토/멘티 측 문의사항 접수 및 처리\n- 집체교육 2회 운영: 강의현장 세팅, 케이터링, 사전답사, 동선체크, 참가자 안내\n- 결과공유워크숍 운영: 케이터링 업체 서칭 및 소통, 워크숍 현장 공간세팅 및 진행보조, 참가자 응대",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 21,
              "format": {}
            },
            {
              "startIndex": 23,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 27,
              "format": {}
            },
            {
              "startIndex": 69,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 73,
              "format": {}
            },
            {
              "startIndex": 104,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 116,
              "format": {}
            },
            {
              "startIndex": 157,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 169,
              "format": {}
            },
            {
              "startIndex": 205,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 216,
              "format": {}
            }
          ]
        }
      ]
    }
  },
  "waynabox": {
    "meta": {
      "title": "오스트리아 교환학생",
      "period": "24.02~24.07",
      "task": "인플루언서 마케팅 프로젝트 - Waynabox의 유럽시장 확장을 위한 SNS 마케팅 전략 기획"
    },
    "background": {
      "title": "프로젝트 배경",
      "fields": [
        {
          "label": "기간",
          "value": "24.02~24.07"
        },
        {
          "label": "과제",
          "value": "인플루언서 마케팅 프로젝트 - Waynabox의 유럽시장 확장을 위한 SNS 마케팅 전략 기획"
        },
        {
          "label": "적용 지식/이론",
          "value": "바이어 페르소나(Buyer Persona) 설정, 인플루언서 조사, SNS마케팅, 경쟁사 조사(Competitor Analysis)"
        },
        {
          "label": "적용 기술",
          "value": "Canva, Google Docs, ChatGPT"
        }
      ]
    },
    "process": {
      "title": "진행과정",
      "fields": [
        {
          "label": "역할/업무내용",
          "value": "역할: 조원\n\n - 유럽 인플루언서 리스트 탐색 및 동종업계 플랫폼별 SNS 마케팅(UGC, 정보성 게시물 등) 조사 및 기획안 도출",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 7,
              "format": {}
            }
          ]
        },
        {
          "label": "지식 및 기술 적용한 부분",
          "value": "현지 타겟에 대한 경쟁사 조사 결과를 토대로 페르소나를 구체화하고, 이에 맞춰 가장 효과적인 매체와 인플루언서 타이인(Tie-in) 전략 수립"
        }
      ]
    },
    "outcome": {
      "title": "성과 및 인사이트",
      "fields": [
        {
          "label": "최종 결과물",
          "value": "Waynabox 유럽 시장 확장을 위한 로컬라이징 SNS 마케팅 전략 기획서\n\n기획 배경 및 목표: '서프라이즈 여행' 콘셉트 브랜드 인지도 제고 및 연내 팔로워 10% 증가·신규 고객 2.5만 명 유치\n\n타겟 및 포지셔닝: 18~30세 타겟 세분화(가성비 중시 대학생, 편의 추구 직장인) 및 '가성비·유연성' 중심 브랜드 포지셔닝\n\n콘텐츠 기획: 인스타그램·틱톡 맞춤형 주간 플랜(UGC, 숏폼 등) 구축 및 인플루언서·할인 코드 연계 프로모션 성과 추적 체계 마련\n\n성과 측정(KPI): 마케팅 ROI 도출을 위한 핵심 지표(웹사이트 트래픽, 인게이지먼트율, 전환율) 설정 및 통제 방안 수립",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 43,
              "format": {}
            },
            {
              "startIndex": 44,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 55,
              "format": {}
            },
            {
              "startIndex": 115,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 126,
              "format": {}
            },
            {
              "startIndex": 188,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 196,
              "format": {}
            },
            {
              "startIndex": 264,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 275,
              "format": {}
            }
          ]
        }
      ]
    }
  },
  "kasteel-rouge": {
    "meta": {
      "title": "오스트리아 교환학생",
      "period": "24.02~24.07",
      "task": "벨기에 체리맥주 브랜드 'Kasteel Rouge'의 오스트리아 시장 신규 진출을 위한 로컬라이징 마케팅 및 커뮤니케이션 전략 수립"
    },
    "background": {
      "title": "프로젝트 배경",
      "fields": [
        {
          "label": "기간",
          "value": "24.02~24.07"
        },
        {
          "label": "과제",
          "value": "벨기에 체리맥주 브랜드 'Kasteel Rouge'의 오스트리아 시장 신규 진출을 위한 로컬라이징 마케팅 및 커뮤니케이션 전략 수립"
        },
        {
          "label": "적용 지식/이론",
          "value": "SMART 목표 설정 이론, Buyer Persona, Customer Journey & Touchpoint 분석, SDG #3(건강) & #12(지속가능한 소비)"
        },
        {
          "label": "적용 기술",
          "value": "영어회화, Google Docs, ChatGPT, Canva"
        }
      ]
    },
    "process": {
      "title": "진행과정",
      "fields": [
        {
          "label": "역할/업무내용",
          "value": "역할: 조원\n\n- 오스트리아 맥주 시장 데이터 및 건강 트렌드 분석\n- SWOT/PESTEL/Porter's 5 Forces 분석\n- Buyer Persona(Marie) 및 Customer Journey 설정 (SDGs 포함)\n- SMART 원칙 기반 KPI 수립",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 7,
              "format": {}
            }
          ]
        },
        {
          "label": "지식 및 기술 적용한 부분",
          "value": "- 카스텔 루즈 브랜드 SWOT분석 진행\n- 오스트리아 20대 알코올 시장 트렌드 조사 후 바이어 페르소나 설정\n- 지속가능한 소비 아이디어 제시(투명한 유리병 제조)\n- 구글문서로 보고서 공동작성"
        }
      ]
    },
    "outcome": {
      "title": "성과 및 인사이트",
      "fields": [
        {
          "label": "최종 결과물",
          "value": "Kasteel Rouge(벨기에 체리 맥주) 오스트리아 시장 진출 전략 기획서\n\n신규 제품 포지셔닝 (무알코올): 오스트리아 내 무알코올 맥주 수요 성장 데이터 기반, 기존 고도수 맥주를 대체하는 '현지 생산 무알코올 체리 맥주' 라인업 런칭 제안\n\n현지 맞춤형 유통 전략: 현지 'Bar'에서의 스페셜티(Specialty) 맥주 소비 급증 트렌드 반영, 주요 B2C 유통 채널을 마트(캔)가 아닌 '현지 Bar'로 집중\n\n통합 커뮤니케이션(IMC) 전략 수립: 구매자 페르소나 및 고객 여정(Customer Journey) 분석 바탕으로 온·오프라인 연계 마케팅 플랜(로열티 프로그램, 인플루언서 마케팅, SNS 캠페인 등) 및 KPI 구축",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 44,
              "format": {}
            },
            {
              "startIndex": 45,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 64,
              "format": {}
            },
            {
              "startIndex": 140,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 154,
              "format": {}
            },
            {
              "startIndex": 237,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 259,
              "format": {}
            }
          ]
        }
      ]
    }
  },
  "ssu-tutoring": {
    "meta": {
      "title": "숭실 튜터링 - 전공수업 튜터링",
      "period": "25.03~25.06",
      "task": "독일어입문 학생들의 높은 중도 포기율(약 70%) 및 수업 부적응 문제 해결"
    },
    "background": {
      "title": "프로젝트 배경",
      "fields": [
        {
          "label": "기간",
          "value": "25.03~25.06"
        },
        {
          "label": "과제",
          "value": "독일어입문 학생들의 높은 중도 포기율(약 70%) 및 수업 부적응 문제 해결"
        },
        {
          "label": "적용 지식/이론",
          "value": "독일어 문법/회화, 외국어 교습법"
        },
        {
          "label": "적용 기술",
          "value": "Gemini, Chat GPT, Zoom, Word"
        }
      ]
    },
    "process": {
      "title": "진행과정",
      "fields": [
        {
          "label": "역할/업무내용",
          "value": "역할: 튜터\n- 학습자 니즈 진단 설문 실시 및 커리큘럼 보완\n- AI 툴 활용 실용 예제/문제 매주 생성 및 제공\n- 주차별 성취도 정량 분석 리포트 작성",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 7,
              "format": {}
            }
          ]
        },
        {
          "label": "지식 및 기술 적용한 부분",
          "value": "- 사전 설문조사를 통해 '이론 중심 수업 및 빠른 진도로 인한 실용성 부족' 데이터를 도출\n- Chat GPT로 전공 교재 기반 실용 표현 예제를 매주 생성하여 제공하고 성취도를 정량 관리함"
        }
      ]
    },
    "outcome": {
      "title": "성과 및 인사이트",
      "fields": [
        {
          "label": "최종 결과물",
          "value": "- 총 9회 튜터링 진행\n- 학습자 성적향상 및 '우수튜터상' 수상"
        }
      ]
    }
  },
  "photogray-shyungshyung": {
    "meta": {
      "title": "숭실대 언론홍보학과 <광고론>",
      "period": "22.03~22.06",
      "task": "방학 시즌 대학 상권의 수요 급감 문제 해결을 위한 타겟 맞춤형 프로모션 기획 (포토그레이 숭실대점)"
    },
    "background": {
      "title": "프로젝트 배경",
      "fields": [
        {
          "label": "기간",
          "value": "22.03~22.06"
        },
        {
          "label": "과제",
          "value": "방학 시즌 대학 상권의 수요 급감 문제 해결을 위한 타겟 맞춤형 프로모션 기획 (포토그레이 숭실대점)"
        },
        {
          "label": "적용 지식/이론",
          "value": "광고전환구조 (인지 → 체험 → 확산), 로컬 마케팅 전략, 저작권 규정"
        },
        {
          "label": "적용 기술",
          "value": "구글 폼, PPT"
        }
      ]
    },
    "process": {
      "title": "진행과정",
      "fields": [
        {
          "label": "역할/업무내용",
          "value": "역할: 조원\n- 아이디어 제공\n- 타겟 니즈 설문 분석\n- PPT 제작\n- 프로모션 홍보물 제작 및 배포",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 7,
              "format": {}
            }
          ]
        },
        {
          "label": "지식 및 기술 적용한 부분",
          "value": "- 재학생 대상 '셀프 포토부스 이용 루틴' 설문조사 실시\n- 기존 대학교 마스코트 캐릭터를 활용하면서 저작권 제약을 준수한 특화 프레임 7종 기획 및 시의성 있는 슬로건 세팅\n- 대학교 공식 SNS, 교내 홍보물 부착 등 실제 홍보전략 실천 및 참여유도"
        }
      ]
    },
    "outcome": {
      "title": "성과 및 인사이트",
      "fields": [
        {
          "label": "최종 결과물",
          "value": "우리는 시험기간에 가장 아름답다. 시험 찍지 말고 사진 찍자!' 프로모션\n\n기획 배경: 방학 시즌 대학 상권 수요 급감 문제 해결을 위한 로컬 마케팅\n\n타겟 고객: 기말고사 스트레스를 겪는 숭실대 재학생 및 20대 방문객\n\n포지셔닝: 시험 스트레스 해소를 위한 대학생 맞춤형 일상 기록 놀이 공간\n\n제휴 및 상품: 포토그레이(PHOTOGRAY) 협업, 숭실대 마스코트 '슝슝이' 한정판 특화 프레임 7종 기획\n\n유통 채널: 포토그레이 숭실대점 단독 운영 (오프라인)\n\n프로모션 전략: 인스타그램 지정 해시태그(#슝슝이 등) 및 공식 계정 태그 인증 이벤트를 통한 바이럴 유도 (리워드: 아메리카노 쿠폰 추첨 증정)\n\n주요 성과:\n\n포토그레이 숭실대점 역대 일일 매출 최고 기록 경신\n\n주말 매출 150% 증가\n\n전년 동기(기말고사 기간) 대비 매출 12% 증가",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 41,
              "format": {}
            },
            {
              "startIndex": 42,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 48,
              "format": {}
            },
            {
              "startIndex": 85,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 91,
              "format": {}
            },
            {
              "startIndex": 125,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 131,
              "format": {}
            },
            {
              "startIndex": 167,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 176,
              "format": {}
            },
            {
              "startIndex": 230,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 236,
              "format": {}
            },
            {
              "startIndex": 262,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 271,
              "format": {}
            },
            {
              "startIndex": 345,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 351,
              "format": {}
            }
          ]
        }
      ]
    }
  },
  "die-buehne": {
    "meta": {
      "title": "숭실대 독어독문학과 \n원어연극부 '디 뷔네'",
      "period": "21.03~22.09",
      "task": "독일어 원어연극 <메두사의 뗏목> 공연"
    },
    "background": {
      "title": "프로젝트 배경",
      "fields": [
        {
          "label": "기간",
          "value": "21.03~22.09"
        },
        {
          "label": "과제",
          "value": "독일어 원어연극 <메두사의 뗏목> 공연"
        },
        {
          "label": "적용 지식/이론",
          "value": "홍보물 레이아웃 및 디자인\n연극공연 홍보물 종류"
        },
        {
          "label": "적용 기술",
          "value": "- Adobe Fresco/Photoshop\n- PPT\n- 페인트칠, 드릴 사용\n- 공감, 소통능력"
        }
      ]
    },
    "process": {
      "title": "진행과정",
      "fields": [
        {
          "label": "역할/업무내용",
          "value": "역할 : 홍보부\n\n- 연극 홍보물 제작(포스터, 티켓, 리플렛)\n- 연극홍보용 SNS 게시물 게시\n- 기타 무대지원(무대제작, 소품준비, 분장 등)",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 9,
              "format": {}
            }
          ]
        },
        {
          "label": "지식 및 기술 적용한 부분",
          "value": "- 기존 연극 홍보물의 구성 및 디자인 참고하여 포스터/리플렛 디자인 아이디어 도출\n- 포스터 그림 드로잉(프레스코) 및 인쇄용 파일 제작(포토샵) \n- 중단위기 후 3주 이내 새로운 연극 홍보물 제작 및 연출진 갈등 해결(공감)\n- 기타 무대지원(가벽제작, 소품준비, 안개 효과, 분장)"
        }
      ]
    },
    "outcome": {
      "title": "성과 및 인사이트",
      "fields": [
        {
          "label": "최종 결과물",
          "value": "숭실대 독어독문학과 원어연극 <메두사의 뗏목>\n\n- 타겟 관람객: 숭실대 독어독문학과 재학생 및 일반인\n- 포스터, 리플렛, 티켓 인쇄 및 배포 \n- 약 150명 관객 모집(총 2회 공연)",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 37,
              "format": {}
            }
          ]
        }
      ]
    }
  },
  "adt": {
    "meta": {
      "title": "숭실대 독어독문학과 인문학 콘텐츠 소모임 'A.D.T.'",
      "period": "23.03~23.12",
      "task": "숭실대 독어독문학과 재학생을 대상으로, 인문학을 처음 접하거나 관심이 있는 학생들에게 '입문자도 즐길 수 있는 인문학 콘텐츠'를 제공하고, 1년간 소모임 활동을 유지하는 것"
    },
    "background": {
      "title": "프로젝트 배경",
      "fields": [
        {
          "label": "기간",
          "value": "23.03~23.12"
        },
        {
          "label": "과제",
          "value": "숭실대 독어독문학과 재학생을 대상으로, 인문학을 처음 접하거나 관심이 있는 학생들에게 '입문자도 즐길 수 있는 인문학 콘텐츠'를 제공하고, 1년간 소모임 활동을 유지하는 것"
        },
        {
          "label": "적용 지식/이론",
          "value": "- 독일어\n- 독일문학 / 영화 작품\n- 독일 역사\n- 영화 장면(scene) 분석\n- 시나리오 장르 이해\n- 독서모임, 연극부 등 소모임 운영방식"
        },
        {
          "label": "적용 기술",
          "value": "- PPT, Word/Google Docs를 활용한 홍보, 활동자료 제작\n- 인터넷 서칭 (문학, 영화 작품, 문화행사 찾기)\n- 인스타그램 개설 및 게시물 업로드"
        }
      ]
    },
    "process": {
      "title": "진행과정",
      "fields": [
        {
          "label": "역할/업무내용",
          "value": "역할: 소모임장\n- 소모임 활동 계획 및 격주 1회 운영\n- 소모임 활동기록용 SNS 운영\n- 소모임 결과보고 발표",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 9,
              "format": {}
            }
          ]
        },
        {
          "label": "지식 및 기술 적용한 부분",
          "value": "언론홍보학과 지식(시나리오 및 영화 장면 분석) 접목을 통한 독일 문학·영화 기반 '소설의 시나리오화' 작업 기획\n\n입문자 맞춤형 작품(대중성 및 전공 연계 고려) 선정 및 '발제 토론' 중심 인문학 감상 활동 도입\n\n기존 원어연극부 SNS 운영 경험 기반, 소모임 전용 인스타그램 개설 및 홍보·활동 보고\n\nPPT : 홍보 발표 자료 제작 및 신입생 환영회 부원 모집 진행\n\nWord 및 Google Docs : 브레인스토밍 및 아카이빙(기록) 체계 구축"
        }
      ]
    },
    "outcome": {
      "title": "성과 및 인사이트",
      "fields": [
        {
          "label": "최종 결과물",
          "value": "- 쥐스킨트 <향수> 시나리오화 : 단순한 감상을 넘어, 협업 기반의 인문학 콘텐츠를 기획 및 시각화 하는 경험을 제공\n- 영화 토론 : 주기적인 영화감상과 발제토론을 통해 소모임에 대한 무게감을 덜고 꾸준한 참여를 유도함\n- MBTI·밸런스게임 제작 : 소설을 분석적으로 해석하며 작가의 의도를 파악하고, 문제를 볼 때 다각적인 시각을 갖게 함\n- 자체 SNS 운영 : 활동 일지 카드뉴스 제작을 통해 디자인 기초 역량을 습득함\n- 2023 서울국제도서전 방문 : 대외 행사에 참여하여 기획자의 입장에서 공간구성과  홍보방식을 체득함",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 20,
              "format": {}
            },
            {
              "startIndex": 67,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 77,
              "format": {}
            },
            {
              "startIndex": 126,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 143,
              "format": {}
            },
            {
              "startIndex": 196,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 208,
              "format": {}
            },
            {
              "startIndex": 242,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 261,
              "format": {}
            }
          ]
        }
      ]
    }
  }
};

export const STATIC_EXPERIENCE_SHEETS: Record<string, NonNullable<SheetDetail>> = {
  "dyb-choisun": {
    "meta": {
      "title": "DYB 최선어학원 중계점 고객지원실",
      "period": "23.01~26.04\n(기간 내 22개월 근무)",
      "task": "대형어학원 학습자 데이터 관리 및 고객지원(VoC) 운영"
    },
    "background": {
      "title": "프로젝트 배경",
      "fields": [
        {
          "label": "기간",
          "value": "23.01~26.04\n(기간 내 22개월 근무)"
        },
        {
          "label": "과제",
          "value": "대형어학원 학습자 데이터 관리 및 고객지원(VoC) 운영"
        },
        {
          "label": "적용 지식/이론",
          "value": "자사 고객응대 방법(전화, 문자, 대면), 영어회화"
        },
        {
          "label": "적용 기술",
          "value": "구글시트, 구글폼, LMS(학습관리시스템)"
        }
      ]
    },
    "process": {
      "title": "진행과정",
      "fields": [
        {
          "label": "역할/업무내용",
          "value": "역할: 고객지원실 상담원\n\n-1,280명 재학생 정보/교육 일정 관리\n-1,500여건 입학 상담, 문의응대 (CS)",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 14,
              "format": {}
            }
          ]
        },
        {
          "label": "지식 및 기술 적용한 부분",
          "value": "고객 맞춤형 CS 및 학사 행정: 입학시험 일정 조율, 신규·재원생 상담, 퇴원 환불 등 전반적인 고객 문의 응대\n\n데이터 기반 운영 효율화: 구글 폼 및 시트 연동을 통한 특수 커리큘럼(내신 등) 참여도 데이터 시각화 및 팀 내 실시간 공유\n\n현장 안전 및 시설 관리: 학생 하원 안전 지도 및 내부 비품(화장실, 정수기 등) 상태 점검",
          "runs": [
            {
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 18,
              "format": {}
            },
            {
              "startIndex": 65,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 80,
              "format": {}
            },
            {
              "startIndex": 137,
              "format": {
                "bold": true
              }
            },
            {
              "startIndex": 152,
              "format": {}
            }
          ]
        }
      ]
    },
    "outcome": {
      "title": "성과 및 인사이트",
      "fields": [
        {
          "label": "최종 결과물",
          "value": "- 1,500건 이상의 상담 완료 및 고객 데이터 축적을 통한 교육 환경 개선 기여"
        }
      ]
    }
  }
};

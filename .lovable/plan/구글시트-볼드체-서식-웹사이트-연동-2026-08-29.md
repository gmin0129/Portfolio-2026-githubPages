# 구글시트 볼드체(서식) 웹사이트 연동

## 목표
구글시트(예: J5 셀)에서 텍스트 일부에 볼드체를 적용하면, 포트폴리오 상세 페이지에도 해당 부분이 볼드로 표시되도록 한다.

## 현재 상태
- `src/lib/sheets.functions.ts`는 Sheets API의 `values` 엔드포인트(`/spreadsheets/{id}/values/{range}`)를 사용한다. 이 엔드포인트는 **순수 텍스트만 반환**하므로 볼드/색상 등 서식 정보가 전혀 포함되지 않는다.
- 따라서 서식 연동을 위해서는 다른 API 응답 형식이 필요하다.

## 구현 방법
1. **API 호출 방식 변경** (`src/lib/sheets.functions.ts`)
   - 기존 `values/{range}` 대신 `spreadsheets/{id}?ranges=...&fields=sheets.data.rowData.values(formattedValue,textFormatRuns)` 형태의 grid data 요청으로 변경한다.
   - `textFormatRuns`에는 각 텍스트 구간(run)의 서식(`bold: true` 여부)이 들어 있으므로, 이를 파싱해 셀 값을 `[{ text, bold }]` 세그먼트 배열로 변환한다.
   - 게이트웨이(`connector-gateway.lovable.dev/google_sheets/v4`)가 이 엔드포인트를 그대로 프록시하므로 쿼리 파라미터만 추가해 사용한다.
2. **데이터 타입 확장**
   - `SheetField.value`를 문자열 대신 세그먼트 배열(또는 HTML-safe 마크업)로 확장하고, 서식이 없는 셀은 기존처럼 일반 텍스트로 처리한다.
3. **렌더링 반영** (`src/components/SheetSections.tsx`)
   - 리스트 아이템 렌더링 시 세그먼트별로 `<strong>`을 적용해 볼드 구간만 굵게 표시한다.
   - 기존 하이픈 제거, `toItems` 분리 로직, 불릿/레이아웃은 그대로 유지한다.
4. **범위**
   - 모든 시트 연동 섹션(배경/진행과정/성과 및 인사이트, 프로젝트 + Experience 상세)에 동일하게 적용된다. J5뿐 아니라 어떤 셀이든 볼드 서식이 연동된다.
   - 10초 자동 새로고침(refetchInterval)이 그대로 적용되므로 시트에서 볼드를 바꾸면 사이트에도 자동 반영된다.

## 참고/제한
- 시트 UI에서 적용한 **부분 볼드**(셀 안 일부 단어만 굵게)까지 지원된다.
- 색상/밑줄 등 다른 서식은 이번 범위에서 제외하고 볼드만 처리한다.
- 한 가지 제약: 시트의 셀이 "수식"이 아닌 일반 텍스트여야 부분 서식이 저장된다.

## 검증
- `bunx tsc --noEmit` 타입체크
- Playwright로 `/projects/comento-convention` 상세 페이지 접속, J5 볼드 구간이 `<strong>`으로 렌더링되는지 스크린샷 확인

# Google Sheets 연동 계획

## 목표
현재 `src/lib/projects.ts`와 `src/lib/experiences.ts`에 하드코딩된 포트폴리오 데이터를 Google Sheets에서 읽어오도록 연동합니다. 운영자(빌더) 계정의 Google Sheets를 사용하며, 사이트 접속 시 최신 데이터를 반영하는 실시간 읽기 방식으로 구성합니다.

## 기술 방향
- **커넥터**: Google Sheets App 커넥터(`standard_connectors`)를 사용해 빌더의 Google Sheets 계정과 연결합니다. 별도의 Lovable Cloud 활성화는 필요하지 않습니다.
- **데이터 흐름**: TanStack Start 서버 함수(`createServerFn`)에서 Google Sheets API v4를 호출해 데이터를 읽어오고, 라우트/컴포넌트에서 React Query로 소비합니다.
- **적용 범위**: Projects 목록, Experiences 목록, 그리고 각 상세 페이지 데이터를 Sheets 기반으로 전환합니다. About 섹션의 정적 이력 데이터는 이번 단계에서 그대로 둡니다.

## 단계

### 1. 커넥터 연결
- `standard_connectors--list_app_connectors`로 `google_sheets` 커넥터 ID를 확인합니다.
- `standard_connectors--connect`를 호출해 빌더의 Google Sheets 계정을 연결합니다.
- 연결 후 `GOOGLE_SHEETS_API_KEY` 등 시크릿이 주입되는지 확인합니다.

### 2. Google Sheets 템플릿 준비
- 새 스프레드시트를 만들고 `Projects`, `Experiences` 두 시트를 추가합니다.
- 각 시트에 현재 `src/lib/projects.ts`, `src/lib/experiences.ts`의 필드를 컬럼으로 매핑합니다.
  - Projects: slug, title, sub, period, contribution, tags(쉼표 구분), skills, linkUrl, overview, role(여러 줄), outcome(여러 줄), images(쉼표 구분 URL)
  - Experiences: slug, title, place, period, blurb, overview, role(여러 줄), outcome(여러 줄), images(쉼표 구분 URL), pdfUrl, pdfLabel
- 기존 데이터를 시트에 복사합니다.

### 3. 서버 함수 작성
- `src/lib/sheets.functions.ts`를 생성합니다.
- `getProjectsFromSheets()`와 `getExperiencesFromSheets()` 서버 함수를 만듭니다.
- `process.env.GOOGLE_SHEETS_API_KEY`와 `process.env.LOVABLE_API_KEY`를 사용해 Lovable 커넥터 게이트웨이를 호출합니다.
- 게이트웨이 경로: `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/{spreadsheetId}/values/{range}`
- 반환된 2차원 배열을 헤더 행을 기준으로 객체 배열로 변환합니다.
- JSON 문자열로 들어간 배열 필드(role, outcome, tags, images)는 파싱 처리합니다.

### 4. 클라이언트 데이터 연결
- `src/lib/projects.ts`와 `src/lib/experiences.ts`의 정적 `PROJECTS`/`EXPERIENCES` 배열을 제거하거나 폴백용으로만 남깁니다.
- `src/routes/index.tsx`의 `Projects`와 `Experience` 섹션에서 서버 함수를 호출해 데이터를 가져옵니다.
- `src/routes/projects.$slug.tsx`와 `src/routes/experiences.$slug.tsx`에서 slug 기준으로 상세 데이터를 조회합니다.
- React Query `useSuspenseQuery` + `ensureQueryData` 패턴을 사용하고, 로딩/에러 상태를 처리합니다.

### 5. 타입 및 안정성
- `Project`와 `Experience` 타입은 그대로 유지하되, Sheets에서 읽어온 원본 데이터를 검증/변환하는 Zod 스키마를 추가합니다.
- 필수 필드 누락 시 폴백 데이터를 사용하거나 빈 상태를 표시합니다.

### 6. 테스트 및 검증
- `bun run build`로 타입과 빌드를 확인합니다.
- 미리보기에서 Projects/Experiences 목록과 상세 페이지가 정상적으로 렌더링되는지 확인합니다.
- Google Sheets 셀을 수정 후 페이지를 새로고침하여 변경 사항이 반영되는지 확인합니다.

## 산출물
- `src/lib/sheets.functions.ts`
- 수정된 `src/lib/projects.ts`, `src/lib/experiences.ts`
- 수정된 `src/routes/index.tsx`, `src/routes/projects.$slug.tsx`, `src/routes/experiences.$slug.tsx`
- Google Sheets 템플릿 구조 안내

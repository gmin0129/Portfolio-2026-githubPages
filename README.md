# Notion Portfolio Prototype

연결된 노션에서 'portfolio' 페이지에 있는 내용들로 웹페이지 포트폴리오 기획하고 싶으니까 프로토타입을 하나 만들어줘.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://yunjimin-portfolio-2026.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7af69fa8-433e-470d-990e-c12e96027377).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## GitHub Pages 배포

이 프로젝트는 `Portfolio-2026-githubPages` 프로젝트 페이지 저장소에
배포되도록 설정되어 있습니다.

1. GitHub에서 공개 저장소 `Portfolio-2026-githubPages`를 만듭니다.
2. 이 프로젝트를 해당 저장소의 `main` 브랜치에 올립니다.
3. 저장소의 **Settings → Pages → Build and deployment → Source**에서
   **GitHub Actions**를 선택합니다.
4. `Deploy to GitHub Pages` 작업이 끝나면
   <https://gmin0129.github.io/Portfolio-2026-githubPages/>에서 확인합니다.

GitHub Pages는 정적 호스팅이므로 Lovable의 Notion/Google Sheets 서버 연동은
실행되지 않습니다. 배포본에서는 저장소에 포함된 정적 포트폴리오 데이터를
사용합니다.

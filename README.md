# Claude Code Class — Landing Page Template

5일 Claude Code 클래스 랜딩 페이지 템플릿. React + Vite + Tailwind 기반.

## 빠른 시작

```bash
pnpm install
pnpm dev
```

→ http://localhost:3000

## 커스터마이즈

모든 텍스트/콘텐츠는 `src/config/site.config.ts` 한 파일에 모여 있습니다.
재사용 시 이 파일만 수정하면 됩니다.

수정 가능한 항목:
- `site` — 사이트 이름, 폴더명, git clone URL
- `hero` — 히어로 섹션 텍스트
- `whyNow` — "왜 지금" 카드 3개
- `whatWeLearn` — 학습 데모 탭 3개
- `curriculum` — Day별 커리큘럼 (개수 가변)
- `oneMoreThing` — 추가 도전 카드 2개
- `faq` — FAQ 항목 (개수 가변)
- `footer` — 푸터 카피
- `reference` — 추천 레퍼런스 아티클 (개수 가변)

## 빌드

```bash
pnpm build      # dist/ 생성
pnpm preview    # 빌드 결과 미리보기
pnpm lint       # 타입 체크
```

## 배포

Vercel 추천:
```bash
vercel
```

## 기술 스택

- React 19
- Vite 6
- Tailwind CSS 4
- motion (애니메이션)
- lucide-react (아이콘)
- TypeScript

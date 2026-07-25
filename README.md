# 인생에 악기 하나쯤은 다룰 줄 알아야지 🎻

설문 + 청음·리듬·절대음감 테스트로 나에게 맞는 악기를 찾아주는 웹앱.

- 악기 **189종** (트랙 포함 추천 슬롯 ~260개) — 바이올린부터 니켈하르파·테오르보·싱잉볼·뮤지컬 쏘까지
- 위장형 설문 40여 문항 + Web Audio 귀 테스트 5종
- 게이트(침·굳은살·소음·예산) → 적성(청음·리듬) → 취향(장르·바이브) 3단 스코어링
- 결과: 운명의 악기 1 + 후보 2 + 연주자 궁합 + 와일드카드 + 아차상

## 구조
- `public/index.html` — 앱 전체 (UI·엔진·테스트 인라인)
- `public/data/*.js` — 악기 DB (계열별 9파일) + 장르
- `SCHEMA.md` / `QUESTIONS.md` — 데이터 스키마·문항 설계 문서
- `test.html` — DB 통합 검증 페이지 (로컬용)

## 배포
Cloudflare Workers (assets-only). `wrangler.toml`의 `[assets] directory=./public`.
GitHub 연결 시 push → 자동 배포 (Workers Builds).

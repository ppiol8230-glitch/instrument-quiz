# 인생에 악기 하나쯤은 다룰 줄 알아야지 🎻

설문 + 청음·리듬·절대음감 테스트로 나에게 맞는 악기를 찾아주는 웹앱.

- 악기 **189종** (트랙 포함 추천 슬롯 ~260개) — 바이올린부터 니켈하르파·테오르보·싱잉볼·뮤지컬 쏘까지
- 위장형 설문 ~28문항(v4 압축) + Web Audio 귀 테스트 5종
- 게이트(침·굳은살·소음·예산) → 적성(청음·리듬) → 취향(장르·바이브) 3단 스코어링
- 결과: 운명의 악기 1 + 후보 2 + 연주자 궁합 + 와일드카드 + 아차상
- **한국어 / English 2개 언어** — 헤더 토글, 첫 진입은 저장된 선택 > `?l=` > 접속 국가(KR만 한국어) > 브라우저 언어

## 구조
- `public/index.html` — 앱 전체 (UI·엔진·테스트 인라인)
- `public/data/*.js` — 악기 DB (계열별 9파일) + 장르
- `public/i18n/en_*.js` — **영어 표시 오버레이**(계열별 9파일 + `en_misc.js`). 이름·계열·음색설명·각오할것·트랙·가이드만 담는다
- `SCHEMA.md` / `QUESTIONS.md` — 데이터 스키마·문항 설계 문서
- `test.html` — DB 통합 검증 페이지 (로컬용)

## 다국어 규칙 (중요)
스코어링 엔진은 **언제나 한국어 원본 필드만** 읽는다 — `family`·`name`·`roles`·`sound.tone`·`genres`·`ensemble` 정규식이 전부 한국어이기 때문.
영어는 표시 직전에 접근자(`iName`/`iFam`/`iToneDesc`/`iCaveats`/`iGuide`/`dName`)로 덧씌운다.
그래서 **같은 답변이면 두 언어의 추천 결과가 완전히 동일**하다(랜덤 500 프로필로 검증). 오버레이에 없는 항목은 한국어로 자연 폴백.
새 악기를 추가하면 `public/data/`와 `public/i18n/` 양쪽에 같은 id로 넣을 것.

## 배포
Cloudflare Workers (assets-only). `wrangler.toml`의 `[assets] directory=./public`.
GitHub 연결 시 push → 자동 배포 (Workers Builds).

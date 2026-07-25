// 악기 추천 설문 DB — [민속 목관] 배치 (20종)
// 스키마: SCHEMA.md v1 준수. 장르는 data/genres.js canonical 26개만 사용.

const INST_WOODWIND_FOLK = [

  // ─────────────────────────────────────────────
  // 1. 틴휘슬 — 전체 DB 최저가 진입 포지션
  // ─────────────────────────────────────────────
  {
    id: "tin_whistle",
    name: "틴휘슬",
    aka: ["tin whistle", "페니휘슬", "penny whistle", "아이리시 휘슬"],
    family: "민속 목관·피들형 휘슬(핍플 플루트)",
    desc: "6홀 금속 관에 리코더식 취구(핍플)가 달린 아일랜드 민속 관악기. 불면 바로 소리가 나고, 만원대에 시작하는 사실상 전체 악기 중 최저가 입문 포지션.",

    sound: {
      tone: ["맑음", "반짝임", "소박함", "카랑카랑"],
      toneDesc: "맑고 카랑카랑한 고음. 저가 모델일수록 숨소리가 섞인 소박한 톤, 상급기는 유리알처럼 또렷하다. 아이리시 지그·릴의 그 소리.",
      volume: 3,
      sustain: 1,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 5,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["멜로디"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손 부담 사실상 없음.",
      embouchure: 0,
      breath: 1,
      weight: 1,
      weightDesc: "수십 그램. 주머니·필통에 들어간다.",
      posture: "서서도 앉아서도 부담 없는 자세",
      postureRisk: [],
      handSize: "D조 표준 사이즈는 손 작아도 무리 없음",
    },

    cost: {
      entryKRW: [10000, 40000],
      entryDesc: "Generation·Feadóg·Clarke 같은 정통 브랜드가 1~2만원대. 전체 DB에서 가장 싸게 '진짜 악기'를 시작할 수 있는 포지션.",
      midKRW: [50000, 300000],
      running: "소모품 없음. 유지비 0에 수렴.",
    },
    practical: {
      portability: 5,
      noise: 3,
      apartmentOk: "고음이 얇게 뚫는 편. 낮 연습은 무난, 밤엔 창문 닫고 짧게.",
      selfLearn: 5,
      lessonKR: 2,
      entryBarrier: 1,
      quickReward: 5,
      maintenance: 1,
      lessonDesc: "국내 레슨은 드물지만 아이리시 음악 동호회·온라인 강좌(영어권은 무한대)로 충분히 커버.",
    },

    vibe: {
      tags: ["루츠·어쿠스틱", "소박한", "자유로운", "귀여운"],
      trendy: 2,
      rarityKR: 3,
      showOff: 2,
    },

    genres: { main: ["켈틱·아이리시"], sub: ["포크", "영화·게임 OST", "북유럽 민속"] },

    kinship: {
      easyFrom: ["리코더"],
      sameTuning: [],
      leadsTo: ["로우휘슬", "아이리시 플루트", "일리언 파이프스"],
    },
    ensemble: ["아이리시 세션", "포크 밴드"],

    caveats: [
      "만원대 악기라 '싼 게 문제'가 아니라 '너무 쉬워 보여서' 금방 안 불게 되는 게 최대 리스크",
      "잘 부는 것과 소리 내는 것의 간극이 큼 — 컷·롤 같은 아이리시 장식음이 진짜 본론",
      "고음역은 생각보다 날카로워서 가족 반응이 갈림",
    ],
    funFacts: ["타이타닉 OST의 그 애절한 관악 소리 상당 부분이 휘슬 계열이다", "아일랜드에선 초등학생 국민 악기"],
  },

  // ─────────────────────────────────────────────
  // 2. 로우휘슬
  // ─────────────────────────────────────────────
  {
    id: "low_whistle",
    name: "로우휘슬",
    aka: ["low whistle", "로우 D 휘슬"],
    family: "민속 목관·피들형 휘슬(핍플 플루트)",
    desc: "틴휘슬을 한 옥타브 낮춘 대형 휘슬. 길이 60cm 안팎의 긴 관에서 나오는 허스키하고 서정적인 저음이 매력. 영화음악 감성의 대명사.",

    sound: {
      tone: ["애수", "숨소리 섞임", "낮고 깊음", "서늘함"],
      toneDesc: "숨소리가 섞인 허스키한 저음. 틴휘슬이 새소리라면 로우휘슬은 바람 소리. 타이타닉·브레이브하트풍 영화음악 감성의 원천.",
      volume: 2,
      sustain: 1,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 4,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["멜로디"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손끝 통증은 없지만 홀 간격이 넓어 손가락 스트레칭이 필요.",
      embouchure: 0,
      breath: 2,
      weight: 1,
      weightDesc: "가볍지만 길이 60cm급이라 가방은 필요.",
      posture: "부담 없는 자세. 다만 팔을 넓게 벌리는 그립",
      postureRisk: ["손목"],
      handSize: "홀 간격이 넓어 손 작으면 피퍼스 그립(손가락 눕히기) 적응 필요 — 명확한 관문",
    },

    cost: {
      entryKRW: [100000, 300000],
      entryDesc: "Dixon 폴리머 10만원대가 정석 입문. Howard·Kerry 등 중급 20~40만. 대부분 직구·구매대행.",
      midKRW: [400000, 1000000],
      running: "소모품 없음.",
    },
    practical: {
      portability: 4,
      noise: 2,
      apartmentOk: "저음이라 민폐도 낮은 편. 아파트 밤 연습도 비교적 안전권.",
      selfLearn: 4,
      lessonKR: 1,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 1,
      lessonDesc: "국내 전문 레슨은 사실상 없음. 틴휘슬 경험+영어권 강좌로 넘어오는 경로가 표준.",
    },

    vibe: {
      tags: ["서정적", "루츠·어쿠스틱", "명상적", "낭만적"],
      trendy: 2,
      rarityKR: 4,
      showOff: 3,
    },

    genres: { main: ["켈틱·아이리시"], sub: ["영화·게임 OST", "뉴에이지", "포크"] },

    kinship: {
      easyFrom: ["틴휘슬", "리코더", "플루트"],
      sameTuning: ["틴휘슬"],
      leadsTo: ["아이리시 플루트", "일리언 파이프스"],
    },
    ensemble: ["아이리시 세션", "포크 밴드", "영화음악 세션"],

    caveats: [
      "손가락 벌림이 진입 장벽의 8할 — 손 작으면 구매 전 홀 간격 확인 필수",
      "틴휘슬부터 시작하는 게 정석 코스(운지 동일, 감각 이식됨)",
      "국내 실물 만져볼 매장이 거의 없어 직구 의존",
    ],
    funFacts: ["1970년대 피니언 오버튼이 대량 보급한, 민속악기치고 아주 젊은 악기다"],
  },

  // ─────────────────────────────────────────────
  // 3. 오카리나
  // ─────────────────────────────────────────────
  {
    id: "ocarina",
    name: "오카리나",
    aka: ["ocarina"],
    family: "민속 목관·폐관식 기명악기(베슬 플루트)",
    desc: "흙을 구워 만든 새 모양 폐관 악기. 리코더처럼 불면 바로 소리가 나고, 운지를 잡으면 음정이 그대로 나오는 구조라 음감 부담이 적다. 한국에 학원·교재 인프라가 의외로 탄탄한 생활악기.",

    sound: {
      tone: ["둥글둥글", "따뜻함", "몽환", "소박함"],
      toneDesc: "배음이 적은 둥글고 순한 소리. 새소리와 물소리 사이. 젤다의 전설로 각인된 그 몽환적인 톤.",
      volume: 2,
      sustain: 1,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 3,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["멜로디"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손 부담 없음.",
      embouchure: 0,
      breath: 1,
      weight: 1,
      weightDesc: "손바닥 크기. 목걸이형도 있다.",
      posture: "부담 없는 자세",
      postureRisk: [],
      handSize: "12홀 표준형은 성인 손이면 무난. 아이는 소형 6홀부터",
    },

    cost: {
      entryKRW: [10000, 50000],
      entryDesc: "국산 노블·오카리나하우스 등 12홀 도자기 입문기가 2~5만원대. 플라스틱은 만원 아래도.",
      midKRW: [80000, 300000],
      running: "소모품 없음. 떨어뜨리면 깨지는 게 유일한 리스크.",
    },
    practical: {
      portability: 5,
      noise: 2,
      apartmentOk: "음량이 작아 아파트에서도 관대한 편. 고음만 조심.",
      selfLearn: 5,
      lessonKR: 4,
      entryBarrier: 1,
      quickReward: 5,
      maintenance: 1,
      lessonDesc: "문화센터·평생학습관 단골 강좌. 국내 교재·인강 풍부 — 이 배치에서 국악기 다음으로 레슨 구하기 쉽다.",
    },

    vibe: {
      tags: ["소박한", "귀여운", "명상적", "루츠·어쿠스틱"],
      trendy: 2,
      rarityKR: 2,
      showOff: 2,
    },

    genres: { main: ["영화·게임 OST"], sub: ["포크", "뉴에이지", "트로트·가요", "CCM·교회음악"] },

    kinship: {
      easyFrom: ["리코더", "틴휘슬"],
      sameTuning: [],
      leadsTo: ["트리플 오카리나", "틴휘슬"],
    },
    ensemble: ["오카리나 앙상블(동호회 활발)", "문화센터 합주"],

    tracks: [
      { id: "single", label: "싱글(12홀)", genres: ["포크", "영화·게임 OST"], note: "표준. 음역 1옥타브 반 남짓." },
      { id: "multi", label: "더블·트리플", genres: ["영화·게임 OST", "뉴에이지"], note: "관 2~3개로 음역 확장. 무대·전공자 지향." },
    ],

    caveats: [
      "음역이 좁아(싱글 기준 약 1.5옥타브) 부를 수 있는 곡에 상한이 있음",
      "숨 세기로 음정이 흔들려서 '쉽게 소리 나지만 정확히 부는 건 별개'",
      "도자기라 낙하 파손 주의",
    ],
    funFacts: ["젤다의 전설 '시간의 오카리나' 덕에 게임 팬 입문이 유독 많다", "이탈리아어로 '작은 거위'라는 뜻"],
  },

  // ─────────────────────────────────────────────
  // 4. 팬플루트
  // ─────────────────────────────────────────────
  {
    id: "pan_flute",
    name: "팬플루트",
    aka: ["pan flute", "panpipes", "나이(루마니아)"],
    family: "민속 목관·다관 플루트",
    desc: "길이가 다른 관 여러 개를 묶어 관 하나당 한 음을 내는 악기. 병 입구를 불듯 관 끝에 입김을 스치는 방식. 루마니아·안데스 두 갈래 전통이 있고, 한국에선 게오르그 잠피르풍 무드음악으로 익숙하다.",

    sound: {
      tone: ["숨소리 섞임", "애수", "몽환", "부드러움"],
      toneDesc: "숨소리가 절반쯤 섞인 아련한 소리. '외로운 양치기'의 그 애수. 비브라토를 걸면 노래하는 듯 운다.",
      volume: 3,
      sustain: 1,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 2,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["멜로디"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손 부담 없음. 관을 두 손으로 받쳐 들 뿐.",
      embouchure: 1,
      breath: 2,
      weight: 2,
      weightDesc: "22관 기준 가방 하나. 휴대 무난.",
      posture: "고개를 좌우로 움직이며 관을 찾는 동작이 목에 약간 부담",
      postureRisk: ["목어깨"],
      handSize: "무관",
    },

    cost: {
      entryKRW: [50000, 200000],
      entryDesc: "연습용 저가는 5만원 안팎부터, 제대로 된 루마니아식 곡면 22관은 15~40만. 저가 직관형은 음정이 엉망인 경우가 많아 주의.",
      midKRW: [300000, 1000000],
      running: "관 내부 밀랍(음정 조율용) 보정 정도.",
    },
    practical: {
      portability: 4,
      noise: 3,
      apartmentOk: "중간 음량. 낮 연습 무난.",
      selfLearn: 3,
      lessonKR: 2,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 2,
      lessonDesc: "국내 소수 전문 레슨·동호회 존재(무드음악 세대 팬층). 인강은 한국어 자료도 있으나 얇음.",
    },

    vibe: {
      tags: ["낭만적", "이국적", "서정적", "유행과 동떨어진"],
      trendy: 1,
      rarityKR: 3,
      showOff: 3,
    },

    genres: { main: ["라틴"], sub: ["뉴에이지", "영화·게임 OST", "CCM·교회음악", "트로트·가요"] },

    kinship: {
      easyFrom: ["리코더", "틴휘슬"],
      sameTuning: [],
      leadsTo: ["케나"],
    },
    ensemble: ["안데스 민속 앙상블", "교회 특송", "무드음악 세션"],

    tracks: [
      { id: "romanian", label: "루마니아식(나이)", genres: ["뉴에이지", "발칸·클레즈머·집시"], note: "곡면 배열. 잠피르 스타일. 반음은 관 기울이기로." },
      { id: "andean", label: "안데스식(삼포냐)", genres: ["라틴"], note: "두 줄 분리 배열. 엘 콘도 파사의 그 소리." },
    ],

    caveats: [
      "음 하나하나는 쉽게 나지만 도약(관 건너뛰기)이 많은 곡은 고개 이동이 곡예가 됨",
      "반음 처리는 관을 기울여 내는 기술이라 조성 있는 곡에서 난도 급상승",
      "저가 악기 음정 복불복이 심한 계열",
    ],
    funFacts: ["그리스 신화의 목신 판(Pan)의 피리가 어원", "80~90년대 한국 다방·경음악 전성기의 주역"],
  },

  // ─────────────────────────────────────────────
  // 5. 케나
  // ─────────────────────────────────────────────
  {
    id: "quena",
    name: "케나",
    aka: ["quena", "께나"],
    family: "민속 목관·노치 플루트(안데스)",
    desc: "관 끝에 U자 홈(노치)을 파고 입김을 걸쳐 부는 안데스 세로 피리. 리코더 같은 취구가 없어 첫 소리부터 스스로 각을 잡아야 한다. 엘 콘도 파사의 그 바람 소리.",

    sound: {
      tone: ["숨소리 섞임", "애수", "거칢", "맑음"],
      toneDesc: "바람이 절벽을 스치는 듯한 거친 숨소리와 맑은 심지가 공존. 셈여림에 따라 표정이 극적으로 변한다.",
      volume: 3,
      sustain: 1,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 4,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["멜로디"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손 부담 없음.",
      embouchure: 2,
      breath: 2,
      weight: 1,
      weightDesc: "대나무 관 하나. 완전 휴대형.",
      posture: "부담 없는 자세",
      postureRisk: [],
      handSize: "표준 G조 케나는 홀 간격이 다소 넓은 편",
    },

    cost: {
      entryKRW: [30000, 120000],
      entryDesc: "국내 유통 드묾 — 직구·핸드메이드 공방 기준. 대나무 입문기 3~7만, 연주용 10만대.",
      midKRW: [150000, 500000],
      running: "소모품 없음.",
    },
    practical: {
      portability: 5,
      noise: 3,
      apartmentOk: "중간 음량. 낮 연습 무난.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 1,
      lessonDesc: "국내 레슨 사실상 없음. 스페인어·영어권 유튜브가 주 교재.",
    },

    vibe: {
      tags: ["이국적", "루츠·어쿠스틱", "자유로운", "서정적"],
      trendy: 1,
      rarityKR: 4,
      showOff: 3,
    },

    genres: { main: ["라틴"], sub: ["포크", "명상·사운드힐링"] },

    kinship: {
      easyFrom: ["틴휘슬", "리코더", "플루트"],
      sameTuning: [],
      leadsTo: ["샤쿠하치", "팬플루트"],
    },
    ensemble: ["안데스 민속 앙상블(케나+삼포냐+차랑고)"],

    caveats: [
      "노치에 입김 각을 맞추는 첫 관문에서 1~2주는 바람 소리만 남",
      "샤쿠하치·네이만큼은 아니어도 '불면 소리 나는' 악기는 아님",
      "국내 입수·레슨 인프라가 얇아 자립심 필수",
    ],
    funFacts: ["잉카 시대 이전부터 쓰인 수천 년 역사의 악기", "사이먼 앤 가펑클 'El Condor Pasa'로 세계에 알려졌다"],
  },

  // ─────────────────────────────────────────────
  // 6. 샤쿠하치 — 소리 내기 지옥
  // ─────────────────────────────────────────────
  {
    id: "shakuhachi",
    name: "샤쿠하치",
    aka: ["shakuhachi", "尺八", "척팔"],
    family: "민속 목관·노치 플루트(일본)",
    desc: "일본 대나무 종적. 비스듬히 깎인 취구에 입김을 걸치는데, 각도 몇 도 차이로 소리가 나고 안 나고가 갈린다. 첫 소리까지 몇 주가 걸리는 것으로 악명 높은 대신, 숨소리·음정의 미세한 흔들림까지 전부 표현이 되는 깊이가 있다.",

    sound: {
      tone: ["숨소리 섞임", "낮고 깊음", "명상적", "먹먹함"],
      toneDesc: "숨과 소리의 경계가 없는 톤. 바람 소리, 갈라지는 소리(무라이키)까지 음악의 일부. 선(禪) 수행 음악의 그 소리.",
      volume: 2,
      sustain: 2,
    },

    play: {
      pitchFixed: "F3",
      fastPlay: 2,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["멜로디", "독주"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손 부담 없음.",
      embouchure: 3,
      breath: 2,
      weight: 1,
      weightDesc: "대나무 관 하나. 휴대 완벽.",
      posture: "정좌 전통이 있으나 의자 연주 무방. 고개 숙임(메리) 기법으로 목 사용 많음",
      postureRisk: ["목어깨"],
      handSize: "홀 5개뿐이라 손 크기 부담은 적음",
    },

    cost: {
      entryKRW: [80000, 400000],
      entryDesc: "플라스틱 입문기(샤쿠하치 유우 등) 10만원 안팎 직구가 정석. 대나무 수제는 수십만~수백만으로 뜀.",
      midKRW: [500000, 3000000],
      running: "소모품 없음. 대나무는 습도 관리(갈라짐 방지).",
    },
    practical: {
      portability: 5,
      noise: 2,
      apartmentOk: "음량 자체는 작아 아파트 무난 — 문제는 소리가 아예 안 나는 기간.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 5,
      quickReward: 1,
      maintenance: 2,
      lessonDesc: "국내 지도자 극소수. 일본·영어권 온라인 강좌 의존. 첫 소리 관문은 독학이 특히 고통.",
    },

    vibe: {
      tags: ["명상적", "고풍스러운", "장인 정신", "컬트적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["동아시아 전통"], sub: ["명상·사운드힐링", "영화·게임 OST", "재즈"] },

    kinship: {
      easyFrom: ["케나", "네이", "대금"],
      sameTuning: [],
      leadsTo: ["혼쿄쿠(독주 수행곡) 세계"],
    },
    ensemble: ["산쿄쿠(고토·샤미센 합주)", "독주가 본령"],

    caveats: [
      "이 배치의 '소리 내기 지옥' 담당 — 첫 소리까지 몇 주, 안정된 소리까지 몇 달을 각오할 것",
      "5홀+고개 각도로 반음을 만드는 구조라 음정이 완전히 연주자 책임(F3)",
      "국내 악기 입수·레슨 모두 좁은 문",
    ],
    funFacts: ["에도 시대 코무소(허무승)들이 삿갓을 쓰고 불며 탁발한 수행 도구였다", "이름은 표준 길이 1척 8촌(약 54.5cm)에서 왔다"],
  },

  // ─────────────────────────────────────────────
  // 7. 단소
  // ─────────────────────────────────────────────
  {
    id: "danso",
    name: "단소",
    aka: ["danso", "短簫"],
    family: "국악 관악·종적",
    desc: "한국의 세로 피리. 학교 음악 시간의 그 악기지만, 제대로 불면 정악의 단아한 소리가 나온다. 국악 관악 입문의 표준 관문이자 최저가 국악기.",

    sound: {
      tone: ["맑음", "소박함", "단아함", "애수"],
      toneDesc: "가늘고 단정한 소리. 요성(농음)을 걸면 단번에 국악의 호흡이 된다.",
      volume: 2,
      sustain: 1,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 3,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["멜로디"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손 부담 없음.",
      embouchure: 2,
      breath: 1,
      weight: 1,
      weightDesc: "필통 사이즈. 휴대 완벽.",
      posture: "부담 없는 자세",
      postureRisk: [],
      handSize: "무관 — 지공 5개(뒤 1개 포함)뿐",
    },

    cost: {
      entryKRW: [5000, 50000],
      entryDesc: "플라스틱 교육용 5천원~1만원, 대나무 입문기 3~5만. 틴휘슬과 함께 DB 최저가권.",
      midKRW: [80000, 300000],
      running: "소모품 없음.",
    },
    practical: {
      portability: 5,
      noise: 2,
      apartmentOk: "음량 작아 아파트 무난.",
      selfLearn: 4,
      lessonKR: 4,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 1,
      lessonDesc: "국악학원·문화센터·방과후 수업까지 접근성 좋음. 교재도 국정 수준으로 풍부.",
    },

    vibe: {
      tags: ["소박한", "고풍스러운", "명상적", "유행과 동떨어진"],
      trendy: 1,
      rarityKR: 1,
      showOff: 1,
    },

    genres: { main: ["국악·사물놀이"], sub: ["명상·사운드힐링"] },

    kinship: {
      easyFrom: ["리코더", "틴휘슬"],
      sameTuning: [],
      leadsTo: ["소금", "대금", "퉁소"],
    },
    ensemble: ["정악 합주(생소병주 등)", "국악 동호회"],

    caveats: [
      "학교에서 다들 '소리 안 나던' 기억 그대로 — U자 취구에 입김 각 잡기가 첫 관문(리코더보단 어렵고 대금보단 쉬움)",
      "'쉬운 악기' 이미지 때문에 오히려 진지하게 가르치는 곳을 골라야 함",
      "음역·레퍼토리가 정악 중심으로 좁은 편",
    ],
    funFacts: ["국악기 중 유일하게 거의 전 국민이 한 번은 만져본 악기"],
  },

  // ─────────────────────────────────────────────
  // 8. 소금
  // ─────────────────────────────────────────────
  {
    id: "sogeum",
    name: "소금",
    aka: ["sogeum", "小笒"],
    family: "국악 관악·횡적",
    desc: "대금의 동생뻘인 작은 가로 피리. 청공(갈대 막) 없이 맑고 높은 소리를 내며, 국악 관현악에서 피콜로 포지션. 대금보다 가볍게 국악 가로 피리에 입문하는 경로.",

    sound: {
      tone: ["맑음", "카랑카랑", "반짝임", "화려함"],
      toneDesc: "높고 맑게 뚫고 나오는 소리. 국악관현악의 최고음역을 담당하는 반짝임.",
      volume: 4,
      sustain: 1,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 4,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["멜로디"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손 부담 없음.",
      embouchure: 2,
      breath: 2,
      weight: 1,
      weightDesc: "40cm 안팎. 휴대 완벽.",
      posture: "가로로 드는 자세라 목을 왼쪽으로 트는 부담이 약간",
      postureRisk: ["목어깨"],
      handSize: "대금보다 지공 간격이 좁아 손 작아도 무난",
    },

    cost: {
      entryKRW: [30000, 200000],
      entryDesc: "플라스틱 입문기 3만원대, 대나무 연습용 10~20만.",
      midKRW: [250000, 700000],
      running: "소모품 없음.",
    },
    practical: {
      portability: 5,
      noise: 4,
      apartmentOk: "고음이 잘 뚫어 아파트 밤 연습은 무리. 낮 짧게 or 연습실.",
      selfLearn: 3,
      lessonKR: 3,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 1,
      lessonDesc: "국악학원에서 대금과 묶어 가르치는 곳이 많음. 단독 강좌는 대금보다 적음.",
    },

    vibe: {
      tags: ["고풍스러운", "맑은", "소박한"],
      trendy: 1,
      rarityKR: 3,
      showOff: 2,
    },

    genres: { main: ["국악·사물놀이"], sub: ["영화·게임 OST"] },

    kinship: {
      easyFrom: ["플루트", "단소", "디지"],
      sameTuning: [],
      leadsTo: ["대금"],
    },
    ensemble: ["국악관현악", "국악 동호회 합주"],

    caveats: [
      "가로 피리 공통의 첫 관문 — 취구에 입김 각 잡기(플루트 경험자는 반나절, 처음이면 1~2주)",
      "고음 악기라 연습 소음 민원 리스크가 단소보다 확실히 높음",
      "독주 레퍼토리가 대금보다 얇아 결국 대금으로 넘어가는 사람이 많음",
    ],
    funFacts: ["신라 삼죽(대금·중금·소금)의 막내로 천 년 넘게 이어진 편성"],
  },

  // ─────────────────────────────────────────────
  // 9. 대금
  // ─────────────────────────────────────────────
  {
    id: "daegeum",
    name: "대금",
    aka: ["daegeum", "大笒", "젓대"],
    family: "국악 관악·횡적",
    desc: "청공(갈대 속막)이 떨리며 특유의 갈라지는 울림을 내는 한국의 대형 가로 피리. 국악 관악의 간판. 관이 길고 지공이 넓어 폐활량과 팔·손가락 스트레칭을 모두 요구한다.",

    sound: {
      tone: ["숨소리 섞임", "애수", "거칢", "나무 울림"],
      toneDesc: "청이 우는 갈라진 울림이 정체성. 여린 소리는 한숨처럼, 센 소리는 찢어질 듯 — 다이내믹의 폭이 국악기 중 최상급.",
      volume: 4,
      sustain: 2,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 3,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 4,
      roles: ["멜로디", "독주"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손끝보다 손가락 벌림(스트레칭)이 관문.",
      embouchure: 3,
      breath: 3,
      weight: 2,
      weightDesc: "80cm급 관. 전용 가방으로 휴대는 무난.",
      posture: "고개를 왼쪽으로 크게 틀고 팔을 뻗는 자세 — 목·어깨 부담이 뚜렷",
      postureRisk: ["목어깨", "손목"],
      handSize: "지공 간격이 넓어 손 작으면 산조대금도 버거움 — 실물 확인 권장",
    },

    cost: {
      entryKRW: [100000, 400000],
      entryDesc: "플라스틱 입문기 3~5만도 있으나 청 울림 학습엔 한계. 대나무 산조대금 연습용 15~40만이 현실적 시작.",
      midKRW: [500000, 2000000],
      running: "청(갈대 막) 소모품 — 찢어지면 교체, 청 관리가 일상.",
    },
    practical: {
      portability: 4,
      noise: 4,
      apartmentOk: "청 울림이 벽을 잘 넘음. 아파트는 연습실·국악원 연습이 표준.",
      selfLearn: 2,
      lessonKR: 4,
      entryBarrier: 4,
      quickReward: 2,
      maintenance: 3,
      lessonDesc: "국악학원·문화센터·시군 국악원까지 레슨 인프라가 국악 관악 중 가장 넓음.",
    },

    vibe: {
      tags: ["고풍스러운", "장인 정신", "서정적", "무대 장악"],
      trendy: 2,
      rarityKR: 2,
      showOff: 4,
    },

    genres: { main: ["국악·사물놀이"], sub: ["영화·게임 OST", "명상·사운드힐링", "재즈"] },

    kinship: {
      easyFrom: ["소금", "플루트", "디지"],
      sameTuning: [],
      leadsTo: ["대금 산조 전공 트랙"],
    },
    ensemble: ["국악관현악", "정악 합주", "산조(장구 반주)", "퓨전국악 밴드"],

    tracks: [
      { id: "jeongak", label: "정악대금", genres: ["국악·사물놀이"], note: "궁중·풍류 음악. 관이 더 길고 호흡이 깊다." },
      { id: "sanjo", label: "산조대금", genres: ["국악·사물놀이"], note: "민속악·산조. 조금 짧고 기교 중심. 입문 표준." },
    ],

    caveats: [
      "첫 소리까지 몇 주 — 취구가 크고 관이 길어 가로 피리 중에서도 어려운 축",
      "폐활량 요구가 이 배치 최상위권(백파이프와 함께). 저음~고음(역취) 오가려면 호흡 훈련 필수",
      "청 관리(습도·파손)가 은근한 일상 노동",
    ],
    funFacts: ["삼국사기의 만파식적 설화 — '불면 적병이 물러가고 파도가 잔다'는 그 피리가 대금의 원형", "드라마·영화 OST에서 '한국적인 바람 소리'가 필요하면 십중팔구 대금"],
  },

  // ─────────────────────────────────────────────
  // 10. 피리
  // ─────────────────────────────────────────────
  {
    id: "piri",
    name: "피리",
    aka: ["piri", "觱篥", "향피리"],
    family: "국악 관악·더블리드",
    desc: "겹서(더블리드)를 입에 깊숙이 물고 부는 한국의 세로 피리. 작은 몸집에서 국악관현악 주선율을 이끄는 큰 소리가 나온다. 리드 악기 특유의 입술·호흡 압박과 서(리드) 관리가 본론.",

    sound: {
      tone: ["콧소리", "빵빵함", "애수", "거칢"],
      toneDesc: "콧소리 섞인 굵고 강한 소리. 여리게 불면 구슬프고, 세게 불면 관현악을 뚫는다. 서양 오보에보다 훨씬 육성에 가까움.",
      volume: 4,
      sustain: 2,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 3,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 4,
      roles: ["멜로디"],
    },

    body: {
      saliva: 2,
      callus: 0,
      callusDesc: "손 부담 없음.",
      embouchure: 3,
      breath: 2,
      weight: 1,
      weightDesc: "20cm대. 주머니 사이즈.",
      posture: "부담 없는 자세",
      postureRisk: [],
      handSize: "무관",
    },

    cost: {
      entryKRW: [50000, 200000],
      entryDesc: "관대+서 세트 입문가. 서(리드)는 별도 소모품이라 초기부터 여러 개 필요.",
      midKRW: [250000, 700000],
      running: "서(리드) 소모품 — 개당 몇천~몇만원, 길들이고 다듬는 관리가 일상.",
    },
    practical: {
      portability: 5,
      noise: 4,
      apartmentOk: "작은 몸집에 큰 소리. 아파트 연습은 무리, 연습실 전제.",
      selfLearn: 2,
      lessonKR: 3,
      entryBarrier: 4,
      quickReward: 2,
      maintenance: 4,
      lessonDesc: "국악학원·국악원 강좌 존재. 대금보다는 강좌 수가 적음.",
    },

    vibe: {
      tags: ["고풍스러운", "장인 정신", "무대 장악", "소박한"],
      trendy: 1,
      rarityKR: 3,
      showOff: 3,
    },

    genres: { main: ["국악·사물놀이"], sub: ["영화·게임 OST"] },

    kinship: {
      easyFrom: ["오보에", "태평소"],
      sameTuning: [],
      leadsTo: ["태평소", "생황"],
    },
    ensemble: ["국악관현악(주선율)", "정악 합주", "무속·민속악 판"],

    tracks: [
      { id: "hyang", label: "향피리", genres: ["국악·사물놀이"], note: "표준. 관현악·민속악 주력." },
      { id: "se", label: "세피리", genres: ["국악·사물놀이"], note: "가늘고 작은 소리. 가곡·줄풍류 반주용." },
    ],

    caveats: [
      "서를 입술 깊이 무는 감각과 호흡 압력 잡기까지 소리가 계속 '삑삑' — 첫 달은 인내",
      "서 상태가 곧 소리 — 리드 관리(물에 불리기·다듬기)를 즐기지 못하면 스트레스",
      "음정을 입으로 밀고 당기는 폭이 커서(서침) 음감 훈련이 함께 필요",
    ],
    funFacts: ["'피리 부는 사나이'의 그 피리와 이름만 같고 계통은 겹리드 — 오보에의 먼 친척"],
  },

  // ─────────────────────────────────────────────
  // 11. 태평소 — 소음 최상급
  // ─────────────────────────────────────────────
  {
    id: "taepyeongso",
    name: "태평소",
    aka: ["taepyeongso", "날라리", "호적", "새납"],
    family: "국악 관악·더블리드(유사 쇼음)",
    desc: "나팔 모양 동팔랑을 단 한국의 겹리드 악기. 사물놀이·풍물판을 뚫고 나오는 그 찢어지는 소리의 주인공. 야외 음악용으로 태어난 만큼 음량이 이 배치 최상급 — 연습 장소가 곧 진입 장벽이다.",

    sound: {
      tone: ["빵빵함", "거칢", "화려함", "타격감"],
      toneDesc: "사물놀이 금속 타악을 뚫고 나오는 유일한 선율. 찢어질 듯 화려하고 신명 그 자체.",
      volume: 5,
      sustain: 2,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 4,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 5,
      roles: ["멜로디", "리드"],
    },

    body: {
      saliva: 2,
      callus: 0,
      callusDesc: "손 부담 없음.",
      embouchure: 3,
      breath: 3,
      weight: 1,
      weightDesc: "30cm대. 휴대 완벽.",
      posture: "부담 없는 자세. 서서 노는 악기",
      postureRisk: [],
      handSize: "무관",
    },

    cost: {
      entryKRW: [100000, 300000],
      entryDesc: "입문 연습용 기준. 서(리드)는 소모품 별도.",
      midKRW: [300000, 1000000],
      running: "서(갈대 리드) 소모품 + 동팔랑 관리.",
    },
    practical: {
      portability: 5,
      noise: 5,
      apartmentOk: "실내 연습 자체가 불가 수준. 야외·방음 연습실·풍물패 연습장 전제.",
      selfLearn: 2,
      lessonKR: 3,
      entryBarrier: 4,
      quickReward: 3,
      maintenance: 4,
      lessonDesc: "풍물패·사물놀이 동아리 경유가 표준 루트. 국악학원 개인레슨도 있음.",
    },

    vibe: {
      tags: ["파티", "무대 장악", "자유로운", "위압적"],
      trendy: 2,
      rarityKR: 3,
      showOff: 5,
    },

    genres: { main: ["국악·사물놀이"], sub: ["영화·게임 OST", "재즈"] },

    kinship: {
      easyFrom: ["피리", "오보에"],
      sameTuning: [],
      leadsTo: ["수르나이·주르나 계열 탐구"],
    },
    ensemble: ["사물놀이·풍물패", "대취타", "퓨전국악 밴드"],

    caveats: [
      "소음 문제에서 이 배치 압도적 1위 — 연습 장소 확보가 악기 실력보다 먼저",
      "겹리드 압박+큰 호흡이라 입술·볼 근육이 만들어질 때까지 몇 달",
      "혼자보다 판(풍물패) 속에서 크는 악기 — 커뮤니티 참여가 사실상 필수",
    ],
    funFacts: ["이날치·씽씽 등 국악 크로스오버 무대의 하이라이트 담당", "옛 이름 '날라리'가 소리 그 자체를 말해준다"],
  },

  // ─────────────────────────────────────────────
  // 12. 두둑 — 아르메니아, 애수
  // ─────────────────────────────────────────────
  {
    id: "duduk",
    name: "두둑",
    aka: ["duduk", "아르메니안 두둑"],
    family: "민속 목관·더블리드(원통관)",
    desc: "살구나무 관에 넓적한 겹리드를 끼운 아르메니아 악기. 사람 목소리에 가장 가깝다는 애수의 음색으로 글래디에이터 이후 영화음악 단골. 리드는 크지만 원통관이라 소리는 부드럽고 조용한 편.",

    sound: {
      tone: ["애수", "먹먹함", "부드러움", "노래하는 듯"],
      toneDesc: "울음을 삼킨 사람 목소리 같은 소리. 세상에서 가장 슬픈 악기라는 수식이 따라다닌다.",
      volume: 3,
      sustain: 3,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 2,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 4,
      roles: ["멜로디", "드론(반주 성부)"],
    },

    body: {
      saliva: 2,
      callus: 0,
      callusDesc: "손 부담 없음.",
      embouchure: 3,
      breath: 3,
      breathDesc: "리드 저항이 커서 호흡 압력 지속이 관건. 전통 연주는 순환호흡까지 감.",
      weight: 1,
      weightDesc: "30~40cm 관. 휴대 완벽.",
      posture: "부담 없는 자세",
      postureRisk: [],
      handSize: "지공 간격 넓은 편 — 손 작으면 A조 대신 높은 조 추천",
    },

    cost: {
      entryKRW: [100000, 350000],
      entryDesc: "아르메니아 공방 직구 기준(수제 살구나무+리드 2~3개 세트). 국내 재고 유통은 거의 없음.",
      midKRW: [300000, 800000],
      running: "리드(카미시) 소모품 — 직구 조달, 개당 1~3만원대. 습도 관리 필요.",
    },
    practical: {
      portability: 5,
      noise: 3,
      apartmentOk: "중간 음량·중저음이라 관악치고 민폐 덜함. 낮 연습 가능.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 4,
      quickReward: 2,
      maintenance: 3,
      lessonDesc: "국내 레슨 사실상 없음. 영어·러시아어권 온라인 강좌 의존.",
    },

    vibe: {
      tags: ["이국적", "서정적", "명상적", "컬트적"],
      trendy: 2,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["인도·중동"], sub: ["명상·사운드힐링", "영화·게임 OST", "뉴에이지"] },

    kinship: {
      easyFrom: ["피리", "클라리넷", "오보에"],
      sameTuning: [],
      leadsTo: ["네이", "발라반(아제르바이잔)"],
    },
    ensemble: ["두둑 듀오(멜로디+담=드론)", "영화음악 세션", "월드뮤직 밴드"],

    caveats: [
      "큰 리드를 무는 입술 압박과 호흡 저항 — 첫 소리는 곧 나지만 '그 애절한 소리'까지는 오래 걸림",
      "리드 수급이 전부 직구라 끊기면 연습도 끊김(여분 상비 필수)",
      "음역 1옥타브 남짓 — 화려한 곡보다 노래하는 곡의 악기",
    ],
    funFacts: ["유네스코 인류무형문화유산", "글래디에이터·왕좌의 게임 등에서 '슬픔 전담' 악기로 섭외된다"],
  },

  // ─────────────────────────────────────────────
  // 13. 네이 — 중동
  // ─────────────────────────────────────────────
  {
    id: "ney",
    name: "네이",
    aka: ["ney", "nay", "네이 플루트"],
    family: "민속 목관·단순 사관(斜管) 플루트(중동)",
    desc: "취구랄 것이 거의 없는 갈대 관을 비스듬히 대고 부는 중동·수피 전통 악기. 샤쿠하치와 함께 '첫 소리 지옥' 양대산맥이지만, 나면 그 즉시 기도 소리 같은 숨결이 나온다.",

    sound: {
      tone: ["숨소리 섞임", "애수", "신비", "먹먹함"],
      toneDesc: "숨이 절반, 소리가 절반. 사막 바람 같은 톤으로 수피 명상 음악의 중심. 루미의 시 '갈대의 노래'가 이 악기 이야기다.",
      volume: 2,
      sustain: 2,
    },

    play: {
      pitchFixed: "F3",
      fastPlay: 2,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 5,
      improvDesc: "마캄(중동 선법) 즉흥(타크심)이 문화의 핵심.",
      roles: ["멜로디", "독주"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손 부담 없음.",
      embouchure: 3,
      breath: 2,
      weight: 1,
      weightDesc: "갈대 관 하나. 휴대 완벽.",
      posture: "고개를 살짝 기울여 무는 자세(터키식은 이 사이에 물림)",
      postureRisk: [],
      handSize: "지공 간격 넓은 편",
    },

    cost: {
      entryKRW: [50000, 250000],
      entryDesc: "터키·이집트 공방 직구 기준. 입문용 플라스틱 네이도 몇만원대에 존재. 국내 유통 거의 없음.",
      midKRW: [200000, 600000],
      running: "소모품 없음. 갈대 관 습도 관리.",
    },
    practical: {
      portability: 5,
      noise: 2,
      apartmentOk: "음량 작아 아파트 무난 — 문제는 소리가 나기까지의 기간.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 5,
      quickReward: 1,
      maintenance: 1,
      lessonDesc: "국내 지도자 극소수(수피·월드뮤직 씬). 터키어·영어권 온라인 의존.",
    },

    vibe: {
      tags: ["명상적", "이국적", "신비", "컬트적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 2,
    },

    genres: { main: ["인도·중동"], sub: ["명상·사운드힐링", "뉴에이지"] },

    kinship: {
      easyFrom: ["샤쿠하치", "케나", "플루트"],
      sameTuning: [],
      leadsTo: ["마캄·수피 음악 세계", "두둑"],
    },
    ensemble: ["수피 세마 의식 음악", "중동 앙상블(우드·카눈과)"],

    caveats: [
      "샤쿠하치급 '첫 소리 지옥' — 몇 주간 바람 소리만 나는 걸 견뎌야 함(entryBarrier 5)",
      "마캄 음계는 반음보다 좁은 미분음 세계 — 서양 음감이 오히려 방해될 수 있음",
      "악기·리드·교재·레슨 전부 국내 인프라 제로에 가까움",
    ],
    funFacts: ["기원전 이집트 벽화에도 등장하는, 현존 가장 오래된 관악기 계보", "수피 회전 명상(세마)의 배경 소리가 바로 네이"],
  },

  // ─────────────────────────────────────────────
  // 14. 반수리 — 인도
  // ─────────────────────────────────────────────
  {
    id: "bansuri",
    name: "반수리",
    aka: ["bansuri", "인도 대나무 플루트"],
    family: "민속 목관·횡적(인도)",
    desc: "키 없는 인도 대나무 가로 피리. 지공을 반만 막는 미분음과 긴 글리산도로 인도 라가의 유연한 선율을 그린다. 명상적 저음의 대형 관이 본령.",

    sound: {
      tone: ["부드러움", "몽환", "숨소리 섞임", "노래하는 듯"],
      toneDesc: "무게 없는 부드러운 소리가 미끄러지듯 흐른다. 크리슈나 신의 악기라는 신화 그대로 관능적이고 명상적.",
      volume: 3,
      sustain: 2,
    },

    play: {
      pitchFixed: "F3",
      fastPlay: 4,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 5,
      improvDesc: "라가 즉흥이 음악의 본체 — 악보 문화가 거의 없음.",
      roles: ["멜로디", "독주"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손 부담 없음.",
      embouchure: 2,
      breath: 2,
      weight: 1,
      weightDesc: "연주용 E베이스 반수리는 75cm급으로 길다.",
      posture: "가로 피리 자세 + 긴 관이라 팔 뻗음이 큼",
      postureRisk: ["목어깨", "손목"],
      handSize: "본격 저음 반수리는 지공 간격이 매우 넓음 — 입문은 중간 길이(G·A조)부터",
    },

    cost: {
      entryKRW: [30000, 150000],
      entryDesc: "인도 공방 직구 기준. 대나무라 원가는 싸지만 조율 잘 된 연주용을 고르는 안목이 필요.",
      midKRW: [150000, 500000],
      running: "소모품 없음. 대나무 갈라짐 방지 오일링 정도.",
    },
    practical: {
      portability: 4,
      noise: 3,
      apartmentOk: "중간 음량. 저음 관은 민폐 덜함. 낮 연습 무난.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 1,
      lessonDesc: "국내 레슨 극소수(인도음악 씬). 영어권 온라인 구루 강좌는 풍부.",
    },

    vibe: {
      tags: ["명상적", "이국적", "자유로운", "서정적"],
      trendy: 1,
      rarityKR: 4,
      showOff: 3,
    },

    genres: { main: ["인도·중동"], sub: ["명상·사운드힐링", "뉴에이지", "재즈"] },

    kinship: {
      easyFrom: ["플루트", "디지", "소금"],
      sameTuning: [],
      leadsTo: ["인도 고전음악(힌두스타니) 세계"],
    },
    ensemble: ["타블라 반주 독주", "키르탄·요가 음악 세션", "월드뮤직 밴드"],

    caveats: [
      "가로 피리 첫 소리 관문 + 반홀 운지·미분음이라 '음정을 귀로 만드는' 훈련이 본론",
      "라가 체계를 모르면 반쪽 — 서양 악보 기대하고 오면 당황함",
      "긴 저음 관은 손 스트레칭이 로우휘슬급 이상",
    ],
    funFacts: ["하리프라사드 차우라시아가 이 소박한 목동 피리를 세계 콘서트홀 악기로 끌어올렸다"],
  },

  // ─────────────────────────────────────────────
  // 15. 디지 — 중국, 막공
  // ─────────────────────────────────────────────
  {
    id: "dizi",
    name: "디지",
    aka: ["dizi", "笛子", "중국 젓대"],
    family: "민속 목관·횡적(중국)",
    desc: "취구와 지공 사이 막공(膜孔)에 갈대 속막(디모)을 붙여 특유의 밝은 비음을 내는 중국 가로 피리. 대금의 청과 같은 원리지만 소리는 훨씬 가볍고 화려하다. 중국 민악의 간판 선율 악기.",

    sound: {
      tone: ["카랑카랑", "화려함", "콧소리", "반짝임"],
      toneDesc: "디모가 파르르 우는 밝고 쨍한 비음. 새가 지저귀는 듯한 기교(혀·손) 장식이 트레이드마크.",
      volume: 4,
      sustain: 1,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 5,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["멜로디"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손 부담 없음.",
      embouchure: 2,
      breath: 2,
      weight: 1,
      weightDesc: "40~60cm. 휴대 완벽.",
      posture: "가로 피리 자세(목 왼쪽 틀기)",
      postureRisk: ["목어깨"],
      handSize: "곡적(저음)은 지공 간격 넓음 — 입문은 방적(고음)이 편함",
    },

    cost: {
      entryKRW: [20000, 100000],
      entryDesc: "알리 직구가 사실상 표준 입수 경로 — 연습용 2~5만, 쓸만한 연주용 5~15만. 가성비는 이 배치 최상위권.",
      midKRW: [150000, 500000],
      running: "디모(막) 소모품 — 매우 저렴하지만 붙이는 요령(아교) 익혀야 함.",
    },
    practical: {
      portability: 5,
      noise: 4,
      apartmentOk: "밝고 쨍한 소리가 잘 뚫음. 아파트 밤 연습 무리.",
      selfLearn: 3,
      lessonKR: 2,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 2,
      lessonDesc: "국내 중국음악 전공자 레슨 소수 존재(서울 중심). 중국어권 인강은 무한대.",
    },

    vibe: {
      tags: ["화려함", "이국적", "자유로운"],
      trendy: 2,
      rarityKR: 4,
      showOff: 4,
    },

    genres: { main: ["동아시아 전통"], sub: ["영화·게임 OST", "뉴에이지"] },

    kinship: {
      easyFrom: ["플루트", "소금", "대금"],
      sameTuning: [],
      leadsTo: ["샤오", "대금"],
    },
    ensemble: ["중국 민악 합주", "무협 OST 세션", "월드뮤직 밴드"],

    tracks: [
      { id: "bangdi", label: "방적(북파)", genres: ["동아시아 전통"], note: "짧고 높은 관. 혀 기교 중심의 화려한 북방 스타일." },
      { id: "qudi", label: "곡적(남파)", genres: ["동아시아 전통"], note: "길고 낮은 관. 곤곡 반주의 유려한 남방 스타일." },
    ],

    caveats: [
      "디모 붙이기가 첫 실습 — 주름 잡는 요령을 못 잡으면 소리가 계속 죽음",
      "가로 피리 첫 소리 관문은 동일(1~2주)",
      "막이 젖거나 찢어지면 그 자리에서 소리가 변함 — 공연 전 리스크",
    ],
    funFacts: ["막공 유무가 디지와 서양 플루트의 결정적 차이 — 이 막 하나가 '중국 소리'를 만든다"],
  },

  // ─────────────────────────────────────────────
  // 16. 샤오 — 중국 종적
  // ─────────────────────────────────────────────
  {
    id: "xiao",
    name: "샤오",
    aka: ["xiao", "洞簫", "퉁소(중국 동소)"],
    family: "민속 목관·종적(중국)",
    desc: "디지의 화려함과 정반대에 있는 중국 세로 피리. 막 없이 어둡고 그윽한 소리를 내며, 고금(구친)과의 이중주로 문인 음악의 정취를 담당한다. 단소·퉁소와 같은 계보.",

    sound: {
      tone: ["낮고 깊음", "먹먹함", "명상적", "나무 울림"],
      toneDesc: "달빛 같은 어둑한 소리. 디지가 대낮이라면 샤오는 밤. 여백이 많은 음악에 어울린다.",
      volume: 2,
      sustain: 2,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 2,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["멜로디", "독주"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손 부담 없음.",
      embouchure: 2,
      breath: 2,
      weight: 1,
      weightDesc: "70~80cm로 길지만 가늘고 가벼움.",
      posture: "세로로 드는 편한 자세",
      postureRisk: [],
      handSize: "8공식은 지공 간격 무난, 6공 전통식은 다소 넓음",
    },

    cost: {
      entryKRW: [30000, 150000],
      entryDesc: "알리 직구 표준 — 연습용 3~8만, 연주용 대나무 10만대. 국내 재고 유통 거의 없음.",
      midKRW: [150000, 600000],
      running: "소모품 없음. 대나무 습도 관리.",
    },
    practical: {
      portability: 4,
      noise: 2,
      apartmentOk: "조용한 악기라 아파트 밤 연습도 비교적 안전권.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 4,
      quickReward: 2,
      maintenance: 1,
      lessonDesc: "국내 레슨 사실상 없음(디지 전공자에게 곁다리로 배우는 정도). 중국어권 인강 풍부.",
    },

    vibe: {
      tags: ["명상적", "고풍스러운", "학구적", "서정적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 2,
    },

    genres: { main: ["동아시아 전통"], sub: ["명상·사운드힐링", "뉴에이지"] },

    kinship: {
      easyFrom: ["단소", "디지", "샤쿠하치"],
      sameTuning: [],
      leadsTo: ["샤쿠하치", "고금 이중주 세계"],
    },
    ensemble: ["금소합주(고금+샤오)", "중국 민악 소합주"],

    caveats: [
      "취구(U/V 홈)에 입김 각 잡기가 단소보다 어렵고 샤쿠하치보다는 쉬움 — 첫 소리 1~3주",
      "긴 관+좁은 취구라 호흡 효율이 나쁘면 금방 어지러움",
      "조용한 악기라 무대 과시와는 거리가 멂 — 혼자 노는 맛의 악기",
    ],
    funFacts: ["와호장룡 OST의 그 어둑한 피리 소리", "한국 퉁소·일본 샤쿠하치와 뿌리를 공유하는 동아시아 종적 삼형제"],
  },

  // ─────────────────────────────────────────────
  // 17. 후루쓰 — 호리병 리드
  // ─────────────────────────────────────────────
  {
    id: "hulusi",
    name: "후루쓰",
    aka: ["hulusi", "葫芦丝", "호로사"],
    family: "민속 목관·프리리드(중국 윈난)",
    desc: "호리병(표주박)에 프리리드 관을 꽂은 윈난 소수민족 악기. 리드가 관 속에 내장돼 하모니카처럼 불면 바로 소리가 나고, 톤은 클라리넷을 닮은 매끈한 벨벳. 드론 관이 달려 혼자서도 배음 반주가 깔린다.",

    sound: {
      tone: ["부드러움", "몽환", "콧소리", "따뜻함"],
      toneDesc: "기름 바른 듯 매끄러운 비단 소리. 중국 여행지 배경음악의 그 톤. 호불호는 갈리지만 귀에 즉시 감긴다.",
      volume: 2,
      sustain: 3,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 3,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["멜로디"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손 부담 없음.",
      embouchure: 0,
      breath: 1,
      weight: 1,
      weightDesc: "호리병째로도 가벼움. 휴대 완벽.",
      posture: "부담 없는 자세",
      postureRisk: [],
      handSize: "무관",
    },

    cost: {
      entryKRW: [20000, 80000],
      entryDesc: "알리 직구 기준 2~5만이면 쓸만한 C조 입문기. 이 배치에서 틴휘슬·단소 다음 최저가권.",
      midKRW: [100000, 300000],
      running: "리드 내장형이라 소모품 개념 없음(리드 고장 시 수리·교체).",
    },
    practical: {
      portability: 5,
      noise: 2,
      apartmentOk: "음량 작고 부드러워 아파트 최상급 안전.",
      selfLearn: 4,
      lessonKR: 1,
      entryBarrier: 1,
      quickReward: 5,
      maintenance: 1,
      lessonDesc: "국내 레슨 거의 없음. 다만 워낙 쉬워 중국어권 인강+운지표로 독학 충분.",
    },

    vibe: {
      tags: ["이국적", "귀여운", "소박한", "명상적"],
      trendy: 1,
      rarityKR: 4,
      showOff: 2,
    },

    genres: { main: ["동아시아 전통"], sub: ["뉴에이지", "명상·사운드힐링"] },

    kinship: {
      easyFrom: ["리코더", "하모니카", "틴휘슬"],
      sameTuning: [],
      leadsTo: ["바우(巴乌)", "생황"],
    },
    ensemble: ["윈난 민속 앙상블", "독주·버스킹"],

    caveats: [
      "음역이 1옥타브+2음 수준으로 이 배치 최협소 — 부를 수 있는 곡 상한이 뚜렷",
      "특유의 매끈한 톤이 '관광지 BGM'으로 들린다는 호불호",
      "프리리드는 세게 불면 음정이 주저앉음 — 여린 호흡 유지가 요령",
    ],
    funFacts: ["이름 그대로 '호리병(葫芦)+실(丝) 같은 소리'라는 뜻", "윈난 다이족의 구애 악기였다"],
  },

  // ─────────────────────────────────────────────
  // 18. 하이랜드 백파이프 — 소음·폐활량 게이트 최상위
  // ─────────────────────────────────────────────
  {
    id: "highland_bagpipe",
    name: "하이랜드 백파이프",
    aka: ["great highland bagpipe", "스코틀랜드 백파이프"],
    family: "민속 목관·백파이프(입김 충전)",
    desc: "입으로 가죽 백을 채워 챈터+드론 3개를 동시에 울리는 스코틀랜드 군악 백파이프. 야외 행진용으로 설계된 음량(전투 신호용)이라 소음·폐활량 게이트가 전체 DB 최상위. 대신 입문은 조용한 프랙티스 챈터로 1년쯤 따로 한다.",

    sound: {
      tone: ["웅장함", "빵빵함", "위압적", "콧소리"],
      toneDesc: "드론 3개의 지속 저음 위에 챈터가 우는, 벽 같은 소리. 한 번 울리면 공간을 통째로 접수한다.",
      volume: 5,
      sustain: 5,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 4,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 1,
      improvDesc: "장식음 문법이 엄격히 규격화된 전통 — 즉흥보다 정격.",
      roles: ["멜로디", "행진 리드"],
    },

    body: {
      saliva: 2,
      salivaDesc: "입김의 습기가 백과 리드에 그대로 들어감 — 수분 관리 시스템이 따로 있을 정도.",
      callus: 0,
      callusDesc: "손 부담 없음.",
      embouchure: 2,
      breath: 3,
      breathDesc: "백 압력을 일정하게 유지하며 계속 불어넣는 지구력 — 전체 DB 폐활량 요구 최상위.",
      weight: 4,
      weightDesc: "풀세트 3~4kg를 어깨에 걸치고 팔로 백을 계속 눌러야 함.",
      posture: "서서 백을 겨드랑이에 끼고 압박 유지 — 어깨·팔 지구력 필요",
      postureRisk: ["목어깨"],
      handSize: "챈터 홀 간격은 표준적",
    },

    cost: {
      entryKRW: [80000, 200000],
      entryDesc: "입문 1년차는 프랙티스 챈터(8~20만)만 있으면 됨. 본세트는 그 다음 — 저가 파키스탄산(30~60만)은 연주 불가급이 많아 비추, 제대로 된 세트는 150~400만+ 직구.",
      midKRW: [1500000, 5000000],
      running: "리드(챈터+드론)·백 수분관리 용품 — 연 수만~수십만원.",
    },
    practical: {
      portability: 3,
      noise: 5,
      apartmentOk: "풀세트 실내 연습 불가(100dB급). 프랙티스 챈터는 리코더 수준이라 집에서 OK — 이 이중 구조가 이 악기의 생존 전략.",
      selfLearn: 3,
      lessonKR: 2,
      entryBarrier: 5,
      quickReward: 1,
      maintenance: 4,
      lessonDesc: "국내 파이프 밴드(서울 등)가 몇 곳 있어 배우려면 그쪽 합류가 정석. 개인 레슨은 드묾.",
    },

    vibe: {
      tags: ["위압적", "무대 장악", "고풍스러운", "컬트적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 5,
    },

    genres: { main: ["켈틱·아이리시"], sub: ["브라스밴드·취주악", "영화·게임 OST"] },

    kinship: {
      easyFrom: ["틴휘슬(운지 유사)", "리코더"],
      sameTuning: [],
      leadsTo: ["일리언 파이프스", "갈리시안 가이타", "스몰파이프"],
    },
    ensemble: ["파이프 밴드(드럼과)", "의전·행사 독주"],

    variants: [
      { id: "electronic_chanter", label: "전자 챈터", mods: { noise: 1 }, note: "헤드폰 연습 가능. 밴드 연습 표준 장비화 추세." },
      { id: "smallpipes", label: "스코티시 스몰파이프", mods: { noise: 2, breath: 0 }, note: "풀무식 실내용 백파이프. 세션 지향." },
    ],

    caveats: [
      "1년은 백 없이 프랙티스 챈터만 — '백파이프를 샀는데 백파이프를 못 부는' 기간을 견뎌야 함",
      "풀세트는 챈터 운지+백 압력+호흡을 동시에 굴리는 멀티태스킹 — 리드 4개 관리도 일상",
      "연습 장소 문제는 태평소와 함께 전체 DB 최악 — 야외·방음 전제",
    ],
    funFacts: ["1·2차 대전에서 실제 돌격 신호로 쓰였다", "국제적으로 '악기이자 무기'라는 농담이 공식화된 유일한 악기"],
  },

  // ─────────────────────────────────────────────
  // 19. 일리언 파이프스 — 침·폐활량 게이트 우회 백파이프
  // ─────────────────────────────────────────────
  {
    id: "uilleann_pipes",
    name: "일리언 파이프스",
    aka: ["uilleann pipes", "일런 파이프", "아이리시 백파이프"],
    family: "민속 목관·백파이프(팔꿈치 풀무)",
    desc: "입 대신 팔꿈치 풀무로 바람을 넣는 아일랜드 백파이프. 입김이 아니라서 침·폐활량 게이트를 완전히 우회하는 유일한 백파이프 — 대신 그 자리를 양팔·무릎을 총동원하는 조작 복잡도가 차지한다. 앉아서 연주하며, 소리는 백파이프 중 가장 달콤하다.",

    sound: {
      tone: ["애수", "노래하는 듯", "부드러움", "화려함"],
      toneDesc: "하이랜드의 포효와 딴판인, 울면서 노래하는 소리. 챈터를 무릎에 끊었다 떼는 스타카토·레가토 전환과 2옥타브 음역이 백파이프계 유일의 표현력을 만든다.",
      volume: 3,
      sustain: 5,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 4,
      chordal: true,
      chordalDesc: "풀세트의 레귤레이터(건반식 화음 파이프)를 손목으로 눌러 반주 화음까지 혼자 깖.",
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["멜로디", "화음반주(풀세트)"],
    },

    body: {
      saliva: 0,
      salivaDesc: "입김을 전혀 쓰지 않음 — 침·입술·폐활량 게이트 전부 0.",
      callus: 0,
      callusDesc: "손끝 통증 없음.",
      embouchure: 0,
      breath: 0,
      weight: 3,
      weightDesc: "세트+풀무를 몸에 묶는 착용 과정부터가 의식(儀式).",
      posture: "앉아서 오른팔 풀무 펌핑+왼팔 백 압박+양손 운지+무릎 개폐 동시 진행 — 전신 코디네이션",
      postureRisk: ["목어깨", "손목"],
      handSize: "챈터 자체는 표준. 문제는 손이 아니라 사지 독립",
    },

    cost: {
      entryKRW: [1300000, 3500000],
      entryDesc: "프랙티스 세트(백+풀무+챈터) 기준, 해외 공방 직구·대기열 전제. 저가 파키스탄산은 연주 불가급이 많아 강력 비추.",
      midKRW: [4000000, 15000000],
      midDesc: "하프세트(드론 추가) 400~650만, 풀세트(레귤레이터까지) 700만~1500만+. 유명 공방은 수년 대기.",
      running: "리드 관리(챈터·드론·레귤레이터) — 백파이프계 공통의 일상 노동.",
    },
    practical: {
      portability: 3,
      noise: 3,
      apartmentOk: "하이랜드와 달리 실내악 음량 — 아파트 낮 연습 가능한 백파이프.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 5,
      quickReward: 1,
      maintenance: 5,
      lessonDesc: "국내 연주자·레슨 극소수. NPU(아일랜드 파이퍼 협회) 온라인 강좌가 사실상 유일한 체계적 경로.",
    },

    vibe: {
      tags: ["장인 정신", "서정적", "컬트적", "고풍스러운"],
      trendy: 1,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["켈틱·아이리시"], sub: ["영화·게임 OST", "포크"] },

    kinship: {
      easyFrom: ["틴휘슬", "로우휘슬", "하이랜드 백파이프"],
      sameTuning: ["틴휘슬(D)"],
      leadsTo: ["풀세트 레귤레이터 세계"],
    },
    ensemble: ["아이리시 세션", "영화음악 세션(브레이브하트·타이타닉)"],

    caveats: [
      "'세상에서 배우기 가장 어려운 악기' 단골 후보 — 사지가 전부 다른 일을 하는 조작 복잡도가 이 배치 최상(entryBarrier 5)",
      "숙달에 '7년 연습, 7년 수련, 7년 연주'라는 관용구가 있을 정도",
      "악기 값·대기열·리드 관리까지 이 배치에서 돈과 정성이 가장 많이 드는 악기",
      "대신 침·폐활량이 전혀 필요 없어 호흡기 조건 때문에 관악을 포기한 사람에게 열려 있는 문",
    ],
    funFacts: ["이름의 uilleann은 아일랜드어로 '팔꿈치'", "타이타닉·브레이브하트 OST의 애절한 파이프가 이 악기"],
  },

  // ─────────────────────────────────────────────
  // 20. 갈리시안 가이타 — 스페인
  // ─────────────────────────────────────────────
  {
    id: "galician_gaita",
    name: "갈리시안 가이타",
    aka: ["gaita", "gaita gallega", "갈리시아 백파이프"],
    family: "민속 목관·백파이프(입김 충전)",
    desc: "스페인 북서부 갈리시아(켈트 문화권)의 백파이프. 하이랜드보다 작고 음량도 한 단계 낮으며, 축제 음악의 흥이 몸통이다. 크란베리아스 콘서트로 대표되는 현대 갈리시아 씬은 백파이프를 록 페스티벌 무대에 올렸다.",

    sound: {
      tone: ["빵빵함", "화려함", "콧소리", "파티"],
      toneDesc: "하이랜드보다 밝고 유연한 소리. 드론 위에서 챈터가 춤곡(무녜이라)을 튕기듯 굴린다.",
      volume: 4,
      sustain: 5,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 4,
      chordal: false,
      melodic: true,
      singAlong: true,
      singAlongDesc: "전통적으로 파이퍼가 노래 구절과 주고받는 문화가 있음(부는 동안은 불가).",
      improv: 3,
      roles: ["멜로디", "축제 리드"],
    },

    body: {
      saliva: 2,
      callus: 0,
      callusDesc: "손 부담 없음.",
      embouchure: 2,
      breath: 3,
      breathDesc: "입김 충전식 — 하이랜드보다는 덜하지만 폐활량 게이트 존재.",
      weight: 3,
      weightDesc: "하이랜드보다 작고 가벼운 세트.",
      posture: "서서 백 압박 유지",
      postureRisk: ["목어깨"],
      handSize: "챈터 홀 간격 표준. 반음 운지(포크핑거링)로 2옥타브 가까이 커버",
    },

    cost: {
      entryKRW: [800000, 2500000],
      entryDesc: "갈리시아 공방 직구 전제(국내 유통 사실상 없음). 학생용 세트 기준이며 환율·관세로 범위 넓게 잡음.",
      midKRW: [2500000, 6000000],
      running: "리드·백 관리 — 백파이프 공통.",
    },
    practical: {
      portability: 3,
      noise: 4,
      apartmentOk: "하이랜드보다 한 단계 낮지만 여전히 실내 연습 무리. 프랙티스 챈터 병행이 정석.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 4,
      quickReward: 2,
      maintenance: 4,
      lessonDesc: "국내 레슨 사실상 없음. 스페인어권 온라인 강좌·갈리시아 여름학교가 본진.",
    },

    vibe: {
      tags: ["파티", "이국적", "자유로운", "컬트적"],
      trendy: 2,
      rarityKR: 5,
      showOff: 5,
    },

    genres: { main: ["플라멩코·스페인"], sub: ["켈틱·아이리시", "포크"] },

    kinship: {
      easyFrom: ["하이랜드 백파이프", "틴휘슬", "리코더"],
      sameTuning: [],
      leadsTo: ["일리언 파이프스", "아스투리아스 가이타"],
    },
    ensemble: ["갈리시아 축제 밴드(가이타+타보르 북)", "켈틱 록 밴드"],

    caveats: [
      "국내 인지도·인프라가 이 배치에서도 최하위권 — 악기 입수부터 스페인 직구 모험",
      "백파이프 공통의 3중 과제(운지+압력+호흡)는 동일, 하이랜드보다 아주 약간 순한 정도",
      "'스페인 악기'지만 플라멩코와는 무관한 켈트 계열 — 장르 기대를 정확히 하고 올 것",
    ],
    funFacts: ["갈리시아는 스페인 속의 켈트 문화권 — 아일랜드·스코틀랜드와 백파이프 형제 문화", "가이타 연주자 크리스티나 파토는 요요마 실크로드 앙상블 멤버"],
  },

];

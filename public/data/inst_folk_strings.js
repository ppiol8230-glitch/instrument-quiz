// 배치: 민속 활 현악(9) + 아시아·중동·아프리카 발현·타현(15) — 총 24종
// 스키마: SCHEMA.md v1 준수. 장르는 data/genres.js canonical 문자열만 사용.
const INST_FOLK_STRINGS = [

  // ═══════════════ 민속 활 현악 (9) ═══════════════

  {
    id: "hardanger_fiddle",
    name: "하딩펠레",
    aka: ["hardingfele", "하당에르 피들", "Hardanger fiddle"],
    family: "활 현악·민속 피들",
    desc: "노르웨이의 민속 바이올린. 연주하는 4현 아래에 공명현 4~5줄이 숨어 있어, 활을 긋는 순간 건드리지 않은 줄들이 따라 울리며 은빛 잔향이 깔린다. 몸통엔 잉크 문양과 자개 장식.",

    sound: {
      tone: ["영롱함", "애수", "신비", "반짝임"],
      toneDesc: "바이올린 소리 위에 공명현의 은은한 메아리가 항상 겹쳐 있다. 홀로 켜도 두 명이 연주하는 듯한, 피오르 안개 같은 잔향.",
      volume: 3,
      sustain: 3,
    },

    play: {
      pitchFixed: "F3",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["멜로디", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "바이올린과 같은 수준. 초반 손끝이 아리지만 물집 지옥까지는 아님.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "바이올린과 동급(500g 안팎). 케이스째 들어도 가볍다.",
      posture: "바이올린식 턱 고정 자세. 전통 주법은 가슴에 대고 켜기도 해서 목 부담을 줄일 여지가 있음",
      postureRisk: ["목어깨"],
      handSize: "바이올린과 같은 스케일. 손 크기 제약 거의 없음",
    },

    cost: {
      entryKRW: [2500000, 7000000],
      entryDesc: "국내 유통 없음. 노르웨이 공방·중고 직구 기준이며 수제악기라 하한이 높다. 바이올린에 공명현을 얹은 개조품으로 입문하는 사람도 있음.",
      midKRW: [7000000, 20000000],
      running: "줄값이 특수(공명현 포함 세트 직구). 송진·활털은 바이올린과 동일",
    },
    practical: {
      portability: 5,
      noise: 3,
      apartmentOk: "바이올린과 동급. 낮 시간 + 약음기면 가능",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 4,
      quickReward: 2,
      maintenance: 3,
    },

    vibe: {
      tags: ["이국적", "장인 정신", "고풍스러운", "컬트적", "서정적"],
      trendy: 2,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["북유럽 민속"], sub: ["영화·게임 OST", "포크"] },

    kinship: {
      easyFrom: ["바이올린", "비올라", "피들"],
      sameTuning: [],
      leadsTo: ["니켈하르파", "바이올린"],
    },
    ensemble: ["북유럽 민속 세션", "솔로(전통적으로 독주 악기)"],

    caveats: [
      "튜닝이 곡마다 바뀌는 변칙 조율(20종 이상) 문화라 조율 자체가 공부",
      "국내 레슨·커뮤니티 사실상 없음. 노르웨이 온라인 강좌·유튜브 의존",
      "공명현 포함 8~9줄 조율을 매번 해야 해서 성격 급하면 스트레스",
      "바이올린 경험 없이 첫 현악기로 잡기엔 진입장벽이 높은 편",
    ],
    funFacts: [
      "영화 '반지의 제왕' 로한 테마의 그 아련한 현 소리가 하딩펠레다",
      "노르웨이에서는 결혼식 행렬을 하딩펠레가 이끄는 전통이 있다",
    ],
  },

  {
    id: "nyckelharpa",
    name: "니켈하르파",
    aka: ["nyckelharpa", "키드 피들", "keyed fiddle"],
    family: "활 현악·건반 피들",
    desc: "스웨덴의 '건반 달린 바이올린'. 활로 켜되 음정은 왼손 건반(키)이 잡아준다. 12줄의 공명현이 성당 잔향 같은 울림을 더한다. 음정을 귀로 찾을 자신이 없는 사람에게 열려 있는 거의 유일한 활 현악기.",

    sound: {
      tone: ["영롱함", "부드러움", "신비", "나무 울림"],
      toneDesc: "바이올린보다 어둡고 둥근 음색에, 공명현이 만드는 돌성당 에코가 항상 따라붙는다. 건반의 달칵거림도 매력의 일부.",
      volume: 3,
      sustain: 3,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["멜로디", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "줄을 손끝으로 누르지 않고 건반을 누른다. 굳은살 걱정 제로.",
      embouchure: 0,
      breath: 0,
      weight: 2,
      weightDesc: "약 2kg을 스트랩으로 몸 앞에 멘다. 서서도 앉아서도 부담 적음.",
      posture: "기타처럼 몸 앞에 걸치는 자세라 바이올린류 중 목·어깨가 가장 편하다",
      postureRisk: [],
      handSize: "건반 간격이 일정해서 손 작아도 무방",
    },

    cost: {
      entryKRW: [2000000, 6000000],
      entryDesc: "국내 유통 없음. 유럽 공방 주문·중고 직구 기준. 조립 키트(약 100만원대)로 시작하는 사람도 있음.",
      midKRW: [6000000, 15000000],
      running: "16줄 현 교체가 연 단위 목돈. 송진·활털은 바이올린과 동일",
    },
    practical: {
      portability: 3,
      noise: 3,
      apartmentOk: "바이올린과 비슷한 음량. 낮 연습 가능",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 3,
    },

    vibe: {
      tags: ["이국적", "고풍스러운", "장인 정신", "컬트적", "우아한"],
      trendy: 2,
      rarityKR: 5,
      showOff: 5,
    },

    genres: { main: ["북유럽 민속"], sub: ["바로크·고음악", "영화·게임 OST", "포크"] },

    kinship: {
      easyFrom: ["바이올린", "피아노", "허디거디"],
      sameTuning: [],
      leadsTo: ["하딩펠레", "허디거디"],
    },
    ensemble: ["북유럽 민속 세션", "고음악 앙상블"],

    caveats: [
      "국내에서 실물 보기조차 어렵다. 구매·수리·레슨 전부 해외 의존",
      "건반이 음정을 잡아줘도 활 컨트롤(발음·강약)은 바이올린만큼 연습이 필요",
      "37개 키 + 16줄 구조라 조율·정비에 손이 간다",
    ],
    funFacts: [
      "옛 스웨덴 50크로나 지폐에 그려져 있던 국민 악기",
      "음정은 건반이 잡아주므로 '활 현악기를 하고 싶은데 음감이 불안한 사람'의 사실상 유일한 루트로 통한다",
    ],
  },

  {
    id: "erhu",
    name: "얼후",
    aka: ["erhu", "二胡", "이호"],
    family: "활 현악·호궁류",
    desc: "두 줄 사이에 활이 끼워져 있는 중국의 대표 찰현악기. 지판이 없어 허공에서 줄을 짚으며, 사람 목소리에 가장 가깝다는 애절한 음색으로 유명하다.",

    sound: {
      tone: ["애수", "노래하는 듯", "콧소리", "부드러움"],
      toneDesc: "울다가 웃는 듯한, 사람 목소리를 닮은 음색. 비단뱀 가죽 울림통 특유의 콧소리 섞인 비브라토가 심금을 긁는다.",
      volume: 3,
      sustain: 3,
    },

    play: {
      pitchFixed: "F3",
      fastPlay: 4,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["멜로디"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "지판 없이 줄만 누르므로 기타보다 부드럽다. 굳은살은 얇게 생기는 정도.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1kg 미만. 무릎에 올리고 앉아 연주.",
      posture: "의자에 앉아 무릎 위. 목·어깨 압박이 없어 바이올린보다 몸이 편하다",
      postureRisk: [],
      handSize: "손 크기 제약 거의 없음",
    },

    cost: {
      entryKRW: [150000, 500000],
      entryDesc: "국내 중국악기사·직구로 입문기 구입 가능. 10만원대 최저가는 소리가 거칠어 30만원 안팎 권장.",
      midKRW: [700000, 3000000],
      running: "활 송진·줄값 소액. 뱀가죽 울림통은 습도 관리 필요",
    },
    practical: {
      portability: 4,
      noise: 3,
      apartmentOk: "바이올린보다 약간 작은 음량. 약음기 장착 가능",
      selfLearn: 3,
      lessonKR: 2,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 2,
    },

    vibe: {
      tags: ["이국적", "서정적", "애수", "고풍스러운"],
      trendy: 2,
      rarityKR: 3,
      showOff: 4,
    },

    genres: { main: ["동아시아 전통"], sub: ["영화·게임 OST", "뉴에이지", "명상·사운드힐링"] },

    kinship: {
      easyFrom: ["해금", "바이올린", "마두금"],
      sameTuning: [],
      leadsTo: ["해금", "중후(중음 얼후)"],
    },
    ensemble: ["중국 민악 합주", "퓨전 앙상블", "솔로"],

    caveats: [
      "지판이 없어 음정을 100% 귀로 잡는다 — 첫 몇 달은 '고양이 우는 소리' 구간을 각오",
      "두 줄 사이에 활이 끼어 있어 활 방향 전환 감각이 바이올린과 다름(바이올린 경험자도 재적응 필요)",
      "국내 레슨은 서울·화교 커뮤니티 중심으로 드문드문. 중국어권 인강은 매우 풍부",
    ],
    funFacts: [
      "대표곡 '이천영월(二泉映月)'은 시각장애 거리 악사 아빙이 남긴 곡이다",
      "두 줄만으로 새소리·말 울음까지 흉내 내는 묘사 주법이 발달해 있다",
    ],
  },

  {
    id: "haegeum",
    name: "해금",
    aka: ["haegeum", "깡깡이"],
    family: "활 현악·호궁류(국악)",
    desc: "두 줄 사이에 활을 끼워 켜는 한국 전통 찰현악기. 줄을 당기는 힘으로 음정을 만드는 '역안법' 덕에 미분음·농현이 자유롭고, 국악기 중 드물게 국악관현악·퓨전·OST를 넘나드는 만능 멜로디 악기다.",

    sound: {
      tone: ["애수", "콧소리", "거칢", "노래하는 듯"],
      toneDesc: "코맹맹이 소리라고 놀림받지만 그게 매력. 흐느끼듯 꺾고 떨며 우는 소리는 국악기 중 가장 사람 목소리에 가깝다.",
      volume: 3,
      sustain: 3,
    },

    play: {
      pitchFixed: "F3",
      fastPlay: 4,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["멜로디"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "줄을 감아쥐고 당기는 역안법이라 손끝보다 손아귀 힘이 먼저 힘들다. 굳은살은 가벼움.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1kg 미만. 무릎에 세워 놓고 앉아 연주.",
      posture: "앉은 자세에 무릎 거치라 몸 부담이 적다. 왼 손목 사용량은 많은 편",
      postureRisk: ["손목"],
      handSize: "손이 아주 작으면 줄 감아쥐기가 처음에 버겁지만 적응 가능",
    },

    cost: {
      entryKRW: [400000, 1000000],
      entryDesc: "국악사에서 연습용 해금 구입 가능. 대여 후 구매 루트도 흔하다.",
      midKRW: [1500000, 5000000],
      running: "활 송진·줄·원산(브리지) 교체 소액. 명주실 줄은 습도에 민감",
    },
    practical: {
      portability: 4,
      noise: 3,
      apartmentOk: "음량이 아주 크진 않아 낮 연습 가능. 약음 연습법도 있음",
      selfLearn: 2,
      lessonKR: 4,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 2,
    },

    vibe: {
      tags: ["서정적", "고풍스러운", "애수", "이국적"],
      trendy: 3,
      rarityKR: 2,
      showOff: 4,
    },

    genres: { main: ["국악·사물놀이"], sub: ["영화·게임 OST", "뉴에이지", "트로트·가요"] },

    kinship: {
      easyFrom: ["얼후", "바이올린"],
      sameTuning: [],
      leadsTo: ["얼후", "아쟁"],
    },
    ensemble: ["국악관현악", "정악 합주", "퓨전국악 밴드", "산조(독주)"],

    tracks: [
      { id: "jeongak", label: "정악", genres: ["국악·사물놀이"], note: "궁중·풍류 음악. 정갈하고 절제된 호흡." },
      { id: "sanjo", label: "산조·민속악", genres: ["국악·사물놀이"], note: "즉흥성 강한 독주 갈래. 흐느끼는 농현의 진수." },
      { id: "fusion", label: "퓨전·창작", genres: ["뉴에이지", "영화·게임 OST"], note: "국악기 중 크로스오버 수요 1순위. 가요·OST 세션도 활발." },
    ],

    caveats: [
      "지판도 프렛도 없이 줄을 당기는 힘으로만 음정을 만든다 — 초반 음정 잡기는 얼후보다도 어렵다는 평",
      "첫 몇 달 '깡깡이' 소리 구간 필수 통과",
      "국악 전공 시장이 있어 레슨은 흔하지만, 취미 레슨비는 피아노보다 비싼 편",
    ],
    funFacts: [
      "고려 시대부터 지금까지 궁중·민속·창작 음악에 모두 편성된, 국악기 중 최고의 '전천후 출석왕'",
      "줄을 세게 당길수록 음이 높아지는 원리라, 같은 자리에서 여러 음이 난다",
    ],
  },

  {
    id: "ajaeng",
    name: "아쟁",
    aka: ["ajaeng", "산조아쟁", "대아쟁"],
    family: "활 현악·치터류(국악)",
    desc: "눕혀 놓은 커다란 울림통 위 굵은 명주실 줄을 개나리 활대로 문질러 내는 국악 저음 찰현악기. 국악관현악의 첼로 포지션이며, 갈라지는 듯 낮게 우는 소리가 한(恨)의 대명사다.",

    sound: {
      tone: ["낮고 깊음", "거칢", "애수", "먹먹함"],
      toneDesc: "쓸리고 갈라지는 저음이 바닥을 긁는다. 슬픈 장면 국악 BGM에서 '흐어엉' 하고 우는 그 소리.",
      volume: 4,
      sustain: 3,
    },

    play: {
      pitchFixed: "F3",
      fastPlay: 2,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["멜로디", "베이스"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "왼손으로 줄을 눌러 농현하는 부담이 있으나 줄이 굵고 장력이 부드러워 기타식 굳은살과는 다름.",
      embouchure: 0,
      breath: 0,
      weight: 4,
      weightDesc: "몸통이 가야금보다 크고 무겁다. 혼자 들고 다니면 운동 됨.",
      posture: "바닥 양반다리 연주가 기본. 허리·고관절이 뻐근할 수 있다",
      postureRisk: ["허리"],
      handSize: "제약 거의 없음",
    },

    cost: {
      entryKRW: [800000, 2000000],
      entryDesc: "국악사 주문 제작이 기본. 연습용 산조아쟁 기준이며 대아쟁은 더 비싸다.",
      midKRW: [2500000, 6000000],
      running: "활대(개나리 가지)·송진·명주실 줄 교체. 습도 관리 필수",
    },
    practical: {
      portability: 2,
      noise: 4,
      apartmentOk: "저음이 벽을 잘 타서 아파트 연습은 시간대 조심",
      selfLearn: 1,
      lessonKR: 3,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 3,
    },

    vibe: {
      tags: ["고풍스러운", "애수", "위압적", "서정적"],
      trendy: 2,
      rarityKR: 3,
      showOff: 4,
    },

    genres: { main: ["국악·사물놀이"], sub: ["영화·게임 OST"] },

    kinship: {
      easyFrom: ["가야금", "첼로", "해금"],
      sameTuning: [],
      leadsTo: ["가야금", "거문고"],
    },
    ensemble: ["국악관현악", "시나위", "산조(독주)", "창극 반주"],

    caveats: [
      "첫 소리부터 듣기 좋은 악기가 아니다 — 활 압력 조절이 안 되면 톱질 소리가 한동안 계속됨",
      "레슨은 국악학원·전공자 중심으로 구할 수 있으나 해금·가야금보다는 선생이 적다",
      "크고 무거워 이동 연주는 차가 사실상 필수",
    ],
    funFacts: [
      "활이 말총이 아니라 개나리 나뭇가지다. 송진을 발라 나무로 줄을 긁는다",
      "영화·드라마에서 '조선의 슬픔' 장면 저음은 십중팔구 아쟁이다",
    ],
  },

  {
    id: "morin_khuur",
    name: "마두금",
    aka: ["morin khuur", "모린 호르", "馬頭琴"],
    family: "활 현악·호궁류",
    desc: "머리에 말 조각이 새겨진 몽골의 두 줄 찰현악기. 줄과 활이 모두 말총 다발이라 폭신하고 넓은 저음이 나며, 초원의 바람과 말 달리는 리듬을 그대로 옮긴 주법이 특징이다.",

    sound: {
      tone: ["낮고 깊음", "따뜻함", "웅장함", "숨소리 섞임"],
      toneDesc: "첼로보다 흐릿하고 바람 소리가 섞인 저음. 수백 가닥 말총 줄이 만드는 넓고 폭신한 울림이 초원 그 자체.",
      volume: 3,
      sustain: 3,
    },

    play: {
      pitchFixed: "F3",
      fastPlay: 3,
      chordal: false,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["멜로디", "리듬반주"],
    },

    body: {
      saliva: 0,
      callus: 1,
      callusDesc: "손톱 옆면·관절로 줄을 짚는 독특한 운지라 손끝 굳은살은 거의 없다. 대신 처음엔 짚는 위치가 낯설다.",
      embouchure: 0,
      breath: 0,
      weight: 2,
      weightDesc: "3kg 안팎. 앉아서 다리 사이에 세워 연주.",
      posture: "첼로처럼 앉아 세워 켜는 자세라 몸 부담 적음",
      postureRisk: [],
      handSize: "제약 거의 없음",
    },

    cost: {
      entryKRW: [500000, 1500000],
      entryDesc: "국내 유통 거의 없음. 몽골 공방·직구 기준. 몽골 여행 구매가 가장 싸다는 것이 정설.",
      midKRW: [1500000, 4000000],
      running: "말총 줄·활털 교체. 건조한 악기라 한국 여름 습도 관리 필요",
    },
    practical: {
      portability: 3,
      noise: 3,
      apartmentOk: "첼로보다 작은 음량. 낮 연습 가능",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 2,
    },

    vibe: {
      tags: ["이국적", "명상적", "자유로운", "컬트적"],
      trendy: 2,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["동아시아 전통"], sub: ["명상·사운드힐링", "영화·게임 OST", "포크"] },

    kinship: {
      easyFrom: ["첼로", "얼후", "해금"],
      sameTuning: [],
      leadsTo: ["얼후", "흐미(배음창법)"],
    },
    ensemble: ["몽골 전통 앙상블", "월드뮤직 밴드", "흐미 반주(독주+노래)"],

    caveats: [
      "국내 레슨·수리처가 사실상 없다. 유튜브·몽골 온라인 레슨 의존",
      "손톱 옆면으로 짚는 운지가 다른 현악기 경험과 호환이 낮아 처음엔 다 새로 배우는 기분",
      "말총 줄은 습도에 예민해 장마철 관리가 번거롭다",
    ],
    funFacts: [
      "유네스코 인류무형문화유산. 몽골 가정엔 한 집에 하나씩 있다는 국민 악기",
      "흐미(목 배음 창법)를 얹어 혼자서 노래+반주를 다 하는 전통이 있다",
    ],
  },

  {
    id: "kamancheh",
    name: "카만체",
    aka: ["kamancheh", "kamancha", "카만차"],
    family: "활 현악·스파이크 피들",
    desc: "둥근 울림통에 긴 꼬챙이 다리가 달린 페르시아 찰현악기. 무릎 위 꼬챙이를 축으로 악기를 빙글 돌려가며 활을 대는 독특한 주법으로, 미분음이 흐르는 페르시아 라디프 음악의 간판 선율 악기다.",

    sound: {
      tone: ["애수", "콧소리", "화려함", "노래하는 듯"],
      toneDesc: "바이올린보다 가늘고 건조한, 사막 햇빛 같은 음색. 잘게 떨리는 장식음이 물결처럼 이어진다.",
      volume: 3,
      sustain: 3,
    },

    play: {
      pitchFixed: "F3",
      fastPlay: 4,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 5,
      roles: ["멜로디"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "바이올린과 비슷한 수준의 손끝 적응기.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1kg 미만. 앉아서 무릎 위 거치.",
      posture: "앉은 자세 + 무릎 거치라 목·어깨 부담 없음. 활 대신 악기를 돌리는 오른손 감각이 관건",
      postureRisk: [],
      handSize: "제약 거의 없음",
    },

    cost: {
      entryKRW: [400000, 1200000],
      entryDesc: "국내 유통 없음. 이란·터키 공방 직구 기준(운송·관세 변수 큼).",
      midKRW: [1500000, 5000000],
      running: "줄·활털·송진. 가죽 울림판은 습도 관리 필요",
    },
    practical: {
      portability: 4,
      noise: 3,
      apartmentOk: "바이올린급 음량. 낮 연습 가능",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 4,
      quickReward: 2,
      maintenance: 2,
    },

    vibe: {
      tags: ["이국적", "고풍스러운", "학구적", "서정적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["인도·중동"], sub: ["명상·사운드힐링", "영화·게임 OST"] },

    kinship: {
      easyFrom: ["바이올린", "얼후", "해금"],
      sameTuning: [],
      leadsTo: ["우드", "사랑기"],
    },
    ensemble: ["페르시아 전통 앙상블", "수피 음악", "월드뮤직 밴드"],

    caveats: [
      "페르시아 음계(코론 등 미분음)를 귀로 익혀야 진짜 시작 — 서양 음감만으로는 절반만 배우는 셈",
      "국내 레슨 사실상 전무. 이란계 온라인 레슨·유튜브 의존",
      "즉흥(라디프) 문화 비중이 커서 악보 중심 학습자에겐 낯설다",
    ],
    funFacts: [
      "연주자가 활을 움직이는 게 아니라 악기를 돌려서 줄을 활에 갖다 댄다",
      "카만체 거장 케이한 칼호르는 요요마의 실크로드 앙상블 멤버로 그래미를 받았다",
    ],
  },

  {
    id: "sarangi",
    name: "사랑기",
    aka: ["sarangi", "सारंगी"],
    family: "활 현악·인도 고전",
    desc: "통나무를 깎아 만든 북인도의 찰현악기. 연주현 3줄 아래 35개 안팎의 공명현이 울리며, 손톱 뿌리 옆 살로 줄을 밀어 짚는 주법으로 사람 목소리의 미끄러짐을 그대로 재현한다. '백 가지 색을 가진 악기'라는 뜻.",

    sound: {
      tone: ["애수", "노래하는 듯", "신비", "먹먹함"],
      toneDesc: "흐느끼는 사람 목소리에 가장 가깝다고 평가받는 소리. 공명현의 잔향이 안개처럼 깔리고, 음과 음 사이가 전부 미끄러짐으로 이어진다.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F3",
      fastPlay: 3,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 5,
      roles: ["멜로디"],
    },

    body: {
      saliva: 0,
      callus: 5,
      callusDesc: "손끝이 아니라 손톱 뿌리 옆 큐티클로 줄을 민다. 이 부위에 굳은살이 앉기까지의 통증이 현악기 전체에서 최상급 — 악기 자체가 통과의례.",
      embouchure: 0,
      breath: 0,
      weight: 2,
      weightDesc: "2~3kg. 앉아서 무릎에 기대 세워 연주.",
      posture: "바닥 양반다리 연주 기본. 장시간이면 허리·고관절 부담",
      postureRisk: ["허리"],
      handSize: "제약보다 통증 적응이 관건",
    },

    cost: {
      entryKRW: [500000, 1500000],
      entryDesc: "국내 유통 없음. 인도 공방 직구 기준(품질 편차 매우 큼 — 저가품은 조율 유지가 안 되는 경우 흔함).",
      midKRW: [1500000, 4000000],
      running: "거트 줄이 잘 끊기고 비싸다. 공명현 35줄 조율은 일상",
    },
    practical: {
      portability: 3,
      noise: 3,
      apartmentOk: "음량 자체는 중간. 낮 연습 가능",
      selfLearn: 1,
      lessonKR: 1,
      entryBarrier: 5,
      quickReward: 1,
      maintenance: 4,
    },

    vibe: {
      tags: ["이국적", "학구적", "컬트적", "장인 정신", "명상적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["인도·중동"], sub: ["명상·사운드힐링"] },

    kinship: {
      easyFrom: ["첼로", "얼후"],
      sameTuning: [],
      leadsTo: ["시타르", "인도 성악"],
    },
    ensemble: ["힌두스타니 고전(성악 반주)", "카타크 무용 반주", "솔로 라가"],

    caveats: [
      "인도 본토에서도 '가장 배우기 어려운 악기'로 꼽힌다 — 취미 접근은 냉정히 비추천에 가깝고, 그만큼 도전 가치가 있는 악기",
      "큐티클 통증 구간이 몇 달 단위. 손을 쓰는 직업이면 신중히",
      "국내 레슨 전무, 구루(스승) 전통이라 체계적 독학 교재도 드물다",
    ],
    funFacts: [
      "원래 성악 반주 악기라 '목소리를 따라 우는' 능력이 정체성이다",
      "공명현까지 40줄에 육박하지만 활이 닿는 줄은 단 3줄이다",
    ],
  },

  {
    id: "hurdy_gurdy",
    name: "허디거디",
    aka: ["hurdy-gurdy", "vielle à roue", "휠 피들"],
    family: "활 현악·기계식(크랭크)",
    desc: "오른손 크랭크를 돌리면 송진 바른 나무 바퀴가 줄을 끊임없이 문지르고, 왼손 건반이 음정을 잡는 중세 유럽의 기계식 현악기. 백파이프 같은 드론 위에 멜로디가 얹히고, 트롬펫 현이 '지지직' 리듬 버즈를 더한다.",

    sound: {
      tone: ["웅장함", "거칢", "고풍스러운", "몽환"],
      toneDesc: "끊기지 않는 드론 위에 콧소리 섞인 멜로디, 크랭크 손목 스냅마다 터지는 버즈 리듬. 혼자서 백파이프+바이올린+타악을 겸하는 소리.",
      volume: 4,
      sustain: 5,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["멜로디", "리듬반주", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "왼손은 건반, 오른손은 크랭크. 굳은살 요소가 없다.",
      embouchure: 0,
      breath: 0,
      weight: 3,
      weightDesc: "3~4kg을 무릎·스트랩으로 지탱. 오래 서면 어깨가 알린다.",
      posture: "앉아서 무릎 위가 기본. 크랭크 도는 오른 손목 반복 사용",
      postureRisk: ["손목"],
      handSize: "건반식이라 제약 거의 없음",
    },

    cost: {
      entryKRW: [1000000, 4000000],
      entryDesc: "국내 유통 없음. 유럽·우크라이나 공방 직구 기준. 100만원 아래 저가품은 조율·버즈가 안 잡히는 지뢰가 많다는 평.",
      midKRW: [4000000, 12000000],
      running: "바퀴 송진칠·현에 감는 목화솜(코튼) 관리가 일상. 소모품 개념이 독특",
    },
    practical: {
      portability: 3,
      noise: 4,
      apartmentOk: "드론이 계속 울리는 구조라 아파트 밤 연습 무리. 낮 시간·연습실 권장",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 5,
    },

    vibe: {
      tags: ["고풍스러운", "컬트적", "이국적", "무대 장악", "장인 정신"],
      trendy: 3,
      rarityKR: 5,
      showOff: 5,
    },

    genres: { main: ["포크", "바로크·고음악"], sub: ["영화·게임 OST", "록·메탈", "일렉트로닉"] },

    kinship: {
      easyFrom: ["피아노", "아코디언", "니켈하르파"],
      sameTuning: [],
      leadsTo: ["니켈하르파", "백파이프"],
    },
    ensemble: ["중세·르네상스 앙상블", "프렌치 폴크 발 무도회", "포크메탈 밴드"],

    caveats: [
      "악기의 절반은 정비다 — 솜 감기·송진칠·탄젠트 조정을 못 하면 소리가 안 난다(리드 깎기급 관리 손)",
      "크랭크 회전을 고르게 하는 것 자체가 몇 주짜리 기초 훈련",
      "국내 연주자·레슨 극소수. 유럽 온라인 강좌 의존",
    ],
    funFacts: [
      "중세 성당 음악에서 궁정, 거리 악사까지 천 년을 산 악기다",
      "게임 '위쳐3' OST와 포크메탈 붐으로 유튜브에서 제2의 전성기를 맞았다",
    ],
  },

  // ═══════════════ 아시아·중동·아프리카 발현·타현 (15) ═══════════════

  {
    id: "gayageum",
    name: "가야금",
    aka: ["gayageum", "伽倻琴"],
    family: "발현·치터류(국악)",
    desc: "오동나무 울림통 위 12줄(개량형 18·25현)을 안족(기러기발 브리지)으로 받치고 맨손가락으로 뜯고 튕기는 한국 대표 발현악기. 왼손으로 줄을 눌러 흔드는 농현이 소리의 절반이다.",

    sound: {
      tone: ["나무 울림", "맑음", "소박함", "애수"],
      toneDesc: "손끝 살로 뜯는 둥글고 순한 소리. 왼손 농현이 들어가는 순간 음 하나가 울고 웃는다.",
      volume: 3,
      sustain: 3,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["멜로디", "화음반주", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 3,
      callusDesc: "맨손가락으로 명주실 줄을 뜯어 오른손 손끝 물집·굳은살 통과 필수. 왼손도 줄을 깊게 눌러 아프다.",
      embouchure: 0,
      breath: 0,
      weight: 3,
      weightDesc: "5~7kg에 길이 1.5m급. 집 안에선 문제없지만 들고 다니면 큰 짐.",
      posture: "바닥 양반다리에 악기를 무릎에 걸치는 자세. 장시간이면 허리·고관절 부담",
      postureRisk: ["허리"],
      handSize: "제약 거의 없음. 줄 간격이 넓어 오히려 큰 손도 편함",
    },

    cost: {
      entryKRW: [300000, 1000000],
      entryDesc: "국악사 연습용 기준. 문화센터·국악학원 대여로 시작하는 경우도 많다.",
      midKRW: [1500000, 6000000],
      running: "명주실 줄·안족 교체 소액. 오동나무 울림통 습도 관리",
    },
    practical: {
      portability: 2,
      noise: 3,
      apartmentOk: "음량이 부드러워 낮 연습 무난",
      selfLearn: 2,
      lessonKR: 4,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 2,
    },

    vibe: {
      tags: ["고풍스러운", "우아한", "서정적", "소박한"],
      trendy: 3,
      rarityKR: 1,
      showOff: 3,
    },

    genres: { main: ["국악·사물놀이"], sub: ["뉴에이지", "영화·게임 OST", "트로트·가요"] },

    kinship: {
      easyFrom: ["고토", "고쟁", "하프"],
      sameTuning: [],
      leadsTo: ["거문고", "아쟁", "25현 가야금"],
    },
    ensemble: ["국악관현악", "가야금 병창(노래+연주)", "정악 합주", "산조(독주)"],

    tracks: [
      { id: "jeongak", label: "정악(법금)", genres: ["국악·사물놀이"], note: "궁중 풍류. 큰 악기, 느리고 정갈한 호흡." },
      { id: "sanjo", label: "산조", genres: ["국악·사물놀이"], note: "민속 독주의 꽃. 농현·즉흥성 최대치." },
      { id: "25string", label: "25현 개량", genres: ["뉴에이지", "영화·게임 OST"], note: "7음계 개량형. 창작곡·크로스오버 전용." },
    ],

    caveats: [
      "첫 한 달 오른손 물집은 전원 통과하는 관문",
      "정악·산조·25현이 사실상 다른 악기 수준으로 갈라진다 — 시작 전 방향을 정할 것",
      "바닥 연주 문화라 입식 스탠드 없이는 의자 생활자에게 낯설다",
    ],
    funFacts: [
      "가야국 우륵이 만들었다고 삼국사기에 기록된, 이름부터 1500년 된 악기",
      "가야금 병창은 혼자 노래하며 반주까지 하는 국악판 싱어송라이터 전통이다",
    ],
  },

  {
    id: "geomungo",
    name: "거문고",
    aka: ["geomungo", "玄琴", "현금"],
    family: "발현·치터류(국악)",
    desc: "6줄을 술대(대나무 막대)로 내리치고 뜯는 한국의 저음 발현악기. 줄을 때리는 타격감과 괘(프렛) 위에서 줄을 밀어 올리는 묵직한 농현이 공존해 '선비의 악기'이자 국악기 중 가장 록에 가까운 소리로 통한다.",

    sound: {
      tone: ["낮고 깊음", "타격감", "거칢", "나무 울림"],
      toneDesc: "술대가 줄과 울림통을 '쿵' 때리는 소리까지 음악의 일부. 저음 현을 긁어 올리면 일렉 기타 벤딩 같은 박력이 난다.",
      volume: 4,
      sustain: 3,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 3,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["멜로디", "베이스", "리듬반주"],
    },

    body: {
      saliva: 0,
      callus: 3,
      callusDesc: "오른손은 술대라 편하지만, 왼손이 굵은 줄을 괘에 눌러 밀어 올리느라 손끝·손가락 관절이 단련될 때까지 아프다.",
      embouchure: 0,
      breath: 0,
      weight: 4,
      weightDesc: "길이 1.6m·무게 7kg급. 국악 현악기 중 가장 큰 짐.",
      posture: "바닥 양반다리 + 악기를 무릎에 걸침. 허리 부담 있음",
      postureRisk: ["허리"],
      handSize: "줄이 굵고 괘 간격이 넓어 손이 아주 작으면 초반 고전",
    },

    cost: {
      entryKRW: [500000, 1500000],
      entryDesc: "국악사 연습용 기준. 가야금보다 수요가 적어 중고 매물도 적다.",
      midKRW: [2000000, 7000000],
      running: "명주실 줄·술대 교체 소액. 습도 관리",
    },
    practical: {
      portability: 1,
      noise: 4,
      apartmentOk: "타격 저음이 커서 시간대를 가려야 함",
      selfLearn: 1,
      lessonKR: 3,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 2,
    },

    vibe: {
      tags: ["고풍스러운", "학구적", "위압적", "장인 정신"],
      trendy: 2,
      rarityKR: 3,
      showOff: 4,
    },

    genres: { main: ["국악·사물놀이"], sub: ["영화·게임 OST", "록·메탈"] },

    kinship: {
      easyFrom: ["가야금", "베이스 기타"],
      sameTuning: [],
      leadsTo: ["가야금", "아쟁"],
    },
    ensemble: ["정악 합주(줄풍류의 중심)", "국악관현악", "산조(독주)", "창작국악 밴드"],

    caveats: [
      "술대 타법 + 왼손 밀어짚기의 이중 관문이라 첫 곡까지 가야금보다 오래 걸린다",
      "무겁고 커서 레슨 다닐 때 이동이 진짜 고민거리",
      "가야금보다 배우는 사람이 적어 취미반 개설이 드문 지역이 많다",
    ],
    funFacts: [
      "고구려 왕산악이 만들었고, 연주하자 검은 학이 날아와 춤춰 '현학금'이 되었다는 전설의 악기",
      "밴드 '잠비나이'가 거문고로 포스트록·메탈을 하며 해외 페스티벌을 돌았다",
    ],
  },

  {
    id: "koto",
    name: "고토",
    aka: ["koto", "箏", "일본 쟁"],
    family: "발현·치터류(일본)",
    desc: "13줄을 움직이는 브리지(지)로 조율하고, 오른손 세 손가락에 상아·플라스틱 피크(쓰메)를 끼워 뜯는 일본 대표 치터. 일본 정월 BGM '봄의 바다'의 그 소리다.",

    sound: {
      tone: ["맑음", "영롱함", "우아한", "나무 울림"],
      toneDesc: "피크로 뜯는 또랑또랑한 소리에 왼손 눌러 꺾는 여운이 스민다. 글리산도 한 번이면 즉시 '일본 정원' 공기.",
      volume: 3,
      sustain: 3,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 2,
      roles: ["멜로디", "화음반주", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 1,
      callusDesc: "오른손은 피크(쓰메)를 끼워 굳은살 거의 없음. 왼손 눌러짚기(오시데)만 가볍게 아프다.",
      embouchure: 0,
      breath: 0,
      weight: 4,
      weightDesc: "길이 1.8m·5~6kg. 국악 가야금보다도 길어 운반이 큰일.",
      posture: "정좌 또는 의자+스탠드. 스탠드 쓰면 몸 부담 적음",
      postureRisk: ["허리"],
      handSize: "제약 거의 없음",
    },

    cost: {
      entryKRW: [400000, 1200000],
      entryDesc: "국내 유통 거의 없음. 일본 중고(야후옥션 등) 직구가 정석 — 일본엔 중고가 흔해 배송비가 악기값보다 비쌀 수도.",
      midKRW: [1500000, 5000000],
      running: "줄 교체(전문가 작업 권장)·쓰메 소모. 습도 관리",
    },
    practical: {
      portability: 1,
      noise: 3,
      apartmentOk: "부드러운 음량이라 낮 연습 무난",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 2,
    },

    vibe: {
      tags: ["우아한", "고풍스러운", "이국적", "서정적"],
      trendy: 2,
      rarityKR: 4,
      showOff: 3,
    },

    genres: { main: ["동아시아 전통"], sub: ["뉴에이지", "영화·게임 OST"] },

    kinship: {
      easyFrom: ["가야금", "고쟁", "하프"],
      sameTuning: [],
      leadsTo: ["샤미센", "17현 베이스 고토"],
    },
    ensemble: ["산쿄쿠 합주(고토+샤미센+샤쿠하치)", "고토 앙상블", "솔로"],

    caveats: [
      "국내 레슨 사실상 전무(일본 문화원·개인 연주자 수소문 수준). 일본어 인강은 풍부",
      "1.8m 악기를 둘 공간부터 확보할 것",
      "브리지를 세워 조율하는 과정(조현)이 매번 몇 분씩 걸린다",
    ],
    funFacts: [
      "브리지 위치만 옮기면 조가 통째로 바뀌는 구조라 '움직이는 조율' 악기로 불린다",
      "가야금·고쟁과 같은 조상(중국 쟁)에서 갈라진 형제 악기다",
    ],
  },

  {
    id: "shamisen",
    name: "샤미센",
    aka: ["shamisen", "三味線", "산현"],
    family: "발현·류트류(일본)",
    desc: "가죽 울림통에 3줄, 큼직한 은행잎 모양 바치(채)로 줄과 가죽을 동시에 때리는 일본 발현악기. 특히 츠가루 샤미센은 두들기고 긁는 타악적 즉흥 연주로 '일본의 블루스'라 불린다.",

    sound: {
      tone: ["타격감", "카랑카랑", "거칢", "콧소리"],
      toneDesc: "'바칭!' 하고 가죽을 때리는 어택에 사와리(의도된 버즈)가 지지직 얹힌다. 반주 없이도 리듬과 멜로디가 동시에 성립.",
      volume: 4,
      sustain: 2,
    },

    play: {
      pitchFixed: "F3",
      fastPlay: 5,
      chordal: false,
      melodic: true,
      singAlong: true,
      improv: 4,
      roles: ["멜로디", "리듬반주"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "무프렛이지만 줄 장력이 기타보다 부드럽다. 바치 쥔 오른손·손목 피로가 먼저 옴.",
      embouchure: 0,
      breath: 0,
      weight: 2,
      weightDesc: "2~3kg. 앉아 무릎 위 거치.",
      posture: "정좌 전통이지만 의자 연주도 보편화. 부담 적음",
      postureRisk: ["손목"],
      handSize: "넥이 가늘어 손 작아도 유리",
    },

    cost: {
      entryKRW: [300000, 1200000],
      entryDesc: "국내 유통 거의 없음. 일본 중고 직구가 정석(중고 나가우타용은 저렴, 츠가루용은 비쌈). 합성 가죽 입문기 권장.",
      midKRW: [1500000, 6000000],
      running: "가죽(합성이면 반영구)·줄·바치. 천연 가죽은 터지면 수십만원 재작업",
    },
    practical: {
      portability: 3,
      noise: 4,
      apartmentOk: "타격음이 커서 시간대 조심. 약음용 고무 바치 존재",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 3,
    },

    vibe: {
      tags: ["이국적", "무대 장악", "자유로운", "힙한"],
      trendy: 3,
      rarityKR: 4,
      showOff: 5,
    },

    genres: { main: ["동아시아 전통"], sub: ["영화·게임 OST", "록·메탈", "블루스"] },

    kinship: {
      easyFrom: ["기타", "밴조", "비파"],
      sameTuning: [],
      leadsTo: ["고토", "비파"],
    },
    ensemble: ["츠가루 샤미센 경연·독주", "나가우타(가부키 반주)", "민요 반주", "요시다 형제식 퓨전 밴드"],

    tracks: [
      { id: "tsugaru", label: "츠가루", genres: ["동아시아 전통", "블루스"], note: "두들기는 즉흥 독주. 굵은 넥·무거운 바치. 화려함 최상." },
      { id: "nagauta", label: "나가우타·민요", genres: ["동아시아 전통"], note: "노래 반주 중심. 가는 넥, 섬세한 음색." },
    ],

    caveats: [
      "무프렛 3현이라 음정은 귀로 잡는다(포지션 스티커로 입문 가능)",
      "국내 레슨 사실상 전무. 일본 온라인 레슨·유튜브 의존",
      "천연 가죽 악기는 한국 사계절 습도에 취약 — 입문은 합성 가죽 필수",
    ],
    funFacts: [
      "츠가루 샤미센은 눈 내리는 아오모리의 거리 악사들이 밥벌이 경쟁으로 발전시킨 장르다",
      "요시다 형제가 샤미센으로 록 페스티벌을 뒤집으며 세계에 알렸다",
    ],
  },

  {
    id: "pipa",
    name: "비파",
    aka: ["pipa", "琵琶", "중국 비파"],
    family: "발현·류트류(중국)",
    desc: "배(梨) 모양 몸통을 세워 안고 다섯 손가락에 인조 손톱을 붙여 연주하는 중국 4현 발현악기. 다섯 손가락이 물레방아처럼 도는 트레몰로(룬즈)와 전투 묘사곡의 격렬함으로 '악기의 왕'이라 불린다.",

    sound: {
      tone: ["카랑카랑", "화려함", "타격감", "반짝임"],
      toneDesc: "구슬이 옥쟁반에 쏟아진다고 백거이가 묘사한 그 소리. 트레몰로가 물결처럼 이어지다 현을 비틀어 긁으면 칼싸움 효과음까지 낸다.",
      volume: 3,
      sustain: 2,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 5,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["멜로디", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 1,
      callusDesc: "오른손은 인조 손톱(테이프 부착)이라 통증 없음. 왼손 운지만 가벼운 적응기.",
      embouchure: 0,
      breath: 0,
      weight: 2,
      weightDesc: "2~3kg. 세워 안는 자세라 체감 가벼움.",
      posture: "의자에 앉아 수직으로 안는 자세. 부담 적음",
      postureRisk: [],
      handSize: "넥 상단 프렛 간격이 넓어 손 작으면 하이 포지션이 처음에 버겁다",
    },

    cost: {
      entryKRW: [300000, 1000000],
      entryDesc: "중국 브랜드 입문기 직구·국내 중국악기사 기준. 인조 손톱·테이프 소모품 포함.",
      midKRW: [1000000, 4000000],
      running: "인조 손톱·테이프가 정기 소모품. 줄값 소액",
    },
    practical: {
      portability: 3,
      noise: 3,
      apartmentOk: "어쿠스틱 기타급. 낮 연습 무난",
      selfLearn: 2,
      lessonKR: 2,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 2,
    },

    vibe: {
      tags: ["화려함", "이국적", "고풍스러운", "무대 장악"],
      trendy: 2,
      rarityKR: 4,
      showOff: 5,
    },

    genres: { main: ["동아시아 전통"], sub: ["영화·게임 OST", "뉴에이지"] },

    kinship: {
      easyFrom: ["기타", "우쿨렐레", "샤미센"],
      sameTuning: [],
      leadsTo: ["고쟁", "류친(소형 비파)"],
    },
    ensemble: ["중국 민악 합주", "강남 사죽", "솔로(무곡·문곡)"],

    caveats: [
      "트레몰로(룬즈) 하나를 제대로 굴리는 데만 수개월 — 간판 주법이 곧 최대 관문",
      "국내 레슨은 서울 중국악기 학원 중심으로 소수",
      "한국 전통 비파(당비파·향비파)와는 다른 악기다 — 국악 비파는 복원 단계라 배우기 더 어렵다",
    ],
    funFacts: [
      "'비'는 밖으로 튕기기, '파'는 안으로 튕기기라는 주법 이름이 그대로 악기 이름이 됐다",
      "대표곡 '십면매복'은 기원전 해하 전투를 악기 하나로 중계하는 배틀 실황곡이다",
    ],
  },

  {
    id: "guzheng",
    name: "고쟁",
    aka: ["guzheng", "古筝", "구정"],
    family: "발현·치터류(중국)",
    desc: "21줄을 인조 손톱으로 뜯는 중국의 대형 치터. 오른손으로 뜯고 왼손으로 줄을 눌러 음을 휘게 하며, 손끝으로 줄을 쓸어내리는 글리산도 한 번에 '무협 영화' 공기가 만들어진다.",

    sound: {
      tone: ["영롱함", "화려함", "맑음", "반짝임"],
      toneDesc: "구슬 굴러가는 글리산도와 쨍한 트레몰로. 가야금보다 밝고 크고 화려한, 물이 흐르는 소리.",
      volume: 4,
      sustain: 3,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 2,
      roles: ["멜로디", "화음반주", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 1,
      callusDesc: "인조 손톱(테이프 부착)으로 뜯어 오른손 통증 거의 없음. 왼손 눌러짚기만 가볍게 아프다.",
      embouchure: 0,
      breath: 0,
      weight: 4,
      weightDesc: "길이 1.6m·10kg 안팎. 전용 스탠드 포함 사실상 가구.",
      posture: "의자+스탠드 연주가 표준이라 앉은 자세는 편하다",
      postureRisk: [],
      handSize: "제약 거의 없음",
    },

    cost: {
      entryKRW: [300000, 900000],
      entryDesc: "중국 브랜드(둔황 등) 입문기 직구·국내 중국악기사 기준. 배송 부피가 커서 운임 유의.",
      midKRW: [1000000, 4000000],
      running: "인조 손톱·테이프 소모품. 줄 교체 소액",
    },
    practical: {
      portability: 1,
      noise: 4,
      apartmentOk: "음량이 커서 시간대 조심. 약음 펠트 사용 가능",
      selfLearn: 3,
      lessonKR: 2,
      entryBarrier: 2,
      quickReward: 5,
      maintenance: 2,
    },

    vibe: {
      tags: ["화려함", "우아한", "이국적", "무대 장악"],
      trendy: 3,
      rarityKR: 3,
      showOff: 5,
    },

    genres: { main: ["동아시아 전통"], sub: ["뉴에이지", "영화·게임 OST", "명상·사운드힐링"] },

    kinship: {
      easyFrom: ["가야금", "고토", "하프", "피아노"],
      sameTuning: [],
      leadsTo: ["구친", "비파"],
    },
    ensemble: ["중국 민악 합주", "고쟁 중주", "솔로"],

    caveats: [
      "펜타토닉 조율이라 시작은 쉽지만, 조 옮기려면 브리지를 다시 세팅해야 한다",
      "악기가 크고 무거워 '어디 둘지'부터 결정하고 살 것",
      "국내 레슨은 중국악기 학원·화교 커뮤니티 중심으로 서울 외 지역은 드묾",
    ],
    funFacts: [
      "뜯자마자 그럴듯한 소리가 나 중국에서 '입문 만족도 1위' 전통악기로 통한다",
      "가야금(12현)·고토(13현)의 원형이 된 중국 쟁이 현대에 21현으로 커진 것이다",
    ],
  },

  {
    id: "guqin",
    name: "구친",
    aka: ["guqin", "古琴", "고금", "칠현금"],
    family: "발현·치터류(중국 문인악기)",
    desc: "브리지 없이 7줄을 맨손으로 누르고 쓸며 연주하는 3천 년 역사의 중국 문인 악기. 소리보다 여백, 하모닉스와 슬라이드의 잔향을 듣는 '혼자 마음을 다스리는' 명상적 악기다.",

    sound: {
      tone: ["낮고 깊음", "먹먹함", "명상적", "나무 울림"],
      toneDesc: "울림통 속으로 잦아드는 낮은 여운, 줄 위를 미끄러지는 손가락 마찰음까지 음악이다. 세상에서 가장 조용한 현악기급.",
      volume: 1,
      sustain: 4,
    },

    play: {
      pitchFixed: "F3",
      fastPlay: 2,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["멜로디"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "왼손이 줄 위를 누른 채 미끄러지는 주법이라 손끝이 단련될 때까지 쓸리는 통증이 있다.",
      embouchure: 0,
      breath: 0,
      weight: 3,
      weightDesc: "1.2m·3~4kg. 탁자에 올려 연주.",
      posture: "탁자+의자 연주라 자세 부담 최소",
      postureRisk: [],
      handSize: "제약 거의 없음",
    },

    cost: {
      entryKRW: [500000, 2000000],
      entryDesc: "직구 기준. 저가 합판 구친은 잔향이 죽어 악기 구실을 못 한다는 평이 정설 — 입문가 하한이 다른 중국악기보다 높다.",
      midKRW: [2000000, 10000000],
      running: "줄 교체 정도. 옻칠 몸통 관리",
    },
    practical: {
      portability: 3,
      noise: 1,
      apartmentOk: "속삭임 수준 음량. 아파트 심야 연습도 가능한 최강 조용함",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 2,
      maintenance: 2,
    },

    vibe: {
      tags: ["명상적", "학구적", "고풍스러운", "장인 정신", "컬트적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 2,
    },

    genres: { main: ["동아시아 전통"], sub: ["명상·사운드힐링"] },

    kinship: {
      easyFrom: ["고쟁", "기타(슬라이드 주법)"],
      sameTuning: [],
      leadsTo: ["고쟁", "서예·다도(농담 반 진담 반의 문인 세트)"],
    },
    ensemble: ["기본은 독주(자기 자신이 청중)", "친-소(구친+퉁소) 이중주"],

    caveats: [
      "악보가 오선보가 아니라 한자 조합 기보(감자보) — 문자 해독부터 공부다",
      "무대·합주용이 아니라 자기수양용 악기다. 남에게 들려주는 게 목적이면 고쟁을 권함",
      "국내 레슨 사실상 전무. 중국어권 인강 의존",
    ],
    funFacts: [
      "유네스코 인류무형문화유산. 공자가 연주했다는 바로 그 악기다",
      "1977년 보이저 골든 레코드에 실려 구친 곡 '유수(流水)'가 지금 성간 우주를 날고 있다",
    ],
  },

  {
    id: "oud",
    name: "우드",
    aka: ["oud", "عود", "아우드"],
    family: "발현·류트류(중동)",
    desc: "프렛이 전혀 없는 서양배 모양 몸통의 아랍·터키 발현악기. 리샤(긴 피크)로 낮고 둥근 음을 굴리며, 마캄(아랍 선법)의 미분음을 자유자재로 짚는 중동 음악의 왕. 류트와 기타의 직계 조상이다.",

    sound: {
      tone: ["낮고 깊음", "따뜻함", "애수", "나무 울림"],
      toneDesc: "프렛 없는 짧은 서스테인의 둥근 저음이 노래하듯 흐른다. 트레몰로와 미분음 장식이 사막 밤공기 같은 정서를 만든다.",
      volume: 3,
      sustain: 2,
    },

    play: {
      pitchFixed: "F3",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 5,
      roles: ["멜로디", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "나일론 줄이라 기타(쇠줄)보다 순하다. 클래식 기타 수준의 적응기.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1kg 안팎으로 의외로 가볍다. 몸통이 둥글어 안는 감각만 낯설다.",
      posture: "앉아서 안는 자세. 부담 적음",
      postureRisk: [],
      handSize: "넥이 짧고 폭이 넓다. 손 작아도 가능",
    },

    cost: {
      entryKRW: [300000, 1000000],
      entryDesc: "국내 유통 거의 없음. 터키산 입문기 직구 기준(터키 리라 환율 덕에 가성비 좋은 편).",
      midKRW: [1000000, 4000000],
      running: "나일론 줄값 소액. 접합 몸통이라 건조·충격 주의",
    },
    practical: {
      portability: 3,
      noise: 3,
      apartmentOk: "클래식 기타급. 낮 연습 무난",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 2,
    },

    vibe: {
      tags: ["이국적", "고풍스러운", "낭만적", "자유로운"],
      trendy: 2,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["인도·중동"], sub: ["발칸·클레즈머·집시", "명상·사운드힐링", "영화·게임 OST"] },

    kinship: {
      easyFrom: ["기타", "만돌린", "사즈"],
      sameTuning: [],
      leadsTo: ["사즈", "카만체", "류트"],
    },
    ensemble: ["아랍 고전 앙상블(타흣)", "터키 파슬", "월드뮤직 밴드", "솔로 타크심(즉흥)"],

    caveats: [
      "프렛 제로(F3) — 기타 경험자도 음정을 처음부터 귀로 다시 배운다",
      "코드 반주 악기가 아니라 선율+즉흥(타크심) 악기다. 노래 반주 목적이면 기타가 낫다",
      "국내 레슨 사실상 전무. 영어·아랍어·터키어권 온라인 강좌는 풍부",
    ],
    funFacts: [
      "유럽으로 건너가 류트(l'oud→lute)가 되었고, 그 후손이 기타다",
      "아랍 음악에서 '악기의 술탄'으로 불리며 작곡가의 필수 소양 악기다",
    ],
  },

  {
    id: "saz",
    name: "사즈",
    aka: ["saz", "bağlama", "바글라마"],
    family: "발현·류트류(터키)",
    desc: "물방울 몸통에 긴 넥, 묶어 감은 이동식 프렛이 미분음 자리까지 잡아주는 터키 국민 악기. 얇고 찰랑이는 금속성 스트로크로 노래 반주와 선율을 함께 소화하며, 아나톨리아 음유시인(아식) 전통의 심장이다.",

    sound: {
      tone: ["금속성", "반짝임", "애수", "카랑카랑"],
      toneDesc: "얇은 쇠줄 코스가 찰랑찰랑 울리는 은빛 소리. 드론 코스를 울리며 멜로디를 얹으면 혼자서도 꽉 찬다.",
      volume: 3,
      sustain: 3,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 4,
      roles: ["멜로디", "리듬반주", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "가는 쇠줄이지만 장력이 낮아 기타보다 순한 적응기.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1kg 안팎. 긴 넥만 조심하면 휴대 부담 없음.",
      posture: "앉아 안는 자세. 부담 적음",
      postureRisk: [],
      handSize: "넥은 길지만 폭이 좁아 손 작아도 유리",
    },

    cost: {
      entryKRW: [200000, 600000],
      entryDesc: "국내 유통 거의 없음. 터키 직구 기준 — 본토 물가 덕에 민속 류트 중 가성비 최상급.",
      midKRW: [600000, 2000000],
      running: "줄값 소액. 유지비 거의 없음",
    },
    practical: {
      portability: 4,
      noise: 3,
      apartmentOk: "통기타보다 작은 음량. 낮 연습 무난",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 1,
    },

    vibe: {
      tags: ["이국적", "자유로운", "소박한", "낭만적"],
      trendy: 2,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["인도·중동"], sub: ["발칸·클레즈머·집시", "포크", "명상·사운드힐링"] },

    kinship: {
      easyFrom: ["기타", "우쿨렐레", "만돌린"],
      sameTuning: [],
      leadsTo: ["우드", "부주키"],
    },
    ensemble: ["터키 민속 합주", "아식(음유시인) 노래 반주", "월드뮤직 밴드"],

    caveats: [
      "프렛이 서양 12음이 아니라 미분음 자리까지 묶여 있다 — 서양 악보 감각과 어긋나는 지점을 즐길 수 있어야 함",
      "국내 레슨 사실상 전무. 터키어·영어 유튜브 의존",
      "저가 직구품은 프렛 위치·마감 편차가 있어 셀러 평판 확인 필수",
    ],
    funFacts: [
      "터키에서는 '국민 절반이 집에 사즈가 있다'는 말이 있을 정도의 국민 악기",
      "묶은 프렛이라 원하는 미분음 자리로 프렛을 밀어 옮길 수 있다",
    ],
  },

  {
    id: "sitar",
    name: "시타르",
    aka: ["sitar", "सितार"],
    family: "발현·류트류(인도)",
    desc: "호리병박 울림통에 굽은 금속 프렛, 연주현 아래 공명현 10여 줄이 반짝이는 북인도 고전 악기. 줄을 옆으로 끌어당겨 음을 한없이 휘는 '민드'와 웅웅거리는 배음(자와리)이 라가의 우주를 만든다.",

    sound: {
      tone: ["신비", "몽환", "금속성", "화려함"],
      toneDesc: "웅- 하고 번지는 배음 버즈 위로 음이 미끄러지고 휜다. 한 음을 뜯어도 공명현이 무지개처럼 따라 울린다.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 4,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 5,
      roles: ["멜로디"],
    },

    body: {
      saliva: 0,
      callus: 4,
      callusDesc: "왼손 검지·중지로 쇠줄을 옆으로 2~3음씩 끌어당기는 민드 주법 — 손끝이 줄에 패이며 단련되는 통증이 기타 이상.",
      embouchure: 0,
      breath: 0,
      weight: 3,
      weightDesc: "1.2m·3~4kg. 호리병박 울림통이 깨지기 쉬워 운반이 조심스럽다.",
      posture: "바닥 양반다리에 발등·무릎으로 악기를 받치는 전통 자세 — 고관절 유연성이 없으면 자세부터 수행",
      postureRisk: ["허리"],
      handSize: "제약보다 통증·자세 적응이 관건",
    },

    cost: {
      entryKRW: [500000, 1500000],
      entryDesc: "국내 유통 거의 없음. 인도 공방 직구 기준(저가 관광용은 조율 불가 지뢰 — 연주용 등급 확인 필수).",
      midKRW: [1500000, 5000000],
      running: "줄 세트가 특수 규격. 자와리(브리지 표면) 연마는 수년 주기 전문가 작업",
    },
    practical: {
      portability: 2,
      noise: 3,
      apartmentOk: "음량 중간. 낮 연습 가능",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 4,
      quickReward: 2,
      maintenance: 4,
    },

    vibe: {
      tags: ["이국적", "명상적", "몽환", "학구적", "컬트적"],
      trendy: 2,
      rarityKR: 4,
      showOff: 5,
    },

    genres: { main: ["인도·중동"], sub: ["명상·사운드힐링", "일렉트로닉", "록·메탈"] },

    kinship: {
      easyFrom: ["기타", "사즈"],
      sameTuning: [],
      leadsTo: ["사랑기", "수르바하르", "타블라(리듬 이해)"],
    },
    ensemble: ["라가 독주(+타블라)", "인도 고전 앙상블", "사이키델릭·퓨전 밴드"],

    caveats: [
      "곡이 아니라 라가(선법)와 즉흥 체계를 배우는 악기 — 한 곡 뽑기식 목표와는 문법이 다르다",
      "공명현 포함 20줄 조율이 연습 시간의 상당 부분을 먹는다",
      "국내 레슨 극소수(인도문화원 등 간헐적). 영어권 온라인 강좌는 풍부",
    ],
    funFacts: [
      "비틀즈 'Norwegian Wood'의 조지 해리슨이 서구 팝에 시타르를 심었다",
      "라비 샹카르는 우드스톡과 그래미를 넘나든 최초의 인도 고전 슈퍼스타였다",
    ],
  },

  {
    id: "kora",
    name: "코라",
    aka: ["kora", "서아프리카 하프류트"],
    family: "발현·하프류트(서아프리카)",
    desc: "반으로 가른 큰 박에 가죽을 씌운 울림통에 21줄을 세로로 걸고, 양손 엄지·검지 네 손가락만으로 뜯는 서아프리카의 하프류트. 베이스·반주·멜로디가 동시에 흐르는 소리가 '혼자 치는 하프+기타'다.",

    sound: {
      tone: ["영롱함", "따뜻함", "그루브", "반짝임"],
      toneDesc: "하프의 맑음과 기타의 리듬감 사이. 물방울 구르듯 순환하는 아르페지오 위에 멜로디가 넘실댄다.",
      volume: 3,
      sustain: 3,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 5,
      roles: ["멜로디", "화음반주", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "나일론(낚싯줄) 현을 엄지·검지로 뜯는다. 가벼운 굳은살 수준.",
      embouchure: 0,
      breath: 0,
      weight: 3,
      weightDesc: "3~5kg. 박 울림통이 부피가 커 운반 시 큰 짐.",
      posture: "앉아서 몸 앞에 세워 안는 자세. 부담 적음",
      postureRisk: [],
      handSize: "네 손가락만 쓰므로 손 크기 제약 거의 없음",
    },

    cost: {
      entryKRW: [800000, 2500000],
      entryDesc: "국내 유통 없음. 감비아·세네갈 장인 직구 또는 유럽 공방 기준(운송비 비중 큼). 저가 관광용은 조율 못 버티는 지뢰.",
      midKRW: [2500000, 6000000],
      running: "낚싯줄 현이라 줄값은 헐값. 가죽 울림판 습도 관리",
    },
    practical: {
      portability: 2,
      noise: 3,
      apartmentOk: "하프 수준의 순한 음량. 낮 연습 무난",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 4,
      maintenance: 3,
    },

    vibe: {
      tags: ["이국적", "명상적", "자유로운", "장인 정신", "서정적"],
      trendy: 2,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["아프리카 리듬"], sub: ["명상·사운드힐링", "뉴에이지", "포크"] },

    kinship: {
      easyFrom: ["하프", "핑거스타일 기타", "피아노"],
      sameTuning: [],
      leadsTo: ["응고니", "칼림바"],
    },
    ensemble: ["그리오 노래 반주(독주+노래)", "월드뮤직 밴드", "재즈 크로스오버"],

    caveats: [
      "전통 가죽 줄감개 코라는 조율이 곤욕 — 기타 페그로 개량된 모델을 살 것",
      "국내 연주자·레슨이 손에 꼽힌다. 영어·프랑스어권 온라인 강좌 의존",
      "악보 문화가 아니라 구전·패턴 문화라 귀 카피 학습이 기본",
    ],
    funFacts: [
      "그리오(구전 역사가) 가문이 대대로 세습해 온 이야기꾼의 악기다",
      "왼손 베이스+오른손 멜로디의 순환 패턴(쿰벵고)은 미니멀 음악처럼 트랜스를 만든다",
    ],
  },

  {
    id: "santur",
    name: "산투르",
    aka: ["santur", "santoor", "سنتور"],
    family: "타현·해머드 덜시머류(페르시아)",
    desc: "사다리꼴 상자 위 72줄을 깃털처럼 가벼운 나무채(메즈랍)로 두드리는 페르시아 타현악기. 손끝으로 줄을 누르는 일이 아예 없어 '현악기의 소리, 타악기의 몸'을 가졌다.",

    sound: {
      tone: ["영롱함", "반짝임", "몽환", "금속성"],
      toneDesc: "빗방울이 유리에 튀듯 잘게 반짝이는 트레몰로. 댐퍼가 없어 모든 음이 은은하게 섞이며 안개 같은 잔향을 만든다.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 5,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 5,
      roles: ["멜로디", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "채로 두드리므로 손끝 통증 제로. 현악기 소리를 내면서 굳은살이 전혀 없는 드문 루트.",
      embouchure: 0,
      breath: 0,
      weight: 3,
      weightDesc: "4~5kg + 스탠드. 자주 옮길 악기는 아니다.",
      posture: "책상 연주 자세. 손목 스냅 반복 사용",
      postureRisk: ["손목"],
      handSize: "제약 없음",
    },

    cost: {
      entryKRW: [400000, 1200000],
      entryDesc: "국내 유통 없음. 이란 공방 직구 기준(제재·운송 변수 커서 유럽 경유 구매가 현실적).",
      midKRW: [1200000, 4000000],
      running: "72줄 조율이 일상 유지비(시간). 줄·채 교체 소액",
    },
    practical: {
      portability: 2,
      noise: 3,
      apartmentOk: "음량 중간·타격음 부드러움. 낮 연습 무난",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 4,
    },

    vibe: {
      tags: ["이국적", "명상적", "몽환", "우아한"],
      trendy: 1,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["인도·중동"], sub: ["명상·사운드힐링", "뉴에이지"] },

    kinship: {
      easyFrom: ["피아노", "해머드 덜시머", "마림바"],
      sameTuning: [],
      leadsTo: ["해머드 덜시머", "침발롬", "카눈"],
    },
    ensemble: ["페르시아 전통 앙상블", "인도 산투르(카슈미르식) 라가", "명상·힐링 연주"],

    caveats: [
      "조율할 줄이 72개 — 연주보다 조율을 먼저 배운다는 농담이 진담",
      "페르시아 음계(미분음) 조율 체계를 익혀야 본토 레퍼토리가 열린다",
      "국내 레슨 전무. 이란·인도계 온라인 강좌 의존",
    ],
    funFacts: [
      "피아노의 먼 조상 — 줄을 해머로 때리는 발상이 여기서 건반악기로 이어졌다",
      "인도의 산투르(카슈미르)는 같은 이름의 사촌으로, 라가 연주용으로 개량됐다",
    ],
  },

  {
    id: "hammered_dulcimer",
    name: "해머드 덜시머",
    aka: ["hammered dulcimer", "해머 덜시머"],
    family: "타현·해머드 덜시머류",
    desc: "사다리꼴 몸통에 펼쳐진 수십 코스의 줄을 양손의 작은 나무 해머로 두드리는 타현악기. 줄을 손으로 누르지 않으니 손끝이 하나도 안 아픈, '현악기 소리를 갖고 싶지만 굳은살은 싫은' 사람의 정답 카드다.",

    sound: {
      tone: ["영롱함", "반짝임", "맑음", "나무 울림"],
      toneDesc: "오르골을 크게 확대한 듯한 반짝임. 두드린 음들이 서로 섞이며 벨소리 같은 잔향 구름을 만든다.",
      volume: 4,
      sustain: 4,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["멜로디", "화음반주", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "해머만 쥔다. 굳은살·물집 개념 자체가 없다 — 손끝 통증 때문에 기타를 포기한 사람의 대표 우회로.",
      embouchure: 0,
      breath: 0,
      weight: 4,
      weightDesc: "7~10kg + 전용 스탠드. 집 붙박이형에 가깝다.",
      posture: "서거나 앉아 책상 각도로 두드림. 자세 부담 적고 손목만 관리",
      postureRisk: ["손목"],
      handSize: "제약 없음",
    },

    cost: {
      entryKRW: [600000, 2000000],
      entryDesc: "국내 유통 없음. 미국(더스티 스트링스 등)·유럽 직구 기준이며 부피 탓에 배송비가 상당하다.",
      midKRW: [2000000, 6000000],
      running: "줄 교체 드묾. 대신 수십 줄 조율이 정기 노동",
    },
    practical: {
      portability: 2,
      noise: 4,
      apartmentOk: "음량이 크고 잔향이 길다. 낮 시간·약음 펠트 권장",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 3,
    },

    vibe: {
      tags: ["이국적", "고풍스러운", "루츠·어쿠스틱", "명상적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["포크", "켈틱·아이리시"], sub: ["컨트리·블루그래스", "명상·사운드힐링", "CCM·교회음악"] },

    kinship: {
      easyFrom: ["피아노", "마림바", "산투르"],
      sameTuning: [],
      leadsTo: ["침발롬", "산투르"],
    },
    ensemble: ["아이리시 세션", "올드타임·포크 밴드", "찬양·힐링 연주"],

    caveats: [
      "줄이 수십 개라 '어느 줄이 어느 음인지' 줄 지도를 외우는 게 초반 최대 과제 — 배열이 5도 간격 지그재그라 처음엔 미로 같다",
      "조율기는 필수품 — 수십 줄을 주기적으로 잡아야 한다",
      "크고 무거워 '두는 악기'다. 세션에 들고 다니는 건 각오가 필요",
    ],
    funFacts: [
      "피아노의 직계 조상 중 하나 — 줄을 해머로 친다는 아이디어가 그대로 건반화됐다",
      "미국 올드타임과 아이리시, 중동 산투르, 헝가리 침발롬이 모두 한 가족이다",
    ],
  },

  {
    id: "cimbalom",
    name: "침발롬",
    aka: ["cimbalom", "concert cimbalom", "침발롬"],
    family: "타현·해머드 덜시머류(헝가리)",
    desc: "다리 4개와 댐퍼 페달까지 갖춘 '그랜드피아노급 해머드 덜시머'. 솜 감은 채로 저음 줄을 두드리면 몽환적인 트레몰로가 홀을 채우고, 집시 밴드와 클래식 오케스트라를 오가는 헝가리의 자존심이다.",

    sound: {
      tone: ["몽환", "웅장함", "영롱함", "애수"],
      toneDesc: "솜 채로 두드리는 부드러운 어택과 페달 잔향. 저음 트레몰로가 물안개처럼 번지는, 타현악기 중 가장 오케스트라적인 소리.",
      volume: 4,
      sustain: 5,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 4,
      roles: ["멜로디", "화음반주", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "채 연주라 손끝 무통. 타현 3형제(산투르·덜시머·침발롬) 공통의 장점.",
      embouchure: 0,
      breath: 0,
      weight: 5,
      weightDesc: "콘서트 침발롬은 100kg 안팎의 가구 — 사실상 피아노처럼 '설치'하는 악기.",
      posture: "의자에 앉아 페달+양손. 피아노와 유사한 자세 부담",
      postureRisk: ["손목"],
      handSize: "제약 없음",
    },

    cost: {
      entryKRW: [2000000, 6000000],
      entryDesc: "국내 유통 없음. 헝가리·루마니아 공방·중고 직구 기준(소형·중고 하한). 콘서트 그랜드 신품은 1천만원대 — 운송비도 별도 각오.",
      midKRW: [8000000, 20000000],
      running: "125현 안팎 조율이 대공사(조율사 개념). 채 헤드 솜 교체",
    },
    practical: {
      portability: 1,
      noise: 4,
      apartmentOk: "음량·잔향 모두 커서 주택·연습실 전제",
      selfLearn: 1,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 4,
    },

    vibe: {
      tags: ["고풍스러운", "컬트적", "우아한", "무대 장악", "위압적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 5,
    },

    genres: { main: ["발칸·클레즈머·집시"], sub: ["클래식", "영화·게임 OST", "탱고"] },

    kinship: {
      easyFrom: ["피아노", "해머드 덜시머", "산투르"],
      sameTuning: [],
      leadsTo: ["해머드 덜시머", "타악 앙상블"],
    },
    ensemble: ["헝가리 집시 밴드", "오케스트라 객원(코다이·스트라빈스키)", "클레즈머 밴드"],

    caveats: [
      "악기 확보 자체가 프로젝트다 — 국내 중고 시장이 없어 유럽 직구+국제 운송을 감당해야 함",
      "놓을 공간과 옮길 인력(2인 이상)이 상시 문제",
      "국내 연주자가 극소수라 레슨은 해외 온라인 의존",
    ],
    funFacts: [
      "코다이 '하리 야노시'와 영화 '셜록 홈즈' OST의 신비한 트레몰로가 침발롬이다",
      "헝가리 카페 문화에서는 집시 밴드의 침발롬이 오늘날의 DJ 포지션이었다",
    ],
  },

  {
    id: "kalimba",
    name: "칼림바",
    aka: ["kalimba", "mbira", "음비라", "엄지 피아노"],
    family: "발현·라멜로폰(음판)",
    desc: "나무 몸통 위 금속 음판을 양손 엄지로 튕기는 아프리카 유래의 '엄지 피아노'. 오르골 소리를 내 손으로 만드는 감각으로, 사자마자 그날 한 곡이 되는 즉각 보상의 왕이다.",

    sound: {
      tone: ["영롱함", "맑음", "따뜻함", "귀여운"],
      toneDesc: "오르골과 물방울 사이의 동글동글한 소리. 음 하나하나가 예뻐서 대충 튕겨도 힐링 ASMR이 된다.",
      volume: 2,
      sustain: 3,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["멜로디", "화음반주", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 1,
      callusDesc: "엄지 손톱·살로 튕겨 처음엔 엄지 끝이 얼얼하지만 굳은살 단계까지는 안 간다.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "손바닥 크기 300g. 주머니·가방 어디든.",
      posture: "소파에서도 침대에서도. 자세 개념이 없는 수준",
      postureRisk: [],
      handSize: "엄지 두 개면 끝. 손 크기 무관",
    },

    cost: {
      entryKRW: [15000, 60000],
      entryDesc: "국내 어디서나 구매 가능. 17음 C장조 표준형 기준이며 3만원대면 충분히 좋은 소리.",
      midKRW: [80000, 300000],
      running: "유지비 사실상 0. 가끔 음판 조율(망치로 밀기)",
    },
    practical: {
      portability: 5,
      noise: 2,
      apartmentOk: "음량이 작아 심야 연습도 무난한 편",
      selfLearn: 5,
      lessonKR: 2,
      entryBarrier: 1,
      quickReward: 5,
      maintenance: 1,
    },

    vibe: {
      tags: ["귀여운", "명상적", "소박한", "힙한"],
      trendy: 4,
      rarityKR: 1,
      showOff: 2,
    },

    genres: { main: ["명상·사운드힐링"], sub: ["뉴에이지", "팝·싱어송라이터", "영화·게임 OST", "아프리카 리듬"] },

    kinship: {
      easyFrom: ["피아노", "핸드팬"],
      sameTuning: [],
      leadsTo: ["음비라(짐바브웨 전통)", "핸드팬", "코라"],
    },
    ensemble: ["기본은 혼자(유튜브 커버 문화)", "버스킹", "음비라 전통 합주(전통 트랙)"],

    tracks: [
      { id: "modern", label: "모던 칼림바(17음)", genres: ["명상·사운드힐링", "뉴에이지", "팝·싱어송라이터"], note: "C장조 다이어토닉. 숫자 악보로 당일 입문." },
      { id: "mbira", label: "음비라(전통)", genres: ["아프리카 리듬"], note: "짐바브웨 쇼나족 전통. 폴리리듬 순환 패턴, 의식 음악의 뿌리." },
    ],

    caveats: [
      "C장조 고정이라 반음 있는 곡은 못 치거나 개조가 필요(크로매틱 칼림바는 별도)",
      "너무 쉬워서 금방 정체기 — '더 배울 것'을 찾는 사람에겐 심심해질 수 있다",
      "저가품은 음판 끝이 날카롭거나 잡음(버즈)이 있으니 후기 확인",
    ],
    funFacts: [
      "원형인 음비라는 짐바브웨에서 조상과 대화하는 의식 악기로 유네스코 유산이다",
      "유튜브 힐링·ASMR 붐을 타고 국내에서 '악기 입문 선물 1순위'가 됐다",
    ],
  },

];

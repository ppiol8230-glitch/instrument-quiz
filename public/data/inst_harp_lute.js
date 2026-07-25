// 악기 추천 설문 DB — 배치: 하프류 + 류트족·초기 발현 + 포크 발현 (24종)
// SCHEMA.md v1 준수. 가격은 한국 실구매(국내 취급점·직구·공방 주문) 기준, 불확실 범위는 entryDesc에 명시.

const INST_HARP_LUTE = [

  // ════════════════════════ 하프류 (5) ════════════════════════

  {
    id: "concert_harp",
    name: "콘서트 하프",
    aka: ["pedal harp", "그랜드 하프", "페달 하프"],
    family: "하프류",
    desc: "47현·7페달의 오케스트라 하프. 발로 페달을 밟아 반음을 만들고, 두 손 여덟 손가락(새끼 제외)으로 뜯는다. 하프의 최종 보스이자 가격의 최종 보스.",

    sound: {
      tone: ["영롱함", "웅장함", "화려함", "맑음"],
      toneDesc: "홀 전체를 감싸는 영롱한 글리산도와 깊은 저음. 작은 하프와는 울림의 스케일 자체가 다르다. 여운이 길어 한 음만 뜯어도 공간이 찬다.",
      volume: 4,
      sustain: 5,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 2,
      roles: ["멜로디", "화음반주", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 3,
      callusDesc: "거트/나일론 현을 손끝 살로 뜯는다. 초반 물집·껍질 벗겨짐은 통과의례, 이후 단단한 굳은살로 정착.",
      embouchure: 0,
      breath: 0,
      weight: 5,
      weightDesc: "36~40kg에 키 180cm급. 혼자 계단 이동 불가, 이사엔 전용 카트와 밴이 필요하다. 사실상 '집에 두는 가구'.",
      posture: "악기를 어깨에 기대어 앉는 자세 자체는 편하나, 장시간 연습 시 오른어깨·등 긴장. 페달 조작으로 발도 바쁘다.",
      postureRisk: ["목어깨", "허리"],
      handSize: "손이 크면 넓은 아르페지오에 유리하지만, 작아도 운지 배치로 커버 가능.",
    },

    cost: {
      entryKRW: [20000000, 50000000],
      entryDesc: "입문용 스튜던트 페달 하프(살비·라이온앤힐리 등)가 2천만원대부터. 국내 공식 수입처(하프 갤러리 등) 존재. 최상위 모델은 3억 원을 넘는다. '입문'의 가격 게이트가 모든 악기 중 최고.",
      midKRW: [50000000, 150000000],
      running: "현 47줄 교체·정기 레귤레이션(페달 정비)까지 연 수십만~백만원대. 습도 관리 필수.",
    },
    practical: {
      portability: 1,
      noise: 3,
      apartmentOk: "음량은 크지만 타격음이 아니라 낮 연습은 대체로 가능. 문제는 소음보다 악기를 들일 공간과 반입 자체.",
      selfLearn: 1,
      lessonKR: 3,
      entryBarrier: 4,
      quickReward: 3,
      maintenance: 3,
    },

    vibe: {
      tags: ["우아한", "클래식 정통", "무대 장악", "낭만적"],
      trendy: 2,
      rarityKR: 4,
      showOff: 5,
    },

    genres: { main: ["클래식"], sub: ["영화·게임 OST", "뉴에이지", "CCM·교회음악"] },

    kinship: {
      easyFrom: ["레버 하프", "피아노"],
      sameTuning: ["레버 하프"],
      leadsTo: [],
    },
    ensemble: ["오케스트라", "실내악", "웨딩·행사 연주"],

    caveats: [
      "가격이 진짜 게이트다 — 렌탈·중고 시장도 국내에선 얇다",
      "운반이 삶의 조건을 바꾼다(차·엘리베이터·거치 공간)",
      "레슨은 서울·수도권 음대 라인 위주. 지방은 선생 찾기부터가 일",
      "예산이 안 되면 레버 하프로 시작하는 것이 표준 루트",
    ],
    funFacts: [
      "페달 7개가 각각 도~시 음을 담당해, 발로 조옮김을 하는 악기다",
      "국내에 아시아 최초 공개된 라이온앤힐리 최상위 모델 가격은 3억 6천만원이었다",
    ],
  },

  {
    id: "lever_harp",
    name: "레버 하프 (켈틱 하프)",
    aka: ["lever harp", "celtic harp", "아이리시 하프", "folk harp"],
    family: "하프류",
    desc: "22~38현, 현마다 달린 레버를 손으로 젖혀 반음을 내는 하프. 콘서트 하프의 '현실적 입문판'이자, 켈틱 음악에서는 그 자체로 완성형인 악기.",

    sound: {
      tone: ["영롱함", "따뜻함", "맑음", "서정적"],
      toneDesc: "콘서트 하프보다 작고 친밀한 울림. 거실 크기에 꼭 맞는 따뜻한 음량으로, 자장가·켈틱 에어에 최적화된 소리.",
      volume: 3,
      sustain: 4,
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
      callus: 3,
      callusDesc: "손끝 살로 뜯는 건 콘서트 하프와 동일. 초반 물집 구간을 지나야 한다.",
      embouchure: 0,
      breath: 0,
      weight: 3,
      weightDesc: "34현 기준 9~12kg. 성인이 케이스 메고 대중교통 이동 가능한 마지노선. 소형(22~26현)은 5kg 안팎.",
      posture: "앉아서 어깨에 기대는 자세. 부담 적음.",
      postureRisk: [],
      handSize: "현 간격이 콘서트 하프보다 살짝 좁은 모델도 있어 손 작아도 무난.",
    },

    cost: {
      entryKRW: [1000000, 4500000],
      entryDesc: "소형(22~26현) 보급형 100만원대부터, 표준 34현 풀레버 국내가 400만원 안팎(한국하프교육협회 권장 모델 410만원). 유로뮤직·세계악기 등 국내 취급점 존재.",
      midKRW: [5000000, 12000000],
      running: "현 교체 정도. 콘서트 하프 대비 유지비 미미.",
    },
    practical: {
      portability: 3,
      noise: 3,
      apartmentOk: "낮 연습 무난. 콘서트 하프보다 한 단계 조용하다.",
      selfLearn: 3,
      lessonKR: 2,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 2,
    },

    vibe: {
      tags: ["서정적", "낭만적", "고풍스러운", "명상적"],
      trendy: 2,
      rarityKR: 4,
      showOff: 4,
    },

    genres: { main: ["켈틱·아이리시"], sub: ["뉴에이지", "명상·사운드힐링", "CCM·교회음악", "포크", "클래식"] },

    kinship: {
      easyFrom: ["라이어 하프", "피아노"],
      sameTuning: ["콘서트 하프"],
      leadsTo: ["콘서트 하프", "아이리시 와이어 하프"],
    },
    ensemble: ["아이리시 세션", "교회 연주", "웨딩·행사 연주"],

    caveats: [
      "레버는 조옮김이 번거로워 조성이 복잡한 클래식 곡엔 한계 — 그건 페달 하프의 영역",
      "'입문판'이지만 34현 새 악기는 여전히 수백만원대",
      "국내 레슨은 소수의 하프 교습소·협회 라인에 몰려 있음",
    ],
    funFacts: [
      "아일랜드는 국장(국가 문장)이 하프인 세계 유일의 나라다",
      "콘서트 하프 진학 여부와 무관하게, 켈틱 씬에서는 레버 하프가 '진짜' 전통 악기다",
    ],
  },

  {
    id: "lyre_harp",
    name: "라이어 하프",
    aka: ["lyre harp", "리라 하프", "lyre"],
    family: "하프류",
    desc: "7~16현의 무릎 위 소형 하프. 고대 그리스 리라의 후예로, 요즘은 힐링·명상용 악기로 국내 악기점에서도 쉽게 산다.",

    sound: {
      tone: ["영롱함", "맑음", "소박함", "따뜻함"],
      toneDesc: "작고 여린 방울 같은 울림. 음량이 작아 밤에 이불 위에서 뜯어도 되는 수준. '연주'보다 '소리 자체를 즐기는' 악기에 가깝다.",
      volume: 2,
      sustain: 3,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 2,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["멜로디", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "현 장력이 약해 하프류 중 손끝 부담 최소. 그래도 첫 주엔 손끝이 얼얼하다.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1~2kg. 가방에 넣어 다닌다.",
      posture: "무릎 위·품에 안고. 부담 없음.",
      postureRisk: [],
      handSize: "무관.",
    },

    cost: {
      entryKRW: [50000, 300000],
      entryDesc: "국내 온라인 악기몰(엔젤악기 등)·오픈마켓에서 16현 기준 10만원 안팎. 하프류 중 유일하게 '충동구매 가능' 가격대.",
      midKRW: [300000, 1000000],
      running: "거의 없음. 현 교체 정도.",
    },
    practical: {
      portability: 5,
      noise: 1,
      apartmentOk: "밤에도 사실상 무민폐. 아파트 최적.",
      selfLearn: 5,
      lessonKR: 1,
      entryBarrier: 1,
      quickReward: 5,
      maintenance: 1,
    },

    vibe: {
      tags: ["명상적", "소박한", "귀여운", "서정적"],
      trendy: 3,
      rarityKR: 3,
      showOff: 1,
    },

    genres: { main: ["명상·사운드힐링"], sub: ["뉴에이지", "CCM·교회음악", "포크"] },

    kinship: {
      easyFrom: [],
      sameTuning: ["레버 하프"],
      leadsTo: ["레버 하프", "살터리(프살테리움)"],
    },
    ensemble: ["명상·요가 모임", "교회 소모임"],

    caveats: [
      "온음계 조율에 현 수가 적어 칠 수 있는 곡의 폭이 좁다 — 금방 천장에 닿으면 레버 하프로 갈아타게 됨",
      "레슨 문화가 사실상 없음(독학·유튜브 전제)",
      "초저가 제품은 조율이 잘 안 맞거나 금방 틀어지는 경우 있음",
    ],
    funFacts: [
      "발도르프 교육에서 아이들 정서 악기로 쓰이면서 '힐링 악기'로 재유행했다",
    ],
  },

  {
    id: "triple_harp",
    name: "바로크 트리플 하프",
    aka: ["triple harp", "웨일스 트리플 하프", "arpa doppia"],
    family: "하프류",
    desc: "현이 3열로 나란히 걸린 바로크 하프. 바깥 두 줄이 온음계, 가운데 줄이 반음계 — 레버도 페달도 없이 손가락을 열 사이로 찔러 넣어 반음을 뜯는다. 웨일스의 국민 악기이자 바로크 통주저음 악기.",

    sound: {
      tone: ["영롱함", "고풍스러운", "따뜻함", "신비"],
      toneDesc: "거트현 특유의 옛스럽고 둥근 울림. 모던 하프보다 음량은 작지만 배음이 복잡하게 얽혀 촛불 같은 질감이 난다.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 2,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["화음반주", "멜로디", "베이스"],
    },

    body: {
      saliva: 0,
      callus: 3,
      callusDesc: "거트현을 살로 뜯는 데다 가운데 열에 손가락을 찔러 넣는 동작까지 있어 손끝 단련 필요.",
      embouchure: 0,
      breath: 0,
      weight: 3,
      weightDesc: "10~15kg 안팎. 레버 하프급이지만 형태가 길쭉해 운반은 더 신경 쓰임.",
      posture: "앉아서 어깨에 기대는 자세. 부담 적음.",
      postureRisk: [],
      handSize: "3열 사이를 오가야 해 손가락이 가늘고 긴 쪽이 유리.",
    },

    cost: {
      entryKRW: [8000000, 25000000],
      entryDesc: "양산품이 없다. 유럽 하프 공방 주문 제작·직구가 유일한 경로로, 사양·공방에 따라 가격 편차가 매우 크다(범위는 대략치). 대기 수개월~1년.",
      midKRW: [15000000, 40000000],
      running: "거트현 3열 = 현값·조율 시간 모두 3배 각오.",
    },
    practical: {
      portability: 2,
      noise: 2,
      apartmentOk: "음량이 크지 않아 낮 연습 무난.",
      selfLearn: 1,
      lessonKR: 1,
      entryBarrier: 5,
      quickReward: 2,
      maintenance: 4,
    },

    vibe: {
      tags: ["고풍스러운", "학구적", "컬트적", "장인 정신"],
      trendy: 1,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["바로크·고음악"], sub: ["켈틱·아이리시", "클래식"] },

    kinship: {
      easyFrom: ["레버 하프", "콘서트 하프"],
      sameTuning: [],
      leadsTo: [],
    },
    ensemble: ["바로크 앙상블(통주저음)", "고음악 단체"],

    caveats: [
      "국내 연주자·선생이 손에 꼽는 수준 — 유학 또는 해외 마스터클래스 전제",
      "3열 조율만 한 시간 코스라는 농담이 있다(현 90여 개)",
      "악기 확보 자체가 프로젝트(공방 리서치→주문→대기→직구 통관)",
    ],
    funFacts: [
      "몬테베르디의 오페라 '오르페오' 악보에 지정된 'arpa doppia'가 이 계열이다",
      "웨일스에서는 아이스테드바드(전통 경연 축제)의 상징 악기다",
    ],
  },

  {
    id: "wire_harp",
    name: "아이리시 와이어 하프 (클라르사흐)",
    aka: ["clarsach", "wire-strung harp", "cláirseach"],
    family: "하프류",
    desc: "황동·은 금속현을 손톱으로 뜯는 고대 게일 하프. 종처럼 길게 울리는 금속 여운을 손가락으로 눌러 끊는 '댐핑'이 주법의 절반인, 하프이면서 전혀 다른 악기.",

    sound: {
      tone: ["금속성", "영롱함", "신비", "유리 같은"],
      toneDesc: "종소리 같은 금속 배음이 몇 초씩 겹겹이 이어진다. 오르골과 벨 사이의 소리. 여운을 안 끊으면 음이 뒤엉키므로, 소리 내기보다 소리 끄기가 기술이다.",
      volume: 3,
      sustain: 5,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 2,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["멜로디", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 1,
      callusDesc: "살 대신 손톱으로 뜯어 물집 부담은 적다. 대신 손톱을 일정 길이·모양으로 기르고 관리하는 것이 연주 조건.",
      embouchure: 0,
      breath: 0,
      weight: 2,
      weightDesc: "전통형은 작고 묵직한 통나무 몸통. 5~9kg 수준으로 이동 가능.",
      posture: "왼어깨에 기대는 전통 자세(모던 하프와 반대 손 배치인 유파도 있음).",
      postureRisk: [],
      handSize: "무관. 다만 손톱이 잘 부러지는 체질이면 고생.",
    },

    cost: {
      entryKRW: [3000000, 10000000],
      entryDesc: "국내 판매 없음. 스코틀랜드·아일랜드계 공방 주문·직구가 경로이며 현 수·장식에 따라 편차 큼(범위는 대략치).",
      midKRW: [8000000, 20000000],
      running: "금속현은 잘 안 끊기지만 끊기면 교체가 까다로움. 조율 안정성은 좋은 편.",
    },
    practical: {
      portability: 3,
      noise: 2,
      apartmentOk: "음량 자체는 크지 않아 낮 연습 무난. 여운이 길어 오히려 조용한 방에서 진가.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 4,
      quickReward: 3,
      maintenance: 3,
    },

    vibe: {
      tags: ["고풍스러운", "신비", "컬트적", "명상적", "장인 정신"],
      trendy: 1,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["켈틱·아이리시"], sub: ["바로크·고음악", "명상·사운드힐링"] },

    kinship: {
      easyFrom: ["레버 하프"],
      sameTuning: [],
      leadsTo: [],
    },
    ensemble: ["아이리시 세션", "고음악 단체"],

    caveats: [
      "나일론 하프 주법과 상당 부분 호환이 안 됨(손톱·댐핑) — 하프 경험자도 다시 배우는 구간 있음",
      "교재·레슨 모두 영어권 온라인 전제(국내 선생 사실상 없음)",
      "손톱 관리가 일상 루틴이 된다",
    ],
    funFacts: [
      "중세 게일 사회에서 하피스트는 시인과 함께 최고 대우를 받는 직업이었다",
      "기네스 맥주 로고의 하프가 바로 이 클라르사흐(브라이언 보루 하프)다",
    ],
  },

  // ════════════════════════ 포크 발현 (6) ════════════════════════

  {
    id: "autoharp",
    name: "오토하프",
    aka: ["autoharp", "코드하프"],
    family: "발현·포크",
    desc: "36현 위에 코드 버튼(15~21개)이 달린 악기. 버튼을 누르면 그 코드에 없는 현이 자동으로 음소거되어, 버튼 하나+스트럼 한 번 = 코드 하나. 발현악기의 '자동변속기'.",

    sound: {
      tone: ["반짝임", "따뜻함", "소박함"],
      toneDesc: "여러 현이 한꺼번에 울리는 풍성한 스트럼. 하프와 기타 사이의 서정적인 코드 울림으로, 노래 반주에 특화된 소리.",
      volume: 3,
      sustain: 3,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 2,
      chordal: true,
      melodic: false,
      singAlong: true,
      improv: 2,
      roles: ["화음반주", "리듬반주"],
    },

    body: {
      saliva: 0,
      callus: 1,
      callusDesc: "피크나 핑거픽으로 스트럼해 손끝 부담 거의 없음. 버튼 누르는 왼손도 편하다.",
      embouchure: 0,
      breath: 0,
      weight: 2,
      weightDesc: "3~4kg. 품에 안거나 무릎에 놓고 연주.",
      posture: "안고 치는 자세 무난. 장시간엔 왼팔이 살짝 뻐근한 정도.",
      postureRisk: [],
      handSize: "무관. 코드 운지가 없어 손 크기·유연성 요구 최소.",
    },

    cost: {
      entryKRW: [300000, 800000],
      entryDesc: "국내 재고는 드물어 오스카 슈미트 등 직구가 표준 경로(본체 $300~500 + 배송·관세). 중고 직구면 20만원대도 가능.",
      midKRW: [800000, 2000000],
      running: "현 36줄 일괄 교체 시 현값이 꽤 나감(수년에 한 번). 평소엔 거의 없음.",
    },
    practical: {
      portability: 4,
      noise: 3,
      apartmentOk: "낮 연습 무난. 소리가 부드러워 민폐 적음.",
      selfLearn: 5,
      lessonKR: 1,
      entryBarrier: 1,
      quickReward: 5,
      maintenance: 2,
    },

    vibe: {
      tags: ["소박한", "루츠·어쿠스틱", "유행과 동떨어진", "귀여운"],
      trendy: 1,
      rarityKR: 4,
      showOff: 2,
    },

    genres: { main: ["포크", "컨트리·블루그래스"], sub: ["CCM·교회음악", "팝·싱어송라이터"] },

    kinship: {
      easyFrom: [],
      sameTuning: [],
      leadsTo: ["마운틴 덜시머", "기타"],
    },
    ensemble: ["노래 모임 반주", "교회 소모임", "올드타임 잼"],

    caveats: [
      "버튼에 있는 코드만 칠 수 있다 — 재즈식 텐션 코드는 구조적으로 불가",
      "멜로디 주법(멜로디 피킹)도 있지만 상급 기술이고, 기본 정체성은 반주 악기",
      "36현 조율은 튜너 들고 15분 코스",
    ],
    funFacts: [
      "코드 운지를 익힐 필요가 없어 '첫날 반주 성공'이 실제로 가능한 몇 안 되는 현악기다",
      "컨트리의 대모 메이벨 카터, 존 세바스찬 등이 무대 악기로 썼다",
    ],
  },

  {
    id: "mountain_dulcimer",
    name: "마운틴 덜시머",
    aka: ["mountain dulcimer", "Appalachian dulcimer", "애팔래치안 덜시머"],
    family: "발현·포크",
    desc: "무릎 위에 눕혀 놓고 치는 3~4현 프렛 악기. 프렛이 온음계(도레미 배열)라 아무렇게나 짚어도 조 안의 음만 난다. 미국 애팔래치아 산악 지대의 홈메이드 포크 악기.",

    sound: {
      tone: ["소박함", "따뜻함", "콧소리", "나무 울림"],
      toneDesc: "드론 현이 계속 울리는 위로 멜로디가 얹히는, 백파이프를 닮은 소박한 울림. 화려하진 않지만 난롯가 같은 정감이 있다.",
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
      roles: ["멜로디", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "쇠줄이지만 현 수가 적고 장력이 낮아 기타보다 손끝 부담 훨씬 덜함.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1~2kg. 천가방에 넣어 다니는 수준.",
      posture: "무릎 위에 눕혀 놓고 치는 자세라 목·어깨 부담이 사실상 0. 손목도 편하다.",
      postureRisk: [],
      handSize: "무관. 한 손가락 주법(노터 스틱)도 전통 주법이다.",
    },

    cost: {
      entryKRW: [200000, 700000],
      entryDesc: "국내 판매 거의 없음. 미국 공방(맥스페이든 등)·아마존 직구 기준 $150~450 + 배송. 합판 입문기는 더 싸다.",
      midKRW: [700000, 2000000],
      running: "줄값 정도. 거의 없음.",
    },
    practical: {
      portability: 5,
      noise: 2,
      apartmentOk: "음량이 작아 밤 연습도 웬만하면 가능.",
      selfLearn: 5,
      lessonKR: 1,
      entryBarrier: 1,
      quickReward: 5,
      maintenance: 1,
    },

    vibe: {
      tags: ["소박한", "루츠·어쿠스틱", "유행과 동떨어진", "명상적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 1,
    },

    genres: { main: ["포크", "컨트리·블루그래스"], sub: ["CCM·교회음악", "켈틱·아이리시"] },

    kinship: {
      easyFrom: [],
      sameTuning: [],
      leadsTo: ["기타", "오토하프"],
    },
    ensemble: ["올드타임 잼", "노래 모임 반주"],

    caveats: [
      "온음계 프렛이라 반음 많은 곡·조옮김에 약함(반음 프렛 추가 모델로 일부 보완)",
      "국내 커뮤니티가 사실상 없어 완전 독학 전제(영어권 자료는 매우 풍부)",
      "망치로 치는 '해머드 덜시머'와 이름만 같고 완전히 다른 악기이니 구매 시 주의",
    ],
    funFacts: [
      "온음계 프렛 덕에 '틀린 음을 누르는 것 자체가 어려운' 악기로 불린다",
      "조니 미첼이 명반 'Blue'에서 기타 대신 덜시머로 여러 곡을 반주했다",
    ],
  },

  {
    id: "balalaika",
    name: "발랄라이카",
    aka: ["balalaika", "балалайка"],
    family: "발현·포크",
    desc: "삼각형 몸통의 러시아 3현 악기. 표준(프리마)은 E-E-A 조율로, 두 줄이 같은 음이라 손가락 하나로도 멜로디+드론이 된다. 트레몰로와 손가락 스트럼이 시그니처.",

    sound: {
      tone: ["카랑카랑", "애수", "반짝임", "소박함"],
      toneDesc: "낭랑하게 튕기다가 트레몰로로 들어가면 애절해지는 이중적인 소리. 러시아 민요 특유의 웃다가 우는 정서를 그대로 담는다.",
      volume: 3,
      sustain: 1,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["멜로디", "리듬반주"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "나일론+금속 혼합 현(프리마 기준)이라 손끝 부담 중간. 스트럼은 손가락 등으로 쳐서 검지 손톱 쪽이 단련됨.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1~1.5kg. 삼각형이라 케이스는 좀 크다.",
      posture: "앉아 무릎에 세워 안는 자세. 부담 없음.",
      postureRisk: [],
      handSize: "스케일이 짧아 손 작아도 유리.",
    },

    cost: {
      entryKRW: [200000, 800000],
      entryDesc: "국내 판매 거의 없음. 러시아·동유럽계 공방 직구 또는 해외 오픈마켓 기준(품질 편차 큼 — 장식용 저가품 주의). 범위는 대략치.",
      midKRW: [800000, 2500000],
      running: "줄값 정도.",
    },
    practical: {
      portability: 5,
      noise: 3,
      apartmentOk: "낮 연습 무난. 서스테인이 짧아 소리가 덜 퍼진다.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 1,
    },

    vibe: {
      tags: ["이국적", "유행과 동떨어진", "소박한", "컬트적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["포크"], sub: ["발칸·클레즈머·집시", "영화·게임 OST"] },

    kinship: {
      easyFrom: ["우쿨렐레", "기타"],
      sameTuning: [],
      leadsTo: ["돔라"],
    },
    ensemble: ["러시아 민속 앙상블(해외)", "다국적 포크 잼"],

    caveats: [
      "국내 레슨·커뮤니티 사실상 전무 — 러시아어·영어권 유튜브 독학 전제",
      "저가 기념품용 악기가 많이 유통되니 '연주용'인지 확인 필수",
      "콘트라베이스 발랄라이카 같은 대형 편성은 국내에서 접할 기회가 없다",
    ],
    funFacts: [
      "영화 '닥터 지바고'의 라라의 테마로 세계에 각인된 소리다",
      "같은 음 두 줄 조율 덕에 첫날부터 그럴듯한 멜로디가 난다",
    ],
  },

  {
    id: "charango",
    name: "샤랑고",
    aka: ["charango", "차랑고"],
    family: "발현·포크",
    desc: "안데스 고원의 10현(5코스) 초소형 발현악기. 우쿨렐레만 한 몸통에서 잘랑거리는 고음이 폭포처럼 쏟아진다. 전통적으로 아르마딜로 등딱지로 만들던 악기(현재는 나무).",

    sound: {
      tone: ["카랑카랑", "반짝임", "화려함", "애수"],
      toneDesc: "10현이 한꺼번에 울리는 잘랑거리는 스트럼과 애절한 트레몰로. 안데스 특유의 해맑음과 서글픔이 공존하는 소리.",
      volume: 4,
      sustain: 1,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["리듬반주", "멜로디"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "나일론 현이지만 5코스 더블을 한꺼번에 누르는 왼손에 초반 통증 있음.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "0.5~1kg. 백팩에 들어간다.",
      posture: "품에 안는 자세. 부담 없음.",
      postureRisk: [],
      handSize: "스케일이 매우 짧아 손 작은 사람에게 최적. 손이 크면 오히려 프렛이 비좁다.",
    },

    cost: {
      entryKRW: [200000, 900000],
      entryDesc: "국내 판매 드묾. 볼리비아·페루 공방품 직구 또는 해외여행 구매가 표준 경로(품질 편차 큼). 범위는 대략치.",
      midKRW: [900000, 2500000],
      running: "줄값 정도.",
    },
    practical: {
      portability: 5,
      noise: 3,
      apartmentOk: "음량이 의외로 짱짱해 낮 연습 권장.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 1,
    },

    vibe: {
      tags: ["이국적", "귀여운", "자유로운", "소박한"],
      trendy: 1,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["라틴"], sub: ["포크", "영화·게임 OST"] },

    kinship: {
      easyFrom: ["우쿨렐레", "기타", "만돌린"],
      sameTuning: ["우쿨렐레"],
      leadsTo: [],
    },
    ensemble: ["안데스 포크 그룹(케나·삼포냐와)", "라틴 잼"],

    caveats: [
      "가운데 코스가 옥타브 차이(리엔트런트 조율)라 기타식 음계 감각과 살짝 어긋남",
      "국내 레슨 사실상 없음 — 스페인어·영어권 자료 독학 전제",
      "아르마딜로 등딱지 빈티지는 반입 규제(CITES) 문제가 있으니 목재 모델을 살 것",
    ],
    funFacts: [
      "우쿨렐레와 조율 골격이 비슷해 우쿨렐레 경험자는 첫 코드를 10분 만에 잡는다",
      "사이먼 앤 가펑클 'El Condor Pasa'의 원류가 이 악기의 동네다",
    ],
  },

  {
    id: "cavaquinho",
    name: "카바키뉴",
    aka: ["cavaquinho", "cavaco"],
    family: "발현·포크",
    desc: "브라질 삼바·쇼루의 심장인 4현 소형 발현악기. 우쿨렐레의 조상 격이지만 쇠줄+피크로 훨씬 쨍하게, 16비트 그루브를 쉴 새 없이 썰어 넣는 리듬 머신.",

    sound: {
      tone: ["카랑카랑", "반짝임", "그루브", "타격감"],
      toneDesc: "쇠줄을 피크로 긁는 쨍한 컷팅. 삼바 밴드 전체의 리듬을 앞에서 끌고 가는, 작지만 존재감 최상급의 소리.",
      volume: 4,
      sustain: 1,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 5,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 4,
      roles: ["리듬반주", "멜로디"],
    },

    body: {
      saliva: 0,
      callus: 3,
      callusDesc: "쇠줄이라 우쿨렐레 감각으로 잡으면 손끝이 놀란다. 기타 수준의 물집 통과 필요.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1kg 미만. 우쿨렐레와 동급 휴대성.",
      posture: "품에 안는 자세. 오른손목 스냅을 많이 써 초반 손목 피로 있음.",
      postureRisk: ["손목"],
      handSize: "스케일 짧아 손 작아도 무난.",
    },

    cost: {
      entryKRW: [150000, 500000],
      entryDesc: "국내 판매 드묾. 브라질 브랜드(호지니 등) 직구 기준 $100~350 + 배송. 우쿨렐레 취급점에서 간혹 병행수입.",
      midKRW: [500000, 1500000],
      running: "줄값 정도.",
    },
    practical: {
      portability: 5,
      noise: 3,
      apartmentOk: "쨍한 음색이라 낮 연습 권장. 약음 연습은 손가락 스트럼으로.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 1,
    },

    vibe: {
      tags: ["파티", "그루브", "이국적", "자유로운"],
      trendy: 2,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["라틴"], sub: ["포크", "팝·싱어송라이터"] },

    kinship: {
      easyFrom: ["우쿨렐레", "기타", "만돌린"],
      sameTuning: [],
      leadsTo: ["7현 기타(브라질)", "반돌림"],
    },
    ensemble: ["삼바 호다", "쇼루 그룹", "라틴 잼"],

    caveats: [
      "본질이 리듬 악기라 혼자 치면 심심할 수 있음 — 같이 놀 판(타악·노래)이 있을 때 빛남",
      "국내 삼바·쇼루 커뮤니티는 서울에 소수. 레슨은 사실상 없음",
      "16비트 오른손이 핵심이라 코드는 쉬워도 그루브 완성은 오래 걸림",
    ],
    funFacts: [
      "포르투갈 이민자들이 하와이로 가져간 이 악기 계열이 우쿨렐레가 됐다",
      "삼바 학교 퍼레이드에서 수백 명의 타악기를 뚫고 들리는 유일한 발현악기다",
    ],
  },

  {
    id: "cittern_modern",
    name: "시턴 (모던 시턴)",
    aka: ["cittern", "10-string cittern", "모던 시턴"],
    family: "발현·포크",
    desc: "5코스 10현의 모던 포크 악기. 1970년대 아이리시 리바이벌에서 만돌린족을 키워 만든 물건으로, 부주키와 형제간. 낮고 넓은 울림으로 멜로디와 반주를 오간다.",

    sound: {
      tone: ["반짝임", "나무 울림", "낮고 깊음", "몽환"],
      toneDesc: "더블 코스의 코러스가 만돌린보다 한 옥타브 아래서 넓게 퍼진다. 드론을 깔며 치면 켈틱 특유의 안개 낀 울림이 난다.",
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
      roles: ["올라운드", "리듬반주", "멜로디"],
    },

    body: {
      saliva: 0,
      callus: 3,
      callusDesc: "쇠줄 더블 코스 — 만돌린과 같은 물집·굳은살 코스. 스케일이 길어 왼손 스트레칭도 필요.",
      embouchure: 0,
      breath: 0,
      weight: 2,
      weightDesc: "2~3kg. 기타보다 약간 작은 케이스.",
      posture: "기타식 자세. 부담 적음.",
      postureRisk: [],
      handSize: "스케일이 길어(50~55cm) 손이 작으면 부주키보다 짧은 스케일 모델을 고르는 게 좋다.",
    },

    cost: {
      entryKRW: [800000, 3000000],
      entryDesc: "국내 판매 없음. 아일랜드·영국계 공방 또는 동유럽 양산 브랜드 직구 기준(범위 대략치). 중고 직구가 실속 경로.",
      midKRW: [3000000, 7000000],
      running: "줄값(10현이라 기타의 두 배 남짓).",
    },
    practical: {
      portability: 4,
      noise: 3,
      apartmentOk: "낮 연습 무난.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 1,
    },

    vibe: {
      tags: ["루츠·어쿠스틱", "고풍스러운", "자유로운", "유행과 동떨어진"],
      trendy: 1,
      rarityKR: 5,
      showOff: 2,
    },

    genres: { main: ["켈틱·아이리시"], sub: ["포크", "북유럽 민속"] },

    kinship: {
      easyFrom: ["만돌린", "기타", "우쿨렐레"],
      sameTuning: ["아이리시 부주키"],
      leadsTo: ["아이리시 부주키", "옥타브 만돌린"],
    },
    ensemble: ["아이리시 세션", "포크 밴드"],

    caveats: [
      "부주키·옥타브 만돌린과 경계가 흐릿해 구매 시 스케일·조율을 직접 따져야 함",
      "국내 인지도 0에 가까움 — 세션 나가면 '그게 뭐예요' 질문부터 받는다",
      "표준 조율이 여러 개(GDAEA, DGDAD 등)라 초반에 하나를 정해야 함",
    ],
    funFacts: [
      "이름은 르네상스 시턴에서 빌렸지만 실제로는 1970년대에 태어난 젊은 악기다",
      "만돌린 경험자가 '더 낮고 더 넓은 소리'를 찾을 때의 정답 중 하나다",
    ],
  },

  // ════════════════════════ 류트족·초기 발현 (13) ════════════════════════

  {
    id: "renaissance_lute",
    name: "르네상스 류트",
    aka: ["renaissance lute", "lute", "라우테"],
    family: "발현·류트족",
    desc: "6~8코스의 서양배 모양 발현악기. 16세기 유럽에서 '악기의 왕'이었고, 다울랜드의 노래와 독주가 이 악기의 심장이다. 류트족 전체의 표준 입구.",

    sound: {
      tone: ["따뜻함", "부드러움", "애수", "나무 울림"],
      toneDesc: "거트(또는 나일거트) 현을 손끝 살로 뜯는, 촛불처럼 흔들리는 여린 소리. 크지 않지만 가까이서 들으면 숨소리까지 담기는 친밀함이 있다.",
      volume: 2,
      sustain: 2,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["올라운드", "멜로디", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "장력이 낮고 손톱 없이 살로 뜯어 기타보다 손끝 부담 덜함. 대신 오른손 터치를 처음부터 다시 배운다.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1kg 미만 — 겉보기와 달리 깃털처럼 가볍다. 케이스가 몸통 모양이라 부피는 있음.",
      posture: "둥근 몸통이 미끄러워 안는 자세 잡기가 첫 관문. 익으면 부담 없음.",
      postureRisk: [],
      handSize: "8코스는 넥이 넓어 손 작으면 6~7코스 추천.",
    },

    cost: {
      entryKRW: [2000000, 6000000],
      entryDesc: "국내 판매 없음. 영국 얼리뮤직샵 학생용(£1,050~1,100)+배송·관세로 200만원대 초중반, 유럽·중국계 공방 주문은 300만~600만원. 중고 직구(류트 소사이어티 장터)가 실속 경로.",
      midKRW: [6000000, 15000000],
      running: "나일거트 현값 + 습도 관리. 거트현 풀세트는 수십만원대라 대개 합성현으로 탄다.",
    },
    practical: {
      portability: 4,
      noise: 2,
      apartmentOk: "음량이 작아 밤에도 사실상 무민폐. 아파트 최적의 발현악기.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 3,
    },

    vibe: {
      tags: ["고풍스러운", "학구적", "낭만적", "서정적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["바로크·고음악"], sub: ["클래식"] },

    kinship: {
      easyFrom: ["기타", "비우엘라", "바로크 기타"],
      sameTuning: ["비우엘라", "오르파리온"],
      leadsTo: ["바로크 류트", "아치류트", "테오르보"],
    },
    ensemble: ["고음악 앙상블", "성악 반주(류트송)", "류트 듀엣"],

    caveats: [
      "'류트 연주자는 인생의 절반을 조율하며 보내고, 나머지 절반은 안 맞는 류트를 연주하며 보낸다'는 옛 농담이 있다 — 복수 코스+거트계 현의 숙명",
      "악보가 오선보가 아닌 타블라추어(류트 전용 기보)라 별도 학습 필요(다행히 기타 타브보다 논리적)",
      "국내 레슨은 손에 꼽는 연주자 몇 명뿐 — 온라인 레슨·해외 자료 전제",
      "습도에 민감(얇은 몸통) — 겨울 가습 필수",
    ],
    funFacts: [
      "다울랜드의 'Flow My Tears'는 당대 유럽 전체의 히트곡이었다",
      "엘리자베스 1세 시대 류트 명인의 연봉은 궁정 최고 수준이었다",
      "스팅이 다울랜드 음반(Songs from the Labyrinth)을 내면서 대중에게 재소환됐다",
    ],
  },

  {
    id: "baroque_lute",
    name: "바로크 류트",
    aka: ["baroque lute", "11-course lute", "13-course lute"],
    family: "발현·류트족",
    desc: "11~13코스, D단조 조율의 18세기 류트. 바흐의 류트 모음곡과 바이스의 방대한 독주 레퍼토리를 위한 악기로, 류트족 독주의 정점이자 난이도의 정점.",

    sound: {
      tone: ["애수", "낮고 깊음", "따뜻함", "몽환"],
      toneDesc: "개방 베이스 현들이 공명하며 만드는 그늘진 울림. 르네상스 류트보다 어둡고 사색적이며, 혼자 밤에 듣는 소리로는 발현악기 최고봉이라는 팬이 많다.",
      volume: 2,
      sustain: 3,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["멜로디", "화음반주", "올라운드"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "장력 낮고 살로 뜯음. 손끝보다 왼손 엄지(베이스 현 뮤트)와 오른손 엄지 독립이 고비.",
      embouchure: 0,
      breath: 0,
      weight: 2,
      weightDesc: "1.5kg 안팎으로 가볍지만 13코스는 넥이 이중으로 뻗어 케이스가 크고 길다.",
      posture: "둥근 몸통+넓은 넥. 안는 자세와 왼손 각도 적응 필요.",
      postureRisk: [],
      handSize: "넥 폭이 넓어 손이 작으면 11코스 쪽이 낫다.",
    },

    cost: {
      entryKRW: [4000000, 12000000],
      entryDesc: "학생용 양산품이 거의 없어 공방 주문·중고 직구가 경로(범위 대략치). 르네상스 류트보다 한 급 위 예산 각오.",
      midKRW: [10000000, 25000000],
      running: "현이 20줄이 넘어 현값·조율 시간 모두 류트족 최상급.",
    },
    practical: {
      portability: 3,
      noise: 2,
      apartmentOk: "밤 연습도 무난한 음량.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 4,
      quickReward: 2,
      maintenance: 4,
    },

    vibe: {
      tags: ["학구적", "고풍스러운", "서정적", "장인 정신"],
      trendy: 1,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["바로크·고음악"], sub: ["클래식"] },

    kinship: {
      easyFrom: ["르네상스 류트", "기타"],
      sameTuning: [],
      leadsTo: ["테오르보", "갈리숑(만도라)"],
    },
    ensemble: ["고음악 앙상블", "독주(핵심 정체성)"],

    caveats: [
      "D단조 조율은 기타·르네상스 류트 감각과 달라 경험자도 지도 다시 그리는 구간",
      "조율 농담이 가장 잘 어울리는 악기 — 13코스면 현 24줄 안팎",
      "바흐를 치고 싶어 시작하는 사람이 많지만, 바흐는 이 악기에서도 어렵다",
      "국내 전공자 극소수 — 사실상 온라인·해외 사사 전제",
    ],
    funFacts: [
      "바이스는 바흐와 동시대에 '류트의 바흐'로 불리며 600곡 이상을 남겼다",
      "바흐의 류트 작품이 실제 류트용인지 건반용인지는 지금도 학계 떡밥이다",
    ],
  },

  {
    id: "archlute",
    name: "아치류트",
    aka: ["archlute", "arciliuto"],
    family: "발현·류트족",
    desc: "르네상스 류트 몸통에 긴 확장 넥을 달아 개방 베이스 현을 추가한 17세기 악기. 독주와 통주저음을 겸하는 만능형으로, 테오르보보다 작고 류트보다 낮다.",

    sound: {
      tone: ["따뜻함", "낮고 깊음", "부드러움", "나무 울림"],
      toneDesc: "류트의 친밀한 고음과 확장 베이스의 깊은 공명이 한 악기에. 독주에서는 류트답게, 앙상블에서는 저음 기둥으로 변신한다.",
      volume: 3,
      sustain: 3,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["올라운드", "베이스", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "류트와 동일 — 저장력·살 터치.",
      embouchure: 0,
      breath: 0,
      weight: 2,
      weightDesc: "악기는 2kg 안팎이나 전장 1.2~1.5m. 케이스가 사람 눈높이를 넘는다.",
      posture: "긴 넥의 무게 균형 잡기 적응 필요. 몸 부담 자체는 적음.",
      postureRisk: [],
      handSize: "운지 넥은 르네상스 류트와 비슷 — 손 크기 부담 중간.",
    },

    cost: {
      entryKRW: [5000000, 15000000],
      entryDesc: "양산품 없음. 공방 주문·중고 직구 전제(범위 대략치, 대기 수개월~1년).",
      midKRW: [12000000, 30000000],
      running: "현 14코스 안팎 — 현값·조율 시간 상당.",
    },
    practical: {
      portability: 2,
      noise: 2,
      apartmentOk: "밤 연습 가능한 음량.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 4,
      quickReward: 2,
      maintenance: 4,
    },

    vibe: {
      tags: ["학구적", "고풍스러운", "장인 정신", "우아한"],
      trendy: 1,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["바로크·고음악"], sub: ["클래식"] },

    kinship: {
      easyFrom: ["르네상스 류트", "테오르보", "기타"],
      sameTuning: ["르네상스 류트"],
      leadsTo: ["테오르보"],
    },
    ensemble: ["바로크 앙상블(통주저음)", "독주", "성악 반주"],

    caveats: [
      "운지 조율은 르네상스 류트와 같아 진입은 쉬우나, 통주저음(숫자 적힌 저음 위에 즉석에서 화성을 만드는 반주법)은 별도의 공부",
      "테오르보와 역할이 겹쳐 '둘 중 뭘 살까'가 고음악계 단골 고민",
      "국내에서는 악기 실물을 보는 것부터가 이벤트",
    ],
    funFacts: [
      "이탈리아 바로크 독주 레퍼토리(피치니니 등)는 아치류트 전용으로 쓰였다",
      "비발디·헨델 음반의 저음 반주에서 자주 들리는 '통기타 아닌 통기타 소리'가 이것이다",
    ],
  },

  {
    id: "theorbo",
    name: "테오르보",
    aka: ["theorbo", "chitarrone", "키타로네"],
    family: "발현·류트족",
    desc: "전장 2m에 달하는 바로크 통주저음의 왕. 확장 넥의 초장현 베이스가 첼로급 저음을 내고, 몬테베르디 오페라부터 바로크 오케스트라까지 저음 반주석의 터줏대감이다.",

    sound: {
      tone: ["낮고 깊음", "웅장함", "따뜻함", "나무 울림"],
      toneDesc: "개방 베이스 한 음이 홀 바닥을 훑는, 발현악기 중 가장 깊은 울림. 위성 같은 고음 코스와 지진 같은 저음의 낙차가 매력.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 2,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 4,
      roles: ["베이스", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "저장력·살 터치라 손끝은 편한 편. 굵은 베이스 현 터치의 힘 조절이 관건.",
      embouchure: 0,
      breath: 0,
      weight: 4,
      weightDesc: "무게보다 길이가 문제 — 전장 1.7~2m. 택시·지하철·문틀 모든 곳에서 사건이 생긴다. 항공 이동은 좌석 추가 구매 각.",
      posture: "긴 넥을 왼쪽 위로 뻗어 든 자세. 균형 잡기 적응 필요하나 무게 자체는 감당 가능.",
      postureRisk: ["목어깨"],
      handSize: "운지 넥은 넓지만 코스 수가 적어(6~7) 의외로 손 부담 중간.",
    },

    cost: {
      entryKRW: [4000000, 15000000],
      entryDesc: "학생용 직구(영국 EMS 계열 등)로 400만원대부터 가능하나, 저가 학생용은 전문가 점검 없이 사면 대수리 리스크가 있다는 경고가 흔함. 공방 주문 콘서트급은 700만~1500만원(범위 대략치).",
      midKRW: [10000000, 25000000],
      running: "초장현 베이스 현이 비쌈. 조율은 의외로 개방현 위주라 빠른 편.",
    },
    practical: {
      portability: 1,
      noise: 2,
      apartmentOk: "음량은 순한 편이라 집 연습 무난. 문제는 보관 공간과 이동.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 4,
      quickReward: 3,
      maintenance: 3,
    },

    vibe: {
      tags: ["위압적", "학구적", "고풍스러운", "무대 장악"],
      trendy: 1,
      rarityKR: 5,
      showOff: 5,
    },

    genres: { main: ["바로크·고음악"], sub: ["클래식"] },

    kinship: {
      easyFrom: ["르네상스 류트", "기타", "아치류트"],
      sameTuning: [],
      leadsTo: ["아치류트", "바로크 류트"],
    },
    ensemble: ["바로크 오케스트라(통주저음)", "오페라 피트", "성악 반주"],

    caveats: [
      "위 두 코스가 한 옥타브 아래로 감기는 리엔트런트 조율 — 멜로디 감각을 다시 배선해야 함",
      "본질이 반주 악기 — 독주 레퍼토리도 있지만(카프스베르거) 혼자 놀기엔 심심할 수 있음",
      "통주저음(숫자 보고 즉석 화성 만들기)이 본업이라 화성학 공부가 따라온다",
      "이동이 삶의 조건 — 차 없으면 진지하게 재고",
    ],
    funFacts: [
      "국내외 모두 바로크 공연 때 통주저음 주자가 부족해, 손에 익으면 오히려 무대 기회가 생기는 틈새 악기다",
      "공항 수하물 벨트에서 가장 자주 사진 찍히는 악기라는 농담이 있다",
    ],
  },

  {
    id: "baroque_guitar",
    name: "바로크 기타",
    aka: ["baroque guitar", "5-course guitar"],
    family: "발현·류트족",
    desc: "17세기의 5코스 더블스트링 기타. 현대 기타보다 작고 가벼우며, 화려한 라스게아도(스트럼)와 섬세한 푼테아도(뜯기)를 오간다. 현대 기타 경험자가 고음악으로 넘어가는 가장 자연스러운 다리.",

    sound: {
      tone: ["반짝임", "따뜻함", "화려함", "소박함"],
      toneDesc: "더블 코스의 찰랑거리는 코러스와 거트계 현의 둥근 음색. 스트럼하면 플라멩코의 먼 조상 같은 리듬감이, 뜯으면 류트 같은 서정이 난다.",
      volume: 2,
      sustain: 2,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 4,
      roles: ["올라운드", "리듬반주", "멜로디"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "저장력 거트계 현이라 현대 기타보다 손끝이 편하다. 더블 코스 적응만 하면 됨.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1kg 안팎. 현대 클래식 기타보다 작고 가볍다.",
      posture: "기타식 자세 그대로. 부담 없음.",
      postureRisk: [],
      handSize: "넥이 현대 기타보다 좁고 스케일도 짧아 손 작은 사람에게 오히려 유리.",
    },

    cost: {
      entryKRW: [2000000, 6000000],
      entryDesc: "국내 판매 없음. 유럽·중국계 공방 주문 또는 얼리뮤직샵 계열 직구 기준(범위 대략치). 류트보다 구조가 단순해 같은 급이면 약간 저렴한 편.",
      midKRW: [5000000, 12000000],
      running: "나일거트 현값 정도.",
    },
    practical: {
      portability: 4,
      noise: 2,
      apartmentOk: "밤 연습 무난한 음량.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 2,
    },

    vibe: {
      tags: ["고풍스러운", "낭만적", "자유로운", "학구적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["바로크·고음악"], sub: ["클래식", "플라멩코·스페인"] },

    kinship: {
      easyFrom: ["기타", "우쿨렐레"],
      sameTuning: ["기타"],
      leadsTo: ["르네상스 류트", "비우엘라", "테오르보"],
    },
    ensemble: ["바로크 앙상블(통주저음)", "성악 반주", "독주"],

    caveats: [
      "조율 골격이 현대 기타 1~5번 줄과 같아 진입은 쉽지만, 4·5코스 옥타브 배치가 유파마다 달라(볼로냐식/프랑스식) 초반에 정해야 함",
      "타블라추어+알파베토(코드 기호) 기보 학습 필요",
      "국내 레슨 극소수 — 클래식 기타 선생 중 고음악 겸업자를 찾는 게 현실적",
    ],
    funFacts: [
      "산스의 곡 '카나리오스'는 로드리고 '어느 귀인을 위한 환상곡'의 원곡이다",
      "루이 14세의 악기가 바로 이것 — 태양왕은 바로크 기타 애호가였다",
    ],
  },

  {
    id: "renaissance_guitar",
    name: "르네상스 기타",
    aka: ["renaissance guitar", "4-course guitar"],
    family: "발현·류트족",
    desc: "16세기의 4코스 소형 기타. 우쿨렐레만 한 몸집에 거트현 특유의 순한 소리로, 당대엔 류트의 '만만한 동생' 취급이었지만 지금은 귀여운 고음악 입문 악기다.",

    sound: {
      tone: ["소박함", "따뜻함", "반짝임", "귀여운"],
      toneDesc: "작고 둥근 울림. 우쿨렐레에서 플라스틱 소리를 빼고 촛불 냄새를 입힌 듯한 음색.",
      volume: 2,
      sustain: 2,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["리듬반주", "멜로디"],
    },

    body: {
      saliva: 0,
      callus: 1,
      callusDesc: "저장력 4코스 — 발현악기 중 손끝 부담 최소 급.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1kg 미만. 우쿨렐레급 휴대성.",
      posture: "부담 없는 자세.",
      postureRisk: [],
      handSize: "작은 스케일 — 손 작아도 완전 무난.",
    },

    cost: {
      entryKRW: [1000000, 3000000],
      entryDesc: "국내 판매 없음. 공방 주문·직구 전제(범위 대략치). 류트족 중 가장 싼 진입로.",
      midKRW: [3000000, 6000000],
      running: "현값 정도.",
    },
    practical: {
      portability: 5,
      noise: 1,
      apartmentOk: "밤에도 무민폐.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 2,
    },

    vibe: {
      tags: ["귀여운", "고풍스러운", "소박한", "학구적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 2,
    },

    genres: { main: ["바로크·고음악"], sub: ["포크"] },

    kinship: {
      easyFrom: ["우쿨렐레", "기타"],
      sameTuning: ["우쿨렐레"],
      leadsTo: ["바로크 기타", "르네상스 류트", "비우엘라"],
    },
    ensemble: ["고음악 앙상블", "성악 반주"],

    caveats: [
      "전용 레퍼토리(모를레 등 프랑스 4코스 곡집)가 한정적 — 금방 류트·비우엘라가 궁금해짐",
      "악기·자료 모두 직구 전제. 국내 인지도 0",
    ],
    funFacts: [
      "우쿨렐레와 조율 골격이 같아 '16세기 우쿨렐레'로 부르면 대충 맞다",
      "당대 문헌에 '이발사도 친다'고 적힐 만큼 서민 악기였다",
    ],
  },

  {
    id: "vihuela",
    name: "비우엘라",
    aka: ["vihuela", "vihuela de mano"],
    family: "발현·류트족",
    desc: "16세기 스페인의 6코스 발현악기. 몸은 기타, 영혼은 류트 — 기타 모양 몸통에 류트와 같은 조율로, 밀란·나르바에스의 스페인 황금기 레퍼토리를 가진 기타의 직계 조상.",

    sound: {
      tone: ["따뜻함", "애수", "맑음", "나무 울림"],
      toneDesc: "류트보다 단정하고 기타보다 옛스러운, 마른 나무 향이 나는 소리. 스페인 특유의 그늘진 서정이 배어 있다.",
      volume: 2,
      sustain: 2,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["올라운드", "멜로디", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "저장력 더블 코스. 기타 경험자면 손끝은 금방 적응.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1kg 안팎. 얇은 몸통이라 가볍다.",
      posture: "기타식 자세 그대로 — 류트의 둥근 몸통 씨름이 없다는 게 기타 경험자에게 큰 장점.",
      postureRisk: [],
      handSize: "넥 폭 중간. 무난.",
    },

    cost: {
      entryKRW: [2000000, 6000000],
      entryDesc: "국내 판매 없음. 공방 주문·직구 전제(범위 대략치). 스페인·남미계 공방이 전통 강세.",
      midKRW: [5000000, 12000000],
      running: "현값 정도.",
    },
    practical: {
      portability: 4,
      noise: 1,
      apartmentOk: "밤 연습 무난.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 2,
    },

    vibe: {
      tags: ["고풍스러운", "학구적", "서정적", "이국적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["바로크·고음악"], sub: ["클래식", "플라멩코·스페인"] },

    kinship: {
      easyFrom: ["기타", "바로크 기타"],
      sameTuning: ["르네상스 류트"],
      leadsTo: ["르네상스 류트", "바로크 기타"],
    },
    ensemble: ["고음악 앙상블", "성악 반주(로만세)", "독주"],

    caveats: [
      "레퍼토리가 16세기 스페인 출판보 7권에 사실상 집중 — 깊지만 좁다",
      "타블라추어가 이탈리아식(숫자 위아래 반전)이라 류트 타브와 또 다름",
      "국내에서 실물을 본 사람이 손에 꼽는 수준",
    ],
    funFacts: [
      "클래식 기타리스트들이 '기타의 뿌리'를 찾아 가장 많이 곁눈질하는 악기다",
      "나르바에스의 '소 젖 짜는 여인 변주곡'은 기타 편곡으로도 유명하다",
    ],
  },

  {
    id: "mandolino",
    name: "만돌리노 (바로크 만돌린)",
    aka: ["mandolino", "baroque mandolin", "만돌리노 롬바르도"],
    family: "발현·류트족",
    desc: "17~18세기의 거트현 만돌린. 피크로 치는 현대 만돌린과 달리 손가락으로 뜯으며, 조율도 4도 위주 — 사실상 '초소형 류트'다. 비발디 만돌린 협주곡의 원래 주인공.",

    sound: {
      tone: ["반짝임", "소박함", "따뜻함", "유리 같은"],
      toneDesc: "현대 만돌린의 쨍한 금속성 대신, 거트현의 작고 둥근 또랑또랑함. 촛불 아래 오르골 같은 소리.",
      volume: 2,
      sustain: 1,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["멜로디"],
    },

    body: {
      saliva: 0,
      callus: 1,
      callusDesc: "저장력 거트계 현을 손가락으로 뜯어 손끝 부담 최소 급.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "0.5kg 안팎. 류트족 최소 사이즈.",
      posture: "부담 없음.",
      postureRisk: [],
      handSize: "초소형 스케일 — 손 큰 사람이 오히려 비좁다.",
    },

    cost: {
      entryKRW: [2000000, 6000000],
      entryDesc: "국내 판매 없음. 공방 주문·직구 전제(범위 대략치). 작다고 싸지 않다 — 공정은 류트급.",
      midKRW: [5000000, 12000000],
      running: "현값 정도.",
    },
    practical: {
      portability: 5,
      noise: 1,
      apartmentOk: "밤에도 무민폐.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 3,
    },

    vibe: {
      tags: ["귀여운", "고풍스러운", "학구적", "컬트적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 2,
    },

    genres: { main: ["바로크·고음악"], sub: ["클래식"] },

    kinship: {
      easyFrom: ["만돌린", "우쿨렐레", "르네상스 류트"],
      sameTuning: [],
      leadsTo: ["르네상스 류트", "만돌린"],
    },
    ensemble: ["바로크 앙상블", "고음악 단체"],

    caveats: [
      "현대 만돌린 경험자도 조율(4도)·주법(손가락)이 달라 '같은 악기'라 생각하면 안 됨",
      "레퍼토리·자료·악기 모두 희소 — 류트족 중에서도 마니아 코스",
    ],
    funFacts: [
      "비발디의 유명한 만돌린 협주곡 C장조는 원래 이 거트현 악기를 위한 곡이다",
      "현대 나폴리 만돌린(쇠줄·피크)은 18세기 후반에야 등장한 '신형'이다",
    ],
  },

  {
    id: "renaissance_cittern",
    name: "르네상스 시턴",
    aka: ["cittern", "cithren", "시턴(르네상스)"],
    family: "발현·류트족",
    desc: "철현을 피크로 치는 르네상스 발현악기. 거트현 류트가 '귀족의 악기'였다면 시턴은 이발소에 걸려 있던 '동네 악기' — 튼튼하고 시끄럽고 유쾌하다.",

    sound: {
      tone: ["금속성", "카랑카랑", "반짝임", "소박함"],
      toneDesc: "철현 특유의 챙챙거리는 밝은 울림. 류트족의 촛불 소리와 달리 대낮 장터 소리다.",
      volume: 3,
      sustain: 3,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["리듬반주", "멜로디"],
    },

    body: {
      saliva: 0,
      callus: 3,
      callusDesc: "철현이라 류트족 중 손끝 부담 최대 — 만돌린급 물집 코스.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1~1.5kg. 몸통이 얇아 휴대 편함.",
      posture: "부담 없음.",
      postureRisk: [],
      handSize: "짧은 스케일 — 손 작아도 무난.",
    },

    cost: {
      entryKRW: [1500000, 5000000],
      entryDesc: "국내 판매 없음. 공방 주문·직구 전제(범위 대략치). 구조가 단순해 류트보다 싼 편.",
      midKRW: [4000000, 9000000],
      running: "철현이라 잘 안 끊기고 조율도 안정적 — 류트족 중 유지 최편.",
    },
    practical: {
      portability: 4,
      noise: 3,
      apartmentOk: "낮 연습 무난.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 1,
    },

    vibe: {
      tags: ["소박한", "고풍스러운", "파티", "컬트적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 2,
    },

    genres: { main: ["바로크·고음악"], sub: ["포크", "켈틱·아이리시"] },

    kinship: {
      easyFrom: ["만돌린", "기타", "우쿨렐레"],
      sameTuning: [],
      leadsTo: ["시턴(모던 시턴)", "반도라", "오르파리온"],
    },
    ensemble: ["브로큰 콘소트(르네상스 혼성 합주)", "고음악 앙상블"],

    caveats: [
      "거트현 류트족과 달리 철현·피크라 '고음악 = 여린 소리' 기대와 어긋날 수 있음",
      "레퍼토리·자료 희소(홀본 등) — 모던 시턴과 이름만 같고 조율·문화가 다름",
    ],
    funFacts: [
      "엘리자베스 시대 이발소에는 손님 대기용 시턴이 걸려 있었다 — 오늘날 카페 잡지 포지션",
      "철현+얕은 몸통이라 류트보다 조율이 훨씬 오래 버틴다 — 류트 농담의 반대편에 있는 악기",
    ],
  },

  {
    id: "orpharion",
    name: "오르파리온",
    aka: ["orpharion", "orpharium"],
    family: "발현·류트족",
    desc: "류트와 같은 조율에 철현을 얹은 엘리자베스 시대 영국 악기. 프렛과 브리지가 부챗살처럼 비스듬한(슬랜트) 독특한 설계로, 류트 악보를 그대로 철현의 챙챙한 음색으로 연주한다.",

    sound: {
      tone: ["금속성", "반짝임", "신비", "유리 같은"],
      toneDesc: "류트 레퍼토리가 하프시코드 비슷한 금속 광택으로 울린다. 아는 곡이 낯선 옷을 입는 재미.",
      volume: 2,
      sustain: 3,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 2,
      roles: ["올라운드", "멜로디", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 3,
      callusDesc: "철현 더블 코스 — 손끝 단련 필요. 단 저장력 세팅이라 만돌린보다는 순함.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1.5kg 안팎. 몸통이 얇아 류트보다 안기 편하다.",
      posture: "부담 없음.",
      postureRisk: [],
      handSize: "비스듬한 프렛에 손 각도 적응 필요. 크기 자체는 무난.",
    },

    cost: {
      entryKRW: [4000000, 12000000],
      entryDesc: "양산품 전무 — 소수 공방 주문 제작뿐(범위 대략치, 대기 김). 중고 매물은 몇 년에 한 번 나오는 수준.",
      midKRW: [8000000, 20000000],
      running: "철현이라 현 유지 자체는 편함.",
    },
    practical: {
      portability: 4,
      noise: 2,
      apartmentOk: "밤 연습 무난.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 4,
      quickReward: 3,
      maintenance: 2,
    },

    vibe: {
      tags: ["컬트적", "학구적", "고풍스러운", "장인 정신"],
      trendy: 1,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["바로크·고음악"], sub: [] },

    kinship: {
      easyFrom: ["르네상스 류트", "기타", "만돌린"],
      sameTuning: ["르네상스 류트"],
      leadsTo: ["반도라"],
    },
    ensemble: ["고음악 앙상블", "독주(류트 레퍼토리 공유)"],

    caveats: [
      "전 세계 연주자를 다 모아도 강당 하나가 안 찬다 — 진짜 와일드카드 픽",
      "선생·교재가 따로 없고 류트 지식에 얹어 스스로 개척하는 악기",
      "악기 확보가 곧 프로젝트(공방 리서치·주문·대기·직구)",
    ],
    funFacts: [
      "다울랜드 악보 표지에 '류트 또는 오르파리온용'이라 인쇄돼 있다 — 당대엔 류트의 정식 대체재였다",
      "이름은 오르페우스+아리온, 그리스 신화 음악가 둘의 합성어다",
    ],
  },

  {
    id: "bandora",
    name: "반도라",
    aka: ["bandora", "pandora"],
    family: "발현·류트족",
    desc: "오르파리온의 대형 베이스 버전. 물결치는 외곽선의 큰 몸통에 굵은 철현을 걸어, 엘리자베스 시대 '브로큰 콘소트' 합주의 저음을 담당했다. 철현 베이스의 원조 격.",

    sound: {
      tone: ["낮고 깊음", "금속성", "웅장함", "먹먹함"],
      toneDesc: "철현 베이스가 웅웅 울리는 어둡고 큰 소리. 하프시코드 저음역과 콘트라베이스 사이 어딘가.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 2,
      chordal: true,
      melodic: false,
      singAlong: false,
      improv: 3,
      roles: ["베이스", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 3,
      callusDesc: "굵은 철현 — 손끝·왼손 악력 모두 단련 필요.",
      embouchure: 0,
      breath: 0,
      weight: 2,
      weightDesc: "2~3kg에 몸통이 큼. 기타 케이스급 이동.",
      posture: "큰 몸통을 안는 자세. 부담 중간.",
      postureRisk: [],
      handSize: "긴 스케일 — 손이 작으면 확실히 불리.",
    },

    cost: {
      entryKRW: [5000000, 15000000],
      entryDesc: "양산품 전무 — 소수 공방 주문 제작뿐(범위 대략치). 오르파리온보다도 매물이 귀함.",
      midKRW: [10000000, 25000000],
      running: "철현 유지 편함. 굵은 현 교체 시 현값은 좀 나감.",
    },
    practical: {
      portability: 3,
      noise: 3,
      apartmentOk: "저음이라 낮 연습 권장(벽 타고 울림).",
      selfLearn: 1,
      lessonKR: 1,
      entryBarrier: 5,
      quickReward: 2,
      maintenance: 2,
    },

    vibe: {
      tags: ["컬트적", "위압적", "학구적", "고풍스러운"],
      trendy: 1,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["바로크·고음악"], sub: [] },

    kinship: {
      easyFrom: ["오르파리온", "르네상스 류트", "기타"],
      sameTuning: [],
      leadsTo: [],
    },
    ensemble: ["브로큰 콘소트(플루트·비올·류트·시턴과)", "고음악 앙상블"],

    caveats: [
      "합주 전용에 가까운 악기 — 브로큰 콘소트를 짤 동료가 없으면 쓸 곳이 마땅치 않다",
      "국내 연주자·악기 모두 사실상 0에서 시작하는 완전 개척지",
      "독주 악보가 극히 적음",
    ],
    funFacts: [
      "1562년 런던의 존 로즈가 발명했다고 기록된, '발명자가 남아 있는' 드문 르네상스 악기다",
      "셰익스피어 시대 극장 음악(브로큰 콘소트)의 저음이 바로 이 소리였다",
    ],
  },

  {
    id: "gallichon",
    name: "갈리숑 (만도라)",
    aka: ["gallichon", "mandora", "calichon"],
    family: "발현·류트족",
    desc: "18세기 독일어권의 6~8코스 베이스 류트. 기타와 거의 같은 조율이라 '기타 감각으로 치는 류트'로 통하며, 바로크 류트의 D단조 미로를 우회해 고음악에 진입하는 지름길이다.",

    sound: {
      tone: ["낮고 깊음", "따뜻함", "부드러움", "나무 울림"],
      toneDesc: "류트의 여림과 기타의 친숙함 사이. 낮게 가라앉은 저음이 노래 반주에 특히 좋다.",
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
      roles: ["올라운드", "화음반주", "베이스"],
    },

    body: {
      saliva: 0,
      callus: 2,
      callusDesc: "저장력·살 터치 — 류트와 동일하게 순한 편.",
      embouchure: 0,
      breath: 0,
      weight: 2,
      weightDesc: "1.5~2kg. 몸통이 크지만 가벼움.",
      posture: "큰 류트 몸통 안기 적응 필요. 부담 중간 이하.",
      postureRisk: [],
      handSize: "긴 스케일 — 손 작으면 6코스 소형 모델 추천.",
    },

    cost: {
      entryKRW: [3000000, 10000000],
      entryDesc: "양산품 없음. 공방 주문·중고 직구 전제(범위 대략치). 바로크 류트보다는 아래 급 예산.",
      midKRW: [8000000, 18000000],
      running: "현값 정도. 코스 수가 적어 류트족 중 조율 부담 덜한 편.",
    },
    practical: {
      portability: 3,
      noise: 2,
      apartmentOk: "밤 연습 무난.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 3,
    },

    vibe: {
      tags: ["학구적", "고풍스러운", "소박한", "컬트적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 2,
    },

    genres: { main: ["바로크·고음악"], sub: ["클래식"] },

    kinship: {
      easyFrom: ["기타", "르네상스 류트", "바로크 기타"],
      sameTuning: ["기타"],
      leadsTo: ["바로크 류트", "테오르보"],
    },
    ensemble: ["바로크 앙상블(통주저음)", "성악 반주", "독주"],

    caveats: [
      "인지도가 낮아 '류트냐'는 질문에 매번 설명이 길어진다",
      "악보·연구가 최근에야 발굴되는 중 — 레퍼토리 지도가 아직 그려지는 악기",
      "국내 연주자 사실상 없음",
    ],
    funFacts: [
      "기타 조율과 거의 같아 기타리스트가 '치팅'으로 바로크에 입장할 수 있는 뒷문으로 불린다",
      "텔레만이 이 악기를 위한 협주곡을 남겼다",
    ],
  },

  {
    id: "psaltery",
    name: "살터리 (프살테리움)",
    aka: ["psaltery", "psalterium", "플럭드 살터리"],
    family: "발현·치터족",
    desc: "울림통 위에 현을 나란히 걸고 손가락·깃펜으로 뜯는 중세 악기. 프렛도 버튼도 없이 현 하나 = 음 하나라 구조가 가장 원시적이고, 그래서 가장 진입이 쉽다. 시편(Psalm)과 어원을 나눈 악기.",

    sound: {
      tone: ["영롱함", "맑음", "신비", "소박함"],
      toneDesc: "작은 하프와 오르골 사이의 짧고 맑은 울림. 중세 성가나 캐럴을 얹으면 수도원 채플 공기가 난다.",
      volume: 2,
      sustain: 3,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 2,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 2,
      roles: ["멜로디", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 1,
      callusDesc: "손끝 부담 거의 없음. 깃펜(플렉트럼)으로 뜯으면 아예 0.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1~2kg. 가방에 들어간다.",
      posture: "무릎·테이블 위 또는 가슴에 안고. 부담 없음.",
      postureRisk: [],
      handSize: "무관.",
    },

    cost: {
      entryKRW: [500000, 2000000],
      entryDesc: "국내 판매 없음. 얼리뮤직샵·유럽 공방 직구 기준(범위 대략치). 초희귀류트족보다는 훨씬 만만한 가격.",
      midKRW: [2000000, 5000000],
      running: "현값 정도. 조율은 자주 해야 함.",
    },
    practical: {
      portability: 5,
      noise: 1,
      apartmentOk: "밤에도 무민폐.",
      selfLearn: 4,
      lessonKR: 1,
      entryBarrier: 1,
      quickReward: 4,
      maintenance: 2,
    },

    vibe: {
      tags: ["명상적", "고풍스러운", "신비", "소박한", "컬트적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 2,
    },

    genres: { main: ["바로크·고음악"], sub: ["명상·사운드힐링", "CCM·교회음악", "뉴에이지"] },

    kinship: {
      easyFrom: ["라이어 하프", "레버 하프"],
      sameTuning: [],
      leadsTo: ["레버 하프", "해머드 덜시머"],
    },
    ensemble: ["중세·르네상스 앙상블", "교회 소모임", "명상 모임"],

    caveats: [
      "온음계 현 배열이라 반음 많은 곡·조옮김에 약함",
      "레퍼토리를 스스로 얹어야 하는 악기 — '살터리 교본' 같은 건 없다",
      "활로 켜는 '보우드 살터리'는 20세기 발명품으로 사실상 다른 악기이니 구매 시 구분할 것",
    ],
    funFacts: [
      "중세 그림·성당 조각에서 천사가 들고 있는 납작한 현악기가 대개 이것이다",
      "해머드 덜시머와 몸은 같고 주법만 다르다 — 뜯으면 살터리, 치면 덜시머",
    ],
  },

];

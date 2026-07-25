// 악기 추천 설문 DB — 배치: 서양 목관 + 바로크 관악 (17종)
// 스키마: SCHEMA.md v1 준수. 장르는 data/genres.js canonical 26개만 사용.

const INST_WOODWIND_WESTERN = [

  // ══════════════════ 모던 목관 (9) ══════════════════

  {
    id: "recorder",
    name: "리코더",
    aka: ["recorder", "블록플뢰테", "Blockflöte"],
    family: "목관·에어리드(플루트족)",
    desc: "입에 물기만 하면 소리가 나는 휘슬형 목관. 한국에선 '초등학교 준비물'이라는 편견이 강하지만, 원래는 바흐·헨델·텔레만이 독주 협주곡을 써준 바로크의 정식 독주 악기다. 성인이 되어 나무 리코더로 바로크 소나타를 다시 만나면 완전히 다른 악기가 된다 — 세계적으로는 이 '재평가 루트'로 입문하는 성인 아마추어가 상당히 많다.",

    sound: {
      tone: ["맑음", "소박함", "나무 울림", "숨소리 섞임"],
      toneDesc: "맑고 순한 피리 소리. 플라스틱은 다소 밋밋하지만, 나무 리코더는 숨결이 섞인 따뜻하고 고풍스러운 음색이 난다. 알토·테너·베이스로 내려갈수록 부드럽고 그윽해진다.",
      volume: 2,
      sustain: 3,
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
      saliva: 2,
      callus: 0,
      callusDesc: "손끝 부담 없음.",
      embouchure: 1,
      breath: 1,
      weight: 1,
      weightDesc: "소프라노 수백 g. 가방에 쏙 들어감.",
      posture: "서서도 앉아서도 부담 없는 자세",
      postureRisk: [],
      handSize: "소프라노는 손 작아도 무방. 테너·베이스는 구멍 간격이 넓어 손 큰 사람이 유리.",
    },

    cost: {
      entryKRW: [10000, 150000],
      entryDesc: "야마하·아울로스 플라스틱이 1~3만원인데 품질이 진지한 연습에도 충분. 나무 입문기(모크·묄렌하우어 등)는 10~40만원.",
      midKRW: [400000, 2000000],
      running: "거의 없음. 윈드웨이 청소용 스왑 정도.",
    },
    practical: {
      portability: 5,
      noise: 3,
      apartmentOk: "소리가 작은 편이라 낮 연습은 대체로 무난. 소프라노 고음은 의외로 뾰족해 밤엔 주의.",
      selfLearn: 5,
      lessonKR: 2,
      entryBarrier: 1,
      quickReward: 5,
      maintenance: 2,
    },

    vibe: {
      tags: ["고풍스러운", "소박한", "학구적", "유행과 동떨어진"],
      trendy: 1,
      rarityKR: 1,
      showOff: 1,
    },

    genres: { main: ["바로크·고음악"], sub: ["클래식", "포크"] },

    kinship: {
      easyFrom: ["틴휘슬", "챨루모", "플루트"],
      sameTuning: [],
      leadsTo: ["트라베르소", "챨루모", "크룸호른", "플루트"],
    },
    ensemble: ["리코더 콘소트(SATB 합주)", "바로크 앙상블", "교회·아마추어 앙상블"],

    tracks: [
      { id: "baroque", label: "바로크 정통(알토 리코더)", genres: ["바로크·고음악"], note: "성인 재입문의 정석. F조 알토로 헨델·텔레만 소나타. 바로크 운지·장식음을 새로 배운다." },
      { id: "casual", label: "입문·앙상블", genres: ["포크", "클래식"], note: "소프라노/테너로 아는 멜로디부터. 리코더 콘소트에 들어가면 4성부 합주의 재미가 크다." },
    ],

    caveats: [
      "'애들 악기'라는 시선을 스스로 넘어야 함 — 실제 바로크 레퍼토리는 상급자도 평생 파는 깊이",
      "전문 리코더 레슨은 한국에서 드묾(고음악 전공자 위주). 대신 독학 인프라는 세계 최고 수준",
      "따뜻한 숨 때문에 윈드웨이에 응축수가 차서 소리가 갈라짐 — 수시로 털어내는 게 일상",
    ],
    funFacts: ["바흐 브란덴부르크 협주곡 2·4번의 '플루트' 파트는 원래 리코더다", "비발디는 리코더 협주곡을 20곡 넘게 썼다"],
  },

  {
    id: "flute",
    name: "플루트",
    aka: ["flute", "서양 플루트", "콘서트 플루트"],
    family: "목관·에어리드(플루트족)",
    desc: "은빛 관을 옆으로 들고 입김의 각도로 소리를 만드는 대표 목관. 리드가 없어 소모품 걱정이 없고, 오케스트라부터 재즈·OST까지 레퍼토리가 넓다. 첫 소리(암부슈어) 관문만 넘으면 이후 성장 곡선이 완만한, 취미 목관의 표준 선택지.",

    sound: {
      tone: ["맑음", "영롱함", "부드러움", "숨소리 섞임"],
      toneDesc: "맑고 투명한 고음. 저음역은 의외로 어둡고 관능적이며, 숨소리를 섞은 재즈 톤·휘파람 같은 순음까지 표정이 다양하다.",
      volume: 3,
      sustain: 3,
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
      callusDesc: "손끝 부담 없음.",
      embouchure: 2,
      breath: 2,
      weight: 1,
      weightDesc: "약 450g. 케이스째 들어도 가볍다.",
      posture: "팔을 옆으로 든 비대칭 자세 — 장시간 연습 시 목·어깨에 부담",
      postureRisk: ["목어깨"],
      handSize: "표준 손 크기면 무난. 손 작으면 커브드 헤드나 오프셋 G키 모델이 편함.",
    },

    cost: {
      entryKRW: [300000, 900000],
      entryDesc: "야마하 YFL-212급 입문 정석이 70~90만원. 30만원대 중국산·국산도 시작엔 충분하나 키 정밀도 편차 있음.",
      midKRW: [1500000, 5000000],
      running: "소모품 거의 없음. 연 1회 패드 점검·조정비 정도.",
    },
    practical: {
      portability: 5,
      noise: 3,
      apartmentOk: "음량은 중간이지만 고음이 벽을 잘 뚫음. 낮 연습 위주, 약음기는 사실상 없어 연습실 병행이 흔함.",
      selfLearn: 3,
      lessonKR: 5,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 2,
    },

    vibe: {
      tags: ["우아한", "클래식 정통", "서정적", "낭만적"],
      trendy: 3,
      rarityKR: 1,
      showOff: 3,
    },

    genres: { main: ["클래식"], sub: ["재즈", "영화·게임 OST", "팝·싱어송라이터", "뉴에이지"] },

    kinship: {
      easyFrom: ["리코더", "틴휘슬", "피콜로"],
      sameTuning: [],
      leadsTo: ["피콜로", "트라베르소", "아이리시 플루트", "알토 플루트"],
    },
    ensemble: ["아마추어 오케스트라", "윈드 앙상블(취주악)", "플루트 콰이어", "교회 반주"],

    tracks: [
      { id: "classical", label: "클래식", genres: ["클래식"], note: "레슨·콩쿠르·아마추어 오케스트라까지 인프라가 가장 탄탄한 정통 루트." },
      { id: "jazz", label: "재즈", genres: ["재즈"], note: "허비 만 계열의 플루트 재즈. 숨소리·허밍을 섞는 특유의 주법. 색소폰 겸업 주자도 많다." },
      { id: "ost", label: "OST·팝", genres: ["영화·게임 OST", "팝·싱어송라이터"], note: "지브리·디즈니 멜로디의 단골 악기. 반주 MR과 함께하는 유튜브 커버 문화가 활발." },
    ],

    caveats: [
      "첫 2~4주는 소리 자체가 안 남(암부슈어) — 여기서 그만두는 사람이 가장 많음",
      "머리가 어지러울 만큼 숨을 쓰는 악기. 과호흡 어지럼증은 누구나 한 번 겪음",
      "옆으로 드는 자세 탓에 목·어깨 뭉침 관리 필요",
    ],
    funFacts: ["금·은으로 만들어도 분류는 '목관' — 리드 없이 에어리드로 소리 내기 때문", "표준 보임 시스템은 1847년 완성 이후 거의 그대로다"],
  },

  {
    id: "piccolo",
    name: "피콜로",
    aka: ["piccolo"],
    family: "목관·에어리드(플루트족)",
    desc: "플루트의 절반 크기, 한 옥타브 위. 오케스트라 전체를 뚫고 맨 꼭대기에서 반짝이는 최고음 담당이다. 보통 플루트를 먼저 배운 뒤 겸하는 '세컨드 악기'이며, 취주악·오케스트라에서 수요가 꾸준하다. 단독 입문 악기로는 비추천이지만 플루트 주자의 확장으로는 최고의 가성비 포지션.",

    sound: {
      tone: ["카랑카랑", "반짝임", "화려함", "금속성"],
      toneDesc: "새소리처럼 높고 찌르는 광휘. 잘 불면 오케스트라 위에 뿌려지는 별가루, 못 불면 그냥 비명이다. 저음역은 의외로 여리고 귀엽다.",
      volume: 5,
      sustain: 3,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 5,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 1,
      roles: ["멜로디"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손끝 부담 없음.",
      embouchure: 3,
      breath: 1,
      weight: 1,
      weightDesc: "300g 미만. 코트 주머니에 들어가는 관악기.",
      posture: "플루트와 동일한 비대칭 자세이나 가벼워서 부담은 덜함",
      postureRisk: ["목어깨"],
      handSize: "키 간격이 좁아 손 큰 사람이 오히려 갑갑해함. 손 작은 사람에게 유리.",
    },

    cost: {
      entryKRW: [500000, 1300000],
      entryDesc: "야마하 YPC-32급이 100만원 안팎. 저가 중국산은 음정이 위험해 목관 중 특히 '싼 게 비지떡'이 심한 악기.",
      midKRW: [2000000, 6000000],
      running: "소모품 거의 없음. 연 1회 조정비.",
    },
    practical: {
      portability: 5,
      noise: 5,
      apartmentOk: "집 연습 사실상 불가. 작지만 데시벨은 목관 최상위 — 연습실 필수.",
      selfLearn: 2,
      lessonKR: 3,
      entryBarrier: 4,
      quickReward: 2,
      maintenance: 2,
    },

    vibe: {
      tags: ["화려함", "클래식 정통", "무대 장악", "귀여운"],
      trendy: 1,
      rarityKR: 3,
      showOff: 4,
    },

    genres: { main: ["클래식", "브라스밴드·취주악"], sub: ["영화·게임 OST"] },

    kinship: {
      easyFrom: ["플루트"],
      sameTuning: ["플루트"],
      leadsTo: [],
    },
    ensemble: ["아마추어 오케스트라(피콜로 지정석)", "윈드 앙상블(취주악)", "플루트 콰이어"],

    caveats: [
      "사실상 플루트 경험자 전용 — 관이 짧을수록 음정·암부슈어 오차가 배로 드러남",
      "고음 연습은 본인 귀도 괴로움(귀마개 끼고 연습하는 주자가 많다)",
      "독주 레퍼토리가 얇아 혼자 놀기보다 합주용 포지션",
    ],
    funFacts: ["수자 행진곡 '성조기여 영원하라'의 피콜로 오블리가토는 취주악 최고의 하이라이트 순간이다"],
  },

  {
    id: "irish_flute",
    name: "아이리시 플루트",
    aka: ["Irish flute", "우든 플루트", "심플 시스템 플루트"],
    family: "목관·에어리드(플루트족)",
    desc: "키가 거의 없는 6홀 나무(또는 폴리머) 플루트. 모던 플루트가 버린 19세기 심플 시스템 설계를 아이리시 음악이 살려 쓰는 악기다. 은빛 플루트보다 어둡고 숨이 많이 섞인 소리로 릴·지그를 달리며, 틴휘슬과 운지가 같아 아이리시 세션 세계의 표준 승급 코스이기도 하다.",

    sound: {
      tone: ["나무 울림", "숨소리 섞임", "따뜻함", "먹먹함"],
      toneDesc: "허스키하고 어두운 나무 소리. 모던 플루트의 '맑음'과 정반대의 매력 — 숨소리와 타음(태핑)이 섞인 흙내 나는 톤이 아이리시 댄스곡과 맞물린다.",
      volume: 3,
      sustain: 3,
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
      callusDesc: "손끝 부담 없음.",
      embouchure: 2,
      breath: 3,
      weight: 1,
      weightDesc: "500g 안팎. 조립식 3~4분할로 휴대 간편.",
      posture: "플루트와 같은 비대칭 자세 + 큰 홀을 손가락 살로 막는 그립",
      postureRisk: ["목어깨", "손목"],
      handSize: "홀 간격이 넓어 손 작으면 확실히 불리. 구매 전 스트레치 확인 필수.",
    },

    cost: {
      entryKRW: [200000, 700000],
      entryDesc: "딕슨(Dixon) 폴리머 입문기가 20~40만원(직구). 델린·목재 공방 악기는 70만원~200만원대.",
      midKRW: [1000000, 3000000],
      running: "목재는 오일링 정도. 소모품 없음.",
    },
    practical: {
      portability: 5,
      noise: 3,
      apartmentOk: "모던 플루트보다 소리가 어두워 체감 민폐는 덜하나 밤 연습은 무리.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 2,
    },

    vibe: {
      tags: ["루츠·어쿠스틱", "이국적", "유행과 동떨어진", "자유로운"],
      trendy: 2,
      rarityKR: 4,
      showOff: 2,
    },

    genres: { main: ["켈틱·아이리시"], sub: ["포크"] },

    kinship: {
      easyFrom: ["틴휘슬", "플루트", "리코더"],
      sameTuning: ["틴휘슬"],
      leadsTo: ["트라베르소", "로우휘슬"],
    },
    ensemble: ["아이리시 세션", "포크 밴드"],

    caveats: [
      "모던 플루트보다 숨을 훨씬 많이 먹음 — 릴 한 곡 완주가 초반 목표가 될 정도",
      "국내 레슨은 거의 없음. 배움은 온라인(OAIM 등 영어권 강좌)+국내 소수 아이리시 커뮤니티",
      "악보보다 귀로 배우는 문화라 '귀카피' 훈련이 사실상 필수",
    ],
    funFacts: ["19세기 은플루트가 유행하자 헐값에 풀린 나무 플루트를 아일랜드 악사들이 주워 쓰면서 전통이 됐다는 설이 유력하다"],
  },

  {
    id: "clarinet",
    name: "클라리넷",
    aka: ["clarinet"],
    family: "목관·싱글리드",
    desc: "싱글 리드 특유의 부드럽고 둥근 소리에, 목관 중 최대급 음역(약 4옥타브)을 가진 만능 악기. 클래식 오케스트라의 주역이면서 스윙 재즈의 원조 스타였고, 클레즈머에선 울고 웃는 사람 목소리가 된다. 입문 가격이 합리적이고 레슨 인프라도 탄탄해 성인 취미 목관의 가성비 강자.",

    sound: {
      tone: ["부드러움", "따뜻함", "낮고 깊음", "노래하는 듯"],
      toneDesc: "저음(샬뤼모 음역)은 어둡고 벨벳 같으며, 고음은 맑고 반짝인다. 한 악기 안에 첼로와 플루트가 같이 사는 느낌. 클레즈머식으로 꺾으면 웃음·울음소리까지 낸다.",
      volume: 3,
      sustain: 3,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 5,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["멜로디", "올라운드"],
    },

    body: {
      saliva: 2,
      callus: 0,
      callusDesc: "오른손 엄지 받침 통증(초반)이 굳은살 대신 오는 통과의례.",
      embouchure: 2,
      breath: 2,
      weight: 2,
      weightDesc: "800g 안팎. 오른손 엄지가 무게를 다 받아 스트랩 쓰는 사람도 있음.",
      posture: "정면 자세라 무난. 엄지·손목 피로가 관리 포인트",
      postureRisk: ["손목"],
      handSize: "링키(구멍+링) 구조라 손가락으로 홀을 정확히 막아야 함. 손가락 가늘고 짧으면 초반 삑사리 고생.",
    },

    cost: {
      entryKRW: [300000, 800000],
      entryDesc: "야마하 YCL-255급 입문 정석이 60~80만원. 20~30만원대 중국산도 있으나 음정·키감 복불복.",
      midKRW: [1500000, 4000000],
      running: "리드가 소모품 — 낱개 3~5천원, 10개 박스 3~5만원. 월 1~2만원꼴.",
    },
    practical: {
      portability: 4,
      noise: 4,
      apartmentOk: "낮에도 민원 가능권. 이토록 부드러운 소리도 벽 너머에선 '삑삑'이다. 연습실 병행 권장.",
      selfLearn: 3,
      lessonKR: 4,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 3,
    },

    vibe: {
      tags: ["클래식 정통", "따뜻함", "우아한", "서정적"],
      trendy: 2,
      rarityKR: 2,
      showOff: 3,
    },

    genres: { main: ["클래식"], sub: ["재즈", "발칸·클레즈머·집시", "브라스밴드·취주악", "영화·게임 OST"] },

    kinship: {
      easyFrom: ["리코더", "색소폰", "챨루모"],
      sameTuning: [],
      leadsTo: ["색소폰", "베이스 클라리넷", "챨루모"],
    },
    ensemble: ["아마추어 오케스트라", "윈드 앙상블(취주악)", "클라리넷 콰이어", "재즈 콤보", "클레즈머 밴드"],

    tracks: [
      { id: "classical", label: "클래식", genres: ["클래식"], note: "모차르트 협주곡·브람스 소나타라는 최상급 레퍼토리. 아마추어 오케스트라 자리도 넉넉한 편." },
      { id: "jazz", label: "재즈(스윙)", genres: ["재즈"], note: "베니 굿맨의 악기. 뉴올리언스~스윙 시대의 주인공으로, 딕시랜드 밴드에서 여전히 주역." },
      { id: "klezmer", label: "클레즈머", genres: ["발칸·클레즈머·집시"], note: "글리산도·꺾기·웃음소리 주법. 사람 목소리처럼 우는 동유럽 유대 음악의 간판." },
    ],

    caveats: [
      "레지스터 전환(브릿지 음역)에서 삑사리 지옥을 한 번은 지나감",
      "리드 복불복 관리가 일상 — 같은 박스에서도 좋은 리드는 절반",
      "겨울 실외·차가운 악기는 음정이 크게 떨어짐(목관 공통이나 특히 민감)",
    ],
    funFacts: ["'클라리넷'은 '작은 트럼펫(clarino)'이라는 뜻 — 초기엔 트럼펫 대용 고음 악기였다", "거슈윈 '랩소디 인 블루' 도입부의 글리산도는 리허설 중 주자의 장난에서 나왔다"],
  },

  {
    id: "oboe",
    name: "오보에",
    aka: ["oboe"],
    family: "목관·더블리드",
    desc: "두 장의 얇은 리드를 맞물려 부는 더블리드 목관의 대표. 오케스트라 전체가 이 악기의 A음에 튜닝을 맞추고, 애수 어린 솔로(백조의 호수, 가브리엘의 오보에)를 도맡는다. 소리의 존재감은 목관 최강급이지만, '리드 손질'이라는 평생 과업이 따라오는 장인형 악기.",

    sound: {
      tone: ["애수", "콧소리", "화려함", "노래하는 듯"],
      toneDesc: "갈대 콧소리가 섞인 애절하고 또렷한 음색. 오케스트라 어디서든 뚫고 나오는 존재감이 있어 '목관의 프리마돈나'로 불린다.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 4,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 1,
      roles: ["멜로디"],
    },

    body: {
      saliva: 2,
      callus: 0,
      callusDesc: "손끝 부담 없음.",
      embouchure: 3,
      breath: 1,
      weight: 1,
      weightDesc: "700g 안팎. 휴대는 가볍다.",
      posture: "정면 자세로 무난. 문제는 몸보다 입과 리드",
      postureRisk: [],
      handSize: "표준. 반음 키가 많아 새끼손가락 민첩성이 더 중요.",
    },

    cost: {
      entryKRW: [1500000, 4000000],
      entryDesc: "쓸 만한 학생용(야마하 YOB-431급)이 300~400만원대. 100만원 미만 저가는 음정 때문에 비추. 중고 시장 활용이 현실적.",
      midKRW: [5000000, 15000000],
      running: "리드가 최대 지출 — 완제품 개당 1.5~3만원, 수명 2~4주. 월 3~6만원. 상급자는 결국 직접 깎는다(도구 세트 수십만원).",
    },
    practical: {
      portability: 5,
      noise: 4,
      apartmentOk: "음색이 워낙 뚫고 나가 집 연습은 낮 짧게. 연습실 병행이 표준.",
      selfLearn: 1,
      lessonKR: 3,
      entryBarrier: 5,
      quickReward: 1,
      maintenance: 5,
    },

    vibe: {
      tags: ["클래식 정통", "우아한", "장인 정신", "서정적"],
      trendy: 1,
      rarityKR: 3,
      showOff: 4,
    },

    genres: { main: ["클래식"], sub: ["바로크·고음악", "영화·게임 OST"] },

    kinship: {
      easyFrom: ["리코더", "클라리넷"],
      sameTuning: [],
      leadsTo: ["잉글리시호른", "바로크 오보에"],
    },
    ensemble: ["아마추어 오케스트라(단 2석뿐인 희소석)", "목관 5중주", "윈드 앙상블(취주악)"],

    caveats: [
      "숨이 모자란 게 아니라 남아서 괴로운 악기 — 좁은 리드 탓에 공기를 조금만 쓰고 압력은 높게, 날숨을 '버리는' 호흡을 배워야 함",
      "리드 상태가 그날 실력의 절반. 습도·기온에 따라 어제의 좋은 리드가 오늘 죽어 있음",
      "독학은 사실상 불가(리드 선택·암부슈어를 혼자 못 잡음). 레슨비도 목관 중 비싼 편",
    ],
    funFacts: ["오케스트라 튜닝의 기준 A음을 오보에가 부는 건 음색이 또렷하고 음정이 잘 안 흔들리기 때문", "엔니오 모리코네 '가브리엘의 오보에'는 이 악기 최고의 영업 사원이다"],
  },

  {
    id: "english_horn",
    name: "잉글리시호른",
    aka: ["English horn", "코랑글레", "cor anglais"],
    family: "목관·더블리드",
    desc: "오보에보다 5도 낮은 알토 오보에. 서양배 모양 벨에서 나오는 어둡고 목가적인 소리로, 드보르자크 신세계 교향곡 2악장 '꿈속의 고향' 솔로가 이 악기다. 단독 입문 악기가 아니라 오보에 주자가 겸하는 세컨드 악기이며, 그 조건만 맞으면 오케스트라에서 가장 아름다운 솔로들이 기다린다.",

    sound: {
      tone: ["애수", "낮고 깊음", "먹먹함", "따뜻함"],
      toneDesc: "오보에의 애수를 한 톤 어둡게 가라앉힌 목가적 음색. 노을·향수·기도 같은 장면의 단골로, 오케스트라에서 이 악기가 일어나면 청중이 조용해진다.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 3,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 1,
      roles: ["멜로디"],
    },

    body: {
      saliva: 2,
      callus: 0,
      callusDesc: "손끝 부담 없음.",
      embouchure: 3,
      breath: 1,
      weight: 2,
      weightDesc: "1kg 미만이나 길어서 목걸이 스트랩 사용이 일반적.",
      posture: "스트랩으로 목에 걸어 연주 — 장시간엔 목 부담",
      postureRisk: ["목어깨"],
      handSize: "오보에보다 키 간격이 넓어 손 작으면 불리.",
    },

    cost: {
      entryKRW: [4000000, 10000000],
      entryDesc: "학생용도 400만원대부터. 신품 주력은 700만원~1천만원대라 아마추어는 중고·오케스트라 비품 대여가 현실적.",
      midKRW: [10000000, 25000000],
      running: "전용 리드 개당 2~4만원(오보에 리드보다 비쌈). 월 3~6만원.",
    },
    practical: {
      portability: 4,
      noise: 4,
      apartmentOk: "오보에와 동급. 낮 짧게, 연습실 병행.",
      selfLearn: 1,
      lessonKR: 2,
      entryBarrier: 5,
      quickReward: 1,
      maintenance: 5,
    },

    vibe: {
      tags: ["클래식 정통", "서정적", "고풍스러운", "장인 정신"],
      trendy: 1,
      rarityKR: 4,
      showOff: 3,
    },

    genres: { main: ["클래식"], sub: ["영화·게임 OST"] },

    kinship: {
      easyFrom: ["오보에"],
      sameTuning: [],
      leadsTo: [],
    },
    ensemble: ["아마추어 오케스트라(대편성 곡 한정 객원석)", "목관 앙상블"],

    caveats: [
      "사실상 오보에 경험자 전용 — 운지는 같지만 리드·호흡 감각을 다시 잡아야 함",
      "상설 자리가 아니라 곡에 따라 부르는 객원 포지션이라 '전업 취미'로 삼기엔 출연 기회가 들쭉날쭉",
      "이름과 달리 잉글랜드와도 호른과도 무관 — 명칭 어원부터 논쟁거리",
    ],
    funFacts: ["드보르자크 신세계 2악장, 로드리고 아랑후에스 협주곡 2악장 — '울리는 명솔로'는 이 악기 몫이 많다"],
  },

  {
    id: "bassoon",
    name: "바순",
    aka: ["bassoon", "파곳", "Fagott"],
    family: "목관·더블리드",
    desc: "2.5m 관을 반으로 접은 목관의 저음 기둥. 익살(마법사의 제자)과 비탄(봄의 제전 도입부)을 오가는 표정 부자다. 악기가 비싸고 배우는 사람이 적다는 게 오히려 기회 — 아마추어 오케스트라마다 바순 자리는 늘 비어 있어서, 중급만 돼도 여기저기서 모셔 가는 '희소 포지션의 왕'이다.",

    sound: {
      tone: ["낮고 깊음", "나무 울림", "콧소리", "소박함"],
      toneDesc: "마른 나무의 저음. 저역은 든든하고 구수하며, 테너 음역으로 올라가면 사람 목소리 같은 애절함이 나온다. 스타카토는 목관 최고의 코믹 연기.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 3,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 1,
      roles: ["베이스", "멜로디"],
    },

    body: {
      saliva: 2,
      callus: 0,
      callusDesc: "손끝보다 왼손 엄지가 문제 — 담당 키만 9개라 초반에 혼란과 피로.",
      embouchure: 2,
      breath: 2,
      weight: 4,
      weightDesc: "본체 3~4kg + 대형 케이스. 시트 스트랩·하네스로 지탱, 운반도 한 짐.",
      posture: "대각선으로 안는 자세. 스트랩 셋업이 잘못되면 손목·어깨에 옴",
      postureRisk: ["손목", "목어깨"],
      handSize: "손 큰 사람이 명백히 유리. 손가락 스트레치가 목관 중 최대급이라 구매 전 실물 확인 필수.",
    },

    cost: {
      entryKRW: [3000000, 8000000],
      entryDesc: "쓸 만한 학생용(슈라이버·폭스 스튜던트급)이 400만원~800만원. 중고·대여(오케스트라 비품, 월 몇만원)로 시작하는 게 정석.",
      midKRW: [10000000, 30000000],
      running: "리드 개당 1.5~3만원, 수명 2~6주. 직접 깎는 문화가 오보에만큼 강함. 연 1회 조정비도 큼.",
    },
    practical: {
      portability: 2,
      noise: 3,
      apartmentOk: "저음이라 체감 민폐는 오보에보다 덜하나 벽은 통과함. 낮 연습 또는 연습실.",
      selfLearn: 1,
      lessonKR: 2,
      entryBarrier: 5,
      quickReward: 2,
      maintenance: 5,
    },

    vibe: {
      tags: ["클래식 정통", "장인 정신", "유행과 동떨어진", "학구적"],
      trendy: 1,
      rarityKR: 4,
      showOff: 3,
    },

    genres: { main: ["클래식"], sub: ["바로크·고음악", "브라스밴드·취주악", "영화·게임 OST"] },

    kinship: {
      easyFrom: ["리코더", "오보에", "클라리넷"],
      sameTuning: [],
      leadsTo: ["둘시안", "콘트라바순"],
    },
    ensemble: ["아마추어 오케스트라(만성 인력난 — 환영받는 자리)", "목관 5중주", "윈드 앙상블(취주악)"],

    caveats: [
      "초기 비용이 목관 최상급 — 대여·중고 없이는 시작 문턱이 높음",
      "리드 의존도·관리 부담은 오보에와 동급(더블리드의 숙명)",
      "테너보표(높은음자리도 낮은음자리도 아닌 제3의 보표)를 읽게 됨 — 독보 학습량이 추가",
    ],
    funFacts: ["아마추어 오케스트라 모집 공고에서 '바순 상시 모집'은 거의 관용구다", "이탈리아어 이름 파고토(fagotto)는 '장작단'이라는 뜻"],
  },

  {
    id: "saxophone",
    name: "색소폰",
    aka: ["saxophone", "알토 색소폰", "테너 색소폰"],
    family: "목관·싱글리드(금속 몸통)",
    desc: "금속 몸통에 클라리넷식 싱글 리드를 단, 1840년대 발명품. 소리 내기가 목관 중 가장 쉽고 소리는 가장 '사람답게' 노래한다. 재즈의 상징이자, 한국에선 중장년 취미 시장의 실세 — 동네마다 색소폰 학원과 동호회가 있고 트로트·가요 반주 문화가 탄탄하다. 유일한 적은 데시벨: 그래서 디지털 색소폰이라는 우회로까지 완비돼 있다.",

    sound: {
      tone: ["노래하는 듯", "따뜻함", "화려함", "빵빵함"],
      toneDesc: "사람 목소리에 가장 가까운 관악기 소리. 서브톤으로 속삭이는 발라드부터 벨팅하듯 내지르는 솔로까지, 표현 폭이 넓고 직관적이다. 알토는 화사하고 테너는 굵고 허스키하다.",
      volume: 4,
      sustain: 4,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 4,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 5,
      roles: ["멜로디", "올라운드"],
    },

    body: {
      saliva: 3,
      callus: 0,
      callusDesc: "손끝 부담 없음.",
      embouchure: 2,
      breath: 1,
      weight: 3,
      weightDesc: "알토 2.5kg 안팎을 목걸이 스트랩으로 지탱. 테너는 더 무거워 어깨 하네스 권장.",
      posture: "목에 걸고 서서 연주 — 목·허리 스트랩 관리가 중요",
      postureRisk: ["목어깨", "허리"],
      handSize: "표준. 키 배치가 인체공학적이라 목관 중 손 부담이 적은 편.",
    },

    cost: {
      entryKRW: [400000, 1500000],
      entryDesc: "알토 기준. 40~80만원대 중국산·국산 입문기로도 시작 가능, 야마하 YAS-280급 정석이 130~160만원. 테너는 20~30% 더 비쌈.",
      midKRW: [2000000, 6000000],
      running: "리드 낱개 4~6천원(월 1~3만원) + 마우스피스 업그레이드 욕심(10~50만원)이 국룰 지출.",
    },
    practical: {
      portability: 3,
      noise: 5,
      apartmentOk: "집 연습 불가 수준의 음량. 연습실·차량 연습·야외가 기본이고, 그래서 디지털 색소폰 변형이 흥한다.",
      selfLearn: 4,
      lessonKR: 5,
      entryBarrier: 2,
      quickReward: 5,
      maintenance: 3,
    },

    vibe: {
      tags: ["무대 장악", "낭만적", "자유로운", "파티"],
      trendy: 4,
      rarityKR: 1,
      showOff: 5,
    },

    genres: { main: ["재즈", "트로트·가요"], sub: ["팝·싱어송라이터", "클래식", "브라스밴드·취주악", "힙합·R&B", "CCM·교회음악"] },

    kinship: {
      easyFrom: ["클라리넷", "리코더"],
      sameTuning: [],
      leadsTo: ["클라리넷", "플루트(재즈 겸업)", "에어로폰"],
    },
    ensemble: ["빅밴드", "재즈 콤보", "윈드 앙상블(취주악)", "색소폰 동호회·앙상블", "교회 찬양팀"],

    tracks: [
      { id: "jazz", label: "재즈", genres: ["재즈"], note: "찰리 파커·콜트레인의 계보. 즉흥연주(애드리브)가 본체라 스케일·이론 공부가 따라온다." },
      { id: "pop", label: "팝·버스킹", genres: ["팝·싱어송라이터", "힙합·R&B"], note: "MR 틀고 멜로디를 노래하는 실용 루트. 케니 지 스타일 발라드 포함, 첫 무대가 가장 빠른 트랙." },
      { id: "trot", label: "트로트·가요", genres: ["트로트·가요"], note: "한국 중장년 취미의 주류. 동호회·색소폰 카페·행사 무대 인프라가 전국구로 깔려 있다." },
      { id: "classical", label: "클래식", genres: ["클래식"], note: "비브라토를 절제한 정통 주법. 콘서트 레퍼토리와 색소폰 콰르텟 문화가 따로 있다." },
    ],

    variants: [
      { id: "yds", label: "디지털 색소폰(야마하 YDS)", mods: { noise: 1 }, note: "실제 색소폰 키 배치 그대로, 헤드폰 연습 가능. 80~90만원대." },
      { id: "aerophone", label: "에어로폰(롤랜드)", mods: { noise: 1, saliva: 1 }, note: "색소폰 운지 호환 신디 관악기. 헤드폰 연습에 침도 거의 안 생겨 아파트 연습 문제를 통째로 우회. 60~110만원대." },
    ],

    caveats: [
      "소음이 진로를 결정함 — 연습 장소 계획 없이 사면 옷장행 1순위 악기",
      "침(응축수 포함) 배출이 잦아 바닥 수건·스왑 관리가 일상",
      "'소리 내기 쉬움'과 '좋은 소리'의 간극이 큼 — 3개월 만에 무대는 서지만 톤은 10년짜리 공부",
    ],
    funFacts: ["발명가 아돌프 색스는 특허 분쟁과 암살 시도(!)에 시달리다 파산했다", "한국 색소폰 동호인 수는 수십만 명대로 추산 — 관악기 중 압도적 1위 취미 시장이다"],
  },

  // ══════════════════ 바로크·르네상스 관악 (8) ══════════════════

  {
    id: "traverso",
    name: "트라베르소",
    aka: ["traverso", "바로크 플루트", "one-keyed flute"],
    family: "고악기·에어리드(플루트족)",
    desc: "키가 하나뿐인 원뿔형 나무 플루트 — 바흐·텔레만 시대의 '그 플루트'다. 모던 플루트의 균질한 광택 대신, 조성마다 색이 달라지는 불균질함 자체가 표현 수단이 된다. 시대연주(HIP) 붐 덕에 아마추어 층도 세계적으로 성장 중이며, 플라스틱 복제품 덕분에 입문 문턱이 의외로 낮다.",

    sound: {
      tone: ["따뜻함", "나무 울림", "숨소리 섞임", "소박함"],
      toneDesc: "모던 플루트보다 작고 어둡고 사람 숨에 가까운 소리. 포크 운지(교차 운지)로 내는 반음들이 각기 다른 음색을 내는 게 단점이 아니라 바로크 수사학의 재료다.",
      volume: 2,
      sustain: 3,
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
      callusDesc: "손끝 부담 없음.",
      embouchure: 3,
      breath: 2,
      weight: 1,
      weightDesc: "400g 안팎. 4분할 조립식.",
      posture: "플루트와 같은 비대칭 자세",
      postureRisk: ["목어깨"],
      handSize: "홀 간격이 모던 플루트보다 넓음. 손 작으면 415Hz 표준 피치 악기가 오히려 관이 길어 더 불리.",
    },

    cost: {
      entryKRW: [250000, 600000],
      entryDesc: "아울로스 플라스틱 트라베르소(AF-1/AF-3)가 직구 25~45만원 — 입문 표준. 목재 공방 악기는 150만원~500만원대(유럽 직구·주문 제작).",
      midKRW: [1500000, 5000000],
      running: "목재는 오일링. 소모품 없음.",
    },
    practical: {
      portability: 5,
      noise: 2,
      apartmentOk: "음량이 작아 고악기 중에서도 아파트 친화적. 낮 연습 무난.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 4,
      quickReward: 2,
      maintenance: 2,
    },

    vibe: {
      tags: ["고풍스러운", "학구적", "장인 정신", "우아한"],
      trendy: 1,
      rarityKR: 5,
      showOff: 2,
    },

    genres: { main: ["바로크·고음악"], sub: ["클래식"] },

    kinship: {
      easyFrom: ["플루트", "아이리시 플루트", "리코더"],
      sameTuning: [],
      leadsTo: ["르네상스 플루트", "클라시컬 플루트(다키 플루트)"],
    },
    ensemble: ["바로크 앙상블", "고음악 오케스트라", "리코더·비올과의 실내악"],

    caveats: [
      "모던 플루트 경험자도 처음엔 후회함 — 키가 없어서 반음마다 포크 운지+음정 보정을 입으로 해야 함",
      "국내 레슨은 고음악 전공자 소수뿐. 서울 위주, 온라인 레슨 병행이 현실",
      "합주하려면 A=415Hz 등 피치 문제가 따라옴(모던 악기와 반음 차이)",
    ],
    funFacts: ["바흐 시대 악보의 'flauto'는 리코더, 'flauto traverso'가 이 악기다", "프리드리히 대왕이 국사 중에도 놓지 않았던 악기로 유명하다"],
  },

  {
    id: "baroque_oboe",
    name: "바로크 오보에",
    aka: ["baroque oboe", "hautboy", "오트부아"],
    family: "고악기·더블리드",
    desc: "키가 2~3개뿐인 회양목 오보에. 모던 오보에보다 넓은 리드로 불어 소리가 부드럽고 호흡은 후하다. 바흐 칸타타의 그 애절한 오블리가토들이 전부 이 악기 몫 — 고음악 앙상블에서 리코더·트라베르소와 함께 수요가 꾸준한 선율 악기다. 모던 오보에 주자의 전향 루트가 정석이지만, 유럽에선 직입문도 드물지 않다.",

    sound: {
      tone: ["애수", "따뜻함", "콧소리", "나무 울림"],
      toneDesc: "모던 오보에의 레이저 같은 초점을 풀어낸, 둥글고 목가적인 갈대 소리. 사람 목소리와 가장 잘 섞이는 바로크 악기로 꼽힌다.",
      volume: 3,
      sustain: 4,
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
      saliva: 2,
      callus: 0,
      callusDesc: "손끝 부담 없음.",
      embouchure: 3,
      breath: 1,
      weight: 1,
      weightDesc: "600g 안팎.",
      posture: "정면 자세로 무난",
      postureRisk: [],
      handSize: "키가 없어 홀을 손가락 살로 직접 막음 — 모던 오보에보다 스트레치 큼.",
    },

    cost: {
      entryKRW: [2000000, 5000000],
      entryDesc: "유럽 공방(모크, 폴 하일페린 계열 등) 신품 200~500만원대 + 주문 대기. 중고 직구·국내 고음악계 중고 순환이 현실 경로. 저가 복제품은 음정 리스크 큼.",
      midKRW: [5000000, 12000000],
      running: "바로크 오보에 전용 리드 — 완제품 직구 개당 2~4만원, 결국 직접 깎는 게 이 바닥 표준(케인·도구 별도).",
    },
    practical: {
      portability: 5,
      noise: 3,
      apartmentOk: "모던 오보에보다 부드러워 체감 민폐 덜함. 낮 연습 가능권.",
      selfLearn: 1,
      lessonKR: 1,
      entryBarrier: 5,
      quickReward: 1,
      maintenance: 5,
    },

    vibe: {
      tags: ["고풍스러운", "학구적", "장인 정신", "서정적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 2,
    },

    genres: { main: ["바로크·고음악"], sub: ["클래식"] },

    kinship: {
      easyFrom: ["오보에", "리코더"],
      sameTuning: [],
      leadsTo: ["숌", "오보에 다모레", "오보에 다카치아"],
    },
    ensemble: ["바로크 앙상블", "고음악 오케스트라", "바흐 칸타타 프로젝트"],

    caveats: [
      "국내 레슨·리드 공급망이 사실상 개인 인맥 수준 — 고음악 커뮤니티 접속이 선행 조건",
      "리드를 스스로 깎지 않으면 유지가 안 되는 악기(모던 오보에보다도 자작 의존이 큼)",
      "A=415Hz 세계라 모던 악기와의 합주는 기본적으로 불가",
    ],
    funFacts: ["바흐가 오블리가토 악기로 가장 사랑한 관악기 — 칸타타에 수백 곡 분량의 솔로를 남겼다"],
  },

  {
    id: "dulcian",
    name: "둘시안",
    aka: ["dulcian", "curtal", "커톨", "바로크 바순의 전신"],
    family: "고악기·더블리드",
    desc: "통나무 하나에 관을 두 번 접어 판, 바순의 직계 조상(르네상스~초기 바로크). 바순보다 구조가 단순하고 소리는 더 거칠고 구수하다. 몬테베르디 시대 종교음악과 스페인 성당 음악의 베이스 기둥으로, 고음악 앙상블에서 '저음 관악'이라는 희소 포지션을 차지한다.",

    sound: {
      tone: ["낮고 깊음", "나무 울림", "거칢", "소박함"],
      toneDesc: "바순보다 원시적이고 buzz가 살아 있는 저음. 감베·색벗과 섞이면 르네상스 특유의 오르간 같은 혼성 저역이 만들어진다.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 3,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["베이스", "멜로디"],
    },

    body: {
      saliva: 2,
      callus: 0,
      callusDesc: "손끝 부담 없음.",
      embouchure: 2,
      breath: 2,
      weight: 3,
      weightDesc: "2kg 안팎 — 바순보다 훨씬 콤팩트하고 한 몸통이라 운반 쉬움.",
      posture: "스트랩으로 걸고 대각선으로 안는 자세",
      postureRisk: ["목어깨"],
      handSize: "홀 직접 막기 + 넓은 스트레치라 손 큰 사람 유리.",
    },

    cost: {
      entryKRW: [2500000, 7000000],
      entryDesc: "양산품이 없는 공방 악기 — 유럽 공방(볼프, 무어 등) 신품 250~700만원 + 대기 수개월~수년. 고음악계 중고 순환·워크숍 대여가 현실 입구.",
      midKRW: [7000000, 15000000],
      running: "바순 리드와 유사한 전용 더블리드 — 직구 개당 2~4만원 또는 자작. 목재 오일링.",
    },
    practical: {
      portability: 3,
      noise: 3,
      apartmentOk: "저음 위주라 체감 민폐는 중간. 낮 연습 가능권.",
      selfLearn: 1,
      lessonKR: 1,
      entryBarrier: 5,
      quickReward: 2,
      maintenance: 5,
    },

    vibe: {
      tags: ["고풍스러운", "학구적", "장인 정신", "컬트적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 2,
    },

    genres: { main: ["바로크·고음악"], sub: ["클래식"] },

    kinship: {
      easyFrom: ["바순", "리코더"],
      sameTuning: [],
      leadsTo: ["바로크 바순", "라켓(르네상스 저음 관악)"],
    },
    ensemble: ["르네상스 콘소트", "고음악 앙상블(색벗·감베와)", "성당 음악 프로젝트"],

    caveats: [
      "악기 입수 자체가 프로젝트 — 국내 유통 없음, 유럽 공방 주문·대기 각오",
      "레슨은 바순 전공+고음악 유학파 소수뿐. 유럽 고음악 여름 워크숍이 실질 학교",
      "바순 주자에겐 운지가 '비슷한데 미묘하게 달라서' 오히려 헷갈리는 구간이 있음",
    ],
    funFacts: ["이름은 '달콤하다(dulcis)'에서 — 당시 다른 저음 관악(숌 계열)보다 부드럽다고 붙은 이름이다"],
  },

  {
    id: "chalumeau",
    name: "챨루모",
    aka: ["chalumeau", "샬뤼모"],
    family: "고악기·싱글리드",
    desc: "리코더 몸통에 싱글 리드를 단 클라리넷의 직계 조상(17세기 말). 음역은 한 옥타브 남짓뿐이지만 그 안의 소리는 클라리넷 저음역(그래서 그 음역 이름이 '샬뤼모 음역'이다)의 어둡고 벨벳 같은 음색 그 자체. 비발디·텔레만이 협주곡을 남겼고, 리코더 운지와 거의 같아 리코더 인구의 숨은 확장 카드다.",

    sound: {
      tone: ["낮고 깊음", "부드러움", "따뜻함", "먹먹함"],
      toneDesc: "클라리넷 저음역의 어두운 벨벳 톤만 뽑아낸 소리. 촛불 같은 음량으로, 실내악에서 사람 목소리·리코더와 아름답게 섞인다.",
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
      saliva: 2,
      callus: 0,
      callusDesc: "손끝 부담 없음.",
      embouchure: 2,
      breath: 1,
      weight: 1,
      weightDesc: "리코더급. 300g 미만.",
      posture: "부담 없는 정면 자세",
      postureRisk: [],
      handSize: "리코더와 동급 — 손 작아도 무방.",
    },

    cost: {
      entryKRW: [350000, 900000],
      entryDesc: "독일 쿠나트(Kunath) 등 공방 양산품이 직구 35~70만원대(테너·소프라노 등 사이즈별). 국내 유통 없음.",
      midKRW: [1000000, 2500000],
      running: "클라리넷 리드 유용 가능(낱개 수천원). 목재 오일링.",
    },
    practical: {
      portability: 5,
      noise: 2,
      apartmentOk: "음량이 작아 아파트 저녁 연습까지 가능한 드문 리드 악기.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 3,
    },

    vibe: {
      tags: ["고풍스러운", "소박한", "컬트적", "학구적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 1,
    },

    genres: { main: ["바로크·고음악"], sub: ["포크", "클래식"] },

    kinship: {
      easyFrom: ["리코더", "클라리넷", "틴휘슬"],
      sameTuning: [],
      leadsTo: ["클라리넷", "바로크 클라리넷"],
    },
    ensemble: ["바로크 앙상블", "리코더 콘소트(저음 보강)", "포크 앙상블"],

    caveats: [
      "음역이 옥타브+2도 남짓 — 레퍼토리를 고르는 악기이지 만능 악기가 아님",
      "국내 인지도 0에 수렴. 악기도 정보도 전부 독일어·영어권 직구",
      "리코더 운지와 '거의' 같다는 게 함정 — 미묘한 차이에서 삑사리",
    ],
    funFacts: ["클라리넷 저음역을 지금도 '샬뤼모 음역'이라 부른다 — 악기는 잊혀도 이름은 살아남았다", "비발디의 챨루모 협주곡들은 베네치아 여자 고아원 오케스트라를 위해 쓰였다"],
  },

  {
    id: "shawm",
    name: "숌",
    aka: ["shawm", "쇼움", "르네상스 숌"],
    family: "고악기·더블리드",
    desc: "오보에의 야생 조상. 피루엣(입술 받침대)에 입을 대고 큰 더블리드를 통째로 울리는, 중세·르네상스의 야외 행사용 확성기다. 소리는 문자 그대로 나팔급 — 실내 취미가 아니라 축제·행렬·야외 앙상블('라우드 밴드')의 악기이며, 중동 주르나·한국 태평소와 같은 계열의 세계 공통 '야외 리드 나팔' 문화권에 속한다.",

    sound: {
      tone: ["빵빵함", "거칢", "콧소리", "화려함"],
      toneDesc: "찢어질 듯 쨍한 갈대 나팔 소리. 야외 100m 밖까지 닿으라고 설계된 음색이라 실내에선 폭력적, 광장에선 축제 그 자체.",
      volume: 5,
      sustain: 4,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 3,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["멜로디"],
    },

    body: {
      saliva: 3,
      callus: 0,
      callusDesc: "손끝 부담 없음.",
      embouchure: 2,
      breath: 3,
      weight: 2,
      weightDesc: "소프라노~알토는 1kg 안팎. 테너 이하는 길고 무거워짐.",
      posture: "정면 자세. 문제는 몸보다 폐 — 큰 압력을 계속 유지해야 함",
      postureRisk: [],
      handSize: "홀 직접 막기. 알토 이하는 스트레치 큼.",
    },

    cost: {
      entryKRW: [300000, 1200000],
      entryDesc: "수사토(Susato) 플라스틱 숌이 직구 30~50만원대로 입문 표준. 목재 공방품은 100만원 이상.",
      midKRW: [1500000, 4000000],
      running: "전용 더블리드(피루엣용 대형) — 직구 개당 2~3만원 또는 자작.",
    },
    practical: {
      portability: 4,
      noise: 5,
      apartmentOk: "실내 연습 불가. 야외·방음 연습실 전제의 악기다.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 4,
      quickReward: 3,
      maintenance: 4,
    },

    vibe: {
      tags: ["고풍스러운", "파티", "위압적", "이국적", "컬트적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["바로크·고음악"], sub: ["발칸·클레즈머·집시", "포크"] },

    kinship: {
      easyFrom: ["오보에", "바로크 오보에", "태평소"],
      sameTuning: [],
      leadsTo: ["바로크 오보에", "태평소", "주르나"],
    },
    ensemble: ["르네상스 라우드 밴드(숌+색벗)", "중세·르네상스 축제 앙상블", "역사 재현 행사"],

    caveats: [
      "실내 취미로는 성립 불가 — 연습 장소가 곧 진입 장벽",
      "국내 연주 인구가 사실상 역사재현·고음악 소수 그룹뿐",
      "피루엣 주법(입술을 리드에 완전히 안 대는 방식)은 오보에 경험자도 새로 배워야 함",
    ],
    funFacts: ["중세 유럽 도시들은 숌 악사를 '시청 소속 공무원 밴드'로 고용했다(독일 슈타트파이퍼)", "태평소·주르나·숌은 실크로드로 이어진 같은 조상의 후손들이다"],
  },

  {
    id: "crumhorn",
    name: "크룸호른",
    aka: ["crumhorn", "Krummhorn"],
    family: "고악기·더블리드(윈드캡)",
    desc: "끝이 우산 손잡이처럼 구부러진 르네상스 관악. 리드가 나무 캡 속에 들어 있어 입술이 리드에 닿지 않는다(윈드캡) — 그래서 더블리드인데도 암부슈어 부담이 거의 없고, 대신 누구나 같은 '붕붕대는 콧소리'가 난다. 음역 9도의 한계 안에서 SATB 콘소트로 모여 노는, 유머와 학구가 공존하는 컬트 악기.",

    sound: {
      tone: ["콧소리", "거칢", "소박함", "그루브"],
      toneDesc: "카주와 백파이프 사이 어딘가의 붕붕대는 buzz 톤. 혼자 들으면 웃기고, 4대가 화음을 쌓으면 뜻밖에 근사한 르네상스 오르간이 된다.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 2,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 1,
      roles: ["멜로디", "화음반주"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "손끝 부담 없음.",
      embouchure: 0,
      breath: 2,
      weight: 1,
      weightDesc: "1kg 미만. 모양 때문에 케이스가 특이하게 생겼을 뿐.",
      posture: "부담 없는 정면 자세",
      postureRisk: [],
      handSize: "홀 직접 막기. 소프라노·알토는 손 작아도 무방.",
    },

    cost: {
      entryKRW: [400000, 1500000],
      entryDesc: "수사토 플라스틱이 직구 40~60만원대, 모크(Moeck) 등 목재는 100만원 이상. 전량 직구·공방 주문.",
      midKRW: [1500000, 3500000],
      running: "캡 속 리드 교체(직구 개당 2~4만원) — 입에 안 닿아 수명은 긴 편.",
    },
    practical: {
      portability: 4,
      noise: 3,
      apartmentOk: "백파이프급은 아니지만 buzz가 계속 울리는 소리라 낮 연습 권장.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 3,
    },

    vibe: {
      tags: ["고풍스러운", "컬트적", "귀여운", "학구적", "유행과 동떨어진"],
      trendy: 1,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["바로크·고음악"], sub: ["포크"] },

    kinship: {
      easyFrom: ["리코더"],
      sameTuning: [],
      leadsTo: ["코르나뮤즈", "라우셴파이프", "백파이프"],
    },
    ensemble: ["크룸호른 콘소트(SATB)", "르네상스 콘소트", "역사 재현 앙상블"],

    caveats: [
      "음역이 9도뿐 — 옥타브 넘김(오버블로잉)이 안 되는 구조라 독주 악기로는 금방 한계",
      "숨 압력을 일정하게 유지 못 하면 음정이 출렁임(윈드캡의 대가)",
      "혼자서는 반쪽 — 콘소트 멤버를 구해야 완성되는 악기인데 한국에서 그 멤버 구하기가 최난관",
    ],
    funFacts: ["헨리 8세의 악기 컬렉션 목록에 크룸호른이 수십 대 있었다", "이름은 독일어로 그냥 '굽은 뿔(Krumm+Horn)'이라는 뜻"],
  },

  {
    id: "cornetto",
    name: "코르네토",
    aka: ["cornetto", "징크", "Zink", "cornett"],
    family: "고악기·하이브리드(목관 몸통+금관 주법)",
    desc: "가죽을 감은 팔각 나무 몸통에 손가락 구멍이 뚫려 있는데, 소리는 초소형 금관 마우스피스에 입술을 대고 버징으로 낸다 — 목관과 금관의 하이브리드. 르네상스~초기 바로크에서 '사람 목소리에 가장 가까운 악기'로 최고 대우를 받았고(몬테베르디 베스프로의 주역), 지금도 시대연주계에서 가장 어렵고 가장 귀한 악기로 꼽힌다.",

    sound: {
      tone: ["노래하는 듯", "맑음", "화려함", "숨소리 섞임"],
      toneDesc: "트럼펫의 광채를 사람 목소리의 부드러움으로 감싼 소리. 소프라노 성악과 나란히 놓으면 어느 쪽이 사람인지 헷갈린다는 말이 르네상스 시대부터 있었다.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F2",
      pitchDesc: "구멍(운지)이 있지만 실제 음은 금관식 입술 버징으로 만들어, 같은 운지에서도 입술로 음이 크게 움직인다. 사실상 F2~F3급 — 음 하나하나를 귀로 조준해야 하며, 요구 음감은 이 DB 관악기 중 최상급.",
      fastPlay: 4,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["멜로디"],
    },

    body: {
      saliva: 2,
      callus: 0,
      callusDesc: "손끝 부담 없음.",
      embouchure: 3,
      breath: 2,
      weight: 1,
      weightDesc: "600g 안팎. 60cm 곡선 관 하나.",
      posture: "정면 자세. 부담은 몸이 아니라 입술 지구력",
      postureRisk: [],
      handSize: "홀 간격이 넓어 손 작으면 불리(그래서 소형 코르네티노로 입문하기도).",
    },

    cost: {
      entryKRW: [400000, 1700000],
      entryDesc: "레진 입문 복제품 직구 40~70만원대, 표준으로 통하는 크리스토퍼 몽크 공방 레더/레진 모델이 100~170만원대(영국 직구). 목제 수제는 수백만원.",
      midKRW: [2000000, 6000000],
      running: "소모품 거의 없음. 마우스피스 취향 지출 정도.",
    },
    practical: {
      portability: 5,
      noise: 4,
      apartmentOk: "트럼펫보다는 작지만 금관성 소리라 낮 연습·연습실 권장.",
      selfLearn: 1,
      lessonKR: 1,
      entryBarrier: 5,
      quickReward: 1,
      maintenance: 2,
    },

    vibe: {
      tags: ["고풍스러운", "학구적", "장인 정신", "우아한", "컬트적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["바로크·고음악"], sub: ["클래식"] },

    kinship: {
      easyFrom: ["트럼펫", "리코더"],
      sameTuning: [],
      leadsTo: ["세르팡", "바로크 트럼펫"],
    },
    ensemble: ["고음악 앙상블(색벗과 짝)", "몬테베르디급 대편성 프로젝트", "르네상스 성당 음악"],

    caveats: [
      "관악기 최상급 난이도 — 금관 암부슈어와 목관 운지를 동시에, 게다가 음정은 전적으로 귀 책임",
      "트럼펫 '또는' 리코더 경험만으론 부족하고 사실상 둘 다에 준하는 감각이 필요",
      "국내 연주자는 한 손에 꼽는 수준 — 배움은 유럽 워크숍·온라인이 전부",
      "매일 안 불면 입술이 바로 리셋되는 금관형 유지비(시간)가 듦",
    ],
    funFacts: ["17세기 문헌은 명 코르네토 주자의 소리를 '한 줄기 햇살 같은 소리'라 기록했다", "바흐도 칸타타에서 합창 소프라노 보강용으로 코르네토를 썼다"],
  },

  {
    id: "musette_de_cour",
    name: "뮈제트 드 쿠르",
    aka: ["musette de cour", "프랑스 궁정 백파이프"],
    family: "고악기·백파이프(풀무식)",
    desc: "베르사유 귀족들이 '세련된 전원 취미'로 연주하던 실내용 미니 백파이프. 입으로 불지 않고 팔꿈치 풀무로 바람을 넣기 때문에 침도, 폐활량도, 암부슈어도 전혀 필요 없다 — 관악기의 신체 게이트를 전부 우회하는 유일한 존재. 비단과 상아로 치장한 외관과 여린 드론 소리까지, 고악기 중에서도 가장 귀족적이고 가장 희귀한 선택지다.",

    sound: {
      tone: ["콧소리", "몽환", "우아한", "소박함"],
      toneDesc: "일반 백파이프의 축소판 같은 여리고 달콤한 갈대 소리 + 낮게 깔리는 드론. 실내에서 쳄발로·비올과 섞이도록 설계된, '실내악 볼륨의 백파이프'다.",
      volume: 2,
      sustain: 5,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 2,
      roles: ["멜로디", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "손끝 부담 없음.",
      embouchure: 0,
      breath: 0,
      weight: 2,
      weightDesc: "백 포함 2kg 안팎을 무릎·팔에 얹고 연주.",
      posture: "앉아서 풀무질(오른팔)+운지(양손)를 동시에 — 상체 협응이 관건",
      postureRisk: ["손목"],
      handSize: "실린더형 소형 샨터라 손 작아도 무방. 2열 키 운지는 별도 학습.",
    },

    cost: {
      entryKRW: [4000000, 12000000],
      entryDesc: "양산품 없음 — 유럽 소수 공방의 주문 제작 악기로 수백만원+대기 수년이 기본. 고악기 경매·중고 순환이 사실상 유일한 지름길.",
      midKRW: [12000000, 30000000],
      running: "더블리드 여러 개(샨터+드론)가 들어가는 구조라 리드 관리가 유지의 핵심. 백·풀무 가죽 정비도 주기적으로 필요.",
    },
    practical: {
      portability: 3,
      noise: 2,
      apartmentOk: "실내악용 음량이라 아파트 연습 가능 — 백파이프 중 유일하다시피 한 장점.",
      selfLearn: 1,
      lessonKR: 1,
      entryBarrier: 5,
      quickReward: 2,
      maintenance: 5,
    },

    vibe: {
      tags: ["고풍스러운", "우아한", "귀족적", "컬트적", "이국적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["바로크·고음악"], sub: ["포크"] },

    kinship: {
      easyFrom: ["백파이프(스몰파이프)", "리코더"],
      sameTuning: [],
      leadsTo: ["일리언 파이프", "스코틀랜드 스몰파이프"],
    },
    ensemble: ["프랑스 바로크 앙상블", "고음악 실내악", "역사 재현 살롱 콘서트"],

    caveats: [
      "악기 구하기가 배우기보다 어려움 — 국내 보유자가 있는지조차 불확실한 수준의 희귀 악기",
      "풀무 압력 유지가 생각보다 어려워 '숨 대신 팔이 고생'하는 구조",
      "레퍼토리가 프랑스 바로크(오트테르, 셰드빌)로 좁고 깊음 — 이 세계가 좋아야 버틴다",
      "가격·대기·수리 전부 유럽 공방 의존이라 유지 리스크가 큼",
    ],
    funFacts: ["비발디 '사계' 봄의 원조 편곡 중 하나가 뮈제트용이었을 만큼 18세기 프랑스에서 유행했다", "루이 15세 궁정에서는 귀부인의 '전원 코스프레' 필수 소품이었다 — 비단 드레스에 어울리게 백도 비단으로 쌌다"],
  },

];

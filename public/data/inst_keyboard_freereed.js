// 악기 추천 설문 DB — [건반 + 프리리드] 배치 (21종)
// 스키마: SCHEMA.md v1 준수. 장르는 data/genres.js canonical 26개만 사용.

const INST_KEYBOARD_FREEREED = [

  // ═══════════════ 1. 피아노 ═══════════════
  {
    id: "piano",
    name: "피아노",
    aka: ["piano", "어쿠스틱 피아노"],
    family: "건반·타현악기",
    desc: "해머가 현을 때리는 88건반 건반악기. 멜로디·화음·베이스를 혼자 다 해내는 '악기의 왕'. 모든 건반악기의 출발점.",

    sound: {
      tone: ["맑음", "영롱함", "따뜻함", "웅장함", "노래하는 듯"],
      toneDesc: "여리게 치면 물방울처럼 영롱하고, 세게 치면 오케스트라처럼 웅장해요. 한 악기 안에 속삭임부터 포효까지 다 들어있는 넓은 표현 폭이 최대 무기.",
      volume: 4,
      sustain: 4,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 5,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["올라운드", "멜로디", "화음반주", "베이스"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "굳은살 없음. 다만 장시간 연습 시 손가락·손목 피로는 있어요.",
      embouchure: 0,
      breath: 0,
      weight: 5,
      weightDesc: "어쿠스틱은 200kg+로 이동 자체가 없는 '가구'. 대신 집에 두면 운반 부담도 없어요.",
      posture: "앉은 자세. 장시간 연습 시 목·어깨·허리가 굳기 쉬워 자세 교정이 중요.",
      postureRisk: ["목어깨", "허리"],
      handSize: "옥타브(약 18.5cm)가 기준. 손이 작으면 일부 곡에서 고생하지만 입문·중급까지는 지장 없음.",
    },

    cost: {
      entryKRW: [400000, 3000000],
      entryDesc: "현실적 입문은 디지털피아노(40만~150만, 88건반 해머터치 기준). 어쿠스틱은 중고 업라이트 100만~300만, 신품은 500만부터.",
      midKRW: [5000000, 20000000],
      running: "어쿠스틱은 조율 연 1~2회(회당 15~20만). 디지털은 유지비 사실상 0.",
    },
    practical: {
      portability: 1,
      noise: 4,
      apartmentOk: "어쿠스틱은 낮에도 민원 소지. 현실은 디지털피아노+헤드폰이 표준 해법이라 사실상 문제 없음.",
      selfLearn: 4,
      lessonKR: 5,
      entryBarrier: 2,
      quickReward: 3,
      maintenance: 2,
    },

    vibe: {
      tags: ["클래식 정통", "우아한", "낭만적", "학구적"],
      trendy: 3,
      rarityKR: 1,
      showOff: 4,
    },

    genres: { main: ["클래식", "재즈", "팝·싱어송라이터"], sub: ["뉴에이지", "CCM·교회음악", "영화·게임 OST", "트로트·가요"] },

    kinship: {
      easyFrom: ["신디사이저", "멜로디카"],
      sameTuning: ["신디사이저", "파이프오르간", "하프시코드", "첼레스타"],
      leadsTo: ["신디사이저", "파이프오르간", "하몬드오르간", "하프시코드", "피아노 아코디언"],
    },
    ensemble: ["재즈 트리오", "밴드 건반", "교회 반주", "실내악·성악 반주"],

    tracks: [
      { id: "classical", label: "클래식", genres: ["클래식"], note: "체르니-소나타로 이어지는 정통 코스. 악보 독해력이 재산이 돼요." },
      { id: "jazz", label: "재즈 피아노", genres: ["재즈"], note: "코드 보이싱과 즉흥. 클래식과 완전히 다른 두뇌를 써요." },
      { id: "pop_accomp", label: "팝·반주", genres: ["팝·싱어송라이터", "트로트·가요"], note: "코드 반주 위주라 진입이 가장 빠름. 노래하며 치는 목표에 최단 경로." },
      { id: "newage", label: "뉴에이지", genres: ["뉴에이지", "영화·게임 OST"], note: "이루마·히사이시 스타일. 독학 수요가 가장 많은 트랙." },
      { id: "ccm", label: "CCM·교회 반주", genres: ["CCM·교회음악"], note: "코드 이해+즉흥 반주. 교회라는 확실한 무대가 생겨요." },
    ],

    variants: [
      { id: "digital", label: "디지털피아노", mods: { noise: 1, portability: 3 }, note: "헤드폰 연습으로 소음 완전 해결. 아파트 입문자의 표준." },
    ],

    caveats: [
      "세상에서 경험자가 제일 많은 악기 — '잘 치는 사람'의 기준선이 매우 높아요.",
      "어쿠스틱을 아파트에 들이는 건 별개의 프로젝트(방음·민원). 현실은 디지털부터.",
      "혼자 완결되는 악기라 오히려 합주 기회를 스스로 찾지 않으면 평생 독주만 하게 돼요.",
    ],
    funFacts: ["정식 명칭 피아노포르테는 '여리게(piano)도 세게(forte)도 칠 수 있다'는 뜻 — 등장 당시엔 혁명이었어요."],
  },

  // ═══════════════ 2. 파이프오르간 ═══════════════
  {
    id: "pipe_organ",
    name: "파이프오르간",
    aka: ["pipe organ", "오르겔"],
    family: "건반·기명악기(파이프)",
    desc: "수백~수천 개의 파이프에 바람을 불어넣는 건반악기. 손건반 여러 단+발건반을 동시에 연주하는 '악기의 제왕'. 악기가 곧 건축물.",

    sound: {
      tone: ["웅장함", "빵빵함", "신비", "낮고 깊음", "영롱함"],
      toneDesc: "성당을 통째로 울리는 압도적인 음량과, 스톱 조합에 따라 플루트·트럼펫·현악기까지 흉내 내는 천 개의 얼굴. 저음 파이프는 몸으로 진동이 느껴져요.",
      volume: 5,
      sustain: 5,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["올라운드", "화음반주", "베이스"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "굳은살 없음. 건반 터치는 피아노보다 가벼워요.",
      embouchure: 0,
      breath: 0,
      weight: 5,
      weightDesc: "소유·운반 개념이 없는 악기. 내가 악기가 있는 곳(교회·홀)으로 가요.",
      posture: "앉아서 양손+양발을 독립적으로 사용. 발건반 때문에 벤치 위에서 몸의 균형 감각이 필요.",
      postureRisk: ["허리"],
      handSize: "피아노와 동일 건반. 손보다 '발'이 새 과제.",
    },

    cost: {
      entryKRW: [5000000, 30000000],
      entryDesc: "진짜 파이프오르간은 개인 소유 대상이 아님(수억~수십억). 집 연습용 3단+발건반 디지털 클래식 오르간(수입) 기준 500만~3000만. 실제 입문 비용은 교회·대학 연습실 사용료가 전부인 경우도 많아요.",
      midKRW: [30000000, 100000000],
      running: "본체 관리는 소속 기관 몫. 개인은 연습실 대여비·악보비 정도.",
    },
    practical: {
      portability: 1,
      noise: 5,
      apartmentOk: "집에 들일 수 없는 악기. 디지털 오르간+헤드폰이 유일한 재택 연습법.",
      selfLearn: 2,
      lessonKR: 2,
      entryBarrier: 4,
      quickReward: 2,
      maintenance: 1,
    },

    vibe: {
      tags: ["클래식 정통", "고풍스러운", "위압적", "장인 정신", "학구적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 5,
    },

    genres: { main: ["클래식", "바로크·고음악", "CCM·교회음악"], sub: ["영화·게임 OST"] },

    kinship: {
      easyFrom: ["피아노", "하몬드오르간", "일렉톤(전자오르간)"],
      sameTuning: ["피아노", "하프시코드"],
      leadsTo: ["하프시코드", "하몬드오르간"],
    },
    ensemble: ["교회·성당 예배", "오르간 독주회", "합창·브라스 협연"],

    caveats: [
      "최대 장벽은 실력이 아니라 접근성 — 연습할 악기가 있는 교회·학교와의 연결이 먼저예요.",
      "발건반은 완전히 새로운 신체 훈련. 피아노를 잘 쳐도 처음엔 발이 따로 놀아요.",
      "레슨은 교회음악과·오르가니스트 개인 레슨 등 소수 경로뿐(서울 중심).",
    ],
    funFacts: ["음을 누르는 동안 무한히 지속되는 몇 안 되는 악기 — 바흐 시대엔 사람이 밟는 풀무로 바람을 넣었어요."],
  },

  // ═══════════════ 3. 하몬드오르간 ═══════════════
  {
    id: "hammond_organ",
    name: "하몬드오르간",
    aka: ["Hammond organ", "하몬드 B3", "톤휠 오르간"],
    family: "건반·전기기계식 오르간",
    desc: "회전하는 톤휠로 소리를 만드는 전기 오르간. 드로우바로 배음을 실시간 조합하고, 회전 스피커(레슬리)가 특유의 소용돌이 사운드를 만들어요. 재즈·소울·가스펠의 심장.",

    sound: {
      tone: ["그루브", "따뜻함", "빵빵함", "몽환", "콧소리"],
      toneDesc: "레슬리 스피커가 빙글빙글 돌며 만드는 출렁이는 소용돌이 사운드. 드로우바를 밀고 당길 때마다 음색이 즉석에서 변하고, 퍼커시브한 클릭감이 그루브를 만들어요.",
      volume: 4,
      sustain: 5,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 5,
      roles: ["올라운드", "화음반주", "베이스"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "굳은살 없음. 건반이 가벼워 글리산도·속주가 손에 부담 없어요.",
      embouchure: 0,
      breath: 0,
      weight: 4,
      weightDesc: "빈티지 B3+레슬리는 150kg+ '이사 지옥'. 현실 연주자는 10kg대 클론휠 키보드를 들어요.",
      posture: "앉거나 서서. 왼손 베이스+오른손 코드·솔로를 동시에 굴리는 멀티태스킹.",
      postureRisk: ["목어깨"],
      handSize: "피아노와 동일. 손바닥으로 뭉개는 주법도 많아 손 크기 부담은 오히려 적어요.",
    },

    cost: {
      entryKRW: [800000, 2500000],
      entryDesc: "현실 입문은 클론휠(하몬드 SK, 노드 일렉트로 등) 중고 80만~신품 250만. 빈티지 B3는 본체+레슬리 1000만~2000만+운송·수리비.",
      midKRW: [3000000, 15000000],
      running: "클론휠은 유지비 0. 빈티지는 오일 주입·진공관·수리로 돈과 애정이 계속 들어요.",
    },
    practical: {
      portability: 2,
      noise: 4,
      apartmentOk: "클론휠은 헤드폰 연습으로 완전 해결. 빈티지는 소리도 무게도 아파트와 상극.",
      selfLearn: 3,
      lessonKR: 2,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 2,
    },

    vibe: {
      tags: ["루츠·어쿠스틱", "힙한", "자유로운", "고풍스러운"],
      trendy: 3,
      rarityKR: 4,
      showOff: 4,
    },

    genres: { main: ["재즈", "블루스", "록·메탈"], sub: ["CCM·교회음악", "힙합·R&B"] },

    kinship: {
      easyFrom: ["피아노", "신디사이저"],
      sameTuning: ["피아노", "파이프오르간"],
      leadsTo: ["파이프오르간", "신디사이저"],
    },
    ensemble: ["오르간 트리오(기타·드럼)", "블루스·소울 밴드", "가스펠 성가대 반주"],

    variants: [
      { id: "clonewheel", label: "클론휠", mods: { weight: 2, noise: 1, portability: 3 }, note: "하몬드 사운드를 디지털로 재현한 스테이지 키보드. 헤드폰 연습 가능, 현대 연주자의 표준 장비." },
    ],

    caveats: [
      "피아노와 주법 철학이 다름 — 서스테인 페달이 없어 손가락으로 음을 잇는 레가토를 새로 배워요.",
      "국내 전문 레슨은 드묾. 재즈 피아노 레슨+유튜브(영어권 자료 풍부)로 우회하는 게 현실.",
      "빈티지 낭만에 빠지면 지갑과 허리가 동시에 무너져요 — 입문은 반드시 클론휠로.",
    ],
    funFacts: ["원래는 교회가 파이프오르간을 살 돈이 없어 만든 '저가 대체품'이었는데, 그 소리가 재즈와 록의 아이콘이 됐어요."],
  },

  // ═══════════════ 4. 하프시코드 ═══════════════
  {
    id: "harpsichord",
    name: "하프시코드",
    aka: ["harpsichord", "쳄발로", "클라브생"],
    family: "건반·발현악기",
    desc: "건반을 누르면 깃촉(플렉트럼)이 현을 뜯는 바로크 시대의 건반악기. 피아노 이전 200년간 유럽 음악의 중심. 바흐·스카를라티·라모의 본진.",

    sound: {
      tone: ["카랑카랑", "반짝임", "금속성", "고풍스러운", "화려함"],
      toneDesc: "현을 뜯는 구조라 찰랑거리는 금속성 광택이 있어요. 셈여림이 없는 대신 음이 보석처럼 또렷하게 구르며, 두 단 건반과 스톱으로 음색을 바꿔요.",
      volume: 3,
      sustain: 2,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 5,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["올라운드", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "굳은살 없음. 건반이 매우 가벼워 손 부담이 피아노보다 훨씬 적어요.",
      embouchure: 0,
      breath: 0,
      weight: 5,
      weightDesc: "가구급(60~100kg). 이동은 전문 운송 영역.",
      posture: "앉은 자세. 피아노보다 낮은 타건 높이, 손목 부담 적음.",
      postureRisk: ["목어깨"],
      handSize: "건반 폭이 피아노보다 약간 좁은 악기가 많아 손 작은 사람에게 유리.",
    },

    cost: {
      entryKRW: [5000000, 15000000],
      entryDesc: "국내 유통이 거의 없어 중고 스피넷(소형)·조립 키트 직구 기준 500만~. 공방 신품 풀사이즈는 2000만~. 현실 입문은 디지털 건반의 하프시코드 음색이나 대학·고음악 단체 악기 사용.",
      midKRW: [20000000, 60000000],
      running: "조율을 연주자가 직접, 자주(계절마다 크게 틀어짐) 해야 함. 깃촉(플렉트럼) 교체도 셀프.",
    },
    practical: {
      portability: 1,
      noise: 3,
      apartmentOk: "음량이 피아노보다 작아 낮 연습은 가능한 수준. 문제는 소음이 아니라 악기를 구하는 것.",
      selfLearn: 2,
      lessonKR: 2,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 4,
    },

    vibe: {
      tags: ["고풍스러운", "클래식 정통", "우아한", "학구적", "장인 정신"],
      trendy: 1,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["바로크·고음악"], sub: ["클래식", "영화·게임 OST"] },

    kinship: {
      easyFrom: ["피아노", "파이프오르간"],
      sameTuning: ["피아노", "클라비코드"],
      leadsTo: ["클라비코드", "파이프오르간"],
    },
    ensemble: ["바로크 앙상블(통주저음)", "고음악 합주단", "바로크 오페라 반주"],

    variants: [
      { id: "digital_hpsd", label: "디지털 하프시코드", mods: { noise: 1, weight: 3 }, note: "롤랜드 클래식 시리즈 등. 신품 단종이 많아 중고 위주지만 조율·관리 걱정이 사라져요." },
    ],

    caveats: [
      "셈여림(강약)이 안 됨 — 표현은 전적으로 아티큘레이션과 타이밍. 피아노와는 다른 미학을 처음부터 배워요.",
      "조율이 취미의 일부. 연주 전 15분 조율이 일상이 돼요.",
      "국내 레슨은 고음악 전공자 소수(서울 중심). 대신 피아노 실력이 있으면 전환 자체는 빨라요.",
    ],
    funFacts: ["바흐의 골드베르크 변주곡은 원래 이 악기를 위한 곡 — 2단 건반이 있어야 손이 안 꼬이는 대목이 있어요."],
  },

  // ═══════════════ 5. 클라비코드 ═══════════════
  {
    id: "clavichord",
    name: "클라비코드",
    aka: ["clavichord"],
    family: "건반·타현악기",
    desc: "금속 탄젠트가 현을 아래에서 밀어 올리는, 세상에서 가장 조용한 건반악기. 바흐가 아들 교육용으로 아꼈던 '개인용' 악기. 건반악기 중 유일하게 비브라토가 돼요.",

    sound: {
      tone: ["소박함", "따뜻함", "먹먹함", "숨소리 섞임", "노래하는 듯"],
      toneDesc: "속삭임 수준의 아주 작은 소리. 대신 건반을 누른 채 흔들면 음이 떨리는 비브라토(베붕)가 되고, 손끝의 미세한 압력이 그대로 소리에 실리는, 가장 '살갗에 가까운' 건반이에요.",
      volume: 1,
      sustain: 2,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["올라운드"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "굳은살 없음. 다만 터치가 극도로 예민해 손끝 감각 훈련이 곧 연습이에요.",
      embouchure: 0,
      breath: 0,
      weight: 3,
      weightDesc: "10~25kg 상자형. 건반악기 중 드물게 혼자 옮길 수 있어요.",
      posture: "앉은 자세, 부담 없음.",
      postureRisk: [],
      handSize: "소형 건반이라 손 작아도 무리 없음.",
    },

    cost: {
      entryKRW: [3000000, 8000000],
      entryDesc: "국내 유통 사실상 없음 — 해외 공방 조립 키트·중고 직구 기준 300만~800만. 완성품 신품은 1000만~.",
      midKRW: [8000000, 20000000],
      running: "조율은 직접(하프시코드보다 안정적). 그 외 유지비 거의 없음.",
    },
    practical: {
      portability: 3,
      noise: 1,
      apartmentOk: "밤 12시에 쳐도 옆방에서도 잘 안 들려요 — 소음 걱정이라는 개념 자체가 없는, 아파트 최강의 어쿠스틱 건반.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 2,
      maintenance: 3,
    },

    vibe: {
      tags: ["고풍스러운", "명상적", "소박한", "컬트적", "학구적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 1,
    },

    genres: { main: ["바로크·고음악"], sub: ["클래식"] },

    kinship: {
      easyFrom: ["피아노", "하프시코드"],
      sameTuning: ["피아노", "하프시코드"],
      leadsTo: ["하프시코드", "파이프오르간"],
    },
    ensemble: ["독주 전용 — 소리가 작아 합주에선 묻혀요"],

    caveats: [
      "소리가 작다는 건 남에게 안 들린다는 뜻이기도 — 무대·합주 욕심이 있다면 다른 악기예요.",
      "터치가 예민해 세게 누르면 음정이 휘어버려요. 피아노 습관을 버리는 데 시간이 걸려요.",
      "국내에서 실물을 본 사람조차 드묾. 레슨은 사실상 없고 악기도 직구 — 각오가 필요한 취미.",
    ],
    funFacts: ["C.P.E. 바흐는 '내 심장을 아는 악기'라 불렀어요 — 헤드폰 시대 이전의 진정한 개인 연습 악기."],
  },

  // ═══════════════ 6. 첼레스타 ═══════════════
  {
    id: "celesta",
    name: "첼레스타",
    aka: ["celesta", "첼레스테"],
    family: "건반·타악기(금속판)",
    desc: "해머가 금속판을 때리는 건반악기. 오르골 같은 천상의 소리로, 호두까기 인형과 해리 포터 테마의 그 음색. 오케스트라·스튜디오에서 건반 주자가 겸업하는 악기.",

    sound: {
      tone: ["영롱함", "반짝임", "유리 같은", "신비", "귀여운"],
      toneDesc: "오르골을 건반으로 치는 듯한, 반짝이는 천상의 종소리. 어떤 곡이든 이 소리가 얹히는 순간 마법·꿈·눈 내리는 밤의 이미지가 돼요.",
      volume: 2,
      sustain: 3,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 1,
      roles: ["멜로디", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "굳은살 없음. 피아노 치듯 그대로 쳐요.",
      embouchure: 0,
      breath: 0,
      weight: 5,
      weightDesc: "50~90kg 캐비닛형. 개인이 옮기거나 소유할 일이 거의 없어요.",
      posture: "앉은 자세, 부담 없음.",
      postureRisk: [],
      handSize: "피아노와 동일(음역은 좁음). 손 크기 부담 없음.",
    },

    cost: {
      entryKRW: [30000000, 70000000],
      entryDesc: "개인 구매 영역이 아님 — 신품(슈이드마이어 등) 수천만원대. 현실적으로는 오케스트라·스튜디오·대학 소유 악기를 연주하거나, 디지털 건반의 첼레스타 음색으로 대신해요.",
      midKRW: [40000000, 90000000],
      running: "조율·관리는 보유 기관 몫. 개인 유지비 개념이 없어요.",
    },
    practical: {
      portability: 1,
      noise: 2,
      apartmentOk: "음량은 작지만 애초에 집에 있을 악기가 아니에요. 재택 연습=디지털 건반 음색.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 2,
    },

    vibe: {
      tags: ["귀여운", "우아한", "클래식 정통", "컬트적"],
      trendy: 1,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["클래식", "영화·게임 OST"], sub: ["뉴에이지"] },

    kinship: {
      easyFrom: ["피아노"],
      sameTuning: ["피아노"],
      leadsTo: [],
    },
    ensemble: ["오케스트라 건반 파트", "영화음악 스튜디오 세션"],

    caveats: [
      "'내 악기'로 삼기 어려운 악기 — 전공 건반 주자가 오케스트라에서 겸하는 포지션이지, 단독 입문 경로가 사실상 없어요.",
      "이 소리가 좋아서라면 현실 답은 피아노+디지털 음색이거나, 사촌 격인 글로켄슈필이에요.",
    ],
    funFacts: ["차이콥스키가 호두까기 인형 '사탕요정의 춤'에 쓰려고 파리에서 몰래 들여왔어요 — 경쟁 작곡가가 먼저 쓸까 봐 비밀에 부쳤어요."],
  },

  // ═══════════════ 7. 토이피아노 ═══════════════
  {
    id: "toy_piano",
    name: "토이피아노",
    aka: ["toy piano", "장난감 피아노"],
    family: "건반·타악기(금속봉)",
    desc: "해머가 금속봉을 때리는 소형 건반. 장난감으로 태어났지만 존 케이지 이후 어엿한 연주회 악기가 됐어요. 삐뚤빼뚤 사랑스러운 음색의 인디·실험음악 아이콘.",

    sound: {
      tone: ["귀여운", "반짝임", "소박함", "금속성", "유리 같은"],
      toneDesc: "오르골과 실로폰 사이의 땡글땡글한 소리. 미묘하게 어긋난 조율이 오히려 꿈결 같고 아련한 분위기를 만들어요.",
      volume: 2,
      sustain: 2,
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
      callus: 0,
      callusDesc: "굳은살 없음. 다만 건반이 얕고 튕겨서 섬세한 컨트롤이 의외로 어려워요.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "2~7kg. 한 손에 들고 다니는 건반.",
      posture: "바닥에 앉거나 테이블 위에 놓고 연주. 낮은 악기라 오래 치면 등이 굽어요.",
      postureRisk: ["허리"],
      handSize: "미니 건반이라 손이 크면 오히려 답답해요.",
    },

    cost: {
      entryKRW: [30000, 300000],
      entryDesc: "국내 완구·중고로 3만~10만. 연주용 대접받는 쇤헛(Schoenhut)은 직구 기준 15만~30만.",
      midKRW: [300000, 800000],
      running: "유지비 0. 조율 자체가 불가능한 구조(그게 매력).",
    },
    practical: {
      portability: 5,
      noise: 2,
      apartmentOk: "음량이 작아 밤 연습도 무난. 소음 걱정 최하위권.",
      selfLearn: 5,
      lessonKR: 1,
      entryBarrier: 1,
      quickReward: 5,
      maintenance: 1,
    },

    vibe: {
      tags: ["귀여운", "컬트적", "힙한", "소박한", "자유로운"],
      trendy: 2,
      rarityKR: 4,
      showOff: 2,
    },

    genres: { main: ["영화·게임 OST"], sub: ["클래식", "일렉트로닉", "팝·싱어송라이터"] },

    kinship: {
      easyFrom: ["피아노", "신디사이저"],
      sameTuning: ["피아노"],
      leadsTo: ["피아노", "첼레스타"],
    },
    ensemble: ["인디 밴드 양념", "실험음악·현대음악 공연", "유튜브 콘텐츠"],

    caveats: [
      "음역이 2~3옥타브뿐이라 칠 수 있는 곡이 근본적으로 제한돼요.",
      "조율이 안 맞는 게 정체성 — 정확한 음정을 원하면 스트레스받아요.",
      "메인 악기라기보다 '두 번째 악기'나 작곡·녹음의 양념으로 최고.",
    ],
    funFacts: ["존 케이지가 1948년 '토이피아노를 위한 모음곡'을 쓰면서 콘서트홀에 입성 — 지금도 이 악기 전문 연주자가 존재해요."],
  },

  // ═══════════════ 8. 신디사이저 ═══════════════
  {
    id: "synthesizer",
    name: "신디사이저",
    aka: ["synthesizer", "신스", "synth"],
    family: "건반·전자악기",
    desc: "소리 자체를 회로(또는 소프트웨어)로 설계하는 전자 건반. 세상에 없는 음색을 내가 만들어요. 연주 악기이자 작곡·프로듀싱 도구.",

    sound: {
      tone: ["몽환", "빵빵함", "금속성", "신비", "그루브"],
      toneDesc: "따뜻한 아날로그 베이스부터 우주적인 패드, 찢어지는 리드까지 — 음색의 한계가 없어요. '어떤 소리인가'가 아니라 '어떤 소리를 만들 것인가'의 악기.",
      volume: 3,
      sustain: 5,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 5,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 4,
      roles: ["올라운드", "멜로디", "화음반주", "베이스"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "굳은살 없음. 신체 부담이 가장 적은 악기군.",
      embouchure: 0,
      breath: 0,
      weight: 3,
      weightDesc: "미니 신스 1~3kg, 61키 신스 5~8kg. 백팩·케이스로 운반 가능.",
      posture: "앉아서 화면·노브를 오래 들여다보게 됨 — 거북목 주의.",
      postureRisk: ["목어깨", "손목"],
      handSize: "미니 건반 모델은 손 커도 OK, 풀사이즈도 선택 가능. 제약 없음.",
    },

    cost: {
      entryKRW: [200000, 1000000],
      entryDesc: "볼카 시리즈 등 미니 신스 20만~, 마이크로프리크급 40만~, 61키 신스 워크스테이션 입문형 60만~100만. 무료 신스 플러그인+미디 키보드(10만 이하)로 시작하는 길도 있어요.",
      midKRW: [1000000, 3000000],
      running: "유지비 0. 대신 '하나 더 사고 싶은 병(GAS)'이 최대 지출.",
    },
    practical: {
      portability: 4,
      noise: 1,
      apartmentOk: "헤드폰 연습이 기본값. 소음 문제 완전 무풍지대.",
      selfLearn: 4,
      lessonKR: 3,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 1,
    },

    vibe: {
      tags: ["힙한", "자유로운", "이국적", "컬트적"],
      trendy: 5,
      rarityKR: 2,
      showOff: 3,
    },

    genres: { main: ["일렉트로닉", "팝·싱어송라이터"], sub: ["힙합·R&B", "영화·게임 OST", "록·메탈"] },

    kinship: {
      easyFrom: ["피아노"],
      sameTuning: ["피아노", "키타(keytar)"],
      leadsTo: ["키타(keytar)", "하몬드오르간", "작곡·프로듀싱(DAW)"],
    },
    ensemble: ["밴드 신스 파트", "일렉트로닉 라이브 셋", "홈스튜디오 프로듀싱"],

    tracks: [
      { id: "synthwave", label: "신스웨이브·연주", genres: ["일렉트로닉"], note: "80년대풍 아날로그 사운드. 노브를 만지며 '연주하는 악기'로 즐기는 트랙." },
      { id: "producing", label: "작곡·프로듀싱", genres: ["일렉트로닉", "힙합·R&B", "영화·게임 OST"], note: "DAW와 결합해 곡을 만드는 트랙. 건반 실력보다 사운드 감각과 편곡이 본체." },
    ],

    caveats: [
      "건반 실력과 별개로 신디시스(음색 설계)라는 두 번째 공부가 있어요 — 이게 재미이자 러닝커브.",
      "연습보다 장비 검색에 시간을 더 쓰게 되는 함정(GAS)이 실존해요.",
      "'악기 하나를 마스터했다'는 성취감보다는 끝없는 탐험에 가까워요.",
    ],
    funFacts: ["무그 신디사이저의 데뷔 앨범(스위치드 온 바흐, 1968)은 바흐 연주곡 — 신스는 태생부터 클래식과 전자음악의 다리였어요."],
  },

  // ═══════════════ 9. 키타(keytar) ═══════════════
  {
    id: "keytar",
    name: "키타",
    aka: ["keytar", "숄더 키보드"],
    family: "건반·전자악기",
    desc: "기타처럼 어깨에 메고 무대 앞으로 나가는 건반. 건반 주자를 무대 구석에서 해방시키는 악기. 굳은살 없이 밴드 프론트에 서고 싶은 사람의 우회로.",

    sound: {
      tone: ["빵빵함", "화려함", "금속성", "그루브"],
      toneDesc: "본질은 신디사이저 — 리드 솔로용 쨍한 신스음이 시그니처. 넥의 리본·휠로 기타처럼 벤딩·비브라토를 걸며 솔로를 질러요.",
      volume: 3,
      sustain: 5,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 4,
      roles: ["멜로디", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "굳은살 없음 — 기타 대신 이걸 드는 가장 큰 이유.",
      embouchure: 0,
      breath: 0,
      weight: 2,
      weightDesc: "3~5kg을 어깨끈으로 멤. 기타보다 가볍지만 공연 내내 메면 어깨에 와요.",
      posture: "서서 연주. 한 손 연주 비중이 높아 왼손(넥 컨트롤)·오른손 역할이 비대칭.",
      postureRisk: ["목어깨"],
      handSize: "미니~풀사이즈 건반 모델 다양. 한 손 주법 위주라 손 크기 부담 적음.",
    },

    cost: {
      entryKRW: [400000, 1500000],
      entryDesc: "중고 알레시스 보텍스 40만~, 롤랜드 AX-Edge 신품 130만~150만. 미디 컨트롤러형(음원 별도)은 더 저렴.",
      midKRW: [1500000, 3000000],
      running: "유지비 0. 배터리·케이블 정도.",
    },
    practical: {
      portability: 4,
      noise: 1,
      apartmentOk: "헤드폰·앰프 볼륨 조절로 소음 완전 해결.",
      selfLearn: 4,
      lessonKR: 2,
      entryBarrier: 2,
      quickReward: 3,
      maintenance: 1,
    },

    vibe: {
      tags: ["무대 장악", "힙한", "파티", "컬트적"],
      trendy: 3,
      rarityKR: 4,
      showOff: 5,
    },

    genres: { main: ["록·메탈", "팝·싱어송라이터"], sub: ["일렉트로닉"] },

    kinship: {
      easyFrom: ["피아노", "신디사이저"],
      sameTuning: ["피아노", "신디사이저"],
      leadsTo: ["신디사이저"],
    },
    ensemble: ["록·팝 밴드 프론트", "신스팝·시티팝 무대", "버스킹(배터리 모델)"],

    caveats: [
      "키타 전용 레슨은 없어요 — 결국 건반 실력이 본체고, 키타는 그걸 무대용으로 바꾸는 장비예요.",
      "혼자 집에서 칠 땐 그냥 불편한 건반 — 무대·밴드가 없으면 존재 이유가 반감돼요.",
      "80년대 유산이라는 시선과 '멋있다'는 시선이 공존 — 소화하는 건 본인 몫.",
    ],
    funFacts: ["80년대 신스팝 전성기의 아이콘이었다가, 최근 레트로 열풍과 함께 무대로 돌아오는 중."],
  },

  // ═══════════════ 10. 멜로디카 ═══════════════
  {
    id: "melodica",
    name: "멜로디카",
    aka: ["melodica", "피아니카", "멜로디언"],
    family: "프리리드·건반취주악기",
    desc: "입으로 불며 건반을 누르는 프리리드 악기. 초등학교 그 악기 맞지만, 재즈·덥·버스킹에서 어엿한 성인 악기로 재발견됐어요. 건반+관악의 표현력을 3만원에.",

    sound: {
      tone: ["콧소리", "소박함", "따뜻함", "애수"],
      toneDesc: "아코디언과 하모니카 사이의 콧소리 섞인 리드 사운드. 호흡으로 강약·비브라토가 걸려서 건반인데도 노래하듯 표현돼요.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["멜로디", "화음반주"],
    },

    body: {
      saliva: 2,
      callus: 0,
      callusDesc: "굳은살 없음.",
      embouchure: 0,
      breath: 1,
      weight: 1,
      weightDesc: "500g~1kg. 가방에 쏙 들어가요.",
      posture: "들고 불거나 호스로 연결해 테이블에 놓고 연주. 부담 없음.",
      postureRisk: [],
      handSize: "32~37건반 소형. 손 크기 제약 없음.",
    },

    cost: {
      entryKRW: [30000, 150000],
      entryDesc: "국내 어디서나 구매 가능. 스즈키·야마하·호너 3만~15만이면 평생 쓸 물건.",
      midKRW: [150000, 700000],
      running: "유지비 사실상 0. 마우스피스 세척 정도.",
    },
    practical: {
      portability: 5,
      noise: 3,
      apartmentOk: "리코더급 음량이라 낮 연습은 무난. 밤엔 눈치 보임.",
      selfLearn: 5,
      lessonKR: 2,
      entryBarrier: 1,
      quickReward: 5,
      maintenance: 2,
    },

    vibe: {
      tags: ["소박한", "귀여운", "자유로운", "힙한"],
      trendy: 2,
      rarityKR: 2,
      showOff: 2,
    },

    genres: { main: ["포크", "재즈"], sub: ["팝·싱어송라이터", "일렉트로닉"] },

    kinship: {
      easyFrom: ["피아노", "하모니카"],
      sameTuning: ["피아노", "아코디언(오른손)"],
      leadsTo: ["피아노 아코디언", "피아노", "하모니카"],
    },
    ensemble: ["버스킹", "어쿠스틱 밴드", "스카·덥 밴드"],

    caveats: [
      "침이 안에 고여요 — 연주 후 물 빼고 말리지 않으면 냄새·곰팡이. 이게 유일하고 확실한 단점.",
      "'애들 악기' 이미지가 있어 무대에선 오히려 반전 카드가 되기도, 벽이 되기도 해요.",
      "숨이 이어지는 만큼만 소리가 나요 — 긴 프레이즈는 호흡 설계가 필요.",
    ],
    funFacts: ["자메이카의 어거스터스 파블로가 이 악기로 덥 음악의 전설이 됐어요 — 학교 악기가 장르의 목소리가 된 드문 사례."],
  },

  // ═══════════════ 11. 피아노 아코디언 ═══════════════
  {
    id: "piano_accordion",
    name: "피아노 아코디언",
    aka: ["piano accordion", "아코디언", "손풍금"],
    family: "프리리드·벨로우즈(주름상자)",
    desc: "오른손 피아노 건반+왼손 베이스 버튼+벨로우즈(주름상자)로 숨을 쉬는 휴대용 오케스트라. 파리 골목부터 탱고 무대, 한국 트로트까지 세계 어디에나 있는 소리.",

    sound: {
      tone: ["애수", "따뜻함", "빵빵함", "노래하는 듯", "화려함"],
      toneDesc: "여러 리드가 한꺼번에 울리는 풍성한 합창 같은 소리. 벨로우즈로 숨을 쉬듯 강약을 만들어서, 건반악기인데 관악기처럼 노래해요. 뮈제트 튜닝이면 특유의 파리풍 흔들림이 얹혀요.",
      volume: 4,
      sustain: 5,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["올라운드", "멜로디", "화음반주", "베이스"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "굳은살 없음. 대신 왼팔이 벨로우즈를 밀고 당기느라 은근히 근력 운동이 돼요.",
      embouchure: 0,
      breath: 0,
      weight: 4,
      weightDesc: "성인용 8~13kg을 어깨끈 두 줄로 메요. 앉아 연주하면 허벅지가 받쳐줘서 생각보다 버틸 만하지만, 서서 오래 하면 확실히 와요.",
      posture: "어깨끈+가슴으로 안는 자세. 허리·어깨에 부하, 몸에 맞는 사이즈(48/72/96/120베이스) 선택이 중요.",
      postureRisk: ["허리", "목어깨"],
      handSize: "오른손은 피아노보다 좁은 건반이라 유리. 왼손 베이스 버튼은 안 보고 더듬어 찾는 훈련이 핵심.",
    },

    cost: {
      entryKRW: [600000, 2000000],
      entryDesc: "중국산 신품(파로셀 등) 60만~120만, 중고 이탈리아·독일산 150만~. 사이즈(베이스 수)에 따라 가격 폭이 커요. 처음엔 72베이스 안팎 중고 추천.",
      midKRW: [3000000, 8000000],
      running: "몇 년에 한 번 리드 왁스·조율 점검(수리점이 국내 소수라 건당 수십만원 각오).",
    },
    practical: {
      portability: 2,
      noise: 4,
      apartmentOk: "피아노급 음량이라 아파트 밤 연습 불가. 낮 짧은 연습, 연습실, 또는 디지털 아코디언이 해법.",
      selfLearn: 3,
      lessonKR: 3,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 2,
    },

    vibe: {
      tags: ["낭만적", "이국적", "루츠·어쿠스틱", "소박한", "유행과 동떨어진"],
      trendy: 2,
      rarityKR: 3,
      showOff: 3,
    },

    genres: { main: ["포크", "탱고", "트로트·가요"], sub: ["발칸·클레즈머·집시", "라틴", "재즈", "영화·게임 OST"] },

    kinship: {
      easyFrom: ["피아노", "멜로디카", "신디사이저"],
      sameTuning: ["피아노(오른손 건반 동일)"],
      leadsTo: ["크로매틱 버튼 아코디언", "바얀", "반도네온"],
    },
    ensemble: ["버스킹", "포크·집시 밴드", "탱고 앙상블", "아코디언 동호회 합주"],

    tracks: [
      { id: "musette", label: "프렌치 뮈제트", genres: ["포크"], note: "파리 카페 왈츠. 뮈제트 튜닝 특유의 흔들리는 음색. 샹송 반주와 한 몸." },
      { id: "tango", label: "탱고", genres: ["탱고"], note: "반도네온의 현실적 대체 경로. 피아졸라 곡의 아코디언 편곡 악보가 풍부해요." },
      { id: "trot", label: "트로트·가요", genres: ["트로트·가요"], note: "한국 아코디언의 주류 씬. 동호회·행사 무대가 많고 중장년 레슨 인프라가 여기에 있어요." },
      { id: "folk", label: "포크·월드", genres: ["포크", "발칸·클레즈머·집시"], note: "클레즈머·발칸·아이리시까지. 버스킹 한 대로 완결되는 밴드." },
    ],

    variants: [
      { id: "digital_acc", label: "디지털 아코디언", mods: { noise: 1 }, note: "롤랜드 FR 시리즈. 헤드폰 연습 가능하지만 가격(200만~)이 만만치 않아요." },
    ],

    caveats: [
      "무게가 진짜 변수 — 시작 전에 반드시 실물을 메 보고 사이즈를 정할 것.",
      "왼손 베이스 버튼 120개는 안 보이는 위치를 외우는 악기 — 초반 두어 달은 왼손이 미아가 돼요.",
      "국내 수리·조율 기술자가 소수라, 악기 상태 좋은 매물 고르는 눈(또는 도와줄 사람)이 중요해요.",
    ],
    funFacts: ["세계에서 가장 많이 팔린 악기 중 하나 — 20세기 중반 미국에선 피아노보다 아코디언 학원이 많던 시절도 있었어요."],
  },

  // ═══════════════ 12. 바얀 ═══════════════
  {
    id: "bayan",
    name: "바얀",
    aka: ["bayan", "баян", "러시아식 버튼 아코디언"],
    family: "프리리드·벨로우즈(주름상자)",
    desc: "러시아식 크로매틱 버튼 아코디언(B시스템). 바흐 오르간곡부터 현대 창작곡까지 소화하는 '클래식 연주용 아코디언'의 표준. 러시아·동구권에선 음악원 전공 악기예요.",

    sound: {
      tone: ["웅장함", "낮고 깊음", "애수", "빵빵함", "노래하는 듯"],
      toneDesc: "피아노 아코디언보다 어둡고 육중한, 오르간에 가까운 소리. 콘서트 바얀은 왼손이 자유 베이스로 전환돼 양손으로 대위법을 짜는, 사실상 '메는 파이프오르간'.",
      volume: 4,
      sustain: 5,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 5,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 2,
      roles: ["올라운드", "멜로디", "화음반주", "베이스"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "굳은살 없음. 버튼이 가벼워 손끝 부담은 적어요.",
      embouchure: 0,
      breath: 0,
      weight: 5,
      weightDesc: "학생용도 10kg 안팎, 콘서트 바얀은 13~15kg. 아코디언 계열 중 최중량급.",
      posture: "앉아서 어깨끈 두 줄+허벅지 지지. 장시간 연습 시 허리·어깨 관리 필수.",
      postureRisk: ["허리", "목어깨"],
      handSize: "버튼 간격이 건반보다 훨씬 좁아 손 작은 사람이 오히려 유리 — 한 손으로 2옥타브가 잡혀요.",
    },

    cost: {
      entryKRW: [1500000, 4000000],
      entryDesc: "국내 유통 사실상 없음 — 러시아·유럽 직구 기준. 툴라(Tula) 등 학생용 신품 150만~400만, 중고는 운이 따라야 해요. 콘서트급(주피터 등)은 수천만원.",
      midKRW: [5000000, 20000000],
      running: "리드 조율·수리는 사실상 해외 발송 또는 국내 소수 아코디언 수리점 의존.",
    },
    practical: {
      portability: 2,
      noise: 4,
      apartmentOk: "음량이 커서 아파트 밤 연습 불가. 낮 시간·연습실 확보가 전제.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 4,
      quickReward: 2,
      maintenance: 2,
    },

    vibe: {
      tags: ["장인 정신", "학구적", "이국적", "위압적", "유행과 동떨어진"],
      trendy: 1,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["클래식", "포크"], sub: ["발칸·클레즈머·집시", "탱고", "바로크·고음악"] },

    kinship: {
      easyFrom: ["피아노 아코디언(벨로우즈·왼손 공통)", "크로매틱 버튼 아코디언", "피아노(음악 기초)"],
      sameTuning: ["크로매틱 버튼 아코디언(C시스템과 배열이 거울상)"],
      leadsTo: ["크로매틱 버튼 아코디언"],
    },
    ensemble: ["독주(러시아·클래식 레퍼토리)", "아코디언 오케스트라", "민속 앙상블"],

    caveats: [
      "한국에 레슨·수리·악기 유통 인프라가 거의 없어요 — 유학파 연주자 소수와 온라인(러시아어권 자료가 최상급)이 전부.",
      "B시스템 교재·운지 자료는 러시아어가 표준 — 영어 자료도 C시스템 위주라 걸러 봐야 해요.",
      "비르투오소 문화의 악기라 정상은 아득히 높아요 — 대신 취미 수준에서도 버튼 배열의 효율은 그대로 누려요.",
    ],
    funFacts: ["이름은 전설의 음유시인 '보얀'에서 왔어요. 러시아에선 음악원에 바얀 전공이 정식으로 있고 국제 콩쿠르도 열려요."],
  },

  // ═══════════════ 13. 크로매틱 버튼 아코디언 ═══════════════
  {
    id: "cba_c_system",
    name: "크로매틱 버튼 아코디언",
    aka: ["chromatic button accordion", "CBA", "C시스템"],
    family: "프리리드·벨로우즈(주름상자)",
    desc: "서유럽식(C시스템) 버튼 아코디언. 버튼 배열이 조옮김에 대칭이라 한 운지를 외우면 12키가 전부 열려요. 프랑스 뮈제트·발칸·재즈 아코디언의 표준.",

    sound: {
      tone: ["애수", "화려함", "따뜻함", "빵빵함", "노래하는 듯"],
      toneDesc: "소리는 피아노 아코디언과 같은 계열 — 차이는 손끝에 있어요. 좁은 버튼 덕에 건반으로는 안 잡히는 넓은 도약과 빽빽한 화음이 잡히고, 속주가 매끈해져요.",
      volume: 4,
      sustain: 5,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 5,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 4,
      roles: ["올라운드", "멜로디", "화음반주", "베이스"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "굳은살 없음.",
      embouchure: 0,
      breath: 0,
      weight: 4,
      weightDesc: "8~13kg. 같은 음역이면 피아노 아코디언보다 작고 가볍게 나와요.",
      posture: "어깨끈 두 줄, 앉아 연주 권장. 허리·어깨 부하는 아코디언 공통.",
      postureRisk: ["허리", "목어깨"],
      handSize: "버튼 간격이 좁아 손 작아도 유리. 3열 운지+보조 2열 구조라 손 모양보다 암기가 관건.",
    },

    cost: {
      entryKRW: [1200000, 3500000],
      entryDesc: "국내 매장 취급이 드물어 유럽 직구·중고 기준. 중국산 신품 120만~, 이탈리아·프랑스산 중고 200만~. 피아노식보다 매물 자체가 귀해요.",
      midKRW: [4000000, 15000000],
      running: "리드 조율·왁스 점검 몇 년 주기. 수리는 국내 소수 업체 또는 해외.",
    },
    practical: {
      portability: 2,
      noise: 4,
      apartmentOk: "아파트 밤 연습 불가. 낮·연습실 전제.",
      selfLearn: 2,
      lessonKR: 2,
      entryBarrier: 4,
      quickReward: 2,
      maintenance: 2,
    },

    vibe: {
      tags: ["이국적", "낭만적", "장인 정신", "자유로운"],
      trendy: 2,
      rarityKR: 4,
      showOff: 4,
    },

    genres: { main: ["발칸·클레즈머·집시", "재즈"], sub: ["포크", "클래식", "탱고"] },

    kinship: {
      easyFrom: ["피아노 아코디언(벨로우즈·왼손 그대로)", "바얀", "피아노(음악 기초)"],
      sameTuning: ["바얀(B시스템과 배열이 거울상)"],
      leadsTo: ["바얀", "반도네온"],
    },
    ensemble: ["발칸·집시 밴드", "뮈제트 듀오", "재즈 콤보", "클레즈머 앙상블"],

    tracks: [
      { id: "musette_cba", label: "뮈제트·샹송", genres: ["포크"], note: "프랑스 본고장 표준 악기. 왈츠 속주는 버튼이라 가능한 영역." },
      { id: "balkan", label: "발칸·클레즈머", genres: ["발칸·클레즈머·집시"], note: "변박·초고속 프레이즈의 세계. 대칭 배열이 조바꿈 많은 곡에서 진가를 내요." },
      { id: "jazz_cba", label: "재즈", genres: ["재즈"], note: "리샤르 갈리아노 계보. 벨로우즈 셰이크 등 표현 주법의 놀이터." },
    ],

    caveats: [
      "한국은 피아노 아코디언이 표준이라 C시스템 레슨·교재를 찾기 어려워요(프랑스어·이탈리아어권 자료가 본진).",
      "피아노를 오래 쳤다면 건반식이 즉시 편하고, 버튼식은 백지에서 다시 외워요 — 대신 천장이 더 높아요.",
      "B시스템(바얀)과 배열이 달라 교재·영상 볼 때 시스템 확인이 필수.",
    ],
    funFacts: ["같은 손 모양을 그대로 옮기면 조옮김이 끝나요 — 12키를 각각 새로 배우는 건반과의 결정적 차이."],
  },

  // ═══════════════ 14. 다이어토닉 버튼 아코디언 ═══════════════
  {
    id: "diatonic_button_accordion",
    name: "다이어토닉 버튼 아코디언",
    aka: ["diatonic button accordion", "멜로디언(아일랜드)", "버튼 박스"],
    family: "프리리드·벨로우즈(주름상자)",
    desc: "밀 때와 당길 때 다른 음이 나는(바이소노릭) 2~3열 버튼 아코디언. 아이리시 세션과 멕시코 노르테뇨의 심장. 악보보다 몸으로 익히는 춤곡 기계.",

    sound: {
      tone: ["카랑카랑", "밝음", "그루브", "소박함", "콧소리"],
      toneDesc: "밀당이 만드는 통통 튀는 리듬감이 소리에 배어 있어요. 크로매틱보다 단순하고 시원한, 춤을 부르는 소리. 아이리시 릴이 쏟아질 때의 추진력이 시그니처.",
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
      roles: ["멜로디", "리듬반주"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "굳은살 없음.",
      embouchure: 0,
      breath: 0,
      weight: 2,
      weightDesc: "3~5kg. 아코디언 가족의 막내급 무게 — 서서도, 메고 걸으면서도 연주 가능.",
      posture: "부담 적음. 벨로우즈 방향 전환이 잦아 왼팔 스태미나는 필요.",
      postureRisk: ["목어깨"],
      handSize: "버튼 수가 적고 간격이 좁아 손 크기 제약 없음.",
    },

    cost: {
      entryKRW: [400000, 1800000],
      entryDesc: "국내 유통 거의 없어 직구 기준. 중국산 입문기 40만~, 호너(Corona 등)·아일랜드용 B/C 박스 100만~180만. 조성(키)별로 악기가 달라 목표 장르의 표준 키를 먼저 정할 것.",
      midKRW: [2000000, 6000000],
      running: "리드 관리 몇 년 주기. 수리는 해외 발송 각오.",
    },
    practical: {
      portability: 3,
      noise: 4,
      apartmentOk: "밤 연습은 무리. 낮 시간 또는 연습실.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 2,
    },

    vibe: {
      tags: ["루츠·어쿠스틱", "파티", "이국적", "소박한", "자유로운"],
      trendy: 1,
      rarityKR: 5,
      showOff: 3,
    },

    genres: { main: ["켈틱·아이리시", "라틴"], sub: ["포크", "컨트리·블루그래스"] },

    kinship: {
      easyFrom: ["다이어토닉 하모니카(밀당=들숨날숨, 같은 원리)", "콘서티나(앵글로)", "피아노 아코디언(벨로우즈 감각)"],
      sameTuning: ["다이어토닉 하모니카(리히터 배열 원리 공유)", "앵글로 콘서티나"],
      leadsTo: ["크로매틱 버튼 아코디언", "앵글로 콘서티나"],
    },
    ensemble: ["아이리시 세션", "노르테뇨·콘훈토 밴드", "케일리(춤판) 밴드"],

    tracks: [
      { id: "irish_box", label: "아이리시(B/C 박스)", genres: ["켈틱·아이리시"], note: "세션 표준. 온라인 강좌(OAIM 등 영어권)가 잘 돼 있어 독학 루트 존재." },
      { id: "norteno", label: "멕시코 노르테뇨", genres: ["라틴"], note: "3열 GCF 박스. 폴카 리듬과 화려한 3도 주법. 미국·멕시코 유튜브 자료 풍부." },
    ],

    caveats: [
      "밀 때와 당길 때 음이 달라 악보를 그대로 옮기는 악기가 아니에요 — 귀와 몸으로 패턴을 익히는 구전 음악 방식이 정석.",
      "악기 하나가 조성 2~3개 전용 — 장르 표준 키(아이리시 B/C, 노르테뇨 GCF)를 모르고 사면 낭패.",
      "국내 레슨은 사실상 없음. 커뮤니티도 극소수 — 온라인 영어권 강좌가 실질 스승.",
    ],
    funFacts: ["같은 버튼인데 밀면 '도', 당기면 '레' — 이 제약이 오히려 아이리시 특유의 통통 튀는 프레이징을 만들어요."],
  },

  // ═══════════════ 15. 반도네온 ═══════════════
  {
    id: "bandoneon",
    name: "반도네온",
    aka: ["bandoneon", "반도네온"],
    family: "프리리드·벨로우즈(콘서티나족)",
    desc: "탱고의 영혼. 71버튼이 무질서하게 흩어진 사각 콘서티나족 악기로, 밀 때와 당길 때 음이 달라요. 피아졸라가 세계에 각인시킨, 세상에서 가장 배우기 어려운 악기 중 하나.",

    sound: {
      tone: ["애수", "먹먹함", "낮고 깊음", "숨소리 섞임", "노래하는 듯"],
      toneDesc: "울다가 으르렁거리는 소리. 벨로우즈를 당겨 여는 순간의 한숨 같은 어택과, 무릎을 치며 끊는 스타카토가 탱고의 심장박동을 만들어요. 아코디언보다 건조하고 사람 목소리에 가까워요.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 3,
      roles: ["멜로디", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "굳은살 없음. 손보다 머리가 아픈 악기.",
      embouchure: 0,
      breath: 0,
      weight: 3,
      weightDesc: "4~5kg을 무릎 위에 올리고 연주. 어깨끈이 없어 몸 부담은 아코디언보다 훨씬 적어요.",
      posture: "앉아서 무릎 위. 벨로우즈를 크게 벌리는 동작에서 등이 굽기 쉬워요.",
      postureRisk: ["허리", "목어깨"],
      handSize: "버튼이 사방에 흩어져 있어 손 크기보다 '어느 버튼이 어디 있는지' 암기가 전부.",
    },

    cost: {
      entryKRW: [5000000, 12000000],
      entryDesc: "신품(독일·공방 제작)은 900만부터, 국내외 중고 시세 600만~1000만. 30만원대 '반도네온 모양 아코디언'은 별개 물건이니 주의. 아르헨티나·유럽 중고 직구+수리가 현실 루트.",
      midKRW: [9000000, 20000000],
      running: "리드·벨로우즈 수리는 사실상 해외(아르헨티나·독일·일본) 발송. 시간과 비용 모두 큼.",
    },
    practical: {
      portability: 3,
      noise: 3,
      apartmentOk: "아코디언보다 조용해 낮 연습은 가능한 수준. 밤엔 무리.",
      selfLearn: 1,
      lessonKR: 1,
      entryBarrier: 5,
      quickReward: 1,
      maintenance: 3,
    },

    vibe: {
      tags: ["애수 어린", "낭만적", "장인 정신", "컬트적", "무대 장악"],
      trendy: 2,
      rarityKR: 5,
      showOff: 5,
    },

    genres: { main: ["탱고"], sub: ["클래식", "영화·게임 OST"] },

    kinship: {
      easyFrom: ["콘서티나(같은 족·밀당 개념)", "피아노 아코디언(벨로우즈 감각만)", "피아노(음악 기초)"],
      sameTuning: [],
      leadsTo: [],
    },
    ensemble: ["오르케스타 티피카(탱고 악단)", "탱고 콰르텟", "탱고 밀롱가 연주"],

    caveats: [
      "배열이 '지옥' — 오른손·왼손·밀 때·당길 때가 전부 달라 사실상 4개의 무질서한 자판을 통째로 외워요. 역사적 우연이 굳어진 배열이라 논리도 없어요.",
      "악기 구하기가 배우기보다 어려워요 — 좋은 중고(도블레 A 등)는 세계적으로 품귀이고 가격은 계속 오르는 중.",
      "국내 연주자·교사가 손에 꼽혀요. 레슨은 소수 연주자 개인 레슨 또는 해외 온라인이 전부.",
      "이 모든 벽을 넘을 만큼 탱고를 사랑하는가 — 이 질문에 '예'인 사람만 오는 악기.",
    ],
    funFacts: ["원래 독일에서 교회 오르간 대용으로 만든 악기가 이민선을 타고 부에노스아이레스 항구에 내려 탱고의 목소리가 됐어요."],
  },

  // ═══════════════ 16. 콘서티나 ═══════════════
  {
    id: "concertina",
    name: "콘서티나",
    aka: ["concertina", "앵글로 콘서티나", "잉글리시 콘서티나"],
    family: "프리리드·벨로우즈(콘서티나족)",
    desc: "양손 끝에 버튼이 달린 육각형 미니 벨로우즈 악기. 앵글로(밀당에 따라 음이 다름)는 아이리시 음악의 총아, 잉글리시(밀당 같은 음)는 멜로디·클래식형. 무릎 위의 작은 오케스트라.",

    sound: {
      tone: ["카랑카랑", "맑음", "소박함", "밝음", "콧소리"],
      toneDesc: "아코디언보다 작고 또렷한, 새소리처럼 재잘거리는 리드 사운드. 아이리시 지그·릴에서 또랑또랑 굴러가는 소리가 매력의 핵심.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: true,
      improv: 3,
      roles: ["멜로디", "화음반주"],
    },

    body: {
      saliva: 0,
      callus: 0,
      callusDesc: "굳은살 없음. 엄지·새끼손가락 스트랩에 익숙해지는 정도.",
      embouchure: 0,
      breath: 0,
      weight: 1,
      weightDesc: "1~1.5kg. 아코디언 가족 최경량 — 가방에 넣어 다녀요.",
      posture: "앉아서 무릎 위. 신체 부담이 거의 없어 나이 들어 시작하기 좋은 벨로우즈 악기.",
      postureRisk: [],
      handSize: "버튼 간격이 좁아 손 작아도 유리. 손목 스냅으로 벨로우즈를 다루는 감각이 관건.",
    },

    cost: {
      entryKRW: [300000, 900000],
      entryDesc: "중국산 입문기 30만~60만(직구), 입문 표준 로셸(Rochelle)급 60만~90만. 국내 매장 유통은 거의 없어요.",
      midKRW: [1500000, 5000000],
      running: "유지비 낮음. 수제 악기 수리는 해외 발송.",
    },
    practical: {
      portability: 4,
      noise: 3,
      apartmentOk: "아코디언보다 한결 조용해 낮 연습 무난. 밤엔 자제.",
      selfLearn: 3,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 2,
    },

    vibe: {
      tags: ["루츠·어쿠스틱", "귀여운", "고풍스러운", "소박한", "이국적"],
      trendy: 1,
      rarityKR: 4,
      showOff: 2,
    },

    genres: { main: ["켈틱·아이리시"], sub: ["포크", "클래식"] },

    kinship: {
      easyFrom: ["다이어토닉 하모니카(앵글로: 같은 밀당 원리)", "다이어토닉 버튼 아코디언", "아코디언(벨로우즈 감각)"],
      sameTuning: ["다이어토닉 버튼 아코디언(앵글로: 배열 원리 공유)"],
      leadsTo: ["반도네온", "다이어토닉 버튼 아코디언"],
    },
    ensemble: ["아이리시 세션", "포크 클럽", "선원 노래(샨티) 모임"],

    tracks: [
      { id: "anglo", label: "앵글로(아이리시)", genres: ["켈틱·아이리시"], note: "밀당 바이소노릭. 아이리시 세션의 표준 — 온라인 강좌(OAIM 등)로 독학 루트가 열려 있어요." },
      { id: "english", label: "잉글리시(멜로디·클래식형)", genres: ["포크", "클래식"], note: "밀당 같은 음이라 악보 연주에 유리. 잉글랜드 포크·찬송가·클래식 소품에 어울려요." },
    ],

    caveats: [
      "앵글로/잉글리시/듀엣 시스템이 서로 호환 안 됨 — 처음에 장르 보고 시스템을 정해야 갈아타는 비용이 없어요.",
      "저가 중국제는 반응 속도·벨로우즈 한계로 1~2년 안에 업그레이드 욕구가 와요(그리고 중급부턴 가격이 훌쩍 뛰어요).",
      "국내 레슨·커뮤니티 사실상 없음 — 영어권 온라인 강좌가 실질 스승.",
    ],
    funFacts: ["19세기 영국에선 상류층 살롱 악기였어요 — 찰스 다윈 시대의 '교양 악기'가 지금은 아이리시 펍의 소리가 됐어요."],
  },

  // ═══════════════ 17. 다이어토닉 하모니카 ═══════════════
  {
    id: "diatonic_harmonica",
    name: "다이어토닉 하모니카",
    aka: ["diatonic harmonica", "블루스 하프", "10홀 하모니카"],
    family: "프리리드·하모니카족",
    desc: "주머니에 들어가는 10홀 하모니카. 벤딩(음 구부리기)으로 블루스 특유의 우는 소리를 내요. 세계에서 가장 싸게 시작해서 가장 깊이 갈 수 있는 악기 중 하나.",

    sound: {
      tone: ["애수", "거칢", "콧소리", "숨소리 섞임", "노래하는 듯"],
      toneDesc: "숨이 그대로 소리가 되는 악기. 벤딩이 걸리는 순간 흐느끼고, 핸드 와우로 울렁이고, 기차 리듬으로 달려요. 목소리 다음으로 사람 감정에 가까운 소리.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 5,
      roles: ["멜로디", "리듬반주"],
    },

    body: {
      saliva: 2,
      callus: 0,
      callusDesc: "굳은살 없음.",
      embouchure: 1,
      breath: 2,
      weight: 1,
      weightDesc: "100g. 주머니 속 악기의 대명사.",
      posture: "자세 부담 전무. 걸으면서도, 누워서도 불어요.",
      postureRisk: [],
      handSize: "손 크기 무관. 핸드 커핑(양손 울림통)은 손이 크면 약간 유리한 정도.",
    },

    cost: {
      entryKRW: [10000, 80000],
      entryDesc: "호너 스페셜20·스즈키 등 표준 입문기가 4만~6만. 1만원대 저가품은 벤딩 연습에 오히려 방해되니 5만원 안팎 정품 추천.",
      midKRW: [80000, 300000],
      running: "리드 수명이 있어 소모품 개념(연주량 따라 1~3년). 조성별로 하나씩 늘어나요.",
    },
    practical: {
      portability: 5,
      noise: 3,
      apartmentOk: "리코더급 음량. 낮 연습 무난, 밤엔 이불 속 약음 연습이라는 전통 기술이 있어요.",
      selfLearn: 5,
      lessonKR: 3,
      entryBarrier: 1,
      quickReward: 5,
      maintenance: 2,
    },

    vibe: {
      tags: ["루츠·어쿠스틱", "자유로운", "소박한", "낭만적"],
      trendy: 2,
      rarityKR: 2,
      showOff: 3,
    },

    genres: { main: ["블루스"], sub: ["포크", "컨트리·블루그래스", "록·메탈", "팝·싱어송라이터"] },

    kinship: {
      easyFrom: [],
      sameTuning: ["트레몰로 하모니카(리히터 배열 계열)", "다이어토닉 버튼 아코디언(밀당 원리)"],
      leadsTo: ["크로매틱 하모니카", "다이어토닉 버튼 아코디언", "콘서티나(앵글로)"],
    },
    ensemble: ["블루스 밴드", "버스킹", "포크 잼", "넥 홀더로 기타와 1인 2역"],

    tracks: [
      { id: "blues", label: "블루스", genres: ["블루스"], note: "벤딩·2nd 포지션이 핵심. 첫 벤딩 성공까지 몇 주가 최대 고비이자 통과의례." },
      { id: "folk_country", label: "포크·컨트리", genres: ["포크", "컨트리·블루그래스"], note: "멜로디 위주라 벤딩 없이도 즐길 수 있는 순한 트랙. 넥 홀더로 노래·기타와 병행." },
    ],

    caveats: [
      "벤딩을 익히기 전까지는 '블루스 그 소리'가 안 나요 — 여기서 그만두는 사람이 제일 많아요.",
      "한 조성=한 악기라 결국 5~7개를 모으게 돼요(그래도 다 합쳐 기타 한 대 값).",
      "노래하면서 연주는 불가 — 입이 하나라서. 대신 넥 홀더로 기타와는 병행돼요.",
    ],
    funFacts: ["밥 딜런·닐 영·스티비 원더까지 — 주머니 속 악기로 무대 최전선에 선 사람이 이렇게 많은 악기도 드물어요."],
  },

  // ═══════════════ 18. 크로매틱 하모니카 ═══════════════
  {
    id: "chromatic_harmonica",
    name: "크로매틱 하모니카",
    aka: ["chromatic harmonica", "크로매틱"],
    family: "프리리드·하모니카족",
    desc: "옆의 슬라이드 버튼을 누르면 반음이 올라가는 하모니카. 12조성을 한 대로 소화해 재즈·클래식 멜로디를 정면으로 연주해요. 투츠 틸레망스의 악기.",

    sound: {
      tone: ["맑음", "부드러움", "애수", "노래하는 듯", "숨소리 섞임"],
      toneDesc: "다이어토닉보다 둥글고 기품 있는 소리. 바이올린 소품이나 재즈 발라드를 부는 순간, 하모니카가 '정식 독주 악기'라는 걸 증명하는 음색.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F1",
      fastPlay: 4,
      chordal: false,
      melodic: true,
      singAlong: false,
      improv: 4,
      roles: ["멜로디"],
    },

    body: {
      saliva: 2,
      callus: 0,
      callusDesc: "굳은살 없음.",
      embouchure: 1,
      breath: 2,
      weight: 1,
      weightDesc: "200~300g. 코트 주머니면 충분.",
      posture: "부담 없음. 슬라이드 조작하는 오른손 검지만 바빠져요.",
      postureRisk: [],
      handSize: "손 크기 무관.",
    },

    cost: {
      entryKRW: [80000, 400000],
      entryDesc: "호너 크로모니카·스즈키·이스트탑 입문기 8만~20만, 표준기(호너 270 등) 20만~40만. 다이어토닉보다 확실히 비싸지만 한 대로 12키가 돼요.",
      midKRW: [400000, 1500000],
      running: "슬라이드·밸브 청소가 일상 관리. 리드 교체는 수리점·직구 부품.",
    },
    practical: {
      portability: 5,
      noise: 3,
      apartmentOk: "낮 연습 무난한 음량. 밤엔 자제.",
      selfLearn: 4,
      lessonKR: 3,
      entryBarrier: 2,
      quickReward: 4,
      maintenance: 3,
    },

    vibe: {
      tags: ["우아한", "낭만적", "학구적", "서정적"],
      trendy: 2,
      rarityKR: 3,
      showOff: 3,
    },

    genres: { main: ["재즈"], sub: ["클래식", "팝·싱어송라이터", "영화·게임 OST", "트로트·가요"] },

    kinship: {
      easyFrom: ["다이어토닉 하모니카", "트레몰로 하모니카"],
      sameTuning: [],
      leadsTo: [],
    },
    ensemble: ["재즈 콤보", "팝·OST 세션", "하모니카 앙상블(합주단)"],

    caveats: [
      "화음 반주가 사실상 안 되는 순수 멜로디 악기 — 반주자(또는 반주 음원)와 함께일 때 완성돼요.",
      "밸브·슬라이드가 침과 온도에 예민해 관리가 다이어토닉보다 손이 가요(연주 전 데우기 습관).",
      "벤딩 표현은 다이어토닉보다 제한적 — 블루스 필이 목적이라면 다이어토닉이 맞아요.",
    ],
    funFacts: ["투츠 틸레망스는 이 악기로 재즈 명예의 전당급 커리어를 쌓았고, 미드나잇 카우보이·세서미 스트리트의 그 멜로디도 그의 크로매틱이에요."],
  },

  // ═══════════════ 19. 트레몰로 하모니카 ═══════════════
  {
    id: "tremolo_harmonica",
    name: "트레몰로 하모니카",
    aka: ["tremolo harmonica", "복음 하모니카", "에코 하모니카"],
    family: "프리리드·하모니카족",
    desc: "한 음에 리드 2개가 미세하게 어긋나 울리며 떨림(트레몰로)을 만드는 하모니카. 한국 하모니카 교실·동호회의 표준으로, 트로트·가요·옛 노래와 궁합이 가장 좋아요.",

    sound: {
      tone: ["애수", "따뜻함", "콧소리", "소박함", "노래하는 듯"],
      toneDesc: "두 리드가 만드는 아련한 떨림이 기본 장착된 소리. 고향의 봄이든 트로트든, 부는 순간 그리움 필터가 걸려요. 한국인의 귀에 가장 익숙한 하모니카 소리.",
      volume: 3,
      sustain: 4,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["멜로디", "화음반주"],
    },

    body: {
      saliva: 2,
      callus: 0,
      callusDesc: "굳은살 없음.",
      embouchure: 1,
      breath: 1,
      weight: 1,
      weightDesc: "150g 안팎. 주머니 악기.",
      posture: "부담 없음. 앉아서도 서서도.",
      postureRisk: [],
      handSize: "손 크기 무관.",
    },

    cost: {
      entryKRW: [15000, 100000],
      entryDesc: "국내 어디서나 구매 가능(미화·스즈키·톰보 등). 2만~5만이면 수업용 표준기, 10만이면 상급기.",
      midKRW: [100000, 300000],
      running: "유지비 사실상 0. 단음·반음용으로 몇 대 늘어나는 정도.",
    },
    practical: {
      portability: 5,
      noise: 3,
      apartmentOk: "낮 연습 무난. 하모니카 중에서도 부드러운 축.",
      selfLearn: 4,
      lessonKR: 4,
      entryBarrier: 1,
      quickReward: 5,
      maintenance: 1,
    },

    vibe: {
      tags: ["소박한", "서정적", "유행과 동떨어진", "루츠·어쿠스틱"],
      trendy: 1,
      rarityKR: 2,
      showOff: 2,
    },

    genres: { main: ["트로트·가요"], sub: ["포크", "CCM·교회음악"] },

    kinship: {
      easyFrom: ["다이어토닉 하모니카"],
      sameTuning: ["다이어토닉 하모니카(배열 계열)"],
      leadsTo: ["크로매틱 하모니카", "다이어토닉 하모니카"],
    },
    ensemble: ["하모니카 동호회 합주", "복지관·문화센터 앙상블", "경로당·행사 무대"],

    caveats: [
      "기본 모델은 반음이 안 나 두 대(예: C+C#)를 위아래로 겹쳐 잡는 게 정석 — 처음엔 당황 포인트.",
      "특유의 떨림이 매력이자 호불호 — 깔끔한 단음을 원하면 다이어토닉·크로매틱이 맞아요.",
      "젊은 층 씬은 얇지만, 중장년 레슨·합주 인프라(문화센터·복지관)는 국내 악기 중 최상위권.",
    ],
    funFacts: ["국내 문화센터·복지관 하모니카 강좌의 사실상 표준 악기 — '레슨 구하기 쉬움' 하나만큼은 희귀 악기들이 부러워할 스펙이에요."],
  },

  // ═══════════════ 20. 생황 ═══════════════
  {
    id: "saenghwang",
    name: "생황",
    aka: ["saenghwang", "笙簧", "생"],
    family: "프리리드·국악 관악기",
    desc: "박통에 17개의 대나무 관을 꽂은 한국 전통 프리리드 관악기. 국악기 중 유일하게 화음을 내는 관악기로, 들숨·날숨 모두 소리가 나요. 최근 창작국악·크로스오버에서 재조명 중.",

    sound: {
      tone: ["신비", "영롱함", "맑음", "숨소리 섞임", "명상적"],
      toneDesc: "파이프오르간을 축소한 듯한, 유리질의 신비로운 화음. 여러 관이 동시에 울리는 소리는 국악기라기보다 우주적이라는 말이 어울려요. 봉황 울음소리에 비유돼 온 소리.",
      volume: 3,
      sustain: 5,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 3,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["화음반주", "멜로디"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "굳은살 없음. 지공을 막는 손가락 감각 훈련 정도.",
      embouchure: 1,
      breath: 2,
      weight: 1,
      weightDesc: "1kg 안팎. 두 손으로 감싸 안고 불어요.",
      posture: "앉아서 가슴 앞에 세워 드는 자세. 부담 적음.",
      postureRisk: [],
      handSize: "관 배열이 촘촘해 손이 아주 크면 지공 막기가 살짝 번거로운 정도. 대체로 무관.",
    },

    cost: {
      entryKRW: [600000, 2000000],
      entryDesc: "국악사 취급 수입품(중국 제작 17관) 기준 60만~200만. 관 수(17/24/36)와 개량 여부에 따라 큰 폭 — 개량 키식·다관 모델은 200만 이상. 시장이 작아 구매 전 국악사 상담 필수.",
      midKRW: [2000000, 6000000],
      running: "리드 조율·관 점검을 전문가에게 맡겨야 하는데 국내 가능 업체가 극소수.",
    },
    practical: {
      portability: 4,
      noise: 3,
      apartmentOk: "리코더~플루트급 음량. 낮 연습 무난, 밤엔 자제.",
      selfLearn: 1,
      lessonKR: 2,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 4,
    },

    vibe: {
      tags: ["이국적", "명상적", "고풍스러운", "컬트적", "우아한"],
      trendy: 2,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["국악·사물놀이"], sub: ["동아시아 전통", "명상·사운드힐링", "뉴에이지"] },

    kinship: {
      easyFrom: ["하모니카(같은 프리리드 원리·들숨날숨 발성)", "단소·소금 등 국악 관악", "피아노(화음 개념)"],
      sameTuning: ["중국 셩(笙)·일본 쇼(笙)와 형제 악기"],
      leadsTo: [],
    },
    ensemble: ["국악 관현악단", "정악 합주(수제천 등)", "창작국악·크로스오버 앙상블"],

    caveats: [
      "온도에 극도로 예민 — 차가운 악기는 리드에 습기가 맺혀 음이 안 나서, 연주 전 품에 안거나 데워 쓰는 게 기본기예요.",
      "조율·수리 가능한 곳이 국내 극소수 — 악기 상태 관리가 취미의 절반.",
      "레슨은 국악과 전공자·소수 연주자 개인 레슨 위주(서울 중심). 독학 교재는 거의 없어요.",
      "정악 문화의 악기라 즉흥·밴드 합주보다는 합주단·앙상블 문맥이 어울려요.",
    ],
    funFacts: ["3천 년 된 이 악기의 원리가 서양으로 건너가 하모니카·아코디언·오르간 리드의 조상이 됐어요 — 프리리드 가족의 큰어른."],
  },

  // ═══════════════ 21. 셩(중국 생황) ═══════════════
  {
    id: "sheng",
    name: "셩",
    aka: ["sheng", "笙", "중국 생황"],
    family: "프리리드·중국 관악기",
    desc: "둥근 바람통에 대나무 관 다발을 꽂은 중국의 생황 — 한국 생황·일본 쇼(笙)의 원형이에요. 들숨·날숨 모두 소리가 나고 관악기인데 화음까지 내며, 현대 중국 민악 오케스트라에선 키 달린 대형 개량 셩으로 진화했어요.",

    sound: {
      tone: ["신비", "영롱함", "맑음", "숨소리 섞임"],
      toneDesc: "유리질의 투명한 화음 덩어리. 생황보다 한층 밝고 또랑또랑해서, 중국 민악 합주에서 화음과 리듬 스타카토를 도맡아요.",
      volume: 3,
      sustain: 5,
    },

    play: {
      pitchFixed: "F0",
      fastPlay: 4,
      chordal: true,
      melodic: true,
      singAlong: false,
      improv: 2,
      roles: ["화음반주", "멜로디"],
    },

    body: {
      saliva: 1,
      callus: 0,
      callusDesc: "굳은살 없음. 지공을 막는 손가락 감각 훈련 정도.",
      embouchure: 1,
      breath: 2,
      weight: 1,
      weightDesc: "17簧 기준 1kg 안팎. 두 손으로 감싸 안고 불어요.",
      posture: "앉아서 가슴 앞에 세워 드는 자세. 부담 적음.",
      postureRisk: [],
      handSize: "관 배열이 촘촘해 손이 아주 크면 살짝 번거로운 정도. 대체로 무관.",
    },

    cost: {
      entryKRW: [250000, 800000],
      entryDesc: "알리·타오바오 직구 기준 학생용 17簧이 25~60만(배송·관세 여유 포함), 해외 소매상은 $200 안팎부터. 국내 재고 유통은 사실상 없음 — 국악사의 생황(60만~)과는 별개 시장.",
      midKRW: [800000, 3000000],
      running: "리드 조율(点簧)·관 점검이 주기적으로 필요한데 국내 가능 업체가 사실상 없음 — 유지 관리가 최대 난관.",
    },
    practical: {
      portability: 4,
      noise: 3,
      apartmentOk: "리코더~플루트급 음량. 낮 연습 무난, 밤엔 자제.",
      selfLearn: 2,
      lessonKR: 1,
      entryBarrier: 3,
      quickReward: 3,
      maintenance: 5,
      lessonDesc: "국내 셩 전문 레슨은 사실상 없음(생황 연주자 소수가 겸하는 정도). 중국어권 인강·교재는 풍부.",
    },

    vibe: {
      tags: ["이국적", "명상적", "고풍스러운", "우아한"],
      trendy: 1,
      rarityKR: 5,
      showOff: 4,
    },

    genres: { main: ["동아시아 전통"], sub: ["명상·사운드힐링", "뉴에이지", "영화·게임 OST"] },

    kinship: {
      easyFrom: ["생황", "하모니카(같은 프리리드 원리·들숨날숨 발성)", "후루쓰"],
      sameTuning: ["생황·일본 쇼(笙)와 형제 악기"],
      leadsTo: ["키식 대형 셩(24·36簧)"],
    },
    ensemble: ["중국 민악 오케스트라", "전통 취주 합주", "크로스오버 앙상블"],

    tracks: [
      { id: "trad", label: "전통 17簧", genres: ["동아시아 전통"], note: "둥근 바람통의 원형 셩. 전통 합주·독주의 표준." },
      { id: "keyed", label: "키식(加键) 대형", genres: ["동아시아 전통", "영화·게임 OST"], note: "키를 단 24·36簧 개량 셩. 민악 오케스트라의 화성 담당." },
    ],

    caveats: [
      "온도에 극도로 예민 — 차가운 악기는 리드에 습기가 맺혀 소리가 안 나서, 연주 전 데워 쓰는 게 기본기예요.",
      "국내 조율·수리 인프라가 사실상 0 — 생황보다도 사후 관리가 막혀, 직구 개체의 조율 상태 복불복까지 겹칩니다.",
      "국내 레슨이 사실상 없어 중국어권 인강 의존 — 독학 각오가 필요한 악기.",
    ],
    funFacts: ["18세기 선교사가 유럽에 가져간 셩이 하모니카·아코디언·리드오르간 발명의 씨앗이 됐어요", "전국시대 증후을묘(기원전 433년)에서 2400년 전 셩이 실물로 출토됐습니다"],
  },

];

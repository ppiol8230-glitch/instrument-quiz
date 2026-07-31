// English overlay — percussion, sound healing & electronic batch. Keys match data ids 1:1.
const EN_INST_PERC_HEALING_ELECTRONIC = {

  // ============ Drums & unpitched percussion (13) ============

  drum_set: {
    name: "Drum set",
    family: "Percussion · drum kit",
    toneDesc: "Everything from the kick's heavy thump to the bright crash of the cymbals, all in one body. Played well, the drums alone keep a whole song rolling.",
    caveats: [
      "The one popular instrument you can't play at home — finding a place to practice comes before any skill you build",
      "Self-teaching works (the YouTube resources are world-class), but get a few lessons early for grip and posture — bad form quietly eats your wrists",
      "Electronic and acoustic kits feel different under the stick, so if you've only played electronic, expect an adjustment period on a real kit",
    ],
    tracks: {
      rock: { label: "Rock & metal", note: "Power and precision. Grows into double pedal and blast beats." },
      jazz: { label: "Jazz", note: "Swing built on brushes and ride cymbal. Dynamics and interplay are everything." },
      funk: { label: "Funk & groove", note: "Ghost notes and the pocket. Play less, make it move deeper." },
    },
    variants: {
      edrum: { label: "Electronic drums", note: "Practice in headphones — the standard answer for apartment self-study. About ₩400,000–1M. Kick pedal vibration still travels downstairs, so add an isolation mat (₩20,000–100,000)" },
      pad: { label: "Practice pad", note: "₩20,000–50,000. A pad alone covers 90% of stick control and rudiments. The answer for days you can't get to a studio" },
    },
  },

  finger_drum: {
    name: "Finger drumming",
    family: "Percussion · electronic pads",
    toneDesc: "Built-in acoustic and electronic kit sounds. Your finger velocity carries all the way down to ghost notes.",
    caveats: [
      "It only half-transfers to a real kit — rhythm sense and song forms carry over, but limb coordination is a separate skill",
      "There is essentially no lesson market. Teaching yourself from YouTube (mostly English-language) is the default route",
      "Some people see it as gear rather than an instrument — how impressive it looks on stage rides entirely on your playing",
    ],
  },

  sample_pad: {
    name: "Sample pad",
    family: "Percussion · electronic pads",
    toneDesc: "Load any sample and the palette is endless. Live, it handles sequences, sound effects and hybrid drum sounds.",
    caveats: [
      "More an add-on for a drummer or band than a standalone instrument — as a first instrument, finger drumming is far more self-contained",
      "Managing samples and setting up sounds means computer work comes with the package",
    ],
  },

  cajon: {
    name: "Cajon",
    family: "Percussion · box drum",
    toneDesc: "The lower panel thumps like a kick, the top corners snap like a snare. One wooden box gives you the whole skeleton of a drum kit.",
    caveats: [
      "It sounds decent from day one, but the distance to a genuinely good cajon (ghost notes, dynamics) is longer than it looks",
      "Until you can separate the bass tone from the slap tone it stays flat — that split is the first gate",
    ],
  },

  djembe: {
    name: "Djembe",
    family: "Percussion · hand drum",
    toneDesc: "Round bass in the center, a bursting slap at the rim. A well-struck slap cracks across the room like a gunshot.",
    caveats: [
      "Not an instrument you play alone but one you play together — without a drum circle or group to join, half the fun is missing",
      "Your hands will hurt quite a bit before the slap finally rings out properly",
    ],
  },

  conga: {
    name: "Conga",
    family: "Percussion · Latin hand drum",
    toneDesc: "Open tones sing round and warm, slaps come in spicy. Once a tumbao pattern settles in, the whole room starts to sway.",
    caveats: [
      "Latin percussion lessons and communities in Korea are small and clustered around the Seoul area",
      "Bulkiest and heaviest of the hand drums — plan how you'll move them before you buy",
    ],
  },

  bongo: {
    name: "Bongos",
    family: "Percussion · Latin hand drum",
    toneDesc: "Bright, chattering little taps. Lay down a martillo pattern and they keep gossiping away on top of the music.",
    caveats: ["They're a supporting voice, so playing alone can feel thin — they shine when there's music and people to play with"],
  },

  darbuka: {
    name: "Darbuka (doumbek)",
    family: "Percussion · Middle Eastern hand drum",
    toneDesc: "A deep 'doum' in the center against a ringing 'tek' at the rim, sharply split. Add finger rolls and it flutters like a sewing machine.",
    caveats: [
      "The few teachers in Korea cluster around the bellydance scene — self-teaching means leaning on YouTube videos by Turkish and Egyptian players",
      "Turkish and Egyptian techniques differ, so pick one side early on",
    ],
  },

  frame_drum: {
    name: "Frame drum",
    family: "Percussion · frame drum",
    toneDesc: "A shallow shell that somehow gives a deep, round bass. Add fingertip trills and the texture turns into gentle waves.",
    caveats: ["Hardly anyone in Korea even knows the instrument — don't count on a community or lessons, come ready to teach yourself"],
  },

  pandeiro: {
    name: "Pandeiro",
    family: "Percussion · frame drum (Brazil)",
    toneDesc: "Thumb bass, fingertip highs and the shimmer of the jingles, all cycling inside one palm. The entire samba groove lives in there.",
    caveats: [
      "It only looks like a tambourine; the technique is nothing alike — you strike it, you don't shake it",
      "Korea's samba and choro scene is tiny. Self-teaching means Brazilian YouTube",
    ],
  },

  tabla: {
    name: "Tabla",
    family: "Percussion · Indian classical drum",
    toneDesc: "The right-hand dayan sings 'na, tin, tin' with real pitch, while wrist pressure bends the left-hand bayan into a swooping low moan. It feels like a drum talking.",
    caveats: [
      "The steepest entry of them all — spending weeks on a single basic stroke ('na') is normal. Skip it if you want quick rewards",
      "Formal lessons in Korea barely exist. Video lessons with an Indian guru, or English-language courses, are the realistic route",
      "It's an oral tradition built on reciting bols, not on sheet music — for some people that's exactly the appeal",
    ],
  },

  bodhran: {
    name: "Bodhran",
    family: "Percussion · frame drum (Irish)",
    toneDesc: "A deep, galloping pulse that rides over jigs and reels like hoofbeats. The magic is the back hand pressing the skin to bend the pitch up and down.",
    caveats: [
      "Dull on its own — it comes alive at an Irish session (rare in Korea, though Seoul has them)",
      "Session etiquette is blunt: a bodhran with shaky time isn't welcome, so lock the jig and reel rhythms into your body first",
    ],
  },

  janggu: {
    name: "Janggu",
    family: "Percussion · gugak rhythm",
    toneDesc: "On this Korean hourglass drum the low left head and the clattering right head hold a conversation. Driving into a fast hwimori is the biggest rush in Korean traditional music.",
    caveats: [
      "You learn it in a troupe rather than alone — pungmul clubs and community culture centers are the standard route, which actually makes it easy to start",
      "The kkwaenggwari gong is brutally loud (bring earplugs), so home practice is out of the question — think of it as a troupe-only instrument",
    ],
    tracks: {
      samul: { label: "Samulnori", note: "A four-instrument ensemble: janggu, kkwaenggwari, buk and jing. Classes usually start on janggu, then rotate through the rest. The kkwaenggwari is the leader's instrument, loudest and most commanding." },
      solo: { label: "Rhythm & accompaniment", note: "Accompanying folk songs and pansori, plus solo seoljanggu. The track for digging deep into the rhythm vocabulary." },
    },
  },

  // ============ Meditation & sound healing (7) ============

  tibetan_bowl: {
    name: "Tibetan singing bowl",
    family: "Meditation · sound healing",
    toneDesc: "A thick cloud of overtones that hums straight into your body. Rub the rim and the sound lifts into the air and keeps singing.",
    caveats: [
      "Not the kind of instrument where your playing keeps improving — if you want musical achievement, pair it with something else",
      "The healing claims have limited scientific backing — the honest framing is a relaxation and meditation aid",
      "Most Korean courses are 'singing bowl therapy certifications' (several hundred thousand won) — a different animal from an instrument lesson",
    ],
  },

  crystal_bowl: {
    name: "Crystal singing bowl",
    family: "Meditation · sound healing",
    toneDesc: "Unlike the overtone-rich Tibetan bowl, a single note holds glass-clear and steady. Line up several and you get a bath of harmony.",
    caveats: [
      "Doing it properly (a seven-chakra set) runs from the high ₩1M range into several million — start with one bowl and add as you go",
      "They break. They really do break — moving house or hauling them around is the biggest risk",
      "Healing claims have limited evidence — treat it as a relaxation tool",
    ],
  },

  gong: {
    name: "Gong",
    family: "Meditation · sound healing",
    toneDesc: "Struck softly it hums like deep space; struck hard the pressure rolls over you like surf. The sound doesn't so much ring as arrive.",
    caveats: [
      "Not something to keep at home — it's really for teachers and studio owners with a room to use",
      "A gong good enough to run a real gong bath class means a few million won up front",
    ],
  },

  koshi_chime: {
    name: "Koshi chimes & wind chimes",
    family: "Meditation · sound healing",
    toneDesc: "Short arpeggios like a sprinkle of stardust. Koshi comes in four elemental tunings (Terra, Aqua, Aria, Ignis), each a different chord.",
    caveats: ["More a sounding object than an instrument — if you actually want to play something, this alone won't scratch the itch"],
  },

  rainstick: {
    name: "Rainstick",
    family: "Meditation · sound healing",
    toneDesc: "A steady shhhhh of falling rain. The angle you tilt it at sets how hard it's raining.",
    caveats: ["A pure sound-effect tool with almost no playing to it — hard to sustain as a hobby on its own, so think of it as one piece of a healing kit"],
  },

  ocean_drum: {
    name: "Ocean drum",
    family: "Meditation · sound healing",
    toneDesc: "Waves rolling in and drawing back out. Handled well it gives you every face of the sea, from ripples to the edge of a storm.",
    caveats: ["Like the rainstick, a session tool more than a hobby on its own — though steering the waves has a surprisingly satisfying feel to it"],
  },

  tuning_fork: {
    name: "Tuning forks (sound therapy)",
    family: "Meditation · sound healing",
    toneDesc: "A thin, clean sustained tone, close to a pure sine. With this tool the vibration, not the sound, is the substance.",
    caveats: [
      "A therapy tool, not an instrument — there's no sense of making music here",
      "The 'frequency healing' marketing (528Hz and friends) has no scientific basis — take it purely as a relaxation and focus aid",
    ],
  },

  // ============ Electronic & novelty (10) ============

  launchpad: {
    name: "Launchpad & MIDI controller",
    family: "Electronic · controller",
    toneDesc: "The software makes the sound — synths, drums, chopped vocals, anything at all. Loop performances with a light show are the signature move.",
    caveats: [
      "Learning your DAW takes up more time than practicing the instrument — if you dislike working at a computer, this isn't for you",
      "Buying the gear feels like music will follow, but the real gate is the patience to finish a track",
    ],
  },

  ewi: {
    name: "EWI / Aerophone",
    family: "Electronic · wind controller",
    toneDesc: "Built-in sounds turn it into a sax, a flute, a synth lead, whatever you like. Breath shapes the phrase exactly as it would on a real wind instrument.",
    caveats: [
      "The breath sensor responds a little differently from a real horn, so even sax players need an adjustment period",
      "There's a ceiling to the 'electronic sax' sound — if you want the acoustic instrument's real voice, you'll end up buying the real thing",
      "The lesson market is basically sax teachers moonlighting — dedicated EWI lessons are rare",
    ],
  },

  theremin: {
    name: "Theremin",
    family: "Electronic · touchless",
    toneDesc: "A wailing, ghostly pure tone. Played well it sings like a voice somewhere between a cello and a soprano.",
    caveats: [
      "Regularly named the hardest instrument in the world — with no reference points at all, pitch comes only from body memory and your ear",
      "Perfect pitch, or very strong relative pitch, is practically a prerequisite — with a weak ear you'll be making ghost noises forever",
      "Lessons and community in Korea are essentially nonexistent, and even English self-study material is thin",
    ],
  },

  ondes_martenot: {
    name: "Ondes Martenot",
    family: "Electronic · early electronic instrument",
    toneDesc: "A more controlled, almost prayerful electronic voice compared to the theremin. Its dedicated speakers, including the string-resonating palme, are part of the instrument.",
    caveats: [
      "Realistically an instrument you cannot buy — outside of studying it in France, there's almost no way to get near one",
      "Read this entry as a window onto a world that exists — the realistic stand-ins for the same mood are the theremin and synthesizers",
    ],
  },

  otamatone: {
    name: "Otamatone",
    family: "Electronic · toy instrument",
    toneDesc: "A ridiculous electronic whine of a voice. And yet in expert hands it genuinely sings, with plenty of evidence on YouTube.",
    caveats: [
      "Finding the notes is far harder than it looks — 'it's a toy, why can't I do this?' is the universal review",
      "Not for serious musical achievement — unbeatable for laughs and cover videos",
    ],
  },

  jaw_harp: {
    name: "Jaw harp",
    family: "Novelty · mouth resonance",
    toneDesc: "A twanging, wah-wah psychedelia of overtones. Your mouth becomes both the speaker and the EQ.",
    caveats: [
      "Skip it if your teeth are fragile or you're in braces — you rest a metal frame against them",
      "Almost nobody in Korea knows it — you have to enjoy the 'that's an instrument?' reaction",
    ],
  },

  kazoo: {
    name: "Kazoo",
    family: "Novelty · membranophone",
    toneDesc: "A buzzy toy-trumpet honk. Funny, sure, but in the early jazz era this was a real band instrument.",
    caveats: [
      "Sing off-key and it broadcasts off-key, faithfully — it really is a singing-ability amplifier",
      "Accept that nobody is going to treat it as a real instrument",
    ],
  },

  glass_harp: {
    name: "Glass harp",
    family: "Novelty · friction-sounded",
    toneDesc: "A thin, transparent sustained tone that seems to drift down from somewhere above. With several glasses the harmony layers like glass mist.",
    caveats: [
      "You retune with water before every session — temperature and evaporation drift the pitch slightly (a tuner app is enough)",
      "Using it on stage means building your own rig to hold the glasses steady, and Korean-language information barely exists",
    ],
  },

  musical_saw: {
    name: "Musical saw",
    family: "Novelty · friction-sounded",
    toneDesc: "A sobbing pure tone somewhere between a female voice and a theremin. The vibrato comes from a tremble in your knee and wrist.",
    caveats: [
      "Hard for the same reason as the theremin — no reference points, so pitch lives in your ear and muscle memory. An instrument for people with a good ear",
      "You can count Korean players and resources on one hand. In practice it's English-language YouTube and self-study",
      "It's an actual saw, so mind the blade when storing and carrying it",
    ],
  },

  hand_percussion: {
    name: "Hand percussion set",
    family: "Percussion · small hand percussion",
    toneDesc: "Chk-chk from the shaker, a shimmer from the tambourine, a crack from the claves — small sounds that bring a track's arms and legs to life.",
    caveats: [
      "Not a lead instrument — this position only works when there's music and people to join",
      "It looks easy, but placing shaker sixteenths exactly on the beat takes real training (a standard test in recording sessions)",
    ],
  },

  muyu: {
    name: "Muyu (wooden fish)",
    family: "Meditation · sound healing",
    toneDesc: "Tok, tok — a low, round strike from a hollowed block of wood. String a few hits together and the room settles down all by itself.",
    caveats: [
      "Not an instrument where 'playing skill' grows — a resonance-management tool in the same vein as the singing bowl",
      "It's a Buddhist ritual object, so context deserves respect — some people are uncomfortable with playful use",
      "Effectively nowhere teaches it as an instrument (it's passed down inside temple culture) — then again, there isn't much to learn",
    ],
    variants: {
      emuyu: { label: "Electronic muyu (e-wooden fish)", note: "Apps and toys that stack 'merit +1' with every tap. A meme, but as a stress-relief tool it's completely sincere." },
    },
  },

};

const EN_GUIDE_PERC_HEALING_ELECTRONIC = {

  // ======== Drums & unpitched percussion (13) ========

  drum_set: {
    how: "Oddly enough, the standard way to start drums is without a drum kit. ₩20,000 for sticks plus ₩30,000 for a practice pad and you're open for business! Learn basic strokes and rudiments (doubles, paradiddles) on the pad, then book an hourly rehearsal studio (₩5,000–10,000 an hour) once or twice a week to sit behind a real kit — that's the standard route in Korea. Make friends with the metronome on day one. On drums, a rock-steady 8-beat is 90% of the skill, not flashy fills.",
    lesson: "Lessons recommended — the self-study resources on YouTube are world-class, but get a coach for grip and posture at least for the first few sessions. Bad form eats your wrists invisibly, then hands you the bill one day. Once your basic form is set, switching to self-study goes fine.",
    buy: "The starter three-pack: sticks (5A size, ₩10,000–20,000) + practice pad (₩20,000–50,000) + metronome (free app). If you want a kit at home, that means electronic drums, and entry models from Alesis, Yamaha and Roland run ₩400,000–1M. Even electronic kits send kick pedal vibration straight downstairs, so an isolation mat (₩20,000–100,000) is a must! Impulse-buying an acoustic kit is the classic landmine — secure a place to put it and a place to play it first.",
    firstGoal: "Hold a basic 8-beat at 80 BPM against a metronome for three minutes without falling apart. Once you can, you're qualified to debut at a band rehearsal. Drummer shortages are universal, so even this much brings invitations.",
  },

  finger_drum: {
    how: "Pad on the desk, headphones in, and you're ready. Start by handing kick (thumb), snare and hi-hat to different fingers. Search 'finger drumming basics' on YouTube and English-language lessons pour out, and you don't need to read drum notation — just follow the finger order. Playing along to songs you love is the best practice there is.",
    lesson: "Self-study is fine — there's essentially no finger drumming lesson market in Korea, so teaching yourself is the default. YouTube lessons plus copying cover videos will take you all the way. Just settle on a sensible finger assignment from the start; it saves you later.",
    buy: "Yamaha's FGDP series is the standard here. The FGDP-30 (the standard model, high ₩200,000s to ₩300,000s) has speaker and batteries built in, so extra spending is zero! The higher FGDP-50 (around ₩400,000) adds pads and editing features. Prices swing with the exchange rate, so check before you buy. The landmine is accidentally buying a plain 'MIDI pad controller' — the FGDP type is what makes sound on its own with no computer.",
    firstGoal: "Play the drum part of one song you love from start to finish with your fingers. Film it and post it, and you'll get 'wait, what is that?' comments along with a surprising amount of attention.",
  },

  sample_pad: {
    how: "It's an electronic pad you hit with sticks. If you've played drums you'll adapt instantly; if you haven't, just start with a few pads. Play with the built-in samples first — the real fun starts the moment you load your own sounds (effects, loops) from a computer. In a band or a worship team, you're the 'oh, that sound was you?' position.",
    lesson: "Self-study is fine — dedicated lessons barely exist, and the product manual plus YouTube setup tutorials cover it. If stick control starts to bug you, add some basic drum videos.",
    buy: "Lightly: Alesis SamplePad types at ₩150,000–300,000, the Roland SPD::ONE single pad around ₩200,000. Going properly, the Roland SPD-SX line is ₩900,000 and up. Sticks and stand are separate. The landmine is an ultra-cheap pad that won't let you load your own samples — always check for sample import support. If you're weighing it as a first instrument, finger drumming is more self-contained and often more satisfying.",
    firstGoal: "Build your own kit with eight samples you loaded yourself and play through a whole song with it. If you're in a band, the moment you fire off an intro effect live, you become the team's secret weapon.",
  },

  cajon: {
    how: "Sitting down is the initiation. Hit the lower panel for the kick (thump), the top corner for the snare (snap) — separating those two sounds is the entire first lesson. Put on one 'cajon basics' video, follow along from an 8-beat, and you'll be accompanying songs on day one. Best of all, if you have a friend who plays guitar you can jam immediately.",
    lesson: "Self-study is fine — it makes a decent sound from day one, so getting in on your own is very gentle. When you get curious about 'good' cajon playing (ghost notes, dynamics), jump into a one-day class or an online course.",
    buy: "Entry models run ₩50,000–100,000 (Korean workshops and Chinese-made), branded ones like Schlagwerk and Meinl ₩200,000–500,000. Percussion specialty shops (Mento Music, Percussion Center) also stock Korean workshop cajons such as A Tempo, and if a shop lets you try one, sit down and pick by ear. The landmine is the ultra-cheap box with plywood so thick the snare sound goes muddy — check video reviews for the sound first.",
    firstGoal: "Play bass tone and slap tone so distinctly you could tell them apart with your eyes closed, plus one full song of 8-beat behind a guitar. Joining a busking team happens sooner than you'd think.",
  },

  djembe: {
    how: "Splitting three sounds — bass (center), tone (edge) and slap (edge, flicked) — is the whole of djembe life. At first they all sound the same and you'll wonder if your hands are broken; that's normal. Djembe is learned in a drum circle rather than alone, so look for a local djembe group or a one-day class. The moment you play with others, the fun multiplies by ten.",
    lesson: "Lessons recommended — the slap is the classic technique that, learned wrong on your own, leaves your hands sore and silent. A few corrections at a workshop or a club is the shortcut. After that, showing up to the circle is the lesson.",
    buy: "Small synthetic-head drums run ₩50,000–150,000; full-size solid wood with natural skin is ₩200,000–600,000. Percussion specialty shops and world-instrument dealers carry them. The landmine is the decorative souvenir djembe — thin skin and purely ornamental rope means no sound. A synthetic head like Remo is easier to maintain at the start.",
    firstGoal: "Get bass, tone and slap cleanly separated, then hold down one basic rhythm in a drum circle for thirty minutes. Your palms will sting but your heart runs hot.",
  },

  conga: {
    how: "You usually set up two drums and learn open tone, slap and heel-toe. The first gate is the tumbao, the heartbeat of Latin music — get that one pattern into your body and you can accompany any salsa track. Start with 'conga tumbao basics' on YouTube, and know that listening to a lot of Latin music is more than half the work.",
    lesson: "Lessons recommended — hand shape and striking point decide the sound, and that's hard to correct on your own. Latin percussion teaching in Korea is small and Seoul-centered, but you'll find teachers around jazz academies and Latin dance communities. If you can't find one, an online course substitutes fine.",
    buy: "An entry two-drum set (LP Aspire, Meinl and the like) runs ₩400,000–800,000. Single drums exist, but the consensus is that conga only tastes right from two up. They're bulky and heavy, so work out where they'll live and how you'll move them (a car) first. The landmine is a used pair with no stand — buying one separately costs more than the drums did.",
    firstGoal: "Repeat the tumbao steadily against a metronome. If you can lay it over a salsa track without drifting, you pass — and you've got a ticket into a Latin band jam.",
  },

  bongo: {
    how: "Tuck them between your knees and tap with your fingertips — the lightest way into Latin percussion. The first course is the basic 'martillo' pattern (it means hammer; crisp, even eighth notes). They hurt your hands less than congas and neighbors tolerate them better, so they're the best taste of Latin rhythm.",
    lesson: "Self-study is fine — YouTube 'bongo martillo' lessons are plenty to start with. When the grammar of Latin rhythm (clave) starts to interest you, expand into an online course or conga lessons.",
    buy: "Entry models ₩50,000–150,000, LP and Meinl brand tier ₩200,000–400,000. They're the only Latin drum that fits in a backpack, which makes them a great travel companion. The landmine is the toy-grade pair with no tuning hardware — check that tuning lugs are there.",
    firstGoal: "Get martillo into your hands and lay it over Latin and pop tracks you like. Bongos on your knees already make a picture, so accompanying one song at a gathering is your first stage.",
  },

  darbuka: {
    how: "Start with two sounds: 'doum' (deep, center) and 'tek' (bright, rim). Just repeating doum-tek-tek-doum-tek is already a Middle Eastern rhythm (malfuf). Turkish technique (tucked at your side, finger snaps) and Egyptian technique (laid on the knee, mostly palm) differ, so pick one early — YouTube has more Turkish material.",
    lesson: "Self-study is fine — the handful of Korean teachers sit around the bellydance scene, so teaching yourself is the default. YouTube lessons from Turkish and Egyptian players are excellent and easy to follow. Give the split-finger roll a few weeks and don't rush it.",
    buy: "A Turkish aluminum starter runs ₩50,000–150,000 — Korean stock is thin, so ordering direct from Turkish sellers is the common route. Egyptian and mosaic-inlaid upper models are ₩200,000–500,000. The landmine is the ceramic souvenir darbuka — pretty, but it breaks and the sound is dull. A synthetic head on a metal shell is the easy-care standard.",
    firstGoal: "Learn two basic rhythms like malfuf and baladi, and start imitating the split-finger roll. Once the roll works, you've got a party trick that draws an 'ooh' anywhere you play.",
  },

  frame_drum: {
    how: "Hold it up at your knee or in front of your chest and start by splitting doum (center) and ka (rim) with your fingertips. Fitting for one of humanity's oldest drums, the technique is simple and the depth is bottomless. Play it slowly and meditatively, or go ornate with Middle Eastern technique (trills, snaps). It's on the quiet side, which makes home practice easy.",
    lesson: "Self-study is fine — hardly anyone in Korea knows the instrument, so it's easier to let go of the idea of lessons. Instead, overseas players (David Kuckhermann and others) have excellent online courses and YouTube is well stocked. Being ready to teach yourself is the ticket in.",
    buy: "A Remo synthetic-head starter at ₩50,000–150,000 is easy to maintain and perfectly good. Handmade natural-skin and tunable drums run ₩200,000–600,000, mostly ordered from abroad. The landmine is a wall-decoration drum — if you want sound, pick a playing brand like Remo. Natural skin is sensitive to humidity, so beginners should start synthetic.",
    firstGoal: "Separate doum and ka, then roll one basic Middle Eastern rhythm off your fingertips. Play it alone with the lights off at night and you'll understand why this drum survived thousands of years.",
  },

  pandeiro: {
    how: "It looks like a tambourine, but it's an instrument you strike, not shake! Start with the basic samba pattern that cycles thumb (low), fingertips (high) and palm (jingles). At first your hand ties itself in knots and you laugh, and then one day samba just starts rolling around inside your palm. That moment is genuinely a thrill.",
    lesson: "Self-study is fine — Korea's samba and choro scene is tiny, so self-teaching is the default. YouTube lessons from Brazilian players are the textbook. Your holding hand's wrist tires sooner than you'd expect, so practice short and often rather than pushing through.",
    buy: "Entry models ₩50,000–150,000; Brazilian brands (Contemporanea and others) come to ₩200,000–400,000 ordered from abroad. The landmine is a plain tambourine sold as a pandeiro — tuning lugs and dry-sounding jingles are what make it a pandeiro. A nylon head is easier for beginners to maintain.",
    firstGoal: "Hold the basic samba pattern for one minute without breaking. Lay it over a Brazilian track without drifting and you've got Rio in your hand.",
  },

  tabla: {
    how: "It starts by assigning named sounds ('na', 'tin', 'ge' and more) to individual fingers — this is the graduate school of percussion. The oral tradition has you reciting the rhythm (bols) before your hands play it, so the way you learn is itself an exotic experience. Spending weeks on one basic stroke is normal, so leave the word 'fast' at home.",
    lesson: "Lessons essential — fingertip angle and striking point change the sound by the millimeter, so self-study is effectively out. Formal teaching in Korea is nearly nonexistent, so video lessons with an Indian guru or English-language online courses are the realistic route. Clear that hurdle and a deep world opens up.",
    buy: "The real thing runs ₩300,000–800,000 ordered direct from an Indian workshop. Korean stock is rare and quality varies wildly. The landmine is a souvenir tabla — the head (the syahi) is the entire sound, and souvenirs can't even hold a tuning. Check a workshop's reputation on tabla communities (overseas forums) before buying.",
    firstGoal: "Produce the basic bols 'na', 'tin' and 'ge' clearly, then play a teental cycle while reciting it aloud. That's the first moment the drum starts talking.",
  },

  bodhran: {
    how: "A tipper (double-ended stick) in one hand, the other hand flat against the back of the skin — that back hand steering the pitch is the bodhran's magic. Start by trotting jig (6/8) and reel (4/4) rhythms along to Irish tracks. Listening to a lot of Irish music is half the practice. The Guinness is optional.",
    lesson: "Self-study is fine — there's almost nothing in Korea, and overseas online courses (Irish music sites like OAIM) plus YouTube will get you there. Once it sticks a bit, go to an Irish session in Seoul. The session is the best teacher (though a bodhran with shaky time gets glares, so timing first!).",
    buy: "Entry drums ₩100,000–200,000 — Korean stock is thin, so ordering direct from an Irish workshop (McNeela and others) is the standard route. Tunable handmade drums are ₩300,000–700,000. The landmine is the painted decorative bodhran from a souvenir shop — it bounces brightly and has no depth. Look at whether it's tunable and at the quality of the skin.",
    firstGoal: "Play jig and reel strokes distinctly and ride three Irish tracks in a row. After that, your next goal is debuting from the corner seat at a pub session.",
  },

  janggu: {
    how: "Learn the division of labor between the left-hand gungchae mallet (deong) and the right-hand yeolchae stick (ttak), then work the rhythms into your body in order: gutgeori, then jajinmori, then hwimori. The real route for janggu isn't alone in your room, it's joining a troupe — community culture centers and district offices all over Korea run pungmul classes, and they're astonishingly cheap (a few tens of thousands of won a month). Of all traditional instruments, this is the one where finding a place to learn is the least of your worries.",
    lesson: "Lessons essential — janggu rhythm is a whole culture, breathing and shouted calls included, so video alone gives you half of it. Happily, access is excellent: culture center pungmul classes, university clubs and local troupes are all teachers. Sign up and a stage performance often comes bundled in.",
    buy: "Practice drums ₩150,000–300,000; performance-grade whole-hide drums ₩500,000 and up — any gugak (traditional music) shop will have them, and plenty are online. Many classes lend you an instrument, so starting with your body and buying later is a smart move. The landmine is the mini souvenir janggu — that's interior decor.",
    firstGoal: "Play gutgeori without wobbling and hand off into jajinmori. The final boss is the catharsis of driving hwimori together inside a troupe — only people who've played it know.",
  },

  // ======== Meditation & sound healing (7) ========

  tibetan_bowl: {
    how: "There are only two things: striking the rim with the mallet, and rubbing the rim to lift the sound (the rim technique). The rub is all about steady speed and pressure, and ten minutes usually gets you your first success. After that it's less practice than use — put it in your meditation routine, or use it instead of an alarm clock. It's a kind instrument where the first sound is already the finished sound.",
    lesson: "Self-study is fine — ten minutes of YouTube covers the technique itself. Most Korean courses are 'singing bowl therapy certifications' (several hundred thousand won), which are for people who want to run classes rather than instrument lessons, so if this is a hobby, keep your wallet closed.",
    buy: "The key distinction: machine-formed (smooth, even tone, ₩30,000–100,000) versus Nepali hand-hammered (hammer marks, rich overtones, ₩100,000–300,000). If you want one bowl for yourself, a handmade medium (15–20cm across) satisfies most people. The landmine is mystical marketing premiums like 'full moon bowls' and 'planetary frequencies' — listen on video and choose with your ears.",
    firstGoal: "Keep the rim technique singing unbroken for thirty seconds or more. Once you can, build a three-minute bowl routine before bed — your body will notice the effect before science does.",
  },

  crystal_bowl: {
    how: "Set the bowl on a mat, circle the rim with a suede mallet, and a glass-clear tone fills the room. The technical barrier is basically zero — what matters is which pitch of bowl you pick and how you combine them. Start with one bowl, put it into your meditation or yoga routine, and add pitches one at a time if you like it.",
    lesson: "Self-study is fine — you'll have the technique immediately. If you ever want to run sound bath classes, that's when to look into a therapy program; at the hobby stage, YouTube sound bath videos make good study material.",
    buy: "A single frosted 8–10 inch bowl runs ₩250,000–270,000 in Korea. A proper seven-chakra set is high ₩1M to several million, so yoga studios and meditation groups genuinely do split the cost as a group purchase. The landmine is shipping damage — check whether a carrying case is included and what the breakage policy is. The real running cost of this instrument is breakage.",
    firstGoal: "Build a ten-minute sound meditation routine with a single bowl. When you play it for a friend lying down and they say 'I almost fell asleep', you've succeeded.",
  },

  gong: {
    how: "Start by practicing a mallet path from the center outward, going from quiet to loud. A gong isn't so much struck as awakened — the technique is stacking small vibrations into a wave. Honestly, it's not something to keep at home; it's an instrument for people who run a yoga or meditation space, or can borrow one.",
    lesson: "Self-study is fine — YouTube covers basic handling, and if leading sound baths is the goal, watch for gong bath workshops in Korea and abroad (they run occasionally). The community is small, so information circulates through healing and yoga networks.",
    buy: "Small (20-inch class) unbranded and Chinese-made gongs are ₩200,000–600,000 plus a stand; large branded ones like Paiste run ₩1M–3M and up. Korean stock is thin, so it's direct orders and healing shops. The landmine is forgetting the stand — a gong isn't an instrument until it's hanging. A setup good enough for a gong bath class is several million won up front, which is why yoga studios often invest together.",
    firstGoal: "Land a crescendo roll that lifts the volume smoothly up from zero. The moment the vibration rolls through your whole body, you'll know 'sound massage' wasn't an exaggeration.",
  },

  koshi_chime: {
    how: "You shake it. That's it, sincerely. If there's a technique, it's the aesthetics of when to shake — waking someone from savasana in yoga, signaling the start and end of a meditation, settling a child to sleep. Choosing which of the four elemental tunings (Terra, Aqua, Aria, Ignis) suits your taste is honestly the biggest decision involved.",
    lesson: "Self-study is fine — the concept of a lesson doesn't exist here. This might be the easiest 'instrument' in the world to learn.",
    buy: "Genuine Koshi chimes are ₩80,000–120,000 each — that price is because they're handmade in a workshop in the French Pyrenees. Similar wind chimes start from ₩20,000–50,000, but the tuning precision is different. The landmine is cheap 'Koshi style' copies — buy from an authorized importer and check for the engraved element name. Buying two and combining the chords is the well-known shortcut.",
    firstGoal: "Pick your own 'chime moment' and build it into a daily routine. Upgrading your meditation app's bell to a real object — that's what this thing is for.",
  },

  rainstick: {
    how: "Tip it and rain falls. The angle is the intensity of the rain, the timing of the flip is its rhythm. It's used as meditation background, for storytelling with kids and as seasoning in a sound bath, and it turns out to be a surprisingly handy transition effect in home recording. Think of it less as an instrument and more as weather you can hold.",
    lesson: "Self-study is fine — you'll have mastered it before the explanation is over.",
    buy: "Small ones ₩10,000–30,000, large or handmade (cactus wood) ₩40,000–60,000. The longer it is, the longer the rain falls. There isn't really a landmine, though ultra-cheap ones with sloppy seams can leak beads, so a glance at the reviews is plenty.",
    firstGoal: "Lay real rain over your meditation or yoga playlist. Adding it as the third member of the healing kit (singing bowl, chime, rainstick) is the standard course.",
  },

  ocean_drum: {
    how: "Hold it flat and tilt slowly to roll the beads, and the waves come in. From ripples to swells to the edge of a storm, controlling the tilt is the performance. There's a subtle craft to it, so among the healing props this one has the most actual playing pleasure. Flip it over and you can use it like a frame drum too.",
    lesson: "Self-study is fine — ten minutes and you're the sea. It's widely used in music therapy, so if that interests you, music therapy books have plenty on how to use it.",
    buy: "Small ones ₩30,000–60,000; genuine Remo and larger sizes ₩100,000–150,000. The Remo ocean drum is effectively the standard, and the version with the fish design is popular as a gift for kids. The landmine is a cheap one whose beads rattle — if you hear beads rolling instead of waves, it failed.",
    firstGoal: "Master the 'wave crescendo', moving smoothly from calm ripples to a storm. If a friend with their eyes closed asks whether you're at the beach, that's full marks.",
  },

  tuning_fork: {
    how: "Strike the fork on an activator (a rubber puck) or your knee, and for weighted types press the stem against your body (collarbone, around a joint) to transmit the vibration. The vibration, not the sound, is the substance, so it's less playing than applying. Starting with a single 128Hz weighted fork and building a self-relaxation routine is the standard course.",
    lesson: "Self-study is fine — a few videos cover the usage. That said, frequency marketing along the lines of '528Hz heals your DNA' has no scientific basis, so taking it purely as a relaxation and focus aid is better for your mental health.",
    buy: "Single forks ₩20,000–60,000 (a 128Hz weighted one is the standard entry), frequency sets ₩100,000–300,000. The landmines run both ways: ultra-cheap forks whose poor aluminum lets the vibration die immediately, and expensive sets sold on mystical claims. Remember it isn't a medical device and it stays a lovely tool.",
    firstGoal: "Build a five-minute self-relaxation routine with a 128Hz fork. Pairing it with massage or meditation for a daily 'vibration break' is this tool's quiet complete form.",
  },

  // ======== Electronic & novelty (10) ========

  launchpad: {
    how: "Plug it into your computer by USB, install a DAW (most bundle a lite version of Ableton Live), and you're started. Step one is imitating a light show with someone else's project file — download one of the countless cover projects on YouTube and just pressing buttons is already plenty of fun. The real journey opens after that, when you start stacking your own loops and samples into a track.",
    lesson: "Self-study is fine — the YouTube tutorial ecosystem here is among the strongest in the world. What trips you up won't be the instrument but the DAW, and that's all searchable too. Just know in advance that if you hate working at a computer, this hobby may not fit.",
    buy: "The Novation Launchpad Mini MK3 at around ₩130,000 is the entry standard, Launchpad X about ₩250,000, Pro MK3 in the ₩400,000s. The landmine is assuming music comes out once you buy the pad — a reasonably specced computer is a hard prerequisite, and a full Ableton license (several hundred thousand won) waits down the road. The used market is active, so testing the water with a Mini and moving up is the smart play.",
    firstGoal: "Play one cover project all the way through and film the light show, then make your own eight-bar loop. 'Someone who finishes a track' is the truly rare character in this neighborhood.",
  },

  ewi: {
    how: "Sax fingering plus a breath sensor equals a wind instrument inside your headphones. If you've ever played a recorder, half the fingering sense transfers. The first week is adapting to how breath pressure maps to response — it's touchier than a real horn, so you'll squeak at first, but it tames fast. Being able to make a saxophone sound at midnight in a Korean apartment is already cheating.",
    lesson: "Self-study is fine — dedicated EWI teachers are rare (mostly sax teachers doing both), but YouTube lessons and a fingering chart get you there. Sax players need about a week to adapt; complete beginners should work through the fingering steadily. Either way, the great weapon is unlimited practice with no noise worries.",
    buy: "The Roland Aerophone GO (AE-05) at around ₩500,000 is the entry standard, the Akai EWI Solo ₩600,000–800,000, and the higher Aerophone AE-20 ₩900,000 and up (it moves with the exchange rate). The used market is active, so check current prices. The landmine is an ultra-cheap no-name electronic sax — the breath sensor response is crude, which kills the whole point of an instrument where breath becomes expression.",
    firstGoal: "Play one ballad you love all the way through in a sax voice and record it. Practicing saxophone in headphones at 2am with a guilty grin is exactly what this instrument is for.",
  },

  theremin: {
    how: "Right hand controls distance from the pitch antenna, left hand controls volume — the fingerboard is thin air. The first goal is holding a single note in place, and that's a project measured in weeks. Since pitch comes from arm-position muscle memory and your ear alone, you train with a tuner app open, taking one note at a time like target practice. Calling it a candidate for hardest instrument in the world is not a joke.",
    lesson: "Lessons recommended... except there essentially aren't any in Korea, which is the catch. In the end, English-language online courses (from world-class players like Carolina Eyck) are your best teacher. If nobody has ever told you that you have a good ear, politely leaving this one to somebody else is also wisdom.",
    buy: "The Moog Theremini (pitch correction included, so beginner-friendly) is ₩400,000–500,000; the classic Moog Etherwave runs ₩700,000–900,000 ordered from abroad, plus amp and stand. The landmine is a single-antenna toy theremin with no volume control — novel, but you can't practice on it. Checking the communities (overseas forums like Theremin World) is recommended.",
    firstGoal: "Play 'Twinkle, Twinkle, Little Star' through without going off pitch. It sounds silly, but on theremin that's a genuine medal — post a video and theremin players worldwide will congratulate you.",
  },

  ondes_martenot: {
    how: "Honestly: this isn't an instrument you buy, it's one you go to meet. Made to order by a French workshop for tens of millions of won, with almost no physical examples in Korea. The realistic routes are (1) soak your ears in Radiohead and Messiaen records, (2) get vicarious satisfaction from a theremin or a synth with a ribbon controller, or (3) if you're truly serious, go study in France (not a joke).",
    lesson: "Lessons essential — except your teacher lives in France. The Paris Conservatoire has a degree program in it; this is a career, not a hobby. Read this entry as a romantic introduction to a world that exists.",
    buy: "Buying means a made-to-order French build (tens of millions of won, plus a waiting list), and even the small Japanese-made lookalike Ondomo is several million ordered from abroad. The landmine might be the idea that you can buy one at all. Realistic alternative: a synth with a ribbon controller gets you 80% of the ondes feeling.",
    firstGoal: "Pick out the ondes in Radiohead's 'How to Disappear Completely'. And someday, see one played live — the day that happens, you're a full member of this instrument's fan club.",
  },

  otamatone: {
    how: "Press the neck (a ribbon) for pitch, open the 'mouth' for wah-wah — ten seconds to explain, surprisingly brutal to master. There are no frets on the ribbon, so pitch lives entirely in your ear and your hand position. 'It's a toy, why can't I do this?' is the universal review. Marking note positions with masking tape is the officially sanctioned cheat.",
    lesson: "Self-study is fine — there are no lessons and you don't need any. Cover videos from YouTube masters are both textbook and target. Come in knowing it's for laughs and cover videos rather than serious musical achievement and satisfaction is 100%.",
    buy: "The standard model at ₩30,000–50,000 is about the cheapest entry of any instrument. In serious mode, go for the Deluxe (₩80,000–120,000, with a longer ribbon that makes pitch easier) or the Techno version with smartphone connectivity and a headphone jack. Both local import and direct ordering are easy. There's no real landmine, though if your hands are small the standard is comfier than the Deluxe.",
    firstGoal: "Play any song 'recognizably' — on otamatone that's a real challenge. Pull it off and your party-trick ranking is settled at number one.",
  },

  jaw_harp: {
    how: "Rest the metal frame lightly against your front teeth (don't clamp!) and change the shape of the space inside your mouth with your tongue to pick out overtones. Your mouth becomes both speaker and equalizer, which is a strange and wonderful thing. Day one warning: a bad angle means twanging your lips or teeth, a common accident, so go slow in front of a mirror. Start with vowel shifts (ah-eh-ee-oh-oo).",
    lesson: "Self-study is fine — Korean lessons basically don't exist, so YouTube (Russian and European players) is your teacher. Most of the sound resonates through your own skull, so it's loud to you and quiet to everyone else, another point in favor of teaching yourself.",
    buy: "A Vietnamese dan moi at ₩10,000–30,000 is the value entry (it rests against the lips, so it's gentler on your teeth); a Yakut handmade khomus is ₩50,000–150,000 ordered from abroad. The landmine is the soft cheap souvenir-shop kind — a dull reed won't split the overtones. If your teeth are weak or you're in braces, skip this one!",
    firstGoal: "Get from a basic twang to something melody-like using vowel shifts. When the friend who asked 'that's an instrument?' grabs it three minutes later to try, you've succeeded.",
  },

  kazoo: {
    how: "You don't blow it, you sing into it — hum a 'doo' and the membrane buzzes into something like a trumpet. Just blowing produces absolutely nothing, which is the great trap (and the rite of passage for every new kazoo player on earth). If you can sing, you're already a player, so entry takes exactly thirty seconds.",
    lesson: "Self-study is fine — an instrument where the existence of lessons would be the surprising part. The only way to improve is to improve your singing. The kazoo is a singing-ability amplifier, so shaky pitch gets amplified with total confidence.",
    buy: "Plastic ₩3,000–5,000, metal ₩10,000–20,000 — the cheapest throne in all of instruments. There's no landmine as such, but the membrane is a consumable, so a few hundred won of spares is reassuring. Metal is half a class above in both sound and durability.",
    firstGoal: "Play 'Happy Birthday' on kazoo and level the room. Defend your dignity with the historical fact that in the early jazz era this was a genuine band instrument.",
  },

  glass_harp: {
    how: "Pour water into the wine glasses you already own, wet your fingertip, run it around the rim at a steady speed and — a heavenly tone rises (usually ten minutes to first success). The water level sets the pitch, and a tuner app is all you need. Tune eight glasses to a scale and you've got an octave. A romantic homemade instrument with a startup cost of zero.",
    lesson: "Self-study is fine — there's so little information in Korean that self-teaching is also the only path. YouTube 'glass harp' videos are the textbook. It's all about getting a feel for rubbing speed and pressure, so there isn't much to learn over anyone's shoulder anyway.",
    buy: "Start at ₩0 with the glasses in your kitchen, then if you get serious, collect thin crystal glasses (₩10,000–30,000 each) by pitch. Thinner glass sings more easily, so cheap thin glasses from somewhere like IKEA make good experimental material. The landmine is thick tumblers — rub them all you like and they stay silent. A performance table to hold the glasses is DIY territory.",
    firstGoal: "Play the opening phrase of 'Twinkle, Twinkle, Little Star' on three glasses. Demonstrate it at a dinner party and you'll watch a whole room go quiet — Mozart approved of this sound, after all.",
  },

  musical_saw: {
    how: "Sit down, clamp the saw's handle between your knees, bend it into an S and bow the back edge (the side without the teeth!) with a cello bow. The curvature is the pitch; the tremble in your knee and wrist is the vibrato. Days to get your first sound, months to land the note you want — like the theremin, it's a 'no reference points' instrument, so it belongs to people with a good ear. The standard first step is trying it on a flexible hardware-store saw.",
    lesson: "Self-study is fine (or rather, mandatory) — you can count Korean players and materials on one hand, so English-language YouTube is your only teacher. If you've played a bowed instrument (cello, violin), your starting line is far ahead.",
    buy: "You can try it with a flexible hardware-store saw (₩10,000–20,000), but the range is narrow. Serious mode means a dedicated musical saw (Mussehl & Westphal and others) ordered from abroad at ₩100,000–300,000, plus a cello bow at ₩50,000–150,000. The landmine is cutting your hand on the teeth — not a joke, it's a real saw, so taping the toothed edge and carrying it in a cover are essential.",
    firstGoal: "Produce one stable long tone, then sob a simple melody with glissando. The moment a ghost-movie soundtrack starts coming out of your knees, you've become the hidden card at any party.",
  },

  hand_percussion: {
    how: "Start by holding one egg shaker and laying crisp sixteenths over a song you love. Looks easy, right? Landing a shaker exactly on the beat takes more training than you'd think (it's a standard test in recording sessions). Expand from shaker to tambourine to claves and before long you've assembled a rhythm-props pouch. It's ideal for shaking while you sing, so it's the standard second instrument for vocalists.",
    lesson: "Self-study is fine — the metronome and a recorder are your teachers. Record your own shaker and listen back, and humility and skill grow at the same time. A few YouTube 'shaker technique' videos and the curriculum is done.",
    buy: "Egg shakers a few thousand won, tambourines ₩10,000–50,000, and even collecting the whole LP and Meinl small-percussion range stays under ₩100,000 — the small-joys corner of instrument shopping. The landmine is the jingle sound on a Daiso-grade tambourine (Daiso is Korea's discount variety chain): a rattle instead of a shimmer. For playing with others, branded props have a completely different density of sound.",
    firstGoal: "Record shaker sixteenths against a metronome and check them against the grid. Pass that and you become the 'rhythm-seasoning artisan' welcome at any rehearsal, gathering or recording session.",
  },

  muyu: {
    how: "Tap the body with the beater — tok — and that's the whole technique; the skill barrier is effectively zero. It's an instrument of use rather than performance: start by keeping an even tempo, then lay a pulse under breathing meditation, or use it instead of a timer as the signal that opens and closes your day. For fast repeated strokes (sutra-chanting tempo), the one knack is relaxing your wrist snap.",
    lesson: "Self-study is fine — a 'muyu lesson' market simply doesn't exist. The real tradition lives inside temple ritual culture, so if you're curious about proper use, watching over shoulders at a temple stay is the most orthodox course. For hobby use, a few YouTube videos are plenty.",
    buy: "At a neighborhood Buddhist-supplies shop or an online Buddhist-goods store, a handheld muyu with beater runs ₩10,000–30,000, and a jujube-wood or handmade mid-size about ₩50,000 — among the cheapest entries of any instrument here. When choosing, just remember that size is pitch (bigger means a lower, rounder sound). It's a kind market with barely a landmine, though tourist-souvenir minis sound closer to 'clack' than 'tok'.",
    firstGoal: "Three minutes before bed: build a steady-tempo muyu meditation routine. Once you start stacking the e-muyu app's 'merit +1' in the physical world, you're done.",
  },

};

// English overlay — folk & world plucked strings batch. Keys match data/inst_folk_strings.js ids 1:1.
const EN_INST_FOLK_STRINGS = {

  // ═══════════════ Folk bowed strings (9) ═══════════════

  hardanger_fiddle: {
    name: "Hardanger fiddle",
    family: "Bowed strings · folk fiddle",
    toneDesc: "A violin tone with the soft echo of sympathetic strings layered over it, always. Play alone and it sounds like two people — a reverb like fjord mist.",
    caveats: [
      "Tunings change from tune to tune (20-plus scordatura setups), so tuning itself becomes a subject you study",
      "Essentially no lessons or community in Korea — you lean on Norwegian online courses and YouTube",
      "You retune 8-9 strings including the sympathetics every single time, which is stressful if you are impatient",
      "As a first string instrument with no violin background, the entry barrier is steep",
    ],
  },

  nyckelharpa: {
    name: "Nyckelharpa",
    family: "Bowed strings · keyed fiddle",
    toneDesc: "Darker and rounder than a violin, with a stone-cathedral echo from the sympathetic strings trailing every note. Even the clack of the keys is part of the charm.",
    caveats: [
      "You will struggle to even see one in Korea — buying, repairs and lessons all depend on overseas",
      "The keys handle pitch, but bow control (articulation, dynamics) still needs as much practice as violin",
      "37 keys and 16 strings means tuning and upkeep quietly eat your time",
    ],
  },

  erhu: {
    name: "Erhu",
    family: "Bowed strings · huqin fiddle",
    toneDesc: "A voice-like tone that seems to weep and smile at once. The python-skin soundbox gives it a nasal-edged vibrato that scrapes right at your heart.",
    caveats: [
      "No fingerboard, so pitch is 100% by ear — brace for a few months in the yowling-cat zone",
      "The bow sits between the two strings, so changing bow direction feels nothing like violin (even violinists have to readjust)",
      "Korean lessons are scattered, mostly in Seoul and the Chinese-Korean community. Chinese-language video courses, by contrast, are abundant",
    ],
  },

  haegeum: {
    name: "Haegeum",
    family: "Bowed strings · huqin fiddle (gugak)",
    toneDesc: "People tease it for sounding nasal, but that is the charm. The way it bends, quivers and sobs makes it the closest thing to a human voice in gugak (Korean traditional music).",
    caveats: [
      "No fingerboard and no frets — pitch comes purely from how hard you pull the string, and most say early intonation is harder than erhu",
      "The first few months in the scratchy kkangkkangi phase are mandatory for everyone",
      "There is a conservatory scene so teachers are easy to find, but hobby lesson fees run higher than piano",
    ],
    tracks: {
      jeongak: { label: "Jeongak (court music)", note: "Court and refined-leisure music. Clean, restrained phrasing." },
      sanjo: { label: "Sanjo & folk music", note: "The improvisation-heavy solo genre. Sobbing nonghyeon (string bending) at its finest." },
      fusion: { label: "Fusion & new music", note: "The top gugak instrument for crossover demand. Plenty of pop and OST session calls too." },
    },
  },

  ajaeng: {
    name: "Ajaeng",
    family: "Bowed strings · zither (gugak)",
    toneDesc: "A rasping, cracked bass that scrapes along the floor. It is that mournful groan under the sad scenes of Korean period dramas.",
    caveats: [
      "This is not a good-sounding instrument on day one — until you control bow pressure, the sawing noise sticks around a while",
      "You can find teachers at gugak academies and among majors, but there are fewer than for haegeum or gayageum",
      "It is big and heavy, so playing anywhere but home basically requires a car",
    ],
  },

  morin_khuur: {
    name: "Morin khuur",
    family: "Bowed strings · horsehead fiddle (Mongolia)",
    toneDesc: "A bass hazier than a cello, with wind mixed into it. Hundreds of horsehair strands make a broad, cushioned resonance that is the steppe itself.",
    caveats: [
      "There are essentially no teachers or repair shops in Korea — it is YouTube and Mongolian online lessons",
      "Stopping the strings with the side of your nail barely transfers from other string instruments, so at first it feels like starting over",
      "Horsehair strings are humidity-sensitive, which makes Korea's rainy season a chore",
    ],
  },

  kamancheh: {
    name: "Kamancheh",
    family: "Bowed strings · spike fiddle",
    toneDesc: "Thinner and drier than a violin, like desert sunlight. Finely trembling ornaments ripple on one after another.",
    caveats: [
      "You truly begin once the Persian scale (koron and other microtones) lives in your ear — Western ears alone get you halfway",
      "Essentially no lessons in Korea. You rely on Iranian online teachers and YouTube",
      "The improvised radif tradition looms large, which feels foreign if you learn from sheet music",
    ],
  },

  sarangi: {
    name: "Sarangi",
    family: "Bowed strings · Indian classical",
    toneDesc: "Widely called the closest sound to a sobbing human voice. Sympathetic strings lay down a fog of resonance, and every note slides into the next.",
    caveats: [
      "Even in India it is named the hardest instrument to learn — as a hobby it is honestly close to not recommended, which is exactly why it is worth daring",
      "The cuticle-pain stretch runs for months. Think carefully if you work with your hands",
      "No lessons in Korea, and since it is a guru tradition, systematic self-study material is scarce too",
    ],
  },

  hurdy_gurdy: {
    name: "Hurdy-gurdy",
    family: "Bowed strings · mechanical (crank)",
    toneDesc: "A nasal melody over an unbroken drone, with a buzz rhythm bursting out on every wrist snap of the crank. One person covering bagpipes, fiddle and percussion at once.",
    caveats: [
      "Half of this instrument is maintenance — if you cannot wind cotton, rosin the wheel and adjust tangents, it makes no sound (upkeep on par with carving reeds)",
      "Just turning the crank evenly is a few weeks of foundational training",
      "Very few players or teachers in Korea. You lean on European online courses",
    ],
  },

  // ═══════════════ Asian, Middle Eastern & African plucked and struck strings (15) ═══════════════

  gayageum: {
    name: "Gayageum",
    family: "Plucked · zither (gugak)",
    toneDesc: "A round, gentle sound plucked with bare fingertips. The moment your left hand adds nonghyeon, a single note weeps and smiles.",
    caveats: [
      "First-month blisters on the right hand are a gate everyone passes through",
      "Jeongak, sanjo and the 25-string are practically different instruments — pick your direction before you start",
      "It is a floor-seated tradition, so without a standing frame it feels alien if you live in chairs",
    ],
    tracks: {
      jeongak: { label: "Jeongak (beopgeum)", note: "Court and refined-leisure music. Bigger instrument, slow and orderly phrasing." },
      sanjo: { label: "Sanjo", note: "The flower of folk solo playing. Nonghyeon and improvisation at maximum." },
      "25string": { label: "25-string modern", note: "Redesigned for a seven-note scale. Purely for new compositions and crossover." },
    },
  },

  geomungo: {
    name: "Geomungo",
    family: "Plucked · zither (gugak)",
    toneDesc: "Even the thump of the suldae stick hitting string and soundbox is part of the music. Drag a bass string upward and you get the punch of an electric guitar bend.",
    caveats: [
      "The double gate of suldae strokes plus left-hand pushing means your first tune takes longer than on gayageum",
      "It is heavy and huge, so getting it to lessons becomes a genuine worry",
      "Fewer people learn it than gayageum, so many regions rarely open a hobby class",
    ],
  },

  koto: {
    name: "Koto",
    family: "Plucked · zither (Japan)",
    toneDesc: "A crisp, ringing pluck from the picks, with the afterglow of left-hand bends soaking in. One glissando and the air turns into a Japanese garden.",
    caveats: [
      "Essentially no lessons in Korea (you would be asking around at the Japan Foundation or with individual players). Japanese-language video courses are plentiful",
      "Secure the space for a 1.8m instrument before anything else",
      "Standing the bridges to tune takes a few minutes every single time",
    ],
  },

  shamisen: {
    name: "Shamisen",
    family: "Plucked · lute (Japan)",
    toneDesc: "A 'bachin!' attack slapping the skin, with sawari (deliberate buzz) crackling on top. Rhythm and melody happen at once, no accompaniment needed.",
    caveats: [
      "Three fretless strings, so pitch is by ear (position stickers are a perfectly fine way in)",
      "Essentially no lessons in Korea. You rely on Japanese online lessons and YouTube",
      "Natural-skin instruments are fragile in Korea's four seasons of humidity — synthetic skin is a must for beginners",
    ],
    tracks: {
      tsugaru: { label: "Tsugaru", note: "Percussive improvised solos. Thick neck, heavy bachi. Maximum flash." },
      nagauta: { label: "Nagauta & minyo", note: "Song accompaniment first. Slim neck, delicate tone." },
    },
  },

  pipa: {
    name: "Pipa",
    family: "Plucked · lute (China)",
    toneDesc: "The sound Bai Juyi described as pearls spilling onto a jade plate. Tremolo rolls on like waves, and twisting and scraping the strings even conjures sword-fight effects.",
    caveats: [
      "Rolling a proper lunzhi (tremolo) alone takes months — the signature technique is also the biggest hurdle",
      "Korean lessons are few, centered on Seoul's Chinese-instrument schools",
      "Korea's own traditional bipa (dangbipa, hyangbipa) is a different instrument — still being reconstructed, so harder to learn",
    ],
  },

  guzheng: {
    name: "Guzheng",
    family: "Plucked · zither (China)",
    toneDesc: "Glissandos like rolling beads and a bright, ringing tremolo. Louder, brighter and flashier than gayageum — the sound of running water.",
    caveats: [
      "Pentatonic tuning makes starting easy, but changing key means resetting the bridges",
      "It is big and heavy, so decide where it will live before you buy",
      "Korean lessons center on Chinese-instrument schools and the Chinese-Korean community, and are rare outside Seoul",
    ],
  },

  guqin: {
    name: "Guqin",
    family: "Plucked · zither (Chinese literati)",
    toneDesc: "A low decay that sinks into the body, where even the friction of fingers sliding on strings counts as music. Quite possibly the quietest string instrument in the world.",
    caveats: [
      "Notation is not a staff but jianzipu, built from combined Chinese characters — decoding the script comes before playing",
      "It is for self-cultivation, not stages or ensembles. If being heard is the point, take up guzheng",
      "Essentially no lessons in Korea. You rely on Chinese-language video courses",
    ],
  },

  oud: {
    name: "Oud",
    family: "Plucked · lute (Middle East)",
    toneDesc: "A fretless, short-sustain round bass that flows like singing. Tremolo and microtonal ornaments build the feeling of desert night air.",
    caveats: [
      "Zero frets — even guitarists relearn intonation from scratch, by ear",
      "It is a melody-and-improvisation (taqsim) instrument, not a chord machine. For song accompaniment, guitar is better",
      "Essentially no lessons in Korea, though English, Arabic and Turkish online courses are plentiful",
    ],
  },

  saz: {
    name: "Saz (bağlama)",
    family: "Plucked · lute (Turkey)",
    toneDesc: "A silvery shimmer from thin steel string courses. Ring the drone course, lay a melody on top, and one player fills the room.",
    caveats: [
      "The frets are not Western 12-tone; they are tied at microtonal spots too, so you need to enjoy where it clashes with staff-notation instincts",
      "Essentially no lessons in Korea. Turkish and English YouTube is your source",
      "Budget imports vary in fret placement and finish, so checking the seller's reputation is essential",
    ],
  },

  sitar: {
    name: "Sitar",
    family: "Plucked · lute (India)",
    toneDesc: "Notes slide and bend over a humming overtone buzz. Pluck a single string and the sympathetics ring after it like a rainbow.",
    caveats: [
      "You learn ragas and an improvisation system, not pieces — the grammar does not match a nail-one-song goal",
      "Tuning 20 strings including the sympathetics eats a large chunk of your practice time",
      "Very few lessons in Korea (occasional courses at the Indian cultural centre). English-language online courses are plentiful",
    ],
  },

  kora: {
    name: "Kora",
    family: "Plucked · harp-lute (West Africa)",
    toneDesc: "Somewhere between a harp's clarity and a guitar's groove. Melody rolls over cycling arpeggios that tumble like water drops.",
    caveats: [
      "Traditional leather tuning rings make tuning agony — buy a model upgraded with guitar pegs",
      "Players and teachers in Korea can be counted on one hand. You rely on English and French online courses",
      "It is an oral, pattern-based tradition rather than a notated one, so learning by ear is the norm",
    ],
  },

  santur: {
    name: "Santur",
    family: "Struck strings · hammered dulcimer (Persia)",
    toneDesc: "A finely glittering tremolo, like raindrops bouncing off glass. With no dampers, every note blends softly into a fog of resonance.",
    caveats: [
      "72 strings to tune — the joke that you learn tuning before playing is not really a joke",
      "You need the Persian microtonal tuning system before the homeland repertoire opens up",
      "No lessons in Korea. You rely on Iranian and Indian online courses",
    ],
  },

  hammered_dulcimer: {
    name: "Hammered dulcimer",
    family: "Struck strings · hammered dulcimer",
    toneDesc: "A sparkle like a music box blown up to full size. Struck notes blend into one another and build a bell-like cloud of resonance.",
    caveats: [
      "With dozens of strings, memorizing which course is which note is the big early task — the zigzag layout in fifths feels like a maze at first",
      "A tuner is essential gear — dozens of strings need regular attention",
      "It is big and heavy, so it is an instrument that stays put. Hauling it to sessions takes commitment",
    ],
  },

  cimbalom: {
    name: "Cimbalom",
    family: "Struck strings · hammered dulcimer (Hungary)",
    toneDesc: "A soft attack from cotton-wound mallets, plus pedal resonance. Bass tremolo spreads like river mist — the most orchestral sound among struck-string instruments.",
    caveats: [
      "Getting hold of one is a project in itself — with no Korean used market, you take on a European purchase plus international freight",
      "Space to put it and people to move it (two or more) are permanent problems",
      "With very few players in Korea, lessons mean going overseas and online",
    ],
  },

  kalimba: {
    name: "Kalimba",
    family: "Plucked · lamellophone (tines)",
    toneDesc: "A round little sound somewhere between a music box and a water drop. Every note is pretty on its own, so even careless plucking turns into healing ASMR.",
    caveats: [
      "Fixed in C major, so tunes with accidentals are off-limits or need modification (chromatic kalimbas are a separate thing)",
      "So easy that you plateau fast — it can get dull if you always want more to learn",
      "Budget units can have sharp tine edges or buzzing, so read the reviews",
    ],
    tracks: {
      modern: { label: "Modern kalimba (17 keys)", note: "Diatonic in C. Number notation gets you playing the same day." },
      mbira: { label: "Mbira (traditional)", note: "The Shona tradition of Zimbabwe. Polyrhythmic cycling patterns, the root of ceremonial music." },
    },
  },

};

const EN_GUIDE_FOLK_STRINGS = {

  // ═══════════════ Folk bowed strings (9) ═══════════════

  hardanger_fiddle: {
    how: "It looks like a violin, but inside it is a different animal. Sympathetic strings hide beneath the four you actually bow, so the moment you draw the bow, strings you never touched start ringing along. The start is pure violin basics — bow strokes, open strings, left-hand fingering. But since tunings change from tune to tune, reading the tuning chart is part of the curriculum too. The standard route is a year or two of violin first, then crossing over.",
    lesson: "Lessons recommended — except there are essentially no teachers in Korea, which is the catch. The realistic route has two tiers: first build bow fundamentals in violin lessons, then add Hardanger technique from Norwegian online courses (the Hardanger Fiddle Association of America has good material) and YouTube. If you have played violin, switching over on your own is doable.",
    buy: "Entry ₩2.5M-7M, mid-tier ₩7M and up — there is no Korean distribution, so ordering from a Norwegian workshop or buying used from overseas is the default. They are handmade, so even the floor is high. If the budget stings, you can dip a toe in with a violin modified to carry sympathetic strings. Landmine: cheap violins with only Hardanger-style decoration painted on do circulate, so always confirm the sympathetic strings are really there. For makers, ask the HFAA community for recommendations before you commit.",
    firstGoal: "Three-month goal: play one Norwegian folk tune (a gangar) in a single standard tuning, with the sympathetics ringing. The first time they hum along behind you and it sounds like two people playing, you have made it.",
  },

  nyckelharpa: {
    how: "The right hand bows, and the left hand presses keys that set the pitch for you. That makes it about the only bowed instrument with no find-the-note-by-ear terror. Press a key, draw the bow, and from day one you are in tune. Bow control (articulation, dynamics) still needs as much practice as violin, though, and with 37 keys and 16 strings, tuning is a meditation session every single time.",
    lesson: "Self-teachable (though bow basics are worth a few lessons) — since the keys handle pitch, going solo is realistic. There are essentially no lessons in Korea, so Swedish online courses and YouTube are your textbook. A few one-point sessions with a violin teacher just on the bow hold will cut your trial and error dramatically.",
    buy: "Entry ₩2M-6M — no Korean distribution, so ordering from a European workshop is the default. Swedish and German makers often have waiting lists, so ask early (for maker recommendations, international communities like the American Nyckelharpa Association are the safe bet). If you are handy, starting from a build kit (around ₩1M) is a genuine route. Landmine: cheap decorative units have misaligned keys and simply play out of tune — confirm it is built to be played.",
    firstGoal: "Three-month goal: play a Swedish polska all the way through with the sympathetics ringing. When even the clack of the keys turns into part of the groove, you will be glad you bought it.",
  },

  erhu: {
    how: "The bow is threaded between the two strings, so there is no such thing as taking the bow off. There is no fingerboard either — you stop the strings in midair. That means a few months in the cat-impression zone, but once your pitch settles, the reward is a tone that cries like a human voice. You sit with it on your knee, so it is easier on the body than violin.",
    lesson: "Lessons recommended — early coaching on fingerboard-less intonation and bow-direction feel will save you months. In Korea, lessons pop up here and there through Seoul's Chinese-instrument schools and the Chinese-Korean community; outside Seoul, Chinese-language video courses (YouTube is packed with subtitled lessons) are your realistic teacher.",
    buy: "Entry ₩150,000-500,000 — buy from a Korean importer of Chinese instruments or direct from Taobao. The cheapest ₩100,000-ish ones sound coarse, so aim for around ₩300,000. Landmine: python-skin soundboxes vary a lot in quality, so when ordering overseas pick a high-volume seller with good reviews (shops carrying known brands such as Dunhuang). Python skin can raise CITES customs questions, so checking whether an export permit is included will save you worry.",
    firstGoal: "Three-month goal: steady intonation on the open strings and first position, plus one pentatonic melody at the 'Arirang' level with a touch of vibrato. You may award yourself the diploma for graduating the cat phase.",
  },

  haegeum: {
    how: "The bow between two strings works like the erhu, but the way pitch is made is unique. In yeoganbeop you control pitch by how hard you pull the string: squeeze hard at the same spot for a higher note, ease off for a lower one. Most say early intonation is even harder than erhu, but the payoff is sobbing nonghyeon you can shape at will. The scratchy kkangkkangi phase in the first months is a rite everyone passes.",
    lesson: "Lessons required — the grip feel of yeoganbeop simply does not transfer through text or video. Happily, haegeum is one of the more accessible gugak instruments to learn. Hobby classes run at culture centers (department stores, community centers) nationwide, and private lessons at gugak academies or with music majors are common. Note that hobby lesson fees run a bit higher than piano.",
    buy: "Entry (practice grade) ₩400,000-1M, sanjo and performance grade ₩1.5M-5M — the standard move is a practice haegeum from a gugak instrument shop such as Seoul Gugaksa, Hanullim Gugakgi or gugakgi.com. Renting through a culture-center class and buying later is common too. Landmine: rock-bottom decorative haegeum on open marketplaces can have a bridge and soundbox finished so poorly they are unplayable, so buy where you can hear it (or bring your teacher).",
    firstGoal: "Three-month goal: play the opening rhythmic cycle of a sanjo passage, or one minyo (folk song) such as 'Hanobaengnyeon', with steady pitch. When one nonghyeon bend makes someone nearby say that sounded properly Korean, you have nailed it.",
  },

  ajaeng: {
    how: "You rub thick silk strings on a laid-down soundbox with a forsythia-branch bow. It is not horsehair — it is a wooden stick coated in rosin, so everyone's first sound is sawing ASMR. Once you find the feel for bow pressure and speed, that sawing turns into a bass that scrapes at your chest. Playing cross-legged on the floor is standard, so back stretches come with the meal.",
    lesson: "Lessons required — bow pressure is very hard to self-teach, and there are far fewer books and video courses than for haegeum or gayageum. Learning at a gugak academy or privately with a major is the standard, but with fewer teachers around you may have to ask about depending on your region. Finding one who played in a gugak orchestra is the jackpot.",
    buy: "Entry (practice sanjo ajaeng) ₩800,000-2M — a custom order through a gugak instrument shop is the norm (the larger dae-ajaeng costs more). Ask Seoul Gugaksa, Hanullim Gugakgi and similar shops about practice grades. Landmine: used ajaeng are rare, so a cheap used listing demands careful inspection — check the soundbox for cracks and look hard at the strings. The bow stick (a forsythia branch) and rosin are consumables, so buy spares at the same time.",
    firstGoal: "Three-month goal: graduate the sawing phase and play the opening jinyangjo passage of a sanjo with that low groaning cry. The moment arrives when you are making the sad-period-drama soundtrack with your own hands.",
  },

  morin_khuur: {
    how: "You stand it between your legs like a cello, but the fingering is unusual: instead of pressing with fingertips, you stop the strings with the side of your nail and your knuckles. That is why even experienced string players feel like they are starting from zero. On the plus side, the strings are bundles of horsehair so your hands do not hurt, and that soft, steppe-wind bass sounds halfway convincing from day one.",
    lesson: "Lessons recommended — except there are essentially no teachers in Korea. Online lessons with Mongolian players (some do open Zoom lessons) or YouTube courses are the realistic route. If you have played cello or violin, your bow fundamentals carry over and only the fingering is new.",
    buy: "Entry ₩500,000-1.5M — with almost no Korean distribution, ordering direct from a Mongolian workshop is the default, and community wisdom says buying one on a trip to Mongolia is cheapest (if a trip is on the cards, do the Ulaanbaatar instrument-shop tour!). Landmine: souvenir morin khuur are gorgeously decorated and make no sound — check for a professional grade and confirm the strings are genuine horsehair. Korea's humid summers call for a dehumidifier plan.",
    firstGoal: "Three-month goal: play one Mongolian folk song over an open-string drone. When you have room to spare, try layering on a khoomei (overtone singing) impression — pull it off and you are a one-person band.",
  },

  kamancheh: {
    how: "You rest the spike below the round soundbox on your knee, and instead of moving the bow you swivel the instrument to bring the strings to it. At first it is a wait, I turn the instrument? moment, but that rotation is half of kamancheh. The other half is planting the Persian scale (microtones such as koron) in your ear. This is the instrument that makes you fall in love with the notes between the Western ones.",
    lesson: "Lessons recommended — there are essentially none in Korea. Online lessons with Iranian players, YouTube and specialist course sites are the realistic route. If you have played violin the bow basics carry over, but the radif (Persian classical repertoire) runs on ear-copying and teacher lineage, so having a teacher, even online, is far faster.",
    buy: "Entry ₩400,000-1.2M — with no Korean distribution, you buy direct from Iranian or Turkish workshops. Shipping from Iran carries big sanction and logistics risks, so a Turkish or European reseller (world-instrument specialty shops) is the practical path. Landmine: the soundboard is skin, and on cheap units it sags and the tone dies. Check seller reviews and any performance-grade labeling, and when in doubt get a workshop recommendation from the international kamancheh community first.",
    firstGoal: "Three-month goal: steady the rotation-and-bow feel and play the basic phrase of one Persian dastgah with its ornaments. You have succeeded when the sound of desert night air settles into your room.",
  },

  sarangi: {
    how: "You push the strings with the cuticle beside your nail root, not your fingertip. Yes, it hurts. Months of the worst pain phase in all of string playing — the instrument itself is the initiation. Past that door wait the sound most often called the closest to a human voice, and the misty resonance of 35 sympathetic strings. Even in India it is named the hardest instrument, so this is less a hobby than a practice — which is exactly the appeal.",
    lesson: "Lessons required — except there are none in Korea, and since it is a guru tradition, systematic self-study material is scarce too. The realistic route is private online lessons with Indian players (some sarangi players do open Skype and Zoom lessons). You will be learning Hindustani theory (raga and tala) alongside.",
    buy: "Entry ₩500,000-1.5M — no Korean distribution, so it is direct from an Indian workshop. Quality varies enormously and cheap ones often will not hold tuning. Landmine: the market is genuinely full of decorative tourist sarangi. Buy performance grade only through workshops that players and communities recommend (the well-known Delhi and Kolkata makers), and confirm with an international sarangi community if you are unsure. Gut strings break easily and cost a lot, so spares are essential.",
    firstGoal: "Three-month goal: endure the cuticle conditioning and connect the basic scale of one raga with slides (meend). Remember, this is the instrument where the day my hand stopped hurting arrives before your first tune. That day is the real first day of school.",
  },

  hurdy_gurdy: {
    how: "Turn the crank with your right hand and a rosined wheel bows the strings without pause, while your left hand works the keys for melody. Zero calluses, zero pitch worries! In exchange, turning that crank evenly is a few weeks of training on its own, and adding the buzz rhythm with a wrist snap is the second gate. And fair warning up front: half of this instrument is maintenance. Accept winding cotton and rosining the wheel as part of the hobby and you will be a happy person.",
    lesson: "Self-teachable (a maintenance mentor is near-mandatory) — playing itself can be learned from European online courses and YouTube. Players and lessons in Korea are extremely few. But since the thing will not sound at all if you cannot wind cotton or adjust tangents, joining an international hurdy-gurdy community (forums, Facebook groups) and soaking up maintenance knowledge is effectively your lesson.",
    buy: "Entry ₩1M-4M — no Korean distribution; direct from European (French, Hungarian, German) and Ukrainian workshops. Good makers often have waits from several months to over a year. This instrument is especially notorious for landmines: the consensus is that anything under ₩1M (the no-name mass-produced eBay stuff) holds neither tuning nor buzz and is furniture shaped like a hurdy-gurdy. Always check a maker's reputation in the international community, and the used market (European community classifieds) is a good route too.",
    firstGoal: "Three-month goal: hold the crank steady while putting a four-beat buzz rhythm into one French folk dance tune. The moment drone, melody and rhythm all come out of one body, your one-person-band license is issued.",
  },

  // ═══════════════ Asian, Middle Eastern & African plucked and struck strings (15) ═══════════════

  gayageum: {
    how: "You pluck and snap twelve strings with bare fingers. The sound of flesh on silk is the charm; the price is first-month blisters on the right hand, a gate everyone passes. Half the sound is the left hand — nonghyeon, pressing and shaking the string to the left of the anjok bridges. Decide your direction first: jeongak (court, orderly), sanjo (folk, showy) and the 25-string (new music, crossover) split into practically different instruments. For hobby beginners, the sanjo gayageum is standard.",
    lesson: "Lessons recommended — accessibility is the best of any gugak instrument. Hobby classes run at department-store and community culture centers nationwide, and gugak academies and private teachers are everywhere. Many places lend instruments to students, making this one of the few instruments where you can try before you buy. YouTube self-study material is the richest in gugak too, but the touch of nonghyeon comes faster with in-person coaching.",
    buy: "Entry (practice grade) ₩300,000-1M, sanjo and performance grade ₩1.5M-6M — the standard is a practice model from a gugak instrument shop such as Seoul Gugaksa, Hanullim Gugakgi or gugakgi.com. The gap between practice and sanjo grades (paulownia body, silk-string quality) is large, so start with a practice model or a culture-center rental, confirm your taste, then upgrade. Landmine: the ₩100,000-odd decor-friendly models on open marketplaces will not hold their bridges or their tuning. Check that it came from an actual gugak shop!",
    firstGoal: "Three-month goal: graduate the blisters and play 'Arirang' or another minyo (folk song) through, with nonghyeon. The first time you press with your left hand and hear the note cry, your gayageum life has begun.",
  },

  geomungo: {
    how: "You strike the strings down with a suldae (bamboo stick) and push the thick strings upward over the frets with your left hand. Right hand is percussion, left hand is a bending guitar, you could say. Even the thud against the soundbox counts as music, which makes it the most rock-adjacent gugak instrument (the band Jambinai proved it). The double gate of suldae strokes plus left-hand pushing means your first tune takes longer than on gayageum — and the scholar's-instrument pride hits that much harder.",
    lesson: "Lessons required — suldae angle and left-hand pushing are easy to get structurally wrong on your own. Gugak academies and teachers who majored in it are the standard route, but fewer people learn geomungo than gayageum, so many regions rarely open a hobby class. Seoul and the capital region work with some asking around; elsewhere, mixing in online lessons is realistic.",
    buy: "Entry (practice grade) ₩500,000-1.5M, performance grade ₩2M-7M — ordering through a gugak instrument shop is standard. Demand is lower than gayageum, so used listings are scarce too. Landmine: at 1.6m and 7kg, geomungo suffer shipping damage often — picking it up at the shop in person is best, and if it must ship, agree on the packing first. Suldae are consumables, so stock spares!",
    firstGoal: "Three-month goal: steady your suldae stroke and play the first section of the jeongak piece 'Dodeuri', or one folk melody. Once that kung-silgideong attack lives in your hands, feel free to daydream about a gugak band audition.",
  },

  koto: {
    how: "You tune by moving thirteen bridges (ji) and pluck with tsume (picks) on three right-hand fingers. The picks mean almost no fingertip pain, and it sounds like a Japanese garden from the very first pluck, so early satisfaction is high. Oshide — pressing the string with your left hand to bend the pitch — is the heart of expression. Before every practice there is a few-minute ritual of standing the bridges and tuning, and it turns out to be quietly meditative.",
    lesson: "Self-teachable to lessons-recommended — there are essentially no lessons in Korea (you would be chasing Japan Foundation events or individual players). Instead, Japanese-language courses and YouTube material are plentiful, and since the layout resembles gayageum, gayageum players start halfway home. Zoom lessons with Japanese teachers are an open route as well.",
    buy: "Entry ₩400,000-1.2M — with almost no Korean distribution, buying used from Japan (Yahoo Auctions or Mercari plus a proxy service) is standard. Used koto are so common there that shipping (a 1.8m freight item!) can cost more than the instrument — a famous joke that happens to be true. Landmine: on used units, study the photos for string condition and body cracks, and budget for a restring, which is a specialist job. Tsume come in finger sizes, so check yours!",
    firstGoal: "Three-month goal: play 'Sakura Sakura' all the way through with oshide bends. One sweep of glissando and your room is instantly Kyoto.",
  },

  shamisen: {
    how: "A ginkgo-leaf-shaped bachi (plectrum) slaps string and skin together with a bachin! Melody and rhythm come out in one blow, so it sounds full even solo. Three fretless strings means pitch is by ear, but starting with position stickers is completely fine (nothing shameful, everyone does it). Pick your direction before you start — flashy Tsugaru (improvised solo) or delicate nagauta (song accompaniment) — because the neck thickness differs from the outset.",
    lesson: "Self-teachable to lessons-recommended — there are essentially no lessons in Korea, but Japanese online lessons (plenty of Tsugaru players teach in English) and YouTube courses are rich enough that many people succeed alone. Just be diligent about filming yourself early to check your bachi stroke form — a form that punishes your wrist is hard to fix once it sets.",
    buy: "Entry ₩300,000-1.2M — buying used from Japan (Yahoo Auctions plus a proxy service) is standard. Used nagauta instruments are cheap; Tsugaru ones are pricey. Important: for beginners, synthetic skin is a must! Natural skin bursts easily in Korea's four seasons of humidity, and a re-skin runs into the hundreds of thousands of won. Landmine: a used natural-skin listing with skin condition unverified is a gamble, so check the photos for wrinkles and tears.",
    firstGoal: "Three-month goal: the basic jinku rhythm pattern if you are on Tsugaru, or one folk-song accompaniment if you are on nagauta. When sawari buzz crackles onto that bachin attack, the door to Japanese blues swings open.",
  },

  pipa: {
    how: "You hold the pear-shaped body upright and play with artificial nails taped to five fingers. The signature technique and the biggest hurdle are the same thing: lunzhi, the five-finger tremolo. It takes months just to roll it like a waterwheel, but once you have it your stage presence goes vertical. There are frets, so no pitch worries, and guitarists adapt their left hand quickly.",
    lesson: "Lessons recommended — coaching on the right-hand technique system, lunzhi included, saves months. Korea has a small number of lessons, mostly at Seoul's Chinese-instrument schools; outside Seoul, Chinese-language courses (plenty of well-structured paid ones) are the realistic route. For reference, Korea's traditional bipa (dangbipa, hyangbipa) is a different instrument still being reconstructed, so make sure the Chinese pipa is what you want.",
    buy: "Entry ₩300,000-1M — from Korean dealers in Chinese instruments or direct from Taobao. A beginner model from a known brand such as Dunhuang is the safe choice. Artificial nails and tape are regular consumables, so put them in the same cart. Landmine: rock-bottom decorative pipa have misaligned frets and play out of tune — verify the brand is genuine and read the seller's reviews!",
    firstGoal: "Three-month goal: steady your basic tan and tiao strokes (out and in) and play one Chinese folk song through. Treat lunzhi as a six-month project and roll it five minutes a day — one day it simply happens.",
  },

  guzheng: {
    how: "You pluck 21 strings with artificial nails, and it sounds good the instant you touch it — the highest-beginner-satisfaction Chinese traditional instrument. Pentatonic tuning means even a random sweep (glissando) turns into a wuxia film. Right hand plucks, left hand presses to bend the pitch, and gayageum players adapt fast since these are sibling instruments. One catch: 1.6m and 10kg, so decide where it goes before you buy.",
    lesson: "Self-teachable to lessons-recommended — the on-ramp is gentle enough that YouTube and Chinese-language courses (the guzheng course market is enormous) make self-study workable. Korean lessons center on Seoul's Chinese-instrument schools and the Chinese-Korean community, and are rare in the provinces. It is worth early coaching just on the pitch feel of left-hand bending (anyin).",
    buy: "Entry ₩300,000-900,000 — a beginner model from a known Chinese brand such as Dunhuang, through a Korean dealer or direct from Taobao. Landmine: it is bulky, so overseas shipping costs a lot (furniture-class freight), and comparing the total against Korean importer prices is a must. No-name budget units vary a lot in bridge alignment and finish, which is why Dunhuang's beginner line is considered the can't-go-wrong choice. Grab the artificial nail and tape set too!",
    firstGoal: "Three-month goal: play one short piece in the 'Flowing Water' vein all the way through, with glissando and tremolo. This is the instrument where your family will likely say ooh, that sounds like something within the first week.",
  },

  guqin: {
    how: "No bridges — you press and sweep seven strings with bare hands, listening to the afterglow of harmonics and slides. It is about the quietest string instrument in existence, so it is the only large one you can practise in an apartment at midnight. The catch: notation is jianzipu, built from combined Chinese characters, so your first week is less playing than deciphering. This is a self-cultivation instrument, not a stage one — pick guzheng if you want to be heard, guqin if you want to settle your own mind.",
    lesson: "Self-teachable (with resolve) — there are essentially no lessons in Korea. Chinese-language courses are vast (many subtitled) and jianzipu decoding guides are laid out online, so the solo route is open. Being a quiet instrument means no practice-space limits either, which is a hidden ally for self-study.",
    buy: "Entry ₩500,000-2M — direct import, and the floor is higher than for other Chinese instruments. The reason: the consensus is that cheap plywood guqin have dead resonance and do not function as instruments, so a cheap guqin is itself the landmine. Aim for lacquered solid-wood grade or better, and on Taobao buy from workshop-run stores (the Yangzhou and Beijing makers), checking reviews first. Around ₩1M is where the failure rate drops sharply.",
    firstGoal: "Three-month goal: read jianzipu and play the beginner piece 'Xianweng Cao' through, harmonics included. Once you know the taste of playing alone late at night with the lights off, you have already stepped onto the literati path.",
  },

  oud: {
    how: "You roll round bass notes with a risha (long plectrum) over a fingerboard with no frets at all. Even guitarists relearn intonation by ear from scratch, but the nylon strings are as gentle on fingertips as classical guitar. Remember it is a melody-and-improvisation (taqsim) instrument, not a chord machine — once you start fingering the microtones of maqam (Arabic modes), the desert night opens up.",
    lesson: "Self-teachable to lessons-recommended — there are essentially no lessons in Korea, but English-language online oud courses are well structured (several subscription course sites), so the solo success rate is not bad. For the feel of maqam microtones, listening to a lot of recordings and singing along is the best lesson there is.",
    buy: "Entry ₩300,000-1M — with almost no Korean distribution, buying direct from Turkey is standard. The lira exchange rate makes the value good, and Istanbul's world-instrument online shops handle international shipping well. Landmine: decorative tourist ouds (all mother-of-pearl, no substance) often have warped necks, so check for a performance grade and the action (string height) spec. The bowl is glued from ribs, making it vulnerable to winter dryness and shipping knocks — keep it humidified!",
    firstGoal: "Three-month goal: run steadily up and down maqam rast with risha up-strokes and down-strokes, and build a short 30-second taqsim of your own. You pass when a microtone stops sounding wrong and starts sounding delicious.",
  },

  saz: {
    how: "A teardrop body, a long neck, and tied movable frets that cover the microtones too. Those frets make it a gentler entry than oud, and ringing the drone course while laying a melody on top fills the room by yourself. String tension is low, so it is easier on the fingers than guitar. If you can treat frets that disagree with Western 12-tone as a local delicacy rather than an error, this is the best-value folk lute going.",
    lesson: "Self-teachable — the most self-study-friendly of the folk lutes. Turkish and English YouTube courses abound, and guitar or ukulele players can accompany from the first week. There are essentially no lessons in Korea, so online is your classroom. Listening to a lot of Turkish folk songs (türkü) is more than half the study.",
    buy: "Entry ₩200,000-600,000 — buying direct from Turkey, this is the best value among folk lutes. International shipping from the online stores of Istanbul instrument shops is the standard route. Landmine: budget imports vary in fret placement and finish, so check the seller's reputation and whether there is real playing footage. Between the long neck and the short neck, most say the short neck is easier for beginners.",
    firstGoal: "Three-month goal: accompany yourself singing one Turkish folk song with drone plus melody. Once the basic strumming pattern lives in your hands, your Anatolian bard cosplay is complete.",
  },

  sitar: {
    how: "The core technique is meend: pulling the string sideways across curved metal frets to bend a note by two or three steps. Your left fingertips get grooved and conditioned by steel strings — more painful than guitar — and the traditional posture, cradling the instrument on your instep and knee, doubles as a hip-flexibility test. And this instrument teaches ragas and improvisation systems, not pieces, so the grammar differs from a learn-one-song goal. Tuning 20 strings including sympathetics is part of practice too.",
    lesson: "Lessons recommended — the raga system is a teacher tradition, and going alone is lonely. Korea has very few lessons (the Indian cultural centre runs courses now and then), while English-language courses and Zoom lessons with Indian players are plentiful, so online is the realistic route. Guitar experience transfers to the fret feel.",
    buy: "Entry ₩500,000-1.5M — direct from Indian workshops. Landmine alert: cheap tourist sitars are ornaments that literally cannot be tuned. Buy from the lineage of well-known Kolkata and Delhi makers such as Rikhi Ram or Hiren Roy, or from export specialists who state a performance grade. If unsure, verify the seller's reputation in an international sitar community first! Also know that jawari (bridge) refacing is a specialist job on a multi-year cycle.",
    firstGoal: "Three-month goal: play the ascent and descent of Raga Yaman accurately without meend, then bend one note with meend. Make friends with tuning — it is the price of that first rainbow of sympathetic strings.",
  },

  kora: {
    how: "You pluck 21 strings using only four fingers, both thumbs and both index fingers, with the left hand cycling bass and the right hand carrying melody in the kumbengo pattern. It feels like playing a harp and a guitar at once, and nylon (fishing-line) strings are kind to your hands. There is no sheet-music culture; it is oral and pattern-based, so ear-copying is the basic method — and once a pattern starts cycling, a minimalist-music trance arrives.",
    lesson: "Self-teachable to lessons-recommended — players and teachers in Korea can be counted on one hand. English and French online courses (dedicated kora online schools genuinely exist) and YouTube are your classroom. Pattern-repetition learning suits self-study well, and a Zoom lesson with a griot player teaches you the cultural context too.",
    buy: "Entry ₩800,000-2.5M — no Korean distribution. Buying direct from Gambian or Senegalese makers, or commissioning a European workshop, are the routes, with shipping taking a big share of the cost. Important tip: models with traditional leather tuning rings (konso) are miserable to tune, so buy one upgraded with guitar pegs. Landmine: tourist koras have thin gourd bodies that cannot hold tuning. Ask West African music communities for maker recommendations before you order.",
    firstGoal: "Three-month goal: cycle one basic kumbengo pattern without stopping and lay a line of melody on top. From the moment your hands turn automatic, it stops being playing and becomes meditation.",
  },

  santur: {
    how: "You strike 72 strings with feather-light wooden mallets (mezrab). Your fingertips never press a string, so calluses are zero! In exchange, the joke that you learn tuning before you learn playing is completely true here. With no dampers, every note blends into a mist of resonance, and once you get into the Persian microtonal tuning system the homeland repertoire opens up. Wrist snap is tone, so learning to unclench is the core work.",
    lesson: "Self-teachable to lessons-recommended — there are no lessons in Korea. Online courses and YouTube from Iranian players are the realistic route, and if you want the Indian santoor (Kashmiri), look for Indian-lineage courses. Pianists and percussionists transfer their two-hand independence and move fast.",
    buy: "Entry ₩400,000-1.2M — no Korean distribution. Buying direct from Iranian workshops carries big sanction and shipping risks, so a European reseller (German or Turkish world-instrument online shops) is the practical route. Landmine: some listings arrive with no tuning hammer or spare strings, so check what is included. A tuner app for 72 strings and a tuning hammer are essential gear. If unsure, get a seller recommendation from a santur community!",
    firstGoal: "Three-month goal: even out the alternating two-hand stroke (basic tremolo) and play one short piece in a Persian mode. The moment a raindrop tremolo keeps rolling, your room becomes Isfahan.",
  },

  hammered_dulcimer: {
    how: "You strike dozens of string courses with a hammer in each hand. Calluses and blisters do not exist as concepts, which makes this the classic detour for people who quit guitar because their fingertips hurt. The biggest early task is not playing but memorizing the map — the courses zigzag in fifths and feel like a maze at first, but once memorized, scales roll faster than on piano. Everything you hit sounds pretty, so the early payoff is excellent.",
    lesson: "Self-teachable — English-language books and YouTube courses are well developed (the American folk scene is big), and since it is a struck instrument, form correction matters less, which suits self-study. Assume there are effectively no lessons in Korea. Playing along with Irish and old-time recordings is the best curriculum going.",
    buy: "Entry ₩600,000-2M — no Korean distribution. Importing from the US is standard, and Dusty Strings is the accepted beginner-to-intermediate brand. Shipping is significant given the bulk, so compare totals. Landmine: no-name budget instruments have poor tuning stability, turning an instrument you tune daily into an instrument you only tune. Check the chromatic layout (12/11 course specs and the like) against the repertoire you want too! A tuning wrench and an electronic tuner are lifelong companions.",
    firstGoal: "Three-month goal: memorize the string map and play an Irish jig through with alternating hands. When the melody starts glittering inside that cloud of resonance, your music-box-fairy certification is issued.",
  },

  cimbalom: {
    how: "This is a grand-piano-class hammered dulcimer, damper pedal and all. Strike the bass strings with cotton-wound mallets and a dreamy tremolo fills the hall. The playing itself belongs to the hammered dulcimer family, so your hands do not hurt — but the real gate here is not playing, it is acquisition. You begin with the project of shipping a 100kg piece of furniture out of Europe. Pedal work comes quickly to pianists.",
    lesson: "Lessons recommended — except with very few players in Korea, lessons mean going overseas and online. Zoom lessons with Hungarian and Romanian players, or YouTube masterclasses, are the route. Building the basics on hammered dulcimer or piano first makes the transition much smoother. Honestly, starting cimbalom in Korea is a pioneer's path — which is exactly what makes it cool.",
    buy: "Entry (small or used) ₩2M-6M, a new concert grand in the ₩10M range — with no Korean market, ordering from Hungarian or Romanian workshops or buying used from Europe is the only route, and international freight (large timber cargo) is its own commitment. Landmine: on a used one, the condition of roughly 125 strings and their tuning pins is your repair bill — buy without inspecting and you have added a find-a-tuner project. Check workshop and listing reputations in European cimbalom communities before you commit.",
    firstGoal: "Three-month goal: even out your cotton-mallet tremolo and play one Hungarian folk melody through with pedal resonance. The day comes when you recreate that sound from the Sherlock Holmes soundtrack in your own living room.",
  },

  kalimba: {
    how: "Flick the metal tines with both thumbs. That is genuinely all of it. Thanks to number notation, you can play the opening of 'Canon' the day you buy it even if you cannot read music at all. It is the shortest on-ramp of any instrument, and the only string-like sound you can practise lying in bed. The one wall: it is fixed in C major, so tunes with accidentals are out (chromatic models are a separate thing).",
    lesson: "Self-teachable (lessons are the rare thing) — YouTube number-notation videos are all you need, and Korea's cover-video culture is strong enough that the material is infinite. Culture centers occasionally run hobby classes, but they are not remotely necessary. This is the poster child of the zero-won lesson budget.",
    buy: "Entry ₩15,000-60,000 — available anywhere in Korea (open marketplaces, discount variety stores, music shops). For the standard 17-key C major model, ₩30,000-odd already sounds plenty good. Chinese specialists like Gecko and Hluru, plus domestic names such as Minor Sound, are the usual first buys. Landmine: some of the cheapest have sharp tine edges or buzzing, so read the reviews. Hollow-body (acoustic) and flat-board models sound different, so watch demo videos before you choose!",
    firstGoal: "One-week goal (not three months — one week, really): play 'Canon' or 'Auld Lang Syne' all the way through. By month three you can run two-hand chords plus melody at the same time and film ASMR-YouTuber-grade videos.",
  },

};

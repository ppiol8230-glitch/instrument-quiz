// English overlay — Western & period woodwinds batch. Keys match data/inst_woodwind_western.js ids 1:1.
const EN_INST_WOODWIND_WESTERN = {

  // ══════════════════ Modern woodwinds (9) ══════════════════

  recorder: {
    name: "Recorder",
    family: "Woodwind · air reed (flute family)",
    toneDesc: "A clear, gentle pipe tone. Plastic ones can sound a little plain, but a wooden recorder gives you a warm, old-world color with your breath woven right into it. The further down you go — alto, tenor, bass — the softer and mellower it gets.",
    caveats: [
      "You have to get past the 'kids' instrument' stigma yourself — the real Baroque repertoire has enough depth to keep an advanced player busy for life",
      "Dedicated recorder teachers are rare in Korea (mostly early-music specialists). The upside: the self-study resources online are world-class",
      "Your warm breath condenses in the windway and the tone starts cracking — flicking it dry every few minutes is just daily life",
    ],
    tracks: {
      baroque: { label: "Baroque proper (alto recorder)", note: "The classic adult re-entry route. Handel and Telemann sonatas on the F alto. You'll be relearning Baroque fingerings and ornaments from scratch." },
      casual: { label: "Getting started / ensemble", note: "Start with tunes you already know on soprano or tenor. Join a recorder consort and four-part playing becomes the real joy." },
    },
  },

  flute: {
    name: "Flute",
    family: "Woodwind · air reed (flute family)",
    toneDesc: "Bright, transparent highs. The low register is surprisingly dark and sultry, and there's everything in between — breathy jazz tone, pure whistle-like sound. A remarkably wide range of expression.",
    caveats: [
      "For the first 2-4 weeks you get no sound at all (that's the embouchure) — this is where most people quit",
      "It uses enough air to make you dizzy. Everyone gets the hyperventilation head-rush at least once",
      "Holding the instrument out sideways means you'll need to manage neck and shoulder tension",
    ],
    tracks: {
      classical: { label: "Classical", note: "The traditional route, with the strongest support system of all: lessons, competitions, amateur orchestras." },
      jazz: { label: "Jazz", note: "Flute jazz in the Herbie Mann lineage. That signature technique of mixing breath and humming into the tone. Plenty of players double on sax." },
      ost: { label: "Soundtracks & pop", note: "The go-to instrument for Ghibli and Disney melodies. There's a lively YouTube cover culture built around backing tracks." },
    },
  },

  piccolo: {
    name: "Piccolo",
    family: "Woodwind · air reed (flute family)",
    toneDesc: "Birdlike, piercing brilliance up at the very top. Played well, it's stardust sprinkled over the whole orchestra; played badly, it's just a shriek. The low register is unexpectedly shy and sweet.",
    caveats: [
      "Realistically for experienced flutists only — the shorter the tube, the more every intonation and embouchure error gets magnified",
      "Practicing the high register hurts your own ears (plenty of players wear earplugs, seriously)",
      "The solo repertoire is thin, so this is an ensemble position rather than a play-alone instrument",
    ],
  },

  irish_flute: {
    name: "Irish flute",
    family: "Woodwind · air reed (flute family)",
    toneDesc: "Husky, dark wooden sound — the exact opposite of the modern flute's brightness, and that's the charm. Breath and finger taps mixed into an earthy tone that locks right into Irish dance tunes.",
    caveats: [
      "It eats far more air than a modern flute — getting through a single reel is a real early goal",
      "Almost no lessons in Korea. You learn online (English-language courses like OAIM) plus the small local Irish music scene",
      "It's an ear-learning culture rather than a sheet-music one, so training your ear to lift tunes is basically mandatory",
    ],
  },

  clarinet: {
    name: "Clarinet",
    family: "Woodwind · single reed",
    toneDesc: "The low chalumeau register is dark and velvety; the top is clear and sparkling. It's like a cello and a flute living inside one instrument. Bend it klezmer-style and it laughs and cries like a person.",
    caveats: [
      "You will pass through squeak hell at least once at the register break (the bridge notes)",
      "Sorting good reeds from bad is a daily ritual — even in one box, maybe half are keepers",
      "Cold weather or a cold instrument drops the pitch a lot (true of all woodwinds, but this one is especially sensitive)",
    ],
    tracks: {
      classical: { label: "Classical", note: "The Mozart concerto and Brahms sonatas — top-tier repertoire. Amateur orchestras usually have room, too." },
      jazz: { label: "Jazz (swing)", note: "Benny Goodman's instrument. The star of the New Orleans-to-swing era, and still the lead voice in Dixieland bands." },
      klezmer: { label: "Klezmer", note: "Glissandi, bends, laughing effects. The signature voice of Eastern European Jewish music, wailing like a human throat." },
    },
  },

  oboe: {
    name: "Oboe",
    family: "Woodwind · double reed",
    toneDesc: "A plaintive, piercingly clear tone with a reedy nasal edge. It cuts through from anywhere in the orchestra, which is why it's called the prima donna of the woodwinds.",
    caveats: [
      "The problem isn't running out of air, it's having too much left — the tiny reed means low airflow at high pressure, so you have to learn to dump stale breath",
      "Your reed is half your ability on any given day. Humidity and temperature can kill yesterday's great reed overnight",
      "Self-teaching is basically impossible (you can't sort out reeds or embouchure alone). Lessons also run expensive by woodwind standards",
    ],
  },

  english_horn: {
    name: "English horn (cor anglais)",
    family: "Woodwind · double reed",
    toneDesc: "The oboe's melancholy, dropped a shade darker and more pastoral. It's the standard voice for sunsets, homesickness and prayer — when this instrument stands up in an orchestra, the hall goes quiet.",
    caveats: [
      "Realistically for experienced oboists only — the fingerings carry over, but reeds and breath support have to be relearned",
      "It's not a permanent chair; you get called in for specific pieces, so gigs come and go if you want it as your main hobby",
      "Despite the name it has nothing to do with England or with horns — even the etymology is still argued over",
    ],
  },

  bassoon: {
    name: "Bassoon",
    family: "Woodwind · double reed",
    toneDesc: "The low voice of dry wood. The bottom is solid and homely; climb into the tenor range and out comes something achingly close to a human voice. Its staccato is the best comic acting in the woodwind section.",
    caveats: [
      "The startup cost is the highest in the woodwinds — without rental or a used instrument the entry barrier is steep",
      "Reed dependence and reed upkeep are on par with the oboe (the double-reed fate)",
      "You'll be reading tenor clef (neither treble nor bass, a third thing) — extra sight-reading homework",
    ],
  },

  saxophone: {
    name: "Saxophone",
    family: "Woodwind · single reed (metal body)",
    toneDesc: "The wind instrument that comes closest to a human voice. From subtone whispers on a ballad to belted-out solos, the expressive range is wide and wonderfully intuitive. Alto is bright and sunny; tenor is thick and husky.",
    caveats: [
      "Noise decides your fate — buy one without a practice-space plan and it goes straight into the closet",
      "Saliva and condensation build up constantly, so a towel on the floor and regular swabbing become routine",
      "There's a big gap between 'easy to make a sound' and 'a good sound' — you'll be onstage in three months, but tone is a ten-year study",
    ],
    tracks: {
      jazz: { label: "Jazz", note: "The Charlie Parker and Coltrane lineage. Improvisation is the whole point, so scales and theory come along for the ride." },
      pop: { label: "Pop & busking", note: "The practical route: put on a backing track and sing the melody. Kenny G-style ballads included — the fastest track to your first gig." },
      trot: { label: "Trot & Korean pop", note: "The mainstream hobby for middle-aged players in Korea. Clubs, saxophone cafes and event stages are everywhere in the country." },
      classical: { label: "Classical", note: "Restrained vibrato and orthodox technique. There's a whole separate world of concert repertoire and saxophone quartets." },
    },
    variants: {
      yds: { label: "Digital saxophone (Yamaha YDS)", note: "Real saxophone key layout, but you can practice in headphones. Around $550-$620." },
      aerophone: { label: "Aerophone (Roland)", note: "A digital wind synth with sax-compatible fingering. Headphone practice, almost no saliva — it sidesteps the apartment problem entirely. Around $410-$750." },
    },
  },

  // ══════════════════ Baroque & Renaissance winds (8) ══════════════════

  traverso: {
    name: "Traverso (Baroque flute)",
    family: "Period woodwind · air reed (flute family)",
    toneDesc: "Smaller, darker and much closer to a human breath than a modern flute. The chromatic notes you get from fork fingerings each have their own color — not a flaw, but raw material for Baroque rhetoric.",
    caveats: [
      "Even modern flutists regret it at first — with no keys you handle every chromatic note with fork fingerings plus lip correction",
      "Teachers in Korea are a handful of early-music specialists, mostly in Seoul; online lessons alongside are the realistic plan",
      "Playing with others brings pitch politics (A=415Hz and friends — a semitone away from modern instruments)",
    ],
  },

  baroque_oboe: {
    name: "Baroque oboe",
    family: "Period woodwind · double reed",
    toneDesc: "Take the modern oboe's laser focus and loosen it — what's left is a round, pastoral reed sound. It's often called the Baroque instrument that blends best with the human voice.",
    caveats: [
      "Lessons and reed supply in Korea run on personal connections — plugging into the early-music community comes first",
      "If you don't scrape your own reeds the instrument doesn't stay playable (even more DIY-dependent than the modern oboe)",
      "It lives at A=415Hz, so playing along with modern instruments is off the table",
    ],
  },

  dulcian: {
    name: "Dulcian",
    family: "Period woodwind · double reed",
    toneDesc: "A more primitive bass than the bassoon, with the buzz of the reed left in. Blend it with viols and sackbuts and you get that organ-like Renaissance low end.",
    caveats: [
      "Getting hold of one is a project in itself — nothing sold in Korea, so expect a European workshop order and a wait",
      "Teachers are a few bassoon majors who studied early music abroad. European summer workshops are the real school",
      "For bassoonists the fingerings are 'almost the same but subtly different', which is somehow more confusing in places",
    ],
  },

  chalumeau: {
    name: "Chalumeau",
    family: "Period woodwind · single reed",
    toneDesc: "Just the dark velvet of the clarinet's low register, extracted. Candle-flame quiet, and it blends beautifully with voices and recorders in chamber music.",
    caveats: [
      "The range is barely an octave and a second — this instrument picks its repertoire; it isn't an all-rounder",
      "Recognition in Korea is essentially zero. Instruments and information all come from German and English sources",
      "The trap is that the fingering is 'almost' the same as a recorder — the tiny differences are where the squeaks live",
    ],
  },

  shawm: {
    name: "Shawm",
    family: "Period woodwind · double reed",
    toneDesc: "A brilliant, tearing reed-trumpet blast. The tone was engineered to carry 100m outdoors, so indoors it's violence and in a town square it's the party itself.",
    caveats: [
      "It simply doesn't work as an indoor hobby — your practice space is the entry barrier",
      "The playing population in Korea is basically a few historical-reenactment and early-music groups",
      "The pirouette technique (lips not fully touching the reed) has to be learned fresh even by oboists",
    ],
  },

  crumhorn: {
    name: "Crumhorn",
    family: "Period woodwind · double reed (windcap)",
    toneDesc: "A buzzing tone somewhere between a kazoo and a bagpipe. Funny on its own; stack four of them in harmony and it turns unexpectedly into a splendid Renaissance organ.",
    caveats: [
      "The range is only a ninth — the design won't overblow into the next octave, so as a solo instrument you hit the ceiling fast",
      "If you can't hold steady breath pressure the pitch wobbles (the price of the windcap)",
      "Alone it's only half an instrument — it needs a consort, and finding those people in Korea is the hardest part",
    ],
  },

  cornetto: {
    name: "Cornetto",
    family: "Period hybrid · wooden body, brass embouchure",
    toneDesc: "A trumpet's radiance wrapped in the softness of a human voice. People have been saying since the Renaissance that next to a soprano you can't tell which one is the singer.",
    caveats: [
      "The hardest wind instrument there is — a brass embouchure and woodwind fingerings at once, with intonation entirely on your ear",
      "Trumpet experience 'or' recorder experience isn't enough; you really need something close to both",
      "You can count Korean players on one hand — learning means European workshops and online lessons, full stop",
      "Miss a day and your lip resets, so it carries a brass player's upkeep cost (in time)",
    ],
  },

  musette_de_cour: {
    name: "Musette de cour",
    family: "Period woodwind · bellows bagpipe",
    toneDesc: "A soft, sweet reed sound like a miniature bagpipe, over a low-lying drone. It was designed to sit indoors with harpsichord and viol — a bagpipe at chamber-music volume.",
    caveats: [
      "Finding an instrument is harder than learning one — so rare it's unclear whether anyone in Korea owns one",
      "Holding steady bellows pressure is trickier than it looks; here your arm does the suffering instead of your lungs",
      "The repertoire is narrow and deep (French Baroque — Hotteterre, Chedeville). You have to love that world to stick with it",
      "Price, waiting list and repairs all depend on European workshops, so the long-term risk is real",
    ],
  },

};

const EN_GUIDE_WOODWIND_WESTERN = {

  // ══════════════════ Modern woodwinds (9) ══════════════════

  recorder: {
    how: "Yes, that recorder. But taking it up as an adult isn't the school-supply recorder — it's a reunion with the real thing. Get yourself an alto recorder (in F), open up a Baroque fingering chart, and start with the slow movements of Handel and Telemann sonatas. What you learned in elementary school was probably German fingering, so 'reinstalling' Baroque fingering is your first hurdle. There's an ocean of free lessons on YouTube (English-language included), which makes the self-study support here the best of any wind instrument.",
    lesson: "Self-study is fine — the sound comes easily, so YouTube plus a method book will carry you a long way. But once you want to really dig into Baroque ornaments and articulation (and you will), look for an early-music specialist. They're rare, but they exist.",
    buy: "Don't dismiss plastic — the Yamaha 300 series (YRA-302B/314 alto, about $20-$40) and the upper Aulos models get used as practice horns by music majors. Want the taste of wood? Entry-level Moeck or Mollenhauer runs $70-$270. There's exactly one landmine: trying to practice seriously on a $5 stationery-shop recorder — its intonation lives in another dimension.",
    firstGoal: "Within three months, play one slow movement of a Handel sonata on alto recorder start to finish. The moment you feel 'oh, this isn't that elementary-school toy at all' — mission accomplished.",
  },

  flute: {
    how: "For the first two weeks you practice on the headjoint alone. It's the same principle as blowing across a bottle top, so at first you'll get nothing but air noise — and a bit of dizziness (the hyperventilation head-rush is a rite of passage for everyone). Once a sound appears, assemble the body and start adding fingerings. Get past that first-sound gate and the rest is a gentle uphill walk.",
    lesson: "Lessons recommended — self-study is possible, but you can't fix your embouchure with a selfie. Even three months of lessons at the start saves you months of flailing. Happily, Korea has the strongest flute teaching network of any woodwind, so studios and private teachers are easy to find.",
    buy: "The standard is the Yamaha YFL-222 (about $380-$470 as of 2026) — the comfort food of beginner flutes. With more budget, step up to the YFL-312 (silver headjoint instead of nickel silver). Korean and Chinese makes around $210 will get you started, but key precision is a lottery, so try before you buy if you can. Landmine: those $70 'complete set' flutes online often have intonation on par with a toy kit.",
    firstGoal: "A steady first-octave scale within a month, and within three months one Ghibli melody played cleanly ('Always With Me' is a great pick). Get there and the closet-exile risk has passed.",
  },

  piccolo: {
    how: "Honestly? Our conscience says don't start on piccolo alone. The proper route is adding it as a second instrument after a year or two of flute. If you already play flute the fingerings carry over almost unchanged, so getting going is quick — but with a tube half the length, intonation and embouchure errors double, and training your ear to catch that is the real work. Get earplugs. We're not joking.",
    lesson: "Lessons recommended — most flute teachers will cover piccolo too. Sorting out high-register intonation alone tends to spiral into 'is it my ears or the instrument?'",
    buy: "The Yamaha YPC-32 (resin body) at around $680 is the standard entry choice. Piccolo has an unusually high 'you get what you pay for' index, and cheap imports can have dangerous intonation. Borrowing one from a wind band's stock is a very realistic way to start.",
    firstGoal: "Debut on a piccolo part with a wind band or orchestra — the obbligato in 'The Stars and Stripes Forever' is the dream of this instrument's whole life.",
  },

  irish_flute: {
    how: "Playing tin whistle for a few months first is basically the official entrance (same fingering). Then you move to a polymer Irish flute and pick up reels and jigs by ear. This is an ear-learning world rather than a sheet-music one, so slowing down a favorite session video and playing along is literally the curriculum. It drinks far more air than a modern flute, so getting through one full reel is your early boss fight.",
    lesson: "Self-study is fine (and mostly compulsory) — there are almost no teachers in Korea. Instead, English-language online courses like OAIM are excellent, and if you show up to the local Irish music community and session nights, the veterans will welcome you.",
    buy: "A Dixon polymer flute in D, about $140-$270 imported, is the entry standard. Wooden workshop instruments run $480 to $1,350-plus, and since the holes are widely spaced, small-handed players must check the stretch before buying. Landmine: mystery bamboo tubes sold as 'Irish flutes' — lovely as decor.",
    firstGoal: "Memorize three reels (no sheet music!) and join in at an Irish session. That first pint at your first session is the real reward here.",
  },

  clarinet: {
    how: "Start with just the mouthpiece, reed and barrel, and stabilize that first squeak; then assemble the whole instrument. The first sound comes about as easily as on sax — but the real boss is the register break in the middle, where you'll be visiting squeak hell at least once. Come back from it and you've got a four-octave do-everything instrument in your hands.",
    lesson: "Lessons recommended — having someone set up your embouchure and reed in the early weeks doubles your speed. The classical teaching network is solid; jazz and klezmer teachers are scarce, so building the fundamentals classically and then branching out is the practical path.",
    buy: "The Yamaha YCL-255 (ABS resin, about $550-$680) is the beginner staple. With more budget, the Buffet Crampon Prodige or E11 is the entry point into a legendary clarinet house. Reeds are consumables ($5-$15 a month), so build that into the budget from day one. Landmine: the $140 online 'complete sets' — bent keys and leaking pads are common.",
    firstGoal: "Within three months, get past the register break with a stable two-octave scale, and play the first eight bars of the Mozart concerto's second movement like velvet. That's when buying the clarinet pays off.",
  },

  oboe: {
    how: "The oboe is an instrument where you find a teacher before you find an instrument. Do it the other way around and you'll suffer. The first few months are mostly stabilizing a steady tone on the reed alone and learning a thin, long exhale. It's the strange instrument where the problem isn't running out of air but having too much left, so plan on relearning how to breathe. Starting on a rental (orchestra stock or a shop) is the standard move.",
    lesson: "Lessons essential — choosing reeds and building an embouchure alone is effectively impossible. And sourcing reeds is part of the lessons: rather than store-bought reeds ($10-$20 each, lasting 2-4 weeks), buying hand-scraped reeds from your teacher or a music major gives far more consistent quality. Without that connection, the reed lottery breaks your spirit before your lips.",
    buy: "Don't rush to buy — rental and used come first. When you do buy, a decent student model (Yamaha YOB-431 class) runs $2,050-$2,750. Landmine: any oboe under $680 has disastrous intonation, and you end up in the 'it's not the oboe that's hard, it's this oboe' trap. Budget $20-$40 a month for reeds as a fixed cost.",
    firstGoal: "Within six months, play the opening phrase of 'Gabriel's Oboe' with a steady long tone. The moment that one line works, every hour you gave to reeds is repaid.",
  },

  english_horn: {
    how: "Nobody actually 'starts' on English horn — it's a second instrument for oboists. If your oboe has reached an intermediate level the fingerings carry over almost unchanged, so the work is adapting to a bigger, more forgiving reed and reading transposed parts a fifth down. The usual story: your orchestra programs the Dvorak New World second movement, you borrow the section's instrument, and off you go.",
    lesson: "Lessons essential (from your oboe teacher) — you're transplanting reed and breath instincts from the oboe, and that needs a second pair of ears. Dedicated English horn teachers are rare, so it usually rides along with oboe lessons.",
    buy: "Student models start around $2,750, so buying your own is a last resort. For amateurs, borrowing the orchestra's instrument or buying used is the realistic path. Dedicated reeds cost more than oboe reeds at $15-$25 each — again, secure a supply from a music major. Landmine: 'I'll just stick an oboe reed in' — you won't, the specs are different.",
    firstGoal: "Debut as a guest English horn player on a large-scale piece with your orchestra. One run at the 'Goin' Home' solo and you're set for bragging rights for life.",
  },

  bassoon: {
    how: "The bassoon is another find-a-teacher-and-a-rental-first instrument. Luckily demand is so scarce that emailing an amateur orchestra with 'I'd like to learn bassoon' often unlocks a loaner instrument and an introduction to a section veteran. Once you start, the first months are making a sound on the bocal and reed, getting acquainted with nine left-thumb keys, and learning to read tenor clef.",
    lesson: "Lessons essential — anyone who cracked double-reed embouchure, reed maintenance and that unique fingering system alone exists only in legend. Part of the bassoon lesson package is that your teacher becomes your reed supply (scraping them personally or connecting you to a major). Reeds run $10-$20 each and last 2-6 weeks.",
    buy: "New student models (Schreiber or Fox Student class) run $2,750-$5,500, so buying comes later — renting from an orchestra's stock (a few tens of thousands of won a month) or going used is the proper entrance. Landmine: an imported $680 'bassoon' is most likely something bassoon-shaped with different intonation and keywork. The finger stretch is the largest in the woodwinds, so trying one in person is mandatory too.",
    firstGoal: "Join an amateur orchestra within a year — bassoonists are so chronically short that even intermediate players get recruited everywhere, and your ensemble debut comes far sooner than on other instruments.",
  },

  saxophone: {
    how: "It's the wind instrument where the first sound comes easiest, so on day one you'll startle yourself with a big honking note. Start on alto, go mouthpiece work to long tones to fingerings, and in three months you can play a full tune over a backing track. The problem isn't skill, it's decibels — planning where you'll practice (a studio, your car, outdoors, or a digital sax) is honestly step one of taking up saxophone.",
    lesson: "Lessons recommended — the sound comes on its own, but a good sound is another matter, and having someone set your early embouchure and breathing changes your tone for life. Korea is a lesson paradise with a saxophone studio in every neighborhood, and there's a bumper crop of YouTube courses for the self-taught.",
    buy: "The standard is the Yamaha YAS-280 (alto, $820-$1,050). On a tighter budget, Antigua or Korean brands at $270-$550 are plenty to start. And now the great landmine: 'saxophones' online for $35-$140 — those are saxophone-shaped objects. Bent keys and leaking pads make teachers sigh on sight. If you live in an apartment, seriously consider opening the headphone-practice route with a digital sax (Yamaha YDS, $550-$620) or an Aerophone (Roland, $410-$750).",
    firstGoal: "Within three months, play one ballad all the way through over a backing track ('Danny Boy' or a trot standard, your call) and give your family a living-room concert. On saxophone, the stage arrives fast.",
  },

  // ══════════════════ Baroque & Renaissance winds (8) ══════════════════

  traverso: {
    how: "Welcome to the world of the one-keyed Baroque flute. Even modern flutists hit a wall at first with the new rules — fork fingerings for every chromatic note plus pitch correction with your lips — so take it slowly, starting with easy minuets alongside a period method book like Quantz. If you're coming from recorder or flute you're already halfway there. Just accept up front that you'll be living in a parallel universe pitched a semitone low, at A=415Hz.",
    lesson: "Lessons recommended — there are a few early-music specialists in Korea (mostly in Seoul), and online lessons with European players are an excellent alternative. You can start on your own, but Baroque technique (unequal articulation and so on) really needs teaching before it tastes right.",
    buy: "Korean shops don't carry them — we'll be honest about that. The entry standard is the Aulos plastic traverso (AF series, $170-$310 imported), and yes, plastic is genuinely good enough for serious practice. Wooden instruments mean ordering from a European workshop (from $1,050, with a wait). Used ones circulate in the early-music and recorder communities, so go say hello there first.",
    firstGoal: "Within six months, one of the Telemann Fantasias (the twelve unaccompanied ones) — the shared rite of passage for traverso players, and the moment you're glad you picked this instrument.",
  },

  baroque_oboe: {
    how: "The standard route is converting from modern oboe (two or three keys, everything else relearned as fork fingerings). Coming in fresh, we'd suggest picking up Baroque idiom on the recorder first. Either way, the real curriculum here is making your own reeds — finished ones are so hard to source that scraping cane becomes a hobby equal to playing. Before anything else, step zero is plugging into the early-music community and finding a mentor.",
    lesson: "Lessons essential — it's a double reed and you can count Korean teachers on your fingers, so you'll combine early-music contacts, European summer workshops and online lessons. Put positively: that process is itself your ticket into the early-music scene.",
    buy: "Not available in Korea — a new instrument from a European workshop (Moeck and others) is $1,350-$3,400 plus a wait, and used circulation within the early-music world is the realistic path. Reeds cost $15-$25 each imported, but making your own (tool kit extra) is the standard here. Landmine: mystery 'Baroque oboe' replicas on eBay — their intonation is neither Baroque nor modern but from a third world entirely.",
    firstGoal: "One obbligato in a Bach cantata project or a Baroque ensemble — this instrument finds its reason for existing when it blends with singers.",
  },

  dulcian: {
    how: "It's the bassoon's grandfather, so if you play bassoon you'll adapt fast once you're past the 'similar but subtly different, therefore confusing' patches. Coming in fresh, build up through recorder and then double reeds. Getting hold of an instrument is a project of its own (European workshop order, then waiting), so the starting order is: plug into the early-music community, try a real one at a workshop, then order. This isn't an instrument you buy in a hurry.",
    lesson: "Lessons essential — teachers in Korea are a handful of bassoon majors who studied early music abroad. European early-music summer workshops are the real school, and in between you get by on bassoon lessons plus online resources.",
    buy: "Nothing sold in Korea — new from a European workshop (Wolf, Moore and the like) at $1,700-$4,800 plus a wait of months to years is the honest reality. Used circulation in the early-music world and workshop rentals are the practical entrances, so knock on the community's door first. Reeds are imported ($15-$25 each) or homemade. Less a landmine than a trap: 'a bassoon reed will do, right?' — similar, but there is a dedicated reed.",
    firstGoal: "Debut on the bass line in a Renaissance consort — that first rehearsal where your low end fuses with viols and sackbuts into something organ-like is this instrument's proof of existence.",
  },

  chalumeau: {
    how: "Recorder fingering with the velvet of the clarinet's low register — it's the recorder world's hidden cheat code. If you play recorder the fingering is 'almost' identical (the tiny differences that make you squeak are a rather cute trap); if you play clarinet you bring your reed instincts straight over. Just know going in that with a range of only an octave and a second, this isn't an all-rounder — it's an instrument you play because you love that particular color.",
    lesson: "Self-study is fine — there are essentially no teachers in Korea, but since it sits at the intersection of recorder and single-reed experience, it's the easiest period instrument to learn alone. Scores of the Vivaldi and Telemann chalumeau pieces plus YouTube reference videos will keep you rolling.",
    buy: "Not distributed in Korea — small-batch instruments from the German workshop Kunath, about $240-$480 imported, are the entry standard (tenor size and up is the comfortable start). You can repurpose clarinet reeds, so running costs are kind. Landmine: the toy-grade 'shalmei' horns that come up when you search the name — cousins in spelling only.",
    firstGoal: "It's a rare reed instrument you can actually practice in an apartment in the evening, so within three months play a Vivaldi chalumeau piece at candle-flame volume — then slip into a recorder consort to reinforce the bass line.",
  },

  shawm: {
    how: "First ask yourself: do I have somewhere outdoors to practice? The shawm doesn't work as an indoor hobby; it's the loudspeaker of squares and festivals. If the answer is yes — start on a Susato plastic shawm and learn the pirouette technique (lips not fully touching the reed). Even oboists learn that one from scratch. Historical reenactment events and medieval festival ensembles are this instrument's natural habitat, so finding that scene comes first.",
    lesson: "Lessons recommended (written that way, read as 'quest: find a master') — the playing population in Korea is a small reenactment and early-music circle, so those people plus European workshops and online material are your school. With double-reed experience (oboe or taepyeongso), you're halfway to self-taught.",
    buy: "Not available in Korea — a Susato plastic shawm at $210-$340 imported is the entry standard, and wooden workshop instruments start above $680 with a wait. The big dedicated double reeds are imported too ($15-$20 each) or homemade. Landmine: souvenir-shop 'medieval pipes' — they make noise, but their intonation stayed behind in the Middle Ages.",
    firstGoal: "March in a procession with a Renaissance loud band (shawm plus sackbuts) at a reenactment event or outdoor festival — hearing your own sound carry 100m is a thrill no indoor instrument can give you.",
  },

  crumhorn: {
    how: "This cute little wind instrument, curved like an umbrella handle, hides its reed inside a cap, so no embouchure is needed — it's the double reed you can jump to right after recorder. What it does demand is holding steady breath pressure (otherwise the pitch bobs around). With a range of only a ninth you'll get bored alone fast, so start with 'form an SATB consort' as the final goal from day one. The catch is that recruiting comrades is harder than practicing.",
    lesson: "Self-study is fine — the design is simple, so a recorder player with a method book and decent ears is set. If you get curious about Renaissance ensemble practice (musica ficta and so on), ask in the early-music community. Assume there is no dedicated teacher in Korea.",
    buy: "Not available in Korea — Susato plastic runs $270-$410 imported, and wooden ones from Moeck and others start above $680. The reed sits inside the cap and never touches your mouth, so it lasts a long time ($15-$25 per replacement). There aren't many landmines, but buying only a soprano leaves you with a 'buzzing kazoo solo', so plan for alto and tenor to join it.",
    firstGoal: "Recruit three comrades and play one Renaissance dance as a crumhorn quartet — watching a silly sound alone turn into a magnificent organ when four of them meet is what completes this instrument.",
  },

  cornetto: {
    how: "It's a dual-skill instrument — woodwind fingerings plus brass buzzing — and the period-performance world's certified hardest. Entry is smoother if you have something close to both trumpet and recorder instincts; if you only have one, trumpet helps more (buzzing is the rarer resource). The first year is mouthpiece buzzing plus 'aiming by ear' through a one-octave scale, and it carries a brass player's upkeep in time: skip a day and your lip resets. Come prepared, and the instrument closest to a human voice is waiting.",
    lesson: "Lessons essential — Korean players number about five, so European workshops and online lessons (plenty of European players do video lessons) are the real route. Taking trumpet lessons alongside for buzzing fundamentals is a good detour.",
    buy: "Not available in Korea — resin beginner replicas run $270-$480 imported, and the industry-standard Christopher Monk workshop resin/leather models are $680-$1,150 (imported from the UK). Handmade wooden ones run into the millions plus a wait. There are almost no consumables, so after the initial outlay it only costs you time. If your hands are small, starting on a small cornettino is an option.",
    firstGoal: "After a year, play one vocal melody 'as if singing' — keep joining a Monteverdi Vespers as your grand dream, and for now just sing one soprano chant line like a human voice. That's this instrument's first real thrill.",
  },

  musette_de_cour: {
    how: "The only wind instrument that needs no saliva, no lung capacity and no embouchure — but where 'find an instrument' is the final boss of an all-time rarity. The entire curriculum is the upper-body coordination of pumping the bellows with your right arm while fingering with both hands, so the physical gate is low and the acquisition gate is Everest. The realistic order: plug into the early-music and bagpipe communities, get a feel for bellows on a cousin instrument like smallpipes, then order from a European workshop or hunt an auction.",
    lesson: "Lessons essential (about that teacher, though...) — it's unclear whether Korea has any players at all, so online lessons with European musette players plus the French Baroque literature (the Hotteterre method genuinely exists) are your school. Finding someone in the bagpipe community with bellows-pipe experience helps enormously.",
    buy: "Not only unavailable in Korea — even in Europe it means a commissioned build from a handful of workshops (millions of won plus a wait of years). Period-instrument auctions and used circulation are effectively the only shortcut, so 'looking for the instrument' becomes part of the hobby. A realistic budget alternative: start on Scottish smallpipes (bellows-blown, comparatively easy to find) with the musette as your long-term goal.",
    firstGoal: "Play one Chedeville piece at a French Baroque salon concert with your harpsichord and viol friends — the complete Versailles aristocrat cosplay. A silk bag cover is optional, but strongly recommended.",
  },

};

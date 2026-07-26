// English overlay — bowed strings batch. Keys match data/inst_bowed.js ids 1:1.
const EN_INST_BOWED = {

  violin: {
    name: "Violin",
    family: "Bowed strings · violin family",
    toneDesc: "People say it's the closest thing to a singing human voice. The bow shapes dynamics and vibrato in real time, so a good stroke weeps and a bad one scrapes — both the ceiling and the early floor of expression are extreme.",
    caveats: [
      "There will absolutely be a year or two where the sound is painful to listen to — you and everyone you live with will need patience",
      "Pitch lives entirely in your ear and your hand, so teaching yourself bakes in odd habits fast. Lessons for at least the first few months are strongly urged",
      "This is one of the worst instruments for 'a whole song in a month' — if you want fast rewards, another family suits you better",
    ],
    tracks: {
      classical: { label: "Classical", note: "Score-driven. Lessons, method books, competitions, amateur orchestras — the infrastructure in Korea is unmatched. The entry barrier is honestly the steepest, too." },
      country_fiddle: { label: "Country Fiddle", note: "Same instrument, different universe. Double-stop rhythm and shuffle bowing. It's an ear-taught culture, so sheet music pressure is light." },
      irish_fiddle: { label: "Irish Fiddle", note: "Jigs and reels played together at sessions. Korea has Irish session meetups too. Ornaments (rolls, cuts) are the core skill." },
      gypsy_klezmer: { label: "Gypsy / Klezmer", note: "Wailing and laughing at the extremes. Sliding glissandi and improvisation. Unbeatable stage presence." },
      jazz: { label: "Jazz Violin", note: "Swing violin in the Stephane Grappelli tradition. Improvising over changes is the day job, so plan on studying harmony alongside." },
    },
    variants: {
      silent_violin: { label: "Electric / Silent Violin", note: "An electric violin with no body, or just a skeleton frame. Practice through headphones — the apartment night problem solved outright. Fingering and bow feel are identical to acoustic, so switching costs you almost nothing. Yamaha and others, ₩400,000–1M." },
    },
  },

  viola: {
    name: "Viola",
    family: "Bowed strings · violin family",
    toneDesc: "Darker and huskier than a violin, sitting in the middle register. Often called the closest match to a human alto voice. It doesn't sparkle on top, but it has a warmth you never tire of.",
    caveats: [
      "You have to learn the alto clef from scratch — even seasoned violin readers stumble here for a moment",
      "Expect solo fireworks and you'll be let down — this instrument's real job is the harmony inside an ensemble",
      "For the same reasons as the violin, the rough-sounding early stretch is fully included",
    ],
    variants: {
      electric_viola: { label: "Electric Viola", note: "An electric viola for headphone practice. Fewer options than the violin versions, but Yamaha and others make them. Solves apartment night practice." },
    },
  },

  cello: {
    name: "Cello",
    family: "Bowed strings · violin family",
    toneDesc: "From a bass that hums in your chest to highs that sing like a tenor. Even plain open strings already sound decent, so the early payoff for your ears is clearly better than a violin's.",
    caveats: [
      "Transport decides whether you stick with it — picture your route to lessons and rehearsals before you commit",
      "Flying means buying it its own seat (checking it as luggage risks damage)",
      "Startup costs (instrument plus rental plus lessons) are on the high side for a string instrument",
    ],
    tracks: {
      classical: { label: "Classical", note: "The traditional track, with Bach's solo suites waiting as a lifelong goal. Amateur orchestras always want more cellos, too." },
      crossover: { label: "Crossover / OST", note: "The pop and film-score cover culture that 2Cellos made mainstream. Lay a melody over a YouTube backing track and it already looks and sounds like something — a great hobby goal." },
    },
    variants: {
      electric_cello: { label: "Electric Cello", note: "A skeleton-bodied electric cello. Headphone practice fixes the apartment night problem, and the shrunken body makes carrying it far easier. Yamaha and others from around ₩1M." },
    },
  },

  double_bass: {
    name: "Double bass (contrabass)",
    family: "Bowed strings · viol lineage (the violin family's lowest voice)",
    toneDesc: "The low end that lays the floor of a room. Bowed, it goes dark and solemn; plucked, it walks along with a bouncing groove — its whole personality changes with technique.",
    caveats: [
      "Clear a spot to stand it up at home first — this thing is furniture-sized",
      "Getting to lessons and rehearsals without a car takes serious willpower",
      "Not for anyone who wants to be the melodic lead — the joy here is in setting the table for everyone else",
    ],
    tracks: {
      classical: { label: "Classical (bowed)", note: "German or French bow, holding down the orchestra's lowest voice. Amateur orchestras are always short on basses — along with viola, the part that gets recruited." },
      jazz: { label: "Jazz (pizzicato)", note: "Walking bass is the day job. Learn two or three chord roots and you can already function at a jam session — the beating heart of improvised music." },
      rockabilly: { label: "Rockabilly (slap)", note: "Slap technique, snapping the strings against the fingerboard so you play percussion at the same time. Spinning the bass and climbing on it comes with the package." },
    },
    variants: {
      eub: { label: "EUB (Electric Upright Bass)", note: "A bodyless stick-style electric upright. Headphone practice plus a case the size of a ski bag solves both problems at once. From around ₩1M. You do give up the acoustic resonance." },
    },
  },

  baroque_violin: {
    name: "Baroque violin",
    family: "Bowed strings · violin family (period instrument)",
    toneDesc: "Low-tension gut strings mean less volume than a modern setup, but the overtones are rich and the bow gives every line a speaking, conversational inflection. Candlelight warmth instead of glossy shine.",
    caveats: [
      "In practice this is an instrument modern violinists cross over to — starting from zero is rare, and finding someone to teach you is just as hard",
      "Korea's early-music teachers are a small circle around Seoul — you usually connect through university early-music programs or period-performance groups",
      "Gut strings let their pitch wander with the weather — tuning mid-concert is just normal life around here",
      "Instruments, bows and strings mostly come from abroad — prices swing with the exchange rate",
    ],
  },

  baroque_cello: {
    name: "Baroque cello",
    family: "Bowed strings · violin family (period instrument)",
    toneDesc: "Lower tension than a modern cello means less volume, but you get that gut resonance in the box and a natural, unforced decay. Not a polished bass — a bass that smells of wood.",
    caveats: [
      "The standard path is learning modern cello first — finding a teacher in Korea who takes absolute beginners is very hard",
      "Ensemble playing (continuo) is the day job, so without a baroque ensemble to join, half the fun goes missing",
      "Gut strings and humidity control are a definite added cost over a modern cello",
    ],
  },

  viola_damore: {
    name: "Viola d'amore",
    family: "Bowed strings · viol family (period instrument)",
    toneDesc: "Play one note and the sympathetic strings under the fingerboard answer along — a faint halo and afterglow trails every sound, the most mystical color in the bowed family. Same principle as the sympathetic strings on an Indian sitar.",
    caveats: [
      "Scordatura culture, where the tuning changes from piece to piece — there is no one standard tuning, which is disorienting at first",
      "Players and teachers in Korea are a tiny handful. Building your base on modern viola and crossing over is the realistic route",
      "Be ready to spend a real chunk of your practice time tuning fourteen sympathetic strings",
    ],
  },

  viola_da_gamba: {
    name: "Viola da gamba",
    family: "Bowed strings · gamba family",
    toneDesc: "Lighter than a cello and gently nasal, quiet and mellow. It whispers up close rather than filling a hall, which makes it perfect music for a room — and that small volume is a blessing if you live in an apartment.",
    caveats: [
      "Even for cellists this isn't 'easy cello', it's a different instrument — the tuning (fourths plus a third), the underhand bow and the frets all need relearning",
      "Frets take far more pitch pressure off you than a fretless string, but they're tied gut that shifts and needs fine adjustment, and the top register runs past them — so no, the pitch isn't fully fixed",
      "The repertoire clusters before 1750 — this is not the instrument for modern tunes or pop songs",
      "Teachers and community in Korea are small (a few around Seoul) — but English-language online courses and Viola da Gamba Society materials are plentiful",
    ],
    tracks: {
      treble: { label: "Treble Viol", note: "The smallest and highest — the soprano of the consort. The cheapest, easiest-to-carry door into the gamba world." },
      tenor: { label: "Tenor Viol", note: "Holds the inner voice of the consort. Tenor players are always in short supply, so ensemble demand is high — the viola position of the gamba world." },
      bass: { label: "Bass Viol", note: "When people say 'gamba' they usually mean this one. The solo repertoire of Marin Marais and Abel, and the heart of continuo. Seven-string solo models exist too." },
    },
  },

  violoncello_da_spalla: {
    name: "Violoncello da spalla",
    family: "Bowed strings · violin family (period instrument)",
    toneDesc: "A compact low end out of a small body — it doesn't reach a cello's depth, but it speaks fast and clean, so bass melodies roll along with real agility.",
    caveats: [
      "An ultra-rare instrument where you source the instrument, the teacher and the repertoire yourself — Korea's players fit on one hand",
      "Playing information is basically European papers and YouTube videos — reading English is your method book",
      "Prices and specs aren't standardized, so asking a period-performance community before buying is essential",
    ],
  },

  lirone: {
    name: "Lirone",
    family: "Bowed strings · gamba family (period instrument)",
    toneDesc: "Several strings sustaining together lay down something like a small organ or a synth pad — a heavenly backdrop hung behind a singer.",
    caveats: [
      "Players in Korea are effectively nonexistent — learning gamba first and expanding is the only realistic route",
      "The part isn't a melody, it's figured-bass numbers (continuo symbols) — studying harmony is half of playing",
      "Not a solo instrument — without a singer or an ensemble beside you, its reason to exist gets blurry",
    ],
  },

  rebec: {
    name: "Rebec",
    family: "Bowed strings · medieval instrument",
    toneDesc: "Thin, nasal and piercing — the sound of a medieval market and dance floor, not an elegant salon. The roughness is the whole charm.",
    caveats: [
      "There are effectively no dedicated teachers in Korea — you build it up from violin basics plus English-language medieval music resources",
      "String count, size and tuning differ from instrument to instrument — there's no standard spec, so you find the answer for your own rebec",
      "The repertoire centers on medieval and Renaissance dances and songs — simple by nature, filled out with improvisation and ornament",
    ],
  },

};

const EN_GUIDE_BOWED = {

  violin: {
    how: "The standard course: line up a local string school or a private teacher, and don't buy an instrument before your first lesson. Choosing it together with your teacher dramatically cuts your odds of buying a decoration that won't hold a tuning. For the first few weeks, holding the bow and drawing open strings is perfectly normal progress.",
    lesson: "Lessons essential — pitch comes entirely from your ear and your hand position, so teaching yourself sets a strange posture and strange intonation in concrete, as a matching pair.",
    buy: "The realistic starting line is a workshop-set-up instrument around ₩300,000 (roughly ₩200,000–600,000 overall). In Korea, Shimro Master (the ₩300,000s), Stentor, Yamaha Braviol (V5S and friends) and Hyoman are the safe beginner brands. Rental (₩20,000–50,000 a month) is a fine choice too. But a ₩30,000 internet violin isn't an instrument, it's a violin-shaped noisemaker — it won't hold a tuning for one day.",
    firstGoal: "Month one: draw open strings straight with no squeaks — if you get there, the family in the next room have leveled up their patience right alongside you.",
  },

  viola: {
    how: "Getting started is nearly identical to violin — find a teacher first, then pick the instrument together, sized to your body. If you already play violin, clearing the alto clef is all it takes to join an ensemble within weeks, and total beginners are of course welcome. Amateur orchestras are waiting with open arms.",
    lesson: "Lessons essential — you're finding pitch by ear on a fretless fingerboard, and the instrument is bigger and heavier than a violin, so a bad posture setup means your neck and shoulders complain first.",
    buy: "The market is smaller, so a comparable viola costs a bit more: ₩400,000–800,000 is the real line (₩300,000–800,000 overall). Beginner violin brands like Shimro and Stentor make violas too, and workshop-checked instruments and rentals are available. Rock-bottom internet sets are the same minefield as with violins, so skip them. Choose your size (15–16.5 inches) strictly by arm length.",
    firstGoal: "Month one: draw the open C-G-D-A evenly and memorize where 'do' sits in alto clef — that alone makes you a promising prospect in viola circles.",
  },

  cello: {
    how: "The adult-beginner infrastructure here is good, so a cello school or private lessons is all you need. Costs run high up front, so the proven route is: rent for three months, then buy if it looks like it's sticking. Even open strings sound decent, so day one already feels pretty good.",
    lesson: "Lessons essential — sitting posture, endpin height and bow angle are 80% of the sound, and setting all that up alone gets you a variety pack of bad habits.",
    buy: "A beginner outfit is ₩800,000–2M, on the pricier end for a string instrument, which is why many adults start with rental (₩50,000–150,000 a month). If you buy, get a workshop or luthier setup rather than the cheapest listing online. For reference, a set of strings alone is ₩150,000–300,000, and the trade's old wisdom is that good strings on a cheap cello beats the other way around.",
    firstGoal: "Month one: draw all four open strings using the full length of the bow — if you felt the bass roll through the floor and reach the neighbors downstairs, that's success (please also lay down a mat).",
  },

  double_bass: {
    how: "Decide your track first — classical (bowed) or jazz (pizzicato) — then look for a teacher on that side. The instrument is furniture-sized, so the realistic order is: clear a space at home, rent, then start lessons. Simulate your transport situation (car or no car) before you begin, too.",
    lesson: "Lessons essential — brace a huge instrument wrong, or learn the 1-2-4 fingering system wrong, and your lower back and left hand go on strike together.",
    buy: "A new plywood beginner bass is ₩1.5M–4M. New prices are steep, so rental (around ₩100,000 a month) or a used find through the early-music and jazz communities is the standard entry route. Always have a specialist luthier check the setup before buying — a bass with the wrong string height is a left-hand weight machine. Watch for warped fingerboards on rock-bottom imports.",
    firstGoal: "Month one: play steady open-string low notes in time, thump-thump — get that and you're already first in line to be recruited by a band.",
  },

  baroque_violin: {
    how: "The standard route is building your foundation on modern violin and then crossing over. The most realistic first step is the 'half entry': put a baroque bow (₩300,000–800,000) and gut strings on the modern violin you already own — that setup alone is plenty to start practicing baroque phrasing. Knock on the doors of Korea's early-music ensembles and university early-music programs first.",
    lesson: "Lessons recommended — even for modern players, holding the instrument without a chinrest and the grammar of the baroque bow are relearning territory, so it's worth asking around the community for one of the few early-music specialists near Seoul.",
    buy: "A dedicated student instrument runs ₩1.5M–4.5M ordered from overseas workshops. Rather than buying one right away, though, your wallet is safer if you start with the baroque bow plus gut strings and shop for an instrument once you're sure. Budget for the strings as well: ₩100,000–200,000 a set with a 3–6 month lifespan, a whole kingdom of consumables. For sellers and makers, advice from the period-performance community is the best minesweeper there is.",
    firstGoal: "Month one: rest the instrument on your collarbone with no chinrest and feel a baroque stroke let an open string taper away at the end — light one candle and the mood is complete.",
  },

  baroque_cello: {
    how: "Learning modern cello first and crossing over is essentially the only standard route. Step one is the conversion entry: pull the endpin out of the cello you have and put on gut strings and a baroque bow (₩500,000–1.5M) — start by practicing how it feels to grip the instrument with your calves. Ensemble work (continuo) is the day job, so finding a baroque ensemble in advance doubles the fun.",
    lesson: "Lessons recommended — teachers in Korea are very few, so the realistic move is a two-track strategy: build the basics in modern cello lessons, then get connected to baroque technique coaching through the early-music community.",
    buy: "A dedicated instrument is ₩2.5M–7M, imported or custom-ordered. Start with the converted setup, and decide on a dedicated instrument only after consulting the period-performance community. Cello gut strings are ₩300,000–600,000 a set and don't last long — upper-tier running costs — so buy humidity gear (a Dampit and a hygrometer) as part of the package.",
    firstGoal: "Month one: hold the instrument with your calves, no endpin, and draw open strings — if it doesn't slide away from you, you've acquired the same leg strength cellists had 300 years ago.",
  },

  viola_damore: {
    how: "The realistic path is building your base on modern viola or violin and then crossing over. Players and teachers in Korea are a tiny handful, so before you start, ask the early-music community what routes to learning actually exist right now. Between that and the scordatura culture of retuning for every piece, half of this instrument is information gathering.",
    lesson: "Lessons recommended — the hold is the same as viola, but seven-string fingering and sympathetic-string setup are rough to pioneer alone, so if you can get coaching from an early-music specialist, take it without hesitation.",
    buy: "There's essentially no domestic distribution, so custom orders or importing are the only routes, and you should budget widely: ₩3M–9M. The very idea of a 'mass-market beginner model' barely exists here, so community advice before buying isn't optional, it's required. With 13–14 strings, put string costs and tuning labor into your budget and your schedule up front.",
    firstGoal: "Month one: bow a single playing string and listen for the sympathetic strings ringing faintly along behind it — if everything is in tune, you're already halfway there (which also means tuning takes a while).",
  },

  viola_da_gamba: {
    how: "Rare among early instruments, the door here is genuinely open to beginners. Step one is checking with Korean communities and clubs — the Korean Viola da Gamba Society and similar — about classes and whether student instruments can be rented (arrangements change over time, so ask them directly). If you play guitar, the frets and the fourths-plus-a-third tuning make this fingerboard feel familiar.",
    lesson: "Lessons recommended — the underhand bow goes sideways fast if you teach yourself, but the frets help you with pitch, so with guidance the progress curve is gentle by bowed-string standards.",
    buy: "Imported from Chinese workshops (Lu-Mi and others), treble and tenor start around ₩2.5M and bass around ₩4M (₩2.5M–6M overall). Domestic distribution is nearly nonexistent, so importing, custom orders and used finds through the early-music community are the real routes. Safest is to start on a society or club rental, settle on your size (treble/tenor/bass), then buy — a cheap 'viol' of unknown origin can cost more in setup than it saved you.",
    firstGoal: "Month one: hold the bow underhand and whisper your way across all six open strings — a bowed string instrument you can practice at night without the neighbors noticing, that's the gamba's superpower.",
  },

  violoncello_da_spalla: {
    how: "The realistic approach is as a 'second instrument' on top of violin, viola or cello experience. Korea's players fit on one hand, so before you start, check with the period-performance community about sourcing an instrument and whether anyone can teach you. Almost all playing information is European video and academic papers, so reading English is effectively your method book.",
    lesson: "Lessons recommended — a dedicated teacher is hard to find in Korea, so the realistic shape is pioneering it yourself while taking parallel guidance from a baroque violin or cello teacher.",
    buy: "There's no mass-market beginner segment here, only the world of asking for quotes — budget ₩4M–12M for custom work from a workshop or one of the few overseas makers (Badiarov and others). Prices and specs aren't standardized, so community advice before buying is essential, and a mystery small cello sold as a 'spalla' may just be a different instrument with a strap on it.",
    firstGoal: "Month one: strap the instrument to your chest and draw the open C-G-D-A steadily — the moment you produce cello range standing up, stares from every string player nearby are guaranteed.",
  },

  lirone: {
    how: "Learning viola da gamba first and expanding from there is essentially the only route. Players in Korea are effectively nonexistent, so digging through the early-music community and European course listings is itself the entry process. You read figured-bass numbers instead of a melody line, so studying harmony is half of your practice.",
    lesson: "Lessons recommended — though good luck finding a teacher in Korea, which means building your own curriculum out of gamba lessons, continuo (harmony) study, and masterclasses abroad.",
    buy: "No mass-market model exists; this is custom-order only — figure roughly ₩4M–12M based on gamba workshop quotes, though only an actual quote knows for sure. Community advice before buying is a must. With 9–16 strings, string costs and tuning time are constant, and an instrument that's a 'lirone' in name only is obviously a landmine.",
    firstGoal: "Month one: get 3–5 strings ringing together in a single bow stroke as a chord pad — when your room suddenly turns into a 17th-century church, that's success.",
  },

  rebec: {
    how: "You build this one on violin basics (a few months of lessons is enough) plus resources from the medieval music community. Fifths tuning is common, so violin fingering transfers straight over, and the tunes themselves are simple enough that reaching your first piece is the fastest of any ultra-rare instrument. String count and tuning vary from one rebec to the next, though, so the answer for your instrument is yours to find.",
    lesson: "Self-teaching OK — there are effectively no dedicated teachers in Korea anyway, and violin basics plus English-language medieval music resources are enough to pioneer a hobby level (do build those violin basics with a teacher, though).",
    buy: "No domestic distribution, so the route is British early-music shops (Early Music Shop and the like) or European workshops; budget ₩700,000–2M including shipping and duties. There's no standard spec, so it's safest to bring photos and specs to the early-music community before buying — the classic landmine is buying a decorative 'medieval-style' wall hanging and expecting to play it.",
    firstGoal: "Month one: play one medieval dance tune all the way through, nasal and rough — the romance of bowing the very instrument the angels hold in old paintings, in your own room; that's all of it, and it's plenty.",
  },

};

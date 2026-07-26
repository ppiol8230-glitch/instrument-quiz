// English overlay — guitar & mandolin family batch. Keys match data/inst_guitar_mandolin.js ids 1:1.
const EN_INST_GUITAR_MANDOLIN = {

  // ═══════════════ guitar family ═══════════════

  classical_guitar: {
    name: "Classical guitar",
    family: "Plucked · guitar family",
    toneDesc: "Nylon gives it that round, warm voice. None of the steel-string glare, so it's easy on the ears late at night. The tone changes character with the smallest shift in your fingertips.",
    caveats: [
      "Growing and shaping your right-hand nails is a quietly real barrier to entry",
      "The traditional classical track requires reading notation, so self-teaching has some dry stretches"
    ],
    tracks: {
      classical: { label: "Classical (traditional)", note: "Tarrega, Sor, Bach transcriptions. Score-based, and it leads on into competitions and ensemble playing." },
      bossa: { label: "Bossa nova", note: "Jobim-style chords with syncopated comping. A track that travels with a voice, and a lovely doorway into jazz harmony." }
    }
  },

  flamenco_guitar: {
    name: "Flamenco guitar",
    family: "Plucked · guitar family",
    toneDesc: "Fast attack, dry, and it cuts off short. When the rasgueado really rolls, one guitar is playing percussion and chords at the same time.",
    caveats: [
      "The 12-beat compas (rhythmic cycle) is the real gate - it's a rhythm fight, not a chord fight",
      "Specialist teachers are rare in Korea. A few Seoul studios and private teachers, otherwise you're leaning on Spanish and English-language videos",
      "The deeper you go, the more it becomes one team with dancers and singers - a different animal from a hobby you finish alone"
    ]
  },

  acoustic_guitar: {
    name: "Acoustic guitar",
    family: "Plucked · guitar family",
    toneDesc: "That bright, wide-open steel-string ring. Strumming sounds like a full wall of sound; fingerstyle sounds like a glowing music box.",
    caveats: [
      "The dropout rate peaks during the sore-fingertip stretch (2 to 4 weeks) - clear that and you're through",
      "The F chord (barre) is waiting as the second wall"
    ],
    tracks: {
      songwriter: { label: "Singer-songwriter (strumming)", note: "Four chords and you have your first song. If accompanying your own singing is the goal, this is the shortest route. Usable at buskings and gatherings right away." },
      fingerstyle: { label: "Fingerstyle", note: "Melody, bass and percussion all from one player. Slower to get going, but it stands complete on its own. The YouTube self-study infrastructure here is unmatched." }
    },
    variants: {
      silent_guitar: { label: "Silent guitar", note: "A frame guitar with no body. Practice at night through headphones. Yamaha SLG and similar, around ₩600,000–1,000,000." }
    }
  },

  electric_guitar: {
    name: "Electric guitar",
    family: "Plucked · guitar family",
    toneDesc: "Clean tones are glassy and clear; add drive and it roars. With pedals it can go all the way to outer space - no instrument has a wider tonal range.",
    caveats: [
      "The gear world is a swamp - your gear knowledge can easily outgrow your playing",
      "Buying on the unplugged sound alone leads to regret: guitar plus amp or interface is one set"
    ],
    tracks: {
      rockmetal: { label: "Rock & metal", note: "Power chords sound convincing on day one. Riffs to solos to shred - the classic royal road." },
      blues: { label: "Blues", note: "Pentatonics, bending, vibrato. A handful of chords you can improvise over for the rest of your life." },
      jazz: { label: "Jazz", note: "Harmony study is the real instrument here. The slowest start, but also the deepest place you can go." },
      funk: { label: "Funk", note: "Cutting and rhythm-machine playing. Right-hand groove is everything. Guaranteed presence in a band." }
    }
  },

  bass_guitar: {
    name: "Bass guitar",
    family: "Plucked · guitar family",
    toneDesc: "Low end you feel before you hear it. Fingerstyle is round, slap pops, and a well-written bassline makes the whole song dance.",
    caveats: [
      "It isn't a solo instrument, so playing alone can feel thin - practicing over backing tracks is the default",
      "Less of the flashy spotlight. In exchange, bands treat you like treasure"
    ]
  },

  ukulele: {
    name: "Ukulele",
    family: "Plucked · guitar family",
    toneDesc: "Bouncy, bright, short-decaying. Just hearing it puts holiday air in the room. The trade-off is a narrow range and no low end.",
    caveats: [
      "The narrow range and limited expression make quite a few people think 'I should have gone guitar' a few months in - though your chord instincts transfer straight over when you do switch",
      "Toy-grade instruments (under ₩30,000) won't hold tuning and become the actual reason people quit"
    ]
  },

  guitalele: {
    name: "Guitalele",
    family: "Plucked · guitar family",
    toneDesc: "Thicker than a ukulele, cuter than a guitar - right in between. Six nylon strings make arpeggios surprisingly lush.",
    caveats: [
      "Same fingerings as a guitar, but it sounds in a different key (a fourth up) - which briefly scrambles your brain when playing with others or reading charts",
      "There are almost no dedicated books or lessons; you just use guitar material as-is"
    ]
  },

  twelve_string_guitar: {
    name: "12-string guitar",
    family: "Plucked · guitar family",
    toneDesc: "A silvery chorus made by the octave pairs. One strum fills the whole room. That shimmer from 60s and 70s folk rock.",
    caveats: [
      "Not recommended as a first guitar - this is the second one, after a six-string has built your calluses",
      "Keeping it in tune is a quiet chore (twelve strings, remember)"
    ]
  },

  resonator_guitar: {
    name: "Resonator guitar (Dobro)",
    family: "Plucked · guitar family",
    toneDesc: "A metallic ring like rain on a tin roof. Add a slide and it turns into a sobbing voice. The sound of the Mississippi Delta.",
    caveats: [
      "The frets won't find the pitch for you on slide - ear training is the actual instrument",
      "Almost nowhere in Korea lets you try one in person, so importing easily becomes a gamble",
      "Roundneck and squareneck (lap-only) are effectively different instruments - decide which before you buy"
    ]
  },

  lap_steel: {
    name: "Lap steel guitar",
    family: "Plucked · guitar family (steel guitar)",
    toneDesc: "The glissando between notes is the whole point. It sobs like a human voice, and with reverb it becomes an ocean.",
    caveats: [
      "You find every pitch by ear - a few millimeters of bar position separates out-of-tune from beautiful",
      "Essentially no lessons in Korea. English-language YouTube self-study is the default path",
      "There are several tuning lineages (C6, open G and more), so matching your tuning to your material is confusing at first"
    ]
  },

  pedal_steel: {
    name: "Pedal steel guitar",
    family: "Plucked · guitar family (steel guitar)",
    toneDesc: "A pedal slides just one note inside a chord upward - a cry no other instrument can make. That weeping sound in country ballads is this.",
    caveats: [
      "Entry barrier 5 - independent coordination of both hands, both feet and both knees, plus finding pitch by ear, all at once",
      "Korea has essentially no lessons, repairs or used market. Buying and learning both run through English-language imports and forums",
      "Starting on lap steel for 6 months to a year first is the standard route",
      "Prices swing with exchange rates and shipping, so budget above the range above (import-based)"
    ]
  },

  banjo: {
    name: "Banjo",
    family: "Plucked · guitar family (drum-body)",
    toneDesc: "A percussive 'ting' that jumps out and stops dead. Once a roll gets going the notes tumble like falling water. One listen and rural America appears.",
    caveats: [
      "Banjo lessons barely exist in Korea - happily, the English-language self-study world (method books, YouTube) is among the best anywhere",
      "5-string and 4-string tenor are different instruments in technique and genre - pick your track before buying",
      "It's heavier and louder than you expect"
    ],
    tracks: {
      bluegrass5: { label: "5-string (bluegrass rolls)", note: "Rolls driven by three fingerpicks. Scruggs style. The short 5th string (the drone) is its identity. Getting the patterns into your hands is the gate; after that it's a machine gun." },
      tenor4: { label: "4-string tenor (Irish & Dixieland)", note: "A melody instrument played with a pick. In GDAE, mandolin and fiddle fingerings transfer directly. A regular at Irish sessions." }
    }
  },

  // ═══════════════ mandolin family ═══════════════

  mandolin: {
    name: "Mandolin",
    family: "Plucked · mandolin family",
    toneDesc: "Bright, ringing, high and clear. The doubled strings add a gentle built-in chorus, and once tremolo kicks in it turns into Italian film music.",
    caveats: [
      "Early blisters are unavoidable (slightly more than guitar, because of the doubled strings)",
      "Korea's bluegrass community is small (though English-language self-study material is abundant)",
      "Lessons are easiest to find on the classical, Neapolitan side"
    ],
    tracks: {
      bluegrass: { label: "Bluegrass", note: "F-style flatback. Chop rhythm as the drummer, plus fast solos. Bill Monroe's legacy." },
      classical: { label: "Classical (Neapolitan)", note: "Bowlback (teardrop body). Tremolo technique, score-based, mandolin-orchestra culture. Korea genuinely has amateur orchestras." },
      irish: { label: "Irish", note: "Flatback. A session instrument built on jig and reel melodies. You play fiddle tunes exactly as written." }
    },
    variants: {
      emando: { label: "Electric mandolin", note: "Solid body, headphone practice possible. Mostly available through importing." }
    }
  },

  octave_mandolin: {
    name: "Octave mandolin",
    family: "Plucked · mandolin family",
    toneDesc: "Thicker and deeper than a mandolin. Melodies come out lyrical; strum chords and you get a 12-string-guitar chorus.",
    caveats: [
      "Hard to see one in person in Korea - buying and repairs both depend on overseas orders",
      "Its role overlaps with the Irish bouzouki, so even the community blurs the line (it comes down to GDAD versus GDAE)"
    ]
  },

  mandola: {
    name: "Mandola",
    family: "Plucked · mandolin family",
    toneDesc: "The mandolin's brightness turned down a shade, with shadow added. In ensemble it's the glue between the high and low voices.",
    caveats: [
      "Little solo repertoire or teaching material, so it's really an ensemble second instrument - start on mandolin",
      "Like the viola jokes say, its faint presence is both its charm and its limit"
    ]
  },

  mandocello: {
    name: "Mandocello",
    family: "Plucked · mandolin family",
    toneDesc: "Heavy low end wrapped in doubled-string chorus. Strum chords and it's a small orchestra; play a single line and it echoes like a monastery.",
    caveats: [
      "Instruments, books, lessons and community are all rare - be ready for a road nobody else is on",
      "A shortcut for cellists, the hardest path in the mandolin family for everyone else"
    ]
  },

  mandobass: {
    name: "Mandobass",
    family: "Plucked · mandolin family",
    toneDesc: "A booming acoustic low end. Imagine double-bass pizzicato played with a pick or fingers.",
    caveats: [
      "Realistically, finding one at all is a miracle - less a top hobby pick than the final destination for mandolin-orchestra lifers",
      "If you just need that role filled, a double bass or acoustic bass guitar is overwhelmingly more practical",
      "Even price and availability information is uncertain (the range above is estimated from overseas vintage sales)"
    ]
  },

  irish_bouzouki: {
    name: "Irish bouzouki",
    family: "Plucked · mandolin family (bouzouki)",
    toneDesc: "The modal, wide-open ring that GDAD tuning gives you. A shimmer somewhere between a 12-string guitar and a mandolin.",
    caveats: [
      "At Irish sessions there's an unwritten rule of one accompanist per session - expect some competition for the chair",
      "There's little written material for GDAD backing, so the learning culture is picking it up by ear from session recordings and YouTube",
      "Rare on the Korean market; importing is the norm"
    ]
  },

  greek_bouzouki: {
    name: "Greek bouzouki",
    family: "Plucked · mandolin family (bouzouki)",
    toneDesc: "Shimmering metallic tremolo and heavily ornamented lines. One phrase and a Greek taverna appears - sorrow and celebration in the same sound.",
    caveats: [
      "Finding someone in Korea to play rebetiko with is harder than finding the instrument",
      "Teaching material is mostly in Greek, and English resources are limited",
      "Decide first whether you want 3-course (traditional rebetiko) or 4-course (the modern standard)"
    ]
  },

  bandolim: {
    name: "Bandolim",
    family: "Plucked · mandolin family",
    toneDesc: "A rounder, larger body than a mandolin gives it a sweeter, softer tone. Add choro's signature sliding ornaments and it sounds like laughing and crying at once.",
    caveats: [
      "Choro scores and method books live in the Portuguese-speaking world - English material is growing but still limited",
      "The biggest hurdle in Korea is finding people to play choro with (7-string guitar and pandeiro are its partners)",
      "It's a melody instrument, so practicing with backing tracks is the default when you play alone"
    ]
  },

};

const EN_GUIDE_GUITAR_MANDOLIN = {

  // ═══════════════ guitar family ═══════════════

  classical_guitar: {
    how: "Day one is tuning (a tuner app is plenty). Then right-hand p-i-m-a arpeggios and pressing single notes with the left - nylon strings don't really hurt, so the 'guitar destroys your fingertips' rumor never arrives. In month one, pair easy single-line pieces (the opening of 'Romance', say) with basic arpeggios so the reward comes fast. If the traditional path is your goal, slip a little note-reading in from the very start; it pays enormous interest later.",
    lesson: "Lessons recommended - self-study material is plentiful, but classical guitar is full of things that set for life if they set wrong: right-hand nail angle, footstool posture. Self-teaching is fine for casual accompaniment, but if you want to play Tarrega and Sor, have a teacher check your form for at least the first few months. The point is finding a trained classical guitar teacher, not the neighborhood strum-along academy.",
    buy: "₩150,000–500,000. The Yamaha C40 (around ₩100,000) is the world's unofficial standard starter; at ₩200,000–400,000 solid-top options open up, like the Yamaha CG series or Cort's classical line. Landmine: the sub-₩50,000 'guitar-shaped object' from a discount mart never holds pitch and will make you doubt your own ears. Grabbing a used Yamaha starter for half price on Danggeun Market (Korea's local secondhand app) is an excellent move too.",
    firstGoal: "Within 3 months, the opening of 'Romance' (Jeux Interdits) in arpeggio - that one piece is a whole living-room recital.",
  },

  flamenco_guitar: {
    how: "You don't even need a flamenco guitar to start - a classical guitar is fine. Step one is practicing rasgueado (fanning your fingers open across the strings) on your thigh; step two is drumming the 12-beat compas into your body by clapping. Honestly, the heart of this instrument is rhythm, not chords. Search 'flamenco rasgueado tutorial' on YouTube and Spanish gentlemen will teach you kindly, in Spanish.",
    lesson: "Lessons recommended - special techniques like rasgueado and golpe invite weird tension into your wrist if you only copy videos. The problem is that specialist teachers are rare in Korea; a few Seoul studios and private teachers are about it. Realistically, a handful of in-person lessons up front plus English-language online courses is the best combination.",
    buy: "₩400,000–1,200,000. Local stock is thin, so the two-stage strategy is best: start on a classical guitar (a Yamaha C40 or similar), then import a Spanish flamenca (Alhambra and friends) once you know you're serious. Landmine: cheap mystery instruments with 'flamenco guitar' printed on them may just be a classical guitar with a sticker. Check whether it actually has a golpeador (tap plate).",
    firstGoal: "Within 3 months, back 'Volare' with a single rumba rhythm pattern - you will rule the campfire.",
  },

  acoustic_guitar: {
    how: "Week 1: tuning plus C, G, Am, and (let's postpone F) start with Em and D. Week 2: chord changes - this is where your fingertips scream, and everyone goes through it (calluses arrive in 2 to 4 weeks). Month 1: one song you love, start to finish, on four chords. The self-study infrastructure is the best of any instrument: there is no lesson YouTube lacks, and if you read English, JustinGuitar (free, the global standard curriculum) is basically a free music school.",
    lesson: "Self-teaching is fine - acoustic guitar has the highest self-study success rate of any instrument. YouTube plus a chord site will carry you to a comfortable hobby level. That said, if the F chord has you stuck for more than three weeks, one or two lessons to break through is good for your mental health. Academies exist everywhere in the country.",
    buy: "₩200,000–400,000 buys a first guitar you can keep for life. Korea is arguably the world's best country for beginner acoustics - domestic brands like Cort, Crafter and Gopherwood get reverse-imported by players abroad. Landmine: the ₩30,000–50,000 mart guitar has an action so high it becomes a finger-endurance testing device. Picking up a used Cort starter for around ₩100,000 on Danggeun Market is a classic route.",
    firstGoal: "Within 1 month, play one song you love all the way through on four chords - from that day, you're 'someone who plays guitar'.",
  },

  electric_guitar: {
    how: "Learn one power chord on day one and you'll feel like a rock star (genuinely). The order: power-chord riffs, open chords, pentatonic scale, then bending and vibrato. Important: buying only the guitar gets you no sound! But instead of an amp, start with a headphone amp (something like the Fender Mustang Micro, around ₩100,000) or a multi-effects unit or audio interface, and you can practice at full drive at 2am without a neighbor noticing. For apartment dwellers it's quieter than an acoustic. Study material on YouTube and JustinGuitar is endless.",
    lesson: "Self-teaching is fine - electric has the same overwhelming self-study infrastructure as acoustic. If you want to go deep into a specific track like shred or jazz, lessons start paying off from the intermediate stage. Academies exist all over the country.",
    buy: "Guitar ₩300,000–500,000 plus something that makes sound ₩100,000–300,000. The two beginner pillars are the Squier (Fender's sub-brand) Affinity series and the Yamaha Pacifica 112 - the official answer on beginner forums worldwide. Korea's own Cort is excellent too. Landmine: the 'guitar + amp + bag full package for ₩190,000' set is usually uniformly bad in every item. Squier and Pacifica listings are always on Danggeun Market, so used is strongly recommended.",
    firstGoal: "Within 2 weeks, the 'Smoke on the Water' riff in power chords - humanity's shared electric-guitar initiation rite.",
  },

  bass_guitar: {
    how: "Week one is right-hand two-finger technique (index and middle alternating) and playing roots in eighth notes. The charm of bass is that one well-placed note already makes music - put on a backing track of a song you love (YouTube has infinite ones) and just follow the roots, and you already feel like a band member. Start with a headphone amp or audio interface and you can practice silently, no amp needed. A few months later, the day you learn slap, a second adolescence begins.",
    lesson: "Self-teaching is fine - there's plenty of YouTube material and the early ramp is gentle. But it's a rhythm instrument, so becoming best friends with a metronome is mandatory; if sloppy timing becomes a habit, a few lessons to correct it are worth it. And the moment you start, amateur bands will come recruiting (bass is permanently the number-one wanted position).",
    buy: "Bass ₩250,000–500,000 plus a headphone amp or interface around ₩100,000. The three proven starters are the Squier Affinity Jazz and Precision basses, the Yamaha TRBX series, and Korea's own Cort Action Bass. Landmine: mystery ₩50,000 basses very often have a warped neck. If your hands are small, definitely look up short-scale models.",
    firstGoal: "Within 1 month, play the full bassline of a song you love along with a backing track - the moment groove clicks.",
  },

  ukulele: {
    how: "The lowest barrier of any string instrument, and famously the one that works on day one. Day one: tuning plus the C chord (one finger!) and Am (also one finger!) - those two already make songs. Add F and G7 in week one and hundreds of songs open up. Nylon strings, so your fingertips stay happy. YouTube lessons and chord sites are everywhere, and if you switch to guitar a few months later your chord instincts transfer intact - it's a wonderful gateway instrument.",
    lesson: "Self-teaching is fine - if you can't learn ukulele without a teacher, that's not the ukulele's fault (joking, but it truly is the ideal self-study instrument). Community-center classes are all over the country and are great for making friends.",
    buy: "₩50,000–150,000 is plenty. Locally, brands like Luau and Makana are proven for beginners and after-sales service is decent. On size, concert fits adult hands better than soprano (the smallest). Landmine: toy-grade instruments under ₩30,000 go out of tune every five minutes and become the actual reason people quit - dodge the cheapest-price temptation and this instrument is basically failure-proof.",
    firstGoal: "Within your first week, one whole song on two chords - it really works. That's the ukulele.",
  },

  guitalele: {
    how: "It's a mini guitar you play with guitar fingerings, so you can learn straight from a guitar chord chart (it just sounds a fourth higher). Six nylon strings mean no fingertip pain, and it fits in a suitcase, which makes it the ultimate take-it-anywhere practice guitar. There are almost no dedicated method books, but you can recycle guitar lessons 100 percent - you effectively inherit the entire guitar self-study world.",
    lesson: "Self-teaching is fine - dedicated guitalele lessons barely exist in Korea, and you don't need them. Guitar lessons and guitar courses work as-is. If you do take lessons, classical guitar lessons are the most compatible in terms of form.",
    buy: "₩100,000–300,000. This market is basically the Yamaha GL1 (around ₩100,000) - it's the standard starter and, honestly, the market itself. Don't waste time agonizing. Landmine: no-name guitaleles cheaper than the GL1 sometimes have bad intonation (fret pitch). If you want better tone, step up to something like the Cordoba Mini series.",
    firstGoal: "Within 2 weeks, back a song with four guitar chords - if you've played guitar before, day one works.",
  },

  twelve_string_guitar: {
    how: "Honestly: this is a second guitar. Come after a six-string has given you calluses and a working F chord - then there's almost nothing new to learn (the fingerings are identical). Your first jobs are tuning (twelve strings... good luck) and adapting to chords that take twice the pressure. The silvery chorus that pours out of a single strum pays back all of it. Start with pieces built on arpeggios and open chords.",
    lesson: "Self-teaching is fine - if you've played a six-string, no dedicated lessons needed. Regular guitar courses plus patience for tuning is all it takes. If you've never played guitar, I'd honestly talk you out of starting on a 12-string (your fingers will go on strike).",
    buy: "₩300,000–800,000. Fewer options than six-strings, but domestic brands like Cort and Crafter make 12-string models, so you can buy locally. It's also a classic instrument to find secondhand on Danggeun Market or Mule (Korea's used-gear forum) at a good price, from someone who bought one and stopped playing it. Landmine: budget models sometimes can't hold the string tension (twelve strings!) and the neck bows, so check neck condition carefully when buying used.",
    firstGoal: "The day you buy it, strum the 'Hotel California' intro chords - that's the sound you bought it for, after all.",
  },

  resonator_guitar: {
    how: "Big decision first: roundneck (played like a normal guitar) or squareneck (laid flat on your lap, slide only) - they're effectively different instruments, so choose before you buy. If blues slide is the goal, start with open G tuning and a slide bar. The frets won't find the pitch for you, so your ears are the real instrument (everyone sounds out of tune at first, that's normal). If you've played regular guitar, a roundneck gets you halfway there already. Books and courses live on English-language YouTube.",
    lesson: "Self-teaching (by necessity) - dobro and resonator lessons essentially don't exist in Korea. Fortunately English-language online courses are well built, and combining regular guitar lessons with self-taught slide is a realistic path.",
    buy: "₩500,000–1,000,000 (importing). Almost nowhere locally lets you see one in person, so importing budget lines from Recording King or Gretsch is the real route - factor shipping and customs into your math. Landmine: if importing feels like too much of a gamble, watching for domestic used listings (they surface on Mule and Danggeun Market occasionally) is safer. And once more - buy without checking roundneck versus squareneck and you'll be reselling it in tears.",
    firstGoal: "Within 2 months, one round of a 12-bar blues with open-G slide - the Mississippi Delta materializes in your room.",
  },

  lap_steel: {
    how: "A guitar where you never press a fret, so callus worry is zero - a hidden gem. Lay it on your lap, steel bar in the left hand, fingerpicks on the right. First assignment: tune to C6 and practice landing the bar exactly over the fret (a few millimeters off is out of tune, dead on is angelic). Then single-string melody, two-string harmony, then slide movement. It's electric, so headphone practice works and you can visit Hawaii at midnight. Material-wise, English YouTube ('lap steel C6 lesson') is the standard.",
    lesson: "Self-teaching (by necessity) - lessons essentially don't exist in Korea. But English-language self-study resources are solid, and the instrument is simple enough that it's the easiest of the slide family to teach yourself. Just be careful to match your tuning (C6 or open G) to whatever material you're using before you start.",
    buy: "Instrument ₩200,000–400,000 (SX, Recording King and friends, importing included) plus a bar and fingerpicks at ₩20,000–30,000 plus a headphone amp, and you're done. It's the cheapest doorway into the whole steel-guitar world. Landmine: buy only the instrument with no amp and you get no sound (it's electric!). Local listings are scarce, so importing or setting alerts on used-gear sites is the way.",
    firstGoal: "Within 1 month, the melody of 'Somewhere Over the Rainbow' with one bar - your room will smell like Hawaii.",
  },

  pedal_steel: {
    how: "Being straight with you: this is less an instrument you pick up as a hobby and more one you take up because something possessed you. It's a cockpit where both hands, both feet and both knees move independently, so the standard route is 6 months to a year of lap steel first to build bar control and ears. Books, the Steel Guitar Forum and YouTube are all English-language, and you start from the basic pedal combinations (A+B pedals) in E9 tuning. Headphone practice being possible is the one genuine mercy.",
    lesson: "Self-teaching (by necessity...) - pedal steel lessons essentially do not exist in Korea. English-language online courses and forums are your only teachers. If you can arrange video lessons with an overseas teacher, I strongly recommend at least a setup check early on.",
    buy: "There's essentially no new-instrument retail in Korea, so importing and overseas used sales (Reverb) are the only door. Used student models run $900–1,500, new entry-level $1,500–3,000, plus international shipping and customs, plus a volume pedal and amp separately - budget around ₩2M to start. Landmine: mystery 1960s-70s vintage instruments can't get parts and become unrepairable paperweights. With essentially no local repair shops either, a clean used student model is the right answer.",
    firstGoal: "Within 3 months, one crying country-ballad phrase using the A+B pedal combination - pull it off and you're already a rare talent in Korea.",
  },

  banjo: {
    how: "First, the fork in the road: 5-string (bluegrass rolls) or 4-string tenor (Irish)? Technique and genre are completely different, so decide before buying. For 5-string, your first job is getting used to three fingerpicks and repeating the forward roll slowly, very slowly - the moment the pattern lives in your hands, it becomes an automatic machine gun. For tenor, start with jig and reel melodies with a pick. Method books and YouTube make the English-language self-study world here world-class, so if you read English your teachers are infinite.",
    lesson: "Self-teaching (by necessity) - banjo lessons barely exist in Korea. Happily, this is one of the best-documented instruments in the English-speaking world (the Banjo Hangout forum and more). If you've played guitar, the chord side is basically free.",
    buy: "₩300,000–700,000 imported. Recording King and Gold Tone starters are the standard answer. Tenor banjos are rarer on the market. Landmine: plenty of budget banjos look like banjos but arrive with a mess of a bridge and head setup, so when importing, choose a shop that does a setup for you (check the reviews). And it's heavier than you think (4–6kg) - an openback model is about half that.",
    firstGoal: "Within 2 months, one round of 'Cripple Creek' with the forward roll - rural America comes flooding in.",
  },

  // ═══════════════ mandolin family ═══════════════

  mandolin: {
    how: "Eight strings, but don't panic - they're paired, so it's really four. Week one: tuning (GDAE), holding the pick, and getting used to pressing two strings under one finger (early blisters are a rite of passage). Then two-finger chords (G, C and D need only two fingers) to back a song, or pick one fiddle tune and conquer it. If you've played violin, the fingerings are identical and melodies come out on day one - it's almost cheating. Self-study material in English (Mandolin Cafe and others) is rich.",
    lesson: "Self-teaching is fine - for bluegrass and Irish there are hardly any Korean lessons anyway, so self-study it is, and it works. The exception is the classical, Neapolitan side, where you can find teaching through Korea's amateur mandolin orchestras - if you're a traditionalist, knock on that door.",
    buy: "Budget A-style starters exist locally from under ₩200,000, and if you're serious, importing a Kentucky KM-150 or Eastman MD305 (both global beginner standards, ₩600,000–800,000) is the recognized answer. Landmine: the temptation of the F-style scroll - same sound, tens of thousands of won extra for decoration, so A-style is the sensible entry. A ₩30,000 decorative mandolin is a prop, not an instrument.",
    firstGoal: "Within 1 month, back a song with two-finger chords, or play one fiddle tune through ('Angeline the Baker' is a good pick).",
  },

  octave_mandolin: {
    how: "It's a mandolin dropped an octave, so if you've played mandolin (or violin) your fingering knowledge transfers whole. Beginners can start here too - grab chord backing (folk and Celtic accompaniment) first and the 12-string-guitar shimmer arrives as an immediate reward. The strings are thick and the scale long, so make left-hand stretching a habit from day one. There's almost no dedicated material; the learning culture is adapting mandolin resources and Irish session videos.",
    lesson: "Self-teaching (by necessity) - assume there are no lessons in Korea. With mandolin or guitar experience it goes smoothly; with none at all, building basics on mandolin or guitar first is faster.",
    buy: "₩600,000–1,200,000 imported (Eastman and Trinity College are the proven names). There are essentially no local shops with one in stock, so plan on importing plus shipping and customs. Landmine: its role overlaps with the Irish bouzouki, so decide between GDAE (octave mandolin) and GDAD (bouzouki) before buying - 'wait, what did I actually buy?' is the classic outcome here.",
    firstGoal: "Within 2 months, one Irish tune as melody and another as chord backing - you'll taste both sides of the instrument.",
  },

  mandola: {
    how: "The viola of the mandolin family - and, viola-like, it's the second instrument that shines in ensemble. Start on mandolin, and pick up a mandola when you decide you want into a mandolin orchestra; that's the standard route. Tuned CGDA (same as viola), so the shapes are identical to mandolin, just moved a fifth - mandolin players adapt fast. Learning means adapting mandolin books plus working from orchestra part scores.",
    lesson: "Lessons recommended (via an unusual route) - the real lesson isn't a commercial academy but joining an amateur mandolin orchestra. Korea genuinely has them, and instrument sourcing, coaching and ensemble playing all get solved inside the group at once.",
    buy: "₩500,000–1,200,000 imported. Buying new from abroad (Eastman and others) is possible, but the best realistic route is a used instrument through a mandolin orchestra club - the listings, the information and the people are all there. Landmine: sellers mix up tenor (CGDA) and octave (GDAE) labeling on mandolas constantly, so always confirm the tuning spec.",
    firstGoal: "Play one piece as the alto part in a mandolin orchestra rehearsal - quiet presence, but everyone notices when it's missing.",
  },

  mandocello: {
    how: "The cello of the mandolin family - a shortcut for cellists, whose CGDA fingering knowledge transfers whole, and the roughest road in the family for everyone else. First you have to build the grip strength for thick doubled strings. Start with open-string chord backing (that monastery ring is immediate reward) and slow single lines. There's almost no dedicated material, so you assemble cello scores and mandolin technique yourself - a pioneer's instrument.",
    lesson: "Self-teaching (by necessity) - no lessons in Korea. Joining a mandolin orchestra on the cello part is the only real learning community. I'd talk you out of making this your first instrument without cello or guitar experience.",
    buy: "₩1,000,000–2,500,000 imported or overseas used (Reverb). Cheap new instruments barely exist, so Eastman is about the only realistic new option. Landmine: vintage Gibson-family instruments are romantic, but they're a century old and repair costs can exceed what you paid. Strings are a special gauge you have to import, so buy spares at the same time.",
    firstGoal: "Within 2 months, one folk song backed with open-string chords - let your room turn into a monastery.",
  },

  mandobass: {
    how: "Honest mode: with this instrument, 'how to find one' matters more than 'how to play it'. Nearly every surviving example is a century-old vintage piece, so realistically you meet one when your mandolin orchestra needs a bass part. Playing it is straightforward if you've played double bass or bass guitar - the EADG tuning is identical, so it transfers immediately. If you only need that role filled, a double bass or acoustic bass guitar is overwhelmingly more practical.",
    lesson: "Self-teaching (no other option) - dedicated lessons barely exist anywhere in the world. The structure is building basics through bass guitar or double bass lessons and adapting them, and the only real stage is a mandolin orchestra.",
    buy: "₩3M–10M (estimated from overseas vintage prices) - there's essentially no new market, so auctions, overseas used sales and custom builds are all there is. Landmine: the biggest cost isn't the instrument, it's international shipping (a wooden antique the size of a person...). If you seriously want one, joining a mandolin-orchestra community for information first is the only sensible route.",
    firstGoal: "Goal one is literally seeing one in person. Seriously. Goal two is your debut on an orchestra's bass part.",
  },

  irish_bouzouki: {
    how: "If you have a feel for guitar chord accompaniment, this is the instrument that makes you smile fastest. GDAD open tuning means one or two fingers already produce convincing modal chords (the quickest reward curve there is). First job: backing patterns around D and G, and strumming that keeps the drone alive. Then put on Irish session recordings and practice laying accompaniment over jig (6/8) and reel (4/4) rhythms. With little written material, YouTube and picking things up off session recordings is the official method.",
    lesson: "Self-teaching (by necessity) - no lessons in Korea. If you've played guitar, self-study difficulty is low, and showing up at an Irish music club (a session gathering) is both the real lesson and the best motivation you'll get.",
    buy: "₩600,000–1,200,000 imported plus shipping and customs (Trinity College is the beginner standard). Local listings are rare but surface on used sites occasionally, so set alerts. Landmine: Irish handmade workshop instruments sound wonderful but have year-plus waiting lists - start with a production model. And people buy this confusing it with an octave mandolin (GDAE) surprisingly often. Confirm it's GDAD!",
    firstGoal: "Within 2 months, back one full set of reels along with an Irish session recording - a corner of a Dublin pub, in your room.",
  },

  greek_bouzouki: {
    how: "Before you start, decide between 3-course (traditional rebetiko) and 4-course (the modern standard, CFAD) - 4-course has more material and is the easier entry. First assignments: learning to hold the round bowlback so it doesn't slide off you (a serious task) and pick tremolo. After that, stealing the instrumental melodies of rebetiko classics one at a time is this instrument's traditional method. Resources live in the Greek-speaking world with English material being just okay - search 'bouzouki lesson' and Greek uncles are waiting for you.",
    lesson: "Self-teaching (by necessity) - no lessons in Korea. With mandolin or guitar experience the entry is smooth, and if video lessons with a Greek or English-speaking teacher are possible, learning just the ornamentation technique transforms your sound.",
    buy: "₩400,000–1,200,000 imported (Greek workshops or via Europe). The landmine here is obvious: the ₩200,000 sparkly bouzouki in a Greek tourist shop is a wall decoration, not an instrument. The flashier the mother-of-pearl inlay, the more suspicious you should be. For a playable instrument, order direct from a workshop or go through a trusted European dealer.",
    firstGoal: "Within 2 months, the theme from 'Zorba the Greek' with tremolo - please resist the urge to throw plates in the kitchen.",
  },

  bandolim: {
    how: "The tuning is identical to a mandolin (GDAE), so an ordinary mandolin is plenty to begin with - the genre, choro, is the real instrument here. First assignment: pick one easy choro tune (not 'Brasileirinho', something gentler...), play it slowly, and imitate its characteristic sliding ornaments. Then build the habit of practicing with backing tracks - choro is ensemble music, so playing alone is only half of it. Resources live in the Portuguese-speaking world, but English material is growing.",
    lesson: "Self-teaching (by necessity) - there are no choro lessons in Korea. Mandolin and violin players carry their fingerings straight over, and Brazilian online courses (Portuguese and English) are the best teachers available. The catch is that the biggest hurdle in Korea isn't lessons, it's finding people to play with.",
    buy: "₩400,000–1,200,000 imported (via Brazil or elsewhere; the estimate is a wide range). Practical advice: start choro on a regular mandolin (a Kentucky or Eastman starter), then add a bandolim once you know you're serious - the two-stage strategy. Landmine: importing from Brazil has big shipping and customs variance, so listings routed through Europe or the US are often safer.",
    firstGoal: "Within 2 months, one easy choro played through with a backing track - a Rio sunset moves into your room.",
  },

};

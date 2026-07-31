// English overlay — brass & mallet percussion batch. Keys match data/inst_brass_mallet.js ids 1:1.
const EN_INST_BRASS_MALLET = {

  // ════════════════════ Brass (13) + didgeridoo ════════════════════

  trumpet: {
    name: "Trumpet",
    family: "Brass · valved",
    toneDesc: "A brilliant high register that cuts through anything. Pop in a mute and it turns into that nasal jazz wah-wah, a whole different face.",
    caveats: [
      "The first few months are about getting one clean note out. This is not an instrument you play a song on within a month",
      "Braces (especially brackets on the front teeth) clash with mouthpiece pressure - if you are in treatment, ask about timing before starting",
      "Your lips are the instrument, so a little every day is the rule. Take a few days off and they reset",
    ],
    tracks: {
      classical: { label: "Classical & wind band", note: "Clean articulation and a straight, honest tone. Seats everywhere, from school wind bands to orchestras." },
      jazz: { label: "Jazz", note: "Mutes, bends, high notes, with improvised solos at the center. Lead trumpet in a big band is a whole other stamina game." },
    },
    variants: {
      silent_brass: { label: "Silent Brass mute", note: "The Yamaha SB7 family. Mute plus earphones means late-night apartment practice. The resistance feels unlike open playing, so mix in both." },
    },
  },

  cornet: {
    name: "Cornet",
    family: "Brass · valved",
    toneDesc: "Take the sharp edge off a trumpet and round it out - that is the cornet. Hymns and ballad melodies suit it beautifully.",
    caveats: [
      "In Korea trumpets often cover the cornet parts even in wind bands, so dedicated cornet seats are scarce",
      "You will almost certainly study with a trumpet teacher (no problem at all - the fingerings are identical)",
    ],
  },

  flugelhorn: {
    name: "Flugelhorn",
    family: "Brass · valved",
    toneDesc: "The trumpet's glare wiped away, leaving something dusky. On a quiet ballad it aches like a singing voice.",
    caveats: [
      "It is a layer on top of trumpet experience rather than a standalone first horn - almost nobody starts on flugelhorn alone",
      "Intonation is touchier than a trumpet's, so plenty of notes need your ear to steer them",
    ],
  },

  trombone: {
    name: "Trombone",
    family: "Brass · slide",
    toneDesc: "The brass instrument said to sit closest to the human voice. Silky legato, comic glissandos, a roaring fortissimo - the whole range of expression.",
    caveats: [
      "The slide has no markings for the right spot - training your ear to find pitch follows you from day one to forever. Best instrument for building an ear, worst one for coasting",
      "Braces clash with mouthpiece pressure - if you are in treatment, ask before starting",
      "Fast passages are structurally harder than on valved brass (legato is the payback)",
    ],
    tracks: {
      classical: { label: "Classical & wind band", note: "Majestic chords from the orchestra's three-player section. Legato and precise position sense are everything." },
      jazz: { label: "Jazz", note: "Glissandos, growls, expression only a slide can do. From big band sections to combo solos." },
    },
    variants: {
      silent_brass_tb: { label: "Silent Brass mute (trombone)", note: "Mute plus earphones makes apartment practice possible. Bigger and pricier than the trumpet version." },
    },
  },

  sackbut: {
    name: "Sackbut",
    family: "Brass · slide · period instrument",
    toneDesc: "A whispering brass with the modern trombone's roar removed. A sound built to melt into a choir as if it were one more voice.",
    caveats: [
      "You come here after learning trombone first - not recommended as a first instrument",
      "Sackbut teachers and ensemble seats in Korea can be counted on one hand. The early-music community itself is tiny",
      "Old tunings (A=415Hz and friends) and reading old clefs come as part of the package",
    ],
  },

  french_horn: {
    name: "French horn",
    family: "Brass · valved",
    toneDesc: "A sound like a call from across the forest. From lyrical solos to grand film-score unisons, a regular at every goosebump moment in the orchestra.",
    caveats: [
      "The harmonics in its range sit so close together that even on the right valve, a wrong lip or ear slides you onto the neighboring partial - its reputation for cracked notes is structural. No amount of technique substitutes for a good ear here",
      "The first year pays back slowly. It takes the longest of any brass instrument to reach your first real piece",
      "Braces clash with the mouthpiece - the horn's is small, so it is especially sensitive",
    ],
  },

  natural_horn: {
    name: "Natural horn",
    family: "Brass · valveless · period instrument",
    toneDesc: "Open notes ring clear, hand-stopped notes come out slightly shaded. That light-and-shadow contrast is the instrument's whole language.",
    caveats: [
      "This is where experienced modern horn players cross over - not recommended as a first instrument",
      "Hand-stopped notes changing color is normal, not a flaw - if you want an even tone throughout, this is not your instrument",
      "Lessons and playing opportunities in Korea depend entirely on a tiny network of early-music players",
    ],
  },

  natural_trumpet: {
    name: "Natural trumpet",
    family: "Brass · valveless · period instrument",
    toneDesc: "Silver brilliance from tubing longer and narrower than a modern trumpet's. It is the sound soaring over a Bach cantata.",
    caveats: [
      "Note choice is entirely lips and ears - with no valves as a safety net, sliding one partial off means a wrong note, full stop",
      "This is where advanced modern trumpeters cross over. Not recommended as a first instrument",
      "Most modern reproductions are compromises with vent holes drilled for intonation (the purist hole-free ones are harder still)",
    ],
  },

  euphonium: {
    name: "Euphonium",
    family: "Brass · valved",
    toneDesc: "Brass that sings like a baritone voice. In wind band the sweetest countermelody always belongs to this instrument.",
    caveats: [
      "It is one of the gentlest brass instruments to get a sound out of, so early rewards come fast - but there is no orchestra seat, so your playing life stays inside wind bands and brass bands",
      "The braces conflict is common to all brass (a bit milder here thanks to the wide mouthpiece)",
    ],
  },

  tuba: {
    name: "Tuba",
    family: "Brass · valved · low register",
    toneDesc: "A bass so low the whole room's air vibrates. Take the tuba out of an ensemble and everyone feels that something is missing.",
    caveats: [
      "Getting a sound out is easy by brass standards, but it eats so much air that you may feel lightheaded early on",
      "Price, transport and storage are the real barrier. Before you start you need an answer to where it will live and how you will move it",
      "The solo repertoire is thin, so without an ensemble it gets boring fast",
    ],
    tracks: {
      classical: { label: "Classical & wind band", note: "Long-breathed pedal tones and precise intonation. An orchestra has exactly one tuba chair, which makes it a prized seat." },
      balkan: { label: "Balkan brass", note: "A rhythm machine pumping oom-pah offbeats without a break. Pure stamina, but king of the party." },
    },
  },

  sousaphone: {
    name: "Sousaphone",
    family: "Brass · valved · marching",
    toneDesc: "A bass that fires straight forward instead of upward like a tuba. That rubbery bass line in a second-line parade is this sound.",
    caveats: [
      "Marching band culture is thin in Korea, so this instrument's home turf - playing while walking - is rare. In practice you learn tuba first and pick this up when a band needs it",
      "Storage and transport rank among the hardest of any instrument anywhere",
    ],
  },

  alphorn: {
    name: "Alphorn",
    family: "Brass embouchure · wooden horn",
    toneDesc: "A soft, long ring engineered to carry over mountain ridges. Brass physics, with the warmth of wood mixed in.",
    caveats: [
      "In Korea you have to pioneer lessons, ensembles and stages entirely yourself (the player population is tiny)",
      "The eleventh partial, the famous alphorn F-sharp, is a natural pitch that clashes with equal temperament - you have to hear that oddness as charm",
      "Plan where in your home it will live before you buy",
    ],
  },

  serpent: {
    name: "Serpent",
    family: "Brass embouchure · wooden · period instrument",
    toneDesc: "Bass from the age before the tuba - a hazy, voice-like resonance filtered through wood and leather. Built to soak into a choir's bass line.",
    caveats: [
      "The finger holes sit in acoustically wrong places, so nearly every note has to be corrected with lips and ears - it is always near the top of any list of hardest instruments to play in tune",
      "Players, teachers and dealers in Korea are essentially nonexistent. One hundred percent pioneering on your own",
      "Absolutely not a first instrument. A final boss for experienced brass players",
    ],
  },

  didgeridoo: {
    name: "Didgeridoo",
    family: "Brass embouchure · drone wind",
    toneDesc: "A humming, earthy drone with a barking overtone rhythm riding on top. One note, yet a kaleidoscope that never gets boring.",
    caveats: [
      "The drone comes in a few days, but circular breathing is a months-long wall - that is where most people fall away",
      "It is not a melodic instrument. If what you want is to play tunes, pick something else",
      "Lessons in Korea barely exist; teaching yourself from English-language YouTube is the standard route",
    ],
  },

  // ════════════════════ Tuned percussion (9) ════════════════════

  marimba: {
    name: "Marimba",
    family: "Tuned percussion · mallets",
    toneDesc: "A round, mellow wooden tone swells softly out of the resonators. Roll it as a tremolo and it sustains like an organ.",
    caveats: [
      "Owning one is the real hurdle - not the price so much as the fact that it eats an entire living room",
      "Four-mallet grips (Stevens, Burton) come with their own separate learning curve",
      "The solo repertoire is rich, but hobby ensemble seats are limited to the percussion ensemble community",
    ],
  },

  vibraphone: {
    name: "Vibraphone",
    family: "Tuned percussion · mallets",
    toneDesc: "A cool, glittering metallic ring stretched long by the pedal, and with the motor on it shimmers in waves. The sound of a jazz club at night.",
    caveats: [
      "Jazz harmony and improvisation are the real subject - theory takes up more of your study time than the instrument itself",
      "Vibraphone specialists in Korea are few (the usual detour is learning from jazz piano or percussion majors)",
      "Pedaling looks like piano, but the decay timing differs, so it needs its own training",
    ],
  },

  xylo_glocken: {
    name: "Xylophone & glockenspiel",
    family: "Tuned percussion · mallets",
    toneDesc: "The xylophone is a dry, crisp wooden knock; the glockenspiel is metallic sparkle like scattered stardust. Nearly every glittering orchestral moment is one of these two.",
    caveats: [
      "Less a main instrument to enjoy alone, more a gateway into mallets and orchestral percussion",
      "No sustain means a narrow expressive range - if you want singing lines, go to marimba or vibraphone",
    ],
  },

  timpani: {
    name: "Timpani",
    family: "Tuned percussion · drumhead",
    toneDesc: "The orchestra's thunder and its heartbeat. From the faintest tremolo to the decisive blow that ends a whole piece, the dynamic range is extreme.",
    caveats: [
      "While everyone else is playing, you retune the next note with the pedal by ear alone - the exact opposite of assuming percussion means no ear needed",
      "There is no picture of enjoying this alone at home. Orchestra or wind band activity is the premise",
      "In an orchestra the timpanist is effectively the assistant conductor - a seat with real responsibility",
    ],
  },

  steelpan: {
    name: "Steelpan",
    family: "Tuned percussion · metal",
    toneDesc: "One note and a beach materializes. It is metal, yet the round bright overtones stack up into pure optimism.",
    caveats: [
      "Lessons and ensembles barely exist in Korea - YouTube plus overseas communities is the standard route",
      "Notes are laid out in a circle-of-fourths spiral, nothing like a piano, so early on you spend time memorizing the map",
      "Know before buying that finding someone in Korea to retune it is very hard",
    ],
  },

  handpan: {
    name: "Handpan",
    family: "Tuned percussion · metal",
    toneDesc: "Overtones bead up like water drops and spread out long. The definitive healing sound - it disarms a listener instantly.",
    caveats: [
      "Price trap: a cheap one bought on the logic that it is just for starting is either out of tune already or soon will be. With this instrument alone, accept that entry level means over $680",
      "One instrument equals one scale. Want a different key and you buy another one (that is the collecting swamp in a nutshell)",
      "Very few lessons in Korea - happily it is easy to self-teach and YouTube material is plentiful",
      "A dent knocks it out of tune. Mind the temperature (never leave it in a hot car) and protect it from impact",
    ],
  },

  tongue_drum: {
    name: "Tongue drum",
    family: "Tuned percussion · metal",
    toneDesc: "A round, rolling sound like playing a music box by hand. The ring is shorter and humbler than a handpan's, but plenty soothing.",
    caveats: [
      "Only 8 to 15 notes and one fixed scale - after a few months you can see the expressive ceiling. Buy knowing it sits closer to a healing tool than a full instrument",
      "If you enjoy it, the next step is a handpan - and the price jumps tenfold",
    ],
  },

  handbell: {
    name: "Handbells & choir chimes",
    family: "Tuned percussion · bells",
    toneDesc: "A transparent bell tone that seems to cleanse the air. Choir chimes ring softer and more forgiving still.",
    caveats: [
      "Alone it is not really an instrument - whether you want team activity is the whole question here",
      "Korean teams cluster in churches and mission schools, so non-religious players have narrow ways in",
      "Miss one beat and a hole opens in the chord, so the responsibility weighs on you (which is also the appeal)",
    ],
  },

  tubular_bells: {
    name: "Tubular bells",
    family: "Tuned percussion · bells",
    toneDesc: "A cathedral bell tower shrunk to fit a stage. One strike turns a whole piece majestic - an effect instrument in the best sense.",
    caveats: [
      "This is not an instrument you learn on its own - it exists as a part an orchestral percussionist covers briefly within a piece",
      "You play rarely, but every entrance is a climax, so the tension runs high",
    ],
  },

};

const EN_GUIDE_BRASS_MALLET = {

  // ════════════════════ Brass (13) + didgeridoo ════════════════════

  trumpet: {
    how: "Your lips come before the instrument! Spend the first week or two just buzzing on the mouthpiece alone. Once you know what a buzzing lip feels like, that first note on the horn comes out far more gently. Then long tones, then do-re-mi, then a simple nursery tune. Twenty minutes every single day beats a two-hour cram a hundred times over - lips are muscles, and they sulk and reset if you skip a few days.",
    lesson: "Lessons recommended - self-taught players easily fall into pressing the mouthpiece hard into the lip, and once that habit sets your high-note ceiling drops and undoing it costs many times the effort. Even three to six months of embouchure coaching pays interest for life. Teachers are plentiful in Korea, so they are easy to find.",
    buy: "New, the Yamaha YTR-2330 (about $500-$620) is the standard first horn. The $140-$210 Chinese models do make sound, but sticky valves are a lottery. On a tight budget a used Yamaha beats a cheap new horn. Used checklist: (1) press all three valves and see if they spring back crisply, (2) does the tuning slide pull out smoothly (seized = deduct points), (3) dents in the bell or tubing. If you live in an apartment, budget about $210 for a Silent Brass rig (SB7 series, mute plus earphones) from day one - without it you simply cannot practice and the horn becomes furniture.",
    firstGoal: "Play Twinkle Twinkle Little Star all the way through with no cracked notes within three months. Sounds trivial, but on brass that is a genuine badge of honor!",
  },

  cornet: {
    how: "Exactly the same route as trumpet - one or two weeks of mouthpiece buzzing, then long tones, then simple tunes. The tubing is wrapped short, so it sits more snugly in your hands than a trumpet and speaks a little more gently, which is why it has long been the traditional starter for kids and smaller players. Trumpet method books work as-is (identical fingerings).",
    lesson: "Lessons recommended - same reason as trumpet (fixing the embouchure early). There is basically no such thing as a cornet specialist teacher, so you will learn from a trumpet teacher, and that is perfectly fine. If you want that round British brass band sound, make YouTube videos of English bands your ear-teacher.",
    buy: "Same price bracket as trumpet ($210-$620 to start), but fewer models reach Korea, so the choices are narrow. The Yamaha YCR line is the safe standard. The used checklist is identical - valve return, seized slides, dents. One catch: mutes are a different size, so make sure you buy cornet mutes!",
    firstGoal: "Within three months, play a hymn or ballad phrase so that it really sings. The cornet is about showing off a round tone, not fast fingers.",
  },

  flugelhorn: {
    how: "Honestly? This is a second instrument. The standard route is to learn buzzing and fingerings on trumpet (or cornet) and then cross over. If you are set on starting here anyway, the order is the same: buzz, long tones, simple tunes. The wide bore actually makes the sound come out gently, but the intonation is touchy, so keep a tuner app running and build the habit of steering with your ear from day one.",
    lesson: "Lessons recommended - though flugelhorn teachers essentially do not exist, so learn from a trumpet teacher (identical fingerings). If you already play trumpet, switching on your own is entirely doable; just get the tricky intonation checked early on.",
    buy: "The market is small, so a comparable horn costs more than a trumpet ($410-$1,050 to start). The smart move is a used Yamaha or Getzen rather than a cheap new one. Used checklist: valve return, plus a loose mouthpiece receiver (the flugelhorn's chronic ailment). Pitfall: mouthpiece shank sizes differ by brand (small morse, large morse and so on), so a random mouthpiece will not fit - check that it matches your horn!",
    firstGoal: "Within three months, play one slow ballad like velvet. The opening of 'Feels So Good' is the perfect dream target.",
  },

  trombone: {
    how: "Mouthpiece buzzing first, again! The mouthpiece is bigger than a trumpet's, so it is actually easier on the lips. One or two weeks of buzzing, then long tones on the horn, then the trombone's own homework: memorizing the positions. The slide has no markings, so positions 1 through 7 have to live in your body and your ear. Stick a tuner app on your music stand and keep asking whether your ear got it right - that habit stays with you forever. Watching your slide arm in a mirror is a great trick too!",
    lesson: "Lessons recommended - a coach early on makes a huge difference for buzzing and position sense. Especially the knack of moving the slide in crisp snaps, so legato does not smear into glissando, which is hard to even notice on your own. Korea has a deep pool of trombone teachers.",
    buy: "New, a Yamaha YSL-354 class horn ($550-$680) is the standard; $140-$270 Chinese models are a lottery on slide precision. Judge a used trombone harder than any other brass. Checklist: (1) pull the slide slowly and feel whether it glides with no resistance (dents or bends leave a catch, and that is the biggest deduction), (2) the slide lock screw works, (3) dents in the bell. There is a trombone Silent Brass too (bulkier and pricier than the trumpet one), so apartment dwellers should budget for it. Oh, and the slide reaches 80cm out front - make sure you have the room!",
    firstGoal: "Within three months, find positions 1 through 7 without looking and play a simple tune all the way through without the pitch wobbling.",
  },

  sackbut: {
    how: "Confession first: this instrument is for people who already play trombone. Not recommended as a first instrument! Once buzzing and positions are in your body from trombone, you add A=415Hz historical tuning and reading old notation (tenor clef and friends). The bore is narrower than a modern trombone, so you relearn how to play small and vocally. Listening to a lot of early-music choral recordings is the best homework there is.",
    lesson: "Lessons essential - except Korea has a handful of sackbut teachers at most. The realistic route: build fundamentals in trombone lessons, knock on the door of the early-music ensemble community, and add online lessons or masterclasses from abroad. Getting into the community is getting into lessons.",
    buy: "Almost nothing reaches Korea, so importing is the default. Entry-level tenors from makers like Nartiss in Latvia start around $1,050; German and Swiss handmade instruments run over $3,400. Pitfall: some so-called baroque trombones are just modern horns with a small bell stuck on, so check the workshop's reputation with the early-music community before ordering. And confirm whether an A=415 tuning slide is included!",
    firstGoal: "The first-year goal is not a piece, it is a seat in an early-music ensemble. This instrument only opens up when you play with others.",
  },

  french_horn: {
    how: "Bring a spoonful of resolve - this is the hardest thing in brass! It still starts the same way: mouthpiece buzzing. The horn mouthpiece is small, so give buzzing a generous two to three weeks. Then long tones, and because the partials sit so close together you must verify that the note you played is the note you meant. Keep a tuner app and a piano app nearby, and get in the habit of humming the target note before you play it - cracked notes drop dramatically. Get the right-hand-in-the-bell posture right from day one, too!",
    lesson: "Lessons essential - this has the highest self-taught failure rate of any brass instrument. The partials are packed so tightly that a wrong lip slides you onto a neighboring note even with the correct valve, and fixing that alone is nearly impossible. Plan on a teacher for the first year. From the very first day!",
    buy: "The priciest entry in brass (single horn $410-$680 student double horn from about $1,350). So there is a standard route: (1) start on an instrument owned by a city wind band or amateur orchestra, (2) rent monthly from a shop, (3) buy once you are sure. Used checklist: do the rotary valves snap back briskly when you release the levers (a seized rotor is the big landmine), and sniff for corrosion inside the tubing. There is a Silent Brass for horn as well.",
    firstGoal: "Within six months, hit your intended note on the first try 90% of the time. On horn that is worth more than any single piece.",
  },

  natural_horn: {
    how: "This is the world of accomplished modern horn players - I would politely talk you out of it as a first instrument! You finish building your feel for the harmonic series on horn, then learn hand stopping, where the depth of your right hand in the bell creates the pitches. Half the work is ear training: hearing the difference between open and stopped notes as expression rather than as a defect. Wear out some period-instrument recordings of the Mozart horn concertos.",
    lesson: "Lessons essential - but natural horn teachers in Korea are vanishingly rare. Realistic route: fundamentals through modern horn lessons, ask around the early-music network, then online lessons from abroad. If a period-instrument orchestra runs a workshop, go, no questions asked.",
    buy: "Almost nothing reaches Korea, so importing or ordering from a workshop is the default ($1,050-$3,400). The price swings hugely on whether a set of crooks (the interchangeable tubes that change key) is included, so check the quote for F, E-flat and D crooks. Pitfall: buying the body without crooks leaves you stuck in one key and paying more later.",
    firstGoal: "In your first year, play a phrase of the Mozart concerto on the harmonic series alone with the open-versus-stopped shading alive. Manage that and you are already a name in the scene.",
  },

  natural_trumpet: {
    how: "The final dungeon for advanced trumpeters - not a first instrument! You walk the harmonic series on lips and ears alone with no valve seatbelt, so cross over only after your modern trumpet high register (around high C) is solid. The practice itself is simple: climb and descend the harmonic series, every day, endlessly. Bach cantata recordings are the textbook.",
    lesson: "Lessons essential - specialists in Korea are few, but there are trumpeters who double on baroque trumpet. Asking around early-music ensembles and baroque orchestras is the fastest route, and online lessons from abroad are thriving in this field.",
    buy: "Imported, and wildly polarized - educational Brass for Beginners style starter horns run $270-$410 while handmade instruments from Egger or Rath start above $2,400. An educational model is plenty for learning the harmonic series at first. Checklist: most modern reproductions have vent holes drilled for intonation, and if joining an ensemble is the goal the vented kind is actually the practical choice (hole-free purist horns are for the very advanced).",
    firstGoal: "In your first year, land partials 8 through 12 reliably. Those five rungs are the entire ladder to Bach.",
  },

  euphonium: {
    how: "The kindest entry point in the whole brass family! The big mouthpiece makes buzzing easy to find and the first note comes quickly. Same order as always: a week of buzzing, then long tones, then simple tunes. The sound comes out so smoothly that it gives you that 'wait, am I talented?' illusion (the good kind) faster than any other brass instrument. Listen to wind band favorites and plant the image of playing as if you were singing.",
    lesson: "Lessons recommended - the sound is forgiving, but getting your basic embouchure checked still pays. If specialist teachers are thin where you live, studying with a trombone teacher (similar mouthpiece and range) is the common detour, and it genuinely works.",
    buy: "Chinese models $340-$550 a Yamaha student model around $1,350. Higher-end horns jump in price depending on whether they have a compensating (intonation-correcting) system - non-compensating is plenty for a beginner. Starting on an instrument owned by a city wind band is an excellent route too (euphoniums are commonly group-owned). Used checklist: valve return, and whether there is a fourth valve (a bonus in the low register). Mutes need to be euphonium-specific!",
    firstGoal: "Within two months, play a song you love as if you were singing it. Brass rarely delivers a first piece this fast, so be confident!",
  },

  tuba: {
    how: "Answer this before you start: where will the instrument live, and how will you move it? That is half of tuba life. The playing itself is surprisingly gentle - buzzing (quick to find on such a big mouthpiece), long tones, scales. It does swallow enormous amounts of air, so you may feel a bit dizzy at first; keep sessions short and do not push. Deep breathing exercises are tuba practice.",
    lesson: "Lessons recommended - having someone sort out your air use early (blow too little and the note will not bloom, blow blindly and you get dizzy) makes everything easier. That said, this instrument's real teacher is playing with others. Take the group route in the buying section below and lessons tend to follow naturally.",
    buy: "One of the priciest in brass ($1,050-$2,050 to start, Yamaha student models over $2,750), so do not buy on impulse! The standard route: (1) join a city wind band or amateur orchestra and start on their tuba (tubas are the most commonly group-owned instrument of all), (2) rent from a shop alongside, (3) buy after a year if you are still serious, starting with value import brands like Wessex. Used checklist: valve and rotor condition, how many dents, and whether a hard case is included (cases alone run into the hundreds of thousands of won). A transport cart is essential kit!",
    firstGoal: "Within three months, hold down the bass line for a whole piece in an ensemble. The joy of tuba is not solo playing, it is the moment everything sounds empty without you.",
  },

  sousaphone: {
    how: "Real-world order first: start on tuba (or euphonium) and put on a sousaphone when your band needs one. The fingerings match tuba, so switching takes no time. The sousaphone's own homework is the stamina and balance to wear it standing and walking - sit in a chair first to get used to the weight, then stretch out your standing time bit by bit.",
    lesson: "Lessons recommended - though sousaphone lessons do not really exist as such; learn from a tuba teacher. For that rolling New Orleans bass line, Korea's brass band scene (ska and funk bands included) and YouTube are your teachers.",
    buy: "New ones rarely reach Korea, so importing is the default. For a beginner, fiberglass is the answer ($1,050-$2,050 a manageable 5kg or so) - metal showpieces run around $6,850 and weigh like weapons. Pitfall: used sousaphones often have deformation where the horn rests on the neck plus seized valves, so never buy one sight unseen. And seriously, before you buy: this thing occupies an entire corner of a room. Negotiating storage space with your family comes first!",
    firstGoal: "Wear it, stand for 30 minutes, and keep an eight-beat bass line going. On this instrument stamina is skill.",
  },

  alphorn: {
    how: "Welcome to the world of the 3.6m wooden horn! Happily the start is modest - get an alphorn mouthpiece (wooden) on its own and practice buzzing. The usual pattern is mouthpiece buzzing at home, then assembling the full horn by a river or in a park on weekends to work the harmonic series. If you have played brass, your buzz transfers straight over and you will get sound on day one. Since it plays the harmonic series only, the practice content itself is refreshingly simple!",
    lesson: "Self-teaching is fine (assuming brass experience) - alphorn teachers in Korea essentially do not exist. If you have never played brass, a few months of trumpet or horn lessons to build a buzz first is the recommended path. Swiss performance videos and overseas online courses are the standard textbook.",
    buy: "Almost nothing is sold in Korea, so importing is the only route. Wooden starter horns run $1,350-$2,200 (Swiss workshops, CHF 1,600-2,000); carbon ones, easier to carry and to keep humidity-safe, run $1,350-$1,900 - if you live in an apartment and travel by car, carbon is the realistic pick. Checklist: does it come apart into three or four sections (a one-piece horn cannot be transported), is it in the standard F-sharp/G-flat (for playing with others), and is a carry bag included. Pitfall: cheap decorative alphorns at souvenir grade are not instruments, pitch-wise.",
    firstGoal: "Outdoors, sound six partials clearly and play one Swiss folk tune well enough to earn applause from a passing hiker.",
  },

  serpent: {
    how: "The final boss of early music, and a perennial top pick for hardest instrument to play in tune. Absolutely not a first instrument! Ideally you arrive with two backgrounds - buzzing from low brass (trombone or euphonium) and finger-hole feel from the recorder family. Because the holes sit in acoustically wrong places, you correct almost every note with lips and ears, which makes the bulk of practice an endless conversation with a tuner.",
    lesson: "Lessons essential - except there are essentially no players or teachers in Korea. The realistic route is entirely self-driven: fundamentals on trombone or euphonium, then the international serpent community (surprisingly lively), then online lessons and summer workshops abroad. Only worth it if you enjoy the pioneering itself.",
    buy: "Zero domestic supply; importing or ordering from a workshop is the only way. British workshop wooden reproductions run £2,500-3,000 ($2,750-$4,100), and the occasional fiberglass or resin model is the more affordable way in. Checklist: wood and leather construction makes humidity management mandatory (a hygrometer in the case is recommended), and confirm whether a mouthpiece is included. Pitfall: decorative and film-prop serpents circulate on the used market, so look for an explicit playable label.",
    firstGoal: "In your first year, play a one-octave scale with the tuner staying green the whole way. On serpent that is a recital-level achievement.",
  },

  didgeridoo: {
    how: "The best value dungeon in this whole batch! Cheapest route: a PVC pipe from the hardware store (40-50mm across, 1.2-1.5m long, from about $5) with a mouthpiece rim shaped in beeswax or hot glue - and yes, the sound really is a didgeridoo. Flap your lips loosely to lay down a droning brrrr (a few days), then stack rhythms on top with tongue, cheeks and voice. The final boss, circular breathing, works like this: store air in your cheeks, then squeeze that air out to keep the sound going while breathing in through your nose at the same time. Blowing bubbles through a straw in a glass of water is how the feeling clicks.",
    lesson: "Self-teaching is fine - there are basically no lessons in Korea anyway, and English-language YouTube courses are the global standard textbook. The drone takes a few days on your own and circular breathing takes months, but that wall is one you have to cross with your own mouth even with a teacher, so going solo costs you little.",
    buy: "Climb the ladder: DIY PVC for $5 then a bamboo or teak starter for $20-$70 on Korean online marketplaces, then a handmade eucalyptus one for several hundred thousand won (imported). No instrument gives you less reason to buy expensive first! Checklist: keys C through E are comfortable for beginners, and check that the mouthpiece inner diameter is 28-32mm. Pitfall: souvenir pieces tagged as Aboriginal handcraft (pretty paint, terrible bore finish) are the biggest trap.",
    firstGoal: "A steady drone in one month, then at six months a drone held for 60 seconds with circular breathing (or at least sounding like it). Pull it off and people at parties treat you like you have superpowers.",
  },

  // ════════════════════ Tuned percussion (9) ════════════════════

  marimba: {
    how: "Good news first: zero worries about saliva, lips or calluses, and if you play piano the keyboard layout is identical, so you can teleport straight in! Bad news: the instrument is the size of a living room. So the standard route is to move your body instead of the instrument - practice on the marimbas at an academy, a rehearsal room or a university practice building, and at home use a rubber practice pad ($15-$35) for stick control and a used xylophone or a keyboard app for learning the note layout. Start with two-mallet scales; four-mallet grips (Stevens or Burton) come after the basics are solid!",
    lesson: "Lessons recommended - the four-mallet grip especially is the classic place where self-teaching sets into something strange. Percussion majors teach at academies and privately, plenty of them around Seoul, and there is the practical bonus that lessons equal access to an instrument. Up through the two-mallet stage, a pianist with drum experience can go it alone.",
    buy: "Buying your own is a last resort (even a basic practice model starts around $1,050 and a concert rosewood one blows past $6,850). Realistic order: (1) sign up at a percussion academy or rehearsal room, instrument use included, (2) join a city orchestra or percussion ensemble and use their instrument, (3) own your mallets and nothing else ($20-$70 a pair, start with two pairs of medium hardness), (4) if you truly must buy, start with a used three-octave synthetic-bar model. Pitfall: buying a cheap children's xylophone toy as a marimba substitute - different range, different feel, different object.",
    firstGoal: "Within two months, play a melody you love with two mallets; within six months, roll a four-mallet chord tremolo until it rings like an organ.",
  },

  vibraphone: {
    how: "If jazz is calling you, this is the pick! The starting order resembles marimba (rehearsal-room instrument, two mallets first), but on vibes the pedal is the instrument - it looks like a piano pedal, yet the decay timing is different, so practice cutting the pedal alongside your scales from the start. And half of what you learn here lives outside the instrument: jazz harmony (starting with 2-5-1) and memorizing standards. At home, studying harmony on a MIDI keyboard counts as preparation.",
    lesson: "Lessons recommended - specialist vibraphone teachers in Korea are few, so the practical route is a two-track detour: a percussion major for mallet fundamentals plus a jazz piano teacher for harmony and improvisation. If you go it alone, the Gary Burton method book is the shared global textbook.",
    buy: "Owning one is as unrealistic as a marimba (basic models from about $1,700) and the used market is thin. Route: (1) instruments at jazz rehearsal rooms and percussion academies, (2) buy only mallets (cord-wound vibraphone mallets, two pairs of medium), (3) substitute a MIDI keyboard plus a vibraphone sound at home (for harmony study that is arguably more efficient!). Pitfall: grabbing a cheap used one with a dead motor - motor and pedal repairs are surprisingly hard to arrange in Korea.",
    firstGoal: "Within three months, play one jazz standard ('Autumn Leaves' recommended) with melody and chords. When the pedal ring spreads like club lighting, you have got it!",
  },

  xylo_glocken: {
    how: "The front door to the mallet world, and the only one in this family you can actually do at home! Buy a tabletop glockenspiel ($35-$100) and play straight from piano sheet music - that is your practice. Strike with a wrist snap so the mallet bounces off; press into the bar and the sound dies. The first technical task is layering alternating sticking (right-left-right-left) onto scales. Get hooked here and the door to marimba and orchestral percussion swings open.",
    lesson: "Self-teaching is fine - the keyboard layout matches piano and there is plenty on YouTube, so hobby level is easily solo. If joining an orchestra or wind band percussion section is the goal, add percussion lessons then, for sticking and roll technique.",
    buy: "A tabletop glockenspiel from an educational brand like Yamaha or Angel at $35-$100 is plenty to start. Checklist: make absolutely sure it is chromatic, with the sharps and flats included - a diatonic one with no accidentals slashes what you can play, and that is the biggest landmine! Practice xylophones start in the hundreds of thousands of won. Apartment tip: lay a towel underneath and play softly, and daytime practice is no trouble.",
    firstGoal: "Within two weeks, imitate Papageno's magic bells from 'The Magic Flute'; within a month, play an anime theme all the way through. Quick wins are this instrument's identity!",
  },

  timpani: {
    how: "Getting started on timpani is not about getting an instrument, it is about getting into a group. Applying to the percussion section of a city orchestra or wind band is realistically the only entry point. Solo practice means a practice pad (a drum one is fine) for mallet control, a piano app for ear training (this is the key - you tune the pedals by ear in the middle of a piece!), and roll technique. Remember that this instrument sits at the exact opposite pole from assuming percussion only needs good rhythm.",
    lesson: "Lessons recommended - timpani is standard curriculum in percussion study, so finding a teacher is not hard. Grip, rolls and pedal tuning go dramatically faster with a coach, and having an instrument in the lesson room is itself worth a lot.",
    buy: "Set aside the idea of buying ($2,050 for one drum, a performance set of four in the tens of millions, plus a spare room). Standard route: (1) group instruments at a city orchestra, school or church, (2) instruments in a percussion academy's lesson room, (3) own only mallets (timpani-specific, two or three pairs of different hardness) and a practice pad. Mallet landmine: never hit timpani with drumsticks or marimba mallets, which damages the heads - only timpani felt mallets!",
    firstGoal: "Within three months, change pitch by a fourth with the pedal accurately by ear alone, plus an even 10-second roll. Get those two and you are ready for your ensemble debut.",
  },

  steelpan: {
    how: "A pioneer's instrument with almost no infrastructure in Korea, but the self-teaching difficulty itself is gentle! Your first task is memorizing the map rather than playing - the notes sit in a circle-of-fourths spiral, nothing like a piano, so print a note layout diagram, stick it on the wall and start there. Then rubber-tipped sticks for scales, calypso rhythm patterns, and chord arpeggios in that order. YouTube pan tutorial videos are the global textbook.",
    lesson: "Self-teaching, semi-forced - lessons in Korea essentially do not exist. YouTube and overseas communities (the Trinidadian and American steel band world) are your teachers, and happily the free material is abundant. Drum or piano experience moves you along nicely.",
    buy: "Importing is the default (a tenor pan runs $680-$1,700 plus shipping and duties). Checklist: (1) the maker's reputation as a tuner - with steelpan the builder is the tuner, (2) chrome plating for rust prevention, (3) whether a stand and sticks are included. Pitfall: cheap untuned pans and decorative souvenir pans are genuinely everywhere. Skip any listing that does not say concert pitch tuned. And know before buying that nobody in Korea can retune it for you every few years!",
    firstGoal: "Within two months, play a scale without looking at the layout diagram; within three, a full tune in calypso rhythm. The moment you start playing, your living room becomes a beach.",
  },

  handpan: {
    how: "One of the lowest thresholds anywhere - each instrument is tuned to a single scale, so nothing you hit is a wrong note! The whole technique is touching your fingertips down and lifting them away quickly (hold them there and the sound dies). Learn the ding, the center note, first, then the tone fields, and once you put notes over a boom-tap rhythm you are already performing. YouTube courses (David Kuckhermann and others) are the standard textbook. It is one of the fastest-rewarding instruments there is - you will sound good on day one.",
    lesson: "Self-teaching is fine - lessons in Korea are very rare, but the self-teaching difficulty is low and YouTube material is plentiful, so it is a non-issue. Any rhythm background such as djembe or cajon gives you wings.",
    buy: "This instrument's biggest hurdle is not playing, it is shopping! Iron rule: get a cheap one to start does not work here. The $410-$680 mass-produced imports are a minefield of instruments already out of tune or soon to be. Verified route: import from a reputable maker like Yishama, Ayasa or Meraki, or buy a nitrided-steel 9-note sold in Korea (around $1,350). Budget from around $1,050-$1,350 for a proper one. Checklist: explicit nitrided or stainless material, a tuning video provided, and a D Kurd 9-note (the people's beginner scale) recommended. Care landmine: leaving it in a car in summer means tuning death.",
    firstGoal: "One four-bar rhythm pattern in your first week; within a month, five minutes of unbroken improvisation to soothe your family.",
  },

  tongue_drum: {
    how: "You can start today and succeed today, even with zero musical experience! Open the box, put it on your lap, tap it with the included mallets, done. Many products ship with number stickers and number-based sheet music, so finishing a nursery song on day one is realistic. Moving to finger technique, softer than mallets, is stage two; improvising over a boom-tap rhythm is stage three. Leaving it playing like meditation or yoga background music and tapping away at random is exactly what this instrument is for.",
    lesson: "Self-teaching is fine - lessons do not exist and are not needed. The included sheet music and YouTube are plenty. What matters more than learning here is simply touching it often!",
    buy: "Korean online marketplaces have decently tuned instruments from about $35 - one of the rare instruments where a cheap entry is genuinely fine! Recommended spec: 12 inches or more across, 13 notes or more (8 notes gets dull quickly), in D minor or C major. Checklist: does the set include mallets, a bag and a songbook. Pitfalls: not many, but if forced to name one, buying it expecting a handpan substitute. The class of resonance is different, so treat it as a healing accessory and handpan preparation.",
    firstGoal: "A nursery song on day one, three minutes of improvisation without sheet music in your first week. And a few months later, catching yourself typing handpan into a search bar (a scheduled future).",
  },

  handbell: {
    how: "The whole how-to-start is one line: find a team! A handbell player alone has only a few notes, so joining a handbell choir at a church, school or community center is the start. Personal prep amounts to reading the score (counting when your notes come is both the whole job and the key skill) and practicing your wrist snap. Basic techniques like ringing and damping against your chest get taught on your first team rehearsal.",
    lesson: "Lessons equal team rehearsals. There is essentially no private lesson market and no need for one - showing up to a choir with a conductor is your lesson, your practice and your concert prep all at once. If you can read music, and they will teach you if you cannot, this is the lowest barrier in the whole batch!",
    buy: "The official answer is that you do not buy anything (a 25-note choir chime set starts around $1,050 a three-octave bronze handbell set runs around $6,850 - all group-owned). Your personal outlay is usually a pair of cotton gloves to keep the bells from tarnishing, a few thousand won. If you really want something of your own, individual choir chimes or an 8-note mini set (a few hundred thousand won) works for playing with family. Pitfall: decorative antique handbells are untuned ornaments.",
    firstGoal: "Play your part with no misses at your first performance, a church event or a recital. The satisfaction of your bell landing exactly right inside a chord is quietly addictive.",
  },

  tubular_bells: {
    how: "First things first: this is not an instrument you learn on its own! Tubular bells exist as a part an orchestral percussionist covers briefly in a piece. So the entry route is the orchestral percussion route: join the percussion section of a city orchestra or wind band and learn chimes alongside timpani and mallets. The technique itself takes a day (strike the top rim of the tube with a rawhide hammer and control the ring with the pedal) - the real skill is the counting and the nerve to rest for dozens of bars and then land one perfect strike.",
    lesson: "Lessons recommended - but as a chapter within percussion study rather than lessons of its own. Learn it as a set with orchestral percussion generally (timpani, mallets, cymbals) and your opportunities in a group widen enormously.",
    buy: "Practically nobody buys these personally (from $2,050 100kg with the frame, and you need ceiling height). Learning on a group or institutional instrument is close to the only route, and your personal outlay is a chime hammer with a rawhide or plastic head, a few tens of thousands of won. Alternative: home practice on a keyboard app for counting is plenty - 80% of practice on this instrument is counting anyway.",
    firstGoal: "Rest 40 bars in rehearsal, then land the climactic strike exactly. Do it and the conductor will catch your eye and nod that day.",
  },

};

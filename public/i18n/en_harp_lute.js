// English overlay — harp & lute family batch. Keys match data/inst_harp_lute.js ids 1:1.

const EN_INST_HARP_LUTE = {

  // ==================== Harps (5) ====================

  concert_harp: {
    name: "Concert harp (pedal harp)",
    family: "Harps",
    toneDesc: "Shimmering glissandos and deep bass that wrap around a whole hall. The sheer scale of the resonance is nothing like a small harp — one plucked note is enough to flood a room.",
    caveats: [
      "Price is the real gate — Korea's rental and secondhand markets are both thin",
      "Moving it changes how you live (car, elevator, somewhere to park it)",
      "Lessons cluster around Seoul-area conservatory circles; outside the capital, just finding a teacher is the job",
      "If the budget does not stretch, starting on a lever harp is the standard route",
    ],
  },

  lever_harp: {
    name: "Lever harp (Celtic harp)",
    family: "Harps",
    toneDesc: "A smaller, more intimate ring than a concert harp. The warm volume fits a living room exactly, tuned for lullabies and Celtic airs.",
    caveats: [
      "Flipping levers to change key is fiddly, so harmonically busy classical pieces are out of reach — that is pedal harp territory",
      "It is the entry model, but a new 34-string still runs several million won",
      "Korean lessons are concentrated in a handful of harp studios and association circles",
    ],
  },

  lyre_harp: {
    name: "Lyre harp",
    family: "Harps",
    toneDesc: "A tiny, fragile chime of a sound. Quiet enough to play on your bed at midnight — less an instrument you perform on than one you simply enjoy the sound of.",
    caveats: [
      "Diatonic tuning plus few strings means a narrow range of playable tunes — you hit the ceiling fast and end up trading up to a lever harp",
      "There is essentially no lesson culture (assume self-teaching and YouTube)",
      "The cheapest models often will not tune true, or drift out within a day",
    ],
  },

  triple_harp: {
    name: "Baroque triple harp",
    family: "Harps",
    toneDesc: "The old, round ring that only gut strings give. Quieter than a modern harp, but the overtones tangle together into something candlelit.",
    caveats: [
      "You can count Korea's players and teachers on one hand — assume study abroad or overseas masterclasses",
      "There is a joke that tuning the three rows alone takes an hour (roughly 90 strings)",
      "Just getting an instrument is a project: research workshops, order, wait, clear customs",
    ],
  },

  wire_harp: {
    name: "Irish wire-strung harp (clarsach)",
    family: "Harps",
    toneDesc: "Bell-like metallic overtones stack up and ring on for seconds. Somewhere between a music box and a carillon. Let them run and the notes tangle, so stopping sound is the real skill, not making it.",
    caveats: [
      "Much of it does not carry over from nylon-strung harp (nails, damping) — even experienced harpists relearn a stretch",
      "Books and lessons are all English-language and online (there are effectively no teachers in Korea)",
      "Nail care becomes part of your daily routine",
    ],
  },

  // ==================== Plucked folk (6) ====================

  autoharp: {
    name: "Autoharp",
    family: "Plucked · folk",
    toneDesc: "A lush strum with many strings ringing at once. Lyrical chords sitting somewhere between harp and guitar — a sound built for backing singing.",
    caveats: [
      "You only get the chords the buttons have — jazz tension chords are structurally impossible",
      "Melody picking exists but it is an advanced technique; at heart this is an accompaniment instrument",
      "Tuning 36 strings is a 15-minute session with a tuner in hand",
    ],
  },

  mountain_dulcimer: {
    name: "Mountain dulcimer",
    family: "Plucked · folk",
    toneDesc: "A melody riding over drone strings that never stop humming — plain and bagpipe-like. Not flashy, but it has the warmth of a fireside.",
    caveats: [
      "Diatonic frets struggle with chromatic tunes and key changes (extra half-fret models help a little)",
      "Korea has essentially no community, so assume pure self-teaching (English-language material is abundant)",
      "The hammered dulcimer shares only the name and is a completely different instrument — watch out when buying",
    ],
  },

  balalaika: {
    name: "Balalaika",
    family: "Plucked · folk",
    toneDesc: "Bright and ringing when plucked, then aching the moment you slip into tremolo. It carries that Russian folk feeling of laughing and crying in the same breath.",
    caveats: [
      "Korea has virtually no lessons or community — assume self-teaching from Russian and English YouTube",
      "Cheap souvenir models are everywhere, so confirm the one you buy is actually meant to be played",
      "You will never run into the large sizes, like the contrabass balalaika, in Korea",
    ],
  },

  charango: {
    name: "Charango",
    family: "Plucked · folk",
    toneDesc: "Ten strings jangling together in a strum, then an aching tremolo. That Andean sound where brightness and sorrow live side by side.",
    caveats: [
      "The middle course sits an octave apart (re-entrant tuning), so guitar scale instincts land slightly off",
      "Essentially no lessons in Korea — assume self-teaching from Spanish and English material",
      "Vintage armadillo-shell bodies run into CITES import restrictions, so buy a wooden model",
    ],
  },

  cavaquinho: {
    name: "Cavaquinho",
    family: "Plucked · folk",
    toneDesc: "Bright, cutting chops from steel strings and a pick. Small instrument, huge presence — it drags a whole samba band's rhythm along from the front.",
    caveats: [
      "It is a rhythm instrument at heart, so playing alone can feel flat — it shines when there is percussion and singing to lock into",
      "Korea's samba and choro scene is a small Seoul circle, and lessons basically do not exist",
      "The 16th-note right hand is the whole thing — chords come easy, but the groove takes ages",
    ],
  },

  cittern_modern: {
    name: "Cittern (modern cittern)",
    family: "Plucked · folk",
    toneDesc: "The chorus of doubled courses spreads wide an octave below a mandolin. Lay a drone underneath and you get that misty Celtic ring.",
    caveats: [
      "The line between this, the bouzouki and the octave mandolin is blurry, so check scale length and tuning yourself before buying",
      "Almost nobody in Korea knows it — turn up at a session and the first question is always 'what is that?'",
      "There are several standard tunings (GDAEA, DGDAD and more), so pick one early",
    ],
  },

  // ==================== Lute family & early plucked (13) ====================

  renaissance_lute: {
    name: "Renaissance lute",
    family: "Plucked · lute family",
    toneDesc: "Gut (or Nylgut) strings plucked with bare fingertips make a frail sound that flickers like candlelight. Not loud, but up close it is intimate enough to catch your breathing.",
    caveats: [
      "There is an old joke that lutenists spend half their lives tuning and the other half playing out-of-tune lutes — the fate of many courses plus gut-type strings",
      "Music comes in tablature rather than staff notation, so that is a separate thing to learn (happily, more logical than guitar tab)",
      "Korea has only a handful of players who teach — assume online lessons and overseas material",
      "Sensitive to humidity because the body is so thin — a winter humidifier is mandatory",
    ],
  },

  baroque_lute: {
    name: "Baroque lute",
    family: "Plucked · lute family",
    toneDesc: "Open bass strings resonating into a shadowed hum. Darker and more contemplative than a Renaissance lute — plenty of fans call it the finest plucked sound to sit alone with at night.",
    caveats: [
      "D-minor tuning does not match guitar or Renaissance lute instincts, so even veterans redraw their mental map",
      "The tuning jokes fit this one best — 13 courses means around 24 strings",
      "Lots of people start because they want to play Bach, but Bach is hard on this instrument too",
      "Barely anyone in Korea specializes in it — assume online study with an overseas teacher",
    ],
  },

  archlute: {
    name: "Archlute",
    family: "Plucked · lute family",
    toneDesc: "A lute's intimate treble and the deep resonance of extended basses in one instrument. It sounds like a lute when playing solo, then turns into the bass pillar of an ensemble.",
    caveats: [
      "The fingered courses are tuned like a Renaissance lute so getting in is easy, but basso continuo — improvising harmony over a figured bass line — is a separate study",
      "Its role overlaps with the theorbo, and 'which of the two should I buy' is a perennial early-music dilemma",
      "In Korea, just laying eyes on a real one is an event",
    ],
  },

  theorbo: {
    name: "Theorbo",
    family: "Plucked · lute family",
    toneDesc: "One open bass note sweeps across the floor of a hall — the deepest resonance in the plucked world. The drop between satellite-bright trebles and earthquake basses is the whole charm.",
    caveats: [
      "The top two courses drop an octave in re-entrant tuning — you have to rewire your melodic instincts",
      "It is an accompaniment instrument at heart — there is solo repertoire (Kapsberger), but playing alone can get dull",
      "Basso continuo, building harmony on the fly from figures, is the day job, so harmony study comes with it",
      "Transport shapes your life — without a car, reconsider seriously",
    ],
  },

  baroque_guitar: {
    name: "Baroque guitar",
    family: "Plucked · lute family",
    toneDesc: "Shimmering chorus from the doubled courses over the round tone of gut-type strings. Strum it and you hear a distant ancestor of flamenco; pluck it and you get lute-like lyricism.",
    caveats: [
      "The tuning frame matches strings 1 to 5 of a modern guitar so entry is easy, but the octave layout of courses 4 and 5 differs by school (Bolognese or French) and must be chosen early",
      "You need to learn tablature plus alfabeto chord notation",
      "Korean lessons are very scarce — the realistic move is a classical guitar teacher who also works in early music",
    ],
  },

  renaissance_guitar: {
    name: "Renaissance guitar",
    family: "Plucked · lute family",
    toneDesc: "A small, round ring. Imagine a ukulele with the plastic taken out and candle smoke put in.",
    caveats: [
      "Its own repertoire (the French four-course books of Morlaye and friends) is limited — you soon start eyeing the lute and vihuela",
      "Both instrument and material have to be imported. Awareness in Korea is zero",
    ],
  },

  vihuela: {
    name: "Vihuela",
    family: "Plucked · lute family",
    toneDesc: "Tidier than a lute, older-sounding than a guitar, with the scent of dry wood in it. That shaded Spanish lyricism is soaked right in.",
    caveats: [
      "The repertoire lives almost entirely in seven 16th-century Spanish printed books — deep, but narrow",
      "It uses Italian tablature, with the number lines flipped top to bottom, so it differs from lute tab again",
      "You could count the people in Korea who have seen one in the flesh",
    ],
  },

  mandolino: {
    name: "Mandolino (Baroque mandolin)",
    family: "Plucked · lute family",
    toneDesc: "Instead of the modern mandolin's metallic glare, gut strings give a small, round, crystalline clarity. Like a music box under candlelight.",
    caveats: [
      "Even modern mandolin players should not treat it as the same instrument — the tuning runs in fourths and you pluck with fingers",
      "Repertoire, resources and instruments are all scarce — even within the lute family this is the enthusiast track",
    ],
  },

  renaissance_cittern: {
    name: "Renaissance cittern",
    family: "Plucked · lute family",
    toneDesc: "The bright, jangling ring only wire strings give. Not the candlelit hush of the lute family — this is the sound of a market square at noon.",
    caveats: [
      "Wire strings and a plectrum, unlike the gut-strung lutes, so it may not match your idea that early music means delicate sound",
      "Repertoire and resources are scarce (Holborne and a few others) — and it shares only a name with the modern cittern; tuning and culture differ",
    ],
  },

  orpharion: {
    name: "Orpharion",
    family: "Plucked · lute family",
    toneDesc: "Lute repertoire ringing out with a harpsichord-like metallic sheen. The fun is hearing familiar pieces wear unfamiliar clothes.",
    caveats: [
      "Gather every player on earth and you still would not fill a lecture hall — a genuine wildcard pick",
      "No dedicated teachers or method books; you build on lute knowledge and pioneer your own way",
      "Getting hold of one is itself the project: research a workshop, order, wait, import",
    ],
  },

  bandora: {
    name: "Bandora",
    family: "Plucked · lute family",
    toneDesc: "A big, dark sound with wire basses humming underneath. Somewhere between the low register of a harpsichord and a double bass.",
    caveats: [
      "Close to an ensemble-only instrument — without partners to form a broken consort, there is nowhere to put it",
      "Players and instruments in Korea both start from zero; this is untouched frontier",
      "Solo music is extremely scarce",
    ],
  },

  gallichon: {
    name: "Gallichon (mandora)",
    family: "Plucked · lute family",
    toneDesc: "Halfway between a lute's delicacy and a guitar's familiarity. The low, settled bass is especially lovely underneath singing.",
    caveats: [
      "So few people know it that every 'is that a lute?' turns into a long explanation",
      "Scores and scholarship are only now being unearthed — the repertoire map is still being drawn",
      "There are effectively no players in Korea",
    ],
  },

  psaltery: {
    name: "Psaltery",
    family: "Plucked · zither family",
    toneDesc: "A short, clear ring between a small harp and a music box. Put a medieval chant or carol on it and the air turns into a monastery chapel.",
    caveats: [
      "The strings are laid out diatonically, so chromatic tunes and key changes are a weak spot",
      "You supply your own repertoire — there is no such thing as a psaltery method book",
      "The bowed psaltery is a 20th-century invention and effectively a different instrument, so tell them apart when buying",
    ],
  },

};

const EN_GUIDE_HARP_LUTE = {

  // ==================== Harps (5) ====================

  concert_harp: {
    how: "Let's be honest — you can't just buy a concert harp and dabble. The standard route is: (1) spend a year or two on a lever harp building the basics (hand shape, arpeggios), then (2) move up to a pedal harp once you've decided this is a major or a serious hobby. If you want pedals from day one, look for a harp studio that keeps an instrument on site for lessons, or a rental program. You need time to befriend those foot pedals before a ₩20,000,000 piece of furniture moves in.",
    lesson: "Lessons essential — pedalling, hand shape and the angle you pluck at all set badly on your own, and fixing them costs more. Teaching in Korea clusters around Seoul-area conservatory circles and specialist harp studios, so outside the capital your first assignment is finding a teacher at all.",
    buy: "Student pedal harps (Salvi, Lyon & Healy) start around ₩20,000,000, and going through an official Korean importer such as Harp Gallery is the safe path. At first, rent from a studio or hunt the thin secondhand market rather than buying — the real landmine isn't a bad instrument, it's buying one without doing the math on transport and space. Start by measuring your elevator.",
    firstGoal: "Coming from a lever harp, aim to play one piece all the way through while changing key with your feet within three months of switching (Pachelbel's Canon, say). The first time you press a pedal and the key shifts under your foot, that price tag starts to make a little sense.",
  },

  lever_harp: {
    how: "This is the realistic answer for starting harp. A 34-string with full levers is the standard, but if the budget pinches, a small 22 to 26-string is plenty for the basics. Your first month is just hand shape (fingers 1 through 4 — the pinky is retired) and plucking, then returning your hand. It looks dull, but it is 80% of harp tone. Getting friendly with a tuner app is required too.",
    lesson: "Lessons recommended — you can start with books and YouTube (the English-language stuff is abundant), but once a bad hand shape sets, fast pieces will stop you cold. Korean teaching is concentrated in harp studios and the Korea Harp Education Association network, so outside the capital area online lessons are a realistic choice.",
    buy: "Small budget models start around ₩1,000,000; a standard 34-string with full levers runs about ₩4,000,000 in Korea (carried by shops like Euro Music and Segye Akgi). If you're serious, the small Salvi and Lyon & Healy lines are the safe pick. Landmine alert: ultra-cheap imports such as Roosebeck are known in harp circles as 'firewood harps' — reviews report levers snapping and tuning that won't hold. Grab one just because it's cheap and you may have bought decor, not a harp.",
    firstGoal: "Within three months, one Celtic air with both hands — say 'Down by the Salley Gardens' — melody in the right, arpeggios in the left, start to finish. Harp is wonderfully cost-effective that way: even your first piece gets an 'oh, that sounds angelic' out of people.",
  },

  lyre_harp: {
    how: "Ten minutes after you open the box you can play something resembling music — it's the free trial version of the harp family. The order: (1) tune every string with a tuner app (it'll drift daily the first week; that's normal), (2) pluck one line of a nursery rhyme or carol, (3) pluck two or three strings together for harmony. Can't read music? Stick numbered labels on the strings and go. It's the only harp you can play on your bed at night.",
    lesson: "Self-teaching is fine — there's no lesson culture here to begin with (apologies to every lyre harp teacher in the country). YouTube tutorials and number notation are enough, and the occasional Waldorf-school program is about all you'll find.",
    buy: "Korean online music shops (Angel Akgi and the like) and open marketplaces sell 16-string models for around ₩100,000, and 7-string ones for as little as ₩50,000. The only harp in the impulse-buy bracket. The landmine is the rock-bottom stuff at ₩20,000–30,000 — loose tuning pins mean the notes won't survive a day, so check reviews specifically for whether tuning holds.",
    firstGoal: "Play 'Twinkle Twinkle Little Star' through in your first week, and a phrase of a song you love with harmony under it within a month. An honest heads-up: around month three you'll start feeling boxed in by the string count — that's your cue to move up to a lever harp.",
  },

  triple_harp: {
    how: "A Baroque harp with roughly 90 strings in three rows — yes, this is less a hobby than an expedition. Korea has essentially neither teachers nor instruments, so the real route is: (1) build your foundation on a lever or concert harp, (2) fall for early music, (3) see the whole project through — researching European workshops, ordering, waiting months, clearing customs. Before you start, watch plenty of triple harp playing on YouTube and ask yourself whether this sound is worth that much trouble. Fans say it is.",
    lesson: "Lessons essential, though not available in Korea — threading your fingers between three rows of strings is brutal to learn alone. Overseas online lessons and European masterclasses are the realistic path, and honestly this is only for people who already have harp fundamentals.",
    buy: "There's no mass production, so a commission from a European harp workshop is the only route — roughly ₩8M–25M, varying a lot by spec and maker, with a wait of several months to a year. Naming one workshop here would be irresponsible; check recent build reports on international harp forums and early-music communities before deciding. The landmine is the decorative three-row harp — pieces never engineered for playing tension do circulate.",
    firstGoal: "Keep the first year modest — one Welsh folk tune using only the outer rows, plus successfully reaching into the middle row for a single accidental. Finish tuning and you've done half of that day's practice (not a joke, just arithmetic).",
  },

  wire_harp: {
    how: "A harp you play with your nails, where you learn to stop notes (damping) before you learn to make them. Start by (1) growing your right-hand nails to a consistent length — this is a playing requirement, (2) plucking the wire with a nail and, as you sound the next note, killing the previous one with the pad of a finger, (3) once that pluck-and-stop is in your body, moving into Gaelic melody. Even with nylon-harp experience there's a stretch where you relearn technique, so brace for it.",
    lesson: "Lessons recommended, though there are effectively no teachers in Korea — damping improves far faster when you can watch someone do it. Online lessons with Scottish and Irish players plus English-language method books (the Ann Heymann lineage) are the standard path.",
    buy: "Not sold in Korea. You commission or import from a Scottish or Irish workshop, roughly ₩3M–10M depending on string count and decoration. Vet makers through international harp forums and Clarsach Society reviews. The landmine is thinking you can just hang wire strings on a nylon harp — the tension design is different and you'll wreck the instrument.",
    firstGoal: "Within three months, play a Gaelic melody all the way through without the notes muddying, no longer thinking about pluck-and-stop. The moment those bell-like decays start layering cleanly, you'll understand why harpers were treated so well in medieval Gaelic society.",
  },

  // ==================== Plucked folk (6) ====================

  autoharp: {
    how: "Press a chord button, sweep across the strings — that's the whole thing. Day one: (1) tune 36 strings (15 minutes with a tuner; the hardest labour this instrument asks of you), (2) hold the G button and strum, (3) add C and D7 and you've got three-chord song accompaniment the same day. With no chord fingering to learn, it's one of the very few string instruments where succeeding on day one is real. After that you expand into rhythm patterns and fingerpicked melody.",
    lesson: "Self-teaching is fine — there are essentially no lessons in Korea, and you don't need any. YouTube tutorials (plentiful in English) and chord charts will carry you. If advanced techniques like melody picking start calling, that's when you look up an overseas online workshop.",
    buy: "Korean stock is rare, so importing is the standard route. Oscar Schmidt is the default — the 21-chord OS21C is the signature model at $400–600 plus shipping and customs, and used listings (Reverb and similar) can land around ₩200,000. The landmine is a vintage instrument with rotted chord-bar felt — replaceable, but fiddly work, so always ask a used seller for photos of the felt.",
    firstGoal: "In your first week, sing while accompanying yourself on a three-chord song ('You Are My Sunshine' or any nursery tune). A month in, mix two rhythm patterns and crown yourself official campfire accompanist.",
  },

  mountain_dulcimer: {
    how: "Lay it across your lap, press any fret and pluck — the frets are diatonic, so wrong notes are hard to find. Start by (1) tuning to DAD, (2) playing a traditional tune like 'Boil Them Cabbage Down' on the melody string alone, (3) strumming with the drone strings ringing along. The tab is intuitive, so not reading music is no obstacle. Its nickname — the instrument that's hard to play wrong on — isn't an exaggeration.",
    lesson: "Self-teaching is fine — with essentially no community in Korea, it's the assumption anyway. English-language material more than makes up for it (free tab, YouTube courses, online workshops). If English doesn't scare you, this is an instrument you can absolutely see through without a teacher.",
    buy: "Barely sold in Korea. The standard is importing from a US workshop or Amazon at $150–450 plus shipping. A traditional builder like McSpadden is the safe pick; laminate beginner models cost less. Biggest landmine: the hammered dulcimer shares the name and nothing else — before you check out, confirm the listing says mountain or Appalachian dulcimer. If a pair of hammers arrives with it, you bought the wrong thing.",
    firstGoal: "One traditional tune on the melody string in week one; within a month, the same tune strummed with the drones ringing. When it starts sounding like a plain little fireside bagpipe, you've done it.",
  },

  balalaika: {
    how: "A triangular body with three strings, two of them tuned to the same note (E-E-A) — a generous design where one finger gives you melody and drone at once. Start by (1) getting a prima, the standard size, (2) learning the balalaika strum, sweeping down across the strings with the back of your index finger, (3) taking on a Russian folk melody like 'Kalinka'. Don't rush tremolo; leave it as homework for two or three months out.",
    lesson: "Self-teaching is fine, mostly because there's no alternative — Korea has virtually no lessons or community. Russian and English YouTube is your textbook, and happily the beginner slope is gentle enough that going it alone works.",
    buy: "Barely sold in Korea. Importing from a Russian or Eastern European workshop, or an overseas marketplace, runs ₩200,000–800,000 with wide quality variation. Biggest landmine: souvenir-shop decorative balalaikas flood the market — wall hangers with inaccurate frets that won't hold tune. Look for concert or prima labelling and reviews with actual playing footage before you buy.",
    firstGoal: "Within a month, play one Russian folk melody through with strumming mixed in. The dream target is Lara's Theme from 'Doctor Zhivago' aching away in tremolo — give that about three months.",
  },

  charango: {
    how: "Ten strings in five courses on a ukulele-sized body — that jangling Andean sound arrives with your very first strum. If you play ukulele the tuning frame is close enough that your first chord takes ten minutes. Start by (1) getting the feel of pressing each doubled course with one finger, (2) strumming three or four basic chords, (3) tackling the huayno rhythm. The octave gap in the middle course (re-entrant tuning) is just how it is — don't panic.",
    lesson: "Self-teaching is fine — there are essentially no lessons in Korea. Spanish-language YouTube is the motherlode and English material is plentiful too. Prior ukulele or guitar drops the difficulty another notch.",
    buy: "Rarely sold in Korea. The standard routes are importing from a Bolivian or Peruvian workshop or buying one while travelling in South America, at ₩200,000–900,000 with wide quality variation. If picking a maker is hard, look for reviews of workshops with export track records on Latin American music communities and international forums. Two landmines: tourist-shop charangos with wildly out-of-tune frets, and vintage armadillo-shell bodies, which customs can seize under CITES rules. Buy wood.",
    firstGoal: "Within a month, accompany 'El Condor Pasa' all the way through on four chords. The three-month goal adds a jangling rasgueado strum and a passable tremolo — when that bright Andean sadness fills your room, you've passed.",
  },

  cavaquinho: {
    how: "The Brazilian cousin of the ukulele, except steel strings and a pick give it a completely different personality. Start with (1) standard DGBD tuning, (2) three or four basic chords (the fingerings are easy), (3) and then the real instrument, your right hand — samba 16th-note strumming, metronome slow, repeated forever. Chords take a week; the groove is a months-long project. The whole feel lives in the snap of your wrist.",
    lesson: "Self-teaching is fine, since lessons don't exist — but Seoul has a small samba and choro scene, and turning up to a jam is the best lesson available. Portuguese-language YouTube is the motherlode, though rhythm-pattern videos are followable without the language.",
    buy: "Rarely sold in Korea (ukulele shops occasionally parallel-import one). Importing a Brazilian brand at $100–350 plus shipping is the standard route. The landmine is buying it thinking it's a ukulele — steel-string tension will shock fingertips trained on nylon, and swapping in nylon strings means it's no longer a cavaquinho. Blisters are part of the official curriculum.",
    firstGoal: "Within a month, hold down an accompaniment with four chords and one basic samba pattern. The three-month goal: keep a 16th-note groove from collapsing for two full minutes. Manage that and any samba roda will wave you in.",
  },

  cittern_modern: {
    how: "A mandolin scaled up to sit lower and wider — the Celtic all-rounder. Your first hurdle isn't playing, it's picking a tuning: GDAEA, DGDAD and others all count as standard, so commit to one early (for mostly Celtic backing, the GDAD family is a good bet). Then (1) get your left hand used to doubled courses, (2) strum with a pick, mixing in drones, (3) move into jig and reel melodies. Mandolin or guitar players are halfway there already.",
    lesson: "Self-teaching is fine — almost nobody in Korea knows the instrument, so there are no lessons. English-language Celtic forums and YouTube are your textbook, and bringing it to an Irish session (a few exist in Seoul) makes the playing itself the lesson. Have your answer to 'what is that?' ready in advance.",
    buy: "Not sold in Korea. Importing from an Irish or British workshop, or an Eastern European production brand, runs ₩800,000–3,000,000, and buying used abroad is the value route. The landmine is how blurry the border is with the bouzouki and octave mandolin — check a listing's scale length and tuning yourself, and pick a shorter scale if your hands are small. When in doubt, take the listing link to a Celtic instrument forum and ask.",
    firstGoal: "Within a month, a Celtic backing pattern with drones underneath; within three, one jig melody played through at 70% of session tempo. Once that misty Celtic sound starts appearing, you're ready for your session debut.",
  },

  // ==================== Lute family & early plucked (13) ====================

  renaissance_lute: {
    how: "This is the standard door into the lute family. Even guitarists begin by (1) relearning the right hand — flesh, no nails, alternating thumb and index in the lute way rather than guitar style, and (2) learning to read tablature. Happily, lute tab is more logical than guitar tab. Spend your first two months on easy Renaissance dances, not Dowland — and make friends with tuning. The joke that lutenists spend half their lives tuning becomes tangible in week one.",
    lesson: "Lessons recommended — right-hand touch is the entire sound of a lute, so early correction matters. With only a handful of players in Korea, in-person teaching is hard to find, and video lessons with overseas players are effectively the standard route. Look up reviews of online teachers in early-music communities.",
    buy: "Not sold in Korea. The most proven entry is a student lute from The Early Music Shop (EMS) in the UK at £1,050–1,100, landing at ₩2,000,000–2,500,000 after shipping and customs. Commissions from European or Chinese workshops run ₩3M–6M (Chinese makers vary in quality, so early-music forum reviews are mandatory reading). For used, the Lute Society marketplace is the value route. The landmines are lute-shaped ornaments, and used instruments kept at bad humidity — the body is thin, so always ask about crack history.",
    firstGoal: "Within three months, read tab and play one Renaissance dance through — a pavan, or a simple almain. The six-month dream is starting on an easy Dowland piece. The moment that candlelit sound fills the room, you forgive the tuning hell.",
  },

  baroque_lute: {
    how: "The summit of lute-family solo playing, and of difficulty — as a first instrument we'd politely talk you out of it. The standard route is building your foundation on a Renaissance lute (or guitar) first. D-minor tuning doesn't match guitar or Renaissance lute instincts, so even veterans redraw the map. Once you're in: (1) get your hands into the D-minor system, (2) drill right-hand thumb independence on the basses, (3) start with easy Weiss. Bach is hard even here — aim high, but start low.",
    lesson: "Lessons essential, and in practice that means studying online with someone abroad — barely anyone in Korea specializes in it, so video lessons with overseas players are the norm. Build the fingering logic of D-minor tuning and your bass-muting habits alone, and you'll be tearing them all out later.",
    buy: "There's almost no student-grade production, so it's commissions or importing used, roughly ₩4M–12M. The Lute Society marketplace and early-music forums are where a realistic first instrument comes from. An 11-course is friendlier than a 13-course and better for small hands. The landmine is going straight for the 13-course of your dreams — 24 strings' worth of tuning labour and a wide neck will grind a beginner down.",
    firstGoal: "Within six months, play one easy Weiss piece through from tab (save Bach as the carrot for a year out). Once that shaded ring of resonating open basses arrives, night practice becomes the best part of your day.",
  },

  archlute: {
    how: "A Renaissance lute with an extension built on for bass strings — the fingered courses are tuned identically, so the textbook route is Renaissance lute first, archlute second. Once you're in: (1) balance the weight of that long neck, (2) get the feel of walking your right thumb down the extended basses, (3) study this instrument's actual day job, basso continuo, where you improvise accompaniment from figures. It plays solo and it accompanies, so deciding which you're here for makes the road much shorter.",
    lesson: "Lessons essential, and assume they'll be online from abroad — it's not the instrument so much as basso continuo, a discipline of its own that needs guidance. In Korea, laying eyes on a real one is already an event, so ask early-music communities about routes to an online teacher.",
    buy: "No mass production. Assume a commission or an imported used instrument at roughly ₩5M–15M, with a wait of several months to a year. Vet makers through recent reviews on international lute forums and early-music communities. The big pre-purchase question is always archlute or theorbo — the standard answer: archlute if you'll mostly play solo, theorbo if you'll mostly accompany ensembles.",
    firstGoal: "With Renaissance lute fundamentals in hand, aim within three months for one easy Piccinini solo plus a simple continuo cadence accompaniment. Become the source of that sound everyone mistakes for an acoustic guitar but isn't.",
  },

  theorbo: {
    how: "Two metres of continuo royalty — before you start, go measure your car boot and your front door. The technique is surprisingly gentle (mostly open basses, low tension); the real study is (1) rewiring your melodic instincts for re-entrant tuning, where the top two courses drop an octave, (2) basso continuo, harmony theory included, (3) ensemble sense. This isn't an instrument for playing alone; it's the path to being the bassist of the Baroque world. Continuo players are scarce everywhere, so once it's under your fingers, stage opportunities actually come to you.",
    lesson: "Lessons essential, assume online from abroad — basso continuo is too large a system to crack alone. Guitar or lute experience with video lessons layered on top is the standard route.",
    buy: "Student instruments imported from the likes of EMS in the UK start around ₩4,000,000, though there are frequent warnings that cheap student models bought without an expert inspection carry major-repair risk — get a listing vetted by an early-music community first if you can. Commissioned concert-grade instruments run ₩7M–15M with a long wait. Used ones surface now and then on the international Lute Society marketplace, so set an alert. The biggest landmine isn't the instrument, it's buying without a transport plan — no car, serious rethink.",
    firstGoal: "Within six months, sight-read a figured bass and improvise an easy Baroque continuo part — accompanying a sarabande, for instance. The first time one open bass note sweeps across your floor, the length of the case becomes a trivial problem. The front door remains a problem.",
  },

  baroque_guitar: {
    how: "There's no better on-ramp from guitar into early music — the tuning frame matches strings 1 to 5 of a modern guitar, so your hands move on their own from day one. Start with (1) adapting your touch to doubled courses, (2) working rasgueado (the showy strum) and punteado (plucking) side by side, (3) heading for famous repertoire like Sanz's 'Canarios'. Early on you'll have to choose the octave layout for courses 4 and 5, Bolognese or French — just follow the school your favourite repertoire belongs to.",
    lesson: "Lessons recommended — the self-taught entry is gentle for guitarists, but a teacher saves months on rasgueado wrist mechanics and on reading tablature plus alfabeto. Korean lessons are very scarce, so the realistic options are a classical guitar teacher who also works in early music, or going online with someone overseas.",
    buy: "Not sold in Korea. A commission from a European or Chinese workshop, or importing through EMS and similar, runs ₩2M–6M — simpler in construction than a lute, so slightly cheaper at the same grade. Chinese workshops are attractively priced but vary in quality, so verify with real purchase reports on early-music forums. The landmine is a half-measure like a modern classical guitar converted to five nylon courses — a Baroque guitar's body is built to a different design entirely.",
    firstGoal: "For a guitarist: the opening of Sanz's 'Canarios' within a month, and one dance with rasgueado worked in within three. Recreate the sound Louis XIV loved, right there in your room.",
  },

  renaissance_guitar: {
    how: "Call it the 16th-century ukulele and you're roughly right — the tuning frame is the same, so ukulele players are fingering chords on day one. Start with (1) adapting to the mild touch of gut-type strings, (2) reading tab for easy Renaissance dances and pieces from the Morlaye books, (3) alternating strumming and plucking. True to its old status as the common person's instrument that even barbers played, it's the friendliest entry in the lute family.",
    lesson: "Self-teaching is fine — with ukulele or guitar behind you, learning to read tab is all it takes. Assume there is no dedicated teacher in Korea; when questions come up, asking on early-music communities and international lute forums is faster.",
    buy: "Not sold in Korea. Assume a commission or import at ₩1M–3M — the cheapest way into the lute family. Check first whether early-music specialists like EMS carry one, and vet any workshop through forum reviews. Less a landmine than a forecast: the repertoire is limited, so before long you'll be curious about the Baroque guitar or the lute. That's normal growing pains.",
    firstGoal: "One Renaissance dance played through from tab in your first month. Carrying it around while everyone assumes it's a ukulele, then revealing it's actually a 16th-century instrument, is a free bonus.",
  },

  vihuela: {
    how: "Guitar body, lute soul — the door through which guitarists enter Renaissance music without wrestling a lute's round back. Start by (1) adapting to lute tuning (drop just the 3rd string a semitone on a guitar and the frame matches), (2) reading Italian tablature, where the number lines are flipped compared to lute tab, (3) beginning with a Milan pavan. The repertoire lives in seven 16th-century Spanish printed books — deep and narrow, so if that well is your taste, it's heaven.",
    lesson: "Lessons recommended, assume online from abroad — guitarists can teach themselves the entry, but a sense of style in Spanish Golden Age repertoire comes far faster with guidance. There are effectively no teachers in Korea, so look into video lessons.",
    buy: "Not sold in Korea. Assume a commission or import at ₩2M–6M; Spanish and Latin American workshops have the traditional edge. Vet makers through international lute forums and vihuela community reviews. The landmine is confused listings selling a flamenco guitar as a vihuela — a vihuela has six doubled courses.",
    firstGoal: "For a guitarist: one Milan pavan played through within three months, then take on Narvaez's variations on 'Guardame las vacas'. When that shaded Spanish lyricism with its scent of dry wood comes off your fingertips, you've made it.",
  },

  mandolino: {
    how: "It looks like a mandolin but you pluck it with your fingers — really it's a miniature lute. The more modern mandolin you've played, the sooner you need to drop the assumption that it's the same instrument (tuning runs mostly in fourths, and no picks). Start with (1) a lute-style right hand plucking gut-type strings, (2) learning the fingerings of fourths tuning, (3) Renaissance and Baroque miniatures, working toward an easy movement of a Vivaldi concerto. Even within the lute family this is the enthusiast track, so falling properly in love with the sound on YouTube first is what fuels you.",
    lesson: "Lessons recommended, assume online from abroad — resources are so scarce that a self-study map is hard to draw. Video lessons with an overseas player who handles Baroque mandolin, or tacking it onto lessons with a lute teacher, are the realistic routes.",
    buy: "Not sold in Korea. Assume a commission or import at ₩2M–6M — small doesn't mean cheap, since the build work is lute-grade. Research makers on international lute forums. The landmine is faking it by putting nylon strings on a modern mandolin — you end up with something wrong in both tone and tension design.",
    firstGoal: "Within three months, play one Baroque miniature through with finger technique; the ultimate dream is the slow movement of Vivaldi's Mandolin Concerto in C. When a music box under candlelight fills your room, the enthusiast's path is complete.",
  },

  renaissance_cittern: {
    how: "If the lute is an aristocratic salon, the cittern is the barbershop waiting bench — a cheerful thing you jangle with a pick on wire strings. Start with (1) getting through the wire-string blisters (mandolin-grade; part of the official curriculum), (2) chord progressions with pick strums, (3) Renaissance miniatures by Holborne and company. It isn't the delicate sound you might expect from the gut-strung lutes but a midday market square, so it actually suits folk and Celtic tastes. It holds its tuning well too, which makes all the lute tuning jokes miss — a virtue in itself.",
    lesson: "Self-teaching is fine — dedicated teachers are rare everywhere, in Korea and abroad, and with mandolin or guitar behind you the technique comes easily. Sourcing repertoire and resources from international lute forums and early-music communities is the standard approach.",
    buy: "Not sold in Korea. Assume a commission or import at ₩1.5M–5M — simple construction makes it cheaper than a lute. Check whether EMS and similar shops carry one, and vet commissions through forum reviews. The landmine is confusing it with the modern cittern, a 1970s Irish instrument — same name, different tuning and different culture, so confirm the listing says renaissance cittern.",
    firstGoal: "Within a month, accompany a Renaissance dance with pick strums; within three, play one Holborne miniature through. Recreate the soundtrack of an Elizabethan barbershop — the blisters are a badge of honour.",
  },

  orpharion: {
    how: "An Elizabethan oddity that plays lute music with the metallic sheen of wire strings — in practice, a second instrument layered on top of lute knowledge. The route: (1) have a Renaissance lute first, or at minimum the ability to read tab, (2) adapt your hand angle to the slanted frets, (3) take Dowland's scores straight over to wire. Gather every player on earth and you still wouldn't fill a lecture hall, so this genuine wildcard suits people fuelled by being a pioneer.",
    lesson: "Assume self-teaching, because there are no teachers — no dedicated instructors or method books exist, so you build on lute knowledge and pioneer it yourself. Taking lute lessons online from abroad and running this alongside is the practical form of guidance.",
    buy: "Zero mass production — a handful of workshops build to order, roughly ₩4M–12M, with a long wait. Used ones appear maybe once every few years, so set an alert on the international Lute Society marketplace. Even working out which makers have ever built an orpharion is research in itself, so this is only for people who can enjoy the buying journey as a project of its own.",
    firstGoal: "With lute fundamentals in hand, play one easy Dowland piece through in wire-string tone within three months — straight from an original print whose title page reads 'for the Lute or Orpharion'. The reward is the strange pleasure of a familiar piece ringing with harpsichord-like sheen.",
  },

  bandora: {
    how: "The bass voice of the broken consort, the Renaissance mixed ensemble — and let's be honest from the outset: this is close to an ensemble-only instrument, complete only when you have people to play with. The route: (1) build tab reading and Renaissance style on a lute or orpharion, (2) build grip strength for thick wire strings and a long scale, (3) practise the bass parts of consort scores. Players and instruments in Korea both start from zero, so early-music ensemble activity comes first and the bandora comes second.",
    lesson: "Assume self-teaching, since there are no teachers — take it as read that no dedicated instructor exists. You learn it on top of online study in the lute family, and finish the job through consort playing.",
    buy: "Zero mass production — a handful of workshops build to order, roughly ₩5M–15M, and listings are even rarer than for the orpharion. Finding makers with any experience of it is itself the research, so check the international Lute Society and early-music forums. Less a landmine than a warning: solo music is extremely scarce, so buying one without an ensemble plan very likely gets you a magnificent wall decoration.",
    firstGoal: "Play one consort bass part through at tempo, and someday put a broken consort piece together with flute, viol, lute and cittern. Becoming the low end of Shakespearean theatre sound is the entire reason this instrument exists.",
  },

  gallichon: {
    how: "The back door through which guitarists enter the Baroque — the tuning is nearly identical to a guitar, so you can start accompanying early music without the D-minor labyrinth of the Baroque lute. Entry goes: (1) get used to holding a big lute body, (2) build a lute-style right hand with flesh touch, (3) add the basics of basso continuo and move into vocal accompaniment and ensembles. Scores and scholarship are only now being unearthed, so the repertoire map is still being drawn — perfect if the road nobody has taken is your taste.",
    lesson: "Lessons recommended, assume online from abroad — guitar instincts get your fingers in, but basso continuo and a feel for Baroque style need guidance. Step one is finding an overseas lute-family player who actually handles the mandora or gallichon; ask around early-music communities.",
    buy: "No mass production. Assume a commission or an imported used instrument at roughly ₩3M–10M — a tier below a Baroque lute in budget. Research makers on international lute forums. The landmine is the name: the mandora (gallichon) and the modern mandola are completely different instruments, so check spelling and period when searching or ordering.",
    firstGoal: "For a guitarist: within three months, play one easy accompaniment part from Telemann's era as basso continuo. Once you've tasted the cheat-code thrill of a lute played on guitar instincts, you'll find yourself curious about the Baroque lute. Consider that forecast.",
  },

  psaltery: {
    how: "One string, one note, no frets and no buttons — a primitive medieval design, which is exactly why it's the easiest thing to start. Begin by (1) tuning every string (you'll be doing this often), (2) plucking melodies with your fingers or a quill plectrum, (3) laying medieval chant and carols on top. No psaltery method book exists anywhere, so putting tunes you already know onto it is the curriculum. On days when you need monastery-chapel air, it's out of the case and ringing in five minutes.",
    lesson: "Self-teaching is fine — the concept of a lesson doesn't really exist for this instrument. Medieval music channels on YouTube and early-music communities are the only school there is, and they're enough.",
    buy: "Not sold in Korea. Importing from The Early Music Shop (EMS) or a European workshop runs ₩500,000–2,000,000 — far more approachable than the rare lute-family instruments. Biggest landmine: the bowed psaltery is a 20th-century invention and effectively a different instrument. If a triangle turns up with a bow attached, you bought something else — confirm the listing says plucked psaltery.",
    firstGoal: "In your first week, one Gregorian-style melody or carol played through; within a month, two-string harmony alongside it. Recreating the angel's pose from a medieval painting in your own living room is what completes this instrument.",
  },

};

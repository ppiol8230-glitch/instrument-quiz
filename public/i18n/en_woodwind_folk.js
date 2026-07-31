// English overlay — folk & world woodwinds batch. Keys match data/inst_woodwind_folk.js ids 1:1.

const EN_INST_WOODWIND_FOLK = {

  tin_whistle: {
    name: "Tin whistle",
    family: "Folk woodwind · fipple whistle (recorder-style)",
    toneDesc: "Bright, ringing high notes. Cheaper ones have a breathy, homespun tone; nicer ones come out clear as glass. That Irish jig-and-reel sound.",
    caveats: [
      "At around ₩10,000 the risk isn't that it's cheap - it's that it looks so easy you quietly stop picking it up",
      "Getting a sound and playing well are far apart - Irish ornaments like cuts and rolls are the real subject",
      "The top octave is sharper than you expect, so household reactions vary",
    ],
  },

  low_whistle: {
    name: "Low whistle",
    family: "Folk woodwind · fipple whistle (recorder-style)",
    toneDesc: "A husky low register laced with breath. If the tin whistle is birdsong, this is wind. The source of that Titanic and Braveheart film-score feeling.",
    caveats: [
      "Finger stretch is 80% of the barrier - if your hands are small, check the hole spacing before you buy",
      "Starting on tin whistle is the classic route (identical fingering, the feel transfers straight over)",
      "Almost no Korean shop stocks one to try, so you'll be ordering from overseas",
    ],
  },

  ocarina: {
    name: "Ocarina",
    family: "Folk woodwind · vessel flute",
    toneDesc: "A round, gentle sound with few overtones - somewhere between birdsong and running water. That dreamy tone The Legend of Zelda burned into everyone.",
    caveats: [
      "The range is narrow (about 1.5 octaves on a single), so there's a ceiling on what you can play",
      "Breath pressure bends the pitch, so easy to sound is one thing and in tune is another",
      "It's ceramic - one drop and it's over",
    ],
    tracks: {
      single: { label: "Single (12-hole)", note: "The standard. A range of a little over an octave and a half." },
      multi: { label: "Double / triple", note: "Two or three chambers for extra range. Aimed at stage players and specialists." },
    },
  },

  pan_flute: {
    name: "Pan flute",
    family: "Folk woodwind · multi-tube flute",
    toneDesc: "A wistful sound that's half breath. The ache of 'The Lonely Shepherd.' Add vibrato and it cries like a voice.",
    caveats: [
      "Single notes come easily, but tunes full of leaps turn head movement into acrobatics",
      "Semitones are made by tilting the pipes, so anything with accidentals gets hard fast",
      "Cheap instruments in this family are a real tuning lottery",
    ],
    tracks: {
      romanian: { label: "Romanian (nai)", note: "Curved rank of pipes, Zamfir style. Semitones come from tilting the instrument." },
      andean: { label: "Andean (zampona)", note: "Two separate rows of pipes. The sound of 'El Condor Pasa.'" },
    },
  },

  quena: {
    name: "Quena",
    family: "Folk woodwind · notch flute (Andes)",
    toneDesc: "A rough, wind-over-a-cliff breathiness wrapped around a clear core. Its expression changes dramatically with how hard you play.",
    caveats: [
      "Finding the breath angle across the notch means a week or two of pure wind noise first",
      "Not as brutal as shakuhachi or ney, but definitely not a blow-and-it-sounds instrument",
      "Supply and teaching in Korea are thin, so self-reliance is part of the deal",
    ],
  },

  shakuhachi: {
    name: "Shakuhachi",
    family: "Folk woodwind · notch flute (Japan)",
    toneDesc: "A tone with no border between breath and note. Even the air and the torn, cracking sounds (muraiki) count as music. The sound of Zen practice.",
    caveats: [
      "The first-sound nightmare of this batch - expect weeks to get any note, months to get a steady one",
      "Semitones come from five holes plus head angle, so intonation is entirely your responsibility",
      "Both instruments and teachers are a narrow door in Korea",
    ],
  },

  danso: {
    name: "Danso",
    family: "Gugak wind · end-blown",
    toneDesc: "A slender, tidy sound from this small Korean end-blown flute. Add yoseong (the traditional pitch shake) and it instantly breathes like gugak (Korean traditional music).",
    caveats: [
      "It's the one that refused to sound in school - angling breath across the U-shaped notch is the first gate (harder than recorder, easier than daegeum)",
      "Its easy-instrument image means you have to hunt for somewhere that teaches it seriously",
      "Range and repertoire lean narrow, centered on jeongak (court music)",
    ],
  },

  sogeum: {
    name: "Sogeum",
    family: "Gugak wind · transverse",
    toneDesc: "The small Korean transverse bamboo flute: high, clear and piercing. It's the sparkle at the very top of a gugak orchestra.",
    caveats: [
      "The usual transverse-flute gate - angling breath at the blow hole (half a day if you've played flute, one to two weeks if not)",
      "It's a high instrument, so noise complaints are a clearly bigger risk than with danso",
      "Solo repertoire is thinner than daegeum's, so many players end up moving over to daegeum",
    ],
  },

  daegeum: {
    name: "Daegeum",
    family: "Gugak wind · transverse",
    toneDesc: "The large Korean transverse bamboo flute, defined by the buzzing rasp of its cheong (reed membrane). Soft it sighs, loud it tears - one of the widest dynamic ranges in gugak.",
    caveats: [
      "Weeks to a first note - the big blow hole and long tube make it hard even among transverse flutes",
      "Lung demand is top-tier here, alongside the bagpipes. Moving from low notes to overblown highs needs real breath training",
      "Caring for the cheong membrane (humidity, tears) is a quiet daily chore",
    ],
    tracks: {
      jeongak: { label: "Jeongak daegeum", note: "For jeongak (court music) and refined chamber music. Longer tube, deeper breath." },
      sanjo: { label: "Sanjo daegeum", note: "For folk music and sanjo (the solo folk-classical form). Shorter, more virtuosic, the standard starter." },
    },
  },

  piri: {
    name: "Piri",
    family: "Gugak wind · double reed",
    toneDesc: "A thick, nasal, powerful sound from this small Korean double-reed pipe. Soft it mourns; loud it cuts through a whole orchestra. Far closer to a human voice than an oboe.",
    caveats: [
      "Until you find how deep to take the reed and how hard to push, it squeaks - the first month is patience",
      "The reed is the sound, so if soaking and scraping reeds isn't your idea of fun, it becomes stress",
      "You bend pitch a long way with your mouth, so ear training has to come along with it",
    ],
    tracks: {
      hyang: { label: "Hyangpiri", note: "The standard, and the workhorse of orchestral and folk music." },
      se: { label: "Sepiri", note: "Thinner and quieter, for accompanying art songs and string chamber music." },
    },
  },

  taepyeongso: {
    name: "Taepyeongso",
    family: "Gugak wind · double reed (shawm family)",
    toneDesc: "The only melody that can cut through the metal percussion of a samulnori band. Blazing, almost shredding, pure festival energy.",
    caveats: [
      "The runaway loudest thing in this batch - securing a practice space matters more than your playing does",
      "Double-reed pressure plus big breath means months before your lip and cheek muscles catch up",
      "It grows inside a pungmul troupe rather than alone - joining a group is effectively required",
    ],
  },

  duduk: {
    name: "Duduk",
    family: "Folk woodwind · double reed (cylindrical bore)",
    toneDesc: "Like a human voice swallowing a sob. The phrase 'saddest instrument in the world' follows it everywhere it goes.",
    caveats: [
      "Lip pressure on that broad reed and heavy back-pressure - a first note comes quickly, but 'that mournful sound' takes ages",
      "Every reed comes from overseas, so if supply stops, practice stops (keep spares on hand)",
      "Barely more than an octave of range - an instrument for singing tunes, not flashy ones",
    ],
  },

  ney: {
    name: "Ney",
    family: "Folk woodwind · oblique rim-blown flute (Middle East)",
    toneDesc: "Half breath, half tone. A desert-wind sound at the heart of Sufi meditation music. Rumi's 'Song of the Reed' is about this very instrument.",
    caveats: [
      "Shakuhachi-level first-sound purgatory - you have to endure weeks of nothing but air",
      "Maqam scales live in microtones narrower than a semitone, so a Western ear can actually get in the way",
      "Instruments, reeds, books, teachers - Korean infrastructure is close to zero on all four",
    ],
  },

  bansuri: {
    name: "Bansuri",
    family: "Folk woodwind · transverse flute (India)",
    toneDesc: "A weightless, soft sound that slides rather than steps. Sensual and meditative, exactly as the Krishna legend suggests.",
    caveats: [
      "Transverse first-sound gate plus half-holing and microtones - building pitch by ear is the real work",
      "Without the raga system you only get half of it - come expecting sheet music and you'll be lost",
      "The long low flutes stretch your fingers as much as a low whistle, or more",
    ],
  },

  dizi: {
    name: "Dizi",
    family: "Folk woodwind · transverse flute (China)",
    toneDesc: "A bright, zingy nasal buzz from the vibrating dimo membrane. Birdlike tongue and finger ornaments are the trademark.",
    caveats: [
      "Gluing on the dimo is lesson one - get the wrinkles wrong and the sound stays dead",
      "The transverse first-sound gate is the same as everywhere else (one to two weeks)",
      "A damp or torn membrane changes your tone on the spot - a real risk right before a gig",
    ],
    tracks: {
      bangdi: { label: "Bangdi (northern style)", note: "Short, high tube. Flashy northern playing built on tonguing tricks." },
      qudi: { label: "Qudi (southern style)", note: "Long, low tube. The flowing southern style that accompanies Kunqu opera." },
    },
  },

  xiao: {
    name: "Xiao",
    family: "Folk woodwind · end-blown flute (China)",
    toneDesc: "A dim, moonlit sound. If the dizi is broad daylight, the xiao is night. It suits music with lots of empty space in it.",
    caveats: [
      "Angling breath into the U/V notch is harder than danso and easier than shakuhachi - one to three weeks to a first note",
      "Long tube and narrow notch, so inefficient breathing makes you dizzy fast",
      "Too quiet to show off with - this one is for playing alone, for yourself",
    ],
  },

  hulusi: {
    name: "Hulusi",
    family: "Folk woodwind · free reed (Yunnan, China)",
    toneDesc: "Silky and smooth, as if it had been oiled. That tone from every travel film about China. Opinions split, but it hooks your ear instantly.",
    caveats: [
      "About an octave plus two notes, the narrowest range in this batch - a firm ceiling on repertoire",
      "Some people hear that glossy tone as tourist-spot background music",
      "Blow a free reed hard and the pitch sags - keeping your breath gentle is the whole trick",
    ],
  },

  highland_bagpipe: {
    name: "Great Highland bagpipe",
    family: "Folk woodwind · bagpipe (mouth-blown)",
    toneDesc: "A wall of sound: the chanter crying over three sustained drones. Once it starts up, it owns the entire space.",
    caveats: [
      "A year on the practice chanter with no bag - you have to survive owning bagpipes you can't yet play",
      "The full set means juggling fingering, bag pressure and breath all at once, plus tending four reeds",
      "Practice-space trouble ties with taepyeongso for worst in the whole database - outdoors or soundproofing required",
    ],
    variants: {
      electronic_chanter: { label: "Electronic chanter", note: "Practice with headphones. Increasingly standard kit for band rehearsals." },
      smallpipes: { label: "Scottish smallpipes", note: "Bellows-blown indoor bagpipe. Aimed at sessions." },
    },
  },

  uilleann_pipes: {
    name: "Uilleann pipes",
    family: "Folk woodwind · bagpipe (elbow bellows)",
    toneDesc: "Nothing like the Highland roar - this one weeps and sings. Lifting the chanter off your knee for staccato and legato, plus a full two octaves, gives it expressive range no other bagpipe has.",
    caveats: [
      "A perennial candidate for hardest instrument in the world - all four limbs doing different jobs makes it the most complex thing here",
      "There's even an old saying about mastery: seven years learning, seven years practising, seven years playing",
      "Price, waiting lists, reed upkeep - nothing else in this batch asks for as much money and devotion",
      "In exchange it needs no breath at all, so it's an open door for anyone who gave up on winds for respiratory reasons",
    ],
  },

  galician_gaita: {
    name: "Galician gaita",
    family: "Folk woodwind · bagpipe (mouth-blown)",
    toneDesc: "Brighter and more supple than the Highland pipes. Over the drones, the chanter bounces its way through muineira dance tunes.",
    caveats: [
      "Recognition and support in Korea are rock bottom even for this batch - just getting one is a Spanish import adventure",
      "The usual bagpipe triple task (fingering, pressure, breath) is unchanged, only a shade gentler than Highland",
      "A Spanish instrument, yes, but Celtic and nothing to do with flamenco - set your genre expectations accordingly",
    ],
  },

  suona: {
    name: "Suona",
    family: "Folk woodwind · double reed (shawm family, China)",
    toneDesc: "A searing, metal-edged blaze of sound. The proverbial voice that buries every other instrument the moment it speaks - swinging between festival ecstasy and funeral wailing within a single tune.",
    caveats: [
      "Noise trouble sits at the very top of the whole database alongside taepyeongso and Highland pipes - securing a practice space comes before skill",
      "Double-reed pressure plus big breath means months while your lip and cheek muscles get built",
      "Lesson and retail infrastructure in Korea is effectively zero - a self-study adventure running on direct imports and Chinese-language online courses",
    ],
    tracks: {
      folk: { label: "Folk & traditional", note: "Wedding and festival music, plus the flashy traditional showpiece of birdsong mimicry (Hundred Birds Saluting the Phoenix)." },
      keyed: { label: "Keyed modern", note: "The keyed, upgraded suona. The chromatic, concerto-ready track of the Chinese folk orchestra." },
    },
  },

  bawu: {
    name: "Bawu",
    family: "Folk woodwind · free reed (Yunnan, China)",
    toneDesc: "A sleek low register that glides the moment you lay breath on it. A shade darker than the hulusi and closer to a human voice - hence the nickname 'the talking instrument.'",
    caveats: [
      "The range is barely over an octave - tied with the hulusi for narrowest here, so the ceiling on repertoire is real",
      "The free-reed rule applies: blow hard and the pitch collapses, so keeping a gentle breath is the whole knack",
      "The reed is fixed inside the tube, so if you buy a mistuned one there's nothing you can do (check reviews first)",
    ],
  },

  xun: {
    name: "Xun",
    family: "Folk woodwind · vessel flute (China)",
    toneDesc: "A dark, ancient sound that seems to rise out of the earth. The tone the old poets likened to the autumn wind - it wins on afterglow, not brilliance.",
    caveats: [
      "It looks like an ocarina but has no recorder-style mouthpiece - there's a first-sound gate (days to two weeks) of angling your breath as if blowing across a bottle",
      "The range is narrow and the repertoire leans slow and dark - if you want upbeat tunes, this points the other way",
      "It's ceramic, so one drop and it goes straight back to being an artifact (in pieces)",
    ],
  },

};

const EN_GUIDE_WOODWIND_FOLK = {

  tin_whistle: {
    how: "Start with one whistle in D, no exceptions. D is the standard key of Irish music, so buy a C and you'll be the one person from another world at every session. Like a recorder, you put it to your lips and it sounds on day one, so grab a fingering chart and run the scale up and down - done. The real study begins after that with ornaments like cuts and rolls, and YouTube teachers all over the world are waiting for you.",
    lesson: "Self-teaching is fine - in-person lessons are rare in Korea, but the instrument really is easy, and English-language online courses plus Korean Irish-music clubs fill the gap comfortably. If you've played recorder, consider yourself licensed already.",
    buy: "For about ₩10,000-20,000 you get a proper Irish or British brand: Feadog, Walton's, Generation (Korean online music shops carry them too). Clarke is the original of originals, but the Original model eats a lot of air, so start with a Sweetone instead. Only two landmines - decorative souvenir whistles (tuning as abstract art) and accidentally buying a key that isn't D.",
    firstGoal: "Play one Irish jig start to finish within two weeks (The Kesh Jig is the classic). And the moment you slip in a single cut without thinking about it - congratulations, there's no going back now.",
  },

  low_whistle: {
    how: "The classic route is a few months on tin whistle, then a promotion to low whistle. The fingering is identical, so everything you built transfers over. When you first pick one up your fingers will file a formal complaint about the hole spacing; learn to cover the holes with the middle joints rather than the tips (the piper's grip) and a new world opens.",
    lesson: "Self-teaching is fine - there's essentially no specialist teaching in Korea, so it's self-taught either way. Happily, tin whistle experience plus English-language online courses is a well-proven standard route.",
    buy: "A Dixon polymer low D at around ₩100,000-200,000 is the universal starter. Mid-range means Howard, Kerry and friends at ₩200,000-400,000. Nearly all of it is direct import or a buying agent, so trying one in a Korean shop is the catch - if your hands are small, checking hole spacing on the spec sheet before you buy is a required ritual. The landmine is a no-name ultra-cheap aluminium tube.",
    firstGoal: "Draw out one long-toned phrase of Titanic-style film music, cool and clear. If someone in the house turns around and says 'wait, what was that?' - success.",
  },

  ocarina: {
    how: "Everyone starts on one 12-hole alto C. Blow and it sounds; finger it and the pitch is right there - very little ear strain, so you're playing tunes in week one. It does wobble in pitch with breath pressure, though, so keep a tuner app open and practise holding one note dead straight; your progress will run at double speed.",
    lesson: "Self-teaching is fine - Korean books and video courses are plentiful, and classes at community culture centers and lifelong-learning halls are common, so you can even choose the pleasure of learning alongside other people. Blessed infrastructure.",
    buy: "A domestic Noble (Korea's biggest ocarina maker) ceramic 12-hole at ₩20,000-50,000 is the standard entry, with Korean after-sales support to keep your mind at ease. Plastic goes under ₩10,000, but strictly as a taster. The landmine is the souvenir-shop ocarina - the bird shape is adorable, the tuning is feral.",
    firstGoal: "Play Zelda's 'Song of Time' all the way through. To someone who never played the game it's just a pretty tune; to someone who did, it's a tear button.",
  },

  pan_flute: {
    how: "One pipe per note means no note names to memorize; instead the real skill is navigation - finding the pipes with your head and wrists. Graze your breath across the rim of a pipe, like blowing over a bottle, and it sounds. Go do-re-mi, then slow hymns and ballads, then vibrato, in that order.",
    lesson: "Lessons recommended - core techniques like vibrato and semitones (tilting the pipes) are far faster learned over someone's shoulder. Thanks to the mood-music generation, a handful of specialist teachers and clubs are still alive in Korea, and they're worth hunting down.",
    buy: "A proper curved Romanian 22-pipe runs ₩150,000-400,000. Practice models exist around ₩50,000, but cheap straight-rank ones are a tuning lottery, so this is the instrument where saving money most easily costs you. Check Korean pan flute specialty shops and club group-buys.",
    firstGoal: "Play the opening of 'The Lonely Shepherd' with vibrato on top. Pull it off and wherever you're sitting instantly becomes a 1980s tearoom.",
  },

  quena: {
    how: "There's no recorder-style mouthpiece. You have to find the angle that lays your breath across the U-shaped notch yourself, so for the first week or two you'll be a professional wind-noise player. Practising on a bottle top beforehand shortens it. Once the angle clicks, the fingering itself is quite gentle.",
    lesson: "Self-teaching is fine - or rather, it's the only road. With essentially no lessons in Korea, Spanish and English YouTube is your classroom. The Andean music community here is small but warm, so do knock on the door.",
    buy: "Korean distribution is rare, so figure on direct import or a handmade workshop: bamboo starters ₩30,000-70,000, playing instruments around ₩100,000. The landmine is the tourist-souvenir quena - excellent as decor, silent as an instrument. Checking workshop reviews in Andean music communities before ordering is the safe move.",
    firstGoal: "A steady first note, then the opening of 'El Condor Pasa.' Half air and half pitch still counts as the Andes.",
  },

  shakuhachi: {
    how: "The final boss of first sounds in this batch. It's a fight over a few degrees of angle across that slanted blowing edge, so taking weeks to get a note is normal (it isn't your fault). Which means your starting material isn't a tune - it's holding one note, ro, as long as you can (robuki). Time spent shaping your lips in a mirror is practice.",
    lesson: "Lessons recommended - breaking the first-sound wall alone is an act of penance. Teachers in Korea are extremely rare, so Japanese or English online video lessons are the realistic path, and even a few sessions early on save you weeks.",
    buy: "The plastic starter 'Yuu' at around ₩100,000 by direct import has long been the standard (there's talk of it being discontinued, so stock may vary - check when you buy). Handmade bamboo is another world entirely, from hundreds of thousands into the millions of won, and can wait until you have a sound. The landmine is the cheap decorative bamboo shakuhachi - it was never built to be played.",
    firstGoal: "The goal isn't a tune, it's the sound itself. The day you hold a straight ro for ten seconds, half the discipline is already behind you.",
  },

  danso: {
    how: "Yes, this is the instrument that refused to sound for you in school - but with an adult's focus it comes in a few days. All of it is resting your lower lip on the U-shaped notch and finding the angle that splits your breath; the difficulty sits neatly between recorder and daegeum. Once it sounds, the moment you learn yoseong (the pitch shake) it suddenly becomes gugak (Korean traditional music).",
    lesson: "Self-teaching is fine - the teaching materials are practically national-curriculum thorough. And if you'd still like a teacher, gugak academies, community culture centers and after-school classes are all wide open. The best lesson access in this batch.",
    buy: "At a neighborhood gugak instrument shop or online: plastic school models ₩5,000-10,000, bamboo starters ₩30,000-50,000. That's about the cheapest real entry of any instrument anywhere. There isn't really a landmine, though bargain-bin stationery plastic can be a tuning lottery, so a brand a gugak shop carries is easier on the mind.",
    firstGoal: "Play Arirang all the way through with yoseong on it. That's the moment your revenge on school music class is complete.",
  },

  sogeum: {
    how: "You start at the transverse-flute gate: resting your lower lip on the blow hole and finding the breath angle. Half a day if you've played flute, one to two weeks if you haven't. Once it sounds, the finger holes sit close together so your hands stay comfortable - a perfect light taste of Korean transverse flutes.",
    lesson: "Lessons recommended - many gugak academies teach it bundled with daegeum. For embouchure angle and gugak ornamentation (sigimsae), one demonstration from a teacher beats ten YouTube videos.",
    buy: "At a gugak instrument shop: plastic starters around ₩30,000, bamboo practice instruments ₩100,000-200,000. Clearing the sound barrier on plastic and then upgrading to bamboo is the economical two-step. No particular landmine, but it's a high instrument, so 'where will I practise' is a hidden condition of purchase.",
    firstGoal: "A steady one-octave scale, then one bright folk tune. The piccolo of the gugak orchestra starts sparkling in your own room.",
  },

  daegeum: {
    how: "This is the big transverse flute that takes weeks to give up its first note. The order is clear - (1) find the embouchure angle and get a sound, (2) stabilize the low register, (3) make the cheong (reed membrane) buzz, (4) overblow into the high register. The day the cheong first flutters is this instrument's opening ceremony. Your head turns far to the left, so stretching is part of practice.",
    lesson: "Lessons essential - embouchure angle, breathing and membrane care are landmines stacked on landmines. Luckily gugak academies, culture centers and city and county gugak centers give it the widest teaching network of any Korean wind, so finding a teacher is easy.",
    buy: "A bamboo sanjo daegeum for practice at ₩150,000-400,000 from a gugak shop is the realistic start. Plastic starters exist (₩30,000-50,000) but can't teach you the membrane's resonance, so treat them as sound-barrier tools only. For reference, at the far end of this world, handmade daegeum from ssanggoljuk (rare double-grooved bamboo) wait at several million won - a world you don't need to know about yet. The landmine is buying online without checking hand size: the holes are widely spaced, so try one in person.",
    firstGoal: "First sound, then one long tone with the membrane singing on top. The day that 'Korean wind sound' comes out of your own lungs, the old flute legends stop being someone else's story.",
  },

  piri: {
    how: "You take the double reed deep between your lips and push with your belly. Spending the first month as a squeak specialist is the normal course - soaking the reed, finding how deep to bite, and dialing in breath pressure are the actual curriculum. Once that tiny body starts cutting through a whole orchestra, it gets seriously addictive.",
    lesson: "Lessons essential - choosing, soaking and scraping reeds is a craft in itself, and self-teaching tends to trap you in a maze of squeaks. Gugak academies and gugak centers do run classes (fewer than for daegeum), so start with a teacher.",
    buy: "A body-plus-reed set at a gugak shop runs ₩50,000-200,000. Reeds are consumables, so having several from the start is essential (a few thousand to tens of thousands of won each). The landmine is neglecting reed condition - the reed is the sound, and if you can't enjoy caring for it, this romance ends early.",
    firstGoal: "One long tone with no squeak, then moving between soft and loud. From that day on, the piri becomes the lead of your own little orchestra.",
  },

  taepyeongso: {
    how: "Before you practise, your top priority is somewhere to practise (indoor playing is basically off the table). Once you've secured an outdoor spot, a soundproof room or a pungmul troupe's rehearsal hall, the order is: take the double reed and build breath pressure, stabilize the tone, then ornaments. The months it takes to build lip and cheek muscles are your foundation work.",
    lesson: "Lessons essential - and the classic route here isn't private lessons, it's joining a pungmul or samulnori group. The taepyeongso doesn't grow alone; it grows inside the circle. Private lessons at a gugak academy work alongside that.",
    buy: "A beginner practice instrument at a gugak shop runs ₩100,000-300,000, with reeds as separate consumables. The biggest landmine isn't the instrument, it's buying one before you have anywhere to play - blow this at home and your relationship with the neighbors goes solo first.",
    firstGoal: "Lay one line of a pungmul melody over the band with a steady sound. The day you play your first taepyeongso in the circle, that circle belongs to you.",
  },

  duduk: {
    how: "You take the broad double reed (kamish) and sing through it on long, low breaths. The first sound actually comes quickly - the distance to 'that mournful sound' is the hard part. Most of your practice is long tones, delicate vibrato, and experimenting with how deep to hold the reed, and the back-pressure is high enough that diaphragm breathing improves on its own.",
    lesson: "Self-teaching is fine - not by choice, but because there's essentially no lesson in Korea. English and Russian online courses are your textbook, and a few video lessons with an overseas player early on is a good shortcut.",
    buy: "Direct from an Armenian workshop (handmade apricot-wood body plus two or three reeds, ₩100,000-350,000) is the standard route. There are many makers and quality varies, so rather than trusting one workshop blindly, check recent reviews in duduk communities (overseas forums, Reddit) before you order. Two landmines - souvenir duduks, and running without spare reeds (if reeds stop coming, so does practice).",
    firstGoal: "A rock-steady long tone with a gentle vibrato on it. The moment something resembling the opening of the Gladiator score comes out, the humidity in the room goes up.",
  },

  ney: {
    how: "You hold a reed tube with almost no mouthpiece at an angle and blow - together with shakuhachi, the twin peak of first-sound purgatory. Weeks of nothing but air is part of the curriculum. After the first note, the microtonal world of maqam is waiting, and briefly setting down your Western ear is actually the shortcut.",
    lesson: "Lessons recommended - teachers in Korea are extremely rare, so Turkish or English online video lessons are the realistic option. Getting coached on the blowing angle alone turns weeks into days.",
    buy: "Direct from Turkish or Egyptian workshops runs ₩50,000-250,000, and plastic beginner neys exist for a few tens of thousands (they're actually good for first-sound practice because they're consistent). Almost nothing is stocked in Korea, so check seller reviews in Middle Eastern music communities before ordering. The landmine is a decorative reed tube with no tuning information.",
    firstGoal: "The first sound. Genuinely, that's the goal. The day one note like desert wind comes out, you've earned a circle on the calendar.",
  },

  bansuri: {
    how: "After clearing the transverse first-sound gate, you draw raga melodies with half-holed fingerings and sliding glissandi. Start on a mid-length flute (G or A) that's kind to your hands - the big low ones that are this instrument's true home stretch your fingers more than a low whistle, and can wait. This is an ear-taught culture rather than a notated one, so imitating a recording you love is the official syllabus.",
    lesson: "Self-teaching is fine - teachers in Korea are extremely rare, but English-language online guru courses are rich and well structured. When you find yourself wanting raga theory, taking online instruction from a teacher then is the properly Indian way.",
    buy: "Direct from Indian workshops, ₩30,000-150,000. Bamboo is cheap to make, but the whole game is picking a well-tuned example, so it's safest to buy a workshop vetted and recommended in Indian music communities. The landmine is the souvenir bansuri - pretty, and not in tune.",
    firstGoal: "A steady first note, then one imitation of a meend (glissando) sliding from one note into the next. That's the moment your flute starts to sing.",
  },

  dizi: {
    how: "Your first practical isn't playing, it's craft - gluing the dimo (reed membrane) over the membrane hole and setting fine wrinkles into it. That membrane has to buzz for the 'Chinese sound' to appear. The transverse first-sound gate is the same one to two weeks, and the short, high bangdi is kinder to beginners' hands. Bookmark the dimo-gluing videos first.",
    lesson: "Self-teaching is fine - Korean lessons are a small Seoul-centered handful, but Chinese-language online courses are infinite and perfectly followable even leaning on subtitles. Dimo gluing is learnable from video too.",
    buy: "Ordering from AliExpress is effectively the standard route - ₩20,000-50,000 for practice, ₩50,000-150,000 for something genuinely playable, which is top-tier value in this batch. When you order, be sure to add dimo and glue to the cart. The landmines are buying the flute without membrane and wondering why it sounds wrong, and decorative carved dizi.",
    firstGoal: "Glue your own dimo and get that first nasal buzz. The moment it rings out bright, a wuxia soundtrack starts playing in your head automatically.",
  },

  xiao: {
    how: "The exact opposite of the dizi's brilliance - this is the moonlight flute. The first-sound gate at the U/V notch runs one to three weeks (harder than danso, easier than shakuhachi). It's a long tube, so inefficient breathing makes you lightheaded fast; knowing when to stop is a technique too. Playing spacious music slowly is what this instrument is really for.",
    lesson: "Self-teaching is fine - with essentially no lessons in Korea, Chinese-language online courses are your classroom. Happily it's a quiet instrument, so you can practise alone late into the night. Very self-study friendly.",
    buy: "Via AliExpress: ₩30,000-80,000 for practice, around ₩100,000-200,000 for playable bamboo. For beginners the 8-hole layout with comfortable spacing is the pick (traditional 6-hole asks for a wider stretch). The landmine is, again, the decorative bamboo tube - check the reviews to confirm it actually sounds.",
    firstGoal: "One slow phrase on a dusky long tone. If that Crouching Tiger night air settles over your room, you've done it.",
  },

  hulusi: {
    how: "The shortest route in this batch. The reed lives inside the tube, so you blow like a harmonica and get a smooth sound on day one. There's exactly one knack - blow hard and the pitch collapses, so keep your breath as gentle as stroking silk. The fingering is recorder-level, so you'll have tunes in the first week.",
    lesson: "Self-teaching is fine - there's almost no lesson in Korea, and almost no need for one. Chinese-language online courses plus a fingering chart are plenty, and it's easy enough that self-study is the official course.",
    buy: "₩20,000-50,000 on AliExpress gets a perfectly usable C starter. The landmine is the rock-bottom no-brand: if the built-in reed is out of tune there's nothing you can do about it, so pick a mid-priced listing from a seller with lots of reviews.",
    firstGoal: "Play one Yunnan-flavored tune like 'Moonlight over the Phoenix Bamboo' in your first week. Your room turns into travel-documentary background music in seconds.",
  },

  highland_bagpipe: {
    how: "A confession first: you don't play the bagpipes for the first year. The universal curriculum is building fingering and gracenote grammar on a quiet, recorder-like practice chanter, and that's both the classic and the only road. Juggling bag pressure, breath and fingering comes after that.",
    lesson: "Lessons essential - the ornament grammar is a strictly codified tradition, so self-taught habits take even longer to correct later. Joining a Korean pipe band (there are a few, mostly in Seoul) is the standard route and also the answer to your practice-space problem.",
    buy: "To start, a practice chanter at ₩80,000-200,000 is all you need (a Scottish brand like McCallum, ordered direct, is a safe bet). The full set is a year away - and even then, cheap Pakistani sets (₩300,000-600,000) are a famous minefield of unplayable instruments, so order a proper set (₩1.5-4M and up) with advice from someone senior in your band.",
    firstGoal: "Clean scales and basic gracenotes on the practice chanter, and knocking on a pipe band's door. The roar of the full set comes after that.",
  },

  uilleann_pipes: {
    how: "As a regular candidate for 'hardest instrument in the world,' let's be honest from the start - you begin with a practice set (bag, bellows, chanter), working on pumping the bellows and steadying bag pressure. It's the only bagpipe that uses no breath at all, so lung worries are zero; that space is taken instead by limb independence, with both arms and a knee each doing a different job. Think of it as seated martial arts.",
    lesson: "Lessons essential - with extremely few players or teachers in Korea, the online courses from NPU (Na Piobairi Uilleann, the Irish pipers' association) are effectively the only systematic route. The instrument is far too expensive and too hard to teach yourself bad habits on.",
    buy: "Honestly: a practice set runs ₩1.3-3.5M, direct from an overseas maker, with waiting lists of months to years as standard (longer at famous workshops). Half sets and full sets are a distant future of several million to ten million won and up. The landmine is clear - cheap Pakistani sets are frequently unplayable and strongly discouraged, so choose a maker on the recommendation of NPU or overseas piper communities.",
    firstGoal: "Steady the bellows-to-bag pressure enough to hold a rock-solid chanter long tone, then play your first reel. As the saying goes, 'seven years learning, seven years practising, seven years playing' - your first seven start now.",
  },

  galician_gaita: {
    how: "A gentler bagpipe than the Highland, but the curriculum is identical - fingering first on a practice chanter (or a chanter on its own), then bag pressure and breath. The heart of it is the bouncing 6/8 lilt of the muineira dance, so watching Galician festival footage and getting that rhythm into your body is half the practice.",
    lesson: "Lessons recommended - with essentially none in Korea, Spanish-language online courses are the main route, and if you get serious there's the romantic option of a Galician summer school (a short course on location).",
    buy: "With effectively no Korean distribution, assume a direct order from a Galician workshop - a student set runs ₩800,000-2.5M (budget generously for exchange rates and duties). Korean information on makers barely exists, so check recent reviews in overseas gaita communities before proceeding. The landmines are no-name cheap sets, and the genre mix-up of 'it's Spanish so it must be flamenco' (it's Celtic).",
    firstGoal: "Play one muineira on the chanter with its rhythm alive. The day the drones come in on top, your living room becomes a Galician festival square.",
  },

  suona: {
    how: "As the taepyeongso's Chinese cousin, the order of business is the same - the first task isn't practice but a practice space (the volume rules out indoors). Once you've secured outdoors or a soundproofed room, the sequence runs: take the shaozi (the double reed) in your lips and settle your breath pressure, then stabilize the tone, then move on to tongue and finger technique. The few months while your lip and cheek muscles get built are the groundwork - after that, the flashy world of birdsong mimicry opens up.",
    lesson: "Lessons recommended, but Korea has effectively no dedicated suona teachers - the realistic route is a hybrid: borrow the basics of reed breathing from a taepyeongso or piri player, then take the main course through Chinese-language online lessons. Even leaning on subtitles, you can follow along fine.",
    buy: "AliExpress direct order is the standard route - a student set (body, bell and a few reeds) runs ₩30,000-80,000, and a decent playable rosewood one ₩100,000-150,000. Adding a stack of spare shaozi (reeds) to the order is a required ritual - they're consumables and you can't restock them in Korea. The landmines are decorative souvenir suonas, and buying before you've solved the practice-space problem - the first thing to ring out will be your relationship with the neighbors.",
    firstGoal: "A stable long tone, then one line of a folk melody on top. The day will come when you prove the meme in person: when the suona sounds, no other instrument can be heard.",
  },

  bawu: {
    how: "If you know the hulusi, this is its sibling - the same reed set into a single tube. The reed is built in, so you get a sound on day one. The knack is to cover the reed hole generously with your lips and keep your breath as gentle as stroking silk (blow hard and the pitch collapses). Once the transverse hold feels natural, the fingering is recorder-level, so you'll have tunes in the first week.",
    lesson: "Self-teaching is fine - there are effectively no lessons in Korea, and little need for them. Chinese-language online courses plus a fingering chart are enough, and the breathing tips in hulusi materials transfer almost unchanged.",
    buy: "₩20,000-50,000 on AliExpress gets you a resin or bamboo starter (in G or F). The landmine is the rock-bottom no-brand: if the built-in reed is out of tune there's nothing you can do, so pick a mid-priced listing from a seller with plenty of reviews. There are transverse and vertical versions - for starting out, either is fine.",
    firstGoal: "In your first week, draw one phrase of a slow tune out like velvet on the gentlest breath. When someone asks 'that low note came out of a bamboo flute?', you've succeeded.",
  },

  xun: {
    how: "It looks like an ocarina, but you actually start with bottle-blowing - there's no recorder-style mouthpiece, so the first sound only comes once you angle your breath across the edge of the blowhole, like skimming air over an empty bottle (days to two weeks). Once it speaks, the fingering is on the gentle side, so the real work is long tones that hold the pitch straight. Slow, spacious tunes are what this instrument is truly about.",
    lesson: "Self-teaching is fine - lessons in Korea are effectively nonexistent, so Chinese-language online courses are your classroom. It's quiet enough to practice at night, which makes it self-study-friendly, and you can pre-load the first-sound knack by practicing on actual bottles.",
    buy: "By AliExpress direct order, a beginner 10-hole (pen-grip style) runs ₩20,000-50,000; master-made ceramic pieces start above ₩100,000. For starting out, a medium-sized (plum-to-fist) 10-hole with gentle resistance is the recommendation. The landmine is the tourist-souvenir xun - wonderful as decor, museum-grade as a tuned instrument. And it's ceramic: drop it and it reverts to its pre-excavation state.",
    firstGoal: "First sound, then one phrase of a slow tune in that dusky long tone. The day a sound built on the same principle as 7,000 years ago comes out of your own breath, your sense of time goes briefly hazy.",
  },

};

// English overlay — keyboard & free-reed batch. Keys match data/inst_keyboard_freereed.js ids 1:1.

const EN_INST_KEYBOARD_FREEREED = {

  piano: {
    name: "Piano",
    family: "Keyboard · struck strings",
    toneDesc: "Play it softly and it sparkles like water drops; lean in and it roars like an orchestra. That huge span, from a whisper to a shout inside one instrument, is its greatest weapon.",
    caveats: [
      "More people have played this than any instrument on earth, so the bar for 'plays well' sits very high.",
      "Getting an acoustic into an apartment is its own project (soundproofing, neighbors). Realistically, start digital.",
      "It is complete on its own, so unless you go looking for ensembles you can end up playing solo forever."
    ],
    tracks: {
      classical: { label: "Classical", note: "The traditional Czerny-to-sonatas route. Sight-reading becomes a lifelong asset." },
      jazz: { label: "Jazz piano", note: "Chord voicings and improvising. A completely different part of your brain than classical." },
      pop_accomp: { label: "Pop & accompaniment", note: "Mostly chord-based, so it is the fastest way in. The shortest path to singing while you play." },
      newage: { label: "New age", note: "Yiruma and Hisaishi territory. The track the most self-learners choose." },
      ccm: { label: "CCM & church accompaniment", note: "Chord sense plus improvised backing. You get a guaranteed stage: your church." }
    },
    variants: {
      digital: { label: "Digital piano", note: "Headphone practice solves noise completely. The standard first step for apartment dwellers." }
    }
  },

  pipe_organ: {
    name: "Pipe organ",
    family: "Keyboard · pipes",
    toneDesc: "Enough volume to shake a whole cathedral, plus a thousand faces: the right stop combination mimics flutes, trumpets, even strings. The low pipes you feel in your body more than hear.",
    caveats: [
      "The real barrier is not skill but access. Finding a church or school with an organ comes first.",
      "The pedalboard is entirely new physical training. Even strong pianists find their feet going rogue at first.",
      "Lessons come from a few narrow routes: church-music departments, private organists, mostly in Seoul."
    ]
  },

  hammond_organ: {
    name: "Hammond organ",
    family: "Keyboard · electromechanical organ",
    toneDesc: "A swirling, churning sound made by the Leslie speaker spinning. Push or pull a drawbar and the tone changes on the spot, and that percussive click is what builds the groove.",
    caveats: [
      "The playing philosophy differs from piano: with no sustain pedal, you relearn legato with your fingers.",
      "Specialist teachers in Korea are rare. Jazz piano lessons plus YouTube (English resources are plentiful) is the realistic detour.",
      "Fall for the vintage romance and your wallet and your back go down together. Start on a clonewheel, always."
    ],
    variants: {
      clonewheel: { label: "Clonewheel", note: "A stage keyboard that recreates the Hammond sound digitally. Headphone-friendly, and the standard rig for players today." }
    }
  },

  harpsichord: {
    name: "Harpsichord",
    family: "Keyboard · plucked strings",
    toneDesc: "Because the strings are plucked, there is a shimmering metallic gloss. There are no dynamics, but every note rolls out clear as a jewel, and two manuals plus stops change the color.",
    caveats: [
      "No dynamics at all. Expression lives entirely in articulation and timing, a different aesthetic from piano from day one.",
      "Tuning is part of the hobby. Fifteen minutes of tuning before you play becomes routine.",
      "Korean lessons mean a handful of early-music specialists, mostly in Seoul. But if you already play piano, the switch is quick."
    ],
    variants: {
      digital_hpsd: { label: "Digital harpsichord", note: "Roland's Classic series and the like. Mostly secondhand since many are discontinued, but tuning and upkeep worries vanish." }
    }
  },

  clavichord: {
    name: "Clavichord",
    family: "Keyboard · struck strings",
    toneDesc: "A sound barely above a whisper. In exchange, wiggle a held key and the note trembles (Bebung), and the tiniest pressure from your fingertip goes straight into the tone: the keyboard closest to bare skin.",
    caveats: [
      "Quiet also means nobody else hears you. If you want stages and ensembles, this is the wrong instrument.",
      "The touch is so sensitive that pressing hard bends the pitch. Unlearning piano habits takes a while.",
      "Few people in Korea have even seen one. Lessons basically do not exist and the instrument is imported: a hobby that takes resolve."
    ]
  },

  celesta: {
    name: "Celesta",
    family: "Keyboard · struck metal plates",
    toneDesc: "A music box you play from a keyboard, all glittering celestial bells. The moment this sound lands on any piece, it turns into magic, dreams, a snowy night.",
    caveats: [
      "Hard to make 'my instrument.' It is a seat professional keyboardists cover in an orchestra, not a path you enter on its own.",
      "If it is the sound you love, the realistic answers are piano plus a digital voice, or its cousin the glockenspiel."
    ]
  },

  toy_piano: {
    name: "Toy piano",
    family: "Keyboard · struck metal rods",
    toneDesc: "A plinky sound somewhere between a music box and a xylophone. The slightly off tuning is exactly what gives it that dreamy, wistful haze.",
    caveats: [
      "The range is only two or three octaves, so what you can play is fundamentally limited.",
      "Being out of tune is its identity. If you want accurate pitch, it will only stress you out.",
      "Less a main instrument than a brilliant second one, or seasoning for writing and recording."
    ]
  },

  synthesizer: {
    name: "Synthesizer",
    family: "Keyboard · electronic",
    toneDesc: "Warm analog bass, cosmic pads, screaming leads: there is no limit to the palette. The question is not 'what does it sound like' but 'what sound will I build?'",
    caveats: [
      "Beyond keyboard skill there is a second subject, synthesis itself. That is both the fun and the learning curve.",
      "The trap of spending more time browsing gear than practicing (GAS) is very real.",
      "It feels less like mastering one instrument and more like endless exploration."
    ],
    tracks: {
      synthwave: { label: "Synthwave & performing", note: "Eighties-style analog sound. The track where you twist knobs and treat it as an instrument to play." },
      producing: { label: "Writing & producing", note: "Pair it with a DAW and build tracks. Sound sense and arranging matter more than keyboard chops." }
    }
  },

  keytar: {
    name: "Keytar",
    family: "Keyboard · electronic",
    toneDesc: "Underneath it is a synthesizer, and bright cutting lead tones are the signature. The neck ribbon and wheels let you bend and add vibrato like a guitarist while you rip a solo.",
    caveats: [
      "There are no keytar lessons. Keyboard skill is the real instrument; the keytar is the gear that takes it to a stage.",
      "Alone at home it is just an awkward keyboard. Without a band or a stage, half its reason to exist is gone.",
      "Some see an eighties relic, some see pure cool. Carrying it off is on you."
    ]
  },

  melodica: {
    name: "Melodica",
    family: "Free reed · blown keyboard",
    toneDesc: "A nasal reed sound sitting between an accordion and a harmonica. Your breath shapes dynamics and vibrato, so a keyboard ends up singing like a wind instrument.",
    caveats: [
      "Saliva pools inside. Drain and dry it after playing or you get smell and mold. That is the one certain drawback.",
      "The school-kids' instrument image can be a twist card on stage, or a wall. Depends on the room.",
      "Sound lasts only as long as your breath, so long phrases need planned breathing."
    ]
  },

  piano_accordion: {
    name: "Piano accordion",
    family: "Free reed · bellows",
    toneDesc: "Many reeds sounding at once give it a rich, choir-like body. The bellows breathe your dynamics, so a keyboard instrument sings like a horn. Musette tuning adds that shimmering Paris wobble.",
    caveats: [
      "Weight is a real variable. Before you start, strap on the actual instrument and settle on a size.",
      "Those 120 left-hand bass buttons are memorized blind. Your left hand is lost for the first couple of months.",
      "Repair and tuning specialists are scarce in Korea, so an eye for a healthy used instrument (or a friend with one) matters."
    ],
    tracks: {
      musette: { label: "French musette", note: "Paris cafe waltzes, with that wobbling musette tuning. Inseparable from chanson accompaniment." },
      tango: { label: "Tango", note: "The realistic stand-in for bandoneon. Accordion arrangements of Piazzolla are easy to find." },
      trot: { label: "Trot & Korean pop", note: "The mainstream Korean accordion scene. Plenty of club and event stages, and the lesson network for older learners lives here." },
      folk: { label: "Folk & world", note: "Klezmer, Balkan, Irish and beyond. One box on the street is a whole band." }
    },
    variants: {
      digital_acc: { label: "Digital accordion", note: "Roland's FR series. Headphone practice is possible, but the price (from about $1,350) is no joke." }
    }
  },

  bayan: {
    name: "Bayan",
    family: "Free reed · bellows",
    toneDesc: "Darker and heavier than a piano accordion, closer to an organ. On a concert bayan the left hand switches to free bass, so both hands weave counterpoint: a pipe organ you wear.",
    caveats: [
      "Korea has almost no lesson, repair or retail infrastructure. A few overseas-trained players and the internet (Russian resources are the best) is all there is.",
      "B-system method books and fingering charts are standard in Russian. English material is mostly C-system, so read it with care.",
      "It is a virtuoso culture, so the summit is far off. Even at hobby level, though, the button layout's efficiency is yours."
    ]
  },

  cba_c_system: {
    name: "Chromatic button accordion",
    family: "Free reed · bellows",
    toneDesc: "The sound is the same family as a piano accordion; the difference is under your fingers. Narrow buttons put wide leaps and dense chords within reach, and fast passages come out smooth.",
    caveats: [
      "Piano accordion is the Korean standard, so C-system teachers and books are hard to find (French and Italian resources are home base).",
      "Years of piano make the keyboard version instantly comfortable; buttons start from blank paper, but the ceiling is higher.",
      "The layout differs from B-system (bayan), so always check the system before trusting a book or a video."
    ],
    tracks: {
      musette_cba: { label: "Musette & chanson", note: "The standard instrument in its French homeland. Waltz-speed runs are button territory." },
      balkan: { label: "Balkan & klezmer", note: "Odd meters and blistering phrases. The symmetrical layout shines in pieces full of key changes." },
      jazz_cba: { label: "Jazz", note: "The Richard Galliano lineage. A playground for expressive moves like the bellows shake." }
    }
  },

  diatonic_button_accordion: {
    name: "Diatonic button accordion",
    family: "Free reed · bellows",
    toneDesc: "The push-pull motion bakes a bouncing rhythm right into the tone. Simpler and brighter than a chromatic, a sound that calls for dancing. The drive when Irish reels pour out is the signature.",
    caveats: [
      "Push and pull give different notes, so you do not just transfer sheet music. Learning patterns by ear and body, the oral-tradition way, is the norm.",
      "One box covers only two or three keys. Buy without knowing your genre's standard key (Irish B/C, norteno GCF) and you are stuck.",
      "Korean lessons basically do not exist and the community is tiny. English-language online courses are your real teacher."
    ],
    tracks: {
      irish_box: { label: "Irish (B/C box)", note: "The session standard. Online courses (OAIM and others in English) are solid, so a self-taught route exists." },
      norteno: { label: "Mexican norteno", note: "The three-row GCF box. Polka rhythms and flashy thirds. Plenty of US and Mexican video material." }
    }
  },

  bandoneon: {
    name: "Bandoneon",
    family: "Free reed · bellows (concertina family)",
    toneDesc: "A sound that weeps and then growls. The sighing attack as you pull the bellows open, and staccato chopped off against your knee, make tango's heartbeat. Drier than an accordion and closer to a human voice.",
    caveats: [
      "The layout is hell: right hand, left hand, push and pull are all different, so you memorize four disordered keyboards. It is frozen historical accident, with no logic to lean on.",
      "Finding an instrument is harder than learning it. Good used ones (a Doble A, say) are scarce worldwide and prices keep climbing.",
      "You can count Korean players and teachers on one hand. Lessons mean a few private players, or online from abroad.",
      "Do you love tango enough to climb all of that? Only people who answer yes come here."
    ]
  },

  concertina: {
    name: "Concertina",
    family: "Free reed · bellows (concertina family)",
    toneDesc: "Smaller and more sharply defined than an accordion, a chattering reed sound like birdsong. That bright rolling tone through Irish jigs and reels is the heart of the appeal.",
    caveats: [
      "Anglo, English and duet systems are not interchangeable. Pick your system by genre up front and you never pay to switch.",
      "Cheap Chinese models hit response and bellows limits, so the urge to upgrade arrives within a year or two (and prices jump at the mid tier).",
      "Korean lessons and community are essentially nonexistent. English-language online courses are your real teacher."
    ],
    tracks: {
      anglo: { label: "Anglo (Irish)", note: "Bisonoric push-pull. The Irish session standard, and online courses (OAIM and the like) open a self-taught route." },
      english: { label: "English (melody & classical)", note: "Same note both directions, which suits reading from the page. At home in English folk, hymns and classical miniatures." }
    }
  },

  diatonic_harmonica: {
    name: "Diatonic harmonica",
    family: "Free reed · harmonica family",
    toneDesc: "An instrument where breath becomes sound directly. Land a bend and it sobs, hand wah makes it billow, train rhythms make it run. After the human voice, the sound closest to feeling.",
    caveats: [
      "Until you can bend, you will not get 'that blues sound.' This is where most people quit.",
      "One key per harmonica, so you end up owning five to seven (all of them together still cost less than one guitar).",
      "You cannot sing and play at once, since you only have one mouth. A neck holder does let you pair it with guitar."
    ],
    tracks: {
      blues: { label: "Blues", note: "Bending and second position are the core. The weeks until your first bend are the big hurdle and the rite of passage." },
      folk_country: { label: "Folk & country", note: "Melody-first, so it is enjoyable with no bending at all. Use a neck holder to sing and strum alongside." }
    }
  },

  chromatic_harmonica: {
    name: "Chromatic harmonica",
    family: "Free reed · harmonica family",
    toneDesc: "Rounder and more dignified than a diatonic. Play a violin miniature or a jazz ballad on it and the tone proves a harmonica can be a proper solo instrument.",
    caveats: [
      "It is a pure melody instrument with essentially no chordal backing. It is complete alongside an accompanist (or a backing track).",
      "Valves and slide are sensitive to saliva and temperature, so upkeep takes more care than a diatonic (warm it up before playing).",
      "Bending expression is more limited than a diatonic. If blues feel is the goal, the diatonic is your instrument."
    ]
  },

  tremolo_harmonica: {
    name: "Tremolo harmonica",
    family: "Free reed · harmonica family",
    toneDesc: "Two reeds shimmering slightly apart give it a built-in wistful tremble. Old Korean songs or trot, the moment you blow, a nostalgia filter drops over everything. The harmonica sound Korean ears know best.",
    caveats: [
      "The basic model has no semitones, so holding two (C plus C#) stacked is standard, which surprises everyone at first.",
      "That tremble is the charm and also the thing people split on. If you want clean single notes, go diatonic or chromatic.",
      "The young scene is thin, but the lesson and ensemble network for older learners (culture centers, welfare centers) is among Korea's best."
    ]
  },

  saenghwang: {
    name: "Saenghwang",
    family: "Free reed · gugak wind",
    toneDesc: "A glassy, mysterious chord, like a pipe organ shrunk down. With many pipes ringing at once, 'cosmic' fits better than 'traditional.' A sound long likened to the cry of a phoenix.",
    caveats: [
      "Extremely temperature-sensitive. A cold instrument fogs its reeds and will not speak, so warming it against your chest before playing is basic technique.",
      "Very few places in Korea can tune or repair one, so caring for the instrument is half the hobby.",
      "Lessons come mostly from gugak majors and a few active players, private and Seoul-centered. Self-study books barely exist.",
      "It belongs to a refined court-music culture, so it fits ensembles and orchestras more than improvising in a band."
    ]
  },

  sheng: {
    name: "Sheng",
    family: "Free reed · Chinese wind",
    toneDesc: "A glassy, transparent block of harmony. A shade brighter and more crisply spoken than the Korean saenghwang, it carries the chords and rhythmic staccato in Chinese folk ensembles.",
    caveats: [
      "Extremely temperature-sensitive. A cold instrument fogs its reeds and will not speak, so warming it up before playing is basic technique.",
      "Tuning and repair infrastructure in Korea is effectively zero - aftercare is even more blocked than for the saenghwang, stacked on top of the tuning lottery of direct-import instruments.",
      "With effectively no lessons in Korea, you depend on Chinese-language online courses - an instrument that asks for self-study resolve."
    ],
    tracks: {
      trad: { label: "Traditional 17-pipe", note: "The original sheng with the round wind chamber. The standard for traditional ensemble and solo work." },
      keyed: { label: "Keyed large sheng", note: "The keyed 24- and 36-pipe upgrade. The harmony section of the Chinese folk orchestra." }
    }
  }

};

const EN_GUIDE_KEYBOARD_FREEREED = {

  piano: {
    how: "Get one digital piano into the house and start by searching YouTube for basic piano chord accompaniment. If the classical route is your goal, that means Beyer and Czerny; if singing along is the goal, four chords gets you a song in two weeks. Either way, 20 minutes a day beats one three-hour session.",
    lesson: "Lessons recommended. It is the one instrument with a neighborhood academy everywhere in Korea, so not using that network is simply a loss.",
    buy: "For beginners an 88-key hammer-action digital piano is the right answer. Yamaha P-145, Roland FP-10 and Kawai ES120 are the proven three, at roughly $410-$680. The landmine is a 61-key light keyboard that looks like an 88. If the keys feel like sponge, your fingers will betray you at a real piano later.",
    firstGoal: "Play one piece through with both hands within a month. Not Twinkle Twinkle, but a song you actually love."
  },

  pipe_organ: {
    how: "You do not buy this instrument, you get access to it. Build your piano basics first, then connect with a church or a university practice room that has an organ. That is the real entry point. Even strong pianists find their feet going rogue on the pedalboard, so start over from pedal scales.",
    lesson: "Lessons essential. Pedal work, stop combinations and registration are not a world that self-study videos can solve. Private lessons with an organist from a church-music program are the realistic route.",
    buy: "A real pipe organ is a piece of architecture worth hundreds of millions of won, not a personal purchase. For home practice the standard is a three-manual digital classical organ with a pedalboard, from Johannus or Viscount (from about $3,400). The landmine is buying a home electronic organ with no pedals just because it says 'organ.' Without pedals you cannot practice organ.",
    firstGoal: "Within a month, play a one-octave pedal scale without looking down. That is where an organist begins."
  },

  hammond_organ: {
    how: "Set up one clonewheel keyboard and search YouTube for 'Hammond organ drawbar basics' (the English material is overwhelmingly rich). Unlike piano there is no sustain pedal, so relearning finger legato is task one. A single 888000000 drawbar setting already gives you that sound.",
    lesson: "Self-study is fine. Specialist Hammond teachers barely exist in Korea, so jazz piano lessons plus English YouTube is the strongest real-world route.",
    buy: "Start on a clonewheel, no exceptions. A used Hammond SK series or Nord Electro runs $550-$1,700, and the Crumar Mojo is a fine choice too. The landmine is romance: making a vintage B3 your first instrument. That 150kg cabinet breaks your wallet and your back at the same time.",
    firstGoal: "Within a month, build three drawbar settings and take a 12-bar blues around once, left-hand bass under right-hand chords."
  },

  harpsichord: {
    how: "If you have played piano, the switch itself is quick. But with no dynamics, you relearn expression entirely through articulation and timing. Start by playing baroque miniatures (an easy Scarlatti sonata) with a harpsichord voice on a digital keyboard; worrying about a real one can wait.",
    lesson: "Lessons recommended. Baroque technique, ornaments and figured bass are easy to get lost in alone. A small number of early-music specialists teach, mostly in Seoul.",
    buy: "Almost nothing circulates in Korea, so it means importing a used spinet or a build kit, from about $3,400. Zuckermann is the storied kit workshop, and the practical alternative is a used digital harpsichord like the Roland C-30. The landmine is a used acoustic with no service history. On an instrument where tuning is part of the hobby, a rough one is not an instrument, it is homework.",
    firstGoal: "Within a month, play one baroque miniature start to finish without pressing hard the way you would on a piano."
  },

  clavichord: {
    how: "This is a push and pull with the quietest keyboard on earth. Press hard and the pitch bends, so dropping piano habits and relearning fingertip pressure is the practice itself. Search YouTube for 'clavichord technique' and you get lectures from early-music players abroad.",
    lesson: "Self-study is fine (and effectively mandatory). Assume Korean clavichord lessons do not exist. You build on piano or harpsichord basics with videos from overseas.",
    buy: "Essentially nothing circulates in Korea, so importing from a workshop abroad is standard. Kits and used instruments run $2,050-$5,500; finished new ones start around $6,850. Harpsichord workshops like Zuckermann make clavichord kits too. The landmine is hearing 'quiet keyboard' and expecting a digital piano substitute. This is no substitute, it is a completely different and very sensitive creature.",
    firstGoal: "Within a month, hold a key and wiggle it into a vibrato (Bebung). It is the only keyboard where that works."
  },

  celesta: {
    how: "Honestly, the celesta is not an instrument you take up; it is an option you add on top of piano skill. Learn piano, then play the Dance of the Sugar Plum Fairy with a celesta voice on a digital keyboard. That is the realistic start. The real thing you meet in orchestras and studios.",
    lesson: "Self-study is fine. Piano lessons are celesta lessons. There is no separate technique; you play it exactly as you would a piano.",
    buy: "A new one (Schiedmayer) runs tens of millions of won, so it is not a personal purchase. The real answers are a good digital piano with a celesta voice, or owning that sparkle through its cousin the glockenspiel (a few hundred thousand won). The landmine is a mystery toy keyboard labeled 'celesta' - that is worse than a toy piano.",
    firstGoal: "Within a month, play the Harry Potter theme through on a digital celesta voice. The wizard feeling is guaranteed."
  },

  toy_piano: {
    how: "Playing starts five minutes after you open the box. With only two or three octaves, go at it by lifting nursery tunes, music-box style miniatures, or just the chorus of a song you love. The slightly off tuning is not a defect, it is this instrument's identity.",
    lesson: "Self-study is fine. Toy piano lessons do not exist in the first place, and you do not need them.",
    buy: "Toy and used models in Korea get you started for $20-$70. The one treated as a performance instrument is Schoenhut, $100-$210 imported, and there are digital variants like the Korg tinyPIANO. The landmine is a used one with missing keys or rusted metal rods; since it cannot be tuned, hardware condition is everything.",
    firstGoal: "Within a month, arrange the chorus of a favorite song as a toy piano version and film one 30-second video."
  },

  synthesizer: {
    how: "Start down one of two paths. The hardware path means buying one mini synth and just turning knobs, which really is the textbook. The software path means a free synth plugin (Vital and friends) plus a cheap MIDI keyboard. Search YouTube for 'subtractive synthesis basics' and the oscillator-filter-envelope chain clicks into place in a day.",
    lesson: "Self-study is fine. Home base for learning synths is YouTube and the manual, not an academy. If your playing feels weak, add piano lessons then.",
    buy: "A Korg Volca (around $140) or an Arturia MicroFreak (around $270) is the standard entry, and if you are saving money, a MIDI keyboard under $70 plus free plugins is excellent too. The landmine is gear acquisition syndrome. Buy your second synth after you finish one track on the first.",
    firstGoal: "Within a month, finish one 8-bar loop using a sound you built from scratch, not a preset."
  },

  keytar: {
    how: "The real instrument is your keyboard playing. Build synth and piano fundamentals sitting down first, then train the separate skill of playing standing with it strapped on (no looking, plus the neck's pitch-bend ribbon). Practicing in front of a mirror matters more than you would think - half of this instrument is performance.",
    lesson: "Self-study is fine. Keytar-specific lessons do not exist anywhere. You finish this one with keyboard lessons plus stage instinct.",
    buy: "A used Alesis Vortex runs around $270; to do it properly, a new Roland AX-Edge is $890-$1,050. The landmine is buying a MIDI-controller model without realizing it has no sound engine. Always confirm whether it makes sound on its own.",
    firstGoal: "Within a month, play one favorite synth solo standing up, without looking at the keys."
  },

  melodica: {
    how: "It makes sound the day it arrives. Search YouTube for melodica technique and start blowing melodies you already know. The point is not the keys but the breath. The moment you shape dynamics and vibrato with air, that grade-school instrument turns into an adult one.",
    lesson: "Self-study is fine. If elementary schoolers learn it, adults certainly can. Steal breath expression from YouTube and you are done.",
    buy: "A Suzuki M-37C or a Yamaha Pianica P-37D, $20-$100 is a keep-forever purchase. If you want the jazz and dub mood, Hohner is good too. The landmine is a $5 no-name toy; if the pitch is off, breath practice itself becomes meaningless.",
    firstGoal: "Within a month, play one song through with vibrato, and build the habit of draining and drying it afterward."
  },

  piano_accordion: {
    how: "Before you start, strap on the real thing. Weight and size (the number of bass buttons) are this instrument's first gate. The first couple of months go to memorizing the map of left-hand bass buttons you cannot see, and the moment right-hand melody, left-hand bass and bellows breathing come together, it suddenly gets fun.",
    lesson: "Lessons recommended. Learning bellows control and left-hand fingering from a person up front saves you months. Korea has a solid lesson network for older learners on the trot and Korean pop side.",
    buy: "For a first instrument, a used box of around 72 basses. Chinese-made new ones (Parrocel and the like) run $410-$820; used Italian or German ones (Weltmeister and friends) start at $1,050. The landmine is a $20 glittery accordion - that is decor, not an instrument. Antique boxes with unknown reed condition are a repair-bill bomb, so borrow an experienced eye from an accordion club when you go looking.",
    firstGoal: "Within a month, play one easy waltz with a right-hand melody over a left-hand C-G bass pattern."
  },

  bayan: {
    how: "It starts with memorizing the B-system button layout from blank paper. Method books and fingering charts are standard in Russian, so make friends with Russian bayan YouTube channels and a translator. If you have played piano accordion, the bellows and the left hand carry straight over.",
    lesson: "Lessons recommended, though teachers in Korea number a handful. Asking around for private lessons with an overseas-trained player, or Russian-language online lessons, is the real route.",
    buy: "Almost nothing circulates in Korea, so importing from Russia or Europe is standard. A new student instrument (Tula and the like) is $1,050-$2,750; used is a matter of luck. Concert grade (Jupiter) runs tens of millions, so do not even look. The landmine is buying a C-system chromatic thinking it is a bayan - the layout is mirrored and every book will be wrong. Always get a listing verified in an accordion community first.",
    firstGoal: "Within a month, play a one-octave scale with basic three-row B-system fingering without looking. This is the darkest stretch; it brightens after."
  },

  cba_c_system: {
    how: "Trust this instrument's magic - memorize one fingering and all 12 keys open up - and start by drilling the basic three-row fingering. French and Italian YouTube material is home base. Even after years of piano, buttons start from blank paper, but the ceiling is higher.",
    lesson: "Lessons recommended. Piano accordion is the Korean standard, so C-system teachers are rare. Finding one is luck; if you cannot, online lessons from abroad are the alternative.",
    buy: "Korean shops rarely carry them, so it means importing new or used from Europe. Chinese-made new ones start at $820, used Italian or French ones at $1,350. The landmine is buying without confirming the system - B-system (bayan) layouts are mirrored, so always check the first three rows in the listing photos. Instruments are scarce, so up-to-date listings from accordion communities get you halfway there.",
    firstGoal: "Within a month, play the same melody in three different keys with the same hand shape. That is the moment you feel why you chose this instrument."
  },

  diatonic_button_accordion: {
    how: "This one you learn by ear, not from a score. If Irish is the goal, English-language online courses like OAIM are effectively the formal curriculum, and you go tune by tune, memorizing a jig or a reel whole. The bodily sense that push and pull give different notes settles in about two weeks.",
    lesson: "Self-study is fine. Partly because Korean lessons barely exist, but also because this music was always passed on by ear, so online courses suit it perfectly.",
    buy: "Before buying, decide your target genre's standard key. Irish means B/C, norteno means GCF. That is nearly the whole story of buying this instrument. Chinese-made starters run from $270; Hohner (Corona and others) is $680-$1,250 imported. The landmine is buying without knowing the key - wrong tuning and you are playing music from another country all by yourself at a session.",
    firstGoal: "Within a month, learn one Irish polka whole without sheet music. Session debut tune, secured."
  },

  bandoneon: {
    how: "Check your resolve first. Right hand, left hand, push and pull are all different, so you memorize four disordered keyboards whole. Learning the button map is all of your first six months, and Piazzolla lies beyond that. Whether you love tango that much is the only entrance exam.",
    lesson: "Lessons essential. Korean players and teachers number a handful, but getting through this layout alone is penance. Somehow secure private lessons with one of the few players, or online lessons from abroad.",
    buy: "Finding an instrument is harder than learning it. A good used one (the legendary Doble A, say) is scarce worldwide at $4,100-$6,850, and importing used from Argentina or Europe plus repairs (effectively mandatory) is the real route. New workshop builds start at $6,150. The biggest landmine is a $210 'bandoneon-shaped accordion' - the layout and the sound are entirely different objects. Ask a Korean bandoneon or tango community to appraise any listing first.",
    firstGoal: "Within a month, get through the right-hand button map for one octave (push and pull separately). Manage that and you are qualified."
  },

  concertina: {
    how: "Decide on a system first. If you love Irish, Anglo; if you want to read melodies from the page, English (they are not interchangeable). After that it is one jig at a time through English-language online courses like OAIM. At 1.5kg, its greatest weapon is that you can practice sprawled on the sofa.",
    lesson: "Self-study is fine. Korean lessons barely exist, but the English-language online course ecosystem is well built, so the path is visible even alone.",
    buy: "The standard entry is the Concertina Connection Rochelle (Anglo), $410-$620 imported, and the Wren from Irish specialist McNeela is another regular. A $210 Chinese model will get you started, but the urge to upgrade arrives within a year or two. The landmine is a used one bought without checking the system - order Anglo, receive English, and you begin again from zero.",
    firstGoal: "Within a month, play one Irish jig through. Your mini orchestra on the knees is open for business."
  },

  diatonic_harmonica: {
    how: "Buy one in C and search YouTube for 'harmonica bending.' That is the whole curriculum. Week one is clean single notes; from week two you attack bending. The few weeks until your first bend lands are the biggest hurdle and the rite of passage. After that day, blues opens up.",
    lesson: "Self-study is fine. Thousands of YouTube harmonica teachers are standing by worldwide, and Korea has more classes, online and off, than you would expect.",
    buy: "A Hohner Special 20 in C, $25-$40 is the globally recognized starter. Suzuki Manji and Lee Oskar are equally right answers. The landmine is a $5 cheapie; the reeds will not bend, which only breeds the unfair suspicion that you have no talent. One genuine harp around $35 is plenty.",
    firstGoal: "Within a month, land the 4-hole bend. Your harmonica life divides into before and after."
  },

  chromatic_harmonica: {
    how: "Thanks to the slide button, one instrument covers all 12 keys - the gentleman of the harmonica world. Start with clean single notes and play melodies you know head on. Unlike the diatonic, tunes work with no bending at all. Listen to Toots Thielemans and set your sights high.",
    lesson: "Self-study is fine. YouTube material is plentiful, and you may well find a chromatic class inside a Korean harmonica course.",
    buy: "An Easttop starter at $55-$100 is the value gateway; to do it properly, a Hohner Chromonica 270 or a Suzuki SCX at $140-$270 is standard. Two landmines: buying this when blues bending is the goal (that is diatonic territory), and used instruments with unknown valve condition (valves are sensitive to saliva and temperature).",
    firstGoal: "Within a month, play one melody with semitones in it (Amazing Grace level) all the way through, and get friendly with the slide button."
  },

  tremolo_harmonica: {
    how: "This is the easiest harmonica to learn in Korea. Search for a harmonica class at a nearby culture center or welfare center and odds are high there is one; if not, start with YouTube lessons for the bokeum (tremolo) harmonica. From old folk songs to trot, blowing it drops a nostalgia filter over everything.",
    lesson: "Self-study is fine, but the class network at culture centers is among the best of any instrument in Korea, so if you also want the fun of playing together, signing up pays off.",
    buy: "A 21-hole tremolo from Miwha, Tombo or Suzuki at $15-$35 is the standard class instrument. Once you need semitones, holding a C and a C# stacked is the norm, so buying a set from the start is fine. It is a kind market with almost no landmines; just avoid unbranded souvenir-shop harmonicas.",
    firstGoal: "Within a month, play three songs you already know all the way through. Fast progress is this instrument's greatest charm."
  },

  saenghwang: {
    how: "The saenghwang, a Korean mouth organ, is the only gugak wind that plays chords, and it sounds on both the inhale and the exhale. Self-study books barely exist, so going with a teacher from day one is standard, and warming the instrument against your chest before playing is part of the basics (a cold one fogs its reeds and will not speak).",
    lesson: "Lessons essential. Fingering, breathing and instrument care all have to be learned from a person. Ask around for private lessons with gugak majors or one of the few active players, mostly in Seoul.",
    buy: "Imported 17-pipe instruments carried by gugak-sa (traditional instrument shops) run $410-$1,350. The market is small, so visiting a shop for advice beats hunting the lowest online price - tuning condition varies wildly at the same price. The landmine is importing a Chinese sheng from an overseas shop. They are sibling instruments, but the tuning systems differ and almost nowhere in Korea can tune or repair one, so aftercare hits a wall.",
    firstGoal: "Within a month, hold three basic chords steadily in both directions, inhaling and exhaling. That is the first phrase of the phoenix's cry."
  },

  sheng: {
    how: "This course goes straight to the sheng, the Chinese original behind the saenghwang. Start with the harmonica-style habit of sounding on both the inhale and the exhale, learn the covered-hole logic (a pipe speaks when its hole is closed), then move on to traditional chords of three or four stacked notes. Warming the instrument against your chest before playing is basic technique, exactly as with the saenghwang - a cold one fogs its reeds and will not speak.",
    lesson: "Even if you want lessons, Korea has effectively no dedicated sheng teachers - either borrow the basics from a saenghwang player, or accept the self-study route through Chinese-language online courses (books and videos are plentiful). Harmonica experience makes the inhaled notes come much faster.",
    buy: "A student 17-pipe from AliExpress or Taobao runs $170-$410 (with margin for shipping and duties). The biggest trap isn't the price but the aftercare - almost nowhere in Korea can tune or repair a sheng, so if yours arrives out of tune, sending it back is the only remedy. Checking reviews and the return policy matters more than choosing the model, and if what you actually want to learn is the Korean saenghwang, a gugak-sa (traditional instrument shop) consultation is the right answer - it's a separate market.",
    firstGoal: "Within a month, hold three chords seamlessly in both directions, inhaling and exhaling - that pipe-organ-in-your-arms sound is the first reward."
  }

};

const RandomTextGenerator = require("random-text-generator");

module.exports = {
  name: 'spit',
  description: 'Randomly generates a lyric based on an array of lyrics',
  execute: (msg, args) => {
    // Create an instance of the generator with default settings.
    let randomTextGenerator=new RandomTextGenerator();
    const lyrics = [
      'I knocked out so many teeth the tooth fairy went bankrupt',
      'Fucking punk you ain\'t a leader, nobody followed you, you was never shit your mother should\'ve swallowed you...',
      'I\'m tellin you shit is about to get drastic soon\nI\'m quick to blast a goon\nAnd break a motherfucker like a plastic spoon',
      'Some say I\'m ruthless, some say I\'m grim\nOnce a brother done broke into my house and I robbed him',
      'Old folks get mugged and raided\nCrimes are drug related\nAnd we live by the street rules that thugs created',
      'I got drug spots from New York to Canada\nCause Big L be fuckin\' with more keys than a janitor',
      'I made every little kid from my hood run\nI was just like that little bastard from the Good Son',
      'L da Harlem pimp baby, for real\nI got mo\' dimes dan dat Sprint Lady',
      'What’s this motherfuckin rap game without L?\nYo, that’s like jewels without ice\nThat’s like china without rice or the Holy Bible without Christ',
      'To be seen clean in the mean Beam\nIs every team’s dream; Big L’s a cream fiend\nWith more green than Springsteen',
      'I’m so ahead of my time my parents haven’t met yet',
      'Cause I got all of ‘em strung jack\nMy girls are like boomerangs\nNo matter how far I throw \'em, they come back',
      'Facts on tracks I recite well\nEverybody wanna be like Mike, but Mike wanna be like L',
      '"I got more riches than you, fuck more bitches than you\nOnly thing I haven\'t got is more stitches than you',
      'Breaking in cribs with a crowbar\nI wasn\'t poor, I was po\' - I couldn\'t afford the \'o-r\'',
      'Fuck my pussy, Doctor!\n',
      'I crank up lyrical flows, spit Spats, what\'s that?\nThe pattern records, don\'t touch the DATs, yo',
      'Suckers with mics that end up with tooth decay\nI, the Doctor, stop ya, in your world, rock ya',
      'Scratches in mattress business money reattaches worldwide\nDeep inside stops the diamond rocks',
      'Hello, this is the offices of Dr. Octagon.\nIf you have insurance or medical problems, I\'m here for you for any type\nof intestine surgery, rectal rebuilding, relocated saliva glands,\nand chimpanzee acne—and of course, moosebumps. You can call 1-800-PP5-1-doodoo. I\'m in your corner.',
      'First patient, pull out the skull, remove the cancer\nBreaking his back, chisel necks for the answer',
      'Supersonic-bionic-robot-voodoo power\nEquator ex my chance to flex skills on Ampex',
      'With power meters and heaters gauge anti-freeze\nOctagon oxygen, aluminum intoxicants',
      'More ways to blow blood cells in your face\nReact with four bombs and six fire missiles',
      'Armed with seven rounds of space doo-doo pistols\nYou may not believe, living on the Earth planet',
      'My skin is green and silver, forehead looking mean\nAstronauts get played, tough like the ukelele',
      'As I move in rockets, overriding, levels\nNothing\'s aware, same data, same system',
      'Radiation leakage on the promenade deck, access for authorized personnel only',
      'Disappear again, zapped like an android\nFace the fact, I fly on planets every day\nMy nucleus friend, prepare, I return again\nMy 7XL is not yet invented',
      'Ever told on a nigga? (nope)\nEver squeezed a trigger? (yup)',
      'Ever set a nigga up? (nope)\nEver helped a brother out when he was down on his luck? (yup)',
      'You a sap? (nope)\nYou a boss player, you a mack? (yup)',
      'Starving? (nope), Dinner? (yup)',
      'You still sell dope? (nope)\nNow you cleaner than a bar of Dove soap? (yup)',
      'Everybody get choices\nI choose to get money, I\'m stuck to this bread\nEverybody got choices\nThese bitches is choosin\', I\'m all in they head',
      'Ugh, lazy? (nope)\nGot dick that\'ll drive a ho crazy? (yup)',
      'Sleep? (nope), Bust moves, hella active in the streets? (yup)',
      'Star Wars? (nope), Yoda? (yup)',
      'Was it love at first sight? (nope)\nDid she ride you like a bike? (yup)\nWas it ripe? (nope), Was her pussy tight? (yup)',
      'Your team weak? (nope)\nYou respected in the stree-neets? (yup)',
      'I don\'t like suckas in my mix (mmm mmm)\nGot my name in their mouth like tooth picks (uh huh)',
      'I don\'t pay for pussy, not a John (mmm mmm)\nSucka shit contagious like a yawn (uh huh)',
      'Never will I go to war over a ho (mmm mmm)\nBitch I\'m a motha fuckin\' buffalo (uh huh)',
      'Out of date like old people? (mmm mmm)\nIn the loop like sewing needle? (uh huh)',
      'You weak at shootin\' dice? (mmm mmm)\nYou really \'bout that life? (uh huh)',
      'You eat booty? (mmm mmm)\nYou lick coochie? (uh huh)\nBiatch!',
      'Divorced from the streets? (mmm mmm)\nBe in Dubai with the sheiks? (uh huh)',
      'Pan handlin\'? (mmm mmm)\nShippin\' and handlin\'? (uh huh)',
      '24 hours to live, what would you do?\nJust get high, treat everyday like my birthday, smoke with the crew',
      'Before I check out, let me diamond my neck out\nBlow a mil on my niggas, fuck bitches like I was fresh out',
      'Fresh to death when I step out, every day approaching the gates\nI live a helluva life, baby, heaven can wait',
      'Everyday I pray to be as strong as Huey Newton\nBefore you pull that trigger, take a closer look at who you shooting',
      'Mirror image, nothing different, you just another slave\nTryin to succeed in these European\'s narcotics trade',
      'Worked all week, 140 dollars was all I made\nFuck a job, I\'d rather chop a rock and be chopping blades',
      'Gotta watch these cops cause I came too far to die in a cage\nWatch who you fuck, rather catch a bullet than die from AIDS',
      'Before I check out, let me diamond my neck out\nCrushing feelings on Broadway, I pulled that Monte SS out',
      'Buy my mom a new spot and make sure that bitch super decked out\nSwear I can\'t leave this Earth \'til I\'m sure that you never stress out',
      'Hit the lab so I can lay all the shit I didn\'t get to spit\nCould die tonight, but what I write they forever gon\' reminisce\nIt\'s Gangsta Gibbs',
      'Niggas be like "Fred, you ain\'t never lied"\nFuck the rap shit, my gangsta been solidified',
      'Still do my business on the side\nBitch, if you polices, then pay me no nevermind',
      'I was thuggin\', black and red laces in my number threes\nTake a pull up off the wood and let that motherfucker breathe',
      'Sit outside a busta crib and let that motherfucker leave\nWalk his ass back in and put him on his motherfuckin\' knees',
      'Thuggin\', never takin\' no for an answer\nMight just take a loss, but bitch, I’d rather take my chances',
      'This liquor got me lurkin\' where you live at in the night time\n59Fifty to the left, but I\'m in my right mind',
      'Thuggin\', pants gon\' be saggin\' til I\'m 40\n Still lyrically sharper than any short bus shawty',
      'Phonies ain\'t gon\' throw me in this minstrel show\nThese labels see how far up in they mouth my dick can go',
      'So gon\', choke on this meat, throw my song on repeat\nMight move away one day but I\'m always gon\' belong to the streets',
      'Selling you the science of the street rap\nEvery motherfuckin\' show I do is off the meat rack',
      'Never trippin\' on a dame, I\'m too cold for you broke hoes\nDon\'t let the knob hit your booty when the door close, bitch',
      'She let me hit it cause I\'m thuggin\'\nSquares need not apply, I\'m so fly I might fuck her cousin',
      '"We’re not against rap, but we\'re against those thugs"\nCan\'t be legit when every nigga in your clique sold drugs',
      'I hate to say it, ain\'t no need to be discreet\nIf she don\'t cop from me, she get it from a nigga up the street\nCause he thuggin\', and yo, she\'d probably suck his dick for it\nShe turnt out so it ain\'t shit to turn a trick for it',
      'My uncle last bitch put him on the glass dick\nTried to rob a man to feed his habit, he got blasted',
      'Cause in the past, my low-class black ass would serve my own fucking family members',
      'Overdose of sauce, no meat, just sauce',
      'I pushed a lot of pills, a lot of peas, a lot of powder, It\'s Gucci Mane La Fleur and jiggalo ya cowards.',
      'Gucci Mane broke; pussy nigga is ya stupid?',
      'Trap boys get bricks, athletes get trophies Gucci mane got cake, it\'s my birthday party Want a sweet 16? Thats two times forty!!',
      'My chain got ammonia, watch got the bird flu. Came to the club smellin like a pound of purple.',
      'Still got nasal flow I think I need some claritin.',
      'Girls are like buses, miss one, next fifteen, one comin.',
      'Dope fiend Willie used to finger fuck my rims',
      'Wanna be like Gucci? Little buddy eat your vegetables.',
      'That made me laugh ’cause I’m the king. I cut your head off like the jester',
      'My jewelry game sick, I think my jeweler need chemo',
      'I love bad bitches, so I’m a lesbian.',
      'I don’t feel you cuz I’m paraplegic, where’s my paralegal?',
      'Gucci trap-a-nometry I’m a hustle-ologist.Way I make it rain you could call me meteorologist',
      'Gucci so flossy, all my broads are bossy. Head til’ I’m nauseous, they keep me exhausted',
      'Gucci Mane crazy I might pull up on a zebra. Land on top a eagle smoke a joint of reefa',
      'Like a pigeon in the sky, I just shitted on your ride',
      'Ain\'t got no comparison and I ain\'t being arrogant.',
      'I ball all through the winter and I stunt all through the summer.',
      'I don\'t give a damn how you feel about me, I sip lean pure codeine and I don\'t give a damn what you say about me.',
      'I\'m icy, I\'m icy. So icy, so icy.',
      'A trapper but this rappin got me going places you\'ll never go!',
      'Think I’m a clone but if they cut me this sauce gon’ ooze out',
      'Hi my name is Gucci Mane, I’m addicted to everything. Bad bitch, fast cars, weed and promethazine',
      'If a man does not have the sauce, then he is lost. But the same man can be lost in the sauce.',
      'I stay higher than giraffe pussy',
      'Like a pigeon in the sky, I just shitted on your ride',
      'Gucci Mane broke; pussy nigga is ya stupid?',
      'Trap boys get bricks, athletes get trophies Gucci mane got cake, it\'s my birthday party Want a sweet 16? Thats two times forty!!',
      'Gucci so flossy, all my broads are bossy. Head til’ I’m nauseous, they keep me exhausted',
      'The same people that tried to blackball me forgot about two things: my black balls',
      'What’s a black Beatle anyway? A fucking roach? I guess that’s why they got me sitting in fucking coach',
      'Have you ever had sex with a pharaoh? Put the pussy in a sarcophagus. Now she claiming that I bruised her esophagus',
      'My apologies, are you into astrology. Cause I’m tryin’ to make it to Uranus',
      'I keep it 300 like the romans',
      'They be ballin in the D-League. I be speaking Swaghili',
      'And if life’s a bitch, bet she suck my dick, huh I bet she fucked the whole clique, huh',
      'Eatin Asian pussy, all I need was sweet and sour sauce',
      'I just talked to Jesus. He said “What up, Yeezus?!?” I said “Shit, I’m chillin tryna stack these millions',
      'Mayonnaise-colored Benz, I push Miracle Whips',
      'Rappers, I monkey flip \'em with the funky rhythm I be kickin\'\nMusician inflictin\' composition of pain\nI\'m like Scarface sniffin\' cocaine\nHoldin\' an M16, see with the pen I\'m extreme',
      'It drops deep as it does in my breath\nI never sleep—cause sleep is the cousin of death\nBeyond the walls of intelligence, life is defined.\nI think of crime when I\'m in a New York state of mind',
      'I sip the Dom P, watchin\' Gandhi \'til I\'m charged, then\nWritin\' in my book of rhymes, all the words past the margin.\nBehold the mic I\'m throbbin\', mechanical movement\nUnderstandable smooth shit that murderers move with\nThe thief\'s theme, play me at night, they won\'t act right',
      'Yet I\'m the mild, money-gettin\' style, rollin\' foul\nThe versatile, honey-stickin\', wild, golden child\nDwellin\' in the Rotten Apple, you get tackled\nOr caught by the devil\'s lasso, shit is a hassle',
      'There\'s no days for broke days\nWe sell it, smoke pays, while all the old folks pray\nTo Jesús, soakin\' their sins in trays of holy water',
      'I\'m the young city bandit, hold myself down single-handed\nFor murder raps, I kick my thoughts alone, get remanded\nBorn alone, die alone, no crew to keep my crown or throne\nI\'m deep by sound alone, caved inside, 1,000 miles from home.',
      'I rap for listeners, bluntheads, fly ladies, and prisoners\nHennessy-holders and old-school niggas, then I be dissin\'a\nUnofficial that smoke Woolie Thai\nI dropped out of Cooley High, gassed up by a cokehead cutie pie',
      'Yo, they call me Nas, I\'m not your legal type of fella\nMoët drinking, marijuana smoking street dweller\nWho\'s always on the corner, rolling up blessed\nWhen I dress, it\'s never nothing less than Guess',
      'Nas is like the Afrocentric Asian: half-man, half-amazin\'\n‘Cause in my physical I can express through song\nDelete stress like Motrin, then extend strong\nI drink Moët with Medusa, give her shotguns in Hell\nFrom the spliff that I lift and inhale; it ain\'t hard to tell',
      'This rhythmatic explosion\nIs what your frame of mind has chosen\nI\'ll leave your brain stimulated, niggas is frozen\nSpeak with criminal slang, begin like a violin\nEnd like Leviathan,it\'s deep? Well, let me try again',
      'My poetry\'s deep, I never fell\nNas\'raps should be locked in a cell; it ain\'t hard to tell',
      'I ain\'t goin\' back to jail, I ain\'t goin\' back to jail\nI got mo\' pussy to swell, and mo\' dreams to tell',
      'Bullets do fly through air when them guns p-poppin\'\nPistol swang to ya mouth, then the blood is gushin\'',
      'Cross killers in these streets, bullets will spray\nInnocent bystander can catch a stray ya dig?',
      'Put two dollars in the air, for these two dollar niggas\nThey get mad and they fuss, they don\'t shine like us',
      'I\'m flickin\' on you snakes, I got wood, leather stitchin\'\nClothes stickin\', cause ya ridin\' bucket, cloth seats itchin\'',
      'Couldn\'t get me, saw it in the clouds, like my nigga Rickey\nMr. James, all these superfreaks, out here tryna get me',
      'Wanna hit me, wanna say, they done been \'round the truth\nIn ya bed, or the booth, I\'m the ghetto Dr. Ruth',
      'When I do, step on out, moonlight, hit the Range\nPretty jewels they attract broads, like shiny thangs',
      'When I came, to ya hood, I was new face, in the place\nGame spitter from the North, so ya wanna catch a case',
      'Cause ya see me holl\'in\' at \'cha ex-girl, don\'t \'cha?\nMurder charge for a broad who don\'t even want \'cha',
      'You suckers crazy, so y\'all out here pushin\' daisies\nOver Daisy, she was on some purple hazey',
      'Had the baby, year later on my income\nTax, so a nigga could receive mo\' income',
      'Hangin\' stout broads, \'round my arms, decoration\nThese punks give me dap, same time playa hation',
      'Erasin\', you lamers, hatin\' got\'cha famous\nConfronted by the broad, got shot in ya anus\nHeinous, heard they took the slugs out\'cha dookie roll\nGun powder and the blood burn in ya bootyhole',
      'Wanna fight, my nigga, wanna shoot, my nigga\nTalk ya gal out her cap, when ya loot my nigga',
      'Do you, my nigga, fall in love wit\' these tramps\nGoin\' raw, on her, and she did the whole Camp?\nBut you rest havin\' that, knowin\' that, she\'ll go\nLickin\' balls, suckin\' cat, knees burnt from the flo\'',
      'She got a bubble gum cap with a Gucci dats snappin\'\nWith some rhino legs and a booty that\'s flappin\'\nWith some fire-oh head \'cause you know we love cappin\'\nGot her toes done up with her fingernails matchin\'',
      'Here dat big ol\' butt that you\'re walkin\' cross the street with\nPeep this, for a happy meal can I squeeze it?',
      'Them freaky freaks I heard on the loose, let ya pockets out\nGot trick niggaz watchin\' your caboose with they wallets out',
      'You should stop, lil\' somethin\' somethin\' bad to the bone\nThat ain\'t a monkey hangin\' off ya back that\'s Donkey Kong',
      'Good googly moogly, that thang is juicy',
      'How you gon\' prance around with all that, sayin\' you ain\'t all that, Everybody at ya wanna hit ya like a ball bat',
      'That thang make ya look back, be like man who is that\nYou can see a hiny on a hiny I\'m pursuin\' that',
      'A dirty south hoody rat tryin\' to hold goodies back Waist like a wasp, butt cheeks pokin\' really fat',
      'I\'m Crown Vic old school, squeezin\' on her boo-boo\nHugged up, pokin\' in her brains so what ya wanna do',
      'You can call me Mister Whipple, I won\'t do no harmin\'\nNever to the Charmin, come holla at me woman',
      'Bwok bwok, chicken chicken\nBwok bwok, chicken heads',
      'Bald-head skally-wag\nAin\'t got no hair in back\nGelled up weaved up\nYo hair is messed',
      'Bitch don\'t play dumb\nStick out your tongue\nAnd let me take a plunge\nFor plenty you don\'t have to suck your thumb\nI got yum-yum',
      'Slob on my knob\nLike corn on the cob\nCheck in with me\nAnd do your job\nlay on the bed\nAnd give me head\nDon\'t have to ask\nDon\'t have to beg',
      'These bitches got me goin\'\nThe feelin\' of a warm mouth\nMan I tell you bout\' these hoes chewin\' in the South',
      'On through the wall now she howlin\' like a dog swept poor\nWe hit the floor it don\'t quit\nAnother one break it\'s just another victim of Lord Infamous late night tip',
      'Lord Infamous, the futuristic rowdy bounty hunter\nNigga, I come from the land down under',
      'Ten times out of twelve\nNine times out of ten\nGansta Boo is in it to win',
      'When I say weak ass, you say bitch!\nWeak ass, bitch!, weak ass, bitch!',
      'You ol\' pussy-ass, cake-ass, punk-ass, trick-ass, sucker-ass,\nFuck-ass, dick-in-the-booty-ass, K-Y Jelly-packing-ass nigga',
      'Yeah, nigga, y\'all know the motherfucking sco\', y\'all non-snorters, non-smokers, non-sippers,\nGet the fuck up out of here, bitch\nNigga, it\'s some sipping-ass, pouring up-ass, smoking-ass, getting high-ass niggas in here,\nThree 6, UGK, nigga, we putting it down in this motherfucker\nAnd we ain\'t playing wit\'chu, y\'all know the motherfucking sco\', homie\nNow pour it up, nigga.',
      'People always asking me, is the Three 6 high on that?\nRolling on them X pills, stuttering, pup-pup powder packs',
      'Woah, where the weed at, ain\'t like that we need that\nNyQuil will slow me down, something that keep me easy\nNothing like that yella yella, that\'ll have you itching, man\nTalking like, what\'s up, fool? Vocal chords sounding lame',
      'Gone on coke, eyes all bucked, this here shit\'ll knock you down\nKnock you out, make you fall asleep when you\'re on them wheels',
      'She popped her a pill of X, and drank on some orange juice\nAnd just when you thought she was freaking, she done got super loose',
      'Juice got weed Juice got pills\nJuice got the work on the corner cuttin deals',
      'We ball out in the club wit our niggaz stayin trill\nWe never wrote a check just them big face bills\nA playa drinkin Makers, Marker, cranberry vodka\nWearin a mink coat thats furry as Chewbacca',
      'Nose all runny\nFound a snow bunny\nTake her to da\' crib\nMake her drink cummy',
      'Cocaine Blaine that\'s my dog\nI called him up to house this slut\nWe gon\' fuck her in the back of da\' bus\nAnd fill her nose up full o\' dat\' dust',
      'In da\' bathroom \'bout two whole hours\nGettin\' real high passed out on the floor\nFuck that shit niggas\' on the frame\nTake \'em 1 on 1 back in the game',
      'Used to be my nigga\nNow you fake\nBut I stomp on you trick in the grass\nYou little snake bitch'
    ];
    let random;
    for (let lyric of lyrics) {
      randomTextGenerator.learn(lyric);
    }
    for (let i = 0; i < 12; i++) {
      random = randomTextGenerator.generate();
    }
    msg.channel.send(random);
  }
};
let asteria = 0;
let clickPower = 1;
let passiveIncome = 0;
let hasHairDye = false;
let hasGlasses = false;
let hasHelloKittyHat = false;
let hasDogsteria = false;
let VyzerBought = false;
let LytraBought = false;
let barelyhumanBought = false;
let kets4ekiBought = false;
let kmrnxoBought = false;


window.stoleAll = false;

const asteriaDisplay = document.getElementById("asteriaDisplay");
const passiveRateDisplay = document.getElementById("passiveRate");
const activeRateDisplay = document.getElementById("activeRate");
let clonnexMimicIncome = 0;
let clonnexInterval = null;


const clickBtn = document.getElementById("clickBtn");

const activeItems = {
    anarchistSanctuary: { cost: 50,currentCost: 50,owned: 0,image: "assets/sanctuary.jpeg", itemDetails:"+1 click pwr" }, // Unlocks fanart
    kets4eki: {cost: 500,currentCost: 500,owned: 0,image: "assets/kets4eki.jpeg", itemDetails:"Unlocks songs w/ kets4eki, click power x2" , locked: true}, //unlocks kets4eki collab
    sunglasses: {cost: 150,currentCost: 150,owned: 0,image: "assets/glasses_spikey.png", itemDetails:"more swag", locked: true },
    hairDye: {cost: 750,currentCost: 750,owned: 0,image: "assets/hairdye.png" , itemDetails:"red hair", locked: true},
    helloKittyHat: {cost: 1000,currentCost: 1000,owned: 0,image: "assets/kittyhat.png", itemDetails:"Update Asteria swag" , locked: true }, // Unlocks GALORE achievement
    dogsteria: {cost: 409,currentCost: 409,owned: 0,image: "assets/dogsteria.jpg", itemDetails:"Update Asteria swag" , locked: true },
    clonnex: {cost: 2000,currentCost: 2000,owned: 0,image: "assets/clonnex.png", itemDetails:"Every 30s get a random passive item's value", locked: true },
    _6arelyhuman: {cost: 6000,currentCost: 6000,owned: 0,image: "assets/6arelyhuman.jpeg", itemDetails:"10s multiplier: Active x2, Passive x3", locked: true},
    cuteSongsForGangsters: {cost: 66666,currentCost: 66666,owned: 0,image: "assets/cutesongsforgangsters.jpeg", itemDetails:"Unlocks album songs" , locked: true},
    BloodSea: {cost: 8000,currentCost: 8000,owned: 0,image: "assets/bloodocean.png"  , itemDetails:"A sea of blood", locked: true},
    hatsuneMiku: {cost: 10000,currentCost: 10000,owned: 0,image: "assets/miku2.png" , itemDetails:"MIKU MIKU BEAAAAM", locked: true},
    staff: {cost: 15000,currentCost: 15000,owned: 0,image: "assets/staffofasteriacropped.PNG" , itemDetails:"Unlocks album covers where it is seen", locked: true}, // Unlocks UltraInstinct
    Studio: {cost: 55555,currentCost: 55555,owned: 0,image: "assets/studioLytranAstee.jpg" , itemDetails:"Unlock more collabs", locked: true}, //Unlocks Lytra
    drift: {cost: 100000,currentCost: 100000,owned: 0,image: "assets/drift.jpg", itemDetails:"80% less chance of Britney" , locked: true }, 
    Lytra: {cost: 500007,currentCost: 500007,owned: 0,image: "assets/Lytra.jpg", itemDetails:"Unlocks songs with Lytra", locked: true}, // Unlocks Lytra Collabs
    Vyzer: {cost: 654321,currentCost: 654321,owned: 0,image: "assets/vyzer.jpg" , itemDetails:"Has a kazoo.", locked: true},
    Kazoo2death: {cost: 2020666,currentCost: 2020666,owned: 0,image: "assets/kazoo2death.jpg"  , itemDetails:"Unlocks Vyzer", locked: true },
    Wasty: {cost: 999999,currentCost: 999999,owned: 0,image: "assets/wasty.jpeg" , itemDetails:"Unlocks songs with Wasty", locked: true}, // Unlocks Wasty Collabs -TBD
    Rave2death: {cost: 220666,currentCost: 2020666,owned: 0,image: "assets/rave2death.jpg" , itemDetails:"Unlocks Rave2death album songs in passive items", locked: true }, // Unlocks Rave2death album songs in passive items
	  PARTY4LIFE: {cost: 444444, currentCost: 444444, owned: 0, image: "assets/party4life.jpg" , itemDetails:"Unlocks PARTY4LIFE album songs in passive items", locked: true }, // Unlocks PARTY4LIFE album songs in passive items
    FBM: {cost: 111111,currentCost: 111111,owned: 0,image: "assets/disstrack.jpeg" , itemDetails:"80% less chance of britney", locked: true}, // 80% less chance of Britney
    EveryPill: {cost: 420420,currentCost: 420420,owned: 0,image: "assets/everypill.jpeg" , itemDetails:"we takin every pill tonight", locked: true},
    HubiTheKid: {cost: 600600,currentCost: 600600,owned: 0,image: "assets/hubithekid.jpeg" , itemDetails:"DJ", locked: true},
    worldwide: {cost: 305,currentCost: 305,owned: 0,image: "assets/worldwide.jpg", itemDetails:"_", locked: true},
    ewsteria: {cost: 357531,currentCost: 357531, owned: 0,image: "assets/ewsteria.jpg" , itemDetails:"Ewww", locked: true},
    lolipopsteria: {cost: 70771909,currentCost: 70771909,owned: 0,image: "assets/lolipopsteria.jpg" , itemDetails:"Nom", locked: true},
    micAsteria: {cost: 747474,currentCost: 747474,owned: 0,image: "assets/micasteria.jpg" , itemDetails:"Mogchrophone", locked: true},
    studioAsteria: { cost: 570000, currentCost: 57000, owned: 0,image: "assets/studiosteria2.png", itemDetails: "Fire vocals", locked: true },
    nomsteria: { cost: 1000000, currentCost: 1000000, owned: 0,image: "assets/nomsteria.png", itemDetails: "Will he turn into a strawberry", locked: true },
    screamsteria: { cost: 2000, currentCost: 2000, owned: 0,image: "assets/screamsteria.jpg", itemDetails: "AAAAAAAAAAA", locked: true  },
    ragesteria: { cost: 4444, currentCost: 4444, owned: 0,image: "assets/ragesteria.jpg", itemDetails: "We lost it all", locked: true },
    scremingasteria: { cost: 8000000, currentCost: 8000000, owned: 0,image: "assets/sreamingasteria.png", itemDetails: "I am scared.", locked: true  },
    seesteria: { cost: 53333, currentCost: 53333, owned: 0,image: "assets/seestreia.jpg", itemDetails: "Just Curious", locked: true },
    sideEye: { cost: 533333, currentCost: 533333, owned: 0,image: "assets/sideyeasteria.jpg", itemDetails: "Criminal offensive side-eye", locked: true },
    EyesOnME: { cost: 10000000, currentCost: 10000000, owned: 0,image: "assets/eyesonme.jpg", itemDetails: "Eyes on me baby", locked: true },
    swordNecklace: {cost: 50000000,currentCost: 50000000,owned: 0,image: "assets/swordnecklace.png" , itemDetails:"Adds swag to Asteria", locked: true},
    GiveMeMore: {cost: 5500000,currentCost: 5500000,owned: 0,image: "assets/givememore.jpg" , itemDetails:"_", locked: true},
    Odetari: {cost: 6660000,currentCost: 6660000,owned: 0,image: "assets/odetari.webp"  , itemDetails:"_", locked: true},
    Ext3r4: {cost: 343434,currentCost: 343434,owned: 0,image: "assets/Ext3r4.jpeg"  , itemDetails:"_", locked: true},
    Kalia: {cost: 444444,currentCost: 444444,owned: 0,image: "assets/kalia.jpeg"  , itemDetails:"_", locked: true},
    Eclipse: {cost: 333333,currentCost: 333333,owned: 0,image: "assets/eclipse.jpeg" , itemDetails:"_" , locked: true},
    _2504: {cost: 2504,currentCost: 2504,owned: 0,image: "assets/2504.jpeg"  , itemDetails:"_", locked: true},
    kmrnxo: {cost: 88888,currentCost: 88888,owned: 0,image: "assets/kmrnxo.jpeg"  , itemDetails:"_", locked: true},
    pink_luu: {cost: 150000,currentCost: 150000,owned: 0,image: "assets/pinkluu.jpg"  , itemDetails:"_", locked: true},
    pluto: {cost: 250000,currentCost: 250000,owned: 0,image: "assets/pluto.jpeg"  , itemDetails:"_", locked: true},
    D3r: {cost: 333000,currentCost: 333000,owned: 0,image: "assets/der.jpeg"  , itemDetails:"_", locked: true},
    M1v: {cost: 1000000,currentCost: 1000000,owned: 0,image: "assets/m1v.jpeg"  , itemDetails:"_", locked: true},
    Sickboyrari: {cost: 50000,currentCost: 50000,owned: 0,image: "assets/sickboyrari.jpeg"  , itemDetails:"_", locked: true},
    AsteriaArchive: {cost: 4444000,currentCost: 4444000,owned: 0,image: "assets/asteriaarchive2.jpeg"  , itemDetails:"_", locked: true},
    Nosgov: {cost: 1000000,currentCost: 1000000,owned: 0,image: "assets/nosgov.jpeg"  , itemDetails:"_", locked: true},
    AsteriaArchive1: {cost: 1000000,currentCost: 1000000,owned: 0,image: "assets/asteriaarchive1.jpeg"  , itemDetails:"_", locked: true},
    AsteriaArchive2: {cost: 2000000,currentCost: 2000000,owned: 0,image: "assets/asteriaarchive2.jpeg"  , itemDetails:"_", locked: true,},
    AsteriaArchive3: {cost: 3000000,currentCost: 3000000,owned: 0,image: "assets/asteriaarchive3.jpeg"  , itemDetails:"_", locked: true,},
    AsteriaArchive4: {cost: 4000000,currentCost: 4000000,owned: 0,image: "assets/asteriaarchive4.jpeg"  , itemDetails:"_", locked: true,},
    OldScr4psss: {cost: 4444444,currentCost: 4444444,owned: 0,image: "assets/oldscraps.jpeg"  , itemDetails:"_", locked: true,},
    Watchout: {cost: 50000000,currentCost: 50000000,owned: 0,image: "assets/watchout.jpg"  , itemDetails:"_", locked: true,},
    IWassOffAPillInPrzechodnia: {cost: 80000000,currentCost: 80000000,owned: 0,image: "assets/pillarchive.jpg" , itemDetails:"_",locked: true },
    Eye: {cost: 100000000,currentCost: 100000000,owned: 0,image: "assets/eye.jpg"  , itemDetails:"_", locked: true},


    };

    const passiveItems = {
        OneMoreTime: { baseCost: 50, currentCost: 50, income: 1, owned: 0, image: "assets/onemoretime.jpeg" }, //unlock ketseki
        Fanart: { baseCost: 150, currentCost: 150, income: 2, owned: 0, image: "assets/instagram.webp", locked: true },
        Photoshoot: { baseCost: 200, currentCost: 200, income: 4, owned: 0, image: "assets/photoshoot.png", locked: true }, //unlocks takeapic
        TakeAPic: { baseCost: 500, currentCost: 500, income: 5, owned: 0, image: "assets/takeapic.jpg", locked: true }, //unlocks 6arelyhuman, unlocks socials post
        GALORE: { baseCost: 1000, currentCost: 1000, income: 10, owned: 0, image: "assets/galore.jpg" , locked: true },
        SocialsPost: { baseCost: 2000, currentCost: 2000, income: 12, owned: 0, image: "assets/socials.png", locked: true }, //unlocks dogsteria
        WhatYouWant: { baseCost: 5000, currentCost: 5000, income: 15, owned: 0, image: "assets/whatyouwant.jpg", locked: true },
        UltraInstinct: { baseCost: 20000, currentCost: 20000, income: 20, owned: 0, image: "assets/ultrainstinct.jpg", locked: true},
        YouCantHide: { baseCost: 100000, currentCost: 100000, income: 100, owned: 0, image: "assets/YouCantHide.png", locked: true },
        W4steAway: { baseCost: 44444, currentCost: 44444, income: 44, owned: 0, image: "assets/wasteaway.jpeg", locked: true },
        MESSAGES: { baseCost: 60000, currentCost: 60000, income: 50, owned: 0, image: "assets/messages.jpeg", locked: true },
        Bloodbath: { baseCost: 85000, currentCost: 85000, income: 55, owned: 0, image: "assets/bloodbath.png", album: "CuteSongsForGangsters", locked: true },
        Hypnotized: { baseCost: 100000, currentCost: 100000, income: 60, owned: 0, image: "assets/cutesongsforgangsters.jpg", album: "CuteSongsForGangsters", locked: true },
        RedMercedes: { baseCost: 150000, currentCost: 150000, income: 66, owned: 0, image: "assets/redmercedes.png", album: "CuteSongsForGangsters", locked: true },
        FadeAway: { baseCost: 200000, currentCost: 200000, income: 70, owned: 0, image: "assets/cutesongsforgangsters.jpg", album: "CuteSongsForGangsters", locked: true },
        MakeMeFamous: { baseCost: 300000, currentCost: 300000, income: 75, owned: 0, image: "assets/cutesongsforgangsters.jpg", album: "CuteSongsForGangsters", locked: true },
        BloodAsPaint: { baseCost: 400000, currentCost: 400000, income: 80, owned: 0, image: "assets/bloodaspaint.jpg", locked: true },
        FasterNHarder: { baseCost: 550000, currentCost: 550000, income: 90, owned: 0, image: "assets/fasternharder.jpg", locked: true },
        PartyLikeThe80s: { baseCost: 600000, currentCost: 600000, income: 92, owned: 0, image: "assets/party80.jpeg" , locked: true},
        Skibidi: { baseCost: 660000, currentCost: 660000, income: 93, owned: 0, image: "assets/skibidi.jpg", locked: true },
        HAHA: { baseCost: 696969, currentCost: 696969, income: 69, owned: 0, image: "assets/haha.jpg",locked: true },
        HoldUp: { baseCost: 700000, currentCost: 700000, income: 100, owned: 0, image: "assets/holdup.jpeg", locked: true }, 
        iKnow: { baseCost: 750000, currentCost: 750000, income: 102, owned: 0, image: "assets/iknow.jpg", locked: true },
        RaveLife: { baseCost: 800000, currentCost: 800000, income: 104, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death", locked: true }, //unlocks wasty
        Faded: { baseCost: 855000, currentCost: 855000, income: 105, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death", locked: true },
        DollarBills: { baseCost: 900000, currentCost: 900000, income: 100, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death", locked: true },
        TynaFuck: { baseCost: 950000, currentCost: 950000, income: 100, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death" , locked: true},
        ComeOn: { baseCost: 1000000, currentCost: 1000000, income: 100, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death" , locked: true},
        IFuckedHerFriend: { baseCost: 1500000, currentCost: 1500000, income: 100, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death" , locked: true},
        FeelingNothing: { baseCost: 2500000, currentCost: 250000, income: 100, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death" , locked: true},
        CountItUp: { baseCost: 3000000, currentCost: 3000000, income: 100, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death" , locked: true},
        TellMeLies: { baseCost: 4100000, currentCost: 4100000, income: 100, owned: 0, image: "assets/tellmelies.jpeg", locked: true },
        Warsaw: { baseCost: 4500000, currentCost: 4500000, income: 100, owned: 0, image: "assets/warsaw.jpg", locked: true },
        BodyOnTheFloor: { baseCost: 5100000, currentCost: 5100000, income: 100, owned: 0, image: "assets/BodyOnTheFloor.jpeg", locked: true },
        HAHARemix: { baseCost: 6100000, currentCost: 6100000, income: 100, owned: 0, image: "assets/haharemix.jpeg", locked: true },
        PicknChoose: { baseCost: 7100000, currentCost: 7100000, income: 100, owned: 0, image: "assets/PicknChoose.jpg", locked: true },
        ThrowIt: { baseCost: 8100000, currentCost: 8100000, income: 100, owned: 0, image: "assets/ThrowIt.jpg", locked: true },
        VampireFangs: { baseCost: 9100000, currentCost: 9100000, income: 100, owned: 0, image: "assets/VampireFangs.jpeg", locked: true },
        Monster: { baseCost: 11100000, currentCost: 11100000, income: 100, owned: 0, image: "assets/monster1.jpg", locked: true },
        MONSTER: { baseCost: 12500000, currentCost: 12500000, income: 100, owned: 0, image: "assets/monster.jpg", locked: true },
        DigHisGrave: { baseCost: 13000000, currentCost: 13000000, income: 100, owned: 0, image: "assets/DigHisGrave.jpg", locked: true },
        DontUnderstandIt: { baseCost: 13200000, currentCost: 13200000, income: 100, owned: 0, image: "assets/DontUnderstandIt.jpg", locked: true },
        go_hard: { baseCost: 13500000, currentCost: 13500000, income: 100, owned: 0, image: "assets/gohard.jpg", locked: true },
        BiggestFan: { baseCost: 14100000, currentCost: 14100000, income: 100, owned: 0, image: "assets/BiggestFan.jpeg", locked: true },
        YouKnowUs: { baseCost: 14500000, currentCost: 14500000, income: 100, owned: 0, image: "assets/YouKnowUs.jpg", locked: true },
        SeeThrough: { baseCost: 15000000, currentCost: 15000000, income: 100, owned: 0, image: "assets/SeeThrough.jpg", locked: true },
        WhatdISay: { baseCost: 15500000, currentCost: 15500000, income: 100, owned: 0, image: "assets/WhatdISay.jpg", locked: true },        
        NoEscape: { baseCost: 15900000, currentCost: 15900000, income: 100, owned: 0, image: "assets/NoEscape.jpg", locked: true },
        GoneForSoLong: { baseCost: 16200000, currentCost: 16200000, income: 100, owned: 0, image: "assets/GoneForSoLong.jpg", locked: true },
        EmoGirl: { baseCost: 16500000, currentCost: 16500000, income: 100, owned: 0, image: "assets/emogirl.jpeg", locked: true },
        DieForYou: { baseCost: 17000000, currentCost: 17000000, income: 100, owned: 0, image: "assets/DieForYou.jpg", locked: true },
        EyesOnMe: { baseCost: 17500000, currentCost: 17500000, income: 100, owned: 0, image: "assets/EyesOnMe.jpg", locked: true },
        OutOfBody: { baseCost: 17800000, currentCost: 17800000, income: 100, owned: 0, image: "assets/OutOfBody.jpeg", locked: true },
        WorstNightm4re: { baseCost: 18000000, currentCost: 18000000, income: 100, owned: 0, image: "assets/WorstNightm4are.jpeg", locked: true },
        Exotic: { baseCost: 18200000, currentCost: 18200000, income: 100, owned: 0, image: "assets/Exotic.jpeg", locked: true },
        SecondChances: { baseCost: 18500000, currentCost: 18500000, income: 100, owned: 0, image: "assets/SecondChances.jpg", locked: true },
        RockThatShit: { baseCost: 18700000, currentCost: 18700000, income: 100, owned: 0, image: "assets/RockThatShit.jpg", locked: true },
        WonderWhy: { baseCost: 19000000, currentCost: 19000000, income: 100, owned: 0, image: "assets/WonderWhy.jpg", locked: true },
        Fusion: { baseCost: 19100000, currentCost: 19100000, income: 100, owned: 0, image: "assets/Fusion.jpg", locked: true },
        IDidntNeedYouAnyway: { baseCost: 19500000, currentCost: 19500000, income: 100, owned: 0, image: "assets/IDidntNeedYouAnyway.jpeg", locked: true },
        Paranoid: { baseCost: 19700000, currentCost: 19700000, income: 100, owned: 0, image: "assets/Paranoid.jpg", locked: true },
        LifeSoTough: { baseCost: 19900000, currentCost: 19900000, income: 100, owned: 0, image: "assets/lifesotough.jpeg", locked: true },
        PROJECTX: { baseCost: 20000000, currentCost: 20000000, income: 100, owned: 0, image: "assets/projectx.jpg", locked: true },
        TOO_MANY_LINES: { baseCost: 25000000, currentCost: 25000000, income: 100, owned: 0, image: "assets/toomanylines.jpg", locked: true },
        SomethingsNotOkay: { baseCost: 2555555, currentCost: 2555555, income: 2, owned: 0, image: "assets/somethingsnotokay.jpg", locked: true },

        FlexLikeThis: { baseCost: 22244063, currentCost: 22244063, income: 2224406, owned: 0, image: "assets/asteriaarchive1.jpeg", locked: true, album: "AsteriaArchive1" },
        Numb: { baseCost: 22466504, currentCost: 22466504, income: 2246650, owned: 0, image: "assets/asteriaarchive1.jpeg", locked: true, album: "AsteriaArchive1" },
        SoGone: { baseCost: 22691169, currentCost: 22691169, income: 2269116, owned: 0, image: "assets/asteriaarchive1.jpeg", locked: true, album: "AsteriaArchive1" },
        WayTooFar: { baseCost: 22918081, currentCost: 22918081, income: 2291808, owned: 0, image: "assets/asteriaarchive1.jpeg", locked: true, album: "AsteriaArchive1" },
        GoDown: { baseCost: 23147261, currentCost: 23147261, income: 2314726, owned: 0, image: "assets/asteriaarchive1.jpeg", locked: true, album: "AsteriaArchive1" },
        BadDreams: { baseCost: 23378733, currentCost: 23378733, income: 2337873, owned: 0, image: "assets/asteriaarchive1.jpeg", locked: true, album: "AsteriaArchive1" },
        NotEvenCudKnow: { baseCost: 23612520, currentCost: 23612520, income: 2361252, owned: 0, image: "assets/asteriaarchive1.jpeg", locked: true, album: "AsteriaArchive1" },
        OneTakeFreestyle: { baseCost: 23848645, currentCost: 23848645, income: 2384864, owned: 0, image: "assets/asteriaarchive1.jpeg", locked: true, album: "AsteriaArchive1" },
        Rockst4r: { baseCost: 24087131, currentCost: 24087131, income: 2408713, owned: 0, image: "assets/rockst4r.jpg", locked: true, album: "AsteriaArchive1" },
        DemonInDisguise: { baseCost: 24328002, currentCost: 24328002, income: 2432800, owned: 0, image: "assets/demonindisguise.jpeg", locked: true, album: "AsteriaArchive1" },
        Tonight: { baseCost: 24571282, currentCost: 24571282, income: 2457128, owned: 0, image: "assets/asteriaarchive1.jpeg", locked: true, album: "AsteriaArchive1" },
        LikeThat: { baseCost: 24816994, currentCost: 24816994, income: 2481699, owned: 0, image: "assets/asteriaarchive1.jpeg", locked: true, album: "AsteriaArchive1" },
        Attachments: { baseCost: 25065164, currentCost: 25065164, income: 2506516, owned: 0, image: "assets/asteriaarchive1.jpeg", locked: true, album: "AsteriaArchive1" },

        Mia: { baseCost: 25315815, currentCost: 25315815, income: 2531581, owned: 0, image: "assets/asteriaarchive2.jpeg", locked: true, album: "AsteriaArchive2" },
        EyesClosed: { baseCost: 25568973, currentCost: 25568973, income: 2556897, owned: 0, image: "assets/asteriaarchive2.jpeg", locked: true, album: "AsteriaArchive2" },
        ComingDown: { baseCost: 25824663, currentCost: 25824663, income: 2582466, owned: 0, image: "assets/asteriaarchive2.jpeg", locked: true, album: "AsteriaArchive2" },
        AlreadyDead: { baseCost: 26082909, currentCost: 26082909, income: 2608290, owned: 0, image: "assets/asteriaarchive2.jpeg", locked: true, album: "AsteriaArchive2" },
        TookOverTheWorld: { baseCost: 26343738, currentCost: 26343738, income: 2634373, owned: 0, image: "assets/asteriaarchive2.jpeg", locked: true, album: "AsteriaArchive2" },
        TooAlive: { baseCost: 26607175, currentCost: 26607175, income: 2660717, owned: 0, image: "assets/asteriaarchive2.jpeg", locked: true, album: "AsteriaArchive2" },
        
        LetYouDown: { baseCost: 23100000, currentCost: 23100000, income: 2310000, owned: 0, image: "assets/asteriaarchive3.jpeg", locked: true, album: "AsteriaArchive3" },
        FaceOfDeath: { baseCost: 23600000, currentCost: 23600000, income: 2360000, owned: 0, image: "assets/asteriaarchive3.jpeg", locked: true, album: "AsteriaArchive3" },
        ISeeYouAsAnEnemy: { baseCost: 24100000, currentCost: 24100000, income: 2410000, owned: 0, image: "assets/asteriaarchive3.jpeg", locked: true, album: "AsteriaArchive3" },
        WritersPapers: { baseCost: 24600000, currentCost: 24600000, income: 2460000, owned: 0, image: "assets/asteriaarchive3.jpeg", locked: true, album: "AsteriaArchive3" },
        Slower: { baseCost: 25100000, currentCost: 25100000, income: 2510000, owned: 0, image: "assets/asteriaarchive3.jpeg", locked: true, album: "AsteriaArchive3" },
        FosteredAlcoholism: { baseCost: 25600000, currentCost: 25600000, income: 2560000, owned: 0, image: "assets/asteriaarchive3.jpeg", locked: true, album: "AsteriaArchive3" },
        FeelMyLuv: { baseCost: 26100000, currentCost: 26100000, income: 2610000, owned: 0, image: "assets/asteriaarchive3.jpeg", locked: true, album: "AsteriaArchive3" },
        DayNNight: { baseCost: 26600000, currentCost: 26600000, income: 2660000, owned: 0, image: "assets/asteriaarchive3.jpeg", locked: true, album: "AsteriaArchive3" },
        BaddestBitchOut: { baseCost: 27100000, currentCost: 27100000, income: 2710000, owned: 0, image: "assets/asteriaarchive3.jpeg", locked: true, album: "AsteriaArchive3" },
        HellNBackFreestyle: { baseCost: 27600000, currentCost: 27600000, income: 2760000, owned: 0, image: "assets/asteriaarchive3.jpeg", locked: true, album: "AsteriaArchive3" },
        
        LetMeBreathe: { baseCost: 28100000, currentCost: 28100000, income: 2810000, owned: 0, image: "assets/asteriaarchive4.jpeg", locked: true, album: "AsteriaArchive4" },
        IDontLikeYou: { baseCost: 28600000, currentCost: 28600000, income: 2860000, owned: 0, image: "assets/asteriaarchive4.jpeg", locked: true, album: "AsteriaArchive4" },
        RightHere: { baseCost: 29100000, currentCost: 29100000, income: 2910000, owned: 0, image: "assets/asteriaarchive4.jpeg", locked: true, album: "AsteriaArchive4" },
        TimeAndTimeAgain: { baseCost: 29600000, currentCost: 29600000, income: 2960000, owned: 0, image: "assets/asteriaarchive4.jpeg", locked: true, album: "AsteriaArchive4" },
        BloodOnMyJeans: { baseCost: 30100000, currentCost: 30100000, income: 3010000, owned: 0, image: "assets/asteriaarchive4.jpeg", locked: true, album: "AsteriaArchive4" },
        FvckWithMe: { baseCost: 30600000, currentCost: 30600000, income: 3060000, owned: 0, image: "assets/asteriaarchive4.jpeg", locked: true, album: "AsteriaArchive4" },
        IMissMeToo: { baseCost: 31100000, currentCost: 31100000, income: 3110000, owned: 0, image: "assets/asteriaarchive4.jpeg", locked: true, album: "AsteriaArchive4" },
        Deathrow: { baseCost: 31600000, currentCost: 31600000, income: 3160000, owned: 0, image: "assets/asteriaarchive4.jpeg", locked: true, album: "AsteriaArchive4" },
        IcedOut: { baseCost: 32100000, currentCost: 32100000, income: 3210000, owned: 0, image: "assets/asteriaarchive4.jpeg", locked: true, album: "AsteriaArchive4" },
        DontRuinMyPlans: { baseCost: 32600000, currentCost: 32600000, income: 3260000, owned: 0, image: "assets/asteriaarchive4.jpeg", locked: true, album: "AsteriaArchive4" },
        TopRappersFreestyle: { baseCost: 33100000, currentCost: 33100000, income: 3310000, owned: 0, image: "assets/asteriaarchive4.jpeg", locked: true, album: "AsteriaArchive4" },
        MakeItHome: { baseCost: 33600000, currentCost: 33600000, income: 3360000, owned: 0, image: "assets/asteriaarchive4.jpeg", locked: true, album: "AsteriaArchive4" },
        Lifestyle: { baseCost: 34100000, currentCost: 34100000, income: 3410000, owned: 0, image: "assets/asteriaarchive4.jpeg", locked: true, album: "AsteriaArchive4" },
        StripperFreestyle: { baseCost: 34600000, currentCost: 34600000, income: 3460000, owned: 0, image: "assets/asteriaarchive4.jpeg", locked: true, album: "AsteriaArchive4" },
        BetSheWantMe: { baseCost: 35100000, currentCost: 35100000, income: 3510000, owned: 0, image: "assets/asteriaarchive4.jpeg", locked: true, album: "AsteriaArchive4" },
        
        Divide: { baseCost: 35600000, currentCost: 35600000, income: 3560000, owned: 0, image: "assets/oldscraps.jpeg", locked: true, album: "OldScr4psss" },
        AllByMyself: { baseCost: 36100000, currentCost: 36100000, income: 3610000, owned: 0, image: "assets/oldscraps.jpeg", locked: true, album: "OldScr4psss" },
        AreYouBetterYet: { baseCost: 36600000, currentCost: 36600000, income: 3660000, owned: 0, image: "assets/oldscraps.jpeg", locked: true, album: "OldScr4psss" },
        FriendswBenefits: { baseCost: 37100000, currentCost: 37100000, income: 3710000, owned: 0, image: "assets/oldscraps.jpeg", locked: true, album: "OldScr4psss" },
        Mess: { baseCost: 37600000, currentCost: 37600000, income: 3760000, owned: 0, image: "assets/oldscraps.jpeg", locked: true, album: "OldScr4psss" },
        ItsMyMusicAndIGetToMakeTheRules: { baseCost: 38100000, currentCost: 38100000, income: 3810000, owned: 0, image: "assets/oldscraps.jpeg", locked: true, album: "OldScr4psss" },

        OnMyWay: { baseCost: 38800000, currentCost: 38800000, income: 4444, owned: 0, image: "assets/party4life.jpg", locked: true, album: "party4life" },
        WelcomeToTheParty: { baseCost: 39900000, currentCost: 39900000, income: 4444, owned: 0, image: "assets/party4life.jpg", locked: true, album: "party4life" },
        ThrowBandzzz: { baseCost: 40000000, currentCost: 40000000, income: 44444, owned: 0, image: "assets/party4life.jpg", locked: true, album: "party4life" },
        ForReal: { baseCost: 40050000, currentCost: 40050000, income: 69, owned: 0, image: "assets/party4life.jpg", locked: true, album: "party4life" },
        Manners: { baseCost: 41150000, currentCost: 41150000, income: 69, owned: 0, image: "assets/party4life.jpg", locked: true, album: "party4life" },
        ProjectX_2_0: { baseCost: 41550000, currentCost: 41550000, income: 69, owned: 0, image: "assets/party4life.jpg", locked: true, album: "party4life" },
        Gold: { baseCost: 42550000, currentCost: 42550000, income: 69, owned: 0, image: "assets/party4life.jpg", locked: true, album: "party4life" },
        GetDown: { baseCost: 42069420, currentCost: 42069420, income: 69, owned: 0, image: "assets/party4life.jpg", locked: true, album: "party4life" },
        NewBitch: { baseCost: 43569420, currentCost: 43569420, income: 69, owned: 0, image: "assets/party4life.jpg", locked: true, album: "party4life" },
        PikaGirl: { baseCost: 44569420, currentCost: 44569420, income: 69, owned: 0, image: "assets/party4life.jpg", locked: true, album: "party4life" },
        AllNightLong: { baseCost: 45569420, currentCost: 45569420, income: 69, owned: 0, image: "assets/party4life.jpg", locked: true, album: "party4life" },
        WeMadeIt: { baseCost: 46969420, currentCost: 46969420, income: 69, owned: 0, image: "assets/party4life.jpg", locked: true, album: "party4life" },
        MakeItBOUNCE: { baseCost: 47069420, currentCost: 47069420, income: 69, owned: 0, image: "assets/party4life.jpg", locked: true, album: "party4life" },        
      };
      

   //MikuMikuBEAAAAM

  function updateDisplays() {
    let calculatedPassiveIncome = 0;
  for (const item of Object.values(passiveItems)) {
    if (!item.locked) {
      calculatedPassiveIncome += item.income * item.owned;
    }
  }
    if (asteriaDisplay) asteriaDisplay.textContent = `${asteria} Ⓐ`;
    if (passiveRateDisplay) passiveRateDisplay.textContent = `+${calculatedPassiveIncome} Ⓐ/s`;
    if (activeRateDisplay) activeRateDisplay.textContent = `+${clickPower} Ⓐ/click`;
  }
  
  clickBtn.onclick = () => {
    asteria += clickPower;
    updateDisplays();
    updateClickProgress(1); // Register the click toward achievement progress
  };
  
  //-------------------------------------------------------------------------------------------------Buy active items-----------------------------------------------------


  function buyActiveItem(name) {

        const item = activeItems[name];
        if (asteria >= item.currentCost) {
            asteria -= item.currentCost;
            item.owned += 1;
            
            activateItemEffect(name);


            renderShops();
            updateDisplays();
    
        if (name === "hairDye") {
            activeItems.helloKittyHat.locked = false;
            hasHairDye = true;
            unlockAchievement("buyHairDye");
            console.log("Hello Kitty Hat unlocked");
            console.log("Hairdye unlocked");
            updateAsteriaImage();
            renderShops();
        }

        if (name === "staff") {
            passiveItems.UltraInstinct.locked = false;}
            
            if (name === "Lytra") {
                LytraBought = true;
                checkUnlocks();
            }
            
            if (name === "Vyzer") {
                VyzerBought = true;
                if (VyzerBought && LytraBought) {
                    passiveItems.Skibidi.locked = false;
                }
            }




        if (name === "Studio") {
            activeItems.Lytra.locked = false;
            activeItems.HubiTheKid.locked = false;
            activeItems.Ext3r4.locked = false;
            activeItems.pluto.locked = false;
            activeItems.M1v.locked = false;
            activeItems.D3r.locked = false;
            activeItems.Kalia.locked = false;
            activeItems.Odetari.locked = false;
            activeItems.Sickboyrari.locked = false;
            activeItems.pink_luu.locked = false;
            activeItems.kmrnxo.locked = false;}
        
        if (name === "HubiTheKid") {
            passiveItems.worldwide.locked = false;
            passiveItems.GiveMeMore.locked = false;
        }

        if (name === "D3r") {
            passiveItems.WhatdISay.locked = false;
            passiveItems.BiggestFan.locked = false;
            passiveItems.SeeThrough.locked = false;
            passiveItems.YouKnowUs.locked = false;}

        if (name === "Kalia") {
            passiveItems.DigHisGrave.locked = false;}

            if (name === "screamsteria") {
                passiveItems.MONSTER.locked = false;}

            if (name === "pluto") {
                passiveItems.EmoGirl.locked = false;
                passiveItems.BodyOnTheFloor.locked = false;}

        if (name === "Kazoo2death") {
            activeItems.Vyzer.locked = false;}

            if (name === "Eclipse") {
                passiveItems.LifeSoTough.locked = false;}

        if (name === "Lytra") {
            passiveItems.HAHA.locked = false;
            passiveItems.VampireFangs.locked = false;}

            if (name === "M1v") {
                passiveItems.NoEscape.locked = false;}

        if (name === "Wasty") {
            activeItems.PARTY4LIFE.locked = false;
        passiveItems.go_hard.locked = false;}
            
            if (name === "BloodSea") {
                passiveItems.BloodAsPaint.locked = false;}

                if (name === "nomsteria") {
                    passiveItems.PROJECTX.locked = false;}

            if (name === "ragesteria") {
                activeItems.screamsteria.locked = false;}


            if (name === "sideEye") {
                activeItems.Eye.locked = false;}

            if (name === "Eye") {
                activeItems.seesteria.locked = false;}

            if (name === "seesteria") {
                activeItems.EyesOnME.locked = false;}
    
    
                if (name === "pink_luu") {
                  passiveItems.SomethingsNotOkay.locked = false;}


        if (name === "Odetari") {
            passiveItems.TellMeLies.locked = false;}

        if (name === "Sickboyrari") {
            passiveItems.W4steAway.locked = false;}
            
        if (name === "BloodSea") {
            passiveItems.BloodAsPaint.locked = false;}

        if (name === "Ext3r4") {
            passiveItems.Monster.locked = false;}

            if (name === "FBM") {
                passiveItems.SecondChances.locked = false;}

        if (name === "kmrnxo") {
            kmrnxoBought = true;}

        if (name === "micAsteria") {
            activeItems.studioAsteria.locked = false;}

        if (name === "studioAsteria") {
            activeItems.AsteriaArchive.locked = false;}

        if (name === "_6arelyhuman") {
            barelyhumanBought = true;
            passiveItems.iKnow.locked = false;
            activeItems.cuteSongsForGangsters.locked = false;
            ketsNbarely(); 
        }

        if (name === "AsteriaArchive") {
            activeItems.AsteriaArchive1.locked = false;
            activeItems.OldScr4psss.locked = false;
            activeItems.IWassOffAPillInPrzechodnia.locked = false;
            activeItems.Watchout.locked = false;
        }

        if (name === "kets4eki") {
            clickPower *= 2;
            kets4ekiBought = true;
            passiveItems.ThrowIt.locked = false;
            activeItems.EveryPill.locked = false;
            activeItems.Rave2death.locked = false;
            passiveItems.GoneForSoLong.locked = false;
            ketsNbarely(); 
            checkUnlocks();       }

        if (name === "cuteSongsForGangsters") {
            for (const item of Object.values(passiveItems)) {
                if (item.album === "CuteSongsForGangsters") {
                    item.locked = false;
                }
            }
        renderShops();      }       

        if (name === "Rave2death") {
            for (const item of Object.values(passiveItems)) {
                if (item.album === "Rave2Death") {
                    item.locked = false;
                }
            }
            renderShops(); 
        }     


        if (name === "PARTY4LIFE") {
            for (const item of Object.values(passiveItems)) {
                if (item.album === "party4life") {
                    item.locked = false;
                }
            }
            renderShops(); 
        } 

        if (name === "AsteriaArchive1") {
            for (const item of Object.values(passiveItems)) {
                if (item.album === "AsteriaArchive1") {
                    item.locked = false;
                }
            }renderShops(); 
        }     

        if (name === "AsteriaArchive2") {
            for (const item of Object.values(passiveItems)) {
                if (item.album === "AsteriaArchive2") {
                    item.locked = false;
                }
            }
        }     
        if (name === "AsteriaArchive3") {
            for (const item of Object.values(passiveItems)) {
                if (item.album === "AsteriaArchive3") {
                    item.locked = false;
                }
            }renderShops(); 
        }     

        if (name === "AsteriaArchive4") {
            for (const item of Object.values(passiveItems)) {
                if (item.album === "AsteriaArchive4") {
                    item.locked = false;
                }
            }renderShops(); 
        }     

        if (name === "OldScr4psss") {
            for (const item of Object.values(passiveItems)) {
                if (item.album === "OldScr4psss") {
                    item.locked = false;
                }
            }renderShops(); 
        }     
  

        
        if (name === "anarchistSanctuary") {
            passiveItems.Fanart.locked = false;
            activeItems.sunglasses.locked = false;
            activeItems.hairDye.locked = false;
            console.log("Lytra added");
        }
      
        if (name === "sunglasses") {
            hasGlasses = true;
            passiveItems.Photoshoot.locked = false;
            console.log("Glasses unlocked");
            updateAsteriaImage();      }

        if (name === "dogsteria") {
            hasDogsteria = true;
            console.log("dogsteria unlocked");
            updateAsteriaImage();      }

        if (name === "FBM") {
            console.log("FBM unlocked!");
            unlockAchievement("FBM");
            britneySpawnModifier = 0.2; // Reduce spawn chance by 80%
    
          }
  
        if (name === "helloKittyHat") {
            hasHelloKittyHat = true;
            passiveItems.GALORE.locked = false;
            activeItems.swordNecklace.locked = false;
            console.log("Hello Kitty Hat unlocked");
            updateAsteriaImage();
            unlockAchievement("infiniteSwag");
            renderShops();      }
        


      renderShops(); 
      updateAsteriaImage();
 }
}

  function checkUnlocks() {
    if (LytraBought && VyzerBought) {
        passiveItems.Skibidi.locked = false;
    }
    if (LytraBought && kets4ekiBought) {
        passiveItems.HoldUp.locked = false;
    }
    if (VyzerBought && kets4ekiBought && kmrnxoBought) {
        passiveItems.HoldUp.locked = false;
    }
    
}
  
  //-------------------------------------------------------------------Activate effect of active items-----------------------------------------------------
  function activateItemEffect(name) {
    const item = activeItems[name];
  
    if (name === "anarchistSanctuary") {
      clickPower += 1;
    }
    if (name === "clonnex") {
        startClonnexEffect(); // 👈 Call mimic effect
      }
      if (name === "_6arelyhuman") {
        activateBarelyhumanEffect();
        ketsNbarely()
      }
      
  
    item.currentCost *= 10;
  }
  


function buyPassiveItem(name) {
    const item = passiveItems[name];
    if (asteria >= item.currentCost) {
      asteria -= item.currentCost;
      item.owned += 1;
      item.currentCost = Math.floor(item.currentCost * 1.5);
  
      // Unlock drift if redMercedes is bought
      if (name === "RedMercedes") {
        activeItems.drift.locked = false;
        passiveItems.Warsaw.locked = false;
        activeItems.Studio.locked = false;
        console.log("Drift unlocked!");
        unlockAchievement("redMercedes");
      }
      if (name === "Warsaw") {
        activeItems._2504.locked = false;
        activeItems.Eclipse.locked = false;
      }
    
      if (name === "MakeMeFamous") {
        activeItems.micAsteria.locked = false;
      }

      if (name === "DollarBills") {
        activeItems.lolipopsteria.locked = false;
      }

      if (name === "Skibidi") {
        activeItems.ewsteria.locked = false;
      }
      if (name === "Skibidi") {
        activeItems.ewsteria.locked = false;
      }
      if (name === "NewBitch") {
        passiveItems.Exotic.locked = false;
      }
      if (name === "Exotic") {
        passiveItems.PicknChoose.locked = false;
      }
      if (name === "UltraInstinct") {
        passiveItems.YouCantHide.locked = false;
      }
      if (name === "FeelingNothing") {
        passiveItems.TOO_MANY_LINES.locked = false;
      }
      if (name === "EyesOnME") {
        passiveItems.Paranoid.locked = false;
      }

      if (name === "NoEscape") {
        passiveItems.WorstNightm4re.locked = false;
      }

      if (name === "BiggestFan") {
        passiveItems.DieForYou.locked = false;
      }
          
      if (name === "TellMeLies") {
        activeItems.sideEye.locked = false;
      }

      if (name === "DemonInDisguise") {
        activeItems.Nosgov.locked = false;
      }

      if (name === "Bloodbath") {
        activeItems.BloodSea.locked = false;
      }

      if (name === "EveryPill") {
        activeItems.nomsteria.locked = false;
      }

      if (name === "SocialsPost") {
        activeItems.dogsteria.locked = false;
        passiveItems.WhatYouWant.locked = false;
      }

      if (name === "RaveLife") {
        activeItems.Wasty.locked = false;
      }

      if (name === "WhatdISay") {
        activeItems.DontUnderstandIt.locked = false;
      }
      if (name === "Paranoid") {
        passiveItems.WonderWhy.locked = false;
      }

      if (name === "BodyOnTheFloor") {
        passiveItems.OutOfBody.locked = false;
      }

      if (name === "OneMoreTime") {
        activeItems.kets4eki.locked = false;
        activeItems.staff.locked = false;
      }

      if (name === "WhatYouWant") {
        activeItems.hatsuneMiku.locked = false;
      }
      if (name === "Attachments") {
        passiveItems.IDidntNeedYouAnyway.locked = false;
      }
      if (name === "BloodAsPaint") {
        activeItems.kmrnxo.locked = false;
      }

      if (name === "Photoshoot") {
        passiveItems.TakeAPic.locked = false;
      }

      if (name === "IFuckedHerFriend") {
        passiveItems.Fusion.locked = false;
      }

      if (name === "Rockst4r") {
        passiveItems.RockThatShit.locked = false;
      }


      if (name === "TakeAPic") {
        activeItems._6arelyhuman.locked = false;
        passiveItems.SocialsPost.locked = false;
      }    

      if (name === "GALORE") {
        activeItems.clonnex.locked = false;
      }    
      if (item.album === "Rave2Death") {
        checkAllRave2DeathBought();
        renderShops(); 
    }

    if (item.album === "AsteriaArchive1") {
        renderShops();
        checkAllAA1();
    }

    if (item.album === "AsteriaArchive2") {
        renderShops();
        checkAllAA2();


    }

    if (item.album === "AsteriaArchive3") {
        renderShops();
        checkAllAA3();

    }


      if (name === "sanctuary" && item.owned === 1) {
        passiveItems.fanart.locked = false;
        console.log("Fanart unlocked!");        
        unlockAchievement("fanart");
      }

      if (name === "HAHA") {
        passiveItems.Lytra.locked = false;
        console.log("Lytra added");
        renderShops();      }
      
  
      renderShops();
      updateDisplays();
    }
  }
  function applyPassiveIncome() {
    let totalIncome = 0;

  
    for (const item of Object.values(passiveItems)) {
      if (!item.locked) {
        totalIncome += item.income * item.owned;
      }
    }
  
    totalIncome += clonnexMimicIncome; // Add Clonnex bonus here
    asteria += totalIncome;
  
    updateDisplays();
  }
  
  

setInterval(() => {
  asteria += passiveIncome;
  applyPassiveIncome()
  updateDisplays();
}, 1000);

function renderShops() {
    const activeShop = document.getElementById("activeShop");
    const passiveShop = document.getElementById("passiveShop");
    activeShop.querySelectorAll(".shop-item").forEach(e => e.remove());
    passiveShop.querySelectorAll(".shop-item").forEach(e => e.remove());
    asteriaDisplay.textContent = `${asteria} Ⓐ`;
    activeRateDisplay.textContent = `+${clickPower} Ⓐ/click`;
    passiveRateDisplay.textContent = `+${passiveIncome} Ⓐ/s`;

    for (const [name, item] of Object.entries(activeItems)) {
        if (item.locked) continue;
        const card = document.createElement("div");
        card.className = "shop-item";
        
        // Create a container for the image and item details
        const itemContent = document.createElement("div");
        itemContent.className = "item-content";
        itemContent.style.display = "flex";
        itemContent.style.alignItems = "center";
        
        // Image container with PCS below
        const imgContainer = document.createElement("div");
        imgContainer.style.display = "flex";
        imgContainer.style.flexDirection = "column";
        imgContainer.style.alignItems = "center";
        
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = name;
        img.style.maxWidth = "60px"; // Adjust image size as needed
        
        const pcsText = document.createElement("p");
        pcsText.textContent = `${item.owned} pcs`;
        pcsText.className = "pcs-text";
        pcsText.style.textAlign = "center";
        
        imgContainer.appendChild(img);
        imgContainer.appendChild(pcsText);
        
        // Item details on the right
        const itemDetails = document.createElement("div");
        itemDetails.className = "item-details";
        itemDetails.style.flex = "1";
        itemDetails.style.paddingLeft = "10px";
        itemDetails.innerHTML = `
            <p>${name}</p>
            <p>${item.currentCost} Ⓐ</p>
            <p class="item-description">${item.itemDetails}</p>
        `;
        
        // Append image and details to the content container
        itemContent.appendChild(imgContainer);
        itemContent.appendChild(itemDetails);
        
        // Add click functionality
        card.onclick = () => buyActiveItem(name);
    
        card.appendChild(itemContent);
        activeShop.appendChild(card);
    }
    
    for (const [name, item] of Object.entries(passiveItems)) {
        if (item.locked) continue;
        const card = document.createElement("div");
        card.className = "shop-item";
        
        // Create a container for the image and item details
        const itemContent = document.createElement("div");
        itemContent.className = "item-content";
        itemContent.style.display = "flex";
        itemContent.style.alignItems = "center";
        
        // Image container with "Owned" below
        const imgContainer = document.createElement("div");
        imgContainer.style.display = "flex";
        imgContainer.style.flexDirection = "column";
        imgContainer.style.alignItems = "center";
        
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = name;
        img.style.maxWidth = "60px"; // Adjust image size as needed
        
        const ownedText = document.createElement("p");
        ownedText.textContent = `Owned: ${item.owned}`;
        ownedText.className = "owned-text";
        ownedText.style.textAlign = "center";
        
        imgContainer.appendChild(img);
        imgContainer.appendChild(ownedText);
        
        // Item details on the right
        const itemDetails = document.createElement("div");
        itemDetails.className = "item-details";
        itemDetails.style.flex = "1";
        itemDetails.style.paddingLeft = "10px";
        itemDetails.innerHTML = `
            <p>${name}</p>
            <p>${item.currentCost} Ⓐ</p>
            <p>+${item.income} Ⓐ/s</p>
        `;
        
        // Append image and details to the content container
        itemContent.appendChild(imgContainer);
        itemContent.appendChild(itemDetails);
        
        // Add click functionality
        card.onclick = () => buyPassiveItem(name);
    
        card.appendChild(itemContent);
        passiveShop.appendChild(card);
    }
    
  }

function ketsNbarely() { 
    if (barelyhumanBought && kets4ekiBought) {
        passiveItems.FasterNHarder.locked = false;
        passiveItems.PartyLikeThe80s.locked = false;
        activeItems.FBM.locked = false;
    }
   }

function updateAsteriaImage() {
   const clickImage = document.querySelector("#clickBtn img");
   if (!clickImage) {
     console.error("❌ Asteria image element not found.");
     return;
   }

   console.log("Updating image - HairDye:", hasHairDye, "Glasses:", hasGlasses, "HelloKittyHat:", hasHelloKittyHat, "Dogsteria:", hasDogsteria);

   if (hasDogsteria) {
     console.log("✅ Setting to Dogsteria");
     clickImage.src = "assets/dogsteria.jpg";
   } else if (hasHelloKittyHat) {
     console.log("✅ Setting to Hello Kitty");
     clickImage.src = "assets/hellokittyasteria.PNG";
   } else if (hasHairDye && hasGlasses) {
     console.log("✅ Setting to Red Hair + Glasses");
     clickImage.src = "assets/redhairglasses.PNG";
   } else if (hasHairDye) {
     console.log("✅ Setting to Red Hair");
     clickImage.src = "assets/redhair.PNG";
   } else if (hasGlasses) {
     console.log("✅ Setting to Glasses");
     clickImage.src = "assets/glassesnohair.PNG";
   } else {
     console.log("✅ Setting to Default");
     clickImage.src = "assets/asteria.PNG";
   }
 }

  
  


renderShops();
updateDisplays();

  
function startClonnexEffect() {
    if (clonnexInterval) clearInterval(clonnexInterval); // avoid duplicates
  
    clonnexInterval = setInterval(() => {
      const unlockedPassives = Object.values(passiveItems).filter(item => !item.locked && item.income > 0);
      if (unlockedPassives.length === 0) {
        clonnexMimicIncome = 0;
        return;
      }
  
      const randomItem = unlockedPassives[Math.floor(Math.random() * unlockedPassives.length)];
      clonnexMimicIncome = randomItem.income;
  
      console.log(`Clonnex is mimicking: ${randomItem.image || 'an item'} with income ${randomItem.income}`);
    }, 30000); // every 30 seconds
  }
  
  function activateBarelyhumanEffect() {
    const originalIncomes = {};
  
    // Triple all passive incomes temporarily
    for (const [name, item] of Object.entries(passiveItems)) {
      if (!item.locked && item.income > 0) {
        originalIncomes[name] = item.income;
        item.income *= 3;
      }
    }
  
    const originalClickPower = clickPower;
    clickPower *= 2;
  
    document.body.classList.add("barely-effect");
    console.log("🎧 Hyperpop Surge activated!");
  
    setTimeout(() => {
      // Restore original passive incomes
      for (const [name, income] of Object.entries(originalIncomes)) {
        passiveItems[name].income = income;
      }
  
      clickPower = originalClickPower;
      document.body.classList.remove("barely-effect");
      console.log("6arelyhuman scene party ended.");
    }, 10000);
  }
  
  //forkazoo2death
  function checkAllRave2DeathBought() {
    const rave2DeathSongs = [
        "RaveLife",
        "Faded",
        "DollarBills",
        "TynaFuck",
        "ComeOn",
        "IFuckedHerFriend",
        "FeelingNothing",
        "CountItUp"
    ];

    // Check if all songs are owned (owned > 0)
    const allOwned = rave2DeathSongs.every(song => {
        const item = passiveItems[song];
        return item && item.owned > 0;
    });

    if (allOwned) {
        if (activeItems.Kazoo2death && activeItems.Kazoo2death.locked) {
            activeItems.Kazoo2death.locked = false;
            renderShops();
        }
    }
}

function checkAllAA1() {
    const AA1songs = [
        "FlexLikeThis",
        "Numb",
        "SoGone",
        "WayTooFar",
        "GoDown",
        "BadDreams",
        "NotEvenCudKnow",
        "OneTakeFreestyle",
        "DemonInDisguise",
        "Rockst4r",
        "Tonight",
        "LikeThat",
        "Attachments",

    ];

    // Check if all songs are owned (owned > 0)
    const allOwned = AA1songs.every(song => {
        const item = passiveItems[song];
        return item && item.owned > 0;
    });

    if (allOwned) {
            activeItems.AsteriaArchive2.locked = false;
            renderShops();
    }
}

function checkAllAA2() {
    const AA2songs = [
        "EyesClosed",
        "ComingDown",
        "AlreadyDead",
        "TookOverTheWorld",
        "TooAlive",
        "Mia",
    ];

    const allOwned = AA2songs.every(song => {
        const item = passiveItems[song];
        return item && item.owned > 0;
    });

    if (allOwned) {
            activeItems.AsteriaArchive3.locked = false;
            renderShops();
    }
}
function checkAllAA3() {
    const AA3songs = [
        "ISeeYouAsAnEnemy",
        "WritersPapers",
        "Slower",
        "FosteredAlcoholism",
        "FeelMyLuv",
        "DayNNight",
        "BaddestBitchOut",
        "HellNBackFreestyle",
        "DemonInDisguise",
        "LetYouDown",
        "FaceOfDeath",
    ];

    const allOwned = AA3songs.every(song => {
        const item = passiveItems[song];
        return item && item.owned > 0;
    });

    if (allOwned) {
            activeItems.AsteriaArchive4.locked = false;
            renderShops();
    }
}

if (window.stoleAll) {
    console.log("Britney has stolen all your Asterias!");

    activeItems.ragesteria.locked = false;
    console.log("Ragesteria has been unlocked!");
  }

  function stealAsteria() {
    console.log("Britney Manson is stealing Asteria...");
    console.log("Asteria before:", asteria);
    window.stoleAll = true;

    activeItems.ragesteria.locked = false;
  
    asteria = 0;
    if (typeof updateDisplays === "function") updateDisplays();
    alert("💀 Britney Manson stole all your Asterias!");
    unlockAchievement("Welostitall");
    hideBritney();
    renderShops();
  }
  
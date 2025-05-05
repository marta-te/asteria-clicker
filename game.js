let asteria = 1000000;
let clickPower = 1;
let passiveIncome = 0;
let hasHairDye = false;
let hasGlasses = false;
let hasHelloKittyHat = false;



const asteriaDisplay = document.getElementById("asteriaDisplay");
const passiveRateDisplay = document.getElementById("passiveRate");
const activeRateDisplay = document.getElementById("activeRate");
let clonnexMimicIncome = 0;
let clonnexInterval = null;

const clickBtn = document.getElementById("clickBtn");

const activeItems = {
    anarchistSanctuary: { cost: 50,currentCost: 50,image: "assets/sanctuary.jpeg", itemDetails:"+1 click pwr" }, // Unlocks fanart
    sunglasses: {cost: 150,currentCost: 50,image: "assets/glasses_spikey.png", itemDetails:"more swag" },
    hairDye: {cost: 500,currentCost: 50,image: "assets/hairdye.png" , itemDetails:"red hair"},
    helloKittyHat: {cost: 1000,currentCost: 50,image: "assets/kittyhat.png", itemDetails:"Update Asteria swag" , locked: true }, // Unlocks GALORE
    clonnex: {cost: 2000,currentCost: 50,image: "assets/clonnex.png", itemDetails:"Every 30s get a random passive item's value" },
    _6arelyhuman: {cost: 2250,currentCost: 50,image: "assets/6arelyhuman.jpeg", itemDetails:"10s multiplier: Active x2, Passive x3"},
    hatsuneMiku: {cost: 500,currentCost: 50,image: "assets/miku.png" , itemDetails:"MIKU MIKU BEAAAAM"},
    staff: {cost: 50,currentCost: 50,image: "assets/staffofasteriacropped.PNG" , itemDetails:"Unlocks album covers where it is seen"}, // Unlocks UltraInstinct
    cuteSongsForGangsters: {cost: 50,currentCost: 50,image: "assets/cutesongsforgangsters.jpeg", itemDetails:"Unlocks album songs" },
    drift: {cost: 50,currentCost: 50,image: "assets/drift.jpg", itemDetails:"80% less chance of Britney" }, 
    Lytra: {cost: 50,currentCost: 50,image: "assets/Lytra.jpg", itemDetails:"Unlocks songs with Lytra" },
    Vyzer: {cost: 50,currentCost: 50,image: "assets/vyzer.jpg" , itemDetails:"Unlocks songs with Vyzer"},
    Wasty: {cost: 50,currentCost: 50,image: "assets/wasty.jpeg" , itemDetails:"Unlocks songs with Wasty"},
    Rave2death: {cost: 50,currentCost: 50,image: "assets/rave2death.jpg" , itemDetails:"Unlocks Rave2death album songs in passive items"}, // Unlocks Rave2death album songs in passive items
    Studio: {cost: 50,currentCost: 50,image: "assets/studio.png" , itemDetails:"_"},
    FBM: {cost: 50,currentCost: 50,image: "assets/disstrack.jpeg" , itemDetails:"_"},
    EveryPill: {cost: 50,currentCost: 50,image: "assets/everypill.jpeg" , itemDetails:"_"},
    HubiTheKid: {cost: 50,currentCost: 50,image: "assets/hubithekid.jpeg" , itemDetails:"_"},
    worldwide: {cost: 50,currentCost: 50,image: "assets/worldwide.jpg", itemDetails:"_" },
    FarFetch: {cost: 50,currentCost: 50,image: "assets/farfetch.PNG" , itemDetails:"_"}, //unlocks sword necklace
    swordNecklace: {cost: 50,currentCost: 50,image: "assets/swordnecklace.png" , itemDetails:"_"},
    GiveMeMore: {cost: 50,currentCost: 50,image: "assets/givememore.jpg" , itemDetails:"_" },
    Odetari: {cost: 50,currentCost: 50,image: "assets/odetari.webp"  , itemDetails:"_"},
    Ext3r4: {cost: 50,currentCost: 50,image: "assets/Ext3r4.jpeg"  , itemDetails:"_"},
    Kalia: {cost: 50,currentCost: 50,image: "assets/kalia.jpeg"  , itemDetails:"_"},
    Eclipse: {cost: 50,currentCost: 50,image: "assets/eclipse.jpeg" , itemDetails:"_" },
    _2504: {cost: 50,currentCost: 50,image: "assets/2504.jpeg"  , itemDetails:"_"},
    kmrnxo: {cost: 50,currentCost: 50,image: "assets/kmrnxo.jpeg"  , itemDetails:"_"},
    Kazoo2death: {cost: 50,currentCost: 50,image: "assets/kazoo2death.jpg"  , itemDetails:"_"},
    pluto: {cost: 50,currentCost: 50,image: "assets/pluto.jpeg"  , itemDetails:"_"},
    D3r: {cost: 50,currentCost: 50,image: "assets/der.jpeg"  , itemDetails:"_"},
    M1v: {cost: 50,currentCost: 50,image: "assets/m1v.jpeg"  , itemDetails:"_"},
    asteriaarchive: {cost: 50,currentCost: 50,image: "assets/asteriaarchive2.jpeg"  , itemDetails:"_"},
    Nosgov: {cost: 50,currentCost: 50,image: "assets/nosgov.jpeg"  , itemDetails:"_"},
    AsteriaArchive1: {cost: 50,currentCost: 50,image: "assets/asteriaarchive1.jpeg"  , itemDetails:"_"},
    AsteriaArchive2: {cost: 50,currentCost: 50,image: "assets/asteriaarchive2.jpeg"  , itemDetails:"_"},
    AsteriaArchive3: {cost: 50,currentCost: 50,image: "assets/asteriaarchive3.jpeg"  , itemDetails:"_"},
    AsteriaArchive4: {cost: 50,currentCost: 50,image: "assets/asteriaarchive4.jpeg"  , itemDetails:"_"},
    OldScr4psss: {cost: 50,currentCost: 50,image: "assets/oldscraps.jpeg"  , itemDetails:"_"},
    Watchout: {cost: 50,currentCost: 50,image: "assets/watchout.jpg"  , itemDetails:"_"},
    IWassOffAPillInPrzechodnia: {cost: 50,currentCost: 50,image: "assets/pillarchive.jpg" , itemDetails:"_" },
    Eye: {cost: 50,currentCost: 50,image: "assets/eye.jpg"  , itemDetails:"_"},
    BloodSea: {cost: 50,currentCost: 50,image: "assets/bloodocean.png"  , itemDetails:"_"},

    };
  

    const passiveItems = {
        OneMoreTime: { baseCost: 50, currentCost: 50, income: 1, owned: 0, image: "assets/onemoretime.jpeg" },
        Fanart: { baseCost: 100, currentCost: 100, income: 2, owned: 0, image: "assets/instagram.webp" },
        Photoshoot: { baseCost: 200, currentCost: 200, income: 4, owned: 0, image: "assets/photoshoot.png" },
        TakeAPic: { baseCost: 500, currentCost: 500, income: 5, owned: 0, image: "assets/takeapic.jpg" },
        GALORE: { baseCost: 1000, currentCost: 1000, income: 10, owned: 0, image: "assets/galore.jpg" , locked: true },
        SocialsPost: { baseCost: 18565, currentCost: 18565, income: 1856, owned: 0, image: "assets/socials.png" },
        WhatYouWant: { baseCost: 24134, currentCost: 24134, income: 2413, owned: 0, image: "assets/whatyouwant.jpg" },
        UltraInstinct: { baseCost: 31375, currentCost: 31375, income: 3137, owned: 0, image: "assets/ultrainstinct.jpg" },
        MESSAGES: { baseCost: 40788, currentCost: 40788, income: 4078, owned: 0, image: "assets/messages.jpeg" },
        WasteAway: { baseCost: 53024, currentCost: 53024, income: 5302, owned: 0, image: "assets/wasteaway.jpeg" },
        Bloodbath: { baseCost: 68931, currentCost: 68931, income: 6893, owned: 0, image: "assets/bloodbath.png", album: "CuteSongsForGangsters" },
        Hypnotized: { baseCost: 89610, currentCost: 89610, income: 8961, owned: 0, image: "assets/cutesongsforgangsters.jpg", album: "CuteSongsForGangsters" },
        RedMercedes: { baseCost: 116493, currentCost: 116493, income: 11649, owned: 0, image: "assets/redmercedes.png", album: "CuteSongsForGangsters" },
        FadeAway: { baseCost: 151441, currentCost: 151441, income: 15144, owned: 0, image: "assets/cutesongsforgangsters.jpg", album: "CuteSongsForGangsters" },
        MakeMeFamous: { baseCost: 196874, currentCost: 196874, income: 19687, owned: 0, image: "assets/cutesongsforgangsters.jpg", album: "CuteSongsForGangsters" },
        BloodAsPaint: { baseCost: 255936, currentCost: 255936, income: 25593, owned: 0, image: "assets/bloodaspaint.jpg" },
        Drift: { baseCost: 332717, currentCost: 332717, income: 33271, owned: 0, image: "assets/drift.jpg" },
        FasterNHarder: { baseCost: 432532, currentCost: 432532, income: 43253, owned: 0, image: "assets/fasternharder.jpg" },
        PartyLikeThe80s: { baseCost: 561292, currentCost: 561292, income: 56129, owned: 0, image: "assets/party80.jpeg" },
        Skibidi: { baseCost: 729680, currentCost: 729680, income: 72968, owned: 0, image: "assets/skibidi.jpg" },
        HAHA: { baseCost: 948585, currentCost: 948585, income: 94858, owned: 0, image: "assets/haha.jpg" },
        HoldUp: { baseCost: 1233161, currentCost: 1233161, income: 123316, owned: 0, image: "assets/holdup.jpeg" },
        iKnow: { baseCost: 1603109, currentCost: 1603109, income: 160310, owned: 0, image: "assets/iknow.jpg" },
        RaveLife: { baseCost: 2084041, currentCost: 2084041, income: 208404, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death" },
        Faded: { baseCost: 2709253, currentCost: 2709253, income: 270925, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death" },
        DollarBills: { baseCost: 3522029, currentCost: 3522029, income: 352202, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death" },
        TynaFuck: { baseCost: 4588437, currentCost: 4588437, income: 458843, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death" },
        ComeOn: { baseCost: 5975588, currentCost: 5975588, income: 597558, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death" },
        IFuckedHerFriend: { baseCost: 7788265, currentCost: 7788265, income: 778826, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death" },
        FeelingNothing: { baseCost: 10124744, currentCost: 10124744, income: 1012474, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death" },
        CountItUp: { baseCost: 13162167, currentCost: 13162167, income: 1316216, owned: 0, image: "assets/rave2death.jpg", album: "Rave2Death" },
        TellMeLies: { baseCost: 17110817, currentCost: 17110817, income: 1711081, owned: 0, image: "assets/tellmelies.jpeg" },
        Warsaw: { baseCost: 22244062, currentCost: 22244062, income: 2224406, owned: 0, image: "assets/warsaw.jpg" },
        BodyOnTheFloor: { baseCost: 23356265, currentCost: 23356265, income: 2335626, owned: 0, image: "assets/BodyOnTheFloor.jpeg", locked: true },
        HAHARemix: { baseCost: 24524078, currentCost: 24524078, income: 2452407, owned: 0, image: "assets/haharemix.jpeg", locked: true },
        PicknChoose: { baseCost: 25750281, currentCost: 25750281, income: 2575028, owned: 0, image: "assets/PicknChoose.jpg", locked: true },
        ThrowIt: { baseCost: 27037795, currentCost: 27037795, income: 2703779, owned: 0, image: "assets/ThrowIt.jpg", locked: true },
        VampireFangs: { baseCost: 28389684, currentCost: 28389684, income: 2838968, owned: 0, image: "assets/VampireFangs.jpeg", locked: true },
        Monster: { baseCost: 29809268, currentCost: 29809268, income: 2980926, owned: 0, image: "assets/monster1.jpg", locked: true },
        MONSTER: { baseCost: 31300031, currentCost: 31300031, income: 3130003, owned: 0, image: "assets/monster.jpg", locked: true },
        DigHisGrave: { baseCost: 32865782, currentCost: 32865782, income: 3286578, owned: 0, image: "assets/DigHisGrave.jpg", locked: true },
        DontUnderstandIt: { baseCost: 34510571, currentCost: 34510571, income: 3451057, owned: 0, image: "assets/DontUnderstandIt.jpg", locked: true },
        GoHard: { baseCost: 36238600, currentCost: 36238600, income: 3623860, owned: 0, image: "assets/gohard.jpg", locked: true },
        BiggestFan: { baseCost: 38054330, currentCost: 38054330, income: 3805433, owned: 0, image: "assets/BiggestFan.jpeg", locked: true },
        YouKnowUs: { baseCost: 39962446, currentCost: 39962446, income: 3996244, owned: 0, image: "assets/YouKnowUs.jpg", locked: true },
        SeeThrough: { baseCost: 41967968, currentCost: 41967968, income: 4196796, owned: 0, image: "assets/SeeThrough.jpg", locked: true },
        WhatdISay: { baseCost: 44076066, currentCost: 44076066, income: 4407606, owned: 0, image: "assets/WhatdISay.jpg", locked: true },        
        NoEscape: { baseCost: 46281869, currentCost: 46281869, income: 4628186, owned: 0, image: "assets/NoEscape.jpg", locked: true },
        GoneForSoLong: { baseCost: 48595963, currentCost: 48595963, income: 4859596, owned: 0, image: "assets/GoneForSoLong.jpg", locked: true },
        EmoGirl: { baseCost: 51025761, currentCost: 51025761, income: 5102576, owned: 0, image: "assets/emogirl.jpeg", locked: true },
        DieForYou: { baseCost: 53577049, currentCost: 53577049, income: 5357704, owned: 0, image: "assets/DieForYou.jpg", locked: true },
        EyesOnMe: { baseCost: 56255801, currentCost: 56255801, income: 5625580, owned: 0, image: "assets/EyesOnMe.jpg", locked: true },
        OutOfBody: { baseCost: 59068391, currentCost: 59068391, income: 5906839, owned: 0, image: "assets/OutOfBody.jpeg", locked: true },
        WorstNightm4re: { baseCost: 62021610, currentCost: 62021610, income: 6202161, owned: 0, image: "assets/WorstNightm4are.jpeg", locked: true },
        Exotic: { baseCost: 65122790, currentCost: 65122790, income: 6512279, owned: 0, image: "assets/Exotic.jpeg", locked: true },
        YouCantHide: { baseCost: 68379729, currentCost: 68379729, income: 6837972, owned: 0, image: "assets/YouCantHide.png", locked: true },
        SecondChances: { baseCost: 71800715, currentCost: 71800715, income: 7180071, owned: 0, image: "assets/SecondChances.jpg", locked: true },
        RockThatShit: { baseCost: 75394693, currentCost: 75394693, income: 7539469, owned: 0, image: "assets/RockThatShit.jpg", locked: true },
        WonderWhy: { baseCost: 79171128, currentCost: 79171128, income: 7917112, owned: 0, image: "assets/WonderWhy.jpg", locked: true },
        Fusion: { baseCost: 83140184, currentCost: 83140184, income: 8314018, owned: 0, image: "assets/Fusion.jpg", locked: true },
        IDidntNeedYouAnyway: { baseCost: 87312692, currentCost: 87312692, income: 8731269, owned: 0, image: "assets/IDidntNeedYouAnyway.jpeg", locked: true },
        Paranoid: { baseCost: 91699926, currentCost: 91699926, income: 9169992, owned: 0, image: "assets/Paranoid.jpg", locked: true },

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
        ItsMyMusicAndIGetToMakeTheRules: { baseCost: 38100000, currentCost: 38100000, income: 3810000, owned: 0, image: "assets/oldscraps.jpeg", locked: true, album: "OldScr4psss" }
        
      };
      

   //MikuMikuBEAAAAM

  function updateDisplays() {
    let calculatedPassiveIncome = 0;
  for (const item of Object.values(passiveItems)) {
    if (!item.locked) {
      calculatedPassiveIncome += item.income * item.owned;
    }
  }
    if (asteriaDisplay) asteriaDisplay.textContent = `Asteria: ${asteria} Ⓐ`;
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
      activateItemEffect(name); // Fix: pass name


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
  
      if (name === "HAHA") {
        passiveItems.Lytra.locked = false;
        console.log("Lytra added");
        renderShops();
      }
  
      if (name === "sunglasses") {
        hasGlasses = true;
        console.log("Glasses unlocked");
        updateAsteriaImage();
      }
  
      if (name === "helloKittyHat") {
        hasHelloKittyHat = true;
        passiveItems.GALORE.locked = false;
        console.log("Hello Kitty Hat unlocked");
        updateAsteriaImage();
        unlockAchievement("infiniteSwag");
        renderShops();
      }
  
      updateAsteriaImage();
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
      if (name === "redMercedes") {
        activeItems.drift.locked = false;
        console.log("Drift unlocked!");
        unlockAchievement("redMercedes");
      }
      if (name === "FBM" && item.owned === 1) {
        britneySpawnModifier = 0.2; // Reduce spawn chance by 80%
        unlockAchievement("FBM");
      }
      if (name === "sanctuary" && item.owned === 1) {
        unlockAchievement("fanart");
      }
      
      
  
      // Unlock fanart if anarchistSanctuary is bought
      if (name === "sanctuary") {
        passiveItems.fanart.locked = false;
        console.log("Fanart unlocked!");
      }
  
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
    asteriaDisplay.textContent = `Asteria: ${asteria} Ⓐ`;
    activeRateDisplay.textContent = `+${clickPower} Ⓐ/click`;
    passiveRateDisplay.textContent = `+${passiveIncome} Ⓐ/s`;

  
    for (const [name, item] of Object.entries(activeItems)) {
       // if (item.locked) continue;
      const card = document.createElement("div");
      card.className = "shop-item";
  
      // Create a container for the image and item details
      const itemContent = document.createElement("div");
      itemContent.className = "item-content";
  
      // Image and item details
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = name;
  
      const itemDetails = document.createElement("div");
      itemDetails.className = "item-details";
      itemDetails.innerHTML = `
        <p>${name}</p>
        <p>Cost: ${item.currentCost} Ⓐ</p>
        <p class="item-description">${item.itemDetails}</p>
      `;
  
      // Append image and details to the content container
      itemContent.appendChild(img);
      itemContent.appendChild(itemDetails);
      
      // Add click functionality
      card.onclick = () => buyActiveItem(name);
  
      card.appendChild(itemContent);
      activeShop.appendChild(card);
    }
  
    for (const [name, item] of Object.entries(passiveItems)) {

      //  if (item.locked) continue;
        const card = document.createElement("div");
        card.className = "shop-item";
  
      const itemContent = document.createElement("div");
      itemContent.className = "item-content";
  
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = name;
  
      const itemDetails = document.createElement("div");
      itemDetails.className = "item-details";
      itemDetails.innerHTML = `
        <p>${name}</p>
        <p>Cost: ${item.currentCost} Ⓐ</p>
        <p>Owned: ${item.owned}</p>
        <p>+${item.income} Ⓐ/s</p>
      `;
  
      itemContent.appendChild(img);
      itemContent.appendChild(itemDetails);
      
      card.onclick = () => buyPassiveItem(name);
      card.appendChild(itemContent);
      passiveShop.appendChild(card);
    }
  }

  function updateAsteriaImage() {
    const clickImage = document.querySelector("#clickBtn img");
    if (!clickImage) return;
  
    console.log("Updating image - HairDye:", hasHairDye, "Glasses:", hasGlasses, "HelloKittyHat:", hasHelloKittyHat);
  
    if (hasHelloKittyHat) {
      clickImage.src = "assets/hellokittyasteria.PNG";
    } else if (hasHairDye && hasGlasses) {
      clickImage.src = "assets/redhairglasses.PNG";
    } else if (hasHairDye) {
      clickImage.src = "assets/redhair.PNG";
    } else if (hasGlasses) {
      clickImage.src = "assets/glassesnohair.PNG";
    } else {
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
      console.log("🎧 Hyperpop Surge ended.");
    }, 10000);
  }
  
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

window.modifyScore = function(amount) {
  asteria += amount;
  if (asteria < 0) asteria = 0;
  updateDisplays();
  // Track all-time Asteria (only increase on positive gains)
  if (amount > 0) {
    window.allTimeA = (window.allTimeA || 0) + amount;
  }
  if (window.saveProgress) window.saveProgress();  // save immediately
};



window.stoleAll = false;

const asteriaDisplay = document.getElementById("asteriaDisplay");
const passiveRateDisplay = document.getElementById("passiveRate");
const activeRateDisplay = document.getElementById("activeRate");
let clonnexMimicIncome = 0;
let clonnexInterval = null;


const clickBtn = document.getElementById("clickBtn");

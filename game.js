let asteria = 220000;
let clickPower = 1;
let passiveIncome = 0;
let hasHairDye = false;
let hasGlasses = false;
let hasHelloKittyHat = false;

const asteriaDisplay = document.getElementById("asteriaDisplay");
const passiveRateDisplay = document.getElementById("passiveRate");
const activeRateDisplay = document.getElementById("activeRate");


const clickBtn = document.getElementById("clickBtn");

const activeItems = {
    oneMoreTime: { cost: 50,   value: 1,  image: "assets/onemoretime.jpeg" },       // Entry-level
    hairDye:     { cost: 100,  value: 2,  image: "assets/hairdye.png" },
    sunglasses:  { cost: 200,  value: 4,  image: "assets/glasses_spikey.png" },
    drift:       { cost: 400,  value: 8, image: "assets/drift.jpg", locked: true },
    staff:       { cost: 1000, value: 10, image: "assets/staff.png" },
    helloKittyHat:{ cost: 1500, value: 20, image: "assets/kittyhat.PNG", locked: true},
    takeAPic:    { cost: 2500, value: 50, image: "assets/takeapic.jpeg" },
    haha:        { cost: 6000, value: 120, image: "assets/haha.jpg" }                  // High-end
  };
  

const passiveItems = {
    sanctuary:   { baseCost: 25,    currentCost: 25,    income: 1,   owned: 0, image: "assets/sanctuary.jpeg" },
    kets4eki:    { baseCost: 100,   currentCost: 100,   income: 5,   owned: 0, image: "assets/kets4eki.jpeg" },
    fanart:      { baseCost: 300,   currentCost: 300,   income: 15,  owned: 0, image: "assets/instagram.webp", locked: true },
    photoshoot:  { baseCost: 1000,  currentCost: 1000,  income: 50,  owned: 0, image: "assets/photoshoot.png" },
    socialsPost: { baseCost: 5000,  currentCost: 5000,  income: 150, owned: 0, image: "assets/socials.png" },
    redMercedes: { baseCost: 20000, currentCost: 20000, income: 500, owned: 0, image: "assets/redmercedes.png" },
    disstrack:   { baseCost: 50000, currentCost: 50000, income: 1000,owned: 0, image: "assets/disstrack.jpeg" }
  };
  

  function updateDisplays() {
    if (asteriaDisplay) asteriaDisplay.textContent = `Asteria: ${asteria} Ⓐ`;
    if (passiveRateDisplay) passiveRateDisplay.textContent = `+${passiveIncome} Ⓐ/s`;
    if (activeRateDisplay) activeRateDisplay.textContent = `+${clickPower} Ⓐ/click`;
  }
  

clickBtn.onclick = () => {
  asteria += clickPower;
  updateDisplays();
};

function buyActiveItem(name) {
  const item = activeItems[name];
  if (asteria >= item.cost) {
    asteria -= item.cost;
    clickPower += item.value;
    item.cost = Math.floor(item.cost * 1.5);
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
      
      if (name === "sunglasses") {
        hasGlasses = true;
        console.log("Glasses unlocked");
          
        updateAsteriaImage();
      }
        if (name === "helloKittyHat") {
            hasHelloKittyHat = true;
            console.log("Hello Kitty Hat unlocked");
            updateAsteriaImage();
            unlockAchievement("infiniteSwag");
        }
      

    updateAsteriaImage();
  }
}

function buyPassiveItem(name) {
    const item = passiveItems[name];
    if (asteria >= item.currentCost) {
      asteria -= item.currentCost;
      passiveIncome += item.income;
      item.owned += 1;
      item.currentCost = Math.floor(item.currentCost * 1.5);
  
      // Unlock drift if redMercedes is bought
      if (name === "redMercedes") {
        activeItems.drift.locked = false;
        console.log("Drift unlocked!");
        unlockAchievement("redMercedes");
      }
      if (name === "disstrack" && item.owned === 1) {
        britneySpawnModifier = 0.2; // Reduce spawn chance by 80%
        unlockAchievement("FBM");
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
  

setInterval(() => {
  asteria += passiveIncome;
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
        if (item.locked) continue;
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
        <p>Cost: ${item.cost} Ⓐ</p>
        <p>Click +${item.value}</p>
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

        if (item.locked) continue;
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
  
    if (hasHairDye && hasHelloKittyHat) {
      clickImage.src = "assets/hellokittyasteria.PNG"; // this one must be first
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

clickBtn.onclick = () => {
    asteria += clickPower;
    updateDisplays();
  
    // Unlock first click achievement
    if (!achievements.firstClick.unlocked) {
      unlockAchievement("firstClick");
    }
  };
  
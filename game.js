let asteria = 0;
let clickPower = 1;
let passiveIncome = 0;

const asteriaDisplay = document.getElementById("asteriaDisplay");
const passiveRateDisplay = document.getElementById("passiveRate");
const clickBtn = document.getElementById("clickBtn");

const activeItems = {
  drift: { cost: 10, value: 1, image: "assets/drift.png" },
  hairDye: { cost: 25, value: 2, image: "assets/hair_dye.png" },
  sunglasses: { cost: 50, value: 5, image: "assets/glasses_spikey.png" }
};

const passiveItems = {
  sanctuary: {
    baseCost: 25, currentCost: 25, income: 1, owned: 0,
    image: "assets/sanctuary.jpeg"
  },
  kets4eki: {
    baseCost: 100, currentCost: 100, income: 5, owned: 0,
    image: "assets/kets4eki.jpeg"
  },
  fanart: {
    baseCost: 300, currentCost: 300, income: 15, owned: 0,
    image: "assets/instagram.webp"
  },
  photoshoot: {
    baseCost: 1000, currentCost: 1000, income: 50, owned: 0,
    image: "assets/photoshoot.avif"
  }
};

function updateDisplays() {
  asteriaDisplay.textContent = `Asteria: ${asteria} Ⓐ`;
  passiveRateDisplay.textContent = `+${passiveIncome} Ⓐ/s`;
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
  }
}

function buyPassiveItem(name) {
  const item = passiveItems[name];
  if (asteria >= item.currentCost) {
    asteria -= item.currentCost;
    passiveIncome += item.income;
    item.owned += 1;
    item.currentCost = Math.floor(item.currentCost * 1.5);
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
    activeShop.innerHTML = "<h2>Active</h2>";
    passiveShop.innerHTML = "<h2>Passive</h2>";
  
    for (const [name, item] of Object.entries(activeItems)) {
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
  

// Danger Logic
const dangerEl = document.getElementById("danger");
const dangerImage = document.getElementById("dangerImage");
let posX = 0;
let velocity = 2;
let dangerInterval, dangerTimer;

function showDanger() {
  dangerEl.style.display = "block";
  dangerImage.style.top = "0px";
  posX = Math.random() * (window.innerWidth - 100);
  dangerImage.style.left = `${posX}px`;

  dangerInterval = setInterval(() => {
    posX += velocity;
    if (posX <= 0 || posX >= window.innerWidth - 100) velocity *= -1;
    dangerImage.style.left = `${posX}px`;
  }, 10);

  dangerTimer = setInterval(() => {
    asteria -= 1;
    updateDisplays();
  }, 1000);
}

dangerEl.onclick = () => {
  clearInterval(dangerInterval);
  clearInterval(dangerTimer);
  dangerEl.style.display = "none";
};

// Appear after 10 seconds
setTimeout(showDanger, 10000);

renderShops();
updateDisplays();

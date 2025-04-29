let count = 0;
let clickPower = 1;
let passiveIncome = 0;

const countEl = document.getElementById("count");
const dangerEl = document.getElementById("danger");

// Click power upgrades PASSIVE
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
  
  

function update() {
  countEl.textContent = count;
}
function buyPassive(itemName) {
    const item = passiveItems[itemName];
    if (count >= item.currentCost) {
      count -= item.currentCost;
      passiveIncome += item.income;
      item.owned += 1;
      item.currentCost = Math.floor(item.currentCost * 1.5);
      updateShopDisplay();
      update();
    }
  }
  

document.getElementById("clickBtn").onclick = () => {
  count += clickPower;
  update();
};

// Passive generation
setInterval(() => {
  count += passiveIncome;
  update();
}, 1000);

// DANGER
setInterval(() => {
  if (Math.random() < 0.2) {
    dangerEl.style.display = "block";
    let interval = setInterval(() => {
      count -= 1;
      update();
    }, 1000);

    dangerEl.onclick = () => {
      clearInterval(interval);
      dangerEl.style.display = "none";
    };
  }
}, 10000);

function updateShopDisplay() {
    const shop = document.getElementById("passiveShop");
    shop.innerHTML = "";
  
    for (const key in passiveItems) {
      const item = passiveItems[key];
  
      const card = document.createElement("div");
      card.className = "shop-item";
      card.style.backgroundImage = `url(${item.image})`;
  
      const nameEl = document.createElement("div");
      nameEl.className = "item-name";
      nameEl.innerText = capitalize(key);
  
      const priceEl = document.createElement("div");
      priceEl.className = "item-cost";
      priceEl.innerText = `${item.currentCost} Ⓐ`;
  
      const ownedEl = document.createElement("div");
      ownedEl.className = "item-owned";
      ownedEl.innerText = `Owned: ${item.owned}`;
  
      card.onclick = () => buyPassive(key);
      card.appendChild(nameEl);
      card.appendChild(priceEl);
      card.appendChild(ownedEl);
      shop.appendChild(card);
    }
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Run the display function on load
  updateShopDisplay();

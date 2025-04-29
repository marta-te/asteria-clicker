let count = 0;
let clickPower = 1;
let passiveIncome = 0;

const countEl = document.getElementById("count");

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

  let asteria = 100; // Starting Asteria count
  let dangerTimer = null;
  let dangerInterval = null;
  
  const dangerEl = document.getElementById("danger");
  const dangerImage = document.getElementById("dangerImage");
  
  const asteriaDisplay = document.getElementById("asteriaDisplay");
  
  function updateAsteriaDisplay() {
    asteriaDisplay.innerText = `Asteria: ${asteria} Ⓐ`;
  }
  
  // Function to show the danger image
  function showDanger() {
    console.log("Showing danger"); // Debugging log to check if function is triggered
    dangerEl.style.display = "block"; // Show the danger container
    
    // Random initial position at the top of the screen
    let posX = Math.random() * (window.innerWidth - 100); // Width minus image width
    dangerImage.style.left = `${posX}px`;
    dangerImage.style.top = `0px`; // Fixed at the top
  
    // Velocity for horizontal movement
    let velocityX = 2 * (Math.random() < 0.5 ? -1 : 1); // Random left or right
  
    // Floating horizontally with bouncing effect
    dangerInterval = setInterval(() => {
      posX += velocityX; // Update position
  
      // Bounce on edges
      if (posX <= 0 || posX >= window.innerWidth - 100) velocityX *= -1;
  
      // Apply new position
      dangerImage.style.left = `${posX}px`;
    }, 10); // Update every 10ms
  
    // Deduct Asteria every second
    if (dangerTimer === null) {
      dangerTimer = setInterval(() => {
        if (asteria >= 1) { // If we have Asteria to deduct
          asteria -= 1;
          updateAsteriaDisplay();
        }
      }, 1000); // Deduct every second
    }
  }
  
  // Function to handle danger image click (clear interval, hide danger)
  dangerEl.onclick = () => {
    console.log("Danger clicked"); // Debugging log to check if click is working
    clearInterval(dangerInterval);
    clearInterval(dangerTimer);
    dangerEl.style.display = "none"; // Hide the danger image
  };
  
  // Randomly show danger every 10 seconds with a 20% chance
  setInterval(() => {
    if (Math.random() < 0.2) { // 20% chance
      showDanger();
    }
  }, 10000); // Check every 10 seconds
  
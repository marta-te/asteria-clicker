let britneyVisible = false;
let britneyTimer;
let moveInterval;
let britneySpawnY = 0;


const britneyVelocity = 1.2;
function showBritney() {
    const dangerEl = document.getElementById("danger");
    if (!dangerEl) return;
  
    console.log("👀 Britney appears!");
  
    britneyVisible = true;
  
    // Center horizontally
    britneyX = (window.innerWidth - 100) / 2;
  
    // Update Y position to move her down each time
    britneySpawnY += 50;
    if (britneySpawnY > window.innerHeight - 100) britneySpawnY = 0; // reset if too far
  
    dangerEl.style.display = "block";
    dangerEl.style.left = `${britneyX}px`;
    dangerEl.style.top = `${britneySpawnY}px`;
  
    moveBritney();
  
    britneyTimer = setTimeout(() => {
      if (britneyVisible) {
        console.log("💀 Time’s up! She steals the Asteria.");
        stealAsteria();
        hideBritney();
      }
    }, 5000);
  }
  

  function moveBritney() {
    clearInterval(moveInterval);
  
    let britneyY = 0;
    let direction = 1; // 1 = moving down, -1 = moving up
    const verticalSpeed = 2; // pixels per frame
  
    moveInterval = setInterval(() => {
      if (!britneyVisible) return;
  
      britneyY += verticalSpeed * direction;
  
      const dangerEl = document.getElementById("danger");
      if (!dangerEl) return;
  
      dangerEl.style.left = `${(window.innerWidth / 2) - 50}px`; // center X
      dangerEl.style.top = `${britneyY}px`;
  
      const imageHeight = dangerEl.offsetHeight || 100; // fallback if not loaded
      const maxY = window.innerHeight - imageHeight;
  
      if (britneyY >= maxY || britneyY <= 0) {
        direction *= -1; // reverse direction
      }
    }, 16);
  }
  
function hideBritney() {
  clearTimeout(britneyTimer);
  clearInterval(moveInterval);
  const dangerEl = document.getElementById("danger");
  if (dangerEl) dangerEl.style.display = "none";
  britneyVisible = false;
}

function stealAsteria() {
  console.log("🧨 Britney Manson is stealing Asteria...");
  console.log("Asteria before:", asteria);

  asteria = 0; // She takes it all
  updateDisplays(); // Update DOM
  alert("💀 Britney Manson stole all your Asterias!");
}

function catchBritney() {
  if (britneyVisible) {
    console.log("✅ Britney was caught!");
    hideBritney();
  }
}

function startBritneyCycle() {
  const dangerImg = document.getElementById("dangerImage");
  if (dangerImg) {
    dangerImg.addEventListener("click", catchBritney);
  }

  setInterval(showBritney, 10000); // Every 10 seconds
}

startBritneyCycle();

// Optional: for debugging
window.addEventListener("error", e => {
  console.error("JS Error:", e.message);
});

let britneyVisible = false;
let britneyTimer;
let moveInterval;
let britneyX = 0;
let britneyY = 0; 
let britneySpawnY = 0;

const britneyVelocity = 1.2;

function showBritney() {
  const dangerEl = document.getElementById("danger");
  if (!dangerEl) return;

  console.log("👀 Britney appears!");

  britneyVisible = true;
  britneyX = window.innerWidth / 2 - 50; // center
  britneyY = 0;

  dangerEl.style.display = "block";
  dangerEl.style.left = `${britneyX}px`;
  dangerEl.style.top = `${britneyY}px`;

  moveBritney();

  // She will try to steal after 5 seconds
  britneyTimer = setTimeout(() => {
    if (britneyVisible) {
      stealAsteria();
    }
  }, 5000);
}

function moveBritney() {
  clearInterval(moveInterval);

  let direction = 1;
  const verticalSpeed = 2;

  moveInterval = setInterval(() => {
    if (!britneyVisible) return;

    britneyY += verticalSpeed * direction;

    const dangerEl = document.getElementById("danger");
    const gameArea = document.querySelector(".game-area");

    if (!dangerEl) return;

    dangerEl.style.left = `${(window.innerWidth / 2) - 50}px`;
    dangerEl.style.top = `${britneyY}px`;

    const imageHeight = dangerEl.offsetHeight || 100;
    const maxY = (gameArea?.offsetHeight || window.innerHeight) - imageHeight;

    if (britneyY >= maxY || britneyY <= 0) {
      direction *= -1;
    }
  }, 16);
}

function stealAsteria() {
  if (!britneyVisible) return;

  console.log("🧨 Britney Manson is stealing Asteria...");
  console.log("Asteria before:", asteria);

  asteria = 0;

  try {
    if (typeof updateDisplays === "function") {
      updateDisplays(); // Ensure it's available
    } else {
      console.warn("⚠️ updateDisplays not defined.");
    }

    alert("💀 Britney Manson stole all your Asterias!");
  } catch (error) {
    console.error("❌ Error during updateDisplays in stealAsteria:", error);
  }

  hideBritney(); // Call hideBritney to hide the element
}

function hideBritney() {
  const dangerEl = document.getElementById("danger");
  if (dangerEl) {
    dangerEl.style.display = "none"; // Hide the element
  }
  britneyVisible = false; // Update the visibility flag
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

document.addEventListener("DOMContentLoaded", () => {
  startBritneyCycle();
});

// Optional: for debugging
window.addEventListener("error", e => {
  console.error("JS Error:", e.message);
});

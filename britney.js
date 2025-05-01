let britneyVisible = false;
let britneyTimer;
let moveInterval;
let britneyX = -150;
const britneyVelocity = 1.2;
function showBritney() {
  const dangerEl = document.getElementById("danger");
  if (!dangerEl) return;

  console.log("👀 Britney appears!");

  britneyVisible = true;
  britneyX = -150;

  dangerEl.style.display = "block";
  dangerEl.style.left = `${britneyX}px`;

  moveBritney();

  // Start 5-second timer to steal Asteria
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
  moveInterval = setInterval(() => {
    if (!britneyVisible) return;

    britneyX += britneyVelocity;
    const dangerEl = document.getElementById("danger");
    if (!dangerEl) return;

    dangerEl.style.left = `${britneyX}px`;

    if (britneyX > window.innerWidth + 100) {
      console.log("👉 Britney went off-screen without being caught.");
      hideBritney();
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

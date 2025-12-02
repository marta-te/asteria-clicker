let britneyVisible = false;
let britneyTimer;
let moveInterval;
let britneyX = 0;
let britneyY = 0;
let britneySpawnModifier = 1.0;

// === LAZY DOM GETTER ===
function getDangerElements() {
  return {
    dangerEl: document.getElementById("danger"),
    dangerImage: document.getElementById("dangerImage")
  };
}

const britneyVelocity = 1.2;

// === SHOW BRITNEY ===
function showBritney() {
  if (britneyVisible) return;

  const { dangerEl } = getDangerElements();
  if (!dangerEl) {
    console.warn("⚠️ Britney container not found");
    return;
  }

  console.log("👀 Britney appears!");

  britneyVisible = true;
  britneyX = window.innerWidth / 2 - 50;
  britneyY = 0;

  dangerEl.style.display = "block";
  dangerEl.style.left = `${britneyX}px`;
  dangerEl.style.top = `${britneyY}px`;

  moveBritney();

  britneyTimer = setTimeout(() => {
    if (britneyVisible) {
      stealAsteria();
    }
  }, 5000);
}

// === MOVE BRITNEY ===
function moveBritney() {
  clearInterval(moveInterval);

  let direction = 1;
  const verticalSpeed = 2;

  moveInterval = setInterval(() => {
    if (!britneyVisible) return;

    const { dangerEl } = getDangerElements();
    if (!dangerEl) {
      clearInterval(moveInterval);
      return;
    }

    britneyY += verticalSpeed * direction;

    dangerEl.style.left = `${(window.innerWidth / 2) - 50}px`;
    dangerEl.style.top = `${britneyY}px`;

    const imageHeight = dangerEl.offsetHeight || 100;
    const maxY = (document.querySelector(".game-area")?.offsetHeight || window.innerHeight) - imageHeight;

    if (britneyY >= maxY || britneyY <= 0) {
      direction *= -1;
    }
  }, 16);
}

// === STEAL ASTERIA ===

// === HIDE BRITNEY ===
function hideBritney() {
  clearInterval(moveInterval);
  clearTimeout(britneyTimer);
  const { dangerEl } = getDangerElements();
  if (dangerEl) {
    dangerEl.style.display = "none";
  }
  britneyVisible = false;
}

// === CLICK TO CATCH ===
document.addEventListener("click", (e) => {
  const { dangerImage } = getDangerElements();
  if (!dangerImage) return;

  // Check if the click is on the Britney image
  if (dangerImage.contains(e.target) && britneyVisible) {
    console.log("✅ Britney was caught!");
    hideBritney();
    if (typeof updateBritneyProgress === 'function') {
      updateBritneyProgress(1);
    }
  }
});

// === SPAWN CHECK EVERY 10 SECONDS ===
const spawnInterval = setInterval(() => {
  const { dangerEl } = getDangerElements();
  if (!dangerEl) {
    // DOM is gone (logged out), stop checking
    clearInterval(spawnInterval);
    return;
  }

  const adjustedChance = 1.0 * britneySpawnModifier;
  const roll = Math.random();
  console.log(`🎯 Spawn roll: ${roll} vs chance ${adjustedChance}`);

  if (!britneyVisible && roll < adjustedChance) {
    showBritney();
  }
}, 10000);

// === EXTERNAL CONTROL ===
function reduceBritneyChanceBy(percent) {
  britneySpawnModifier *= (1 - percent);
  if (britneySpawnModifier < 0) britneySpawnModifier = 0;
  console.log(`🔻 Britney spawn modifier now: ${britneySpawnModifier}`);
}

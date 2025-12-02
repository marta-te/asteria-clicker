// === LOAD SAVED GAME STATE AT STARTUP ===
// This runs before renderShops(), after items are defined

// Load saved asteria score if it was set by game.html/Firebase
if (window.asteriaToLoad !== undefined && window.asteriaToLoad > 0) {
  asteria = window.asteriaToLoad;
  console.log(`✅ Loaded asteria from Firestore: ${asteria}`);
}

// Load saved game state (items, powerups, etc.) if it exists
if (window.gameStateToLoad) {
  window.loadGameState(window.gameStateToLoad);
  console.log("✅ Loaded gameState from Firestore");
}

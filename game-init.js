// === LOAD SAVED GAME STATE ON STARTUP ===
// This runs after game.js loads but before renderShops/updateDisplays

// Load asteria score
if (window.asteriaToLoad !== undefined) {
  asteria = window.asteriaToLoad;
  console.log(`✅ Loaded asteria: ${asteria}`);
}

// Load game state (items, powerups, etc.)
if (window.gameStateToLoad) {
  window.loadGameState(window.gameStateToLoad);
}

// Update display with loaded values
if (typeof updateDisplays === 'function') {
  updateDisplays();
}
if (typeof renderShops === 'function') {
  renderShops();
}
if (typeof updateAsteriaImage === 'function') {
  updateAsteriaImage();
}

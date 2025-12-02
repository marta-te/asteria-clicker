Update the game.html to set window.asteriaToLoad and window.gameStateToLoad before game.js loads, and update game.js to load these values at startup.

The key insight:
- game.html loads the saved score/gameState from Firestore and sets them on window
- game.js should read these values at startup (after items are defined)
- game.js initializes asteria with the saved value
- window.saveProgress reads window.asteria directly (not from DOM)

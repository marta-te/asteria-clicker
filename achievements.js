export const achievements = {
    firstClick: {
      unlocked: false,
      condition: () => asteria >= 1,
      message: "First Asteria earned!"
    },
    hairDyeBought: {
      unlocked: false,
      condition: () => hasHairDye,
      message: "You dyed your hair red!"
    },
    kittyCombo: {
      unlocked: false,
      condition: () => hasHairDye && hasHelloKittyHat,
      message: "Hello Kitty Mode Activated!"
    },
    richAsteria: {
      unlocked: false,
      condition: () => asteria >= 100000,
      message: "You're rich now 💸"
    }
  };
  
  export function checkAchievements() {
    const list = document.getElementById("achievementsList");
    if (!list) return;
  
    for (const [key, ach] of Object.entries(achievements)) {
      if (!ach.unlocked && ach.condition()) {
        ach.unlocked = true;
        showAchievement(ach.message);
  
        const li = document.createElement("li");
        li.textContent = `✅ ${ach.message}`;
        list.appendChild(li);
      }
    }
  }
  
  export function showAchievement(message) {
    console.log("Achievement Unlocked:", message);
    // Optional: Add a popup/notification effect here.
  }
  
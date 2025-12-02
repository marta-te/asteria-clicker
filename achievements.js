let achievements = {
    firstClick: {name: "First Click",unlocked: false,description: "You clicked 1, 100, 1000000 times!", progress:0,
        tiers: [
            { amount: 1, unlocked: false },
            { amount: 100, unlocked: false },
            { amount: 1000000, unlocked: false },
          ],
    },
    
    FBM: {name: "FBM",unlocked: false,description: "80% less chance of Britney.",},
    
    redMercedes: {name: "Red Mercedes",unlocked: false,description: "+active item: drift",},
    
    fanart: {name: "fanart", unlocked: false, description: "Anarchist sanctuary lets fans share art! | +passive item fanart",},

    Welostitall: {name: "We Lost It all",unlocked: false,description: "Lose all your Ⓐ to Britney",},
    
    infiniteSwag: {name: "Infinite Swag",unlocked: false,description: "Swag galore | +passive item: GALORE",},

    // New achievements
    Collector: { name: "Collector", unlocked: false, description: "Own 10 active items.", },
    Wealthy: { name: "Wealthy", unlocked: false, description: "Accumulate 10,000 Ⓐ (current or all-time).", },
    PassiveMaster: { name: "Passive Master", unlocked: false, description: "Reach +100 Ⓐ/s passive income.", },
    buyHairDye: { name: "Hair Dye Buyer", unlocked: false, description: "Purchase hair dye for Asteria.", },
    
    britneyCatcher: {
          name: "Britney Catcher",description: "Catch 10, 100, and 1000 Britneys.",progress: 0,
          tiers: [
            { amount: 10, unlocked: false },
            { amount: 100, unlocked: false },
            { amount: 1000, unlocked: false },
          ],
        }
  };

// expose globally so save/load can access it
window.achievements = achievements;

  function unlockAchievement(key) {
    const achievement = achievements[key];
    if (!achievement || achievement.unlocked) return;
  
    achievement.unlocked = true;
    console.log(`Achievement Unlocked: ${achievement.name}`);
    achievement.lastUnlockedAt = Date.now();
    renderAchievements();
  
    // Add glow effect to the button
    const btn = document.getElementById("achievementsBtn");
    btn.classList.add("glow");
  
    // Auto-open panel briefly
    const panel = document.getElementById("achievementsPanel");
    panel.style.display = "block";
    panel.classList.add("active");

  
    setTimeout(() => {
      panel.classList.remove("active");
      panel.style.display = "none";
    }, 2000);
  }
  
  function renderAchievements() {
    const list = document.getElementById("achievementsList");
    list.innerHTML = "";
  
    const entries = Object.entries(achievements)
    .filter(([_, ach]) => ach.tiers ? ach.tiers.some(t => t.unlocked) : ach.unlocked)
    .sort(([_, a], [__, b]) => (b.lastUnlockedAt || 0) - (a.lastUnlockedAt || 0));
  
  entries.forEach(([key, ach]) => {
    const li = document.createElement("li");
    const name = document.createElement("div");
    name.textContent = ach.name;
    name.classList.add("achievement-name");
  
    const desc = document.createElement("div");
    desc.textContent = ach.description;
    desc.classList.add("achievement-description");
  
    if (ach.tiers) {
      li.className = "achievement britney-progress";
      const highestTier = ach.tiers.reduce((acc, tier, i) => tier.unlocked ? i + 1 : acc, 0);
      const progressPercent = highestTier === 1 ? 30 : highestTier === 2 ? 60 : highestTier === 3 ? 100 : 0;
      li.style.setProperty('--progress', `${progressPercent}%`);
    } else {
      li.className = "achievement" + (ach.unlocked ? " unlocked" : "");
    }
  
    li.appendChild(name);
    li.appendChild(desc);
    list.appendChild(li);
  });
  
  }
  
  
  window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("achievementsBtn");
    const panel = document.getElementById("achievementsPanel");
  
    btn.onclick = () => {
      const isHidden = panel.style.display === "none";
      panel.style.display = isHidden ? "block" : "none";
      btn.classList.remove("glow");
    };

    renderAchievements();
  });

// If game.js loaded saved achievements before this file did, apply them now
if (window.achievementsToLoad) {
  try {
    for (const [key, saved] of Object.entries(window.achievementsToLoad)) {
      const target = achievements[key];
      if (!target) continue;
      if (saved.unlocked !== undefined) target.unlocked = saved.unlocked;
      if (saved.progress !== undefined) target.progress = saved.progress;
      if (saved.lastUnlockedAt !== undefined) target.lastUnlockedAt = saved.lastUnlockedAt;
      if (Array.isArray(saved.tiers) && Array.isArray(target.tiers)) {
        for (let i = 0; i < Math.min(saved.tiers.length, target.tiers.length); i++) {
          if (saved.tiers[i] && saved.tiers[i].unlocked !== undefined) target.tiers[i].unlocked = saved.tiers[i].unlocked;
        }
      }
    }
    renderAchievements();
  } catch (e) {
    console.error('Error applying stashed achievements:', e);
  }
  // clear stash
  delete window.achievementsToLoad;
}
  
  
  function updateBritneyProgress(count) {
    const ach = achievements.britneyCatcher;
    ach.progress += count;
  
    ach.tiers.forEach((tier, index) => {
      if (!tier.unlocked && ach.progress >= tier.amount) {
        tier.unlocked = true;
        console.log(`Achievement Tier ${index + 1} Unlocked: ${ach.name}`);
        ach.lastUnlockedAt = Date.now();
        renderAchievements();
        
        // Optional: Auto-open panel
        const panel = document.getElementById("achievementsPanel");
        panel.classList.add("active");
        setTimeout(() => panel.classList.remove("active"), 2000);
  
        // Optional: Glow button
        document.getElementById("achievementsBtn").classList.add("glow");
      }
    });
  }
  
  function updateClickProgress(count) {
    const ach = achievements.firstClick;
    ach.progress += count;
  
    // Find the *first* tier that should now unlock
    for (let i = 0; i < ach.tiers.length; i++) {
      const tier = ach.tiers[i];
      if (!tier.unlocked && ach.progress >= tier.amount) {
        tier.unlocked = true;
        console.log(`✅ Click Achievement Tier ${i + 1} Unlocked: ${ach.name}`);
        ach.lastUnlockedAt = Date.now();
        renderAchievements();
  
        const panel = document.getElementById("achievementsPanel");
        panel.classList.add("active");
        setTimeout(() => panel.classList.remove("active"), 2000);
  
        document.getElementById("achievementsBtn").classList.add("glow");
        break; // ✅ stop after unlocking just one tier
      }
    }
  }
  
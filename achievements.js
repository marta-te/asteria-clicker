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
    
    infiniteSwag: {name: "Infinite Swag",unlocked: false,description: "Swag galore | +active item: GALORE",},
    
    britneyCatcher: {
          name: "Britney Catcher",description: "Catch 10, 100, and 1000 Britneys.",progress: 0,
          tiers: [
            { amount: 10, unlocked: false },
            { amount: 100, unlocked: false },
            { amount: 1000, unlocked: false },
          ],
        }
  };

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
  
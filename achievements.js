let achievements = {
    firstClick: {
      name: "First Click",
      unlocked: false,
      description: "You clicked for the first time!",
    },
    FBM: {
        name: "FBM",
        unlocked: false,
        description: "80% less chance of Britney.",
      },
    redMercedes: {
        name: "Red Mercedes",
        unlocked: false,
        description: "+active item: drift",
      },
      infiniteSwag: {
        name: "Infinite Swag",
        unlocked: false,
        description: "Swag galore | +active item: GALORE",
      },
    britneyCatcher: {
          name: "Britney Catcher",
          description: "Catch 10, 100, and 1000 Britneys.",
          progress: 0,
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
  
    Object.entries(achievements).forEach(([key, ach]) => {
      // Hide if no tiers are unlocked yet
      const anyUnlocked = ach.tiers ? ach.tiers.some(t => t.unlocked) : ach.unlocked;
      if (!anyUnlocked) return;
  
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
      list.insertBefore(li, list.firstChild);

    });
  }
  
  
  window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("achievementsBtn");
    const panel = document.getElementById("achievementsPanel");
  
    btn.onclick = () => {
      const isHidden = panel.style.display === "none";
      panel.style.display = isHidden ? "block" : "none";
  
      // Stop the glowing once the player checks the panel
      btn.classList.remove("glow");
    };
  
    renderAchievements();
  });
  document.getElementById("clickBtn").addEventListener("click", () => {
    unlockAchievement("firstClick");
  });
  
  function updateBritneyProgress(count) {
    const ach = achievements.britneyCatcher;
    ach.progress += count;
  
    ach.tiers.forEach((tier, index) => {
      if (!tier.unlocked && ach.progress >= tier.amount) {
        tier.unlocked = true;
        console.log(`Achievement Tier ${index + 1} Unlocked: ${ach.name}`);
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
  
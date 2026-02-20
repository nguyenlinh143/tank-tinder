/* ===============================
   FISH DATABASE
================================= */
const fishDatabase = [
  { name: "Guppy", minTank: 10, aggression: 1, shrimpSafe: true, minGroup: 3, maxGroup: 9, minTemp: 22, maxTemp: 28,
    pH: { min: 6.8, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore (flakes, frozen, live food)", activity: "Moderate", jump: true,
    notes: "Very beginner-friendly, colorful, easy to care for", image: "images/guppy.jpg", type: "fish" },

  { name: "Endler Guppy", minTank: 10, aggression: 1, shrimpSafe: true, minGroup: 3, maxGroup: 9, minTemp: 22, maxTemp: 28,
    pH: { min: 6.8, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore (flakes, frozen, live food)", activity: "Moderate", jump: true,
    notes: "Small, active, beginner-friendly", image: "images/endlers_guppy.jpg", type: "fish" },

  { name: "Neon Tetra", minTank: 10, aggression: 1, shrimpSafe: true, minGroup: 6, maxGroup: 12, minTemp: 21, maxTemp: 26,
    pH: { min: 6.0, max: 7.0 }, hardness: { min: 5, max: 12 }, diet: "Omnivore (flakes, frozen, live food)", activity: "Moderate", jump: false,
    notes: "Peaceful schooling fish, beginner-friendly", image: "images/neon_tetra.jpg", type: "fish" },

  { name: "Cardinal Tetra", minTank: 15, aggression: 1, shrimpSafe: true, minGroup: 6, maxGroup: 12, minTemp: 22, maxTemp: 26,
    pH: { min: 6.0, max: 7.0 }, hardness: { min: 5, max: 12 }, diet: "Omnivore (flakes, frozen, live food)", activity: "Moderate", jump: false,
    notes: "Peaceful, very colorful, beginner-friendly", image: "images/cardinal_tetra.jpg", type: "fish" },

  { name: "Rummy Nose Tetra", minTank: 20, aggression: 1, shrimpSafe: true, minGroup: 6, maxGroup: 12, minTemp: 22, maxTemp: 27,
    pH: { min: 6.5, max: 7.0 }, hardness: { min: 5, max: 15 }, diet: "Omnivore (flakes, frozen, live food)", activity: "High", jump: false,
    notes: "Active schooling fish, beginner-friendly", image: "images/rummy_nose_tetra.jpg", type: "fish" },

  { name: "Ember Tetra", minTank: 10, aggression: 1, shrimpSafe: true, minGroup: 6, maxGroup: 12, minTemp: 22, maxTemp: 28,
    pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore (flakes, frozen, live food)", activity: "Moderate", jump: false,
    notes: "Small, bright, easy to care for", image: "images/ember_tetra.jpg", type: "fish" },

  { name: "Harlequin Rasbora", minTank: 15, aggression: 1, shrimpSafe: true, minGroup: 6, maxGroup: 12, minTemp: 22, maxTemp: 28,
    pH: { min: 6.0, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore (flakes, frozen, live food)", activity: "Moderate", jump: true,
    notes: "Peaceful, schooling fish, beginner-friendly", image: "images/harlequin_rasbora.jpg", type: "fish" },

  { name: "Chili Rasbora", minTank: 10, aggression: 1, shrimpSafe: true, minGroup: 8, maxGroup: 16, minTemp: 22, maxTemp: 28,
    pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore", activity: "Moderate", jump: false,
    notes: "Small, colorful, peaceful, beginner-friendly", image: "images/chili_rasbora.jpg", type: "fish" },

  { name: "Zebra Danio", minTank: 10, aggression: 2, shrimpSafe: true, minGroup: 6, maxGroup: 12, minTemp: 20, maxTemp: 26,
    pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore", activity: "High", jump: true,
    notes: "Active, schooling fish, beginner-friendly", image: "images/zebra_danio.jpg", type: "fish" },

  { name: "White Cloud Minnow", minTank: 10, aggression: 1, shrimpSafe: true, minGroup: 6, maxGroup: 12, minTemp: 18, maxTemp: 22,
    pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 12 }, diet: "Omnivore", activity: "Moderate", jump: false,
    notes: "Peaceful, hardy, beginner-friendly", image: "images/white_cloud_minnow.jpg", type: "fish" },

  // Livebearers
  { name: "Platy", minTank: 10, aggression: 1, shrimpSafe: true, minGroup: 3, maxGroup: 9, minTemp: 22, maxTemp: 28,
    pH: { min: 6.8, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore", activity: "Moderate", jump: false,
    notes: "Peaceful, beginner-friendly", image: "images/platy.jpg", type: "fish" },

  { name: "Molly", minTank: 20, aggression: 2, shrimpSafe: true, minGroup: 3, maxGroup: 9, minTemp: 22, maxTemp: 28,
    pH: { min: 6.8, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore", activity: "Moderate", jump: false,
    notes: "Peaceful, easy to care for", image: "images/molly.jpg", type: "fish" },

  { name: "Swordtail", minTank: 20, aggression: 2, shrimpSafe: true, minGroup: 3, maxGroup: 9, minTemp: 22, maxTemp: 28,
    pH: { min: 6.8, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore", activity: "Moderate", jump: false,
    notes: "Active, peaceful, beginner-friendly", image: "images/swordtail.jpg", type: "fish" },

  // Semi Aggressive
  { name: "Betta", minTank: 10, aggression: 4, shrimpSafe: false, minGroup: 1, maxGroup: 1, minTemp: 24, maxTemp: 28,
    pH: { min: 6.8, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Carnivore (flakes, frozen, live food)", activity: "Moderate", jump: true,
    notes: "Colorful, aggressive toward other males", image: "images/betta.jpg", type: "fish" },

  { name: "Dwarf Gourami", minTank: 20, aggression: 2, shrimpSafe: false, minGroup: 1, maxGroup: 2, minTemp: 24, maxTemp: 28,
    pH: { min: 6.0, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore", activity: "Moderate", jump: false,
    notes: "Peaceful, slightly shy, beginner-friendly", image: "images/dwarf_gourami.jpg", type: "fish" },

  { name: "Angelfish", minTank: 30, aggression: 3, shrimpSafe: false, minGroup: 1, maxGroup: 2, minTemp: 24, maxTemp: 30,
    pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore", activity: "Moderate", jump: false,
    notes: "Tall, graceful, semi-aggressive", image: "images/angelfish.jpg", type: "fish" },

  { name: "German Blue Ram", minTank: 20, aggression: 3, shrimpSafe: false, minGroup: 2, maxGroup: 4, minTemp: 24, maxTemp: 28,
    pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 12 }, diet: "Omnivore", activity: "Moderate", jump: false,
    notes: "Colorful dwarf cichlid, sensitive to water", image: "images/german_blue_ram.jpg", type: "fish" },

  { name: "Kribensis", minTank: 20, aggression: 3, shrimpSafe: false, minGroup: 2, maxGroup: 4, minTemp: 24, maxTemp: 28,
    pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore", activity: "Moderate", jump: false,
    notes: "Semi-aggressive cichlid, good for experienced beginners", image: "images/kribensis.jpg", type: "fish" },

//   // Bottom Dwellers & Cleaners
//   { name: "Corydoras", minTank: 15, aggression: 1, shrimpSafe: true, minGroup: 6, maxGroup: 12, minTemp: 22, maxTemp: 26,
//     pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore", activity: "Moderate", jump: false,
//     notes: "Peaceful, social bottom dweller, beginner-friendly", image: "images/corydoras.jpg", type: "fish" },

//   { name: "Pygmy Corydoras", minTank: 10, aggression: 1, shrimpSafe: true, minGroup: 6, maxGroup: 12, minTemp: 22, maxTemp: 26,
//     pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore", activity: "Moderate", jump: false,
//     notes: "Small, peaceful, beginner-friendly", image: "images/pygmy_corydoras.jpg", type: "fish" },

//   { name: "Otocinclus", minTank: 15, aggression: 1, shrimpSafe: true, minGroup: 4, maxGroup: 8, minTemp: 22, maxTemp: 26,
//     pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 12 }, diet: "Algae eater", activity: "Moderate", jump: false,
//     notes: "Small algae cleaner, peaceful, beginner-friendly", image: "images/otocinclus.jpg", type: "fish" },

//   { name: "Bristlenose Pleco", minTank: 25, aggression: 2, shrimpSafe: true, minGroup: 1, maxGroup: 2, minTemp: 23, maxTemp: 28,
//     pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Algae eater", activity: "Low", jump: false,
//     notes: "Good algae cleaner, peaceful", image: "images/bristlenose_pleco.jpg", type: "fish" },

//   { name: "Clown Pleco", minTank: 20, aggression: 2, shrimpSafe: true, minGroup: 1, maxGroup: 2, minTemp: 23, maxTemp: 28,
//     pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Algae eater", activity: "Low", jump: false,
//     notes: "Small pleco, peaceful", image: "images/clown_pleco.jpg", type: "fish" },

//   { name: "Kuhli Loach", minTank: 20, aggression: 1, shrimpSafe: true, minGroup: 5, maxGroup: 10, minTemp: 22, maxTemp: 26,
//     pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 12 }, diet: "Omnivore", activity: "Moderate", jump: false,
//     notes: "Peaceful, burrowing bottom dweller", image: "images/kuhli_loach.jpg", type: "fish" },

  // Shrimp
  { name: "Cherry Shrimp", minTank: 10, aggression: 1, shrimpSafe: true, minGroup: 5, maxGroup: 30, minTemp: 22, maxTemp: 28,
    pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore (algae, flakes)", activity: "Low", jump: false,
    notes: "Peaceful, beginner-friendly", image: "images/cherry_shrimp.jpg", type: "shrimp" },

  { name: "Amano Shrimp", minTank: 15, aggression: 1, shrimpSafe: true, minGroup: 5, maxGroup: 30, minTemp: 22, maxTemp: 28,
    pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "Omnivore (algae, biofilm)", activity: "Low", jump: false,
    notes: "Peaceful, great algae cleaner", image: "images/amano_shrimp.jpg", type: "shrimp" },

  // Snail
  { name: "Nerite Snail", minTank: 10, aggression: 1, shrimpSafe: true, minGroup: 1, maxGroup: 5, minTemp: 22, maxTemp: 28,
    pH: { min: 7.0, max: 8.0 }, hardness: { min: 8, max: 18 }, diet: "Algae eater", activity: "Low", jump: false,
    notes: "Peaceful, cleans algae", image: "images/nerite_snail.jpg", type: "snail" },

  { name: "Mystery Snail", minTank: 10, aggression: 1, shrimpSafe: true, minGroup: 1, maxGroup: 5, minTemp: 22, maxTemp: 28,
    pH: { min: 7.0, max: 8.0 }, hardness: { min: 8, max: 18 }, diet: "Omnivore", activity: "Low", jump: false,
    notes: "Peaceful, beginner-friendly", image: "images/mystery_snail.jpg", type: "snail" },

  // Plants
  { name: "Java Moss", minTank: 1, aggression: 0, shrimpSafe: true, minGroup: 1, maxGroup: 20, minTemp: 20, maxTemp: 28,
    pH: { min: 6.0, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "N/A", activity: "N/A", jump: false,
    notes: "Easy to grow, provides hiding spots", image: "images/java_moss.jpg", type: "plant" },

  { name: "Anubias", minTank: 1, aggression: 0, shrimpSafe: true, minGroup: 1, maxGroup: 10, minTemp: 22, maxTemp: 28,
    pH: { min: 6.5, max: 7.5 }, hardness: { min: 5, max: 15 }, diet: "N/A", activity: "N/A", jump: false,
    notes: "Hardy, beginner-friendly plant", image: "images/anubias.jpg", type: "plant" }
];




/* ===============================
   🔧 DOM REFERENCES
================================= */

const fish1 = document.getElementById("mainFish");
const fish2 = document.getElementById("bestFriendFish");
const fish3Input = document.getElementById("wildcardFish");
const searchResults = document.getElementById("results");
const wildcardResults = document.getElementById("wildcardResults");
const searchBtn = document.getElementById("searchBtn");

// let selectedWildcardFish = null;
let selectedWildcardFish = []; // now an array for adding multiple wildcard fish
const MAX_WILDCARD = 5;

/* ===============================
    LOAD DROPDOWNS
================================= */

function loadFish() {
    fishDatabase.forEach(fish => {
        if (fish.type === "fish") {
            const opt1 = document.createElement("option");
            opt1.text = fish.name;
            fish1.add(opt1);

            const opt2 = document.createElement("option");
            opt2.text = fish.name;
            fish2.add(opt2);
        }
    });
}

loadFish();


/* ===============================
   WILDCARD LIVE SEARCH
================================= */

//user can add up to 5 wildcard fish 

fish3Input.addEventListener("input", function() {
    const query = this.value.toLowerCase();
    wildcardResults.innerHTML = ""; // clear previous matches

    if (!query) return; // stop if empty

    const matches = fishDatabase.filter(f =>
        f.type === "fish" && f.name.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
        wildcardResults.innerHTML = "<p>No matches found.</p>";
        return;
    }

    matches.forEach(fish => {
        const div = document.createElement("div");
        div.classList.add("search-item");
        div.textContent = fish.name;

        div.onclick = () => {
            if (selectedWildcardFish.length >= MAX_WILDCARD) {
                alert(`You can add up to ${MAX_WILDCARD} extra fish.`);
                return;
            }

            // avoid duplicates
            if (selectedWildcardFish.some(f => f.name === fish.name)) return;

            selectedWildcardFish.push(fish);
            renderWildcardList();
            fish3Input.value = "";
            wildcardResults.innerHTML = "";
        };

        wildcardResults.appendChild(div);
    });
});


function renderWildcardList() {
    let container = document.getElementById("wildcardSelected");
    if (!container) {
        container = document.createElement("div");
        container.id = "wildcardSelected";
        fish3Input.after(container);
    }
    container.innerHTML = "<strong>Selected Extra Fish:</strong>";

    selectedWildcardFish.forEach((fish, index) => {
        const div = document.createElement("div");
        div.classList.add("wildcard-item");
        div.innerHTML = `
            ${index + 1}. ${fish.name} 
            <button onclick="removeWildcard(${index})">Delete</button>
        `;
        container.appendChild(div);
    });
}

function removeWildcard(index) {
    selectedWildcardFish.splice(index, 1);
    renderWildcardList();
}


/* ===============================
    FISH CARD TEMPLATE
================================= */

// function createFishCard(fish) {
//     return `
//     <div class="fish-card">
//         <img src="${fish.image}" alt="${fish.name}">
//         <div>
//             <strong>${fish.name}</strong><br>
//             Tank Size: ${fish.minTank} gallons (minimum). Larger tanks are better for stable water conditions and healthier fish.<br>
//             Temperature: ${fish.minTemp}°C - ${fish.maxTemp}°C<br>
//             Aggression: ${fish.aggression}/5<br>
//             Group Size: ${fish.minGroup} - ${fish.maxGroup} fish(es). 
//         Note: Social species need at least the minimum number to feel comfortable and display natural behaviors. Avoid exceeding the maximum to prevent overcrowding, stress, and aggression.
//         </div>
//     </div>
//     `;
// }
function createFishCard(fish) {
    return `
    <div class="fish-card">
        <img src="${fish.image}" alt="${fish.name}" class="fish-image">
        <div class="fish-info">
            <h3>${fish.name}</h3>
            
            <p><strong>Tank Size:</strong> ${fish.minTank} gallons (minimum). Larger tanks help keep water stable and fish healthy.</p>
            
            <p><strong>Temperature:</strong> ${fish.minTemp}°C - ${fish.maxTemp}°C</p>
            
            <p><strong>Aggression Level:</strong> ${fish.aggression}/5</p>
            
            <p><strong>Group Size:</strong> ${fish.minGroup} - ${fish.maxGroup} fish(es).<br>
            <em>Note:</em> Social species need at least the minimum number to feel comfortable and display natural behaviors. Avoid exceeding the maximum to prevent overcrowding, stress, and aggression.</p>
            
            <p><strong>pH Range:</strong> ${fish.pH.min} - ${fish.pH.max} (ideal water pH)</p>
            
            <p><strong>Water Hardness:</strong> ${fish.hardness.min} - ${fish.hardness.max} dGH (soft to medium)</p>
            
            <p><strong>Diet:</strong> ${fish.diet}</p>
            
            <p><strong>Activity Level:</strong> ${fish.activity}</p>
            
            <p><strong>Jump Risk:</strong> ${fish.jump ? "Yes" : "No"}</p>
            
            <p><strong>Notes:</strong> ${fish.notes}</p>
        </div>
    </div>
    `;
}
/* ===============================
   SMART SCORING SYSTEM
================================= */

function calculateCompatibilityScore(selectedFish, tankSize) {
    let score = 100;

    // Temperature overlap
    const minTemp = Math.max(...selectedFish.map(f => f.minTemp));
    const maxTemp = Math.min(...selectedFish.map(f => f.maxTemp));

    if (minTemp > maxTemp) {
        score -= 40;
    }

    // Aggression difference
    const maxAgg = Math.max(...selectedFish.map(f => f.aggression));
    const minAgg = Math.min(...selectedFish.map(f => f.aggression));
    score -= (maxAgg - minAgg) * 10;

    // Tank size requirement
    selectedFish.forEach(f => {
        if (tankSize < f.minTank) score -= 15;
    });

    if (score < 0) score = 0;

    return score;
}

function calculateTankCapacity(selectedFish, tankSize) {
    let totalInches = 0;

    selectedFish.forEach(f => {
        // Since your database doesn't have "size" yet,
        // we estimate based on tank requirement (simple version)
        totalInches += (f.minTank / 5);
    });

    return (totalInches / tankSize) * 100;
}


/* ===============================
    COMPATIBILITY CHECK
================================= */

function checkCompatibility() {

    const f1 = fishDatabase.find(f => f.name === fish1.value);
    const f2 = fishDatabase.find(f => f.name === fish2.value);
    const tankSize = parseInt(document.getElementById("tankSize").value);
    const addShrimp = document.getElementById("addShrimp").checked;
    const addSnail = document.getElementById("addSnail").checked;
    const addPlants = document.getElementById("addPlants").checked;

    if (!tankSize) {
        searchResults.innerHTML = "<p>Please enter tank size.</p>";
        return;
    }

    // include all wildcard fish
    let selectedFish = [f1, f2].concat(selectedWildcardFish);

    let cards = "";
    let messages = "<h3>Compatibility Report:</h3>";
    let reasons = [];

    selectedFish.forEach(f => cards += createFishCard(f));

    // Tank size check
    selectedFish.forEach(f => {
        if (tankSize < f.minTank) reasons.push(`Tank too small for ${f.name}.`);
        if (tankSize > f.minTank * 5) reasons.push(`Tank unusually big for ${f.name}, may stress fish.`);
    });

    // Aggression check
    const maxAgg = Math.max(...selectedFish.map(f => f.aggression));
    const minAgg = Math.min(...selectedFish.map(f => f.aggression));

    if (maxAgg - minAgg >= 3) {
        reasons.push("Aggression mismatch. Some fish may fight.");
    } else {
        reasons.push("Peaceful vibes detected.");
    }

    // Pair logic
    for (let i = 0; i < selectedFish.length; i++) {
        for (let j = i + 1; j < selectedFish.length; j++) {
            const fA = selectedFish[i];
            const fB = selectedFish[j];

            if (!fB.shrimpSafe && fA.type === "shrimp")
                reasons.push(`${fA.name} may harm ${fB.name}.`);

            if (!fA.shrimpSafe && fB.type === "shrimp")
                reasons.push(`${fB.name} may harm ${fA.name}.`);

            if (Math.abs(fA.aggression - fB.aggression) >= 3)
                reasons.push(`${fA.name} may not get along with ${fB.name}.`);
        }
    }

    messages += "<ul>";
    reasons.forEach(r => messages += `<li>${r}</li>`);
    messages += "</ul>";

    // Suggested Extras
    let extraSpecies = [];

    if (addShrimp)
        extraSpecies = extraSpecies.concat(
            fishDatabase.filter(f =>
                f.type === "shrimp" &&
                selectedFish.every(sf => sf.shrimpSafe)
            )
        );

    if (addSnail)
        extraSpecies = extraSpecies.concat(
            fishDatabase.filter(f => f.type === "snail")
        );

    if (addPlants)
        extraSpecies = extraSpecies.concat(
            fishDatabase.filter(f => f.type === "plant")
        );

    if (extraSpecies.length > 0) {
        messages += "<h4>Suggested Extras 🦐🐌🌿</h4><ul>";
        extraSpecies.forEach(f => messages += `<li>${f.name}</li>`);
        messages += "</ul>";

        extraSpecies.forEach(f => cards += createFishCard(f));
    }

    // searchResults.innerHTML = messages + cards;
    //  Compatibility Score
const score = calculateCompatibilityScore(selectedFish, tankSize);

let label = "";
if (score >= 85) label = "💖 Perfect Match";
else if (score >= 65) label = "💛 Good Match";
else if (score >= 40) label = "⚠ Risky Match";
else label = "💔 Not Recommended";

// 🐠 Tank Capacity
const tankPercent = calculateTankCapacity(selectedFish, tankSize);

let tankColor = "green";
if (tankPercent > 100) tankColor = "red";
else if (tankPercent > 80) tankColor = "orange";

const meterHTML = `
<h4>Tank Capacity</h4>
<div class="meter-bar">
    <div class="meter-fill" style="width:${Math.min(tankPercent,100)}%; background:${tankColor};"></div>
</div>
<p>${tankPercent.toFixed(0)}% Full</p>
`;

const scoreHTML = `
<h2>4. Compatibility Score</h2>
<div class="score-number">${score}%</div>
<div class="score-label">${label}</div>
`;

searchResults.innerHTML = scoreHTML + meterHTML + messages + cards;


    saveBtn.style.display = "block"; // show save button only now
}

searchBtn.addEventListener("click", checkCompatibility);


/* ===============================
   💾 FAVORITES SYSTEM
================================= */

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function renderFavorites() {
    const favContainer = document.getElementById("favorites");
    favContainer.innerHTML = "";

    if (favorites.length === 0) {
        favContainer.innerHTML = "<p>No favorites yet.</p>";
        return;
    }

    favorites.forEach((fav, index) => {
        const div = document.createElement("div");
        div.classList.add("favorite-item");
div.innerHTML = `
            <span class="fav-text">
                <strong>${index + 1}.</strong> ${fav.join(" + ")}
            </span>
            <button class="delete-btn" onclick="deleteFavorite(${index})">Delete</button>
        `;

       
        favContainer.appendChild(div);
    });
}

function deleteFavorite(index) {
    favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderFavorites();
}

function saveFavorite() {

    const selectedFish = [fish1.value, fish2.value];
    if (selectedWildcardFish)
        // selectedFish.push(selectedWildcardFish.name);
        selectedWildcardFish.forEach(f => selectedFish.push(f.name));


    if (!favorites.some(f => JSON.stringify(f) === JSON.stringify(selectedFish))) {
        favorites.push(selectedFish);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    renderFavorites();
}


/* ===============================
   💖 SAVE BUTTON (HIDDEN INITIALLY)
================================= */

const saveBtn = document.createElement("button");
saveBtn.id = "saveFavoriteBtn";
saveBtn.textContent = "💖 Save as Favorite";
saveBtn.style.display = "none";
saveBtn.onclick = saveFavorite;

document.getElementById("results").after(saveBtn);


/* ===============================
   🚀 INIT
================================= */

renderFavorites();

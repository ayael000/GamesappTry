const catalog = [
  {
    id: "realm-ascenders",
    name: "Realm Ascenders",
    type: "Game",
    category: "Adventure",
    rating: 4.9,
    size: "12 GB",
    price: "Free",
    accent: "gradient-aurora",
    short: "Open-world fantasy adventure with co-op quests and seasonal raids.",
    description: "Explore floating kingdoms, craft legendary gear, and join friends for cinematic boss battles across a constantly evolving world.",
    tags: ["Co-op", "Controller", "Online"],
    downloads: "8.2M"
  },
  {
    id: "pixel-racers",
    name: "Pixel Racers Turbo",
    type: "Game",
    category: "Racing",
    rating: 4.7,
    size: "2.1 GB",
    price: "$4.99",
    accent: "gradient-sunset",
    short: "Retro arcade racing with neon tracks, split-screen, and car tuning.",
    description: "Drift through city skylines and desert loops in a fast arcade racer packed with unlockable cars, daily cups, and couch multiplayer.",
    tags: ["Arcade", "Offline", "Multiplayer"],
    downloads: "1.9M"
  },
  {
    id: "focus-flow",
    name: "Focus Flow",
    type: "App",
    category: "Productivity",
    rating: 4.8,
    size: "210 MB",
    price: "Free",
    accent: "gradient-mint",
    short: "Plan your day with smart timers, tasks, notes, and calendar blocks.",
    description: "Turn goals into focused sessions with distraction blocking, priority boards, calendar sync mockups, and progress insights.",
    tags: ["Tasks", "Timer", "Calendar"],
    downloads: "5.4M"
  },
  {
    id: "studio-spark",
    name: "Studio Spark",
    type: "App",
    category: "Creativity",
    rating: 4.6,
    size: "880 MB",
    price: "$9.99",
    accent: "gradient-violet",
    short: "Design posters, social clips, and brand kits with polished templates.",
    description: "A creative suite for quick layouts, motion snippets, color palettes, and export-ready marketing assets.",
    tags: ["Design", "Video", "Templates"],
    downloads: "3.1M"
  },
  {
    id: "code-camp",
    name: "Code Camp",
    type: "App",
    category: "Education",
    rating: 4.9,
    size: "340 MB",
    price: "Free",
    accent: "gradient-blue",
    short: "Interactive coding lessons, quizzes, projects, and streak rewards.",
    description: "Learn HTML, CSS, JavaScript, Python, and app design through guided lessons and bite-sized project challenges.",
    tags: ["Learning", "Projects", "Beginner"],
    downloads: "6.8M"
  },
  {
    id: "shadow-grid",
    name: "Shadow Grid",
    type: "Game",
    category: "Strategy",
    rating: 4.5,
    size: "4.8 GB",
    price: "$12.99",
    accent: "gradient-steel",
    short: "Cyberpunk turn-based tactics with squads, stealth, and upgrades.",
    description: "Command a crew of specialists through tactical heists where positioning, hacking, and stealth decide every mission.",
    tags: ["Tactics", "Sci-fi", "Single player"],
    downloads: "940K"
  },
  {
    id: "health-hub",
    name: "Health Hub+",
    type: "App",
    category: "Health",
    rating: 4.4,
    size: "190 MB",
    price: "Free",
    accent: "gradient-coral",
    short: "Track habits, workouts, water, sleep, and mindful breathing routines.",
    description: "Build balanced routines with wellness dashboards, habit streaks, guided breathing, and workout plans for any level.",
    tags: ["Fitness", "Habits", "Wellness"],
    downloads: "2.7M"
  },
  {
    id: "skyline-chef",
    name: "Skyline Chef",
    type: "Game",
    category: "Simulation",
    rating: 4.6,
    size: "1.7 GB",
    price: "Free",
    accent: "gradient-gold",
    short: "Run rooftop restaurants, master recipes, and serve VIP guests.",
    description: "Create a food empire above the clouds with restaurant upgrades, quirky staff, and time-management cooking events.",
    tags: ["Casual", "Offline", "Management"],
    downloads: "4.3M"
  }
];

const categories = ["All", "App", "Game", ...new Set(catalog.map((item) => item.category))];
const state = {
  query: "",
  filter: "All",
  library: new Set(JSON.parse(localStorage.getItem("nexusLibrary") || "[]"))
};

const catalogGrid = document.querySelector("#catalogGrid");
const filters = document.querySelector("#filters");
const searchInput = document.querySelector("#searchInput");
const detailsModal = document.querySelector("#detailsModal");
const modalContent = document.querySelector("#modalContent");
const themeToggle = document.querySelector("#themeToggle");
const libraryList = document.querySelector("#libraryList");
const libraryEmpty = document.querySelector("#libraryEmpty");
const sidebar = document.querySelector(".sidebar");

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function saveLibrary() {
  localStorage.setItem("nexusLibrary", JSON.stringify([...state.library]));
}

function matchesFilter(item) {
  const haystack = `${item.name} ${item.type} ${item.category} ${item.short} ${item.tags.join(" ")}`.toLowerCase();
  const queryMatch = haystack.includes(state.query.toLowerCase());
  const filterMatch = state.filter === "All" || item.type === state.filter || item.category === state.filter;
  return queryMatch && filterMatch;
}

function renderFilters() {
  filters.innerHTML = categories
    .map((category) => `
      <button class="filter-pill ${state.filter === category ? "active" : ""}" type="button" data-filter="${category}">
        ${category}
      </button>
    `)
    .join("");
}

function renderCatalog() {
  const items = catalog.filter(matchesFilter);

  catalogGrid.innerHTML = items.length
    ? items.map((item) => `
      <article class="store-card">
        <button class="card-main" type="button" data-open-details="${item.id}" aria-label="View ${item.name} details">
          <span class="app-icon ${item.accent}">${initials(item.name)}</span>
          <span class="card-copy">
            <span class="card-kicker">${item.type} / ${item.category}</span>
            <strong>${item.name}</strong>
            <span>${item.short}</span>
          </span>
        </button>
        <div class="card-meta">
          <span>${item.rating} star</span>
          <span>${item.size}</span>
          <span>${item.price}</span>
        </div>
        <button class="install-button ${state.library.has(item.id) ? "installed" : ""}" type="button" data-install="${item.id}">
          ${state.library.has(item.id) ? "Installed" : "Install"}
        </button>
      </article>
    `).join("")
    : `<div class="empty-state">
        <h3>No results found</h3>
        <p>Try a different search term or category filter.</p>
      </div>`;
}

function renderLibrary() {
  const installed = catalog.filter((item) => state.library.has(item.id));
  libraryEmpty.hidden = installed.length > 0;
  libraryList.innerHTML = installed
    .map((item) => `
      <article class="library-item">
        <span class="app-icon small ${item.accent}">${initials(item.name)}</span>
        <span>
          <strong>${item.name}</strong>
          <small>${item.type} / ${item.category}</small>
        </span>
        <button class="text-button" type="button" data-open-details="${item.id}">Launch</button>
      </article>
    `)
    .join("");
}

function render() {
  renderFilters();
  renderCatalog();
  renderLibrary();
}

function toggleInstall(id) {
  if (state.library.has(id)) {
    state.library.delete(id);
  } else {
    state.library.add(id);
  }
  saveLibrary();
  render();
}

function openDetails(id) {
  const item = catalog.find((entry) => entry.id === id);
  if (!item) return;

  modalContent.innerHTML = `
    <div class="modal-hero">
      <span class="app-icon large ${item.accent}">${initials(item.name)}</span>
      <div>
        <p class="eyebrow">${item.type} / ${item.category}</p>
        <h2 id="modalTitle">${item.name}</h2>
        <p>${item.description}</p>
      </div>
    </div>
    <div class="modal-stats">
      <span><strong>${item.rating} star</strong><small>Rating</small></span>
      <span><strong>${item.size}</strong><small>Size</small></span>
      <span><strong>${item.downloads}</strong><small>Downloads</small></span>
      <span><strong>${item.price}</strong><small>Price</small></span>
    </div>
    <div class="tag-row">
      ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
    </div>
    <button class="primary-button wide" type="button" data-install="${item.id}">
      ${state.library.has(item.id) ? "Remove from library" : `Install ${item.price === "Free" ? "for free" : "now"}`}
    </button>
  `;
  detailsModal.classList.add("open");
  detailsModal.setAttribute("aria-hidden", "false");
}

function closeDetails() {
  detailsModal.classList.remove("open");
  detailsModal.setAttribute("aria-hidden", "true");
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.filter = button.dataset.filter;
  render();
});

document.addEventListener("click", (event) => {
  const detailsButton = event.target.closest("[data-open-details]");
  const installButton = event.target.closest("[data-install]");
  const shortcut = event.target.closest("[data-filter-shortcut]");

  if (detailsButton) {
    openDetails(detailsButton.dataset.openDetails);
  }

  if (installButton) {
    toggleInstall(installButton.dataset.install);
  }

  if (shortcut) {
    state.filter = shortcut.dataset.filterShortcut;
    document.querySelector("#catalogGrid").scrollIntoView({ behavior: "smooth", block: "start" });
    render();
  }

  if (event.target.closest("[data-close-modal]")) {
    closeDetails();
  }
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderCatalog();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "Sun" : "Moon";
});

document.querySelector(".menu-button").addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDetails();
    sidebar.classList.remove("open");
  }
});

render();

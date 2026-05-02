const catalog = [
  {
    id: 1,
    name: "Neon Sprint",
    type: "Game",
    category: "Racing",
    rating: 4.9,
    downloads: 3200000,
    size: "1.4 GB",
    price: "Free",
    badge: "Editor's Choice",
    initials: "NS",
    gradient: "gradient-a",
    description: "A glowing arcade runner with tournaments, night tracks, and fast daily challenges.",
    screenshots: ["Cyber city", "Daily race", "Garage"],
  },
  {
    id: 2,
    name: "TaskFlow Pro",
    type: "App",
    category: "Productivity",
    rating: 4.8,
    downloads: 1900000,
    size: "86 MB",
    price: "$4.99",
    badge: "Top Paid",
    initials: "TF",
    gradient: "gradient-b",
    description: "Plan projects, automate reminders, and keep teams moving with calm dashboards.",
    screenshots: ["Boards", "Timeline", "Focus"],
  },
  {
    id: 3,
    name: "Pixel Kingdoms",
    type: "Game",
    category: "Strategy",
    rating: 4.7,
    downloads: 2700000,
    size: "920 MB",
    price: "Free",
    badge: "Multiplayer",
    initials: "PK",
    gradient: "gradient-c",
    description: "Build a tiny empire, battle rival clans, and unlock heroes in a retro strategy world.",
    screenshots: ["Village", "Battle", "Heroes"],
  },
  {
    id: 4,
    name: "Studio Canvas",
    type: "App",
    category: "Creativity",
    rating: 4.6,
    downloads: 870000,
    size: "340 MB",
    price: "$7.99",
    badge: "Creator Pick",
    initials: "SC",
    gradient: "gradient-d",
    description: "Sketch, edit posters, create social graphics, and export polished artwork anywhere.",
    screenshots: ["Brushes", "Templates", "Export"],
  },
  {
    id: 5,
    name: "Galaxy Tactics",
    type: "Game",
    category: "Strategy",
    rating: 4.8,
    downloads: 4100000,
    size: "1.1 GB",
    price: "$2.99",
    badge: "On Sale",
    initials: "GT",
    gradient: "gradient-e",
    description: "Command star fleets in turn-based battles with smart AI and online leagues.",
    screenshots: ["Fleet", "Map", "Arena"],
  },
  {
    id: 6,
    name: "LearnLoop",
    type: "App",
    category: "Education",
    rating: 4.5,
    downloads: 760000,
    size: "112 MB",
    price: "Free",
    badge: "Family Safe",
    initials: "LL",
    gradient: "gradient-f",
    description: "Practice languages, coding, and math with short lessons that adapt to your pace.",
    screenshots: ["Lessons", "Quiz", "Progress"],
  },
  {
    id: 7,
    name: "Beat Forge",
    type: "App",
    category: "Music",
    rating: 4.4,
    downloads: 640000,
    size: "210 MB",
    price: "$3.99",
    badge: "New",
    initials: "BF",
    gradient: "gradient-g",
    description: "Make beats with loops, synth pads, and one-tap sharing for quick music ideas.",
    screenshots: ["Mixer", "Pads", "Loops"],
  },
  {
    id: 8,
    name: "Puzzle Grove",
    type: "Game",
    category: "Puzzle",
    rating: 4.9,
    downloads: 3500000,
    size: "480 MB",
    price: "Free",
    badge: "Relaxing",
    initials: "PG",
    gradient: "gradient-h",
    description: "Solve cozy nature puzzles, decorate cabins, and unlock relaxing soundscapes.",
    screenshots: ["Garden", "Cabin", "Challenge"],
  },
  {
    id: 9,
    name: "FitPulse",
    type: "App",
    category: "Health",
    rating: 4.7,
    downloads: 1500000,
    size: "95 MB",
    price: "Free",
    badge: "Trending",
    initials: "FP",
    gradient: "gradient-i",
    description: "Track workouts, build healthy habits, and follow guided plans for every level.",
    screenshots: ["Workout", "Habits", "Stats"],
  },
];

const state = {
  search: "",
  category: "All",
  price: "all",
  rating: 0,
  sort: "featured",
  view: "grid",
  wishlist: new Set(JSON.parse(localStorage.getItem("playnestWishlist") || "[]")),
  theme: localStorage.getItem("playnestTheme") || "dark",
};

const elements = {
  appGrid: document.querySelector("#appGrid"),
  featuredGrid: document.querySelector("#featuredGrid"),
  categoryFilters: document.querySelector("#categoryFilters"),
  searchInput: document.querySelector("#searchInput"),
  sortSelect: document.querySelector("#sortSelect"),
  resultCount: document.querySelector("#resultCount"),
  emptyState: document.querySelector("#emptyState"),
  ratingRange: document.querySelector("#ratingRange"),
  ratingValue: document.querySelector("#ratingValue"),
  clearFilters: document.querySelector("#clearFilters"),
  wishlistCount: document.querySelector("#wishlistCount"),
  wishlistButton: document.querySelector("#wishlistButton"),
  themeToggle: document.querySelector("#themeToggle"),
  navToggle: document.querySelector(".nav-toggle"),
  navLinks: document.querySelector("#navLinks"),
  heroSearch: document.querySelector("#heroSearch"),
  modal: document.querySelector("#detailsModal"),
  modalContent: document.querySelector("#modalContent"),
  toast: document.querySelector("#toast"),
};

const formatDownloads = (value) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1)}M`;
  }

  return `${Math.round(value / 1000)}K`;
};

const renderStars = (rating) => {
  const fullStars = Math.round(rating);
  return "*****".slice(0, fullStars).padEnd(5, "-");
};

const saveWishlist = () => {
  localStorage.setItem("playnestWishlist", JSON.stringify([...state.wishlist]));
  elements.wishlistCount.textContent = state.wishlist.size;
};

const showToast = (message) => {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2400);
};

const createCard = (item, featured = false) => {
  const isSaved = state.wishlist.has(item.id);
  const card = document.createElement("article");
  card.className = `app-card ${featured ? "featured-card" : ""}`;
  card.innerHTML = `
    <div class="card-top">
      <div class="app-icon ${item.gradient}">${item.initials}</div>
      <button class="save-button ${isSaved ? "saved" : ""}" type="button" data-save="${item.id}" aria-label="${isSaved ? "Remove from" : "Add to"} wishlist">
        ${isSaved ? "Saved" : "Save"}
      </button>
    </div>
    <span class="badge">${item.badge}</span>
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <div class="meta-row">
      <span>${item.type}</span>
      <span>${item.category}</span>
      <span>${item.size}</span>
    </div>
    <div class="rating-row" aria-label="Rated ${item.rating} out of 5">
      <span>${renderStars(item.rating)}</span>
      <strong>${item.rating}</strong>
      <small>${formatDownloads(item.downloads)} downloads</small>
    </div>
    <div class="card-actions">
      <button class="primary-action" type="button" data-install="${item.id}">${item.price === "Free" ? "Install" : `Buy ${item.price}`}</button>
      <button class="ghost-button" type="button" data-details="${item.id}">Details</button>
    </div>
  `;

  return card;
};

const getFilteredItems = () => {
  const query = state.search.toLowerCase().trim();
  const filtered = catalog.filter((item) => {
    const matchesSearch =
      !query ||
      [item.name, item.type, item.category, item.description].some((value) =>
        value.toLowerCase().includes(query)
      );
    const matchesCategory = state.category === "All" || item.category === state.category;
    const matchesPrice =
      state.price === "all" ||
      (state.price === "free" && item.price === "Free") ||
      (state.price === "paid" && item.price !== "Free");
    const matchesRating = item.rating >= state.rating;

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  return filtered.sort((a, b) => {
    if (state.sort === "rating") return b.rating - a.rating;
    if (state.sort === "downloads") return b.downloads - a.downloads;
    if (state.sort === "name") return a.name.localeCompare(b.name);
    return a.id - b.id;
  });
};

const renderCatalog = () => {
  const items = getFilteredItems();
  elements.appGrid.className = `app-grid ${state.view === "list" ? "list-view" : ""}`;
  elements.appGrid.innerHTML = "";
  items.forEach((item) => elements.appGrid.appendChild(createCard(item)));

  elements.emptyState.hidden = items.length > 0;
  elements.resultCount.textContent = `Showing ${items.length} ${items.length === 1 ? "item" : "items"}`;
};

const renderFeatured = () => {
  elements.featuredGrid.innerHTML = "";
  catalog
    .filter((item) => item.rating >= 4.8)
    .slice(0, 3)
    .forEach((item) => elements.featuredGrid.appendChild(createCard(item, true)));
};

const renderCategories = () => {
  const categories = ["All", ...new Set(catalog.map((item) => item.category))];
  elements.categoryFilters.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip ${state.category === category ? "active" : ""}`;
    button.textContent = category;
    button.dataset.category = category;
    elements.categoryFilters.appendChild(button);
  });
};

const renderAll = () => {
  renderCategories();
  renderFeatured();
  renderCatalog();
  saveWishlist();
};

const openDetails = (item) => {
  if (!item) return;

  elements.modalContent.innerHTML = `
    <div class="modal-header">
      <div class="app-icon ${item.gradient}">${item.initials}</div>
      <div>
        <span class="badge">${item.badge}</span>
        <h2 id="modalTitle">${item.name}</h2>
        <p>${item.type} / ${item.category} / ${item.size}</p>
      </div>
    </div>
    <p class="modal-description">${item.description}</p>
    <div class="screenshot-row">
      ${item.screenshots.map((shot) => `<span>${shot}</span>`).join("")}
    </div>
    <div class="detail-stats">
      <div><strong>${item.rating}</strong><span>Rating</span></div>
      <div><strong>${formatDownloads(item.downloads)}</strong><span>Downloads</span></div>
      <div><strong>${item.price}</strong><span>Price</span></div>
    </div>
    <button class="primary-action full-width" type="button" data-install="${item.id}">
      ${item.price === "Free" ? "Install now" : `Buy for ${item.price}`}
    </button>
  `;
  elements.modal.hidden = false;
  document.body.classList.add("modal-open");
  elements.modal.querySelector("[data-close-modal]").focus();
};

const closeDetails = () => {
  elements.modal.hidden = true;
  document.body.classList.remove("modal-open");
};

const toggleWishlist = (id) => {
  if (state.wishlist.has(id)) {
    state.wishlist.delete(id);
    showToast("Removed from wishlist");
  } else {
    state.wishlist.add(id);
    showToast("Added to wishlist");
  }

  renderAll();
};

const installItem = (id) => {
  const item = catalog.find((entry) => entry.id === id);
  showToast(`${item.name} is ready to install`);
};

document.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  const detailsButton = event.target.closest("[data-details]");
  const installButton = event.target.closest("[data-install]");
  const categoryButton = event.target.closest("[data-category]");
  const closeModal = event.target.closest("[data-close-modal]");

  if (saveButton) toggleWishlist(Number(saveButton.dataset.save));
  if (detailsButton) {
    const item = catalog.find((entry) => entry.id === Number(detailsButton.dataset.details));
    openDetails(item);
  }
  if (installButton) installItem(Number(installButton.dataset.install));
  if (categoryButton) {
    state.category = categoryButton.dataset.category;
    renderAll();
  }
  if (closeModal) closeDetails();
  if (event.target.matches("[data-scroll-catalog]")) {
    document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
  }
});

elements.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderCatalog();
});

elements.heroSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
});

elements.sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderCatalog();
});

document.querySelectorAll("[name='price']").forEach((input) => {
  input.addEventListener("change", (event) => {
    state.price = event.target.value;
    renderCatalog();
  });
});

elements.ratingRange.addEventListener("input", (event) => {
  state.rating = Number(event.target.value);
  elements.ratingValue.textContent = state.rating ? `${state.rating}+ stars` : "Any rating";
  renderCatalog();
});

elements.clearFilters.addEventListener("click", () => {
  state.search = "";
  state.category = "All";
  state.price = "all";
  state.rating = 0;
  state.sort = "featured";
  elements.searchInput.value = "";
  elements.sortSelect.value = "featured";
  elements.ratingRange.value = 0;
  elements.ratingValue.textContent = "Any rating";
  document.querySelector("[name='price'][value='all']").checked = true;
  renderAll();
});

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => {
    state.view = button.dataset.view;
    document.querySelectorAll("[data-view]").forEach((viewButton) => {
      viewButton.classList.toggle("active", viewButton === button);
    });
    renderCatalog();
  });
});

elements.wishlistButton.addEventListener("click", () => {
  const items = catalog.filter((item) => state.wishlist.has(item.id));
  if (!items.length) {
    showToast("Your wishlist is empty");
    return;
  }

  state.search = "";
  state.category = "All";
  elements.searchInput.value = "";
  elements.appGrid.innerHTML = "";
  items.forEach((item) => elements.appGrid.appendChild(createCard(item)));
  elements.resultCount.textContent = `Showing ${items.length} saved ${items.length === 1 ? "item" : "items"}`;
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
});

elements.themeToggle.addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("playnestTheme", state.theme);
  document.documentElement.dataset.theme = state.theme;
  elements.themeToggle.textContent = state.theme === "dark" ? "Dark" : "Light";
});

elements.navToggle.addEventListener("click", () => {
  const isOpen = elements.navToggle.getAttribute("aria-expanded") === "true";
  elements.navToggle.setAttribute("aria-expanded", String(!isOpen));
  elements.navLinks.classList.toggle("open", !isOpen);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDetails();
});

document.documentElement.dataset.theme = state.theme;
elements.themeToggle.textContent = state.theme === "dark" ? "Dark" : "Light";
renderAll();

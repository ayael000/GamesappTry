const products = [
  {
    id: "skyfront-legends",
    name: "Skyfront Legends",
    type: "game",
    category: "Adventure",
    tags: ["game", "adventure", "multiplayer"],
    description: "A colorful co-op adventure across floating islands, sky races, and boss arenas.",
    rating: 4.9,
    downloads: 1200000,
    price: 0,
    accent: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
    icon: "SL",
    featured: 1,
  },
  {
    id: "pixel-kart-rush",
    name: "Pixel Kart Rush",
    type: "game",
    category: "Racing",
    tags: ["game", "racing", "arcade"],
    description: "Retro kart battles with power-ups, tournaments, and split-screen style fun.",
    rating: 4.7,
    downloads: 850000,
    price: 2.99,
    accent: "linear-gradient(135deg, #f97316, #facc15)",
    icon: "PK",
    featured: 3,
  },
  {
    id: "focusflow",
    name: "FocusFlow",
    type: "app",
    category: "Productivity",
    tags: ["app", "productivity", "planning"],
    description: "Plan your day, run focus sessions, and track streaks with a calm workspace.",
    rating: 4.8,
    downloads: 980000,
    price: 0,
    accent: "linear-gradient(135deg, #10b981, #22c55e)",
    icon: "FF",
    featured: 2,
  },
  {
    id: "canvaswave-studio",
    name: "CanvasWave Studio",
    type: "app",
    category: "Creative",
    tags: ["app", "creative", "design"],
    description: "Design posters, mockups, and social visuals with templates and effects.",
    rating: 4.6,
    downloads: 640000,
    price: 9.99,
    accent: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    icon: "CW",
    featured: 4,
  },
  {
    id: "galaxy-defense",
    name: "Galaxy Defense",
    type: "game",
    category: "Strategy",
    tags: ["game", "strategy", "space"],
    description: "Build fleets, defend starbases, and command tactical missions in space.",
    rating: 4.5,
    downloads: 730000,
    price: 4.99,
    accent: "linear-gradient(135deg, #1d4ed8, #7c3aed)",
    icon: "GD",
    featured: 6,
  },
  {
    id: "lingua-spark",
    name: "Lingua Spark",
    type: "app",
    category: "Education",
    tags: ["app", "education", "language"],
    description: "Learn languages with bite-sized lessons, pronunciation practice, and quizzes.",
    rating: 4.9,
    downloads: 1100000,
    price: 0,
    accent: "linear-gradient(135deg, #14b8a6, #3b82f6)",
    icon: "LS",
    featured: 5,
  },
  {
    id: "soundforge-lite",
    name: "SoundForge Lite",
    type: "app",
    category: "Creative",
    tags: ["app", "creative", "audio"],
    description: "Edit podcasts, clean recordings, and mix short audio projects in the browser.",
    rating: 4.4,
    downloads: 390000,
    price: 5.99,
    accent: "linear-gradient(135deg, #6366f1, #a855f7)",
    icon: "SF",
    featured: 8,
  },
  {
    id: "cozy-farm-days",
    name: "Cozy Farm Days",
    type: "game",
    category: "Simulation",
    tags: ["game", "simulation", "cozy"],
    description: "Grow crops, decorate your cottage, and meet neighbors in a relaxing village.",
    rating: 4.8,
    downloads: 910000,
    price: 1.99,
    accent: "linear-gradient(135deg, #84cc16, #f59e0b)",
    icon: "CF",
    featured: 7,
  },
];

const state = {
  filter: "all",
  query: "",
  sort: "featured",
  saved: new Set(JSON.parse(localStorage.getItem("novaplaySaved") || "[]")),
};

const catalogGrid = document.querySelector("#catalogGrid");
const emptyState = document.querySelector("#emptyState");
const template = document.querySelector("#appCardTemplate");
const savedCount = document.querySelector("#savedCount");
const drawer = document.querySelector("#libraryDrawer");
const drawerItems = document.querySelector("#drawerItems");
const modal = document.querySelector("#detailsModal");
const modalContent = document.querySelector("#modalContent");

function formatPrice(price) {
  return price === 0 ? "Free" : `$${price.toFixed(2)}`;
}

function formatDownloads(value) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

function persistSaved() {
  localStorage.setItem("novaplaySaved", JSON.stringify([...state.saved]));
}

function getVisibleProducts() {
  const query = state.query.trim().toLowerCase();

  return products
    .filter((product) => {
      const matchesFilter = state.filter === "all" || product.tags.includes(state.filter);
      const searchable = `${product.name} ${product.category} ${product.description} ${product.tags.join(" ")}`.toLowerCase();
      return matchesFilter && searchable.includes(query);
    })
    .sort((a, b) => {
      if (state.sort === "rating") return b.rating - a.rating;
      if (state.sort === "downloads") return b.downloads - a.downloads;
      if (state.sort === "price-low") return a.price - b.price;
      return a.featured - b.featured;
    });
}

function renderCatalog() {
  catalogGrid.innerHTML = "";
  const visibleProducts = getVisibleProducts();
  emptyState.hidden = visibleProducts.length > 0;

  visibleProducts.forEach((product) => {
    const card = template.content.firstElementChild.cloneNode(true);
    const saveButton = card.querySelector(".save-button");
    const detailsButton = card.querySelector(".details-button");

    card.querySelector(".app-icon").style.background = product.accent;
    card.querySelector(".app-icon").textContent = product.icon;
    card.querySelector(".app-type").textContent = `${product.type} / ${product.category}`;
    card.querySelector("h3").textContent = product.name;
    card.querySelector("p").textContent = product.description;
    card.querySelector(".rating").textContent = `${product.rating} stars`;
    card.querySelector(".price").textContent = formatPrice(product.price);

    saveButton.dataset.id = product.id;
    saveButton.innerHTML = state.saved.has(product.id) ? "&hearts;" : "&#9825;";
    saveButton.classList.toggle("saved", state.saved.has(product.id));
    saveButton.setAttribute("aria-label", `${state.saved.has(product.id) ? "Remove" : "Save"} ${product.name}`);
    saveButton.addEventListener("click", () => toggleSaved(product.id));

    detailsButton.addEventListener("click", () => openDetails(product));
    catalogGrid.appendChild(card);
  });
}

function renderDrawer() {
  savedCount.textContent = state.saved.size;
  drawerItems.innerHTML = "";

  const savedProducts = products.filter((product) => state.saved.has(product.id));

  if (savedProducts.length === 0) {
    drawerItems.innerHTML = "<p class=\"drawer-empty\">Save apps or games to build your library.</p>";
    return;
  }

  savedProducts.forEach((product) => {
    const item = document.createElement("article");
    item.className = "drawer-item";
    item.innerHTML = `
      <div class="mini-icon" style="background: ${product.accent}">${product.icon}</div>
      <div>
        <h3>${product.name}</h3>
        <p>${product.category} / ${formatPrice(product.price)}</p>
      </div>
      <button class="icon-button" type="button" aria-label="Remove ${product.name}">&times;</button>
    `;
    item.querySelector("button").addEventListener("click", () => toggleSaved(product.id));
    drawerItems.appendChild(item);
  });
}

function toggleSaved(id) {
  if (state.saved.has(id)) {
    state.saved.delete(id);
  } else {
    state.saved.add(id);
  }

  persistSaved();
  renderCatalog();
  renderDrawer();
}

function openDetails(product) {
  modalContent.innerHTML = `
    <div class="modal-hero" style="background: ${product.accent}">
      <span>${product.icon}</span>
    </div>
    <div class="modal-body">
      <span class="app-type">${product.type} / ${product.category}</span>
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <div class="modal-meta">
        <div>
          <strong>${product.rating}</strong>
          <span>Star rating</span>
        </div>
        <div>
          <strong>${formatDownloads(product.downloads)}</strong>
          <span>Downloads</span>
        </div>
        <div>
          <strong>${formatPrice(product.price)}</strong>
          <span>Price</span>
        </div>
      </div>
      <button class="button button-primary" type="button" data-modal-save>
        ${state.saved.has(product.id) ? "Remove from library" : "Add to library"}
      </button>
    </div>
  `;

  modalContent.querySelector("[data-modal-save]").addEventListener("click", () => {
    toggleSaved(product.id);
    openDetails(product);
  });

  if (!modal.open) {
    modal.showModal();
  }
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-button.active").classList.remove("active");
    button.classList.add("active");
    state.filter = button.dataset.filter;
    renderCatalog();
  });
});

document.querySelector("#searchInput").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderCatalog();
});

document.querySelector("#sortSelect").addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderCatalog();
});

document.querySelector("[data-open-drawer]").addEventListener("click", () => {
  document.body.classList.add("drawer-open");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
});

document.querySelector("[data-close-drawer]").addEventListener("click", () => {
  document.body.classList.remove("drawer-open");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
});

document.querySelector("[data-close-modal]").addEventListener("click", () => modal.close());

document.querySelector("[data-scroll-to-deals]").addEventListener("click", () => {
  document.querySelector("#deals").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("[data-bundle-alert]").addEventListener("click", () => {
  alert("Bundle claimed! Connect this button to checkout when you add a backend.");
});

document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const navLinks = document.querySelector(".nav-links");
  const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
  event.currentTarget.setAttribute("aria-expanded", String(!expanded));
  navLinks.classList.toggle("open");
});

renderCatalog();
renderDrawer();

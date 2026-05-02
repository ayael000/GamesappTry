const products = [
  {
    id: 1,
    title: 'Starbound Valley',
    type: 'game',
    category: 'Adventure',
    price: 14.99,
    rating: 4.9,
    downloads: 820000,
    tag: 'Game of the week',
    color: 'violet',
    icon: 'SV',
    description: 'Build a settlement across gentle planets, recruit companions, and uncover tactical mysteries among the stars.',
    features: ['Cloud saves', 'Controller support', 'Story campaign'],
    editorPick: true,
    offline: true
  },
  {
    id: 2,
    title: 'FocusForge',
    type: 'app',
    category: 'Productivity',
    price: 0,
    rating: 4.7,
    downloads: 2100000,
    tag: 'Free',
    color: 'blue',
    icon: 'FF',
    description: 'A focused timer, distraction blocker, and habit tracker designed for deep work sessions.',
    features: ['Pomodoro timer', 'Daily goals', 'Insight dashboard'],
    editorPick: true,
    offline: false
  },
  {
    id: 3,
    title: 'Pixel Kart Rush',
    type: 'game',
    category: 'Racing',
    price: 7.99,
    rating: 4.6,
    downloads: 640000,
    tag: 'Multiplayer',
    color: 'orange',
    icon: 'PK',
    description: 'Drift through neon tracks, customize tiny karts, and challenge friends in arcade race nights.',
    features: ['Online races', 'Local split-screen', 'Season events'],
    editorPick: false,
    offline: false
  },
  {
    id: 4,
    title: 'SketchNest Pro',
    type: 'app',
    category: 'Design',
    price: 19.99,
    rating: 4.8,
    downloads: 980000,
    tag: 'Creator choice',
    color: 'pink',
    icon: 'SN',
    description: 'Illustration, wireframing, and asset export tools wrapped in a clean creative workspace.',
    features: ['Vector tools', 'Layer styles', 'Export presets'],
    editorPick: true,
    offline: true
  },
  {
    id: 5,
    title: 'Dungeon Bloom',
    type: 'game',
    category: 'Puzzle',
    price: 0,
    rating: 4.5,
    downloads: 1550000,
    tag: 'Free',
    color: 'green',
    icon: 'DB',
    description: 'Solve garden puzzles inside ancient ruins where every flower changes the shape of the maze.',
    features: ['120 levels', 'Daily puzzles', 'Relaxed mode'],
    editorPick: false,
    offline: true
  },
  {
    id: 6,
    title: 'Vaultly',
    type: 'app',
    category: 'Security',
    price: 4.99,
    rating: 4.4,
    downloads: 730000,
    tag: 'Privacy',
    color: 'slate',
    icon: 'VL',
    description: 'Store secure notes, recovery codes, and private files with elegant organization.',
    features: ['Encrypted notes', 'Secure folders', 'Device sync'],
    editorPick: false,
    offline: true
  },
  {
    id: 7,
    title: 'Chef Quest',
    type: 'game',
    category: 'Family',
    price: 3.99,
    rating: 4.3,
    downloads: 510000,
    tag: 'Family',
    color: 'yellow',
    icon: 'CQ',
    description: 'Travel the world, learn recipes, and run a cozy restaurant in quick bite-sized levels.',
    features: ['Kid-friendly', 'Co-op tasks', 'Recipe book'],
    editorPick: false,
    offline: true
  },
  {
    id: 8,
    title: 'MindMaply',
    type: 'app',
    category: 'Education',
    price: 0,
    rating: 4.6,
    downloads: 1230000,
    tag: 'Student pick',
    color: 'teal',
    icon: 'MM',
    description: 'Turn study notes into visual maps with flashcards, outlines, and quick presentation mode.',
    features: ['Flashcards', 'Templates', 'Presentation mode'],
    editorPick: true,
    offline: false
  }
];

const state = {
  query: '',
  type: 'all',
  category: 'all',
  sort: 'featured',
  chip: 'all',
  cart: new Map(),
  wishlist: new Set()
};

const productGrid = document.querySelector('#productGrid');
const categoryFilter = document.querySelector('#categoryFilter');
const searchInput = document.querySelector('#searchInput');
const typeFilter = document.querySelector('#typeFilter');
const sortSelect = document.querySelector('#sortSelect');
const resultCount = document.querySelector('#resultCount');
const emptyState = document.querySelector('#emptyState');
const cartCount = document.querySelector('#cartCount');
const cartTotal = document.querySelector('#cartTotal');
const clearFilters = document.querySelector('#clearFilters');
const dialog = document.querySelector('#productDialog');
const dialogContent = document.querySelector('#dialogContent');
const dialogClose = document.querySelector('#dialogClose');
const toast = document.querySelector('#toast');
const bundleButton = document.querySelector('#bundleButton');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function formatPrice(price) {
  return price === 0 ? 'Free' : `$${price.toFixed(2)}`;
}

function formatDownloads(downloads) {
  if (downloads >= 1000000) {
    return `${(downloads / 1000000).toFixed(1)}M`;
  }

  return `${Math.round(downloads / 1000)}K`;
}

function populateCategories() {
  const categories = [...new Set(products.map((product) => product.category))].sort();

  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function matchesChip(product) {
  if (state.chip === 'free') {
    return product.price === 0;
  }

  if (state.chip === 'premium') {
    return product.price > 0;
  }

  if (state.chip === 'editor') {
    return product.editorPick;
  }

  if (state.chip === 'offline') {
    return product.offline;
  }

  return true;
}

function getFilteredProducts() {
  const query = state.query.trim().toLowerCase();

  return products
    .filter((product) => {
      const searchableText = [
        product.title,
        product.type,
        product.category,
        product.description,
        product.tag,
        ...product.features
      ].join(' ').toLowerCase();

      return (
        (!query || searchableText.includes(query)) &&
        (state.type === 'all' || product.type === state.type) &&
        (state.category === 'all' || product.category === state.category) &&
        matchesChip(product)
      );
    })
    .sort((first, second) => {
      switch (state.sort) {
        case 'rating':
          return second.rating - first.rating;
        case 'downloads':
          return second.downloads - first.downloads;
        case 'priceLow':
          return first.price - second.price;
        case 'priceHigh':
          return second.price - first.price;
        default:
          return Number(second.editorPick) - Number(first.editorPick) || second.rating - first.rating;
      }
    });
}

function createProductCard(product) {
  const isWishlisted = state.wishlist.has(product.id);
  const card = document.createElement('article');
  card.className = `product-card ${product.color}`;
  card.innerHTML = `
    <div class="product-art ${product.color}">
      <span>${product.icon}</span>
      <button class="wishlist-button ${isWishlisted ? 'active' : ''}" type="button" aria-label="${isWishlisted ? 'Remove from' : 'Add to'} wishlist" data-action="wishlist" data-id="${product.id}">
        ${isWishlisted ? '♥' : '♡'}
      </button>
    </div>
    <div class="product-content">
      <div class="product-meta">
        <span>${product.type}</span>
        <span>${product.category}</span>
      </div>
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <div class="product-stats">
        <span>★ ${product.rating}</span>
        <span>${formatDownloads(product.downloads)} downloads</span>
      </div>
      <div class="product-footer">
        <strong>${formatPrice(product.price)}</strong>
        <div>
          <button class="text-button" type="button" data-action="details" data-id="${product.id}">Details</button>
          <button class="button mini" type="button" data-action="cart" data-id="${product.id}">${product.price === 0 ? 'Get' : 'Add'}</button>
        </div>
      </div>
    </div>
  `;

  return card;
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  productGrid.innerHTML = '';

  filteredProducts.forEach((product) => {
    productGrid.appendChild(createProductCard(product));
  });

  emptyState.hidden = filteredProducts.length > 0;
  resultCount.textContent = filteredProducts.length === products.length
    ? `Showing all ${products.length} products`
    : `Showing ${filteredProducts.length} of ${products.length} products`;
}

function updateCart() {
  const items = [...state.cart.values()];
  const count = items.reduce((total, item) => total + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  cartCount.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
  cartTotal.textContent = `$${total.toFixed(2)} total`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove('visible');
  }, 2200);
}

function addToCart(product) {
  const currentItem = state.cart.get(product.id);
  state.cart.set(product.id, {
    product,
    quantity: currentItem ? currentItem.quantity + 1 : 1
  });
  updateCart();
  showToast(`${product.title} added to cart`);
}

function toggleWishlist(product) {
  if (state.wishlist.has(product.id)) {
    state.wishlist.delete(product.id);
    showToast(`${product.title} removed from wishlist`);
  } else {
    state.wishlist.add(product.id);
    showToast(`${product.title} saved to wishlist`);
  }

  renderProducts();
}

function openDetails(product) {
  dialogContent.innerHTML = `
    <div class="dialog-grid">
      <div class="product-art ${product.color} dialog-art"><span>${product.icon}</span></div>
      <div>
        <span class="badge">${product.tag}</span>
        <h2 id="dialogTitle">${product.title}</h2>
        <p>${product.description}</p>
        <div class="product-stats dialog-stats">
          <span>★ ${product.rating} rating</span>
          <span>${formatDownloads(product.downloads)} downloads</span>
          <span>${product.offline ? 'Works offline' : 'Online features'}</span>
        </div>
        <ul class="feature-list">
          ${product.features.map((feature) => `<li>${feature}</li>`).join('')}
        </ul>
        <button class="button primary" type="button" data-action="cart" data-id="${product.id}">
          ${product.price === 0 ? 'Get for free' : `Add for ${formatPrice(product.price)}`}
        </button>
      </div>
    </div>
  `;
  dialog.showModal();
}

function resetFilters() {
  state.query = '';
  state.type = 'all';
  state.category = 'all';
  state.sort = 'featured';
  state.chip = 'all';
  searchInput.value = '';
  typeFilter.value = 'all';
  categoryFilter.value = 'all';
  sortSelect.value = 'featured';
  document.querySelectorAll('.chip').forEach((chip) => {
    chip.classList.toggle('active', chip.dataset.chip === 'all');
  });
  renderProducts();
}

function handleProductAction(event) {
  const button = event.target.closest('button[data-action]');
  if (!button) {
    return;
  }

  const product = products.find((item) => item.id === Number(button.dataset.id));
  if (!product) {
    return;
  }

  if (button.dataset.action === 'cart') {
    addToCart(product);
  }

  if (button.dataset.action === 'wishlist') {
    toggleWishlist(product);
  }

  if (button.dataset.action === 'details') {
    openDetails(product);
  }
}

searchInput.addEventListener('input', (event) => {
  state.query = event.target.value;
  renderProducts();
});

typeFilter.addEventListener('change', (event) => {
  state.type = event.target.value;
  renderProducts();
});

categoryFilter.addEventListener('change', (event) => {
  state.category = event.target.value;
  renderProducts();
});

sortSelect.addEventListener('change', (event) => {
  state.sort = event.target.value;
  renderProducts();
});

document.querySelectorAll('.chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    state.chip = chip.dataset.chip;
    document.querySelectorAll('.chip').forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');
    renderProducts();
  });
});

productGrid.addEventListener('click', handleProductAction);
dialogContent.addEventListener('click', handleProductAction);
clearFilters.addEventListener('click', resetFilters);

dialogClose.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

bundleButton.addEventListener('click', () => {
  ['FocusForge', 'SketchNest Pro', 'Vaultly']
    .map((title) => products.find((product) => product.title === title))
    .forEach((product) => addToCart(product));
});

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
});

populateCategories();
renderProducts();
updateCart();

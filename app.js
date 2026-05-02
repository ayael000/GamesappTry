/* ========================================
   APPVAULT — APP.JS
   ======================================== */

'use strict';

/* ===== STORE DATA ===== */
const STORE_DATA = [
  /* ---- GAMES ---- */
  {
    id: 1, name: 'Nebula Wars', category: 'games', subcategory: 'Strategy',
    icon: '🚀', color: 'linear-gradient(135deg,#6366f1,#a855f7)',
    price: 0, badge: 'hot', featured: true, rating: 4.8, reviews: 12400,
    size: '248 MB', version: '3.1.2', updated: 'Apr 2026',
    desc: 'Command fleets across galaxies in this epic real-time strategy game. Build your empire, forge alliances, and dominate the cosmos.',
    longDesc: 'Nebula Wars puts you in command of a space-faring civilization. Gather resources, research technologies, and engage in large-scale battles across procedurally generated star maps. With cross-platform multiplayer supporting up to 100 players, no two matches are alike.',
    tags: ['Strategy', 'Multiplayer', 'Sci-Fi', 'Free to Play'],
    screenshots: ['🌌', '⚔️', '🛸', '💫'],
    developer: 'StarForge Studios',
  },
  {
    id: 2, name: 'Pixel Dungeon Quest', category: 'games', subcategory: 'RPG',
    icon: '⚔️', color: 'linear-gradient(135deg,#ef4444,#f97316)',
    price: 4.99, badge: 'editors', featured: true, rating: 4.9, reviews: 8700,
    size: '85 MB', version: '2.4.0', updated: 'Mar 2026',
    desc: 'A roguelike dungeon crawler with retro pixel art, procedurally generated levels and hundreds of unique items.',
    longDesc: 'Explore endless dungeons, face fearsome monsters, and collect legendary gear in this beloved roguelike RPG. Pixel Dungeon Quest features permadeath mechanics, a deep crafting system, and an active modding community.',
    tags: ['RPG', 'Roguelike', 'Pixel Art', 'Single Player'],
    screenshots: ['🗡️', '🧙', '💎', '🏰'],
    developer: 'RetroPixel Games',
  },
  {
    id: 3, name: 'Velocity Rush', category: 'games', subcategory: 'Racing',
    icon: '🏎️', color: 'linear-gradient(135deg,#f59e0b,#ef4444)',
    price: 2.99, badge: 'new', featured: false, rating: 4.6, reviews: 5300,
    size: '620 MB', version: '1.2.0', updated: 'Apr 2026',
    desc: 'High-speed arcade racing with neon tracks, gravity-defying stunts, and intense online multiplayer.',
    longDesc: 'Velocity Rush delivers an adrenaline-fueled racing experience across 80+ neon-lit tracks. Master drift mechanics, boost chains, and aerial stunts to top the global leaderboards. Customize your car with thousands of parts and liveries.',
    tags: ['Racing', 'Multiplayer', 'Arcade', 'Competitive'],
    screenshots: ['🏁', '⚡', '🌃', '🏆'],
    developer: 'NeonSpeed Labs',
  },
  {
    id: 4, name: 'Shadow Realm', category: 'games', subcategory: 'Action',
    icon: '🗡️', color: 'linear-gradient(135deg,#1e1b4b,#4c1d95)',
    price: 9.99, badge: null, featured: true, rating: 4.7, reviews: 21000,
    size: '1.2 GB', version: '5.0.1', updated: 'Feb 2026',
    desc: 'An atmospheric action-adventure with dark fantasy world-building, fluid combat, and a gripping storyline.',
    longDesc: 'Shadow Realm immerses you in a beautifully dark world torn between light and darkness. Wield arcane powers, master 6 weapon classes, and make choices that shape the fate of kingdoms. Features 40+ hours of main story content.',
    tags: ['Action', 'Adventure', 'Dark Fantasy', 'Story Rich'],
    screenshots: ['🌑', '🧿', '⚡', '👁️'],
    developer: 'Obsidian Tower',
  },
  {
    id: 5, name: 'Brick Breaker Ultra', category: 'games', subcategory: 'Casual',
    icon: '🧱', color: 'linear-gradient(135deg,#06b6d4,#3b82f6)',
    price: 0, badge: null, featured: false, rating: 4.3, reviews: 34000,
    size: '42 MB', version: '7.2.3', updated: 'Jan 2026',
    desc: 'The classic brick-breaking game reimagined with power-ups, boss battles, and stunning visual effects.',
    longDesc: 'Brick Breaker Ultra breathes new life into the classic formula with 300+ levels, 50 unique power-ups, and spectacular boss encounters. Compete with friends on weekly challenge leaderboards.',
    tags: ['Casual', 'Arcade', 'Family', 'Free to Play'],
    screenshots: ['💥', '🌈', '🎯', '⭐'],
    developer: 'CasualCraft Inc.',
  },
  {
    id: 6, name: 'Farmland Chronicles', category: 'games', subcategory: 'Simulation',
    icon: '🌾', color: 'linear-gradient(135deg,#84cc16,#16a34a)',
    price: 0, badge: 'hot', featured: false, rating: 4.5, reviews: 89000,
    size: '155 MB', version: '12.0.0', updated: 'Apr 2026',
    desc: 'Build and manage your dream farm, trade with villagers, and explore a charming countryside world.',
    longDesc: 'Farmland Chronicles combines farming simulation with lite RPG elements. Plant crops, raise animals, craft tools, and build relationships with 30+ unique characters. Updated with seasonal events every month.',
    tags: ['Simulation', 'Relaxing', 'Farming', 'Free to Play'],
    screenshots: ['🌻', '🐄', '🏡', '🌈'],
    developer: 'Countryside Studio',
  },
  {
    id: 7, name: 'Cosmic Puzzle', category: 'games', subcategory: 'Puzzle',
    icon: '🌀', color: 'linear-gradient(135deg,#8b5cf6,#6366f1)',
    price: 1.99, badge: 'sale', featured: false, rating: 4.6, reviews: 6800,
    size: '78 MB', version: '3.0.1', updated: 'Mar 2026',
    desc: 'Mind-bending puzzles set in space, where you manipulate gravity, light, and time to solve each level.',
    longDesc: 'Cosmic Puzzle challenges you with over 250 hand-crafted levels across 8 unique cosmic environments. Each world introduces new mechanics — from time-reversal to gravity wells — keeping the gameplay fresh and challenging.',
    tags: ['Puzzle', 'Brain Teaser', 'Relaxing', 'Sci-Fi'],
    screenshots: ['🪐', '✨', '🔭', '💡'],
    developer: 'Mindgate Labs',
  },
  {
    id: 8, name: 'Battle Arena Z', category: 'games', subcategory: 'Fighting',
    icon: '🥊', color: 'linear-gradient(135deg,#dc2626,#7f1d1d)',
    price: 0, badge: 'new', featured: false, rating: 4.4, reviews: 44000,
    size: '890 MB', version: '2.0.0', updated: 'Apr 2026',
    desc: 'Fast-paced 3v3 arena brawler with 40+ fighters, deep combo systems, and ranked online play.',
    longDesc: 'Battle Arena Z delivers a polished fighting game experience with frame-perfect controls, 40+ unique fighters, and a competitive ranked mode. Regular seasonal updates add new characters and balance patches.',
    tags: ['Fighting', 'PvP', 'Competitive', 'Free to Play'],
    screenshots: ['💥', '🏆', '⚔️', '🔥'],
    developer: 'KO Interactive',
  },

  /* ---- PRODUCTIVITY ---- */
  {
    id: 9, name: 'SpeedNote', category: 'productivity', subcategory: 'Notes',
    icon: '⚡', color: 'linear-gradient(135deg,#f59e0b,#fcd34d)',
    price: 0, badge: 'editors', featured: true, rating: 4.9, reviews: 15200,
    size: '18 MB', version: '6.3.0', updated: 'Apr 2026',
    desc: 'Lightning-fast note-taking app with markdown support, sync across all devices, and AI-powered organization.',
    longDesc: 'SpeedNote is built for speed and simplicity. Type a note in under a second, organize with smart tags and AI-suggested folders, and access everything offline. Syncs seamlessly with your calendar and task manager.',
    tags: ['Notes', 'Markdown', 'Sync', 'AI'],
    screenshots: ['📝', '🔄', '🗂️', '🤖'],
    developer: 'SwiftApps Inc.',
  },
  {
    id: 10, name: 'FocusFlow', category: 'productivity', subcategory: 'Time Management',
    icon: '🎯', color: 'linear-gradient(135deg,#10b981,#059669)',
    price: 3.99, badge: null, featured: false, rating: 4.7, reviews: 9100,
    size: '24 MB', version: '4.1.0', updated: 'Mar 2026',
    desc: 'Pomodoro-based focus timer with project tracking, daily goals, and distraction-blocking features.',
    longDesc: 'FocusFlow uses evidence-based productivity techniques to help you work smarter. Configure custom work/break intervals, set daily focus goals, and block distracting websites. Detailed analytics show where your time goes.',
    tags: ['Pomodoro', 'Focus', 'Analytics', 'Productivity'],
    screenshots: ['⏱️', '📊', '🚫', '✅'],
    developer: 'ZenWork Labs',
  },
  {
    id: 11, name: 'TaskMaster Pro', category: 'productivity', subcategory: 'Task Management',
    icon: '✅', color: 'linear-gradient(135deg,#3b82f6,#1d4ed8)',
    price: 5.99, badge: null, featured: false, rating: 4.6, reviews: 7600,
    size: '32 MB', version: '8.0.2', updated: 'Feb 2026',
    desc: 'Advanced task and project management with kanban boards, timeline views, and team collaboration.',
    longDesc: 'TaskMaster Pro scales from personal to-do lists to complex team projects. Featuring kanban, list, and Gantt chart views, smart recurring tasks, file attachments, and real-time collaboration for up to 25 team members.',
    tags: ['Tasks', 'Kanban', 'Collaboration', 'Projects'],
    screenshots: ['📋', '🗓️', '👥', '📈'],
    developer: 'Taskify Corp',
  },
  {
    id: 12, name: 'MarkFlow', category: 'productivity', subcategory: 'Writing',
    icon: '✍️', color: 'linear-gradient(135deg,#64748b,#334155)',
    price: 0, badge: 'new', featured: false, rating: 4.8, reviews: 3400,
    size: '14 MB', version: '1.5.0', updated: 'Apr 2026',
    desc: 'Distraction-free markdown editor with live preview, custom themes, and one-click export to PDF.',
    longDesc: 'MarkFlow strips away everything that gets in the way of writing. A clean, minimal interface with a powerful markdown parser, live preview pane, custom CSS themes, and export to PDF, HTML, and DOCX.',
    tags: ['Markdown', 'Writing', 'Minimal', 'Export'],
    screenshots: ['✏️', '👁️', '📄', '🎨'],
    developer: 'WriteMore Studio',
  },

  /* ---- ENTERTAINMENT ---- */
  {
    id: 13, name: 'Wavify', category: 'entertainment', subcategory: 'Music',
    icon: '🎵', color: 'linear-gradient(135deg,#10b981,#06b6d4)',
    price: 4.99, badge: 'hot', featured: true, rating: 4.8, reviews: 28000,
    size: '56 MB', version: '9.2.0', updated: 'Apr 2026',
    desc: 'Stream and discover music with lossless audio, personalized playlists, and offline listening.',
    longDesc: 'Wavify connects you to over 100 million tracks in crystal-clear lossless audio. Smart playlists learn your taste across the day, mood, and activity. Download up to 10,000 songs for offline listening.',
    tags: ['Music', 'Streaming', 'Lossless', 'Offline'],
    screenshots: ['🎧', '🎼', '📻', '🌊'],
    developer: 'SoundLabs',
  },
  {
    id: 14, name: 'StreamBox', category: 'entertainment', subcategory: 'Video',
    icon: '📺', color: 'linear-gradient(135deg,#ef4444,#dc2626)',
    price: 0, badge: null, featured: false, rating: 4.4, reviews: 52000,
    size: '72 MB', version: '15.1.0', updated: 'Mar 2026',
    desc: 'Watch live TV, movies and series from hundreds of channels worldwide — all in one place.',
    longDesc: 'StreamBox aggregates content from 300+ streaming services and live TV channels. Smart search finds any title across all your subscriptions, while the unified watchlist keeps your queue organized.',
    tags: ['Video', 'Streaming', 'Live TV', 'Movies'],
    screenshots: ['🎬', '📡', '🍿', '🌐'],
    developer: 'MediaHub Inc.',
  },
  {
    id: 15, name: 'PodCast+', category: 'entertainment', subcategory: 'Podcasts',
    icon: '🎙️', color: 'linear-gradient(135deg,#8b5cf6,#7c3aed)',
    price: 0, badge: null, featured: false, rating: 4.6, reviews: 18300,
    size: '29 MB', version: '5.0.0', updated: 'Feb 2026',
    desc: 'Discover, subscribe and listen to millions of podcasts with smart chapters, transcripts, and playlists.',
    longDesc: 'PodCast+ indexes over 4 million shows and makes it easy to discover your next obsession through curated topic feeds. Smart speed-adjustment technology saves you hours of listening time without distorting voices.',
    tags: ['Podcasts', 'Audio', 'Discovery', 'Transcripts'],
    screenshots: ['🎧', '📖', '🔍', '⭐'],
    developer: 'AudioVerse',
  },
  {
    id: 16, name: 'ComicVault', category: 'entertainment', subcategory: 'Comics',
    icon: '💥', color: 'linear-gradient(135deg,#f59e0b,#ea580c)',
    price: 2.99, badge: 'sale', featured: false, rating: 4.5, reviews: 7200,
    size: '43 MB', version: '3.3.1', updated: 'Jan 2026',
    desc: 'Read thousands of comics from indie creators and major publishers with an optimized panel-by-panel reader.',
    longDesc: 'ComicVault brings over 50,000 issues to life with a guided panel reader, HD artwork optimization, and offline sync. Supports webtoons, manga, and Western comics with dedicated reading modes for each format.',
    tags: ['Comics', 'Manga', 'Reading', 'Offline'],
    screenshots: ['📚', '🖼️', '🌟', '📱'],
    developer: 'Panel Press Co.',
  },

  /* ---- EDUCATION ---- */
  {
    id: 17, name: 'LinguaLeap', category: 'education', subcategory: 'Languages',
    icon: '🌍', color: 'linear-gradient(135deg,#3b82f6,#1d4ed8)',
    price: 0, badge: 'editors', featured: true, rating: 4.9, reviews: 67000,
    size: '88 MB', version: '10.0.0', updated: 'Apr 2026',
    desc: 'Learn 40+ languages with AI conversation practice, gamified lessons, and native speaker audio.',
    longDesc: 'LinguaLeap uses spaced repetition, adaptive AI conversation bots, and real native speaker recordings to build genuine fluency. Progress through story-based courses and track your streak across 40+ supported languages.',
    tags: ['Languages', 'AI', 'Gamified', 'Free to Play'],
    screenshots: ['🗺️', '🤖', '🏆', '📖'],
    developer: 'PolyGlot AI',
  },
  {
    id: 18, name: 'MathMaster', category: 'education', subcategory: 'Mathematics',
    icon: '🔢', color: 'linear-gradient(135deg,#06b6d4,#0891b2)',
    price: 1.99, badge: null, featured: false, rating: 4.7, reviews: 11500,
    size: '35 MB', version: '4.2.0', updated: 'Mar 2026',
    desc: 'Master math from basic arithmetic to calculus with step-by-step problem solving and adaptive practice.',
    longDesc: 'MathMaster covers curriculum from elementary arithmetic through university-level calculus. Intelligent tutoring identifies weak spots and serves targeted practice. Includes a built-in graphing calculator and formula reference.',
    tags: ['Math', 'Tutoring', 'Adaptive', 'K-12'],
    screenshots: ['📐', '📊', '🧮', '✏️'],
    developer: 'EduSpark',
  },
  {
    id: 19, name: 'CodeKids', category: 'education', subcategory: 'Coding',
    icon: '💻', color: 'linear-gradient(135deg,#a855f7,#7c3aed)',
    price: 0, badge: 'new', featured: false, rating: 4.8, reviews: 4600,
    size: '67 MB', version: '2.0.0', updated: 'Apr 2026',
    desc: 'Teach kids to code through fun visual puzzles, interactive stories, and real Python & JavaScript projects.',
    longDesc: 'CodeKids makes programming accessible for ages 6–14. Start with block-based coding and graduate to real Python and JavaScript. Over 200 guided projects let kids build actual apps and games while learning fundamentals.',
    tags: ['Coding', 'Kids', 'Python', 'JavaScript'],
    screenshots: ['🤖', '🎮', '🏗️', '🌟'],
    developer: 'FutureCode Academy',
  },
  {
    id: 20, name: 'ScienceLab', category: 'education', subcategory: 'Science',
    icon: '🔬', color: 'linear-gradient(135deg,#10b981,#065f46)',
    price: 3.99, badge: null, featured: false, rating: 4.6, reviews: 5800,
    size: '120 MB', version: '3.1.0', updated: 'Feb 2026',
    desc: 'Virtual science experiments covering chemistry, physics, and biology with 3D simulations and AR mode.',
    longDesc: 'ScienceLab lets you conduct over 150 experiments safely in a virtual lab environment. Mix chemicals, dissect organisms, and run physics simulations with accurate real-world models. AR mode overlays experiments onto your real desk.',
    tags: ['Science', 'AR', 'Simulation', 'STEM'],
    screenshots: ['⚗️', '🧬', '⚡', '🌡️'],
    developer: 'LabMind Technologies',
  },

  /* ---- APPS (general) ---- */
  {
    id: 21, name: 'VaultCam', category: 'apps', subcategory: 'Photography',
    icon: '📸', color: 'linear-gradient(135deg,#f43f5e,#fb7185)',
    price: 0, badge: null, featured: false, rating: 4.7, reviews: 23000,
    size: '44 MB', version: '7.0.1', updated: 'Apr 2026',
    desc: 'Pro camera app with manual controls, RAW capture, night mode, and AI-powered scene enhancement.',
    longDesc: 'VaultCam turns your device into a professional camera with full manual control over ISO, shutter, white balance, and focus. Shoot in RAW+JPEG simultaneously, and use AI enhancement modes for portraits, landscapes, and night scenes.',
    tags: ['Camera', 'RAW', 'AI', 'Photography'],
    screenshots: ['🌅', '📷', '🌙', '🎨'],
    developer: 'Aperture Labs',
  },
  {
    id: 22, name: 'HealthPulse', category: 'apps', subcategory: 'Health & Fitness',
    icon: '❤️', color: 'linear-gradient(135deg,#ef4444,#f97316)',
    price: 0, badge: 'hot', featured: false, rating: 4.8, reviews: 41000,
    size: '52 MB', version: '5.3.0', updated: 'Mar 2026',
    desc: 'Track workouts, nutrition, sleep, and heart rate with smart health insights and personalized goals.',
    longDesc: 'HealthPulse integrates with wearable devices to give you a 360° view of your health. Log workouts from 80+ activity types, track macros with a database of 2M+ foods, and get personalized insights from your trends.',
    tags: ['Fitness', 'Health', 'Wearable', 'Nutrition'],
    screenshots: ['🏃', '💪', '🥗', '😴'],
    developer: 'VitalTech',
  },
  {
    id: 23, name: 'MapVoyage', category: 'apps', subcategory: 'Navigation',
    icon: '🗺️', color: 'linear-gradient(135deg,#06b6d4,#0369a1)',
    price: 0, badge: null, featured: false, rating: 4.5, reviews: 33000,
    size: '190 MB', version: '11.2.0', updated: 'Mar 2026',
    desc: 'Offline maps, real-time traffic, AR street view, and community-driven hazard alerts.',
    longDesc: 'MapVoyage combines offline HD maps with live community data for the ultimate navigation experience. Download maps for 200+ countries, use AR walking directions, and get real-time reports on traffic, accidents, and road conditions.',
    tags: ['Maps', 'Navigation', 'Offline', 'AR'],
    screenshots: ['🧭', '🚗', '🌐', '📍'],
    developer: 'GeoPath Inc.',
  },
  {
    id: 24, name: 'BudgetBuddy', category: 'apps', subcategory: 'Finance',
    icon: '💰', color: 'linear-gradient(135deg,#16a34a,#15803d)',
    price: 2.99, badge: null, featured: false, rating: 4.6, reviews: 8900,
    size: '22 MB', version: '3.4.0', updated: 'Feb 2026',
    desc: 'Personal finance tracker with budget categories, bill reminders, spending insights, and savings goals.',
    longDesc: 'BudgetBuddy automatically categorizes your transactions, tracks spending against your monthly budgets, and sends smart alerts before you overspend. Set savings goals and watch your progress with intuitive charts.',
    tags: ['Finance', 'Budget', 'Savings', 'Tracking'],
    screenshots: ['📊', '💳', '🎯', '🏦'],
    developer: 'FinWise Studio',
  },
  {
    id: 25, name: 'SkyWeather', category: 'apps', subcategory: 'Weather',
    icon: '🌤️', color: 'linear-gradient(135deg,#7dd3fc,#3b82f6)',
    price: 0, badge: null, featured: false, rating: 4.4, reviews: 56000,
    size: '19 MB', version: '8.0.0', updated: 'Apr 2026',
    desc: 'Hyper-local weather forecasts with radar maps, hourly detail, severe weather alerts, and widgets.',
    longDesc: 'SkyWeather uses data from 300,000+ personal weather stations for street-level accuracy. Animated radar, satellite imagery, 14-day forecasts, and air quality indices are all available in a beautiful, customizable interface.',
    tags: ['Weather', 'Forecast', 'Radar', 'Widgets'],
    screenshots: ['🌦️', '🗺️', '🌡️', '🌈'],
    developer: 'AtmosTech',
  },
  {
    id: 26, name: 'ChefAI', category: 'apps', subcategory: 'Food & Drink',
    icon: '👨‍🍳', color: 'linear-gradient(135deg,#f97316,#ea580c)',
    price: 1.99, badge: 'new', featured: false, rating: 4.7, reviews: 6100,
    size: '38 MB', version: '1.3.0', updated: 'Apr 2026',
    desc: 'AI-powered recipe generator that creates personalised meals from ingredients in your fridge.',
    longDesc: 'Take a photo of your fridge or pantry and ChefAI instantly suggests creative recipes using what you have. Filter by diet (vegan, keto, gluten-free), cooking time, and skill level. Save your favourites and generate automatic shopping lists.',
    tags: ['Recipes', 'AI', 'Food', 'Cooking'],
    screenshots: ['🍳', '📸', '🛒', '🌮'],
    developer: 'MealMind AI',
  },
];

/* ===== STATE ===== */
const state = {
  category: 'all',
  price: 'all',
  sort: 'featured',
  search: '',
  cart: [],
  installed: new Set(),
};

/* ===== DOM REFS ===== */
const appsGrid     = document.getElementById('appsGrid');
const emptyState   = document.getElementById('emptyState');
const resultsCount = document.getElementById('resultsCount');
const storeHeading = document.getElementById('storeHeading');
const cartBody     = document.getElementById('cartBody');
const cartFooter   = document.getElementById('cartFooter');
const cartTotal    = document.getElementById('cartTotal');
const cartCount    = document.getElementById('cartCount');
const cartSidebar  = document.getElementById('cartSidebar');
const cartOverlay  = document.getElementById('cartOverlay');
const modal        = document.getElementById('appModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const toastContainer = document.getElementById('toastContainer');
const searchClear  = document.getElementById('searchClear');

/* ===== RENDER APPS GRID ===== */
function getFilteredApps() {
  let data = [...STORE_DATA];

  if (state.category !== 'all') {
    data = data.filter(a => a.category === state.category);
  }
  if (state.price === 'free') {
    data = data.filter(a => a.price === 0);
  } else if (state.price === 'paid') {
    data = data.filter(a => a.price > 0);
  }
  if (state.search) {
    const q = state.search.toLowerCase();
    data = data.filter(a =>
      a.name.toLowerCase().includes(q) ||
      a.desc.toLowerCase().includes(q) ||
      a.subcategory.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  switch (state.sort) {
    case 'rating':    data.sort((a,b) => b.rating - a.rating); break;
    case 'newest':    data.sort((a,b) => b.id - a.id); break;
    case 'price-asc': data.sort((a,b) => a.price - b.price); break;
    case 'price-desc':data.sort((a,b) => b.price - a.price); break;
    case 'name':      data.sort((a,b) => a.name.localeCompare(b.name)); break;
    case 'featured':  data.sort((a,b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)); break;
  }
  return data;
}

function renderGrid() {
  const apps = getFilteredApps();
  appsGrid.innerHTML = '';

  if (apps.length === 0) {
    emptyState.style.display = 'block';
    resultsCount.textContent = '';
    return;
  }

  emptyState.style.display = 'none';
  resultsCount.textContent = `${apps.length} result${apps.length !== 1 ? 's' : ''}`;

  apps.forEach((app, i) => {
    const card = buildCard(app, i);
    appsGrid.appendChild(card);
  });
}

function buildCard(app, index) {
  const isInstalled = state.installed.has(app.id);
  const inCart = state.cart.find(c => c.id === app.id);

  const card = document.createElement('div');
  card.className = 'app-card';
  card.style.animationDelay = `${index * 40}ms`;
  card.onclick = (e) => {
    if (e.target.closest('.card-action-btn')) return;
    openModal(app);
  };

  const badge = app.badge
    ? `<span class="card-cover-badge badge-${app.badge}">${badgeLabel(app.badge)}</span>`
    : '';

  const priceHTML = app.price === 0
    ? `<span class="card-price free">Free</span>`
    : `<span class="card-price">$${app.price.toFixed(2)}</span>`;

  const actionBtn = buildActionBtn(app, isInstalled, inCart);
  const catClass  = `cat-${app.category}`;

  card.innerHTML = `
    <div class="card-cover" style="background:${app.color}">
      ${badge}
      <span style="filter:drop-shadow(0 2px 8px rgba(0,0,0,0.4))">${app.icon}</span>
    </div>
    <div class="card-body">
      <div class="card-top">
        <div class="card-title">${app.name}</div>
        <span class="card-cat ${catClass}">${app.subcategory}</span>
      </div>
      <div class="card-desc">${app.desc}</div>
      <div class="card-footer">
        <div class="card-rating">
          <span class="stars">${starHTML(app.rating)}</span>
          <span>${app.rating}</span>
          <span class="rating-count">(${fmt(app.reviews)})</span>
        </div>
        <div class="card-price-area">
          ${priceHTML}
          ${actionBtn}
        </div>
      </div>
    </div>
  `;
  return card;
}

function buildActionBtn(app, isInstalled, inCart) {
  if (app.price === 0) {
    if (isInstalled) {
      return `<button class="card-action-btn btn-installed" onclick="openApp(${app.id})">Open</button>`;
    }
    return `<button class="card-action-btn btn-get" onclick="installApp(${app.id})">Get</button>`;
  } else {
    if (isInstalled) {
      return `<button class="card-action-btn btn-installed" onclick="openApp(${app.id})">Open</button>`;
    }
    if (inCart) {
      return `<button class="card-action-btn btn-installed" onclick="toggleCart()">In Cart</button>`;
    }
    return `<button class="card-action-btn btn-buy" onclick="addToCart(${app.id})">$${app.price.toFixed(2)}</button>`;
  }
}

function badgeLabel(b) {
  const map = { new: 'NEW', hot: '🔥 HOT', sale: 'SALE', editors: "Editor's Pick" };
  return map[b] || b.toUpperCase();
}

function starHTML(rating) {
  const full  = Math.floor(rating);
  const half  = rating - full >= 0.5;
  let s = '★'.repeat(full);
  if (half) s += '½';
  return s;
}

function fmt(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toString();
}

/* ===== FEATURED SLIDER ===== */
function renderFeatured() {
  const slider = document.getElementById('featuredSlider');
  const featured = STORE_DATA.filter(a => a.featured);

  slider.innerHTML = featured.map(app => `
    <div class="featured-card" onclick="openModal(STORE_DATA.find(a=>a.id===${app.id}))">
      <div class="featured-card-bg" style="background:${app.color}">${app.icon}</div>
      <div class="featured-card-body">
        <h3>${app.name}</h3>
        <p>${app.desc}</p>
        <div class="featured-card-meta">
          <span class="featured-price">${app.price === 0 ? 'Free' : '$' + app.price.toFixed(2)}</span>
          <span class="featured-tag">${app.subcategory}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ===== FILTER & SORT ===== */
function filterCategory(cat, el) {
  state.category = cat;
  state.search = '';
  document.getElementById('searchInput').value = '';
  searchClear.classList.remove('visible');

  const headings = {
    all: 'All Apps & Games', apps: 'Apps', games: 'Games',
    productivity: 'Productivity', entertainment: 'Entertainment', education: 'Education',
  };
  storeHeading.textContent = headings[cat] || cat;

  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.category === cat);
  });
  if (el) el.classList.add('active');

  renderGrid();
  scrollToStore();
  return false;
}

function filterPrice(price, el) {
  state.price = price;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderGrid();
}

function handleSort(val) {
  state.sort = val;
  renderGrid();
}

function handleSearch(val) {
  state.search = val.trim();
  searchClear.classList.toggle('visible', val.length > 0);

  if (state.search) {
    storeHeading.textContent = `Results for "${state.search}"`;
  } else {
    const headings = {
      all: 'All Apps & Games', apps: 'Apps', games: 'Games',
      productivity: 'Productivity', entertainment: 'Entertainment', education: 'Education',
    };
    storeHeading.textContent = headings[state.category] || state.category;
  }
  renderGrid();
}

function clearSearch() {
  state.search = '';
  document.getElementById('searchInput').value = '';
  searchClear.classList.remove('visible');
  const headings = {
    all: 'All Apps & Games', apps: 'Apps', games: 'Games',
    productivity: 'Productivity', entertainment: 'Entertainment', education: 'Education',
  };
  storeHeading.textContent = headings[state.category] || state.category;
  renderGrid();
}

function resetAll() {
  state.category = 'all';
  state.price = 'all';
  state.sort = 'featured';
  state.search = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('sortSelect').value = 'featured';
  searchClear.classList.remove('visible');
  storeHeading.textContent = 'All Apps & Games';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.category === 'all');
  });
  document.querySelectorAll('.filter-chip').forEach((c,i) => c.classList.toggle('active', i === 0));
  renderGrid();
}

/* ===== INSTALL / BUY ===== */
function installApp(id) {
  const app = STORE_DATA.find(a => a.id === id);
  if (!app) return;
  state.installed.add(id);
  showToast(`${app.icon} ${app.name} installed!`, 'success');
  renderGrid();
}

function openApp(id) {
  const app = STORE_DATA.find(a => a.id === id);
  showToast(`Opening ${app.name}…`, 'info');
}

function addToCart(id) {
  const app = STORE_DATA.find(a => a.id === id);
  if (!app) return;
  if (state.cart.find(c => c.id === id)) {
    showToast(`${app.name} is already in your cart.`, 'warning');
    return;
  }
  state.cart.push(app);
  updateCartUI();
  showToast(`${app.icon} ${app.name} added to cart!`, 'success');
  renderGrid();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(c => c.id !== id);
  updateCartUI();
  renderGrid();
}

function clearCart() {
  state.cart = [];
  updateCartUI();
}

function updateCartUI() {
  const count = state.cart.length;
  cartCount.textContent = count;
  cartCount.classList.toggle('visible', count > 0);

  if (count === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Your cart is empty.</p>
      </div>`;
    cartFooter.style.display = 'none';
    return;
  }

  const total = state.cart.reduce((s, a) => s + a.price, 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
  cartFooter.style.display = 'flex';

  cartBody.innerHTML = state.cart.map(app => `
    <div class="cart-item">
      <div class="cart-item-icon" style="background:${app.color}">${app.icon}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${app.name}</div>
        <div class="cart-item-price">$${app.price.toFixed(2)}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${app.id})" title="Remove">🗑️</button>
    </div>
  `).join('');
}

function toggleCart() {
  const isOpen = cartSidebar.classList.toggle('open');
  cartOverlay.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function checkout() {
  if (state.cart.length === 0) return;
  state.cart.forEach(app => state.installed.add(app.id));
  const count = state.cart.length;
  state.cart = [];
  updateCartUI();
  toggleCart();
  showToast(`🎉 ${count} app${count !== 1 ? 's' : ''} purchased & installed!`, 'success');
  renderGrid();
}

/* ===== MODAL ===== */
function openModal(app) {
  if (!app) return;
  const isInstalled = state.installed.has(app.id);
  const inCart = state.cart.find(c => c.id === app.id);

  let actionBtns;
  if (isInstalled) {
    actionBtns = `<button class="btn btn-ghost" onclick="openApp(${app.id})">Open</button>`;
  } else if (app.price === 0) {
    actionBtns = `<button class="btn btn-primary" onclick="installApp(${app.id}); closeModal()">Get — Free</button>`;
  } else if (inCart) {
    actionBtns = `<button class="btn btn-ghost" onclick="toggleCart(); closeModal()">View in Cart</button>`;
  } else {
    actionBtns = `
      <button class="btn btn-primary" onclick="addToCart(${app.id}); closeModal()">Buy — $${app.price.toFixed(2)}</button>
      <button class="btn btn-ghost" onclick="wishlist(${app.id})">♡ Wishlist</button>
    `;
  }

  const screenshots = (app.screenshots || []).map(s =>
    `<div class="screenshot-thumb">${s}</div>`
  ).join('');

  const tags = (app.tags || []).map(t =>
    `<span class="modal-tag">${t}</span>`
  ).join('');

  modalContent.innerHTML = `
    <div class="modal-hero" style="background:${app.color}">${app.icon}</div>
    <div class="modal-app-header">
      <div class="modal-app-icon" style="background:${app.color}">${app.icon}</div>
      <div class="modal-app-info">
        <h2>${app.name}</h2>
        <p>${app.developer} · ${app.subcategory}</p>
        <div class="modal-meta">
          <span><strong>${app.rating} ★</strong> Rating</span>
          <span><strong>${fmt(app.reviews)}</strong> Reviews</span>
          <span><strong>${app.size}</strong></span>
          <span><strong>v${app.version}</strong></span>
        </div>
      </div>
    </div>
    <div class="modal-divider"></div>
    <p class="modal-section-title">About</p>
    <p class="modal-desc">${app.longDesc}</p>
    <div class="modal-divider"></div>
    <p class="modal-section-title">Screenshots</p>
    <div class="modal-screenshots">${screenshots}</div>
    <div class="modal-divider"></div>
    <p class="modal-section-title">Tags</p>
    <div class="modal-tags">${tags}</div>
    <div class="modal-actions">${actionBtns}</div>
  `;

  modal.classList.add('open');
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function wishlist(id) {
  const app = STORE_DATA.find(a => a.id === id);
  showToast(`${app.icon} ${app.name} added to wishlist!`, 'info');
}

/* ===== TOAST ===== */
function showToast(msg, type = 'info', duration = 3500) {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: '✅', info: 'ℹ️', warning: '⚠️', error: '❌' };
  toast.innerHTML = `<span>${icons[type] || ''}</span><span>${msg}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease forwards';
    toast.addEventListener('animationend', () => toast.remove());
  }, duration);
}

/* ===== NAVIGATION ===== */
function scrollToStore() {
  document.getElementById('storeSection').scrollIntoView({ behavior: 'smooth' });
}

function showHome() {
  resetAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}

function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
}

/* ===== HEADER SCROLL ===== */
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ===== KEYBOARD SHORTCUTS ===== */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    if (cartSidebar.classList.contains('open')) toggleCart();
    closeMobileNav();
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('searchInput').focus();
  }
});

/* ===== INIT ===== */
function init() {
  renderFeatured();
  renderGrid();
  updateCartUI();
}

init();

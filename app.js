/* ============================================================
   AppVault — Full Store App
   Pure HTML / CSS / JS — No dependencies
   ============================================================ */

'use strict';

/* ============================================================
   DATA
   ============================================================ */

const APPS_DATA = [
  // Productivity
  { id: 1, type: 'app', name: 'TaskFlow Pro', developer: 'PixelSoft', category: 'Productivity', icon: '✅', color: '#6c63ff', rating: 4.8, reviews: 24300, downloads: '5M+', size: '42 MB', price: 0, featured: true, new: false, year: 2024, desc: 'TaskFlow Pro is the ultimate task management solution. Organize projects, set deadlines, collaborate with your team, and stay on top of your goals with smart reminders and beautiful boards.', screenshots: ['📋','📊','🗓️','⚡'], reviewList: [{user:'Alice',stars:5,text:'Best task manager I have used. Simple and powerful.'},{user:'Bob',stars:4,text:'Really useful. Wish it had more themes.'},{user:'Carol',stars:5,text:'Changed how I work. Highly recommend!'}] },
  { id: 2, type: 'app', name: 'NoteNest', developer: 'Cloudbyte', category: 'Productivity', icon: '📝', color: '#f59e0b', rating: 4.6, reviews: 18200, downloads: '3M+', size: '28 MB', price: 0, featured: false, new: false, year: 2024, desc: 'Capture every idea with NoteNest. Rich text, code blocks, checklists, and instant sync across all your devices. Built for thinkers and creators.', screenshots: ['📝','🗂️','🔍','🔗'], reviewList: [{user:'Dev',stars:5,text:'Love the markdown support!'},{user:'Mia',stars:4,text:'Clean UI and fast.'},{user:'Tom',stars:4,text:'Great note app.'}] },
  { id: 3, type: 'app', name: 'FocusZen', developer: 'MindLabs', category: 'Productivity', icon: '🎯', color: '#22c55e', rating: 4.7, reviews: 9800, downloads: '1M+', size: '18 MB', price: 2.99, featured: true, new: false, year: 2023, desc: 'Stay laser-focused with Pomodoro timers, ambient soundscapes, distraction blocking, and beautiful productivity analytics. FocusZen transforms your workflow.', screenshots: ['⏱️','📈','🔕','🌿'], reviewList: [{user:'Ravi',stars:5,text:'This app literally doubled my output.'},{user:'Sara',stars:5,text:'Beautiful timer design.'},{user:'Leo',stars:4,text:'Worth every penny.'}] },
  { id: 4, type: 'app', name: 'ScanSnap', developer: 'DocuWorks', category: 'Utilities', icon: '📄', color: '#0ea5e9', rating: 4.5, reviews: 14000, downloads: '8M+', size: '35 MB', price: 0, featured: false, new: true, year: 2025, desc: 'Instantly scan documents, receipts, and QR codes. Auto-enhance photos, export to PDF, and organize your digital files with smart folders.', screenshots: ['📷','🗃️','📁','✏️'], reviewList: [{user:'Jake',stars:5,text:'Super fast scanning!'},{user:'Nina',stars:4,text:'Best scanner app out there.'},{user:'Phil',stars:3,text:'Works well but heavy.'}] },
  { id: 5, type: 'app', name: 'CloudVault', developer: 'StoragePro', category: 'Utilities', icon: '☁️', color: '#64748b', rating: 4.4, reviews: 32000, downloads: '20M+', size: '55 MB', price: 0, featured: false, new: false, year: 2023, desc: 'Secure cloud storage with end-to-end encryption. Share files, back up photos, and collaborate on documents from anywhere.', screenshots: ['☁️','🔒','📂','🤝'], reviewList: [{user:'Anna',stars:4,text:'Reliable and fast.'},{user:'James',stars:5,text:'Great for team collaboration.'},{user:'Sue',stars:4,text:'Best storage app I use.'}] },
  { id: 6, type: 'app', name: 'WaveBeats', developer: 'AudioCraft', category: 'Music', icon: '🎵', color: '#ec4899', rating: 4.9, reviews: 51000, downloads: '10M+', size: '48 MB', price: 0, featured: true, new: false, year: 2024, desc: 'Stream millions of songs, create playlists, discover new artists, and enjoy hi-fi audio quality. WaveBeats is music for every mood.', screenshots: ['🎧','🎼','🎤','🎛️'], reviewList: [{user:'Lily',stars:5,text:'Incredible sound quality!'},{user:'Max',stars:5,text:'My favorite music app.'},{user:'Jade',stars:5,text:'Love the discover feature.'}] },
  { id: 7, type: 'app', name: 'LensAI', developer: 'VisionTech', category: 'Photo & Video', icon: '📸', color: '#f97316', rating: 4.7, reviews: 28000, downloads: '4M+', size: '92 MB', price: 4.99, featured: true, new: true, year: 2025, desc: 'AI-powered photo editing that makes every shot stunning. One-tap enhancements, portrait retouch, background removal, and cinematic filters.', screenshots: ['🖼️','✨','🎨','📱'], reviewList: [{user:'Kim',stars:5,text:'Best AI photo editor.'},{user:'Ron',stars:4,text:'Amazing filters!'},{user:'Ash',stars:5,text:'Worth every cent.'}] },
  { id: 8, type: 'app', name: 'WalletWise', developer: 'FinApp', category: 'Finance', icon: '💰', color: '#16a34a', rating: 4.6, reviews: 19000, downloads: '3M+', size: '29 MB', price: 0, featured: false, new: false, year: 2023, desc: 'Track spending, set budgets, and visualize your financial health. WalletWise connects to your bank accounts for real-time balance syncing.', screenshots: ['💳','📊','🏦','💡'], reviewList: [{user:'Greg',stars:5,text:'Finally understand where my money goes.'},{user:'Fiona',stars:4,text:'Excellent budget tools.'},{user:'Chris',stars:5,text:'Super easy to use.'}] },
  { id: 9, type: 'app', name: 'FitTrack', developer: 'HealthLab', category: 'Health', icon: '💪', color: '#ef4444', rating: 4.8, reviews: 38000, downloads: '7M+', size: '61 MB', price: 0, featured: true, new: false, year: 2024, desc: 'Personalized workout plans, nutrition tracking, and step counter all in one. Sync with wearables and smash your fitness goals.', screenshots: ['🏋️','🥗','❤️','📉'], reviewList: [{user:'Dana',stars:5,text:'Lost 10lbs using this app!'},{user:'Paul',stars:5,text:'Amazing workout library.'},{user:'Tina',stars:4,text:'Very motivating.'}] },
  { id: 10, type: 'app', name: 'LingoLeap', developer: 'EduSpark', category: 'Education', icon: '🌍', color: '#8b5cf6', rating: 4.7, reviews: 45000, downloads: '12M+', size: '77 MB', price: 0, featured: false, new: false, year: 2023, desc: 'Learn 40+ languages with gamified lessons, AI conversation practice, and immersive stories. Become fluent faster with LingoLeap.', screenshots: ['🗣️','📚','🏆','🎮'], reviewList: [{user:'Elena',stars:5,text:'Learning Spanish in weeks!'},{user:'Raj',stars:5,text:'The best language app.'},{user:'Sam',stars:4,text:'Fun and effective.'}] },
  { id: 11, type: 'app', name: 'CodePocket', developer: 'DevTools Inc', category: 'Utilities', icon: '💻', color: '#0f172a', rating: 4.5, reviews: 7600, downloads: '900K+', size: '22 MB', price: 1.99, featured: false, new: true, year: 2025, desc: 'A full-featured code editor right on your phone. Syntax highlighting for 80+ languages, Git integration, terminal emulator, and SSH remote access.', screenshots: ['⌨️','🔧','📂','🌐'], reviewList: [{user:'Vera',stars:5,text:'Real coding on mobile!'},{user:'Pete',stars:4,text:'Surprisingly capable.'},{user:'Zach',stars:5,text:'Git support is great.'}] },
  { id: 12, type: 'app', name: 'SocialHub', developer: 'ConnectCo', category: 'Social', icon: '👥', color: '#06b6d4', rating: 4.3, reviews: 61000, downloads: '25M+', size: '84 MB', price: 0, featured: false, new: false, year: 2023, desc: 'Manage all your social networks in one place. Post, schedule, and analyze performance across Instagram, Twitter, TikTok, and more.', screenshots: ['📲','📊','💬','✍️'], reviewList: [{user:'Iris',stars:4,text:'Saves so much time!'},{user:'Kyle',stars:3,text:'Some features are buggy.'},{user:'Mila',stars:5,text:'Best social manager.'}] },
  { id: 13, type: 'app', name: 'MapRoam', developer: 'GeoCore', category: 'Utilities', icon: '🗺️', color: '#10b981', rating: 4.6, reviews: 22000, downloads: '6M+', size: '120 MB', price: 0, featured: false, new: false, year: 2024, desc: 'Offline maps for 200+ countries, turn-by-turn navigation, traffic alerts, and transit directions. Travel anywhere without data.', screenshots: ['🧭','🛣️','🚌','✈️'], reviewList: [{user:'Omar',stars:5,text:'Offline maps are a lifesaver.'},{user:'Nell',stars:5,text:'Better than default maps.'},{user:'Ian',stars:4,text:'Fast and accurate.'}] },
  { id: 14, type: 'app', name: 'PixelDraw', developer: 'ArtStudio', category: 'Photo & Video', icon: '🎨', color: '#a855f7', rating: 4.8, reviews: 17000, downloads: '2M+', size: '68 MB', price: 3.99, featured: false, new: true, year: 2025, desc: 'Professional illustration and pixel art tool. Hundreds of brushes, layer support, animation frames, and export to SVG/PNG.', screenshots: ['🖌️','🖼️','✏️','🌈'], reviewList: [{user:'Aria',stars:5,text:'Perfect for illustration work.'},{user:'Ben',stars:5,text:'Incredible app for artists.'},{user:'Cleo',stars:4,text:'Best drawing app.'}] },
  { id: 15, type: 'app', name: 'WeatherNow', developer: 'AtmosSoft', category: 'Utilities', icon: '⛅', color: '#3b82f6', rating: 4.4, reviews: 48000, downloads: '15M+', size: '31 MB', price: 0, featured: false, new: false, year: 2023, desc: 'Hyper-local weather with hourly forecasts, radar maps, storm alerts, and beautiful animated backgrounds. Know exactly what weather to expect.', screenshots: ['🌤️','🌧️','❄️','🌡️'], reviewList: [{user:'Hal',stars:4,text:'Very accurate forecasts.'},{user:'Ivy',stars:5,text:'Love the animations.'},{user:'Jay',stars:4,text:'Clean and easy to use.'}] },
];

const GAMES_DATA = [
  { id: 101, type: 'game', name: 'Galactic Fury', developer: 'StarForge', category: 'Action', icon: '🚀', color: '#6c63ff', rating: 4.9, reviews: 88000, downloads: '15M+', size: '850 MB', price: 0, featured: true, new: false, year: 2024, desc: 'An epic space shooter with stunning visuals, deep progression, and co-op multiplayer. Battle alien fleets across 200 levels in this genre-defining action game.', screenshots: ['🛸','💥','🌌','🏆'], reviewList: [{user:'Zane',stars:5,text:'Best shooter on mobile!'},{user:'Rita',stars:5,text:'Addictive gameplay loop.'},{user:'Hugo',stars:5,text:'Incredible graphics.'}] },
  { id: 102, type: 'game', name: 'Dragon Quest: Eternal', developer: 'MythicGames', category: 'RPG', icon: '🐉', color: '#f59e0b', rating: 4.8, reviews: 65000, downloads: '8M+', size: '1.2 GB', price: 6.99, featured: true, new: false, year: 2024, desc: 'Embark on an epic 60-hour RPG adventure. Build your hero, recruit companions, explore vast dungeons, and defeat ancient dragons in turn-based combat.', screenshots: ['⚔️','🗺️','🏰','🧙'], reviewList: [{user:'Finn',stars:5,text:'Console-quality RPG.'},{user:'Gwen',stars:5,text:'Incredible story and characters.'},{user:'Hank',stars:4,text:'Long and rewarding.'}] },
  { id: 103, type: 'game', name: 'Cube Blast', developer: 'PuzzleMind', category: 'Puzzle', icon: '🧩', color: '#22c55e', rating: 4.6, reviews: 120000, downloads: '30M+', size: '95 MB', price: 0, featured: false, new: false, year: 2023, desc: 'Match colorful cubes, trigger explosive combos, and complete 5000+ levels. Easy to learn, impossible to stop — the most addictive puzzle game ever.', screenshots: ['🟦','🟩','🟥','✨'], reviewList: [{user:'Lena',stars:5,text:'So addictive!'},{user:'Mark',stars:4,text:'Fun for all ages.'},{user:'Nora',stars:5,text:'Best puzzle game I have played.'}] },
  { id: 104, type: 'game', name: 'Empire Rush', developer: 'StrategyLabs', category: 'Strategy', icon: '🏰', color: '#ef4444', rating: 4.7, reviews: 43000, downloads: '6M+', size: '420 MB', price: 0, featured: true, new: false, year: 2024, desc: 'Build your empire, raise armies, conquer territories, and defeat rival kings. Empire Rush features deep strategy, real-time battles, and seasonal PvP leagues.', screenshots: ['⚔️','🏘️','📜','🛡️'], reviewList: [{user:'Otto',stars:5,text:'Deep and engaging.'},{user:'Pam',stars:4,text:'Great strategy game.'},{user:'Quinn',stars:5,text:'Addictive progression.'}] },
  { id: 105, type: 'game', name: 'Turbo Drift', developer: 'NitroStudios', category: 'Racing', icon: '🏎️', color: '#f97316', rating: 4.5, reviews: 55000, downloads: '10M+', size: '650 MB', price: 0, featured: false, new: false, year: 2023, desc: 'Heart-pumping street racing with realistic physics, 100+ cars to unlock, and live online multiplayer. Drift your way to glory on 50 stunning tracks.', screenshots: ['🚗','🏁','💨','🔧'], reviewList: [{user:'Rudy',stars:5,text:'Best racing game!'},{user:'Sasha',stars:4,text:'Fun and fast-paced.'},{user:'Todd',stars:5,text:'Love the drifting mechanics.'}] },
  { id: 106, type: 'game', name: 'Soccer Star 26', developer: 'FootballCraft', category: 'Sports', icon: '⚽', color: '#16a34a', rating: 4.7, reviews: 91000, downloads: '22M+', size: '780 MB', price: 0, featured: true, new: true, year: 2025, desc: 'The most realistic soccer game on mobile. Build your dream team, compete in online leagues, and experience authentic stadium atmosphere in every match.', screenshots: ['🥅','👟','🏆','📺'], reviewList: [{user:'Ugo',stars:5,text:'Best mobile soccer ever.'},{user:'Vera',stars:5,text:'The graphics are insane.'},{user:'Will',stars:4,text:'Great game mode variety.'}] },
  { id: 107, type: 'game', name: 'Candy Pop Mania', developer: 'SweetGames', category: 'Casual', icon: '🍬', color: '#ec4899', rating: 4.4, reviews: 200000, downloads: '50M+', size: '110 MB', price: 0, featured: false, new: false, year: 2023, desc: 'The sweetest match-3 game with 8000 levels, daily challenges, and endless fun. Perfect for all ages — pick up and play anytime, anywhere.', screenshots: ['🍭','🍫','🍰','🎉'], reviewList: [{user:'Xena',stars:4,text:'Timeless fun.'},{user:'Yuki',stars:5,text:'My kids love it!'},{user:'Zoe',stars:4,text:'Great time-passer.'}] },
  { id: 108, type: 'game', name: 'City Builder X', developer: 'UrbanGames', category: 'Simulation', icon: '🏙️', color: '#0ea5e9', rating: 4.8, reviews: 37000, downloads: '5M+', size: '520 MB', price: 4.99, featured: true, new: false, year: 2024, desc: 'Design and manage your own metropolis. Zone districts, lay roads, build utilities, and keep your citizens happy. The ultimate city simulation with realistic economics.', screenshots: ['🏗️','🌆','🚦','💡'], reviewList: [{user:'Abel',stars:5,text:'Hours of gameplay.'},{user:'Beth',stars:5,text:'So detailed and fun.'},{user:'Carl',stars:4,text:'Best city builder.'}] },
  { id: 109, type: 'game', name: 'Shadow Blade', developer: 'NinjaForge', category: 'Action', icon: '⚔️', color: '#1e293b', rating: 4.6, reviews: 29000, downloads: '4M+', size: '380 MB', price: 2.99, featured: false, new: false, year: 2023, desc: 'A fast-paced ninja action platformer with fluid combat, hidden secrets, and epic boss fights. Master 12 unique weapons and slice your way through 5 worlds.', screenshots: ['🥷','💨','🔥','🌑'], reviewList: [{user:'Dex',stars:5,text:'Fluid and fun controls.'},{user:'Eva',stars:4,text:'Great level design.'},{user:'Fox',stars:5,text:'Amazing platformer.'}] },
  { id: 110, type: 'game', name: 'Ocean Explorer', developer: 'DeepBlue', category: 'Simulation', icon: '🐠', color: '#06b6d4', rating: 4.7, reviews: 16000, downloads: '2M+', size: '290 MB', price: 0, featured: false, new: true, year: 2025, desc: 'Dive into a gorgeous underwater world. Discover rare species, build coral reefs, and manage your own marine sanctuary in this relaxing ocean simulation.', screenshots: ['🐋','🦈','🐙','🌊'], reviewList: [{user:'Gina',stars:5,text:'So relaxing and beautiful.'},{user:'Hiro',stars:5,text:'Unique and creative concept.'},{user:'Isla',stars:4,text:'Love the ocean theme.'}] },
  { id: 111, type: 'game', name: 'Rune Realm', developer: 'MysticCode', category: 'RPG', icon: '🧙', color: '#8b5cf6', rating: 4.9, reviews: 72000, downloads: '11M+', size: '1.4 GB', price: 0, featured: true, new: false, year: 2024, desc: 'A massively multiplayer online RPG with thousands of players, guild wars, crafting, and an ever-expanding world. Your legend begins here.', screenshots: ['🏔️','🪄','🧝','💎'], reviewList: [{user:'Jak',stars:5,text:'Best mobile MMORPG period.'},{user:'Kali',stars:5,text:'I play this every day.'},{user:'Lior',stars:5,text:'Massive and addictive.'}] },
  { id: 112, type: 'game', name: 'StackMaster', developer: 'BrickGames', category: 'Casual', icon: '🧱', color: '#92400e', rating: 4.3, reviews: 95000, downloads: '40M+', size: '35 MB', price: 0, featured: false, new: false, year: 2023, desc: 'The beloved block-stacking game reimagined. Build the tallest tower, challenge friends, and compete on global leaderboards. One tap, infinite fun.', screenshots: ['🟫','🟦','🟥','🏆'], reviewList: [{user:'Mona',stars:4,text:'Simple and satisfying.'},{user:'Ned',stars:3,text:'A bit repetitive.'},{user:'Ola',stars:5,text:'Great for quick breaks.'}] },
  { id: 113, type: 'game', name: 'Puzzle Kingdom', developer: 'BrainTeasers', category: 'Puzzle', icon: '🔮', color: '#7c3aed', rating: 4.5, reviews: 31000, downloads: '7M+', size: '150 MB', price: 0, featured: false, new: true, year: 2025, desc: 'A unique blend of puzzle and strategy. Cast spells, manipulate physics, and solve intricate magical puzzles across 300+ hand-crafted levels.', screenshots: ['🪄','🌀','⭐','🗝️'], reviewList: [{user:'Pia',stars:5,text:'Mind-bending puzzles!'},{user:'Quin',stars:4,text:'Very creative levels.'},{user:'Rex',stars:5,text:'Can not stop playing.'}] },
  { id: 114, type: 'game', name: 'Bike Rush 3D', developer: 'TurboFun', category: 'Racing', icon: '🏍️', color: '#dc2626', rating: 4.4, reviews: 48000, downloads: '12M+', size: '430 MB', price: 0, featured: false, new: false, year: 2024, desc: 'Ride powerful motorcycles through city streets, dodge traffic, and race against friends online. Unlock 60+ bikes and customize every detail.', screenshots: ['🚵','🌃','💨','🔩'], reviewList: [{user:'Sol',stars:5,text:'Great bike physics.'},{user:'Tara',stars:4,text:'Fun multiplayer.'},{user:'Umar',stars:4,text:'Love the customization.'}] },
  { id: 115, type: 'game', name: 'Football Manager 25', developer: 'TacticsPro', category: 'Sports', icon: '🏟️', color: '#064e3b', rating: 4.6, reviews: 28000, downloads: '3M+', size: '680 MB', price: 7.99, featured: false, new: true, year: 2025, desc: 'Take the manager\'s chair in the most realistic football management simulator. Scout players, design tactics, win trophies, and build a dynasty.', screenshots: ['📋','🏆','📊','🌍'], reviewList: [{user:'Vince',stars:5,text:'Incredibly deep gameplay.'},{user:'Wren',stars:4,text:'Real management feeling.'},{user:'Xio',stars:5,text:'Worth every penny.'}] },
];

const ALL_DATA = [...APPS_DATA, ...GAMES_DATA];

const CATEGORIES = [
  { name: 'Productivity', icon: '📋', color: '#6c63ff' },
  { name: 'Social', icon: '👥', color: '#06b6d4' },
  { name: 'Music', icon: '🎵', color: '#ec4899' },
  { name: 'Photo & Video', icon: '📸', color: '#f97316' },
  { name: 'Finance', icon: '💰', color: '#16a34a' },
  { name: 'Health', icon: '💪', color: '#ef4444' },
  { name: 'Education', icon: '📚', color: '#8b5cf6' },
  { name: 'Utilities', icon: '🔧', color: '#64748b' },
  { name: 'Action', icon: '⚡', color: '#f59e0b' },
  { name: 'RPG', icon: '🧙', color: '#7c3aed' },
  { name: 'Puzzle', icon: '🧩', color: '#22c55e' },
  { name: 'Strategy', icon: '♟️', color: '#ef4444' },
  { name: 'Racing', icon: '🏎️', color: '#f97316' },
  { name: 'Sports', icon: '⚽', color: '#16a34a' },
  { name: 'Casual', icon: '🎮', color: '#ec4899' },
  { name: 'Simulation', icon: '🏙️', color: '#0ea5e9' },
];

const HERO_SLIDES = [
  { id: 1 },    // Galactic Fury
  { id: 7 },    // LensAI
  { id: 108 },  // City Builder X
  { id: 6 },    // WaveBeats
  { id: 111 },  // Rune Realm
];

/* ============================================================
   STATE
   ============================================================ */
const state = {
  wishlist: JSON.parse(localStorage.getItem('av_wishlist') || '[]'),
  library: JSON.parse(localStorage.getItem('av_library') || '[]'),
  theme: localStorage.getItem('av_theme') || 'dark',
  currentView: 'home',
  currentFilter: { apps: 'all', games: 'all', chart: 'free' },
  currentSort: { apps: 'rating', games: 'rating' },
  heroIndex: 0,
  heroTimer: null,
  searchQuery: '',
};

/* ============================================================
   PERSIST
   ============================================================ */
function saveState() {
  localStorage.setItem('av_wishlist', JSON.stringify(state.wishlist));
  localStorage.setItem('av_library', JSON.stringify(state.library));
  localStorage.setItem('av_theme', state.theme);
}

/* ============================================================
   UTILS
   ============================================================ */
function formatDownloads(d) { return d; }

function formatPrice(price) {
  if (price === 0) return 'Free';
  return '$' + price.toFixed(2);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let s = '★'.repeat(full);
  if (half) s += '½';
  return s;
}

function isWished(id) { return state.wishlist.includes(id); }
function isInstalled(id) { return state.library.includes(id); }

function toggleWishlist(id) {
  const idx = state.wishlist.indexOf(id);
  if (idx === -1) {
    state.wishlist.push(id);
    showToast('❤️', 'Added to Wishlist');
  } else {
    state.wishlist.splice(idx, 1);
    showToast('💔', 'Removed from Wishlist');
  }
  saveState();
  updateBadges();
}

function toggleLibrary(id) {
  const item = ALL_DATA.find(x => x.id === id);
  const idx = state.library.indexOf(id);
  if (idx === -1) {
    state.library.push(id);
    showToast('📥', `"${item.name}" added to Library`);
  } else {
    state.library.splice(idx, 1);
    showToast('🗑️', `"${item.name}" removed from Library`);
  }
  saveState();
  updateBadges();
}

/* ============================================================
   TOAST
   ============================================================ */
function showToast(icon, message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

/* ============================================================
   BADGES
   ============================================================ */
function updateBadges() {
  const wl = state.wishlist.length;
  const lib = state.library.length;

  // Sidebar badges
  const wb = document.getElementById('wishlist-badge');
  const lb = document.getElementById('library-badge');
  wb.textContent = wl;
  lb.textContent = lib;
  wb.classList.toggle('visible', wl > 0);
  lb.classList.toggle('visible', lib > 0);

  // Topbar badges
  const twb = document.getElementById('topbar-wishlist-badge');
  const tlb = document.getElementById('topbar-library-badge');
  twb.classList.toggle('visible', wl > 0);
  tlb.classList.toggle('visible', lib > 0);
}

/* ============================================================
   THEME
   ============================================================ */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  document.getElementById('theme-icon').textContent = state.theme === 'dark' ? '☀️' : '🌙';
  document.getElementById('theme-label').textContent = state.theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  saveState();
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function navigateTo(view) {
  if (state.currentView === view && view !== 'search') return;
  state.currentView = view;

  // Hide all views
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

  const target = document.getElementById(`view-${view}`);
  if (target) target.classList.add('active');

  // Update nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.view === view);
  });

  // Render view content
  if (view === 'home') renderHome();
  if (view === 'apps') renderAppsGrid();
  if (view === 'games') renderGamesGrid();
  if (view === 'top-charts') renderCharts();
  if (view === 'categories') renderCategories();
  if (view === 'wishlist') renderWishlist();
  if (view === 'library') renderLibrary();

  // Scroll to top
  document.getElementById('main-content').scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   CARD HTML
   ============================================================ */
function cardHTML(item, inRow = false) {
  const priceText = formatPrice(item.price);
  return `
    <div class="app-card${inRow ? '' : ''}" data-id="${item.id}" onclick="openDetail(${item.id})">
      <div class="app-card-thumb" style="background: ${item.color}22;">
        <div class="thumb-bg" style="background:${item.color}"></div>
        <div class="thumb-icon">${item.icon}</div>
      </div>
      <div class="app-card-info">
        <div class="app-card-name">${item.name}</div>
        <div class="app-card-category">${item.category}</div>
        <div class="app-card-meta">
          <div class="app-card-rating">
            <span class="star-sm">★</span>
            <span>${item.rating}</span>
          </div>
          <span class="app-card-price ${item.price === 0 ? 'free' : ''}">${priceText}</span>
        </div>
      </div>
    </div>
  `;
}

function listItemHTML(item, rank) {
  const priceText = formatPrice(item.price);
  return `
    <div class="list-item" onclick="openDetail(${item.id})">
      <span class="list-rank${rank <= 3 ? ' top' : ''}">${rank}</span>
      <div class="list-thumb" style="background:${item.color}22;">${item.icon}</div>
      <div class="list-info">
        <div class="list-name">${item.name}</div>
        <div class="list-category">${item.category}</div>
      </div>
      <span class="list-price ${item.price === 0 ? 'free' : ''}">${priceText}</span>
    </div>
  `;
}

/* ============================================================
   HERO SLIDER
   ============================================================ */
function renderHero() {
  const slidesEl = document.getElementById('hero-slides');
  const dotsEl = document.getElementById('hero-dots');

  const heroItems = HERO_SLIDES.map(h => ALL_DATA.find(x => x.id === h.id)).filter(Boolean);

  slidesEl.innerHTML = heroItems.map(item => `
    <div class="hero-slide" style="background: linear-gradient(135deg, ${item.color}44, ${item.color}11);">
      <div class="hero-content">
        <div class="hero-category">${item.type === 'game' ? '🎮 GAME' : '📱 APP'} · ${item.category}</div>
        <h1 class="hero-title">${item.name}</h1>
        <div class="hero-rating">
          <span class="stars">${renderStars(item.rating)}</span>
          <span>${item.rating} · ${(item.reviews / 1000).toFixed(0)}K reviews</span>
        </div>
        <p class="hero-desc">${item.desc.slice(0, 100)}…</p>
        <div class="hero-actions">
          <button class="btn-get ${isInstalled(item.id) ? 'installed' : ''}" onclick="event.stopPropagation(); heroGet(${item.id})">
            ${isInstalled(item.id) ? 'In Library' : (item.price === 0 ? 'Get Free' : 'Buy $' + item.price.toFixed(2))}
          </button>
          <button class="btn-wish ${isWished(item.id) ? 'wished' : ''}" onclick="event.stopPropagation(); heroWish(${item.id})">
            ${isWished(item.id) ? '❤️ Wished' : '♡ Wishlist'}
          </button>
        </div>
      </div>
      <div style="position:absolute;right:60px;top:50%;transform:translateY(-50%);font-size:8rem;opacity:.35;pointer-events:none">${item.icon}</div>
    </div>
  `).join('');

  dotsEl.innerHTML = heroItems.map((_, i) => `
    <span class="hero-dot ${i === state.heroIndex ? 'active' : ''}" onclick="goToHeroSlide(${i})"></span>
  `).join('');

  updateHeroSlide();
}

function updateHeroSlide() {
  const slidesEl = document.getElementById('hero-slides');
  const dotsEl = document.getElementById('hero-dots');
  if (!slidesEl) return;
  slidesEl.style.transform = `translateX(-${state.heroIndex * 100}%)`;
  if (dotsEl) {
    dotsEl.querySelectorAll('.hero-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === state.heroIndex);
    });
  }
}

function goToHeroSlide(idx) {
  const heroItems = HERO_SLIDES.filter(h => ALL_DATA.find(x => x.id === h.id));
  state.heroIndex = (idx + heroItems.length) % heroItems.length;
  updateHeroSlide();
  restartHeroTimer();
}

function heroGet(id) {
  toggleLibrary(id);
  renderHero();
}
function heroWish(id) {
  toggleWishlist(id);
  renderHero();
}

function startHeroTimer() {
  clearInterval(state.heroTimer);
  state.heroTimer = setInterval(() => {
    goToHeroSlide(state.heroIndex + 1);
  }, 5000);
}

function restartHeroTimer() {
  startHeroTimer();
}

/* ============================================================
   HOME
   ============================================================ */
function renderHome() {
  renderHero();
  startHeroTimer();

  const featuredApps = APPS_DATA.filter(a => a.featured).slice(0, 8);
  document.getElementById('featured-apps').innerHTML = featuredApps.map(a => cardHTML(a, true)).join('');

  const featuredGames = GAMES_DATA.filter(g => g.featured).slice(0, 8);
  document.getElementById('featured-games').innerHTML = featuredGames.map(g => cardHTML(g, true)).join('');

  const topFree = [...ALL_DATA].filter(x => x.price === 0).sort((a, b) => b.rating - a.rating).slice(0, 8);
  document.getElementById('top-free-list').innerHTML = topFree.map((item, i) => listItemHTML(item, i + 1)).join('');

  const topPaid = [...ALL_DATA].filter(x => x.price > 0).sort((a, b) => b.downloads.localeCompare(a.downloads)).slice(0, 8);
  document.getElementById('top-paid-list').innerHTML = topPaid.map((item, i) => listItemHTML(item, i + 1)).join('');
}

/* ============================================================
   APPS GRID
   ============================================================ */
function renderAppsGrid() {
  const filter = state.currentFilter.apps;
  const sort = state.currentSort.apps;

  let data = filter === 'all' ? APPS_DATA : APPS_DATA.filter(a => a.category === filter);

  if (sort === 'rating') data = [...data].sort((a, b) => b.rating - a.rating);
  else if (sort === 'name') data = [...data].sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'downloads') data = [...data].sort((a, b) => parseInt(b.downloads) - parseInt(a.downloads));
  else if (sort === 'newest') data = [...data].sort((a, b) => b.year - a.year);

  document.getElementById('apps-grid').innerHTML = data.map(a => cardHTML(a)).join('');
}

/* ============================================================
   GAMES GRID
   ============================================================ */
function renderGamesGrid() {
  const filter = state.currentFilter.games;
  const sort = state.currentSort.games;

  let data = filter === 'all' ? GAMES_DATA : GAMES_DATA.filter(g => g.category === filter);

  if (sort === 'rating') data = [...data].sort((a, b) => b.rating - a.rating);
  else if (sort === 'name') data = [...data].sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'downloads') data = [...data].sort((a, b) => parseInt(b.downloads) - parseInt(a.downloads));
  else if (sort === 'newest') data = [...data].sort((a, b) => b.year - a.year);

  document.getElementById('games-grid').innerHTML = data.map(g => cardHTML(g)).join('');
}

/* ============================================================
   CHARTS
   ============================================================ */
function renderCharts() {
  const chart = state.currentFilter.chart;

  let apps, games;
  if (chart === 'free') {
    apps = APPS_DATA.filter(a => a.price === 0).sort((a, b) => b.rating - a.rating).slice(0, 10);
    games = GAMES_DATA.filter(g => g.price === 0).sort((a, b) => b.rating - a.rating).slice(0, 10);
  } else if (chart === 'paid') {
    apps = APPS_DATA.filter(a => a.price > 0).sort((a, b) => b.price - a.price).slice(0, 10);
    games = GAMES_DATA.filter(g => g.price > 0).sort((a, b) => b.price - a.price).slice(0, 10);
  } else {
    apps = APPS_DATA.sort((a, b) => b.reviews - a.reviews).slice(0, 10);
    games = GAMES_DATA.sort((a, b) => b.reviews - a.reviews).slice(0, 10);
  }

  document.getElementById('chart-apps-list').innerHTML = apps.map((item, i) => listItemHTML(item, i + 1)).join('');
  document.getElementById('chart-games-list').innerHTML = games.map((item, i) => listItemHTML(item, i + 1)).join('');
}

/* ============================================================
   CATEGORIES
   ============================================================ */
function renderCategories() {
  const grid = document.getElementById('categories-grid');
  grid.innerHTML = CATEGORIES.map(cat => {
    const count = ALL_DATA.filter(x => x.category === cat.name).length;
    return `
      <div class="category-card" style="border-top: 3px solid ${cat.color};" onclick="filterByCategory('${cat.name}')">
        <div class="category-icon">${cat.icon}</div>
        <div class="category-name">${cat.name}</div>
        <div class="category-count">${count} ${count === 1 ? 'item' : 'items'}</div>
      </div>
    `;
  }).join('');
}

function filterByCategory(cat) {
  const inApps = APPS_DATA.some(a => a.category === cat);
  const inGames = GAMES_DATA.some(g => g.category === cat);

  if (inApps) {
    state.currentFilter.apps = cat;
    navigateTo('apps');
    setTimeout(() => {
      const btn = document.querySelector(`#view-apps .filter-btn[data-filter="${cat}"]`);
      if (btn) {
        document.querySelectorAll('#view-apps .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
      renderAppsGrid();
    }, 50);
  } else if (inGames) {
    state.currentFilter.games = cat;
    navigateTo('games');
    setTimeout(() => {
      const btn = document.querySelector(`#view-games .filter-btn[data-filter="${cat}"]`);
      if (btn) {
        document.querySelectorAll('#view-games .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
      renderGamesGrid();
    }, 50);
  }
}

/* ============================================================
   WISHLIST & LIBRARY
   ============================================================ */
function renderWishlist() {
  const items = ALL_DATA.filter(x => state.wishlist.includes(x.id));
  const grid = document.getElementById('wishlist-grid');
  const empty = document.getElementById('wishlist-empty');
  if (items.length === 0) {
    grid.innerHTML = '';
    empty.style.display = '';
  } else {
    empty.style.display = 'none';
    grid.innerHTML = items.map(a => cardHTML(a)).join('');
  }
}

function renderLibrary() {
  const items = ALL_DATA.filter(x => state.library.includes(x.id));
  const grid = document.getElementById('library-grid');
  const empty = document.getElementById('library-empty');
  if (items.length === 0) {
    grid.innerHTML = '';
    empty.style.display = '';
  } else {
    empty.style.display = 'none';
    grid.innerHTML = items.map(a => cardHTML(a)).join('');
  }
}

/* ============================================================
   SEARCH
   ============================================================ */
function runSearch(q) {
  state.searchQuery = q;
  if (!q.trim()) { navigateTo('home'); return; }

  const results = ALL_DATA.filter(item =>
    item.name.toLowerCase().includes(q.toLowerCase()) ||
    item.category.toLowerCase().includes(q.toLowerCase()) ||
    item.developer.toLowerCase().includes(q.toLowerCase())
  );

  navigateTo('search');

  const label = document.getElementById('search-results-label');
  label.textContent = results.length > 0
    ? `${results.length} result${results.length > 1 ? 's' : ''} for "${q}"`
    : '';

  const grid = document.getElementById('search-grid');
  const empty = document.getElementById('search-empty');

  if (results.length === 0) {
    grid.innerHTML = '';
    empty.style.display = '';
  } else {
    empty.style.display = 'none';
    grid.innerHTML = results.map(a => cardHTML(a)).join('');
  }
}

/* ============================================================
   DETAIL MODAL
   ============================================================ */
function openDetail(id) {
  const item = ALL_DATA.find(x => x.id === id);
  if (!item) return;

  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');

  const priceText = formatPrice(item.price);
  const ratingBars = [5, 4, 3, 2, 1].map(stars => {
    const pct = stars === Math.round(item.rating) ? 65 : stars === Math.floor(item.rating) ? 20 : stars > item.rating ? 5 : 8;
    return `
      <div class="rating-row">
        <span style="min-width:8px">${stars}</span>
        <div class="rating-bar-bg"><div class="rating-bar-fill" style="width:${pct}%"></div></div>
        <span style="min-width:28px;text-align:right">${pct}%</span>
      </div>
    `;
  }).join('');

  content.innerHTML = `
    <div class="modal-hero">
      <div class="modal-icon" style="background:${item.color}22">${item.icon}</div>
      <div class="modal-info">
        <h2 class="modal-title">${item.name}</h2>
        <p class="modal-developer">${item.developer}</p>
        <div class="modal-tags">
          <span class="modal-tag">${item.type === 'game' ? '🎮 Game' : '📱 App'}</span>
          <span class="modal-tag">${item.category}</span>
          ${item.new ? '<span class="modal-tag" style="background:rgba(34,197,94,.15);color:#4ade80">🆕 New</span>' : ''}
          ${item.price > 0 ? `<span class="modal-tag" style="background:rgba(245,158,11,.15);color:#fbbf24">💎 Paid</span>` : '<span class="modal-tag" style="background:rgba(34,197,94,.15);color:#4ade80">🆓 Free</span>'}
        </div>
        <div class="modal-actions">
          <button class="btn-get ${isInstalled(item.id) ? 'installed' : ''}" id="modal-get-btn" onclick="modalGet(${item.id})">
            ${isInstalled(item.id) ? '✓ In Library' : (item.price === 0 ? '📥 Get Free' : `🛒 Buy ${priceText}`)}
          </button>
          <button class="btn-wish ${isWished(item.id) ? 'wished' : ''}" id="modal-wish-btn" onclick="modalWish(${item.id})">
            ${isWished(item.id) ? '❤️ Wished' : '♡ Add to Wishlist'}
          </button>
        </div>
      </div>
    </div>

    <div class="modal-stats">
      <div class="stat-item">
        <div class="stat-value">★ ${item.rating}</div>
        <div class="stat-label">Rating</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">${(item.reviews / 1000).toFixed(0)}K</div>
        <div class="stat-label">Reviews</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">${item.downloads}</div>
        <div class="stat-label">Downloads</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">${item.size}</div>
        <div class="stat-label">Size</div>
      </div>
    </div>

    <div class="modal-section">
      <h4>About</h4>
      <p class="modal-desc">${item.desc}</p>
    </div>

    <div class="modal-section">
      <h4>Screenshots</h4>
      <div class="screenshots">
        ${item.screenshots.map(s => `<div class="screenshot" style="background:${item.color}22">${s}</div>`).join('')}
        ${item.screenshots.map(s => `<div class="screenshot" style="background:${item.color}11">${s}</div>`).join('')}
      </div>
    </div>

    <div class="modal-section">
      <h4>Ratings & Reviews</h4>
      <div class="big-rating">
        <span class="big-rating-num">${item.rating}</span>
        <div>
          <div class="big-stars">${renderStars(item.rating)}</div>
          <div class="big-rating-info">${(item.reviews / 1000).toFixed(0)}K Ratings</div>
        </div>
      </div>
      <div class="rating-bar-wrap">${ratingBars}</div>
      <div class="reviews">
        ${item.reviewList.map(r => `
          <div class="review">
            <div class="review-header">
              <span class="review-user">${r.user}</span>
              <span class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</span>
            </div>
            <p class="review-text">${r.text}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function modalGet(id) {
  toggleLibrary(id);
  const btn = document.getElementById('modal-get-btn');
  const item = ALL_DATA.find(x => x.id === id);
  if (btn && item) {
    const installed = isInstalled(id);
    btn.textContent = installed ? '✓ In Library' : (item.price === 0 ? '📥 Get Free' : `🛒 Buy ${formatPrice(item.price)}`);
    btn.classList.toggle('installed', installed);
  }
  refreshCurrentGrids();
}

function modalWish(id) {
  toggleWishlist(id);
  const btn = document.getElementById('modal-wish-btn');
  if (btn) {
    btn.textContent = isWished(id) ? '❤️ Wished' : '♡ Add to Wishlist';
    btn.classList.toggle('wished', isWished(id));
  }
  refreshCurrentGrids();
}

function refreshCurrentGrids() {
  if (state.currentView === 'apps') renderAppsGrid();
  else if (state.currentView === 'games') renderGamesGrid();
  else if (state.currentView === 'wishlist') renderWishlist();
  else if (state.currentView === 'library') renderLibrary();
  else if (state.currentView === 'search') runSearch(state.searchQuery);
  else if (state.currentView === 'home') renderHome();
}

/* ============================================================
   SIDEBAR MOBILE TOGGLE
   ============================================================ */
function buildSidebarOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebar-overlay';
  overlay.onclick = closeSidebar;
  document.body.appendChild(overlay);
}

function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('visible');
  document.body.style.overflow = '';
}

/* ============================================================
   EVENT LISTENERS
   ============================================================ */
function bindEvents() {
  // Sidebar nav
  document.querySelectorAll('.nav-item[data-view]').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(item.dataset.view);
      if (window.innerWidth < 700) closeSidebar();
    });
  });

  // Topbar icon buttons
  document.querySelectorAll('.icon-btn[data-view]').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.view));
  });

  // See all links
  document.querySelectorAll('.see-all[data-view]').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); navigateTo(a.dataset.view); });
  });

  // Empty state browse buttons
  document.querySelectorAll('.btn-primary[data-view]').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.view));
  });

  // Hero arrows
  document.getElementById('hero-prev').addEventListener('click', () => goToHeroSlide(state.heroIndex - 1));
  document.getElementById('hero-next').addEventListener('click', () => goToHeroSlide(state.heroIndex + 1));

  // Theme
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  // Menu (mobile)
  document.getElementById('menu-btn').addEventListener('click', openSidebar);

  // Modal close
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Apps filters
  document.querySelectorAll('#view-apps .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#view-apps .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentFilter.apps = btn.dataset.filter;
      renderAppsGrid();
    });
  });

  // Games filters
  document.querySelectorAll('#view-games .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#view-games .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentFilter.games = btn.dataset.filter;
      renderGamesGrid();
    });
  });

  // Chart filters
  document.querySelectorAll('#view-top-charts .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#view-top-charts .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentFilter.chart = btn.dataset.chart;
      renderCharts();
    });
  });

  // Sort selects
  document.getElementById('apps-sort').addEventListener('change', e => {
    state.currentSort.apps = e.target.value;
    renderAppsGrid();
  });
  document.getElementById('games-sort').addEventListener('change', e => {
    state.currentSort.games = e.target.value;
    renderGamesGrid();
  });

  // Search
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');

  let searchTimeout;
  searchInput.addEventListener('input', () => {
    const q = searchInput.value;
    searchClear.classList.toggle('visible', q.length > 0);
    clearTimeout(searchTimeout);
    if (q.length === 0) { navigateTo('home'); return; }
    searchTimeout = setTimeout(() => runSearch(q), 300);
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.classList.remove('visible');
    navigateTo('home');
    searchInput.focus();
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (e.key === '/' && e.target.tagName !== 'INPUT') {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // Pause hero on hover
  const heroSlider = document.getElementById('hero-slider');
  heroSlider.addEventListener('mouseenter', () => clearInterval(state.heroTimer));
  heroSlider.addEventListener('mouseleave', startHeroTimer);

  // Touch swipe hero
  let touchStartX = 0;
  heroSlider.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  heroSlider.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goToHeroSlide(state.heroIndex + (diff > 0 ? 1 : -1));
  });
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  applyTheme();
  buildSidebarOverlay();
  bindEvents();
  updateBadges();
  renderHome();

  // Animate cards on load
  setTimeout(() => {
    document.querySelectorAll('.app-card, .list-item').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = `opacity 0.3s ease ${i * 0.03}s, transform 0.3s ease ${i * 0.03}s`;
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 50);
    });
  }, 100);
}

document.addEventListener('DOMContentLoaded', init);

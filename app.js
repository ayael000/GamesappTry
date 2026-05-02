/* ═══════════════════════════════════════════════════════════════
   APPVAULT — app.js
   Full store logic: data, routing, search, filters, modal,
   cart, wishlist, hero carousel, top charts, reviews, toasts
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ─── DATA ───────────────────────────────────────────────────── */

const HERO_SLIDES = [
  {
    id: 1,
    title: 'Craft your world in\nVoxelForge',
    sub: 'The ultimate sandbox survival game — free to play',
    tag: 'Game of the Year',
    bg: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80',
    appId: 'g1',
  },
  {
    id: 2,
    title: 'Stay focused with\nZenFlow',
    sub: 'AI-powered productivity · Featured App',
    tag: 'App of the Week',
    bg: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80',
    appId: 'a1',
  },
  {
    id: 3,
    title: 'Epic RPG battles in\nDragonBlaze X',
    sub: 'New expansion: Realms of Eternity',
    tag: 'New Release',
    bg: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1200&q=80',
    appId: 'g3',
  },
  {
    id: 4,
    title: 'Edit like a pro\nwith LumaCut',
    sub: 'Pro-level video editing on any device',
    tag: 'Editors\' Choice',
    bg: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80',
    appId: 'a6',
  },
];

const APPS = [
  {
    id: 'a1', type: 'app', name: 'ZenFlow', developer: 'Mindful Labs', category: 'productivity',
    price: 0, rating: 4.8, ratingCount: 48200, downloads: '5M+', size: '42 MB', age: '4+',
    version: '3.2.1', updated: 'Apr 2026',
    icon: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300&q=80',
      'https://images.unsplash.com/photo-1611532736636-f8c0acf406b2?w=300&q=80',
      'https://images.unsplash.com/photo-1611532736670-b2eeafb8abe3?w=300&q=80',
    ],
    description: 'ZenFlow combines focus timers, mindful breathing exercises, and AI-powered task scheduling to help you achieve peak productivity. Track your focus sessions, build positive habits, and hit your goals every day.',
    whatsNew: 'v3.2.1 — AI daily planner overhaul, new ambient soundscapes, widget support for iOS & Android.',
    tags: ['Productivity', 'Featured'], featured: true, editorChoice: true,
    reviews: [
      { user: 'Sarah K.', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah', rating: 5, date: 'Apr 28', text: 'This app changed how I work. The focus timer is incredible.' },
      { user: 'Marcus T.', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Marcus', rating: 4, date: 'Apr 20', text: 'Love the design. Would like more customisation options.' },
      { user: 'Priya S.', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Priya', rating: 5, date: 'Apr 12', text: 'Best productivity app I have ever used. Period.' },
    ],
    ratingDist: [60, 20, 10, 6, 4],
  },
  {
    id: 'a2', type: 'app', name: 'Coinly', developer: 'FinTech Studio', category: 'finance',
    price: 0, rating: 4.6, ratingCount: 31500, downloads: '2M+', size: '31 MB', age: '4+',
    version: '2.8.0', updated: 'Mar 2026',
    icon: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300&q=80',
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300&q=80',
    ],
    description: 'Coinly is the smartest personal finance tracker. Link your accounts, set budgets, forecast savings, and get AI-powered investment tips — all in one beautiful dashboard.',
    whatsNew: 'New: stock portfolio tracker, bank-level encryption upgrade, dark mode improvements.',
    tags: ['Finance'], featured: true, editorChoice: false,
    reviews: [
      { user: 'James L.', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=James', rating: 5, date: 'Apr 25', text: 'Finally a finance app that makes sense. Love the budget forecasts.' },
      { user: 'Amira N.', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Amira', rating: 4, date: 'Apr 18', text: 'Solid app. Bank linking can take a minute but once it\'s done it\'s amazing.' },
    ],
    ratingDist: [55, 25, 12, 5, 3],
  },
  {
    id: 'a3', type: 'app', name: 'BeatSync', developer: 'Wavecraft', category: 'music',
    price: 4.99, rating: 4.9, ratingCount: 22800, downloads: '800K+', size: '58 MB', age: '4+',
    version: '1.5.3', updated: 'Apr 2026',
    icon: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=300&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80',
    ],
    description: 'BeatSync is a professional-grade beat production and DJ tool for mobile. Create, mix, and share original tracks using 500+ built-in samples, real-time effects, and AI chord suggestions.',
    whatsNew: 'New: 200 new samples, tempo-sync FX, share directly to SoundCloud & Spotify.',
    tags: ['Music', 'Paid'], featured: true, editorChoice: true,
    reviews: [
      { user: 'DJ Frost', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Frost', rating: 5, date: 'Apr 27', text: 'Worth every penny. The sample library alone justifies the price.' },
    ],
    ratingDist: [70, 18, 7, 3, 2],
  },
  {
    id: 'a4', type: 'app', name: 'SnapGrid', developer: 'Pixel Pond', category: 'photo',
    price: 0, rating: 4.5, ratingCount: 67100, downloads: '12M+', size: '85 MB', age: '4+',
    version: '5.0.2', updated: 'Apr 2026',
    icon: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=300&q=80',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&q=80',
    ],
    description: 'SnapGrid lets you create stunning collages, photo stories, and social posts in seconds. With 200+ templates, AI background remover, and one-tap filters — your creativity has no limits.',
    whatsNew: 'AI outfit swap feature, new aesthetic filters pack, improved export resolution.',
    tags: ['Photo & Video'], featured: false, editorChoice: false,
    reviews: [
      { user: 'Lucia R.', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Lucia', rating: 4, date: 'Apr 15', text: 'Great templates. AI background removal is super clean.' },
    ],
    ratingDist: [50, 28, 13, 6, 3],
  },
  {
    id: 'a5', type: 'app', name: 'NewsWave', developer: 'Currents Media', category: 'news',
    price: 0, rating: 4.3, ratingCount: 19000, downloads: '3M+', size: '22 MB', age: '4+',
    version: '2.1.0', updated: 'Mar 2026',
    icon: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300&q=80',
    ],
    description: 'NewsWave delivers personalised news in a clean, distraction-free reader. Topics you care about, curated by AI — no clickbait, no clutter.',
    whatsNew: 'New: topic deep-dives, podcast summaries, offline reading.',
    tags: ['News'], featured: false, editorChoice: false,
    reviews: [
      { user: 'Omar H.', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Omar', rating: 4, date: 'Mar 30', text: 'Clean design and smart curation. Best news app I have tried.' },
    ],
    ratingDist: [45, 30, 15, 7, 3],
  },
  {
    id: 'a6', type: 'app', name: 'LumaCut', developer: 'Aura Creative', category: 'photo',
    price: 9.99, rating: 4.9, ratingCount: 14500, downloads: '1M+', size: '210 MB', age: '4+',
    version: '4.0.0', updated: 'Apr 2026',
    icon: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&q=80',
      'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=300&q=80',
    ],
    description: 'LumaCut is the most advanced mobile video editor. Multi-track timeline, colour grading, motion graphics, AI scene detection — everything a professional needs on a phone.',
    whatsNew: '4K export, new LUT packs, Dolby Atmos audio editing, AI B-roll suggestions.',
    tags: ['Photo & Video', 'Editors\' Choice', 'Paid'], featured: true, editorChoice: true,
    reviews: [
      { user: 'Chloe D.', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Chloe', rating: 5, date: 'Apr 29', text: 'Pro-level editing on mobile. Absolutely insane. Worth $9.99 times over.' },
      { user: 'Ravi M.', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Ravi', rating: 5, date: 'Apr 21', text: 'I dropped my desktop subscription for this. Seriously impressive.' },
    ],
    ratingDist: [72, 16, 6, 4, 2],
  },
  {
    id: 'a7', type: 'app', name: 'FitTrack Pro', developer: 'HealthHub', category: 'health',
    price: 0, rating: 4.7, ratingCount: 29300, downloads: '6M+', size: '64 MB', age: '4+',
    version: '7.3.1', updated: 'Apr 2026',
    icon: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&q=80',
    ],
    description: 'FitTrack Pro tracks workouts, nutrition, sleep, and recovery in one place. Syncs with all major wearables, generates AI workout plans, and lets you compete with friends.',
    whatsNew: 'New: AI nutrition scanner, sleep score improvements, Garmin & Whoop integration.',
    tags: ['Health & Fitness'], featured: false, editorChoice: false,
    reviews: [
      { user: 'Nia A.', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Nia', rating: 5, date: 'Apr 10', text: 'I hit my weight goal in 3 months thanks to this app.' },
    ],
    ratingDist: [62, 22, 8, 5, 3],
  },
  {
    id: 'a8', type: 'app', name: 'TalkSpace', developer: 'Convo Inc.', category: 'social',
    price: 0, rating: 4.4, ratingCount: 55000, downloads: '20M+', size: '78 MB', age: '13+',
    version: '9.1.0', updated: 'Apr 2026',
    icon: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&q=80',
    ],
    description: 'TalkSpace is a next-gen social messaging app with E2E encryption, disappearing messages, live spaces, and AI conversation summaries. Privacy first, fun always.',
    whatsNew: 'Live captions, group call backgrounds, improved sticker engine.',
    tags: ['Social'], featured: false, editorChoice: false,
    reviews: [
      { user: 'Leo B.', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Leo', rating: 4, date: 'Apr 22', text: 'Way better than the competition. Love the private spaces.' },
    ],
    ratingDist: [48, 26, 14, 8, 4],
  },
  {
    id: 'a9', type: 'app', name: 'LearnSpark', developer: 'EduTech Co.', category: 'education',
    price: 0, rating: 4.8, ratingCount: 38700, downloads: '4M+', size: '55 MB', age: '4+',
    version: '3.1.0', updated: 'Mar 2026',
    icon: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&q=80',
    ],
    description: 'LearnSpark offers micro-lessons in 80+ topics — coding, languages, design, finance — taught by world-class instructors. Gamified learning that actually sticks.',
    whatsNew: 'New courses: AI Foundations, UX Research, Mandarin Level 3. Streak leaderboards.',
    tags: ['Education', 'Featured'], featured: true, editorChoice: false,
    reviews: [
      { user: 'Emma W.', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Emma', rating: 5, date: 'Apr 14', text: 'I learned Python in 3 weeks. The gamification is addictive.' },
    ],
    ratingDist: [65, 20, 9, 4, 2],
  },
  {
    id: 'a10', type: 'app', name: 'CloudFiles', developer: 'StorX', category: 'utility',
    price: 2.99, rating: 4.5, ratingCount: 12400, downloads: '700K+', size: '18 MB', age: '4+',
    version: '1.9.4', updated: 'Apr 2026',
    icon: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=300&q=80',
    ],
    description: 'CloudFiles is the fastest, most private cloud storage manager. Access, share, and encrypt files across 20+ cloud providers with a single unified interface.',
    whatsNew: 'OneDrive integration, client-side AES-256 encryption for all uploads.',
    tags: ['Utilities', 'Paid'], featured: false, editorChoice: false,
    reviews: [
      { user: 'Kai F.', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Kai', rating: 4, date: 'Mar 28', text: 'Managing multiple cloud accounts is finally painless.' },
    ],
    ratingDist: [52, 25, 12, 7, 4],
  },
];

const GAMES = [
  {
    id: 'g1', type: 'game', name: 'VoxelForge', developer: 'BlockWorld Studios', category: 'simulation',
    price: 0, rating: 4.9, ratingCount: 124000, downloads: '50M+', size: '310 MB', age: '7+',
    version: '12.0.0', updated: 'Apr 2026',
    icon: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300&q=80',
    ],
    description: 'VoxelForge is the definitive open-world sandbox game. Mine, craft, build, and survive in infinite procedurally generated worlds. Play solo or with up to 32 friends online.',
    whatsNew: 'Season 12: Ocean biomes, deep-sea caves, new aquatic mobs, underwater castles.',
    tags: ['Simulation', 'Game of the Year', 'Featured'], featured: true, editorChoice: true,
    reviews: [
      { user: 'TurboGamer', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Turbo', rating: 5, date: 'Apr 29', text: 'I have 2000+ hours in this game. It is literally infinite.' },
      { user: 'XxBlaze', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Blaze', rating: 5, date: 'Apr 18', text: 'Best survival game ever made. The ocean update is breathtaking.' },
    ],
    ratingDist: [75, 15, 6, 3, 1],
  },
  {
    id: 'g2', type: 'game', name: 'Shadow Tactics', developer: 'NightCraft Games', category: 'strategy',
    price: 6.99, rating: 4.7, ratingCount: 31200, downloads: '2M+', size: '560 MB', age: '12+',
    version: '3.4.0', updated: 'Mar 2026',
    icon: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&q=80',
    ],
    description: 'A deep real-time strategy game set in feudal Japan. Command a team of ninja, samurai, and geisha spies to outsmart enemies across 25 handcrafted missions.',
    whatsNew: 'New chapter: Rise of the Shogun (5 missions), new ronin character class.',
    tags: ['Strategy', 'Paid'], featured: true, editorChoice: false,
    reviews: [
      { user: 'StratKing', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Strat', rating: 5, date: 'Apr 15', text: 'Best mobile strategy game — it actually requires thinking.' },
    ],
    ratingDist: [63, 22, 9, 4, 2],
  },
  {
    id: 'g3', type: 'game', name: 'DragonBlaze X', developer: 'Ember Studios', category: 'rpg',
    price: 0, rating: 4.6, ratingCount: 89400, downloads: '30M+', size: '720 MB', age: '12+',
    version: '7.0.0', updated: 'Apr 2026',
    icon: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=300&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300&q=80',
    ],
    description: 'DragonBlaze X is an epic action RPG with stunning console-quality graphics. Build your hero, master 120 skills, fight colossal bosses, and conquer PvP arenas worldwide.',
    whatsNew: 'Expansion: Realms of Eternity — 3 new classes, 40 new quests, co-op raid bosses.',
    tags: ['RPG', 'Featured'], featured: true, editorChoice: true,
    reviews: [
      { user: 'DarkHunter', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Dark', rating: 5, date: 'Apr 28', text: 'The graphics are insane for a mobile game. The new expansion is huge.' },
      { user: 'Zariel_99', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Zariel', rating: 4, date: 'Apr 20', text: 'Great game. PvP ranking system is top tier.' },
    ],
    ratingDist: [60, 24, 10, 4, 2],
  },
  {
    id: 'g4', type: 'game', name: 'Infinite Run', developer: 'Dash Games', category: 'casual',
    price: 0, rating: 4.4, ratingCount: 201000, downloads: '80M+', size: '95 MB', age: '4+',
    version: '6.2.1', updated: 'Apr 2026',
    icon: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&q=80',
    ],
    description: 'The most downloaded endless runner of all time. Swipe to dodge, jump, and slide through breathtaking neon-lit environments. Daily missions, weekly events, 200+ characters.',
    whatsNew: 'New: Cyberpunk City world, new character Neon Rider, x2 score weekends.',
    tags: ['Casual', 'Top Free'], featured: false, editorChoice: false,
    reviews: [
      { user: 'SpeedRunner', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Speed', rating: 4, date: 'Apr 18', text: 'Absolutely addicting. Play it every day during my commute.' },
    ],
    ratingDist: [50, 28, 13, 6, 3],
  },
  {
    id: 'g5', type: 'game', name: 'Puzzle Master', developer: 'MindBend Inc.', category: 'puzzle',
    price: 0, rating: 4.8, ratingCount: 44200, downloads: '10M+', size: '120 MB', age: '4+',
    version: '4.1.0', updated: 'Apr 2026',
    icon: 'https://images.unsplash.com/photo-1606503153255-59d5e417b6ee?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1606503153255-59d5e417b6ee?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1606503153255-59d5e417b6ee?w=300&q=80',
    ],
    description: 'Puzzle Master delivers 5000+ unique logic puzzles across 20 styles — sudoku, nonograms, flow puzzles, word grids, and more. Daily challenges with global leaderboards.',
    whatsNew: 'New puzzle type: Prism Grids. 500 new community-submitted puzzles.',
    tags: ['Puzzle', 'Featured'], featured: true, editorChoice: false,
    reviews: [
      { user: 'BrainGames', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Brain', rating: 5, date: 'Apr 22', text: 'I do a puzzle every morning with my coffee. Perfect app.' },
    ],
    ratingDist: [68, 18, 8, 4, 2],
  },
  {
    id: 'g6', type: 'game', name: 'Turbo League', developer: 'High Octane Games', category: 'racing',
    price: 0, rating: 4.5, ratingCount: 62000, downloads: '15M+', size: '450 MB', age: '7+',
    version: '5.3.0', updated: 'Mar 2026',
    icon: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80',
    ],
    description: 'Turbo League merges racing and soccer in a physics-based multiplayer arena. Fly rocket-powered cars, score goals, and dominate ranked leagues worldwide.',
    whatsNew: 'Season 5: new arena Neon Dome, 4 exclusive cars, ranked split-screen mode.',
    tags: ['Racing'], featured: true, editorChoice: false,
    reviews: [
      { user: 'GoalRocket', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Goal', rating: 5, date: 'Apr 24', text: 'This is basically Rocket League on my phone. I love it.' },
    ],
    ratingDist: [55, 25, 12, 5, 3],
  },
  {
    id: 'g7', type: 'game', name: 'Lost Realms', developer: 'Arc Studios', category: 'adventure',
    price: 3.99, rating: 4.7, ratingCount: 27800, downloads: '1M+', size: '680 MB', age: '9+',
    version: '2.0.1', updated: 'Apr 2026',
    icon: 'https://images.unsplash.com/photo-1519669417670-68775a50919c?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1519669417670-68775a50919c?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1519669417670-68775a50919c?w=300&q=80',
    ],
    description: 'Lost Realms is a hand-painted adventure RPG. Explore a vast open world, solve ancient mysteries, and forge alliances in a story-driven campaign with branching choices.',
    whatsNew: 'Chapter 4: The Veil is now live. 8 hours of new story content, 3 new companions.',
    tags: ['Adventure', 'Paid', 'Featured'], featured: true, editorChoice: true,
    reviews: [
      { user: 'QuestHunter', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Quest', rating: 5, date: 'Apr 26', text: 'The art style is gorgeous. Story rivals console RPGs.' },
    ],
    ratingDist: [65, 20, 10, 3, 2],
  },
  {
    id: 'g8', type: 'game', name: 'StrikerFC', developer: 'Goal Labs', category: 'sports',
    price: 0, rating: 4.3, ratingCount: 110000, downloads: '25M+', size: '340 MB', age: '4+',
    version: '10.0.0', updated: 'Apr 2026',
    icon: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&q=80',
    ],
    description: 'StrikerFC is the most realistic mobile football manager and arcade hybrid. Manage your club to glory or take to the pitch in fast-paced 3v3 multiplayer matches.',
    whatsNew: 'Season 10: 2026 World Cup mode, new legendary player cards, stadium builder.',
    tags: ['Sports'], featured: false, editorChoice: false,
    reviews: [
      { user: 'FootballFan', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Football', rating: 4, date: 'Apr 19', text: 'Manager mode is really deep. The 3v3 matches are super fun too.' },
    ],
    ratingDist: [48, 28, 14, 7, 3],
  },
  {
    id: 'g9', type: 'game', name: 'Skyfall Assault', developer: 'Zenith Games', category: 'action',
    price: 0, rating: 4.6, ratingCount: 77000, downloads: '22M+', size: '520 MB', age: '16+',
    version: '3.1.2', updated: 'Apr 2026',
    icon: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300&q=80',
    ],
    description: 'Skyfall Assault is an intense third-person battle royale with 100-player matches, a full vehicle system, and destructible environments. Squad up and be the last one standing.',
    whatsNew: 'New: Titanfall map, mech suits, ranked competitive mode, spectator system.',
    tags: ['Action', 'Featured'], featured: true, editorChoice: false,
    reviews: [
      { user: 'Phantom_X', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Phantom', rating: 5, date: 'Apr 28', text: 'Best battle royale on mobile. The mech suits are insane.' },
    ],
    ratingDist: [58, 22, 12, 5, 3],
  },
  {
    id: 'g10', type: 'game', name: 'City Builder 2026', developer: 'UrbanSim', category: 'simulation',
    price: 1.99, rating: 4.8, ratingCount: 19500, downloads: '1.5M+', size: '280 MB', age: '4+',
    version: '2.5.0', updated: 'Mar 2026',
    icon: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=100&q=80',
    banner: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&q=80',
    ],
    description: 'City Builder 2026 is the most feature-rich city simulation on mobile. Zone districts, manage transit, balance budgets, respond to disasters, and build the city of the future.',
    whatsNew: 'Hyperloop transit, green energy overhaul, disaster response expansion, 4K visuals.',
    tags: ['Simulation', 'Paid'], featured: false, editorChoice: true,
    reviews: [
      { user: 'Mayor_Tom', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Mayor', rating: 5, date: 'Mar 25', text: 'Could not put it down. Much deeper than I expected for mobile.' },
    ],
    ratingDist: [70, 17, 8, 3, 2],
  },
];

const ALL_ITEMS = [...APPS, ...GAMES];

const CATEGORIES = [
  { name: 'Productivity',    icon: '📊', count: 128, filter: { type: 'app', category: 'productivity' } },
  { name: 'Action Games',    icon: '🎮', count: 412, filter: { type: 'game', category: 'action' } },
  { name: 'Social',          icon: '💬', count: 89,  filter: { type: 'app', category: 'social' } },
  { name: 'RPG',             icon: '⚔️',  count: 231, filter: { type: 'game', category: 'rpg' } },
  { name: 'Finance',         icon: '💰', count: 67,  filter: { type: 'app', category: 'finance' } },
  { name: 'Racing',          icon: '🏎️',  count: 143, filter: { type: 'game', category: 'racing' } },
  { name: 'Music',           icon: '🎵', count: 54,  filter: { type: 'app', category: 'music' } },
  { name: 'Puzzle',          icon: '🧩', count: 198, filter: { type: 'game', category: 'puzzle' } },
  { name: 'Photo & Video',   icon: '📸', count: 176, filter: { type: 'app', category: 'photo' } },
  { name: 'Strategy',        icon: '♟️',  count: 115, filter: { type: 'game', category: 'strategy' } },
  { name: 'Health & Fitness',icon: '💪', count: 93,  filter: { type: 'app', category: 'health' } },
  { name: 'Adventure',       icon: '🗺️',  count: 87,  filter: { type: 'game', category: 'adventure' } },
  { name: 'Education',       icon: '📚', count: 210, filter: { type: 'app', category: 'education' } },
  { name: 'Sports',          icon: '⚽', count: 162, filter: { type: 'game', category: 'sports' } },
  { name: 'Utilities',       icon: '🔧', count: 145, filter: { type: 'app', category: 'utility' } },
  { name: 'Casual',          icon: '🎲', count: 320, filter: { type: 'game', category: 'casual' } },
];

/* ─── STATE ─────────────────────────────────────────────────── */
const state = {
  currentSection: 'home',
  heroIndex: 0,
  heroTimer: null,
  cart: [],
  wishlist: new Set(),
  installed: new Set(),
  activeTab: 'free',
};

/* ─── UTILS ─────────────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };

function stars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function fmtPrice(price) {
  return price === 0 ? 'Free' : `$${price.toFixed(2)}`;
}

function toast(msg, type = 'info') {
  const container = $('toast-container');
  const t = el('div', `toast ${type}`, msg);
  container.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateX(20px)';
    t.style.transition = 'all .3s ease';
    setTimeout(() => t.remove(), 300);
  }, 3000);
}

/* ─── NAVIGATION ─────────────────────────────────────────────── */
function navigateTo(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const target = document.getElementById(`section-${section}`);
  if (target) target.classList.remove('hidden');

  const navBtn = document.querySelector(`.nav-item[data-section="${section}"]`);
  if (navBtn) navBtn.classList.add('active');

  // hide search results when navigating away
  $('search-results-section').classList.add('hidden');
  $('search-input').value = '';

  state.currentSection = section;

  // close sidebar on mobile
  document.getElementById('sidebar').classList.remove('open');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Lazy render sections that need it
  if (section === 'apps')       renderAppsGrid();
  if (section === 'games')      renderGamesGrid();
  if (section === 'top-charts') renderTopCharts();
  if (section === 'categories') renderCategories();
  if (section === 'wishlist')   renderWishlist();
}

// nav buttons
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => navigateTo(btn.dataset.section));
});

// see-all buttons
document.querySelectorAll('.see-all-btn').forEach(btn => {
  btn.addEventListener('click', () => navigateTo(btn.dataset.section));
});

/* ─── HAMBURGER ─────────────────────────────────────────────── */
$('hamburger').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

/* ─── HERO CAROUSEL ─────────────────────────────────────────── */
function buildHero() {
  const slides = $('hero-slides');
  const dots   = $('hero-dots');

  HERO_SLIDES.forEach((slide, i) => {
    const s = el('div', 'hero-slide');
    s.innerHTML = `
      <div class="hero-slide-bg" style="background-image:url('${slide.bg}')"></div>
      <div class="hero-slide-content">
        <div class="hero-slide-tag">${slide.tag}</div>
        <div class="hero-slide-title">${slide.title.replace('\n','<br>')}</div>
        <div class="hero-slide-sub">${slide.sub}</div>
      </div>`;
    s.addEventListener('click', () => openModal(slide.appId));
    slides.appendChild(s);

    const d = el('button', `hero-dot${i === 0 ? ' active' : ''}`);
    d.addEventListener('click', () => goToSlide(i));
    dots.appendChild(d);
  });

  startHeroTimer();
}

function goToSlide(i) {
  state.heroIndex = (i + HERO_SLIDES.length) % HERO_SLIDES.length;
  $('hero-slides').style.transform = `translateX(-${state.heroIndex * 100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d, j) => d.classList.toggle('active', j === state.heroIndex));
  resetHeroTimer();
}

function startHeroTimer() {
  clearInterval(state.heroTimer);
  state.heroTimer = setInterval(() => goToSlide(state.heroIndex + 1), 5000);
}
function resetHeroTimer() { clearInterval(state.heroTimer); startHeroTimer(); }

$('hero-prev').addEventListener('click', () => goToSlide(state.heroIndex - 1));
$('hero-next').addEventListener('click', () => goToSlide(state.heroIndex + 1));

/* ─── CARD BUILDERS ─────────────────────────────────────────── */
function buildPortraitCard(item) {
  const card = el('div', 'app-card portrait');

  const wishlisted = state.wishlist.has(item.id);
  const installed  = state.installed.has(item.id);

  card.innerHTML = `
    <div class="card-thumb">
      <img src="${item.banner}" alt="${item.name}" loading="lazy" />
    </div>
    <div class="card-body">
      <div class="card-icon-row">
        <div class="card-icon"><img src="${item.icon}" alt="" loading="lazy" /></div>
        <div class="card-icon-info">
          <div class="card-name">${item.name}</div>
          <div class="card-dev">${item.developer}</div>
        </div>
      </div>
      <div class="card-rating">
        <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        ${item.rating} <span style="color:var(--text-3);">(${(item.ratingCount/1000).toFixed(1)}K)</span>
      </div>
      <span class="card-price ${item.price === 0 ? 'free' : 'paid'}">${fmtPrice(item.price)}</span>
    </div>
    <button class="wishlist-btn-card${wishlisted ? ' wishlisted' : ''}" title="Wishlist">${wishlisted ? '♥' : '♡'}</button>`;

  card.addEventListener('click', e => {
    if (e.target.closest('.wishlist-btn-card')) return;
    openModal(item.id);
  });

  card.querySelector('.wishlist-btn-card').addEventListener('click', e => {
    e.stopPropagation();
    toggleWishlist(item.id, e.currentTarget);
  });

  return card;
}

function buildGridCard(item) {
  const card = el('div', 'app-card grid-card');
  const wishlisted = state.wishlist.has(item.id);
  const installed  = state.installed.has(item.id);
  const btnLabel = installed ? 'Open' : (item.price === 0 ? 'Get' : `$${item.price.toFixed(2)}`);

  card.innerHTML = `
    <div class="card-thumb">
      <img src="${item.banner}" alt="${item.name}" loading="lazy" />
    </div>
    <div class="card-body">
      <div class="card-icon-row">
        <div class="card-icon"><img src="${item.icon}" alt="" loading="lazy" /></div>
        <div class="card-icon-info">
          <div class="card-name">${item.name}</div>
          <div class="card-dev">${item.developer}</div>
        </div>
      </div>
      <div class="card-rating">
        <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        ${item.rating} <span style="color:var(--text-3);">(${(item.ratingCount/1000).toFixed(1)}K)</span>
      </div>
      <button class="card-get-btn${installed ? ' installed' : ''}">${btnLabel}</button>
    </div>
    <button class="wishlist-btn-card${wishlisted ? ' wishlisted' : ''}" title="Wishlist">${wishlisted ? '♥' : '♡'}</button>`;

  card.addEventListener('click', e => {
    if (e.target.closest('.wishlist-btn-card') || e.target.closest('.card-get-btn')) return;
    openModal(item.id);
  });

  card.querySelector('.card-get-btn').addEventListener('click', e => {
    e.stopPropagation();
    handleGetAction(item);
  });

  card.querySelector('.wishlist-btn-card').addEventListener('click', e => {
    e.stopPropagation();
    toggleWishlist(item.id, e.currentTarget);
  });

  return card;
}

function buildTopItem(item, rank) {
  const div = el('div', 'top-item');
  const installed = state.installed.has(item.id);
  const numClass = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';

  div.innerHTML = `
    <span class="top-num ${numClass}">${rank}</span>
    <div class="top-icon"><img src="${item.icon}" alt="" loading="lazy" /></div>
    <div class="top-info">
      <div class="top-name">${item.name}</div>
      <div class="top-cat">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</div>
      <div class="top-rating">
        <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none"/></svg>
        ${item.rating}
      </div>
    </div>
    <div class="top-action">
      <button class="btn-small-get${installed ? ' installed' : ''}">${installed ? 'Open' : (item.price === 0 ? 'Get' : `$${item.price.toFixed(2)}`)}</button>
    </div>`;

  div.addEventListener('click', e => {
    if (e.target.closest('.btn-small-get')) return;
    openModal(item.id);
  });
  div.querySelector('.btn-small-get').addEventListener('click', e => {
    e.stopPropagation();
    handleGetAction(item);
  });

  return div;
}

/* ─── HOME SECTION ───────────────────────────────────────────── */
function buildHome() {
  // Featured apps row
  const featAppsRow = $('featured-apps-row');
  APPS.filter(a => a.featured).forEach(a => featAppsRow.appendChild(buildPortraitCard(a)));

  // Featured games row
  const featGamesRow = $('featured-games-row');
  GAMES.filter(g => g.featured).forEach(g => featGamesRow.appendChild(buildPortraitCard(g)));

  // Top free list
  const topFree = $('top-free-list');
  [...APPS, ...GAMES]
    .filter(i => i.price === 0)
    .sort((a, b) => b.ratingCount - a.ratingCount)
    .slice(0, 8)
    .forEach((item, idx) => topFree.appendChild(buildTopItem(item, idx + 1)));

  // Editor's choice grid
  const editorsGrid = $('editors-choice-grid');
  ALL_ITEMS.filter(i => i.editorChoice).forEach(item => {
    const card = el('div', 'editor-card');
    card.innerHTML = `
      <div class="editor-card-bg" style="background-image:url('${item.banner}')"></div>
      <div class="editor-card-content">
        <div class="editor-icon"><img src="${item.icon}" alt="" loading="lazy" /></div>
        <div class="editor-info">
          <div class="editor-label">Editor's Choice · ${item.type === 'game' ? 'Game' : 'App'}</div>
          <div class="editor-name">${item.name}</div>
          <div class="editor-sub">${item.developer} · ${fmtPrice(item.price)}</div>
        </div>
      </div>`;
    card.addEventListener('click', () => openModal(item.id));
    editorsGrid.appendChild(card);
  });
}

/* ─── APPS GRID ──────────────────────────────────────────────── */
function renderAppsGrid() {
  const grid     = $('apps-grid');
  const sort     = $('apps-sort').value;
  const category = $('apps-category').value;

  let items = [...APPS];
  if (category !== 'all') items = items.filter(a => a.category === category);
  items = sortItems(items, sort);

  grid.innerHTML = '';
  items.forEach(a => grid.appendChild(buildGridCard(a)));
}

$('apps-sort').addEventListener('change', renderAppsGrid);
$('apps-category').addEventListener('change', renderAppsGrid);

/* ─── GAMES GRID ─────────────────────────────────────────────── */
function renderGamesGrid() {
  const grid     = $('games-grid');
  const sort     = $('games-sort').value;
  const category = $('games-category').value;

  let items = [...GAMES];
  if (category !== 'all') items = items.filter(g => g.category === category);
  items = sortItems(items, sort);

  grid.innerHTML = '';
  items.forEach(g => grid.appendChild(buildGridCard(g)));
}

$('games-sort').addEventListener('change', renderGamesGrid);
$('games-category').addEventListener('change', renderGamesGrid);

/* ─── SORT HELPER ────────────────────────────────────────────── */
function sortItems(items, sort) {
  switch (sort) {
    case 'rating':    return items.sort((a, b) => b.rating - a.rating);
    case 'downloads': return items.sort((a, b) => b.ratingCount - a.ratingCount);
    case 'newest':    return items.sort((a, b) => b.id.localeCompare(a.id));
    case 'name':      return items.sort((a, b) => a.name.localeCompare(b.name));
    default:          return items.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }
}

/* ─── TOP CHARTS ─────────────────────────────────────────────── */
function renderTopCharts() {
  const tab = state.activeTab;

  let appList  = [...APPS];
  let gameList = [...GAMES];

  if (tab === 'free')     { appList = appList.filter(a => a.price === 0); gameList = gameList.filter(g => g.price === 0); }
  if (tab === 'paid')     { appList = appList.filter(a => a.price > 0);  gameList = gameList.filter(g => g.price > 0); }
  if (tab === 'grossing') { appList.sort((a, b) => b.price * b.ratingCount - a.price * a.ratingCount); gameList.sort((a, b) => b.price * b.ratingCount - a.price * a.ratingCount); }
  else { appList.sort((a, b) => b.ratingCount - a.ratingCount); gameList.sort((a, b) => b.ratingCount - a.ratingCount); }

  const chartApps  = $('chart-apps-list');
  const chartGames = $('chart-games-list');
  chartApps.innerHTML = '';
  chartGames.innerHTML = '';

  appList.slice(0, 10).forEach((a, i) => chartApps.appendChild(buildTopItem(a, i + 1)));
  gameList.slice(0, 10).forEach((g, i) => chartGames.appendChild(buildTopItem(g, i + 1)));
}

document.querySelectorAll('.chart-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    state.activeTab = btn.dataset.tab;
    renderTopCharts();
  });
});

/* ─── CATEGORIES ─────────────────────────────────────────────── */
function renderCategories() {
  const grid = $('categories-grid');
  if (grid.childElementCount) return;

  CATEGORIES.forEach(cat => {
    const card = el('div', 'category-card');
    card.innerHTML = `
      <div class="category-icon">${cat.icon}</div>
      <div class="category-name">${cat.name}</div>
      <div class="category-count">${cat.count} items</div>`;
    card.addEventListener('click', () => {
      const section = cat.filter.type === 'app' ? 'apps' : 'games';
      navigateTo(section);
      setTimeout(() => {
        const catSelect = document.getElementById(`${section}-category`);
        if (catSelect) { catSelect.value = cat.filter.category; catSelect.dispatchEvent(new Event('change')); }
      }, 50);
    });
    grid.appendChild(card);
  });
}

/* ─── WISHLIST ───────────────────────────────────────────────── */
function toggleWishlist(id, btn) {
  if (state.wishlist.has(id)) {
    state.wishlist.delete(id);
    toast('Removed from wishlist', 'info');
    if (btn) { btn.textContent = '♡'; btn.classList.remove('wishlisted'); }
  } else {
    state.wishlist.add(id);
    toast('Added to wishlist ♥', 'success');
    if (btn) { btn.textContent = '♥'; btn.classList.add('wishlisted'); }
  }
  updateWishlistBadge();
}

function updateWishlistBadge() {
  const count = state.wishlist.size;
  const badge = $('wishlist-badge');
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline-block' : 'none';
}

function renderWishlist() {
  const grid  = $('wishlist-grid');
  const empty = $('wishlist-empty');
  grid.innerHTML = '';

  const items = ALL_ITEMS.filter(i => state.wishlist.has(i.id));
  if (items.length === 0) {
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    items.forEach(i => grid.appendChild(buildGridCard(i)));
  }
}

/* ─── CART ───────────────────────────────────────────────────── */
function handleGetAction(item) {
  if (state.installed.has(item.id)) {
    toast(`Opening ${item.name}…`, 'info');
    return;
  }
  if (item.price === 0) {
    state.installed.add(item.id);
    toast(`Installing ${item.name}…`, 'success');
    refreshAllCards();
    return;
  }
  addToCart(item);
}

function addToCart(item) {
  if (state.cart.find(c => c.id === item.id)) {
    toast(`${item.name} is already in your cart`, 'info');
    return;
  }
  state.cart.push(item);
  toast(`${item.name} added to cart`, 'success');
  updateCartBadge();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(c => c.id !== id);
  updateCartBadge();
  renderCartDrawer();
}

function updateCartBadge() {
  const count = $('cart-count');
  count.textContent = state.cart.length;
  count.style.display = state.cart.length > 0 ? 'flex' : 'none';
}

function renderCartDrawer() {
  const container = $('cart-items');
  const empty     = $('cart-empty');
  const footer    = $('cart-footer');
  container.innerHTML = '';

  if (state.cart.length === 0) {
    empty.classList.remove('hidden');
    footer.classList.add('hidden');
    return;
  }
  empty.classList.add('hidden');
  footer.classList.remove('hidden');

  let total = 0;
  state.cart.forEach(item => {
    total += item.price;
    const row = el('div', 'cart-item');
    row.innerHTML = `
      <div class="cart-item-icon"><img src="${item.icon}" alt="" /></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
      </div>
      <button class="cart-item-remove" title="Remove">✕</button>`;
    row.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(item.id));
    container.appendChild(row);
  });

  $('cart-total').textContent = `$${total.toFixed(2)}`;
}

// Open / close cart
$('cart-btn').addEventListener('click', () => {
  renderCartDrawer();
  $('cart-drawer').classList.remove('hidden');
  $('drawer-overlay').classList.remove('hidden');
});

function closeCart() {
  $('cart-drawer').classList.add('hidden');
  $('drawer-overlay').classList.add('hidden');
}

$('cart-close').addEventListener('click', closeCart);
$('drawer-overlay').addEventListener('click', closeCart);

// Checkout
$('checkout-btn').addEventListener('click', () => {
  state.cart.forEach(item => state.installed.add(item.id));
  state.cart = [];
  updateCartBadge();
  renderCartDrawer();
  closeCart();
  toast('Purchase complete! Apps installing…', 'success');
  refreshAllCards();
});

/* ─── MODAL ─────────────────────────────────────────────────── */
function openModal(id) {
  const item = ALL_ITEMS.find(i => i.id === id);
  if (!item) return;

  const installed  = state.installed.has(item.id);
  const wishlisted = state.wishlist.has(item.id);

  // Hero
  const hero = $('modal-hero');
  hero.innerHTML = `<img src="${item.banner}" alt="${item.name}" />`;

  // Header
  $('modal-icon').src = item.icon;
  $('modal-app-name').textContent = item.name;
  $('modal-developer').textContent = item.developer;

  // Badges
  const badgesEl = $('modal-badges');
  badgesEl.innerHTML = '';
  item.tags.forEach(tag => {
    const span = el('span', `modal-badge${tag === "Editor's Choice" ? ' editors' : ''}`, tag);
    badgesEl.appendChild(span);
  });

  // Get button
  const getBtn = $('modal-get-btn');
  if (installed) {
    getBtn.textContent = 'Open';
    getBtn.className = 'btn-get installed';
  } else if (item.price === 0) {
    getBtn.textContent = 'Get';
    getBtn.className = 'btn-get';
  } else {
    getBtn.textContent = `Buy  $${item.price.toFixed(2)}`;
    getBtn.className = 'btn-get';
  }
  getBtn.onclick = () => handleGetAction(item);

  // Wishlist button
  const wlBtn = $('modal-wishlist-btn');
  wlBtn.textContent = wishlisted ? '♥' : '♡';
  wlBtn.className = `btn-wishlist-modal${wishlisted ? ' wishlisted' : ''}`;
  wlBtn.onclick = () => {
    toggleWishlist(item.id, null);
    const isNow = state.wishlist.has(item.id);
    wlBtn.textContent = isNow ? '♥' : '♡';
    wlBtn.classList.toggle('wishlisted', isNow);
  };

  // Stats
  $('modal-rating').textContent   = `${item.rating} ★`;
  $('modal-downloads').textContent = item.downloads;
  $('modal-size').textContent      = item.size;
  $('modal-age').textContent       = item.age;

  // Screenshots
  const ssRow = $('modal-screenshots');
  ssRow.innerHTML = '';
  (item.screenshots || []).forEach(src => {
    const thumb = el('div', 'screenshot-thumb');
    thumb.innerHTML = `<img src="${src}" alt="screenshot" loading="lazy" />`;
    ssRow.appendChild(thumb);
  });

  // Description
  $('modal-description').textContent = item.description;
  $('modal-whats-new').textContent    = item.whatsNew;

  // Reviews
  const dist  = item.ratingDist || [50, 25, 12, 8, 5];
  const total = dist.reduce((a, b) => a + b, 0);
  $('modal-big-rating').textContent = item.rating.toFixed(1);

  const barsEl = $('modal-stars-bars');
  barsEl.innerHTML = '';
  [5, 4, 3, 2, 1].forEach((s, i) => {
    const pct = Math.round((dist[i] / total) * 100);
    const row = el('div', 'stars-bar-row', `
      <span>${s}</span>
      <div class="stars-bar-track"><div class="stars-bar-fill" style="width:${pct}%"></div></div>
      <span>${pct}%</span>`);
    barsEl.appendChild(row);
  });

  const reviewsList = $('modal-reviews-list');
  reviewsList.innerHTML = '';
  (item.reviews || []).forEach(r => {
    const starStr = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
    const rv = el('div', 'review-item', `
      <div class="review-header">
        <div class="review-avatar"><img src="${r.avatar}" alt="${r.user}" /></div>
        <span class="review-name">${r.user}</span>
        <div class="review-stars">${[...starStr].map(c => `<span>${c}</span>`).join('')}</div>
        <span class="review-date">${r.date}</span>
      </div>
      <div class="review-text">${r.text}</div>`);
    reviewsList.appendChild(rv);
  });

  $('modal-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('modal-overlay').classList.add('hidden');
  document.body.style.overflow = '';
}

$('modal-close').addEventListener('click', closeModal);
$('modal-overlay').addEventListener('click', e => {
  if (e.target === $('modal-overlay')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ─── SEARCH ─────────────────────────────────────────────────── */
const searchInput = $('search-input');
const searchClear = $('search-clear');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    $('search-results-section').classList.add('hidden');
    // show current section
    const target = document.getElementById(`section-${state.currentSection}`);
    if (target) target.classList.remove('hidden');
    return;
  }

  // Hide all sections, show search panel
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
  const resultsSection = $('search-results-section');
  resultsSection.classList.remove('hidden');

  const results = ALL_ITEMS.filter(i =>
    i.name.toLowerCase().includes(q) ||
    i.developer.toLowerCase().includes(q) ||
    i.category.toLowerCase().includes(q) ||
    (i.tags || []).some(t => t.toLowerCase().includes(q))
  );

  $('search-query-label').textContent = `for "${searchInput.value}"`;
  const grid = $('search-results-grid');
  grid.innerHTML = '';

  if (results.length === 0) {
    $('search-empty').classList.remove('hidden');
  } else {
    $('search-empty').classList.add('hidden');
    results.forEach(r => grid.appendChild(buildGridCard(r)));
  }
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.dispatchEvent(new Event('input'));
  searchInput.focus();
});

/* ─── REFRESH ALL CARDS AFTER INSTALL ───────────────────────── */
function refreshAllCards() {
  // Re-render all visible grids
  renderAppsGrid();
  renderGamesGrid();
  if (state.currentSection === 'top-charts') renderTopCharts();
  if (state.currentSection === 'wishlist') renderWishlist();
  // Refresh portrait cards in featured rows
  ['featured-apps-row', 'featured-games-row'].forEach(id => {
    const row = $(id);
    row.innerHTML = '';
    const items = id.includes('apps') ? APPS.filter(a => a.featured) : GAMES.filter(g => g.featured);
    items.forEach(i => row.appendChild(buildPortraitCard(i)));
  });
}

/* ─── INIT ───────────────────────────────────────────────────── */
(function init() {
  buildHero();
  buildHome();
  renderAppsGrid();
  renderGamesGrid();

  // Hide cart badge initially
  $('cart-count').style.display = 'none';
  $('wishlist-badge').style.display = 'none';
})();

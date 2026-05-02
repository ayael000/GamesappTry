/* ===================================================
   AppVault — Main JavaScript
   =================================================== */

'use strict';

/* ===================================================
   DATA
   =================================================== */

const APPS = [
  {
    id: 'a1', type: 'app', name: 'Notion', developer: 'Notion Labs', category: 'Productivity',
    icon: '📝', color: '#000000', bgColor: '#f5f5f5',
    rating: 4.8, reviews: 128400, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: true, isEditors: true,
    tags: ['notes', 'workspace', 'database'],
    version: '2.31.0', size: '54 MB', updated: '2026-04-20',
    downloads: '50M+',
    description: 'Notion is your all-in-one workspace. Write, plan, share, and get organized. It combines your everyday work apps into one, so the whole team can stay on the same page.',
    features: ['Rich text editor', 'Databases & tables', 'Kanban boards', 'Real-time collaboration', 'Web clipper', 'API integrations', 'Templates library', 'Dark mode'],
    screenshots: ['📝', '📋', '🗂️', '🔗'],
    reviews_data: [
      { user: 'Alex M.', rating: 5, text: 'Completely transformed how I manage my projects. Incredible flexibility!', date: 'Apr 2026' },
      { user: 'Sara K.', rating: 5, text: 'Best note-taking and project management tool. Replaced 5 apps.', date: 'Mar 2026' },
      { user: 'James T.', rating: 4, text: 'Powerful and flexible. Slight learning curve but totally worth it.', date: 'Mar 2026' },
    ]
  },
  {
    id: 'a2', type: 'app', name: 'Figma', developer: 'Figma Inc.', category: 'Design',
    icon: '🎨', color: '#A259FF', bgColor: '#f0ebff',
    rating: 4.9, reviews: 210500, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: true, isEditors: true,
    tags: ['design', 'ui', 'prototype'],
    version: '116.10.2', size: '128 MB', updated: '2026-04-18',
    downloads: '20M+',
    description: 'Figma is the collaborative interface design tool. Design, prototype, and gather feedback all in one place. Powerful for teams and solo designers alike.',
    features: ['Vector editing', 'Auto-layout', 'Component library', 'Real-time collaboration', 'Prototyping', 'Dev mode', 'Plugins ecosystem', 'Version history'],
    screenshots: ['🎨', '🖌️', '📐', '🔧'],
    reviews_data: [
      { user: 'Mia D.', rating: 5, text: 'The gold standard for UI design. Nothing else comes close.', date: 'Apr 2026' },
      { user: 'Carlos R.', rating: 5, text: 'Collaborative features are unmatched. My whole team uses it.', date: 'Mar 2026' },
    ]
  },
  {
    id: 'a3', type: 'app', name: 'Spotify', developer: 'Spotify AB', category: 'Music',
    icon: '🎵', color: '#1DB954', bgColor: '#e8f8ee',
    rating: 4.7, reviews: 3400000, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: true, isEditors: false,
    tags: ['music', 'streaming', 'podcast'],
    version: '8.8.94', size: '89 MB', updated: '2026-04-25',
    downloads: '1B+',
    description: 'Spotify is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world.',
    features: ['100M+ songs', 'Podcast library', 'Offline playback', 'Collaborative playlists', 'Social listening', 'High quality audio', 'Smart recommendations', 'Cross-device sync'],
    screenshots: ['🎵', '🎶', '🎙️', '🎧'],
    reviews_data: [
      { user: 'Lena H.', rating: 5, text: 'Best music app. Discovery algorithms are genuinely amazing.', date: 'Apr 2026' },
      { user: 'Tom B.', rating: 4, text: 'Great app. Wish they had better lossless audio support.', date: 'Mar 2026' },
    ]
  },
  {
    id: 'a4', type: 'app', name: 'VS Code', developer: 'Microsoft', category: 'Developer Tools',
    icon: '💻', color: '#007ACC', bgColor: '#e8f4fb',
    rating: 4.9, reviews: 890000, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: true, isEditors: true,
    tags: ['code', 'editor', 'developer'],
    version: '1.89.0', size: '210 MB', updated: '2026-04-22',
    downloads: '100M+',
    description: 'Visual Studio Code is a lightweight but powerful source code editor. It comes with built-in support for JavaScript, TypeScript and Node.js with a rich ecosystem of extensions.',
    features: ['Syntax highlighting', 'IntelliSense', 'Git integration', 'Debugging tools', 'Extensions marketplace', 'Multi-cursor editing', 'Terminal integrated', 'Remote development'],
    screenshots: ['💻', '🔍', '🐛', '🔌'],
    reviews_data: [
      { user: 'Dev K.', rating: 5, text: 'The best code editor. Period. Extensions make it infinitely powerful.', date: 'Apr 2026' },
      { user: 'Anna S.', rating: 5, text: 'Fast, free, and full-featured. My daily driver for years.', date: 'Mar 2026' },
    ]
  },
  {
    id: 'a5', type: 'app', name: 'Canva', developer: 'Canva Pty Ltd', category: 'Design',
    icon: '🖼️', color: '#00C4CC', bgColor: '#e6fbfc',
    rating: 4.8, reviews: 520000, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: false, isEditors: false,
    tags: ['design', 'graphics', 'templates'],
    version: '3.2.1', size: '78 MB', updated: '2026-04-10',
    downloads: '500M+',
    description: 'Canva is a graphic design platform, used to create social media graphics, presentations, posters, and more. Its drag-and-drop features make design easy for everyone.',
    features: ['Drag & drop editor', '1M+ templates', 'Brand kit', 'Collaboration tools', 'Photo editor', 'Video editor', 'Presentation mode', 'Print & publish'],
    screenshots: ['🖼️', '✏️', '📊', '📱'],
    reviews_data: [
      { user: 'Grace L.', rating: 5, text: 'Makes me look like a professional designer every time!', date: 'Apr 2026' },
    ]
  },
  {
    id: 'a6', type: 'app', name: 'Slack', developer: 'Slack Technologies', category: 'Communication',
    icon: '💬', color: '#4A154B', bgColor: '#f5eef8',
    rating: 4.6, reviews: 780000, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: false, isEditors: false,
    tags: ['messaging', 'team', 'communication'],
    version: '4.38.176', size: '146 MB', updated: '2026-04-12',
    downloads: '100M+',
    description: 'Slack is a messaging app for business that connects people to the information they need. It brings teams together to work as one unified team.',
    features: ['Organized channels', 'Direct messaging', 'Video calls', 'File sharing', 'App integrations', 'Workflow builder', 'Search & archive', 'Status updates'],
    screenshots: ['💬', '📞', '📁', '🔔'],
    reviews_data: [
      { user: 'Rick P.', rating: 5, text: 'Transformed how our remote team communicates. Essential tool.', date: 'Mar 2026' },
    ]
  },
  {
    id: 'a7', type: 'app', name: 'Photoshop', developer: 'Adobe Inc.', category: 'Photography',
    icon: '📷', color: '#31A8FF', bgColor: '#e8f4ff',
    rating: 4.7, reviews: 1200000, price: 9.99, originalPrice: 19.99,
    isNew: false, isSale: true, isHot: false, isEditors: true,
    tags: ['photo', 'editing', 'design'],
    version: '25.9.0', size: '4.2 GB', updated: '2026-04-08',
    downloads: '50M+',
    description: 'Adobe Photoshop is the industry-standard application for image editing and composition. Edit photos, create digital art, and design engaging visuals.',
    features: ['AI-powered tools', 'Layers & masks', 'Smart objects', 'Neural filters', 'Content-aware fill', '3D design', 'Video editing', 'Cloud sync'],
    screenshots: ['📷', '🎭', '✂️', '🌈'],
    reviews_data: [
      { user: 'Mike F.', rating: 5, text: 'The definitive photo editing software. AI features are mind-blowing.', date: 'Apr 2026' },
      { user: 'Clara V.', rating: 4, text: 'Powerful but resource-heavy. Worth every penny for professionals.', date: 'Mar 2026' },
    ]
  },
  {
    id: 'a8', type: 'app', name: 'Zoom', developer: 'Zoom Video', category: 'Communication',
    icon: '📹', color: '#2D8CFF', bgColor: '#eaf3ff',
    rating: 4.5, reviews: 2100000, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: false, isEditors: false,
    tags: ['video', 'meetings', 'conference'],
    version: '5.17.11', size: '198 MB', updated: '2026-04-15',
    downloads: '500M+',
    description: 'Zoom is a leader in modern enterprise video communications. Easy and reliable cloud platform for video/audio conferencing, messaging, and webinars.',
    features: ['HD video calls', 'Screen sharing', 'Virtual backgrounds', 'Breakout rooms', 'Recording', 'Webinars', 'Whiteboard', 'AI companion'],
    screenshots: ['📹', '🖥️', '👥', '📝'],
    reviews_data: [
      { user: 'Olivia W.', rating: 4, text: 'Reliable and easy to use. Essential for remote work meetings.', date: 'Apr 2026' },
    ]
  },
  {
    id: 'a9', type: 'app', name: 'Duolingo', developer: 'Duolingo Inc.', category: 'Education',
    icon: '🦜', color: '#58CC02', bgColor: '#eefae0',
    rating: 4.8, reviews: 4500000, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: true, isEditors: false,
    tags: ['language', 'learning', 'education'],
    version: '5.170.1', size: '132 MB', updated: '2026-04-28',
    downloads: '500M+',
    description: 'Learn a new language with the world\'s most popular language learning app. Fun, effective, and free. Bite-sized lessons taught by an AI-powered tutor.',
    features: ['40+ languages', 'Bite-sized lessons', 'Streaks & rewards', 'Personalized learning', 'Speaking practice', 'Stories', 'Podcasts', 'Leaderboards'],
    screenshots: ['🦜', '🌍', '📚', '🏆'],
    reviews_data: [
      { user: 'Yuki T.', rating: 5, text: 'Learning Japanese has never been this fun! Streak is at 400+ days!', date: 'Apr 2026' },
    ]
  },
  {
    id: 'a10', type: 'app', name: 'Headspace', developer: 'Headspace Inc.', category: 'Health & Fitness',
    icon: '🧘', color: '#F47D35', bgColor: '#fff3ea',
    rating: 4.7, reviews: 890000, price: 4.99, originalPrice: 9.99,
    isNew: true, isSale: true, isHot: false, isEditors: true,
    tags: ['meditation', 'mindfulness', 'sleep'],
    version: '4.202.0', size: '89 MB', updated: '2026-04-30',
    downloads: '20M+',
    description: 'Headspace is your guide to mindfulness and meditation. Build life-changing habits and find peace of mind with guided meditations, sleep sounds, and focus music.',
    features: ['Guided meditation', 'Sleep soundscapes', 'Focus music', 'Stress reduction', 'Personalized plan', 'Daily mindfulness', 'Kids section', 'Offline access'],
    screenshots: ['🧘', '😴', '🌿', '🎵'],
    reviews_data: [
      { user: 'Emma R.', rating: 5, text: 'Completely changed my anxiety levels. Sleep has improved dramatically!', date: 'Apr 2026' },
    ]
  },
  {
    id: 'a11', type: 'app', name: '1Password', developer: 'AgileBits Inc.', category: 'Utilities',
    icon: '🔐', color: '#0075FF', bgColor: '#e6f2ff',
    rating: 4.8, reviews: 340000, price: 2.99, originalPrice: null,
    isNew: false, isSale: false, isHot: false, isEditors: false,
    tags: ['security', 'passwords', 'vault'],
    version: '8.10.30', size: '89 MB', updated: '2026-04-05',
    downloads: '10M+',
    description: 'The world\'s most loved password manager. Go ahead, forget your passwords. 1Password remembers them all for you, securely.',
    features: ['Password vault', 'Autofill', 'Two-factor auth', 'Secure notes', 'Travel mode', 'Dark web monitoring', 'Family sharing', 'Browser extension'],
    screenshots: ['🔐', '🛡️', '🗝️', '📱'],
    reviews_data: [
      { user: 'Noah P.', rating: 5, text: 'Worth every penny. Peace of mind knowing all passwords are secure.', date: 'Mar 2026' },
    ]
  },
  {
    id: 'a12', type: 'app', name: 'Notion Calendar', developer: 'Notion Labs', category: 'Productivity',
    icon: '📅', color: '#EB5757', bgColor: '#fef0f0',
    rating: 4.6, reviews: 120000, price: 0, originalPrice: null,
    isNew: true, isSale: false, isHot: false, isEditors: false,
    tags: ['calendar', 'planning', 'scheduling'],
    version: '2.1.0', size: '42 MB', updated: '2026-05-01',
    downloads: '5M+',
    description: 'Notion Calendar integrates your schedules across work and personal life. Block time for deep work, connect your Notion docs, and stay focused.',
    features: ['Smart scheduling', 'Notion integration', 'Multiple calendars', 'Meeting prep', 'Time blocking', 'Google Calendar sync', 'Meeting recordings', 'Team availability'],
    screenshots: ['📅', '📆', '⏰', '🗓️'],
    reviews_data: [
      { user: 'Lily C.', rating: 5, text: 'Finally a calendar that actually integrates with my workflow!', date: 'May 2026' },
    ]
  },
];

const GAMES = [
  {
    id: 'g1', type: 'game', name: 'Minecraft', developer: 'Mojang Studios', category: 'Sandbox',
    icon: '⛏️', color: '#44892C', bgColor: '#eaf6e5',
    rating: 4.9, reviews: 5600000, price: 9.99, originalPrice: null,
    isNew: false, isSale: false, isHot: true, isEditors: true,
    tags: ['sandbox', 'survival', 'creative'],
    version: '1.21.5', size: '1.2 GB', updated: '2026-04-15',
    downloads: '300M+',
    description: 'Minecraft is a game about placing blocks and going on adventures. Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles.',
    features: ['Survival mode', 'Creative mode', 'Multiplayer servers', 'Redstone mechanics', 'Modding support', 'Cross-play', 'Marketplace', 'Regular updates'],
    screenshots: ['⛏️', '🏰', '🌍', '🎮'],
    reviews_data: [
      { user: 'Ethan G.', rating: 5, text: 'Timeless classic. Been playing for 15 years and still love it!', date: 'Apr 2026' },
      { user: 'Sophie M.', rating: 5, text: 'Perfect game for all ages. My kids and I play together every weekend.', date: 'Mar 2026' },
    ]
  },
  {
    id: 'g2', type: 'game', name: 'Fortnite', developer: 'Epic Games', category: 'Battle Royale',
    icon: '🔫', color: '#9147FF', bgColor: '#f4edff',
    rating: 4.6, reviews: 8200000, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: true, isEditors: false,
    tags: ['battle-royale', 'shooter', 'multiplayer'],
    version: '29.30', size: '30 GB', updated: '2026-04-28',
    downloads: '350M+',
    description: 'Fortnite is a free-to-play Battle Royale game and so much more. Jump in and have fun with friends, explore the island, complete quests, and develop skills.',
    features: ['Battle Royale', 'Zero Build mode', 'Creative mode', 'Live events', 'Cross-play', 'Weekly updates', 'Character customization', 'Save the World'],
    screenshots: ['🔫', '🏝️', '🎭', '🎊'],
    reviews_data: [
      { user: 'Chris N.', rating: 5, text: 'The crossover events are incredible. Always something new happening!', date: 'Apr 2026' },
    ]
  },
  {
    id: 'g3', type: 'game', name: 'Stardew Valley', developer: 'ConcernedApe', category: 'Simulation',
    icon: '🌾', color: '#6BAA3E', bgColor: '#eef8e6',
    rating: 4.9, reviews: 2100000, price: 7.99, originalPrice: null,
    isNew: false, isSale: false, isHot: false, isEditors: true,
    tags: ['farming', 'rpg', 'relaxing'],
    version: '1.6.8', size: '380 MB', updated: '2026-03-20',
    downloads: '30M+',
    description: 'You\'ve inherited your grandfather\'s old farm plot in Stardew Valley. Build the farm of your dreams, raise animals, fish, mine, and make friends with the locals.',
    features: ['Farming & crafting', 'Mining & combat', 'Fishing', 'Relationships system', 'Multiplayer co-op', 'Seasonal events', 'Modding support', '4-player co-op'],
    screenshots: ['🌾', '⚒️', '🐄', '❤️'],
    reviews_data: [
      { user: 'Amy J.', rating: 5, text: 'Most relaxing game ever made. I lose hours without even noticing.', date: 'Apr 2026' },
      { user: 'Ben O.', rating: 5, text: 'ConcernedApe is a legend. This game is pure joy.', date: 'Feb 2026' },
    ]
  },
  {
    id: 'g4', type: 'game', name: 'Among Us', developer: 'Innersloth', category: 'Party',
    icon: '🚀', color: '#C51111', bgColor: '#fdecea',
    rating: 4.5, reviews: 3800000, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: false, isEditors: false,
    tags: ['multiplayer', 'party', 'social'],
    version: '2024.9.4', size: '245 MB', updated: '2026-03-10',
    downloads: '500M+',
    description: 'An online multiplayer social deduction game set in a space-themed setting. Crewmates complete tasks while impostors try to sabotage and eliminate crewmates.',
    features: ['Cross-platform play', 'Voice chat', 'Proximity chat', 'Custom maps', 'Hide & Seek mode', 'Cosmetics', 'Private rooms', 'Quick chat'],
    screenshots: ['🚀', '👾', '🔪', '🗺️'],
    reviews_data: [
      { user: 'Zoe K.', rating: 5, text: 'Still my go-to game nights game. So much fun with a big group!', date: 'Mar 2026' },
    ]
  },
  {
    id: 'g5', type: 'game', name: 'Genshin Impact', developer: 'miHoYo', category: 'RPG',
    icon: '⚔️', color: '#3B9DDD', bgColor: '#eaf5ff',
    rating: 4.7, reviews: 4200000, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: true, isEditors: true,
    tags: ['rpg', 'open-world', 'gacha'],
    version: '5.6', size: '15 GB', updated: '2026-04-26',
    downloads: '100M+',
    description: 'An open-world action RPG. Genshin Impact features a massive fantasy world with elemental combat, a huge cast of characters, and an immersive story.',
    features: ['Open world exploration', 'Elemental combat', '70+ characters', 'Co-op mode', 'Regular content updates', 'Stunning visuals', 'Voice acting', 'Multiple regions'],
    screenshots: ['⚔️', '🌏', '✨', '🏹'],
    reviews_data: [
      { user: 'Rin S.', rating: 5, text: 'The world design and music are absolutely breathtaking. A masterpiece.', date: 'Apr 2026' },
    ]
  },
  {
    id: 'g6', type: 'game', name: 'Candy Crush Saga', developer: 'King', category: 'Puzzle',
    icon: '🍬', color: '#E7007B', bgColor: '#fde8f4',
    rating: 4.4, reviews: 12000000, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: false, isEditors: false,
    tags: ['puzzle', 'casual', 'match-3'],
    version: '1.285.1', size: '132 MB', updated: '2026-04-20',
    downloads: '1B+',
    description: 'Candy Crush Saga is a legendary puzzle game. Join Tiffi and Mr. Toffee in their adventures through the Candy Kingdom. Switch and match candies to beat the levels!',
    features: ['10000+ levels', 'Daily challenges', 'Weekly tournaments', 'Sugar Crush events', 'Multiple boosters', 'Special candies', 'Sync progress', 'Friends leaderboard'],
    screenshots: ['🍬', '🎯', '🏆', '🌈'],
    reviews_data: [
      { user: 'Pat M.', rating: 4, text: 'Addictive as ever. Perfect for short gaming sessions anywhere.', date: 'Apr 2026' },
    ]
  },
  {
    id: 'g7', type: 'game', name: 'PUBG Mobile', developer: 'Krafton Inc.', category: 'Battle Royale',
    icon: '🎯', color: '#F4790A', bgColor: '#fff3e6',
    rating: 4.5, reviews: 6500000, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: true, isEditors: false,
    tags: ['battle-royale', 'shooter', 'mobile'],
    version: '3.4.0', size: '2.8 GB', updated: '2026-04-22',
    downloads: '100M+',
    description: 'Experience one of the world\'s most popular Battle Royale games on mobile. Drop onto a massive map, scavenge for weapons, and fight to be the last one standing.',
    features: ['Battle Royale', 'Team Deathmatch', 'Multiple maps', 'Payload mode', 'Metro Royale', 'Crew Challenge', 'Season rewards', 'Anti-cheat system'],
    screenshots: ['🎯', '🏔️', '💥', '🏆'],
    reviews_data: [
      { user: 'Raj P.', rating: 5, text: 'Best mobile shooter experience. Graphics are console-quality!', date: 'Apr 2026' },
    ]
  },
  {
    id: 'g8', type: 'game', name: 'Monument Valley 3', developer: 'ustwo games', category: 'Puzzle',
    icon: '🏛️', color: '#7C4DFF', bgColor: '#f3eeff',
    rating: 4.9, reviews: 680000, price: 4.99, originalPrice: 8.99,
    isNew: true, isSale: true, isHot: false, isEditors: true,
    tags: ['puzzle', 'artistic', 'relaxing'],
    version: '1.2.0', size: '1.1 GB', updated: '2026-04-30',
    downloads: '5M+',
    description: 'Monument Valley 3 is a surreal exploration through fantastical architecture and impossible geometry. A beautiful, award-winning experience for the whole family.',
    features: ['Optical illusions', 'Stunning artwork', 'Calming soundtrack', 'Family-friendly', 'No ads', 'New mechanics', 'Expanded story', 'Accessibility options'],
    screenshots: ['🏛️', '🌅', '✨', '🎭'],
    reviews_data: [
      { user: 'Iris W.', rating: 5, text: 'An absolute work of art. Every level is a masterpiece. Stunning.', date: 'May 2026' },
      { user: 'Paul T.', rating: 5, text: 'Worth every penny. The most beautiful game I have ever played.', date: 'Apr 2026' },
    ]
  },
  {
    id: 'g9', type: 'game', name: 'Clash of Clans', developer: 'Supercell', category: 'Strategy',
    icon: '🏰', color: '#3D8EB9', bgColor: '#e8f5fb',
    rating: 4.6, reviews: 9800000, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: false, isEditors: false,
    tags: ['strategy', 'base-building', 'multiplayer'],
    version: '16.386.12', size: '260 MB', updated: '2026-04-14',
    downloads: '500M+',
    description: 'Join millions of players worldwide in this acclaimed strategy game. Build your village, raise a clan, and compete in epic Clan Wars!',
    features: ['Base building', 'Clan wars', 'Clan Games', 'Builder Base', 'Regular events', 'Legends League', 'Capital raids', 'New heroes'],
    screenshots: ['🏰', '⚔️', '👥', '🏆'],
    reviews_data: [
      { user: 'Sam L.', rating: 5, text: '10 years playing and still hooked! The best strategy game on mobile.', date: 'Apr 2026' },
    ]
  },
  {
    id: 'g10', type: 'game', name: 'Hollow Knight', developer: 'Team Cherry', category: 'Action',
    icon: '🐝', color: '#4A4A8A', bgColor: '#ebebf8',
    rating: 4.9, reviews: 1400000, price: 14.99, originalPrice: null,
    isNew: false, isSale: false, isHot: false, isEditors: true,
    tags: ['metroidvania', 'action', 'indie'],
    version: '1.5.78.11833', size: '600 MB', updated: '2026-01-10',
    downloads: '10M+',
    description: 'Hollow Knight is a classically styled 2D action adventure across a vast interconnected world. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs.',
    features: ['Hand-drawn art', 'Metroidvania gameplay', 'Boss fights', 'Deep lore', 'DLC included', 'Challenging combat', 'Atmospheric soundtrack', 'Multiple endings'],
    screenshots: ['🐝', '⚔️', '🌑', '🗺️'],
    reviews_data: [
      { user: 'Kyle Z.', rating: 5, text: 'One of the greatest indie games ever made. An unforgettable journey.', date: 'Feb 2026' },
    ]
  },
  {
    id: 'g11', type: 'game', name: 'Wordle', developer: 'New York Times', category: 'Word',
    icon: '🔤', color: '#6aaa64', bgColor: '#edfaed',
    rating: 4.6, reviews: 2300000, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: false, isEditors: false,
    tags: ['word', 'daily', 'casual'],
    version: '2.8.1', size: '12 MB', updated: '2026-04-01',
    downloads: '50M+',
    description: 'One word. Six chances. A new puzzle every day. Guess the hidden word in 6 tries. A new puzzle is available each day.',
    features: ['Daily puzzle', 'Hard mode', 'Color-blind mode', 'Share results', 'Streak tracking', 'Statistics', 'Archive mode', 'Themed months'],
    screenshots: ['🔤', '🟨', '🟩', '📊'],
    reviews_data: [
      { user: 'Jan K.', rating: 5, text: 'Perfect morning ritual. Simple, satisfying, and just the right challenge.', date: 'Apr 2026' },
    ]
  },
  {
    id: 'g12', type: 'game', name: 'Alto\'s Odyssey', developer: 'Snowman', category: 'Endless Runner',
    icon: '🏔️', color: '#E07E3C', bgColor: '#fff4eb',
    rating: 4.8, reviews: 950000, price: 0, originalPrice: null,
    isNew: false, isSale: false, isHot: false, isEditors: true,
    tags: ['endless-runner', 'relaxing', 'beautiful'],
    version: '1.0.16', size: '810 MB', updated: '2026-02-14',
    downloads: '30M+',
    description: 'Alto\'s Odyssey is a gorgeous endless snowboarding odyssey. Explore a variety of unique and visually stunning biomes as you soar through the desert.',
    features: ['Stunning visuals', 'Dynamic weather', 'Day/night cycle', 'Zen mode', '6 playable characters', 'Achievements', 'Photo mode', 'Apple Arcade'],
    screenshots: ['🏔️', '🌅', '🏂', '🦅'],
    reviews_data: [
      { user: 'Fiona A.', rating: 5, text: 'The most beautiful mobile game. Zen mode is pure relaxation therapy.', date: 'Mar 2026' },
    ]
  },
];

const ALL_ITEMS = [...APPS, ...GAMES];

const CATEGORIES_APPS = ['All', 'Productivity', 'Design', 'Music', 'Developer Tools', 'Photography', 'Communication', 'Education', 'Health & Fitness', 'Utilities'];
const CATEGORIES_GAMES = ['All', 'Sandbox', 'Battle Royale', 'Simulation', 'Puzzle', 'RPG', 'Party', 'Strategy', 'Action', 'Word', 'Endless Runner'];

const CAT_ALL = [
  { name: 'Productivity', icon: '⚡', color: '#6c63ff', count: 3 },
  { name: 'Design', icon: '🎨', color: '#ec4899', count: 2 },
  { name: 'Music', icon: '🎵', color: '#1DB954', count: 1 },
  { name: 'Developer Tools', icon: '💻', color: '#007ACC', count: 1 },
  { name: 'Photography', icon: '📷', color: '#31A8FF', count: 1 },
  { name: 'Communication', icon: '💬', color: '#4A154B', count: 2 },
  { name: 'Education', icon: '📚', color: '#58CC02', count: 1 },
  { name: 'Health & Fitness', icon: '🏃', color: '#F47D35', count: 1 },
  { name: 'Utilities', icon: '🔧', color: '#0075FF', count: 1 },
  { name: 'Sandbox', icon: '⛏️', color: '#44892C', count: 1 },
  { name: 'Battle Royale', icon: '🔫', color: '#9147FF', count: 2 },
  { name: 'Simulation', icon: '🌾', color: '#6BAA3E', count: 1 },
  { name: 'Puzzle', icon: '🧩', color: '#7C4DFF', count: 3 },
  { name: 'RPG', icon: '⚔️', color: '#3B9DDD', count: 2 },
  { name: 'Strategy', icon: '🏰', color: '#3D8EB9', count: 1 },
  { name: 'Action', icon: '💥', color: '#ef4444', count: 1 },
];

const HERO_SLIDES = [
  { id: 'g8', badge: "Editor's Choice" },
  { id: 'a2', badge: 'Top Rated' },
  { id: 'g3', badge: 'Fan Favorite' },
  { id: 'a4', badge: 'Must Have' },
  { id: 'g5', badge: 'Trending' },
];

/* ===================================================
   STATE
   =================================================== */
let cart = JSON.parse(localStorage.getItem('appvault_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('appvault_wishlist') || '[]');
let currentPage = 'home';
let previousPage = 'home';
let heroIndex = 0;
let heroTimer = null;
let searchQuery = '';
let appsFilter = 'All';
let gamesFilter = 'All';
let appsSort = 'rating';
let gamesSort = 'rating';
let isDark = localStorage.getItem('appvault_theme') === 'dark';

/* ===================================================
   UTILS
   =================================================== */

function getItem(id) {
  return ALL_ITEMS.find(i => i.id === id);
}

function formatPrice(price) {
  if (price === 0) return 'Free';
  return '$' + price.toFixed(2);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) html += '<span class="star">★</span>';
    else if (i === full && half) html += '<span class="star half">★</span>';
    else html += '<span class="star" style="opacity:.2">★</span>';
  }
  return html;
}

function formatNum(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return n.toString();
}

function isInCart(id) {
  return cart.some(c => c.id === id);
}

function isWishlisted(id) {
  return wishlist.includes(id);
}

function saveCart() {
  localStorage.setItem('appvault_cart', JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem('appvault_wishlist', JSON.stringify(wishlist));
}

/* ===================================================
   TOAST
   =================================================== */
function showToast(msg, type = 'success', duration = 3000) {
  const icons = { success: '✅', info: 'ℹ️', error: '❌', warning: '⚠️' };
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type]}</span><span class="toast-msg">${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 350);
  }, duration);
}

/* ===================================================
   MODAL
   =================================================== */
function showModal(icon, title, msg, onConfirm, showCancel = false) {
  document.getElementById('modalIcon').textContent = icon;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalMessage').textContent = msg;
  const cancelBtn = document.getElementById('modalCancel');
  cancelBtn.style.display = showCancel ? '' : 'none';
  document.getElementById('modalOverlay').classList.add('open');

  const confirmBtn = document.getElementById('modalConfirm');
  const newConfirm = confirmBtn.cloneNode(true);
  confirmBtn.parentNode.replaceChild(newConfirm, confirmBtn);
  newConfirm.addEventListener('click', () => {
    closeModal();
    if (onConfirm) onConfirm();
  });

  if (showCancel) {
    const newCancel = cancelBtn.cloneNode(true);
    newCancel.style.display = '';
    cancelBtn.parentNode.replaceChild(newCancel, cancelBtn);
    newCancel.addEventListener('click', closeModal);
  }
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

/* ===================================================
   NAVIGATION
   =================================================== */
function showPage(page, itemId = null) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  if (page === 'detail' && itemId) {
    previousPage = currentPage;
    renderDetail(itemId);
    document.getElementById('page-detail').classList.add('active');
    currentPage = 'detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const pageEl = document.getElementById(`page-${page}`);
  if (pageEl) {
    pageEl.classList.add('active');
    currentPage = page;
  }

  const navLink = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');

  closeNav();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (page === 'apps') renderAppsGrid();
  if (page === 'games') renderGamesGrid();
  if (page === 'top-charts') renderCharts();
  if (page === 'categories') renderCategoriesGrid();
}

function closeNav() {
  document.getElementById('nav').classList.remove('mobile-open');
  document.getElementById('hamburger').classList.remove('open');
}

/* ===================================================
   THEME
   =================================================== */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.querySelector('.theme-icon').textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('appvault_theme', isDark ? 'dark' : 'light');
}

/* ===================================================
   CART
   =================================================== */
function addToCart(id, e) {
  if (e) e.stopPropagation();
  const item = getItem(id);
  if (!item) return;

  if (isInCart(id)) {
    showPage('detail', id); return;
  }

  if (item.price === 0) {
    showToast(`${item.name} installed successfully!`, 'success');
    // For free apps just show toast
  } else {
    cart.push({ id, price: item.price });
    saveCart();
    updateCartBadge();
    showToast(`${item.name} added to cart`, 'success');
    bumpCartBadge();
  }

  // Update all add buttons for this item
  document.querySelectorAll(`[data-add-id="${id}"]`).forEach(btn => {
    btn.textContent = item.price === 0 ? 'Open' : 'In Cart';
    btn.classList.add('in-cart');
  });
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartBadge();
  renderCartSidebar();
}

function clearCart() {
  showModal('🗑️', 'Clear Cart', 'Are you sure you want to remove all items from your cart?', () => {
    cart = [];
    saveCart();
    updateCartBadge();
    renderCartSidebar();
    showToast('Cart cleared', 'info');
  }, true);
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  badge.textContent = cart.length;
}

function bumpCartBadge() {
  const badge = document.getElementById('cartBadge');
  badge.classList.remove('bump');
  void badge.offsetWidth;
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 400);
}

function openCartSidebar() {
  renderCartSidebar();
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}

function closeSidebar() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}

function renderCartSidebar() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Your cart is empty</p>
        <button class="btn-primary" onclick="closeSidebar()">Browse Store</button>
      </div>`;
    footer.style.display = 'none';
    return;
  }

  let subtotal = 0;
  container.innerHTML = cart.map(c => {
    const item = getItem(c.id);
    if (!item) return '';
    subtotal += c.price;
    return `
      <div class="cart-item">
        <div class="cart-item-icon">${item.icon}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-type">${item.type === 'app' ? '📱 App' : '🎮 Game'}</div>
        </div>
        <div class="cart-item-price">$${c.price.toFixed(2)}</div>
        <button class="cart-item-remove" onclick="removeFromCart('${c.id}')" title="Remove">✕</button>
      </div>`;
  }).join('');

  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  document.getElementById('cartSubtotal').textContent = '$' + subtotal.toFixed(2);
  document.getElementById('cartTax').textContent = '$' + tax.toFixed(2);
  document.getElementById('cartTotal').textContent = '$' + total.toFixed(2);
  footer.style.display = '';
}

function checkout() {
  if (cart.length === 0) return;
  showModal('🎉', 'Order Placed!', `Your order of ${cart.length} item(s) has been placed successfully. Thank you for shopping at AppVault!`, () => {
    cart = [];
    saveCart();
    updateCartBadge();
    renderCartSidebar();
    closeSidebar();
  });
}

/* ===================================================
   WISHLIST
   =================================================== */
function toggleWishlist(id, e) {
  if (e) e.stopPropagation();
  const item = getItem(id);
  if (!item) return;

  if (isWishlisted(id)) {
    wishlist = wishlist.filter(w => w !== id);
    showToast(`Removed from wishlist`, 'info');
  } else {
    wishlist.push(id);
    showToast(`${item.name} added to wishlist ❤️`, 'success');
  }
  saveWishlist();

  const wBtn = document.querySelector('.btn-wishlist');
  if (wBtn && wBtn.dataset.id === id) {
    wBtn.classList.toggle('wishlisted', isWishlisted(id));
    wBtn.textContent = isWishlisted(id) ? '❤️ Wishlisted' : '♡ Wishlist';
  }
}

/* ===================================================
   HERO BANNER
   =================================================== */
function renderHero() {
  const slides = document.getElementById('heroSlides');
  const indicators = document.getElementById('heroIndicators');

  slides.innerHTML = HERO_SLIDES.map((hs, i) => {
    const item = getItem(hs.id);
    if (!item) return '';
    const gradients = [
      'linear-gradient(135deg, #1a1a2e, #16213e)',
      'linear-gradient(135deg, #0f3460, #533483)',
      'linear-gradient(135deg, #1b4332, #40916c)',
      'linear-gradient(135deg, #370617, #6a040f)',
      'linear-gradient(135deg, #03045e, #0096c7)',
    ];
    return `
      <div class="hero-slide${i === 0 ? ' active' : ''}" data-idx="${i}">
        <div class="hero-slide-bg" style="background:${gradients[i % gradients.length]}"></div>
        <div class="hero-slide-overlay"></div>
        <div class="hero-slide-content">
          <div class="hero-app-icon">${item.icon}</div>
          <div class="hero-text">
            <span class="hero-badge">${hs.badge}</span>
            <h2 class="hero-title">${item.name}</h2>
            <p class="hero-subtitle">${item.description.substring(0, 100)}…</p>
            <div class="hero-actions">
              <button class="btn-primary" onclick="showPage('detail','${item.id}')">View Details</button>
              <button class="btn-ghost" onclick="addToCart('${item.id}',event)">${item.price === 0 ? 'Install Free' : 'Add to Cart — $' + item.price.toFixed(2)}</button>
            </div>
          </div>
        </div>
      </div>`;
  }).join('');

  indicators.innerHTML = HERO_SLIDES.map((_, i) =>
    `<button class="hero-dot${i === 0 ? ' active' : ''}" onclick="goToSlide(${i})"></button>`
  ).join('');

  startHeroTimer();
}

function goToSlide(idx) {
  heroIndex = idx;
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const track = document.getElementById('heroSlides');
  track.style.transform = `translateX(-${idx * 100}%)`;
  slides.forEach((s, i) => s.classList.toggle('active', i === idx));
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  restartHeroTimer();
}

function nextSlide() {
  goToSlide((heroIndex + 1) % HERO_SLIDES.length);
}

function prevSlide() {
  goToSlide((heroIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
}

function startHeroTimer() {
  heroTimer = setInterval(nextSlide, 5000);
}

function restartHeroTimer() {
  clearInterval(heroTimer);
  startHeroTimer();
}

/* ===================================================
   CATEGORY PILLS (Home)
   =================================================== */
function renderCategoryPills() {
  const container = document.getElementById('categoryPills');
  const cats = ['🔥 All', '⚡ Productivity', '🎮 Games', '🎨 Design', '📚 Education', '🎵 Music', '📷 Photography', '💬 Communication', '🏃 Health', '🔧 Utilities'];
  container.innerHTML = cats.map((c, i) =>
    `<button class="pill${i === 0 ? ' active' : ''}" onclick="filterHome(this,'${c}')">${c}</button>`
  ).join('');
}

function filterHome(el, cat) {
  document.querySelectorAll('.category-pills .pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
}

/* ===================================================
   APP CARD
   =================================================== */
function buildAppCard(item) {
  const badges = [];
  if (item.isNew) badges.push('<span class="badge badge-new">New</span>');
  if (item.isSale) badges.push('<span class="badge badge-sale">Sale</span>');
  if (item.isHot) badges.push('<span class="badge badge-hot">Hot</span>');
  if (item.price === 0) badges.push('<span class="badge badge-free">Free</span>');
  if (item.isEditors) badges.push('<span class="badge badge-editors">Editor\'s Choice</span>');

  const inCart = isInCart(item.id);
  const priceLabel = item.price === 0 ? 'Install' : inCart ? 'In Cart' : 'Add to Cart';

  return `
    <div class="app-card" onclick="showPage('detail','${item.id}')">
      <div class="app-card-banner">
        <div class="app-card-banner-img" style="background:${item.bgColor || 'var(--surface-2)'}">
          <span style="font-size:3.5rem">${item.icon}</span>
        </div>
        <div class="app-card-badge-wrap">${badges.slice(0, 2).join('')}</div>
        <div class="app-card-icon">${item.icon}</div>
      </div>
      <div class="app-card-body">
        <div class="app-card-name">${item.name}</div>
        <div class="app-card-dev">${item.developer}</div>
        <div class="app-card-meta">
          <div class="stars">${renderStars(item.rating)}</div>
          <span class="rating-num">${item.rating}</span>
          <span class="reviews-num">(${formatNum(item.reviews)})</span>
        </div>
      </div>
      <div class="app-card-footer">
        <div>
          <span class="price${item.price === 0 ? ' free' : ''}">${formatPrice(item.price)}</span>
          ${item.originalPrice ? `<span class="price-orig">$${item.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <button class="add-btn${inCart ? ' in-cart' : ''}" data-add-id="${item.id}" onclick="addToCart('${item.id}',event)">${priceLabel}</button>
      </div>
    </div>`;
}

/* ===================================================
   LIST CARD
   =================================================== */
function buildListCard(item, rank) {
  return `
    <div class="list-card" onclick="showPage('detail','${item.id}')">
      <div class="list-rank${rank <= 3 ? ' top3' : ''}">${rank}</div>
      <div class="list-icon">${item.icon}</div>
      <div class="list-info">
        <div class="list-name">${item.name}</div>
        <div class="list-sub">${item.developer} · ${item.category}</div>
      </div>
      <div class="list-price${item.price === 0 ? ' free' : ''}">${formatPrice(item.price)}</div>
    </div>`;
}

/* ===================================================
   HOME PAGE SECTIONS
   =================================================== */
function renderHome() {
  // Featured Apps
  const featuredApps = APPS.filter(a => a.isEditors || a.isHot).slice(0, 8);
  document.getElementById('featuredApps').innerHTML = featuredApps.map(buildAppCard).join('');

  // Featured Games
  const featuredGames = GAMES.filter(g => g.isEditors || g.isHot).slice(0, 8);
  document.getElementById('featuredGames').innerHTML = featuredGames.map(buildAppCard).join('');

  // New Releases
  const newReleases = ALL_ITEMS.filter(i => i.isNew).concat(ALL_ITEMS.filter(i => !i.isNew)).slice(0, 8);
  document.getElementById('newReleases').innerHTML = newReleases.map(buildAppCard).join('');

  // Top Free List
  const topFree = ALL_ITEMS.filter(i => i.price === 0).sort((a, b) => b.rating - a.rating).slice(0, 8);
  document.getElementById('topFreeList').innerHTML = topFree.map((item, i) => buildListCard(item, i + 1)).join('');

  // Editor's Choice icons
  const ecItems = ALL_ITEMS.filter(i => i.isEditors).slice(0, 8);
  document.getElementById('ecIcons').innerHTML = ecItems.map(i => `<div class="ec-icon">${i.icon}</div>`).join('');
}

/* ===================================================
   APPS PAGE
   =================================================== */
function getFilteredApps() {
  let list = appsFilter === 'All' ? [...APPS] : APPS.filter(a => a.category === appsFilter);
  list.sort((a, b) => {
    if (appsSort === 'rating') return b.rating - a.rating;
    if (appsSort === 'newest') return a.isNew ? -1 : 1;
    if (appsSort === 'name') return a.name.localeCompare(b.name);
    if (appsSort === 'price-low') return a.price - b.price;
    if (appsSort === 'price-high') return b.price - a.price;
    return 0;
  });
  return list;
}

function renderAppsGrid() {
  const list = getFilteredApps();
  document.getElementById('appsCount').textContent = `${list.length} app${list.length !== 1 ? 's' : ''}`;
  document.getElementById('appsGrid').innerHTML = list.length
    ? list.map(buildAppCard).join('')
    : '<div class="empty-state"><div class="empty-state-icon">🔍</div><h3>No apps found</h3><p>Try a different category.</p></div>';
}

function renderAppsFilterBar() {
  const container = document.getElementById('appsFilterBar');
  container.innerHTML = CATEGORIES_APPS.map(cat =>
    `<button class="filter-chip${cat === appsFilter ? ' active' : ''}" onclick="filterApps('${cat}')">${cat}</button>`
  ).join('');
}

function filterApps(cat) {
  appsFilter = cat;
  renderAppsFilterBar();
  renderAppsGrid();
}

/* ===================================================
   GAMES PAGE
   =================================================== */
function getFilteredGames() {
  let list = gamesFilter === 'All' ? [...GAMES] : GAMES.filter(g => g.category === gamesFilter);
  list.sort((a, b) => {
    if (gamesSort === 'rating') return b.rating - a.rating;
    if (gamesSort === 'newest') return a.isNew ? -1 : 1;
    if (gamesSort === 'name') return a.name.localeCompare(b.name);
    if (gamesSort === 'price-low') return a.price - b.price;
    if (gamesSort === 'price-high') return b.price - a.price;
    return 0;
  });
  return list;
}

function renderGamesGrid() {
  const list = getFilteredGames();
  document.getElementById('gamesCount').textContent = `${list.length} game${list.length !== 1 ? 's' : ''}`;
  document.getElementById('gamesGrid').innerHTML = list.length
    ? list.map(buildAppCard).join('')
    : '<div class="empty-state"><div class="empty-state-icon">🎮</div><h3>No games found</h3><p>Try a different category.</p></div>';
}

function renderGamesFilterBar() {
  const container = document.getElementById('gamesFilterBar');
  container.innerHTML = CATEGORIES_GAMES.map(cat =>
    `<button class="filter-chip${cat === gamesFilter ? ' active' : ''}" onclick="filterGames('${cat}')">${cat}</button>`
  ).join('');
}

function filterGames(cat) {
  gamesFilter = cat;
  renderGamesFilterBar();
  renderGamesGrid();
}

/* ===================================================
   TOP CHARTS PAGE
   =================================================== */
function buildChartItem(item, rank) {
  const cls = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';
  return `
    <div class="chart-item" onclick="showPage('detail','${item.id}')">
      <div class="chart-rank${cls ? ' ' + cls : ''}">${rank}</div>
      <div class="chart-icon">${item.icon}</div>
      <div class="chart-info">
        <div class="chart-name">${item.name}</div>
        <div class="chart-sub">${item.category} · ⭐ ${item.rating}</div>
      </div>
      <div class="chart-price${item.price === 0 ? ' free' : ''}">${formatPrice(item.price)}</div>
    </div>`;
}

function renderCharts() {
  const freeApps = APPS.filter(a => a.price === 0).sort((a, b) => b.rating - a.rating).slice(0, 10);
  const paidApps = APPS.filter(a => a.price > 0).sort((a, b) => b.rating - a.rating).slice(0, 10);
  const freeGames = GAMES.filter(g => g.price === 0).sort((a, b) => b.rating - a.rating).slice(0, 10);
  const paidGames = GAMES.filter(g => g.price > 0).sort((a, b) => b.rating - a.rating).slice(0, 10);

  document.getElementById('chartFreeApps').innerHTML = freeApps.map((a, i) => buildChartItem(a, i + 1)).join('');
  document.getElementById('chartPaidApps').innerHTML = paidApps.map((a, i) => buildChartItem(a, i + 1)).join('');
  document.getElementById('chartFreeGames').innerHTML = freeGames.map((g, i) => buildChartItem(g, i + 1)).join('');
  document.getElementById('chartPaidGames').innerHTML = paidGames.map((g, i) => buildChartItem(g, i + 1)).join('');
}

/* ===================================================
   CATEGORIES PAGE
   =================================================== */
function renderCategoriesGrid() {
  const container = document.getElementById('categoriesGrid');
  const colors = ['#6c63ff', '#ec4899', '#1DB954', '#007ACC', '#31A8FF', '#4A154B', '#58CC02', '#F47D35', '#0075FF', '#44892C', '#9147FF', '#6BAA3E', '#7C4DFF', '#3B9DDD', '#3D8EB9', '#ef4444'];
  container.innerHTML = CAT_ALL.map((cat, i) => `
    <div class="cat-card" onclick="browseCategory('${cat.name}')">
      <div class="cat-icon" style="background:${colors[i]}22">
        <span>${cat.icon}</span>
      </div>
      <div class="cat-name">${cat.name}</div>
      <div class="cat-count">${cat.count} ${cat.count === 1 ? 'item' : 'items'}</div>
    </div>`).join('');
}

function browseCategory(name) {
  const isGameCat = CATEGORIES_GAMES.includes(name);
  const isAppCat = CATEGORIES_APPS.includes(name);

  if (isGameCat && !isAppCat) {
    gamesFilter = name;
    showPage('games');
  } else {
    appsFilter = name;
    showPage('apps');
  }
}

/* ===================================================
   DETAIL PAGE
   =================================================== */
function renderDetail(id) {
  const item = getItem(id);
  if (!item) return;

  const inCart = isInCart(id);
  const wished = isWishlisted(id);
  const priceLabel = item.price === 0 ? '🚀 Install Free' : inCart ? '✓ In Cart' : `🛒 Add to Cart — $${item.price.toFixed(2)}`;

  const screenshotBgs = ['#e8f4ff', '#fff3e6', '#e8f8ee', '#fdecea', '#f3eeff', '#eef8e6'];

  document.getElementById('detailContent').innerHTML = `
    <div class="detail-hero">
      <div class="detail-icon" style="background:${item.bgColor || 'var(--surface-2)'}">
        ${item.icon}
      </div>
      <div class="detail-info">
        <div class="detail-name">${item.name}</div>
        <div class="detail-dev">by ${item.developer}</div>
        <div class="detail-badges">
          <span class="detail-badge">${item.type === 'app' ? '📱 App' : '🎮 Game'}</span>
          <span class="detail-badge">📂 ${item.category}</span>
          ${item.isEditors ? '<span class="detail-badge" style="background:var(--yellow);color:#fff;border:none">⭐ Editor\'s Choice</span>' : ''}
          ${item.isNew ? '<span class="detail-badge" style="background:var(--green);color:#fff;border:none">✨ New</span>' : ''}
          ${item.isSale ? '<span class="detail-badge" style="background:var(--red);color:#fff;border:none">🏷️ Sale</span>' : ''}
        </div>
        <div class="detail-stats">
          <div class="detail-stat">
            <div class="detail-stat-val">${item.rating}</div>
            <div class="detail-stat-label">Rating</div>
          </div>
          <div class="detail-stat">
            <div class="detail-stat-val">${formatNum(item.reviews)}</div>
            <div class="detail-stat-label">Reviews</div>
          </div>
          <div class="detail-stat">
            <div class="detail-stat-val">${item.downloads}</div>
            <div class="detail-stat-label">Downloads</div>
          </div>
          <div class="detail-stat">
            <div class="detail-stat-val">${item.size}</div>
            <div class="detail-stat-label">Size</div>
          </div>
        </div>
        <div class="detail-price${item.price === 0 ? ' free-price' : ''}">${item.price === 0 ? 'Free' : '$' + item.price.toFixed(2)}${item.originalPrice ? `<span class="price-orig" style="font-size:1rem;margin-left:8px">$${item.originalPrice.toFixed(2)}</span>` : ''}</div>
        <div class="detail-actions">
          <button class="btn-primary${inCart ? ' in-cart' : ''}" data-add-id="${id}" onclick="addToCart('${id}',event)">${priceLabel}</button>
          <button class="btn-wishlist${wished ? ' wishlisted' : ''}" data-id="${id}" onclick="toggleWishlist('${id}',event)">${wished ? '❤️ Wishlisted' : '♡ Wishlist'}</button>
        </div>
      </div>
    </div>

    <!-- Screenshots -->
    <div class="detail-screenshots">
      ${item.screenshots.map((s, i) => `
        <div class="screenshot" style="background:${screenshotBgs[i % screenshotBgs.length]}">${s}</div>
      `).join('')}
    </div>

    <!-- Description -->
    <div class="detail-section">
      <h3>About this ${item.type}</h3>
      <p class="detail-desc">${item.description}</p>
    </div>

    <!-- Features -->
    <div class="detail-section">
      <h3>Key Features</h3>
      <div class="detail-features">
        ${item.features.map(f => `<div class="feature-item">${f}</div>`).join('')}
      </div>
    </div>

    <!-- Reviews -->
    <div class="detail-section">
      <h3>User Reviews</h3>
      <div class="reviews-list">
        ${item.reviews_data.map(r => `
          <div class="review-card">
            <div class="review-header">
              <div class="review-avatar">${r.user[0]}</div>
              <div>
                <div class="review-user">${r.user}</div>
                <div class="stars">${renderStars(r.rating)}</div>
              </div>
              <div class="review-date">${r.date}</div>
            </div>
            <p class="review-text">${r.text}</p>
          </div>`).join('')}
      </div>
    </div>

    <!-- App Info -->
    <div class="detail-section">
      <h3>App Information</h3>
      <div class="info-table">
        <div class="info-row"><div class="info-label">Version</div><div class="info-val">${item.version}</div></div>
        <div class="info-row"><div class="info-label">Size</div><div class="info-val">${item.size}</div></div>
        <div class="info-row"><div class="info-label">Last Updated</div><div class="info-val">${item.updated}</div></div>
        <div class="info-row"><div class="info-label">Developer</div><div class="info-val">${item.developer}</div></div>
        <div class="info-row"><div class="info-label">Category</div><div class="info-val">${item.category}</div></div>
        <div class="info-row"><div class="info-label">Downloads</div><div class="info-val">${item.downloads}</div></div>
      </div>
    </div>
  `;
}

/* ===================================================
   SEARCH
   =================================================== */
function openSearch() {
  document.getElementById('searchBarWrap').classList.add('open');
  document.getElementById('searchInput').focus();
}

function closeSearch() {
  document.getElementById('searchBarWrap').classList.remove('open');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').classList.remove('open');
  document.getElementById('searchResults').innerHTML = '';
}

function handleSearch(query) {
  searchQuery = query.trim().toLowerCase();
  const results = document.getElementById('searchResults');

  if (!searchQuery) {
    results.classList.remove('open');
    results.innerHTML = '';
    return;
  }

  const matches = ALL_ITEMS.filter(item =>
    item.name.toLowerCase().includes(searchQuery) ||
    item.developer.toLowerCase().includes(searchQuery) ||
    item.category.toLowerCase().includes(searchQuery) ||
    item.tags.some(t => t.includes(searchQuery))
  ).slice(0, 8);

  if (matches.length === 0) {
    results.innerHTML = `<div class="search-no-results">No results found for "<strong>${query}</strong>"</div>`;
  } else {
    results.innerHTML = matches.map(item => `
      <div class="search-result-item" onclick="closeSearch();showPage('detail','${item.id}')">
        <div class="search-result-icon" style="background:${item.bgColor || 'var(--surface-2)'}">${item.icon}</div>
        <div class="search-result-info">
          <div class="search-result-name">${item.name}</div>
          <div class="search-result-meta">${item.developer} · ${item.type === 'app' ? '📱' : '🎮'} ${item.category} · ⭐ ${item.rating}</div>
        </div>
        <div style="font-size:.85rem;font-weight:700;color:${item.price === 0 ? 'var(--teal)' : 'var(--text)'}">
          ${formatPrice(item.price)}
        </div>
      </div>`).join('');
  }

  results.classList.add('open');
}

/* ===================================================
   EVENT LISTENERS
   =================================================== */
document.addEventListener('DOMContentLoaded', () => {

  // Apply theme
  applyTheme();

  // Render initial content
  renderHero();
  renderCategoryPills();
  renderHome();
  renderAppsFilterBar();
  renderGamesFilterBar();

  // Update cart badge
  updateCartBadge();

  // Nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      showPage(link.dataset.page);
    });
  });

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('mobile-open');
    document.getElementById('hamburger').classList.toggle('open');
  });

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', () => {
    isDark = !isDark;
    applyTheme();
  });

  // Search toggle
  document.getElementById('searchToggleBtn').addEventListener('click', openSearch);
  document.getElementById('searchClose').addEventListener('click', closeSearch);

  document.getElementById('searchInput').addEventListener('input', e => {
    handleSearch(e.target.value);
  });

  document.getElementById('searchInput').addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
  });

  // Hero arrows
  document.getElementById('heroPrev').addEventListener('click', prevSlide);
  document.getElementById('heroNext').addEventListener('click', nextSlide);

  // Cart
  document.getElementById('cartBtn').addEventListener('click', openCartSidebar);
  document.getElementById('cartCloseBtn').addEventListener('click', closeSidebar);
  document.getElementById('cartOverlay').addEventListener('click', closeSidebar);
  document.getElementById('checkoutBtn').addEventListener('click', checkout);
  document.getElementById('clearCartBtn').addEventListener('click', clearCart);

  // Back button
  document.getElementById('backBtn').addEventListener('click', () => {
    showPage(previousPage);
  });

  // Modal close on overlay click
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });

  // Sort controls
  document.getElementById('appsSort').addEventListener('change', e => {
    appsSort = e.target.value;
    renderAppsGrid();
  });

  document.getElementById('gamesSort').addEventListener('change', e => {
    gamesSort = e.target.value;
    renderGamesGrid();
  });

  // Close nav on outside click
  document.addEventListener('click', e => {
    const nav = document.getElementById('nav');
    const hamburger = document.getElementById('hamburger');
    if (nav.classList.contains('mobile-open') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
      closeNav();
    }
  });

  // Keyboard shortcut for search
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') {
      closeSearch();
      closeSidebar();
      closeModal();
    }
  });

  // Touch/swipe hero
  let touchStartX = 0;
  const heroEl = document.querySelector('.hero-banner');
  heroEl.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  heroEl.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
  }, { passive: true });
});

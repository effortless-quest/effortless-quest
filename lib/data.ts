import type { LeaderboardEntry, BusinessEntry, RewardTier, TeamMember, Quest, Center, RoadmapItem, CharityTask } from '@/types';

export const individualLeaderboard: LeaderboardEntry[] = [
  { rank: 1, name: 'KhalidTheBold', avatar: '🦁', level: 87, xp: 48320, weeklyXp: 2100, class: 'Entrepreneur' },
  { rank: 2, name: 'RiverQueenAisha', avatar: '🦅', level: 81, xp: 45790, weeklyXp: 1850, class: 'Creator' },
  { rank: 3, name: 'SteelMindMarco', avatar: '🐉', level: 79, xp: 41200, weeklyXp: 1600, class: 'Innovator' },
  { rank: 4, name: 'NightOwlZara', avatar: '🦊', level: 74, xp: 38450, weeklyXp: 1200, class: 'Champion' },
  { rank: 5, name: 'IronWillFemi', avatar: '🐺', level: 71, xp: 35600, weeklyXp: 980, class: 'Entrepreneur' },
];

export const businessLeaderboard: BusinessEntry[] = [
  { rank: 1, name: 'Effortless Works', avatar: '⚡', tier: 'Legendary', members: 12, points: 92400, badge: '3x Monthly Champs' },
  { rank: 2, name: 'BoldPath Ventures', avatar: '🔥', tier: 'Epic', members: 9, points: 87110, badge: '2x Monthly Champs' },
  { rank: 3, name: 'Zenith Collective', avatar: '🌊', tier: 'Epic', members: 7, points: 74980, badge: '+3,200 this week' },
  { rank: 4, name: 'NightForge Studio', avatar: '🌙', tier: 'Rare', members: 5, points: 61340, badge: '+2,100 this week' },
  { rank: 5, name: 'Roots Empire Co.', avatar: '🌿', tier: 'Rare', members: 8, points: 58900, badge: 'Charity Leader' },
];

export const rewards: RewardTier[] = [
  {
    id: 'weekly', type: 'weekly', icon: '⚡', title: 'Weekly Reward', name: 'Sprint Champion',
    description: 'Complete the most quests in a 7-day window. Top 3 players and 1 business earn rewards.',
    prizes: [{ label: '$50 Cash', variant: 'gold' }, { label: 'Feature Boost', variant: 'cyan' }, { label: '500 Bonus XP', variant: 'purple' }],
  },
  {
    id: 'monthly', type: 'monthly', icon: '🌙', title: 'Monthly Reward', name: 'Moon Cycle Crown',
    description: 'Top businesses and individuals over a full month. Includes network exposure and cash prizes.',
    prizes: [{ label: '$200 Cash', variant: 'gold' }, { label: 'Homepage Feature', variant: 'purple' }, { label: 'Partner Perks', variant: 'cyan' }],
  },
  {
    id: 'yearly', type: 'yearly', icon: '👑', title: 'Yearly Reward', name: 'Legendary Champion',
    description: 'The ultimate prize. One individual and one business crowned champion of the year.',
    prizes: [{ label: '$2,000 Grand Prize', variant: 'gold' }, { label: 'Hall of Fame', variant: 'purple' }],
  },
  {
    id: 'charity', type: 'charity', icon: '💚', title: 'Charity Reward', name: 'Heart of the Quest',
    description: 'Businesses and players who complete charity tasks earn special Virtue XP and exclusive recognition.',
    prizes: [{ label: 'Virtue Badge', variant: 'green' }, { label: 'Charity Bonus XP', variant: 'gold' }, { label: 'Spotlight Post', variant: 'cyan' }],
  },
];

export const teamMembers: TeamMember[] = [
  { name: 'KhalidTheBold', role: 'Guild Master', avatar: '👑', xp: 48000, online: true, gradient: 'from-yellow-500 to-amber-600' },
  { name: 'NightOwlZara', role: 'Strategist', avatar: '⚔️', xp: 38000, online: true, gradient: 'from-purple-600 to-violet-500' },
  { name: 'IronWillFemi', role: 'Innovator', avatar: '🧙', xp: 35000, online: false, gradient: 'from-cyan-500 to-sky-600' },
  { name: 'FaithBuildsHere', role: 'Charity Lead', avatar: '🌿', xp: 28000, online: true, gradient: 'from-green-600 to-emerald-500' },
];

export const activeQuests: Quest[] = [
  { icon: '🏛️', name: 'Launch a Business Pitch Together', progress: 70, xp: 1200, color: 'gold' },
  { icon: '📚', name: 'Complete 5 Education Center Courses', progress: 40, xp: 800, color: 'cyan' },
  { icon: '💚', name: 'Charity: Feed 50 Families Campaign', progress: 90, xp: 2000, color: 'green' },
  { icon: '💡', name: 'Submit an Invention to the Invention Center', progress: 25, xp: 1500, color: 'purple' },
];

export const centers: Center[] = [
  { id: 'business', icon: '🏛️', name: 'Business Center', description: 'Register your business, join tournaments, compete for clients, and build your empire in a gamified marketplace.', tag: 'Enter Center', href: '/business-center', colorClass: 'biz' },
  { id: 'education', icon: '📚', name: 'Education Center', description: 'Learn, earn XP, and level up skills. Courses, workshops, and challenges for entrepreneurs and developers.', tag: 'Enter Center', href: '/education-center', colorClass: 'edu' },
  { id: 'invention', icon: '💡', name: 'Invention Center', description: 'Submit your ideas, prototype solutions, and collaborate with others to bring real inventions to life.', tag: 'Enter Center', href: '/invention-center', colorClass: 'inv' },
  { id: 'charity', icon: '💚', name: 'Charity Center', description: 'Complete real-world charity missions. Businesses earn Virtue XP and exclusive rewards for community impact.', tag: 'Enter Center', href: '/charity-center', colorClass: 'cha' },
  { id: 'townhall', icon: '🌐', name: 'Town Hall', description: 'The community hub. Network with players, businesses, and leaders. Voice ideas, vote on quests.', tag: 'Enter Center', href: '/town-hall', colorClass: 'net' },
  { id: 'luma', icon: '⬡', name: 'Luma AI Hub', description: 'Effortless Quest is the official Luma AI partner hub. Download, explore, and integrate AI into your quests.', tag: 'Explore Luma', href: '/luma-ai', colorClass: 'luma' },
];

export const roadmapItems: RoadmapItem[] = [
  { date: 'Q1 2025 — Complete', title: 'Foundation & Core Systems', description: 'Website structure, authentication, navigation, player profiles, and the core quest engine launched.', status: 'done' },
  { date: 'Q2 2025 — In Progress', title: 'Leaderboards & Rewards Center', description: 'Full leaderboard system, reward tiers (weekly, monthly, yearly), and charity impact tracking.', status: 'active' },
  { date: 'Q3 2025 — Upcoming', title: 'Business & Invention Centers', description: 'Business guild system, marketplace, invention submission portal, and team tournaments.', status: 'upcoming' },
  { date: 'Q4 2025 — Upcoming', title: 'Luma AI Full Integration', description: 'Deep Luma AI integration, AI-powered quest generation, and AI companion for all players.', status: 'upcoming' },
  { date: '2026 — Vision', title: 'The Great Tournament', description: 'First annual Effortless Quest World Championship. Live events, massive prizes, and global recognition.', status: 'upcoming' },
];

export const charityTasks: CharityTask[] = [
  { icon: '🍽️', name: 'Feed 50 Families in Your City', xp: 500 },
  { icon: '📖', name: 'Mentor a Youth Entrepreneur', xp: 800 },
  { icon: '🌱', name: 'Plant 100 Trees Community Project', xp: 600 },
  { icon: '🏠', name: 'Support a Local Housing Initiative', xp: 1000 },
  { icon: '💊', name: 'Donate Medical Supplies Drive', xp: 700 },
];

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  protected?: boolean;
  children?: NavItem[];
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  level: number;
  xp: number;
  weeklyXp: number;
  class: string;
}

export interface BusinessEntry {
  rank: number;
  name: string;
  avatar: string;
  tier: string;
  members: number;
  points: number;
  badge: string;
}

export interface RewardTier {
  id: string;
  type: 'weekly' | 'monthly' | 'yearly' | 'charity';
  icon: string;
  title: string;
  name: string;
  description: string;
  prizes: { label: string; variant: 'gold' | 'purple' | 'cyan' | 'green' }[];
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  xp: number;
  online: boolean;
  gradient: string;
}

export interface Quest {
  icon: string;
  name: string;
  progress: number;
  xp: number;
  color: 'gold' | 'purple' | 'cyan' | 'green';
}

export interface Center {
  id: string;
  icon: string;
  name: string;
  description: string;
  tag: string;
  href: string;
  colorClass: string;
}

export interface RoadmapItem {
  date: string;
  title: string;
  description: string;
  status: 'done' | 'active' | 'upcoming';
}

export interface CharityTask {
  icon: string;
  name: string;
  xp: number;
}

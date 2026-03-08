'use client';

import { useState } from 'react';
import { individualLeaderboard, businessLeaderboard } from '@/lib/data';

const rankColors = ['#ffd700', '#c0c0c0', '#cd7f32'];
const rankGradients = [
  'linear-gradient(135deg,#f5c842,#e8a020)',
  'linear-gradient(135deg,#c0c0c0,#808080)',
  'linear-gradient(135deg,#cd7f32,#a0522d)',
  'linear-gradient(135deg,#7c3aed,#a855f7)',
  'linear-gradient(135deg,#06b6d4,#0891b2)',
];

export default function LeaderboardsPage() {
  const [tab, setTab] = useState<'weekly' | 'monthly' | 'yearly'>('weekly');

  return (
    <div className="p-6 max-w-6xl">
      <div className="mb-8">
        <p className="text-xs font-bold tracking-[4px] uppercase mb-2" style={{ fontFamily: 'var(--font-ui)', color: 'var(--neon2)' }}>Rankings</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--gold)' }}>
          Hall of Champions 🏆
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {(['weekly', 'monthly', 'yearly'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200"
            style={{
              fontFamily: 'var(--font-ui)',
              background: tab === t ? 'rgba(245,200,66,.1)' : 'var(--card)',
              border: `1px solid ${tab === t ? 'var(--gold)' : 'var(--border)'}`,
              color: tab === t ? 'var(--gold)' : 'var(--muted)',
            }}
          >
            {t === 'weekly' ? 'This Week' : t === 'monthly' ? 'This Month' : 'This Year'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Individual */}
        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <div className="px-6 py-5 flex items-center justify-between" style={{ background: 'rgba(124,58,237,.1)', borderBottom: '1px solid var(--border)' }}>
            <h2 className="text-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '2px' }}>⚔️ Individual Warriors</h2>
            <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ fontFamily: 'var(--font-ui)', background: 'rgba(245,200,66,.15)', border: '1px solid rgba(245,200,66,.4)', color: 'var(--gold)' }}>Top 5</span>
          </div>
          <ul className="list-none">
            {individualLeaderboard.map((entry, i) => (
              <li
                key={entry.name}
                className="flex items-center gap-4 px-6 py-4 transition-all duration-200"
                style={{ borderBottom: i < 4 ? '1px solid rgba(42,31,78,.5)' : 'none' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(124,58,237,.06)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <span className="min-w-[28px] text-center font-black text-lg" style={{ fontFamily: 'var(--font-display)', color: rankColors[i] || 'var(--muted)' }}>
                  {entry.rank}
                </span>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ background: rankGradients[i] }}>
                  {entry.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text)' }}>{entry.name}</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>{entry.class} · Level {entry.level}</p>
                </div>
                <div className="text-right">
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '.9rem', color: 'var(--gold)' }}>{entry.xp.toLocaleString()} XP</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>🔥 +{entry.weeklyXp.toLocaleString()} wk</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Business */}
        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <div className="px-6 py-5 flex items-center justify-between" style={{ background: 'rgba(124,58,237,.1)', borderBottom: '1px solid var(--border)' }}>
            <h2 className="text-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '2px' }}>🏛️ Business Guilds</h2>
            <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ fontFamily: 'var(--font-ui)', background: 'rgba(245,200,66,.15)', border: '1px solid rgba(245,200,66,.4)', color: 'var(--gold)' }}>Top 5</span>
          </div>
          <ul className="list-none">
            {businessLeaderboard.map((entry, i) => (
              <li
                key={entry.name}
                className="flex items-center gap-4 px-6 py-4 transition-all duration-200"
                style={{ borderBottom: i < 4 ? '1px solid rgba(42,31,78,.5)' : 'none' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(124,58,237,.06)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <span className="min-w-[28px] text-center font-black text-lg" style={{ fontFamily: 'var(--font-display)', color: rankColors[i] || 'var(--muted)' }}>
                  {entry.rank}
                </span>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ background: rankGradients[i] }}>
                  {entry.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text)' }}>{entry.name}</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>Tier: {entry.tier} · {entry.members} Members</p>
                </div>
                <div className="text-right">
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '.9rem', color: 'var(--gold)' }}>{entry.points.toLocaleString()} pts</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>🏅 {entry.badge}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

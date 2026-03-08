'use client';

import { useUser } from '@/context/UserContext';
import { activeQuests, teamMembers } from '@/lib/data';

const progressColor: Record<string, string> = {
  gold: 'linear-gradient(90deg, var(--gold2), var(--gold))',
  purple: 'linear-gradient(90deg, var(--neon), var(--neon2))',
  cyan: 'linear-gradient(90deg, #0891b2, var(--cyan))',
  green: 'linear-gradient(90deg, #16a34a, var(--green))',
};

export default function DashboardPage() {
 const { user } = useUser();
const name = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Warrior';

  return (
    <div className="p-6 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-bold tracking-[4px] uppercase mb-2" style={{ fontFamily: 'var(--font-ui)', color: 'var(--neon2)' }}>Welcome back</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--gold)' }}>
          {name} ⚔️
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>Your quests await. The leaderboard won&apos;t wait.</p>
      </div>

      {/* XP Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total XP', value: '12,400', icon: '⭐', color: 'var(--gold)' },
          { label: 'Current Level', value: '14', icon: '🏆', color: 'var(--neon2)' },
          { label: 'Quests Done', value: '47', icon: '📜', color: 'var(--cyan)' },
          { label: 'Guild Rank', value: '#3', icon: '🛡️', color: 'var(--green)' },
        ].map(stat => (
          <div key={stat.label} className="rounded-2xl p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{stat.icon}</span>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'var(--font-ui)', color: 'var(--muted)' }}>{stat.label}</span>
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: stat.color }}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Quests */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <h3 className="mb-5 text-sm flex items-center gap-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '2px' }}>
            📜 Active Quests
          </h3>
          <div className="flex flex-col gap-4">
            {activeQuests.map(q => (
              <div
                key={q.name}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                style={{ background: 'rgba(42,31,78,.4)', border: '1px solid var(--border)' }}
              >
                <span className="text-2xl flex-shrink-0">{q.icon}</span>
                <div className="flex-1">
                  <p className="font-bold text-sm mb-1.5" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text)' }}>{q.name}</p>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,.06)' }}>
                    <div className="h-full rounded-full" style={{ width: `${q.progress}%`, background: progressColor[q.color] }} />
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '.8rem', color: 'var(--gold)', flexShrink: 0 }}>
                  +{q.xp.toLocaleString()} XP
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <h3 className="mb-5 text-sm flex items-center gap-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '2px' }}>
            🛡️ Guild Roster
          </h3>
          <div className="flex flex-col gap-3">
            {teamMembers.map(m => (
              <div key={m.name} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(42,31,78,.3)' }}>
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-lg flex-shrink-0 bg-gradient-to-br ${m.gradient}`}>
                  {m.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text)' }}>{m.name}</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>{m.role}</p>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '.78rem', color: 'var(--gold)' }}>
                  {(m.xp / 1000).toFixed(0)}K XP
                </span>
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: m.online ? 'var(--green)' : '#555', boxShadow: m.online ? '0 0 8px var(--green)' : 'none' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

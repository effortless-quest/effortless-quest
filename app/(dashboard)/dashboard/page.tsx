'use client';

import { useState } from 'react';
import { useUser } from '@/context/UserContext';
import Link from 'next/link';

const quests = [
  { id: 1, icon: '💪', name: 'Morning Warrior', desc: 'Complete a workout before 9am', xp: 200, progress: 60, color: 'var(--gold)', category: 'Personal' },
  { id: 2, icon: '📚', name: 'Knowledge Seeker', desc: 'Read for 30 minutes', xp: 150, progress: 30, color: 'var(--neon2)', category: 'Education' },
  { id: 3, icon: '🤝', name: 'Community Builder', desc: 'Help a guild member today', xp: 300, progress: 0, color: 'var(--cyan)', category: 'Social' },
  { id: 4, icon: '💚', name: 'Give Back', desc: 'Donate to a cause or volunteer', xp: 500, progress: 0, color: 'var(--green)', category: 'Charity' },
];

const team = [
  { name: 'ShadowBlade', role: 'Entrepreneur', xp: 24800, avatar: '🗡️', online: true, level: 22 },
  { name: 'IronMind', role: 'Strategist', xp: 18200, avatar: '🧠', online: true, level: 18 },
  { name: 'PhoenixRise', role: 'Inventor', xp: 15600, avatar: '🔥', online: false, level: 15 },
  { name: 'ZenMaster', role: 'Educator', xp: 12100, avatar: '☯️', online: false, level: 13 },
];

const centers = [
  { icon: '🏛️', name: 'Business Center', desc: 'Compete & grow', href: '/business-center', color: 'var(--gold)' },
  { icon: '📖', name: 'Education', desc: 'Learn & earn XP', href: '/education-center', color: 'var(--cyan)' },
  { icon: '💡', name: 'Invention Center', desc: 'Submit your ideas', href: '/invention-center', color: 'var(--neon2)' },
  { icon: '💚', name: 'Charity Center', desc: 'Do good, earn XP', href: '/charity-center', color: 'var(--green)' },
  { icon: '🏆', name: 'Leaderboards', desc: 'See your ranking', href: '/leaderboards', color: '#f59e0b' },
  { icon: '🏛️', name: 'Town Hall', desc: 'Community votes', href: '/town-hall', color: '#a78bfa' },
];

export default function DashboardPage() {
  const { user } = useUser();
  const name = user?.user_metadata?.full_name?.split(' ')[0] || user?.email?.split('@')[0] || 'Warrior';
  const [completedQuests, setCompletedQuests] = useState<number[]>([]);
  const [xp, setXp] = useState(12400);

  const handleCompleteQuest = (questId: number, questXp: number) => {
    if (completedQuests.includes(questId)) return;
    setCompletedQuests(prev => [...prev, questId]);
    setXp(prev => prev + questXp);
  };

  const level = Math.floor(xp / 1000) + 1;
  const xpToNextLevel = 1000 - (xp % 1000);
  const levelProgress = ((xp % 1000) / 1000) * 100;

  return (
    <div className="p-4 md:p-8 max-w-7xl">

      {/* Welcome Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-[4px] uppercase mb-2" style={{ fontFamily: 'var(--font-ui)', color: 'var(--neon2)' }}>
            Welcome back
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--gold)', lineHeight: 1.1 }}>
            {name} ⚔️
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
            Your quests await. The leaderboard won&apos;t wait.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/leaderboards"
            className="px-5 py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase no-underline transition-all duration-200"
            style={{ fontFamily: 'var(--font-ui)', background: 'transparent', border: '1.5px solid var(--border2)', color: 'var(--text)' }}
          >
            🏆 Leaderboard
          </Link>
          <Link
            href="/rewards"
            className="px-5 py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase no-underline"
            style={{ fontFamily: 'var(--font-ui)', background: 'linear-gradient(135deg, var(--gold2), var(--gold))', color: 'var(--void)' }}
          >
            🎁 Rewards
          </Link>
        </div>
      </div>

      {/* XP Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total XP', value: xp.toLocaleString(), icon: '⭐', color: 'var(--gold)' },
          { label: 'Level', value: level, icon: '🏆', color: 'var(--neon2)' },
          { label: 'Quests Done', value: 47 + completedQuests.length, icon: '📜', color: 'var(--cyan)' },
          { label: 'Guild Rank', value: '#3', icon: '🛡️', color: 'var(--green)' },
        ].map(stat => (
          <div
            key={stat.label}
            className="rounded-2xl p-5 transition-all duration-300"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{stat.icon}</span>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'var(--font-ui)', color: 'var(--muted)' }}>
                {stat.label}
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: stat.color }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Level Progress Bar */}
      <div className="rounded-2xl p-5 mb-8" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'var(--font-ui)', color: 'var(--muted)' }}>
            Level {level} Progress
          </span>
          <span className="text-xs" style={{ color: 'var(--neon2)', fontFamily: 'var(--font-ui)' }}>
            {xpToNextLevel} XP to Level {level + 1}
          </span>
        </div>
        <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,.06)' }}>
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${levelProgress}%`, background: 'linear-gradient(90deg, var(--gold2), var(--gold))' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

        {/* Active Quests */}
        <div className="lg:col-span-2 rounded-2xl p-6" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm flex items-center gap-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '2px' }}>
              📜 Daily Quests
            </h3>
            <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(245,200,66,.1)', color: 'var(--gold)', fontFamily: 'var(--font-ui)' }}>
              {completedQuests.length}/{quests.length} done
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {quests.map(q => {
              const done = completedQuests.includes(q.id);
              return (
                <div
                  key={q.id}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: done ? 'rgba(34,197,94,.06)' : 'rgba(42,31,78,.4)',
                    border: `1px solid ${done ? 'rgba(34,197,94,.3)' : 'var(--border)'}`,
                    opacity: done ? 0.7 : 1,
                  }}
                >
                  <span className="text-2xl flex-shrink-0">{q.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-sm" style={{ fontFamily: 'var(--font-ui)', color: done ? 'var(--green)' : 'var(--text)' }}>
                        {done ? '✓ ' : ''}{q.name}
                      </p>
                      <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,.05)', color: 'var(--muted)', fontFamily: 'var(--font-ui)' }}>
                        {q.category}
                      </span>
                    </div>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{q.desc}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '.8rem', color: q.color }}>
                      +{q.xp} XP
                    </span>
                    <button
                      onClick={() => handleCompleteQuest(q.id, q.xp)}
                      disabled={done}
                      className="px-3 py-1 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200"
                      style={{
                        fontFamily: 'var(--font-ui)',
                        background: done ? 'rgba(34,197,94,.15)' : 'linear-gradient(135deg, var(--gold2), var(--gold))',
                        color: done ? 'var(--green)' : 'var(--void)',
                        cursor: done ? 'default' : 'pointer',
                        border: 'none',
                      }}
                    >
                      {done ? 'Done ✓' : 'Complete'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Guild Roster */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '2px' }}>
              🛡️ Guild
            </h3>
            <Link href="/my-team" className="text-xs no-underline" style={{ color: 'var(--neon2)', fontFamily: 'var(--font-ui)' }}>
              View all →
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {team.map(m => (
              <div key={m.name} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(42,31,78,.3)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ background: 'rgba(124,58,237,.2)', border: '1px solid var(--border)' }}>
                  {m.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm truncate" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text)' }}>{m.name}</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>Lvl {m.level} · {m.role}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '.75rem', color: 'var(--gold)' }}>
                    {(m.xp / 1000).toFixed(0)}K
                  </span>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: m.online ? 'var(--green)' : '#444', boxShadow: m.online ? '0 0 6px var(--green)' : 'none' }}
                  />
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/my-team"
            className="mt-4 w-full flex items-center justify-center py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase no-underline transition-all duration-200"
            style={{ fontFamily: 'var(--font-ui)', background: 'transparent', border: '1px solid var(--border)', color: 'var(--muted)' }}
          >
            + Invite Member
          </Link>
        </div>
      </div>

      {/* Centers Grid */}
      <div>
        <h3 className="text-sm mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '2px' }}>
          🗺️ Quest Centers
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {centers.map(c => (
            <Link
              key={c.name}
              href={c.href}
              className="rounded-2xl p-5 no-underline transition-all duration-300 group"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = c.color;
                (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.background = 'var(--card)';
              }}
            >
              <span className="text-3xl block mb-3">{c.icon}</span>
              <h4 className="font-bold text-sm mb-1" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text)' }}>{c.name}</h4>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{c.desc}</p>
              <span className="text-xs mt-3 block" style={{ color: c.color, fontFamily: 'var(--font-ui)' }}>Enter →</span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}

'use client';

import { useUser } from '@/context/UserContext';
import Link from 'next/link';

const centers = [
  { icon: '🏛️', name: 'Business Center', desc: 'Compete & grow', href: '/business-center', color: 'var(--gold)', soon: false },
  { icon: '📖', name: 'Education', desc: 'Learn & earn XP', href: '/education-center', color: 'var(--cyan)', soon: true },
  { icon: '💡', name: 'Invention Center', desc: 'Submit your ideas', href: '/invention-center', color: 'var(--neon2)', soon: false },
  { icon: '💚', name: 'Charity Center', desc: 'Do good, earn XP', href: '/charity-center', color: 'var(--green)', soon: true },
  { icon: '🏆', name: 'Leaderboards', desc: 'See your ranking', href: '/leaderboards', color: '#f59e0b', soon: true },
  { icon: '🌐', name: 'Town Hall', desc: 'Community votes', href: '/town-hall', color: '#a78bfa', soon: false },
];

export default function DashboardPage() {
  const { user } = useUser();
  const name = user?.user_metadata?.full_name?.split(' ')[0] || user?.email?.split('@')[0] || 'Warrior';

  return (
    <div className="p-4 md:p-8 max-w-7xl">

      {/* Welcome Header */}
      <div className="mb-8">
        <p className="text-xs font-bold tracking-[4px] uppercase mb-2" style={{ fontFamily: 'var(--font-ui)', color: 'var(--neon2)' }}>
          Welcome back
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--gold)', lineHeight: 1.1 }}>
          {name} ⚔️
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
          The quest begins. More features unlocking throughout 2026.
        </p>
      </div>

      {/* Early Access Banner */}
      <div className="rounded-2xl p-5 mb-8 flex items-start gap-4" style={{ background: 'linear-gradient(135deg, rgba(245,200,66,.08), rgba(124,58,237,.08))', border: '1px solid rgba(245,200,66,.25)' }}>
        <span className="text-2xl flex-shrink-0">🚧</span>
        <div>
          <p className="font-bold text-sm mb-1" style={{ fontFamily: 'var(--font-ui)', color: 'var(--gold)' }}>
            Early Access — Game in Progress
          </p>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)', fontFamily: 'var(--font-ui)' }}>
            You&apos;re one of the first warriors on effortles.quest. XP tracking, leaderboards, guild features, and rewards are being built right now — check back often as things go live.
          </p>
        </div>
      </div>

      {/* Quest Centers Grid */}
      <div className="mb-8">
        <h3 className="text-sm mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '2px' }}>
          🗺️ Quest Centers
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {centers.map(c => (
            <Link
              key={c.name}
              href={c.href}
              className="rounded-2xl p-5 no-underline transition-all duration-300 relative"
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
              {c.soon && (
                <span className="absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full" style={{ fontFamily: 'var(--font-ui)', background: 'rgba(124,58,237,.2)', border: '1px solid rgba(124,58,237,.4)', color: 'var(--neon2)', fontSize: '0.6rem', letterSpacing: '1px' }}>
                  SOON
                </span>
              )}
              <span className="text-3xl block mb-3">{c.icon}</span>
              <h4 className="font-bold text-sm mb-1" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text)' }}>{c.name}</h4>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{c.desc}</p>
              <span className="text-xs mt-3 block" style={{ color: c.color, fontFamily: 'var(--font-ui)' }}>
                {c.soon ? 'Coming Soon →' : 'Enter →'}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Upcoming Features */}
      <div className="rounded-2xl p-6" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
        <h3 className="text-sm mb-5" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '2px' }}>
          🗓️ What&apos;s Coming
        </h3>
        <div className="flex flex-col gap-3">
          {[
            { icon: '⭐', label: 'XP Tracking', desc: 'Earn and track real XP across quests', color: 'var(--gold)' },
            { icon: '🏆', label: 'Live Leaderboards', desc: 'Weekly, monthly & yearly rankings', color: '#f59e0b' },
            { icon: '🛡️', label: 'Guild System', desc: 'Form teams, run group quests', color: 'var(--neon2)' },
            { icon: '🎁', label: 'Rewards Vault', desc: 'Real prizes for top performers', color: 'var(--cyan)' },
            { icon: '💚', label: 'Charity Missions', desc: 'Do good and earn Virtue XP', color: 'var(--green)' },
          ].map(f => (
            <div key={f.label} className="flex items-center gap-4 p-3 rounded-xl" style={{ background: 'rgba(42,31,78,.3)' }}>
              <span className="text-xl flex-shrink-0">{f.icon}</span>
              <div className="flex-1">
                <p className="font-bold text-sm" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text)' }}>{f.label}</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>{f.desc}</p>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full flex-shrink-0" style={{ fontFamily: 'var(--font-ui)', background: 'rgba(124,58,237,.15)', border: '1px solid rgba(124,58,237,.3)', color: 'var(--neon2)' }}>
                In Progress
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
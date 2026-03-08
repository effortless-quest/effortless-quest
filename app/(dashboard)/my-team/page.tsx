import { teamMembers, activeQuests } from '@/lib/data';

const progressColor: Record<string, string> = {
  gold: 'linear-gradient(90deg, var(--gold2), var(--gold))',
  purple: 'linear-gradient(90deg, var(--neon), var(--neon2))',
  cyan: 'linear-gradient(90deg, #0891b2, var(--cyan))',
  green: 'linear-gradient(90deg, #16a34a, var(--green))',
};

const activity = [
  { icon: '🏆', text: 'KhalidTheBold completed the Weekly Sprint Quest', time: '2m ago' },
  { icon: '💚', text: 'FaithBuildsHere submitted a charity task — 90% complete!', time: '18m ago' },
  { icon: '⚔️', text: 'NightOwlZara challenged a rival guild in the Business Tournament', time: '1h ago' },
  { icon: '📚', text: 'IronWillFemi earned the "Scholar" badge in Education Center', time: '3h ago' },
  { icon: '💡', text: 'Guild unlocked the Invention Center access tier', time: '6h ago' },
];

export default function MyTeamPage() {
  return (
    <div className="p-6 max-w-6xl">
      <div className="mb-8">
        <p className="text-xs font-bold tracking-[4px] uppercase mb-2" style={{ fontFamily: 'var(--font-ui)', color: 'var(--neon2)' }}>Team Center</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--gold)' }}>Your Guild 🛡️</h1>
        <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>Build, manage, and conquer with your team.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left — Roster & Stats */}
        <div className="flex flex-col gap-5">
          <div className="rounded-2xl p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 className="text-xs mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '2px' }}>
              🛡️ Guild Roster
            </h3>
            <div className="flex flex-col gap-3">
              {teamMembers.map(m => (
                <div key={m.name} className="flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200" style={{ background: 'rgba(42,31,78,.3)' }}>
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center text-lg flex-shrink-0 bg-gradient-to-br ${m.gradient}`}>{m.avatar}</div>
                  <div className="flex-1">
                    <p className="font-bold text-sm" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text)' }}>{m.name}</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{m.role}</p>
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '.78rem', color: 'var(--gold)' }}>{(m.xp/1000).toFixed(0)}K XP</span>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: m.online ? 'var(--green)' : '#555', boxShadow: m.online ? '0 0 8px var(--green)' : 'none' }} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 className="text-xs mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '2px' }}>📊 Guild Stats</h3>
            {[
              { label: 'Guild Level', value: '74 / 100', pct: 74, gradient: 'linear-gradient(90deg,var(--gold2),var(--gold))' },
              { label: 'Weekly Quest Progress', value: '6 / 10', pct: 60, gradient: 'linear-gradient(90deg,var(--neon),var(--neon2))' },
              { label: 'Charity Score', value: '82%', pct: 82, gradient: 'linear-gradient(90deg,#16a34a,var(--green))' },
            ].map(stat => (
              <div key={stat.label} className="mb-4">
                <div className="flex justify-between text-xs mb-1.5">
                  <span style={{ color: 'var(--muted)' }}>{stat.label}</span>
                  <span style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>{stat.value}</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,.06)' }}>
                  <div className="h-full rounded-full" style={{ width: `${stat.pct}%`, background: stat.gradient }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Quests & Activity */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="rounded-2xl p-6" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 className="text-xs mb-5 flex items-center gap-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '2px' }}>
              📜 Active Team Quests
            </h3>
            <div className="flex flex-col gap-4">
              {activeQuests.map(q => (
                <div key={q.name} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'rgba(42,31,78,.4)', border: '1px solid var(--border)' }}>
                  <span className="text-2xl flex-shrink-0">{q.icon}</span>
                  <div className="flex-1">
                    <p className="font-bold text-sm mb-1.5" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text)' }}>{q.name}</p>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,.06)' }}>
                      <div className="h-full rounded-full" style={{ width: `${q.progress}%`, background: progressColor[q.color] }} />
                    </div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '.8rem', color: 'var(--gold)', flexShrink: 0 }}>+{q.xp.toLocaleString()} XP</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-6" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 className="text-xs mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '2px' }}>⚡ Guild Activity</h3>
            <div className="flex flex-col gap-3">
              {activity.map((a, i) => (
                <div key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--muted)' }}>
                  <span className="flex-shrink-0 mt-0.5">{a.icon}</span>
                  <span className="flex-1" style={{ fontFamily: 'var(--font-ui)' }}>{a.text}</span>
                  <span className="text-xs flex-shrink-0" style={{ color: 'rgba(139,127,168,.5)' }}>{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

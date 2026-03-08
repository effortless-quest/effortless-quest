import { rewards } from '@/lib/data';
import type { RewardTier } from '@/types';

const tierStyles: Record<string, { headerBg: string; tierColor: string; glow: string }> = {
  weekly: { headerBg: 'linear-gradient(135deg,rgba(6,182,212,.2),rgba(124,58,237,.15))', tierColor: 'var(--cyan)', glow: 'rgba(6,182,212,.2)' },
  monthly: { headerBg: 'linear-gradient(135deg,rgba(168,85,247,.2),rgba(245,200,66,.1))', tierColor: 'var(--neon2)', glow: 'rgba(168,85,247,.2)' },
  yearly: { headerBg: 'linear-gradient(135deg,rgba(245,200,66,.25),rgba(232,160,32,.15))', tierColor: 'var(--gold)', glow: 'rgba(245,200,66,.2)' },
  charity: { headerBg: 'linear-gradient(135deg,rgba(34,197,94,.2),rgba(6,182,212,.1))', tierColor: 'var(--green)', glow: 'rgba(34,197,94,.2)' },
};

const prizeStyles: Record<string, { bg: string; border: string; color: string }> = {
  gold: { bg: 'rgba(245,200,66,.15)', border: 'rgba(245,200,66,.4)', color: 'var(--gold)' },
  purple: { bg: 'rgba(168,85,247,.15)', border: 'rgba(168,85,247,.4)', color: 'var(--neon2)' },
  cyan: { bg: 'rgba(6,182,212,.15)', border: 'rgba(6,182,212,.4)', color: 'var(--cyan)' },
  green: { bg: 'rgba(34,197,94,.15)', border: 'rgba(34,197,94,.4)', color: 'var(--green)' },
};

function RewardCard({ reward }: { reward: RewardTier }) {
  const ts = tierStyles[reward.type];
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${ts.glow}`; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
    >
      <div className="p-6 text-center" style={{ background: ts.headerBg }}>
        <span className="text-5xl block mb-3">{reward.icon}</span>
        <p className="text-xs font-bold tracking-[3px] uppercase" style={{ fontFamily: 'var(--font-ui)', color: ts.tierColor }}>{reward.title}</p>
      </div>
      <div className="p-6">
        <h3 className="mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#fff', letterSpacing: '1px' }}>{reward.name}</h3>
        <p className="text-sm leading-7 mb-5" style={{ color: 'var(--muted)' }}>{reward.description}</p>
        <div className="flex gap-2 flex-wrap">
          {reward.prizes.map(p => {
            const ps = prizeStyles[p.variant];
            return (
              <span
                key={p.label}
                className="text-xs font-bold px-3 py-1 rounded-full"
                style={{ fontFamily: 'var(--font-ui)', background: ps.bg, border: `1px solid ${ps.border}`, color: ps.color }}
              >
                {p.label}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function RewardsPage() {
  return (
    <div className="p-6 max-w-6xl">
      <div className="mb-8">
        <p className="text-xs font-bold tracking-[4px] uppercase mb-2" style={{ fontFamily: 'var(--font-ui)', color: 'var(--neon2)' }}>Rewards Center</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--gold)' }}>
          Earn Real Prizes 🎁
        </h1>
        <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}>From weekly sprints to yearly championships — real-world value for real-world effort.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {rewards.map(r => <RewardCard key={r.id} reward={r} />)}
      </div>
    </div>
  );
}

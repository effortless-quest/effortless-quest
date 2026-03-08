import UnderConstruction from '@/components/shared/UnderConstruction';
import { charityTasks } from '@/lib/data';

export default function CharityCenterPage() {
  return (
    <div className="p-6 max-w-6xl">
      <div className="mb-8">
        <p className="text-xs font-bold tracking-[4px] uppercase mb-2" style={{ fontFamily: 'var(--font-ui)', color: 'var(--green)' }}>Charity Center</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--gold)' }}>
          Do Good. Earn More. 💚
        </h1>
        <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}>Complete charity tasks for Virtue XP and exclusive rewards.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xs mb-4 font-bold tracking-[3px] uppercase" style={{ fontFamily: 'var(--font-ui)', color: 'var(--green)' }}>Active Charity Missions</h2>
          <div className="flex flex-col gap-3">
            {charityTasks.map(task => (
              <div key={task.name} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid rgba(34,197,94,.2)' }}>
                <span className="text-2xl flex-shrink-0">{task.icon}</span>
                <span className="flex-1 text-sm font-bold" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text)' }}>{task.name}</span>
                <span className="text-xs font-bold px-3 py-1 rounded-full flex-shrink-0" style={{ fontFamily: 'var(--font-ui)', background: 'rgba(34,197,94,.15)', border: '1px solid rgba(34,197,94,.4)', color: 'var(--green)' }}>
                  +{task.xp} XP
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { num: '94', label: 'Missions Completed' },
            { num: '1,240', label: 'Families Helped' },
            { num: '$42K', label: 'Donated in Goods' },
            { num: '38', label: 'Businesses Participating' },
          ].map(s => (
            <div key={s.label} className="rounded-2xl p-5 text-center" style={{ background: 'var(--card)', border: '1px solid rgba(34,197,94,.25)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--green)', textShadow: '0 0 20px rgba(34,197,94,.4)' }}>{s.num}</p>
              <p className="text-xs mt-1" style={{ color: 'var(--muted)', fontFamily: 'var(--font-ui)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

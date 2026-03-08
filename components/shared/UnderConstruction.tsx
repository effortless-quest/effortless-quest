import Link from 'next/link';

interface UnderConstructionProps {
  title: string;
  icon: string;
  description: string;
  color?: string;
}

export default function UnderConstruction({ title, icon, description, color = 'var(--neon2)' }: UnderConstructionProps) {
  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="text-7xl mb-6 animate-bounce">{icon}</div>
      <p className="text-xs font-bold tracking-[4px] uppercase mb-4" style={{ fontFamily: 'var(--font-ui)', color }}>
        Coming Soon
      </p>
      <h1 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--gold)' }}>
        {title}
      </h1>
      <p className="text-base leading-8 max-w-lg mb-8" style={{ color: 'var(--muted)' }}>{description}</p>
      
      <div className="rounded-2xl p-8 max-w-sm w-full mb-8" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
        <div className="flex gap-2 mb-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-2 rounded-full flex-1" style={{ background: 'rgba(255,255,255,.06)' }}>
              <div className="h-full rounded-full" style={{ width: i === 0 ? '75%' : i === 1 ? '45%' : '20%', background: `linear-gradient(90deg, var(--neon), ${color})` }} />
            </div>
          ))}
        </div>
        <p className="text-xs" style={{ color: 'var(--muted)', fontFamily: 'var(--font-ui)' }}>
          This page is actively being built. Check back soon!
        </p>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/dashboard" className="px-6 py-3 rounded-xl text-sm font-bold tracking-widest uppercase no-underline" style={{ fontFamily: 'var(--font-ui)', background: 'linear-gradient(135deg, var(--gold2), var(--gold))', color: 'var(--void)' }}>
          ← Back to Dashboard
        </Link>
        <Link href="/leaderboards" className="px-6 py-3 rounded-xl text-sm font-bold tracking-widest uppercase no-underline" style={{ fontFamily: 'var(--font-ui)', background: 'transparent', border: '1.5px solid var(--border2)', color: 'var(--text)' }}>
          View Leaderboards
        </Link>
      </div>
    </div>
  );
}

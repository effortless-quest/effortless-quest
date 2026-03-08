export default function AboutPage() {
  const pillars = [
    { icon: '⚔️', title: 'Personal Development', desc: 'Daily quests to sharpen your mind, body, and discipline.' },
    { icon: '🏛️', title: 'Business Growth', desc: 'Real competitive arenas where businesses earn recognition and clients.' },
    { icon: '🤝', title: 'Community Network', desc: 'A global guild of driven entrepreneurs and creators.' },
    { icon: '💚', title: 'Charity & Impact', desc: 'Doing good is rewarded. Virtue is a stat here.' },
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-xs font-bold tracking-[4px] uppercase mb-4" style={{ fontFamily: 'var(--font-ui)', color: 'var(--neon2)' }}>About Effortless Quest</p>
            <h1 className="mb-5" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2 }}>
              Built for <span style={{ color: 'var(--gold)' }}>Real Life</span> Warriors
            </h1>
            <p className="text-base leading-8 mb-4" style={{ color: 'var(--muted)' }}>
              Effortless Quest is not just a platform — it&apos;s a living, breathing real-life game where personal development, business success, and community impact are your stats.
            </p>
            <p className="text-base leading-8 mb-8" style={{ color: 'var(--muted)' }}>
              We believe the strongest people are those who build themselves AND lift others. Our gamified environment creates accountability, competition, and connection in one unified experience.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="/login" className="px-6 py-3 rounded-xl text-sm font-bold tracking-widest uppercase no-underline" style={{ fontFamily: 'var(--font-ui)', background: 'linear-gradient(135deg, var(--gold2), var(--gold))', color: 'var(--void)' }}>
                Join The Quest
              </a>
              <a href="https://effortlessworks.store" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl text-sm font-bold tracking-widest uppercase no-underline" style={{ fontFamily: 'var(--font-ui)', background: 'transparent', border: '1.5px solid var(--border2)', color: 'var(--text)' }}>
                Effortless Works ↗
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map(p => (
              <div
                key={p.title}
                className="rounded-2xl p-5 transition-all duration-300"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--neon2)'; (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,.08)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'var(--card)'; }}
              >
                <span className="text-3xl block mb-3">{p.icon}</span>
                <h3 className="text-xs mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '1px' }}>{p.title}</h3>
                <p className="text-xs leading-6" style={{ color: 'var(--muted)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sister Sites */}
        <div className="rounded-2xl p-8 text-center" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-xs font-bold tracking-[4px] uppercase mb-4" style={{ fontFamily: 'var(--font-ui)', color: 'var(--neon2)' }}>The Effortless Family</p>
          <h2 className="mb-8" style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--gold)' }}>Our Sister Sites</h2>
          <div className="flex gap-6 justify-center flex-wrap">
            {[
              { name: 'Effortless Works', url: 'effortlessworks.store', desc: 'The main store and business hub.' },
              { name: 'Muslim Success Path', url: 'muslimsuccesspath.com', desc: 'Faith-driven success and growth.' },
            ].map(site => (
              <a
                key={site.url}
                href={`https://${site.url}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[200px] p-5 rounded-xl no-underline transition-all duration-200"
                style={{ background: 'rgba(124,58,237,.06)', border: '1px solid var(--border)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--neon2)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <h3 className="text-sm font-bold mb-1" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text)' }}>{site.name}</h3>
                <p className="text-xs mb-2" style={{ color: 'var(--muted)' }}>{site.desc}</p>
                <span className="text-xs" style={{ color: 'var(--neon2)', fontFamily: 'var(--font-ui)' }}>{site.url} ↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client'

export default function LumaSection() {
  return (
    <section id="luma" className="py-24" style={{ background: 'linear-gradient(135deg, rgba(6,182,212,.05) 0%, rgba(124,58,237,.08) 100%)', borderTop: '1px solid rgba(6,182,212,.2)', borderBottom: '1px solid rgba(124,58,237,.2)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
              style={{ fontFamily: 'var(--font-ui)', background: 'linear-gradient(135deg,rgba(6,182,212,.15),rgba(124,58,237,.15))', border: '1px solid rgba(6,182,212,.4)', color: 'var(--cyan)' }}
            >
              ⬡ Official Partner
            </div>
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#fff', lineHeight: 1.2 }}>
              Run your business<br />with <span style={{ color: 'var(--cyan)' }}>Luma AI</span>
            </h2>
            <p className="text-base leading-8 mb-7" style={{ color: 'var(--muted)' }}>
              Luma is your AI control center — it handles orders, inventory, marketing, and content so you can focus on building. Connect it to your business and step back.
            </p>
            <ul className="list-none flex flex-col gap-3 mb-8">
              {[
                'Automates orders, inventory, and shop updates',
                'Creates and posts marketing content for your products',
                'Runs entirely on your local machine — no cloud, no fees',
                'Detects your business model and self-configures',
                'Journal, schedule, and reflect in one private space',
              ].map(f => (
                <li key={f} className="flex items-center gap-3 text-sm" style={{ fontFamily: 'var(--font-ui)', color: 'var(--text)' }}>
                  <span style={{ color: 'var(--cyan)', fontSize: '.6rem' }}>◆</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://github.com/effortless-quest/luma/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl no-underline transition-all duration-200"
                style={{ background: 'var(--card)', border: '1px solid rgba(6,182,212,.4)', color: 'var(--text)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--cyan)'; (e.currentTarget as HTMLElement).style.background = 'rgba(6,182,212,.1)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,.4)'; (e.currentTarget as HTMLElement).style.background = 'var(--card)'; }}
              >
                <span className="text-2xl">💻</span>
                <div className="flex flex-col">
                  <small className="text-[.65rem] tracking-wide uppercase" style={{ color: 'var(--muted)' }}>Download free</small>
                  <strong className="text-sm font-bold">Get Luma</strong>
                </div>
              </a>
              <a
                href="https://github.com/effortless-quest/luma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl no-underline transition-all duration-200"
                style={{ background: 'var(--card)', border: '1px solid rgba(6,182,212,.4)', color: 'var(--text)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--cyan)'; (e.currentTarget as HTMLElement).style.background = 'rgba(6,182,212,.1)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,.4)'; (e.currentTarget as HTMLElement).style.background = 'var(--card)'; }}
              >
                <span className="text-2xl">⭐</span>
                <div className="flex flex-col">
                  <small className="text-[.65rem] tracking-wide uppercase" style={{ color: 'var(--muted)' }}>Open source</small>
                  <strong className="text-sm font-bold">View on GitHub</strong>
                </div>
              </a>
            </div>
          </div>

          {/* Visual */}
          <div
            className="flex flex-col items-center justify-center min-h-[360px] rounded-2xl p-10"
            style={{ background: 'linear-gradient(135deg, var(--card), rgba(6,182,212,.08))', border: '1px solid rgba(6,182,212,.25)' }}
          >
            <div
              className="w-44 h-44 rounded-full mb-5 animate-luma-pulse flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle, rgba(6,182,212,.6) 0%, rgba(124,58,237,.4) 50%, transparent 70%)',
                boxShadow: '0 0 60px rgba(6,182,212,.4), 0 0 120px rgba(6,182,212,.15)',
              }}
            >
              <span className="text-5xl">⬡</span>
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--cyan)', letterSpacing: '4px', textShadow: '0 0 20px rgba(6,182,212,.6)' }}>
              LUMA AI
            </p>
            <p className="text-sm mt-2 text-center" style={{ color: 'var(--muted)' }}>Your business control center</p>
          </div>
        </div>
      </div>
    </section>
  );
}

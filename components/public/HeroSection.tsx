'use client';

import Link from 'next/link';

const stats = [
  { display: '🚀', label: 'Early Access' },
  { display: '⚔️', label: 'Founding Warriors' },
  { display: '🏆', label: 'Leaderboards Soon' },
  { display: '🎁', label: 'Rewards Coming' },
];

const rings = [
  { size: 400, color: 'rgba(124,58,237,.15)', delay: '0s' },
  { size: 600, color: 'rgba(6,182,212,.1)', delay: '.8s' },
  { size: 800, color: 'rgba(245,200,66,.07)', delay: '1.6s' },
  { size: 1100, color: 'rgba(168,85,247,.05)', delay: '2.4s' },
];

export default function HeroSection() {

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={{ padding: '120px 24px 80px' }}
    >
      {/* Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {rings.map((ring, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: ring.size,
              height: ring.size,
              border: `1px solid ${ring.color}`,
              animation: `pulse-ring 4s ease-in-out infinite ${ring.delay}`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 justify-center mb-5 text-xs font-bold tracking-[5px] uppercase"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--cyan)' }}
        >
          <span className="w-10 h-px block" style={{ background: 'var(--cyan)' }} />
          Gamify Your Life
          <span className="w-10 h-px block" style={{ background: 'var(--cyan)' }} />
        </div>

        {/* Title */}
        <h1
          className="text-gradient-gold leading-tight mb-3"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 8vw, 6rem)',
            lineHeight: 1.1,
            filter: 'drop-shadow(0 0 40px rgba(245,200,66,.3))',
          }}
        >
          EFFORTLESS<br />QUEST
        </h1>

        {/* Subtitle */}
        <p
          className="mb-7"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            color: 'var(--neon2)',
            letterSpacing: '4px',
            textShadow: '0 0 30px rgba(168,85,247,.6)',
          }}
        >
          Level Up. Build. Conquer.
        </p>

        {/* Description */}
        <p
          className="text-lg mx-auto mb-12 leading-relaxed max-w-xl"
          style={{ color: 'var(--muted)' }}
        >
          A gamified ecosystem where personal development meets business empire-building.
          Compete, collaborate, and rise through the ranks in the ultimate real-life RPG.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/login"
            className="px-9 py-4 rounded-lg font-bold text-sm tracking-widest uppercase no-underline transition-all duration-300"
            style={{
              fontFamily: 'var(--font-ui)',
              background: 'linear-gradient(135deg, var(--gold2), var(--gold))',
              color: 'var(--void)',
              boxShadow: '0 0 30px rgba(245,200,66,.35), inset 0 1px 0 rgba(255,255,255,.2)',
            }}
          >
            Begin Your Quest
          </Link>
          <Link
            href="#how-to-play"
            className="px-9 py-4 rounded-lg font-bold text-sm tracking-widest uppercase no-underline transition-all duration-300"
            style={{
              fontFamily: 'var(--font-ui)',
              background: 'transparent',
              color: 'var(--text)',
              border: '1.5px solid var(--border2)',
            }}
          >
            How To Play
          </Link>
        </div>

        {/* Stats */}
        <div id="hero-stats" className="flex gap-12 mt-20 justify-center flex-wrap">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span
                className="block leading-none mb-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  color: 'var(--gold)',
                  textShadow: '0 0 20px rgba(245,200,66,.5)',
                }}
              >
                {stat.display}
              </span>
              <span
                className="block text-xs tracking-[3px] uppercase mt-1"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--muted)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

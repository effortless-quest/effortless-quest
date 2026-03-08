'use client';

import { useEffect, useRef } from 'react';

const steps = [
  { step: '01', icon: '🧙', title: 'Create Your Character', desc: 'Sign up and build your player profile. Choose your class: Entrepreneur, Creator, Innovator, or Champion.' },
  { step: '02', icon: '📜', title: 'Accept Quests', desc: 'Take on daily, weekly, and monthly challenges in personal development, business growth, and charity work.' },
  { step: '03', icon: '⚔️', title: 'Join a Team', desc: 'Form guilds with other players, align your businesses, and compete together for team rewards and glory.' },
  { step: '04', icon: '🏆', title: 'Claim Rewards', desc: 'Earn XP, climb leaderboards, and collect real-world rewards — cash, tools, exposure, and exclusive perks.' },
  { step: '05', icon: '🌟', title: 'Do Good, Earn Big', desc: 'Complete charity missions for bonus XP and special rewards. The community rewards those who give back.' },
  { step: '06', icon: '👑', title: 'Ascend to Legend', desc: 'Reach the top of the Hall of Fame. Yearly champions earn life-changing prizes and permanent recognition.' },
];

export default function HowToPlaySection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = '1';
          (e.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    cardRefs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how-to-play" className="py-24" style={{ background: 'var(--deep)' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-bold tracking-[4px] uppercase mb-4" style={{ fontFamily: 'var(--font-ui)', color: 'var(--neon2)' }}>
            Getting Started
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#fff', marginBottom: '12px' }}>
            How To <span style={{ color: 'var(--gold)' }}>Play</span>
          </h2>
          <p className="text-sm mx-auto max-w-md" style={{ color: 'var(--muted)' }}>
            Your journey begins with a single quest. Rise from Novice to Legend.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.step}
              ref={el => { cardRefs.current[i] = el; }}
              className="relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                opacity: 0,
                transform: 'translateY(24px)',
                transitionDelay: `${i * 80}ms`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--neon2)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(124,58,237,.2)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Step number watermark */}
              <span
                className="absolute -top-2 -right-2 font-black pointer-events-none select-none"
                style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', color: 'rgba(124,58,237,.06)', lineHeight: 1 }}
              >
                {step.step}
              </span>
              <span className="text-4xl block mb-4">{step.icon}</span>
              <h3 className="mb-2.5 text-sm tracking-wide" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>
                {step.title}
              </h3>
              <p className="text-sm leading-7" style={{ color: 'var(--muted)' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

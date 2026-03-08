'use client'

import { roadmapItems } from '@/lib/data';

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24" style={{ background: 'var(--deep)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-bold tracking-[4px] uppercase mb-4" style={{ fontFamily: 'var(--font-ui)', color: 'var(--neon2)' }}>Road Map</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#fff', marginBottom: '12px' }}>
            The <span style={{ color: 'var(--gold)' }}>Quest Ahead</span>
          </h2>
          <p className="text-sm mx-auto max-w-md" style={{ color: 'var(--muted)' }}>
            Building the ultimate real-life game, one milestone at a time.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div
            className="absolute top-0 bottom-0 hidden md:block"
            style={{ left: '50%', transform: 'translateX(-50%)', width: '2px', background: 'linear-gradient(180deg, var(--neon), var(--neon2), var(--gold))' }}
          />
          {/* Mobile left line */}
          <div
            className="absolute top-0 bottom-0 md:hidden"
            style={{ left: '14px', width: '2px', background: 'linear-gradient(180deg, var(--neon), var(--neon2), var(--gold))' }}
          />

          {roadmapItems.map((item, i) => (
            <div
              key={item.title}
              className={`flex gap-12 items-start mb-16 relative ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} pl-10 md:pl-0`}
            >
              {/* Content */}
              <div
                className="flex-1 p-6 rounded-2xl transition-all duration-300"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--neon2)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(124,58,237,.15)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                <div className="text-xs font-bold tracking-[3px] uppercase mb-2" style={{ fontFamily: 'var(--font-ui)', color: 'var(--neon2)' }}>{item.date}</div>
                <h3 className="mb-2.5 text-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>{item.title}</h3>
                <p className="text-sm leading-7" style={{ color: 'var(--muted)' }}>{item.description}</p>
              </div>

              {/* Node */}
              <div
                className="flex-shrink-0 w-5 h-5 rounded-full z-10 absolute md:relative md:top-2"
                style={{
                  left: '5px',
                  background: item.status === 'done' ? 'var(--neon2)' : item.status === 'active' ? 'var(--gold)' : 'var(--void)',
                  border: `3px solid ${item.status === 'active' ? 'var(--gold)' : 'var(--neon2)'}`,
                  boxShadow: item.status === 'active' ? '0 0 16px rgba(245,200,66,.6)' : '0 0 16px rgba(168,85,247,.6)',
                  animation: item.status === 'active' ? 'node-pulse 2s infinite' : 'none',
                  alignSelf: 'flex-start',
                }}
              />

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

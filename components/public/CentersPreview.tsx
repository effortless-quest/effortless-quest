'use client'

import Link from 'next/link';
import { centers } from '@/lib/data';

const colorMap: Record<string, { glow: string; tag: string; tagBg: string; tagBorder: string }> = {
  biz: { glow: 'var(--gold2)', tag: 'var(--gold)', tagBg: 'rgba(245,200,66,.15)', tagBorder: 'rgba(245,200,66,.4)' },
  edu: { glow: 'var(--cyan)', tag: 'var(--cyan)', tagBg: 'rgba(6,182,212,.15)', tagBorder: 'rgba(6,182,212,.4)' },
  inv: { glow: 'var(--neon2)', tag: 'var(--neon2)', tagBg: 'rgba(168,85,247,.15)', tagBorder: 'rgba(168,85,247,.4)' },
  cha: { glow: 'var(--green)', tag: 'var(--green)', tagBg: 'rgba(34,197,94,.15)', tagBorder: 'rgba(34,197,94,.4)' },
  net: { glow: '#f97316', tag: '#f97316', tagBg: 'rgba(249,115,22,.15)', tagBorder: 'rgba(249,115,22,.4)' },
  luma: { glow: 'var(--cyan)', tag: 'var(--cyan)', tagBg: 'rgba(6,182,212,.15)', tagBorder: 'rgba(6,182,212,.4)' },
};

export default function CentersPreview() {
  return (
    <section id="centers" className="py-24" style={{ background: 'var(--deep)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-bold tracking-[4px] uppercase mb-4" style={{ fontFamily: 'var(--font-ui)', color: 'var(--neon2)' }}>
            Quest Hubs
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#fff', marginBottom: '12px' }}>
            The Six <span style={{ color: 'var(--gold)' }}>Centers</span>
          </h2>
          <p className="text-sm mx-auto max-w-md" style={{ color: 'var(--muted)' }}>
            Each center is a domain of mastery. Login to enter all six and become a true Legend.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {centers.map(center => {
            const c = colorMap[center.colorClass];
            return (
              <Link
                key={center.id}
                href="/login"
                className="rounded-2xl p-8 text-center relative overflow-hidden group no-underline block transition-all duration-300"
                style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'inherit' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.15)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 24px 60px rgba(0,0,0,.4)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: c.glow, filter: 'blur(50px)', top: '-60px' }}
                />
                <span className="text-5xl block mb-4 relative z-10">{center.icon}</span>
                <h3 className="mb-2.5 relative z-10" style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#fff', letterSpacing: '1px' }}>
                  {center.name}
                </h3>
                <p className="text-sm leading-7 mb-5 relative z-10" style={{ color: 'var(--muted)' }}>
                  {center.description}
                </p>
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full relative z-10"
                  style={{ fontFamily: 'var(--font-ui)', background: c.tagBg, border: `1px solid ${c.tagBorder}`, color: c.tag }}
                >
                  {center.tag}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

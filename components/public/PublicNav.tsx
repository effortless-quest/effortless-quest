'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Quest', href: '/' },
  { label: 'How To Play', href: '/#how-to-play' },
  { label: 'Centers', href: '/#centers' },
  { label: 'Luma AI', href: '/#luma' },
  { label: 'Road Map', href: '/#roadmap' },
  { label: 'About', href: '/about' },
];

export default function PublicNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: 'rgba(3,2,10,.85)',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: scrolled ? '1px solid rgba(245,200,66,.3)' : '1px solid rgba(124,58,237,.25)',
        boxShadow: scrolled ? '0 4px 40px rgba(124,58,237,.15)' : 'none',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 no-underline flex-shrink-0"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '2px', textShadow: '0 0 20px rgba(245,200,66,.5)' }}
        >
          <span className="text-xl">⚔️</span>
          {/* Full name on large screens, short on small */}
          <span className="hidden lg:inline text-sm">EFFORTLESS QUEST</span>
          <span className="inline lg:hidden text-xs">EQ</span>
        </Link>

        {/* Desktop links — show on lg and up */}
        <ul className="hidden lg:flex items-center gap-1.5 list-none">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3.5 py-2 rounded-md text-xs font-semibold tracking-widest uppercase transition-all duration-200 no-underline border"
                style={{
                  fontFamily: 'var(--font-ui)',
                  color: pathname === link.href ? 'var(--gold)' : 'var(--muted)',
                  background: pathname === link.href ? 'rgba(245,200,66,.1)' : 'transparent',
                  borderColor: pathname === link.href ? 'rgba(245,200,66,.4)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg text-xs font-bold tracking-widest uppercase text-white no-underline transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, var(--neon), var(--neon2))',
                boxShadow: '0 0 20px rgba(124,58,237,.4)',
                fontFamily: 'var(--font-ui)',
              }}
            >
              Login ⚔️
            </Link>
          </li>
        </ul>

        {/* Right side on mobile — login button + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="/login"
            className="px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase text-white no-underline"
            style={{
              background: 'linear-gradient(135deg, var(--neon), var(--neon2))',
              fontFamily: 'var(--font-ui)',
              whiteSpace: 'nowrap',
            }}
          >
            Login ⚔️
          </Link>
          <button
            className="flex flex-col gap-1.5 bg-transparent border-none p-1 flex-shrink-0"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block w-6 h-0.5 rounded transition-all duration-300"
                style={{ background: 'var(--gold)' }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden px-6 pb-6 flex flex-col gap-2"
          style={{ background: 'rgba(3,2,10,.97)', borderTop: '1px solid var(--border)' }}
        >
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold no-underline"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--muted)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
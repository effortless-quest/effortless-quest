import Link from 'next/link';

const footerLinks = {
  Play: [
    { label: 'How To Play', href: '/#how-to-play' },
    { label: 'Leaderboards', href: '/login' },
    { label: 'Rewards Center', href: '/login' },
    { label: 'My Team', href: '/login' },
    { label: 'My Quest', href: '/login' },
  ],
  Centers: [
    { label: 'Business Center', href: '/login' },
    { label: 'Education Center', href: '/login' },
    { label: 'Invention Center', href: '/login' },
    { label: 'Charity Center', href: '/login' },
    { label: 'Town Hall', href: '/login' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Road Map', href: '/#roadmap' },
    { label: 'Luma AI Hub', href: '/#luma' },
    { label: 'Contact', href: '/about#contact' },
    { label: 'Login', href: '/login' },
  ],
};

export default function PublicFooter() {
  return (
    <footer style={{ background: 'var(--deep)', borderTop: '1px solid var(--border)' }} className="pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 no-underline mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--gold)', letterSpacing: '2px' }}
            >
              ⚔️ EFFORTLESS QUEST
            </Link>
            <p className="text-sm leading-relaxed mb-5 max-w-[220px]" style={{ color: 'var(--muted)' }}>
              Gamify your life. Build your business. Lift your community. The real-life RPG for driven people.
            </p>
            <div className="flex gap-2.5">
              {['𝕏', 'in', '▶', '📷'].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm no-underline transition-all duration-200"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--muted)' }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}
              >
                {title}
              </h4>
              <ul className="list-none flex flex-col gap-2">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm no-underline transition-colors duration-200"
                      style={{ color: 'var(--muted)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(139,127,168,.6)' }}>
            © 2025 Effortless Quest. Part of the Effortless Works Family.
          </p>
          <div className="flex gap-4">
            <a href="https://effortlessworks.store" target="_blank" rel="noreferrer" className="text-xs no-underline transition-colors duration-200" style={{ color: 'var(--neon2)' }}>
              effortlessworks.store
            </a>
            <a href="https://muslimsuccesspath.com" target="_blank" rel="noreferrer" className="text-xs no-underline transition-colors duration-200" style={{ color: 'var(--neon2)' }}>
              muslimsuccesspath.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';

const mainLinks = [
  { icon: '🗺️', label: 'Dashboard', href: '/dashboard' },
  { icon: '🏆', label: 'Leaderboards', href: '/leaderboards' },
  { icon: '🎁', label: 'Rewards', href: '/rewards' },
  { icon: '🛡️', label: 'My Team', href: '/my-team' },
];

const centerLinks = [
  { icon: '🏛️', label: 'Business Center', href: '/business-center' },
  { icon: '📚', label: 'Education Center', href: '/education-center' },
  { icon: '💡', label: 'Invention Center', href: '/invention-center' },
  { icon: '💚', label: 'Charity Center', href: '/charity-center' },
  { icon: '🌐', label: 'Town Hall', href: '/town-hall' },
  { icon: '⬡', label: 'Luma AI', href: '/luma-ai' },
];

const infoLinks = [
  { icon: '📜', label: 'Road Map', href: '/info/roadmap' },
  { icon: 'ℹ️', label: 'About', href: '/about' },
];

export default function DashboardNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser()
  const [infoOpen, setInfoOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const SidebarSection = ({ title, links }: { title: string; links: typeof mainLinks }) => (
    <div className="mb-6">
      <p className="text-[.65rem] font-bold tracking-[3px] uppercase px-3 mb-2" style={{ color: 'var(--muted)', fontFamily: 'var(--font-ui)' }}>
        {title}
      </p>
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={`sidebar-link mb-1 ${pathname === link.href ? 'active' : ''}`}
          onClick={() => setSidebarOpen(false)}
        >
          <span>{link.icon}</span>
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );

  const sidebar = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-4 py-5 mb-4" style={{ borderBottom: '1px solid var(--border)' }}>
        <Link href="/dashboard" className="flex items-center gap-2 no-underline" style={{ fontFamily: 'var(--font-display)', fontSize: '.85rem', color: 'var(--gold)', letterSpacing: '1px' }}>
          <span>⚔️</span> EFFORTLESS QUEST
        </Link>
      </div>

      {/* User card */}
      {user && (
        <div className="mx-3 mb-5 p-3 rounded-xl" style={{ background: 'rgba(124,58,237,.1)', border: '1px solid var(--border)' }}>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-base" style={{ background: 'linear-gradient(135deg, var(--neon), var(--neon2))' }}>
              ⚔️
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-ui)' }}>
                {user.user_metadata?.full_name || user.email?.split('@')[0] || 'Warrior'}
              </p>
              <p className="text-[.7rem]" style={{ color: 'var(--neon2)' }}>Level 1 · Novice</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto px-2">
        <SidebarSection title="Quest" links={mainLinks} />
        <SidebarSection title="Centers" links={centerLinks} />

        {/* Info dropdown */}
        <div className="mb-6">
          <p className="text-[.65rem] font-bold tracking-[3px] uppercase px-3 mb-2" style={{ color: 'var(--muted)', fontFamily: 'var(--font-ui)' }}>Info</p>
          <button
            className="sidebar-link w-full text-left mb-1"
            onClick={() => setInfoOpen(v => !v)}
            style={{ background: 'transparent', border: '1px solid transparent' }}
          >
            <span>📋</span>
            <span className="flex-1">Info & Updates</span>
            <span className="text-xs" style={{ color: 'var(--muted)' }}>{infoOpen ? '▲' : '▼'}</span>
          </button>
          {infoOpen && (
            <div className="ml-4 border-l pl-3" style={{ borderColor: 'var(--border)' }}>
              {infoLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`sidebar-link mb-1 text-xs ${pathname === link.href ? 'active' : ''}`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer actions */}
      <div className="px-3 py-4" style={{ borderTop: '1px solid var(--border)' }}>
        <Link href="/" className="sidebar-link mb-1">
          <span>🏠</span><span>Back to Home</span>
        </Link>
        <button
          onClick={handleLogout}
          className="sidebar-link w-full text-left"
          style={{ background: 'transparent', color: 'var(--red)', borderColor: 'transparent', fontFamily: 'var(--font-ui)' }}
        >
          <span>🚪</span><span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-64 z-40"
        style={{ background: 'var(--deep)', borderRight: '1px solid var(--border)' }}
      >
        {sidebar}
      </aside>

      {/* Mobile Top Bar */}
      <div
        className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 h-16"
        style={{ background: 'rgba(7,5,20,.95)', borderBottom: '1px solid var(--border)', backdropFilter: 'blur(20px)' }}
      >
        <Link href="/dashboard" style={{ fontFamily: 'var(--font-display)', fontSize: '.8rem', color: 'var(--gold)' }}>
          ⚔️ EQ
        </Link>
        <button
          className="flex flex-col gap-1 bg-transparent border-none p-1"
          onClick={() => setSidebarOpen(v => !v)}
          aria-label="Menu"
        >
          {[0,1,2].map(i => <span key={i} className="w-5 h-0.5 block rounded" style={{ background: 'var(--gold)' }} />)}
        </button>
      </div>

      {/* Mobile Drawer */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/60 md:hidden" onClick={() => setSidebarOpen(false)} />
          <div
            className="fixed top-0 left-0 h-screen w-72 z-50 md:hidden"
            style={{ background: 'var(--deep)', borderRight: '1px solid var(--border)' }}
          >
            {sidebar}
          </div>
        </>
      )}
    </>
  );
}

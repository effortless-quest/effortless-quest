import Link from 'next/link';

export default function CTASection() {
  return (
    <section
      id="cta"
      className="text-center py-24 px-6"
      style={{ background: 'linear-gradient(135deg, rgba(124,58,237,.12) 0%, rgba(245,200,66,.05) 100%)', borderTop: '1px solid rgba(124,58,237,.25)' }}
    >
      <div className="max-w-3xl mx-auto">
        <div
          className="flex items-center gap-3 justify-center mb-5 text-xs font-bold tracking-[5px] uppercase"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--cyan)' }}
        >
          <span className="w-10 h-px block" style={{ background: 'var(--cyan)' }} />
          Your Adventure Awaits
          <span className="w-10 h-px block" style={{ background: 'var(--cyan)' }} />
        </div>
        <h2
          className="text-gradient-gold leading-tight mb-4"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', filter: 'drop-shadow(0 0 40px rgba(245,200,66,.3))' }}
        >
          Ready to Level Up<br />Your Life?
        </h2>
        <p className="text-base mx-auto mb-10 leading-8 max-w-lg" style={{ color: 'var(--muted)' }}>
          Join thousands of warriors already building stronger lives, businesses, and communities through the power of the quest.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/login"
            className="px-9 py-4 rounded-lg font-bold text-sm tracking-widest uppercase no-underline"
            style={{
              fontFamily: 'var(--font-ui)',
              background: 'linear-gradient(135deg, var(--gold2), var(--gold))',
              color: 'var(--void)',
              boxShadow: '0 0 30px rgba(245,200,66,.35)',
            }}
          >
            Start Your Quest — Free
          </Link>
          <Link
            href="#how-to-play"
            className="px-9 py-4 rounded-lg font-bold text-sm tracking-widest uppercase no-underline"
            style={{
              fontFamily: 'var(--font-ui)',
              background: 'transparent',
              color: 'var(--text)',
              border: '1.5px solid var(--border2)',
            }}
          >
            Watch How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}

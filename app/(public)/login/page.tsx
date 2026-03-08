'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async () => {
    setError(''); setMessage(''); setLoading(true)
    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        router.push('/dashboard')
      } else {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        setMessage('Check your email to confirm your account, then come back to login!')
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Authentication failed')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogle = async () => {
    setError(''); setLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/dashboard` }
    })
    if (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">
        <div className="rounded-2xl p-8" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <div className="text-center mb-8">
            <span className="text-4xl block mb-3">⚔️</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--gold)', letterSpacing: '2px' }}>
              {mode === 'login' ? 'Enter the Quest' : 'Begin Your Journey'}
            </h1>
            <p className="text-sm mt-2" style={{ color: 'var(--muted)', fontFamily: 'var(--font-ui)' }}>
              {mode === 'login' ? 'Welcome back, warrior.' : 'Create your warrior account.'}
            </p>
          </div>

          {/* Google */}
          <button
            onClick={handleGoogle}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl mb-6 text-sm font-bold transition-all duration-200"
            style={{ fontFamily: 'var(--font-ui)', background: 'rgba(255,255,255,.06)', border: '1px solid var(--border)', color: 'var(--text)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--neon2)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            <span className="text-lg font-black">G</span>
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
            <span className="text-xs" style={{ color: 'var(--muted)', fontFamily: 'var(--font-ui)' }}>or</span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-4 mb-6">
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)', color: 'var(--muted)' }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="warrior@effortlessquest.com"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{ background: 'rgba(255,255,255,.04)', border: '1px solid var(--border)', color: 'var(--text)', fontFamily: 'var(--font-ui)' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--neon2)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)', color: 'var(--muted)' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{ background: 'rgba(255,255,255,.04)', border: '1px solid var(--border)', color: 'var(--text)', fontFamily: 'var(--font-ui)' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--neon2)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              />
            </div>
          </div>

          {/* Error / Success messages */}
          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl text-xs" style={{ background: 'rgba(239,68,68,.1)', border: '1px solid rgba(239,68,68,.4)', color: 'var(--red)', fontFamily: 'var(--font-ui)' }}>
              {error}
            </div>
          )}
          {message && (
            <div className="mb-4 px-4 py-3 rounded-xl text-xs" style={{ background: 'rgba(34,197,94,.1)', border: '1px solid rgba(34,197,94,.4)', color: 'var(--green)', fontFamily: 'var(--font-ui)' }}>
              {message}
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-4 rounded-xl text-sm font-bold tracking-widest uppercase transition-all duration-200"
            style={{
              fontFamily: 'var(--font-ui)',
              background: 'linear-gradient(135deg, var(--gold2), var(--gold))',
              color: 'var(--void)',
              boxShadow: '0 0 30px rgba(245,200,66,.25)',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? '⚔️ Loading...' : mode === 'login' ? '⚔️ Enter Quest' : '🌟 Create Account'}
          </button>

          <p className="text-center text-sm mt-5" style={{ color: 'var(--muted)', fontFamily: 'var(--font-ui)' }}>
            {mode === 'login' ? "No account? " : "Have an account? "}
            <button
              onClick={() => { setMode(m => m === 'login' ? 'signup' : 'login'); setError(''); setMessage(''); }}
              className="bg-transparent border-none underline"
              style={{ color: 'var(--neon2)', fontFamily: 'var(--font-ui)', fontSize: 'inherit' }}
            >
              {mode === 'login' ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>

        <p className="text-center text-xs mt-6">
          <Link href="/" className="no-underline" style={{ color: 'var(--neon2)' }}>← Back to home</Link>
        </p>
      </div>
    </div>
  )
}

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AuthConfirmPage() {
  const router = useRouter()

  useEffect(() => {
    // The fragment (#access_token=...) is only readable client-side
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        router.push('/dashboard')
      } else {
        router.push('/login?error=auth_failed')
      }
    })

    // Also check if there's already a session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push('/dashboard')
      }
    })
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--void)' }}>
      <div className="text-center">
        <span className="text-5xl block mb-4 animate-pulse">⚔️</span>
        <p className="text-sm font-bold tracking-widest uppercase" style={{ fontFamily: 'var(--font-ui)', color: 'var(--gold)' }}>
          Entering the Quest...
        </p>
      </div>
    </div>
  )
}

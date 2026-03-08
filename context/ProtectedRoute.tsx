'use client'
import { useRouter } from 'next/navigation'
import { useUser } from './UserContext'
import { useEffect, useState } from 'react'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser()
  const router = useRouter()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (loading) return

    if (!user) {
      // Small delay to allow session to hydrate from URL hash (OAuth redirect)
      const timer = setTimeout(() => {
        setReady(true)
        router.push('/login')
      }, 1500)
      return () => clearTimeout(timer)
    }

    setReady(true)
  }, [user, loading, router])

  if (loading || !ready && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--void)' }}>
        <div className="text-center">
          <div className="text-5xl mb-4" style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⚔️</div>
          <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-ui)', letterSpacing: '3px', fontSize: '.8rem' }}>
            LOADING YOUR QUEST...
          </p>
        </div>
      </div>
    )
  }

  if (!user) return null

  return <>{children}</>
}
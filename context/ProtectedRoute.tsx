'use client'

import { useRouter } from 'next/navigation'
import { useUser } from './UserContext'
import { useEffect } from 'react'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  // Show loading spinner while checking auth
  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--void)' }}>
      <div className="text-center">
        <div className="text-5xl mb-4" style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⚔️</div>
        <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-ui)', letterSpacing: '3px', fontSize: '.8rem' }}>
          LOADING YOUR QUEST...
        </p>
      </div>
    </div>
  )

  // Not logged in — render nothing while redirect happens
  if (!user) return null

  return <>{children}</>
}

import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/dashboard'

  // PKCE flow — exchange code for session
  if (code) {
    const cookieStore = await cookies()

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          },
        },
      }
    )

    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      return NextResponse.redirect(`https://effortless.quest${next}`)
    }
  }

  // Implicit flow — token comes back as a URL fragment (#access_token=...)
  // Fragments can't be read server-side, so redirect to a client page that handles it
  const hasFragment = request.url.includes('access_token=') || request.url.includes('error=')
  if (!code && hasFragment) {
    return NextResponse.redirect('https://effortless.quest/auth/confirm')
  }

  return NextResponse.redirect('https://effortless.quest/login?error=auth_failed')
}

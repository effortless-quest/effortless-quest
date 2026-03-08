import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  console.log('CALLBACK HIT:', request.url)
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  console.log('CODE:', code ? 'present' : 'missing')
  const error = searchParams.get('error')
  const next = searchParams.get('next') ?? '/dashboard'

  if (error) {
    console.log('ERROR PARAM:', error)
    return NextResponse.redirect(`https://www.effortless.quest/login?error=${error}`)
  }

  if (code) {
    console.log('Attempting code exchange...')
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

    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log('Anon key present:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)
    console.log('Exchange error:', exchangeError?.message ?? 'none')

    if (!exchangeError) {
      console.log('Success! Redirecting to dashboard')
      return NextResponse.redirect(`https://www.effortless.quest${next}`)
    }

    return NextResponse.redirect(`https://www.effortless.quest/login?error=exchange_failed&reason=${exchangeError.message}`)
  }

  console.log('No code found, redirecting to login')
  return NextResponse.redirect('https://www.effortless.quest/login?error=no_code')
}
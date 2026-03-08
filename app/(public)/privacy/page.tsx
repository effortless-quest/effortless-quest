export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: '📋',
      title: 'Information We Collect',
      content: [
        'Account information: When you sign up via Google OAuth, we receive your name, email address, and profile picture from Google.',
        'Profile data: Username, character class, avatar, and any information you choose to add to your Effortless Quest profile.',
        'Usage data: Quest completions, XP earned, leaderboard activity, charity submissions, and other in-platform actions.',
        'Technical data: IP address, browser type, device information, and cookies necessary for authentication and session management.',
      ],
    },
    {
      icon: '🎯',
      title: 'How We Use Your Information',
      content: [
        'To operate and improve the Effortless Quest platform and its gamified features.',
        'To authenticate your identity and maintain your session securely.',
        'To calculate and display XP, leaderboard rankings, and quest progress.',
        'To send platform-related notifications and updates (you may opt out at any time).',
        'To process and display charity submissions and reward claims.',
      ],
    },
    {
      icon: '🔒',
      title: 'Data Storage & Security',
      content: [
        'Your data is stored securely using Supabase (PostgreSQL), hosted on infrastructure compliant with industry security standards.',
        'We use Supabase Auth for authentication — your passwords are never stored directly by Effortless Quest.',
        'We implement row-level security (RLS) policies to ensure users can only access their own data.',
        'We do not sell, rent, or trade your personal information to third parties.',
      ],
    },
    {
      icon: '🤝',
      title: 'Third-Party Services',
      content: [
        'Google OAuth: Used for sign-in. Google\'s privacy policy governs data collected by Google during authentication. See: policies.google.com/privacy',
        'Supabase: Our backend and database provider. See: supabase.com/privacy',
        'Vercel: Our hosting provider. See: vercel.com/legal/privacy-policy',
        'Luma AI: Optional AI features. If you use Luma AI features, their privacy policy applies. See: lumalabs.ai/privacy',
      ],
    },
    {
      icon: '👤',
      title: 'Your Rights',
      content: [
        'Access: You may request a copy of the personal data we hold about you.',
        'Correction: You may update or correct your profile information at any time from your account settings.',
        'Deletion: You may request deletion of your account and associated data by contacting us.',
        'Portability: You may request an export of your data in a machine-readable format.',
        'Opt-out: You may opt out of non-essential communications at any time.',
      ],
    },
    {
      icon: '🍪',
      title: 'Cookies',
      content: [
        'We use essential cookies for authentication and session management. These are required for the platform to function.',
        'We do not use third-party advertising cookies or tracking pixels.',
        'You can disable cookies in your browser settings, but this will prevent you from logging in.',
      ],
    },
    {
      icon: '👶',
      title: "Children's Privacy",
      content: [
        'Effortless Quest is not directed at children under the age of 13.',
        'We do not knowingly collect personal information from children under 13.',
        'If you believe a child under 13 has provided us with personal information, please contact us immediately.',
      ],
    },
    {
      icon: '📝',
      title: 'Changes to This Policy',
      content: [
        'We may update this Privacy Policy from time to time. We will notify users of material changes via email or a prominent notice on the platform.',
        'Continued use of Effortless Quest after changes are posted constitutes your acceptance of the updated policy.',
        'The "Last Updated" date at the top of this page indicates when the policy was last revised.',
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[4px] uppercase mb-4" style={{ fontFamily: 'var(--font-ui)', color: 'var(--neon2)' }}>
            Legal
          </p>
          <h1 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2 }}>
            Privacy <span style={{ color: 'var(--gold)' }}>Policy</span>
          </h1>
          <p className="text-sm" style={{ color: 'var(--muted)', fontFamily: 'var(--font-ui)' }}>
            Last Updated: June 2025
          </p>
        </div>

        {/* Intro card */}
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-sm leading-8" style={{ color: 'var(--muted)' }}>
            Effortless Quest (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your information when you use{' '}
            <span style={{ color: 'var(--neon2)' }}>effortless.quest</span> and its related services.
            By creating an account or using our platform, you agree to the practices described in this policy.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl p-6"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{section.icon}</span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--gold)', letterSpacing: '1px' }}>
                  {section.title}
                </h2>
              </div>
              <ul className="flex flex-col gap-2">
                {section.content.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-7" style={{ color: 'var(--muted)' }}>
                    <span style={{ color: 'var(--neon2)', marginTop: '2px', flexShrink: 0 }}>›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="rounded-2xl p-8 mt-8 text-center" style={{ background: 'rgba(124,58,237,.06)', border: '1px solid var(--border)' }}>
          <p className="text-xs font-bold tracking-[4px] uppercase mb-3" style={{ fontFamily: 'var(--font-ui)', color: 'var(--neon2)' }}>
            Questions?
          </p>
          <h3 className="mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--gold)' }}>
            Contact Us
          </h3>
          <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
            If you have any questions about this Privacy Policy or how we handle your data, please reach out.
          </p>
          <a
            href="mailto:privacy@effortless.quest"
            className="inline-block px-6 py-3 rounded-xl text-sm font-bold tracking-widest uppercase no-underline"
            style={{ fontFamily: 'var(--font-ui)', background: 'linear-gradient(135deg, var(--gold2), var(--gold))', color: 'var(--void)' }}
          >
            privacy@effortless.quest
          </a>
        </div>

      </div>
    </div>
  );
}

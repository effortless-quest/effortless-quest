export default function TermsOfServicePage() {
  const sections = [
    {
      icon: '⚔️',
      title: 'Acceptance of Terms',
      content: [
        'By creating an account or using Effortless Quest, you agree to be bound by these Terms of Service and our Privacy Policy.',
        'If you do not agree to these terms, please do not use the platform.',
        'We reserve the right to update these terms at any time. Continued use of the platform after changes are posted constitutes acceptance.',
        'You must be at least 13 years old to use Effortless Quest. By using the platform, you confirm you meet this requirement.',
      ],
    },
    {
      icon: '👤',
      title: 'Your Account',
      content: [
        'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.',
        'You must provide accurate and truthful information when creating your profile.',
        'You may not create multiple accounts for the purpose of gaining unfair advantages on leaderboards or in competitions.',
        'You may not share your account with others or allow others to use your account.',
        'You must notify us immediately if you suspect unauthorized access to your account.',
      ],
    },
    {
      icon: '🏆',
      title: 'Platform Rules & Fair Play',
      content: [
        'XP, quest completions, and leaderboard rankings must reflect genuine real-life activity. Falsifying submissions is strictly prohibited.',
        'Charity submissions must be truthful and verifiable. Submitting fake or exaggerated charity claims may result in permanent account suspension.',
        'You may not use bots, scripts, or automated tools to earn XP or complete quests.',
        'Exploiting bugs or glitches to gain unfair advantages is prohibited. Please report any bugs you discover to our team.',
        'Collaborative cheating — coordinating with others to artificially inflate rankings — is prohibited.',
      ],
    },
    {
      icon: '💬',
      title: 'User Conduct',
      content: [
        'You agree not to use the platform to harass, threaten, or harm other users.',
        'You may not post content that is hateful, discriminatory, obscene, or illegal.',
        'You may not impersonate other users, public figures, or Effortless Quest staff.',
        'You may not use the platform for any unlawful purpose or in violation of any applicable laws or regulations.',
        'We reserve the right to remove content and suspend accounts that violate these standards without prior notice.',
      ],
    },
    {
      icon: '🏛️',
      title: 'Business Center & Competitions',
      content: [
        'Participation in business tournaments and competitions is subject to additional rules posted within those features.',
        'Businesses listed on the platform must be legitimate, legal entities. Fraudulent business listings will be removed.',
        'Effortless Quest does not guarantee any business outcomes, leads, or commercial results from participation on the platform.',
        'Rankings and awards within the Business Center are for recognition purposes only and carry no monetary value unless explicitly stated.',
      ],
    },
    {
      icon: '💚',
      title: 'Charity Center',
      content: [
        'Charity submissions are subject to review and approval by Effortless Quest administrators.',
        'We reserve the right to reject submissions that do not meet our standards or cannot be verified.',
        'Effortless Quest does not directly handle charitable funds. All donations and charitable acts are between you and the relevant organizations.',
        'XP awarded for charity activity is at the sole discretion of Effortless Quest administrators.',
      ],
    },
    {
      icon: '🎁',
      title: 'Rewards',
      content: [
        'Rewards listed in the Rewards Center are subject to availability and may be modified or removed at any time.',
        'XP and reward points have no monetary value and cannot be transferred, sold, or exchanged for cash.',
        'We reserve the right to adjust, revoke, or reset XP and reward balances in cases of abuse or system errors.',
        'Reward fulfillment timelines are estimates and not guarantees.',
      ],
    },
    {
      icon: '🔐',
      title: 'Intellectual Property',
      content: [
        'All platform content, branding, graphics, and code are owned by Effortless Quest and protected by applicable intellectual property laws.',
        'You retain ownership of content you submit (such as profile information and charity submissions), but grant us a license to display and use it on the platform.',
        'You may not copy, reproduce, or redistribute platform content without written permission.',
      ],
    },
    {
      icon: '⚠️',
      title: 'Disclaimers & Limitation of Liability',
      content: [
        'Effortless Quest is provided "as is" without warranties of any kind, express or implied.',
        'We do not guarantee uninterrupted, error-free access to the platform.',
        'We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform.',
        'Our total liability to you for any claim arising from these terms shall not exceed the amount you paid us in the past 12 months (if any).',
        'We are not responsible for third-party content, services, or websites linked from the platform.',
      ],
    },
    {
      icon: '🚫',
      title: 'Termination',
      content: [
        'We reserve the right to suspend or terminate your account at any time for violations of these Terms of Service.',
        'You may delete your account at any time by contacting us or using the account deletion feature.',
        'Upon termination, your access to the platform will cease and your data may be deleted in accordance with our Privacy Policy.',
        'Provisions of these terms that by their nature should survive termination will remain in effect.',
      ],
    },
    {
      icon: '⚖️',
      title: 'Governing Law',
      content: [
        'These Terms of Service are governed by the laws of the United States.',
        'Any disputes arising from these terms shall be resolved through binding arbitration, except where prohibited by law.',
        'You agree to resolve disputes individually and waive any right to class action proceedings.',
        'If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force.',
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
            Terms of <span style={{ color: 'var(--gold)' }}>Service</span>
          </h1>
          <p className="text-sm" style={{ color: 'var(--muted)', fontFamily: 'var(--font-ui)' }}>
            Last Updated: June 2025
          </p>
        </div>

        {/* Intro card */}
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-sm leading-8" style={{ color: 'var(--muted)' }}>
            Welcome to Effortless Quest. These Terms of Service govern your use of{' '}
            <span style={{ color: 'var(--neon2)' }}>effortless.quest</span> and all related features and services.
            Please read them carefully before using the platform. These terms form a binding legal agreement between you and Effortless Quest.
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

        {/* Footer links */}
        <div className="rounded-2xl p-8 mt-8 text-center" style={{ background: 'rgba(124,58,237,.06)', border: '1px solid var(--border)' }}>
          <p className="text-xs font-bold tracking-[4px] uppercase mb-3" style={{ fontFamily: 'var(--font-ui)', color: 'var(--neon2)' }}>
            Questions?
          </p>
          <h3 className="mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--gold)' }}>
            Contact Us
          </h3>
          <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
            If you have questions about these Terms of Service, please reach out.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:legal@effortless.quest"
              className="inline-block px-6 py-3 rounded-xl text-sm font-bold tracking-widest uppercase no-underline"
              style={{ fontFamily: 'var(--font-ui)', background: 'linear-gradient(135deg, var(--gold2), var(--gold))', color: 'var(--void)' }}
            >
              legal@effortless.quest
            </a>
            <a
              href="/privacy"
              className="inline-block px-6 py-3 rounded-xl text-sm font-bold tracking-widest uppercase no-underline"
              style={{ fontFamily: 'var(--font-ui)', background: 'transparent', border: '1.5px solid var(--border2)', color: 'var(--text)' }}
            >
              Privacy Policy →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

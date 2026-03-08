# ⚔️ Effortless Quest

A gamified real-life RPG platform for personal development, business growth, and community impact.

## 🏗️ Project Structure

```
effortless-quest/
├── app/
│   ├── (public)/           ← Public pages (no login required)
│   │   ├── page.tsx        ← Home page
│   │   ├── layout.tsx      ← Public layout (PublicNav + Footer)
│   │   ├── about/          ← About page
│   │   ├── login/          ← Login / Sign Up
│   │   └── roadmap/        ← Public roadmap
│   │
│   ├── (dashboard)/        ← Protected pages (login required)
│   │   ├── layout.tsx      ← Dashboard layout (Sidebar + ProtectedRoute)
│   │   ├── dashboard/      ← Dashboard home
│   │   ├── leaderboards/   ← Leaderboards
│   │   ├── rewards/        ← Rewards center
│   │   ├── my-team/        ← Team/guild management
│   │   ├── business-center/
│   │   ├── education-center/
│   │   ├── invention-center/
│   │   ├── charity-center/
│   │   ├── town-hall/
│   │   ├── luma-ai/
│   │   └── info/roadmap/   ← Roadmap (under Info dropdown)
│   │
│   ├── layout.tsx          ← Root layout (UserProvider)
│   ├── page.tsx            ← Redirects to (public)/page.tsx
│   └── globals.css         ← Global styles + CSS variables
│
├── components/
│   ├── public/             ← Public-facing sections
│   │   ├── PublicNav.tsx
│   │   ├── PublicFooter.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HowToPlaySection.tsx
│   │   ├── CentersPreview.tsx
│   │   ├── LumaSection.tsx
│   │   ├── RoadmapSection.tsx
│   │   └── CTASection.tsx
│   │
│   ├── dashboard/
│   │   └── DashboardNav.tsx  ← Sidebar with dropdown
│   │
│   └── shared/
│       ├── CustomCursor.tsx
│       ├── StarField.tsx
│       ├── XPBanner.tsx
│       └── UnderConstruction.tsx
│
├── context/
│   ├── UserContext.tsx      ← Firebase auth context
│   └── ProtectedRoute.tsx  ← Route guard
│
├── firebase/
│   ├── firebaseConfig.ts   ← Firebase initialization
│   └── firebaseService.ts  ← Firebase helpers
│
├── lib/
│   └── data.ts             ← Static data (leaderboards, quests, etc.)
│
└── types/
    └── index.ts            ← TypeScript types
```

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Firebase
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project (or use existing)
3. Enable **Authentication** (Email/Password + Google)
4. Copy `.env.local.example` → `.env.local`
5. Fill in your Firebase credentials

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
# Settings → Environment Variables → add all NEXT_PUBLIC_FIREBASE_* vars
```

## 🎮 Page Map

| URL | Description | Auth Required |
|-----|-------------|:---:|
| `/` | Home — Hero, How To Play, Centers, Luma AI, Roadmap, CTA | ❌ |
| `/about` | About page with pillars & sister sites | ❌ |
| `/login` | Login / Sign Up with Google + Email | ❌ |
| `/dashboard` | Player dashboard with quests & stats | ✅ |
| `/leaderboards` | Individual & Business leaderboards | ✅ |
| `/rewards` | Weekly, Monthly, Yearly, Charity rewards | ✅ |
| `/my-team` | Guild roster, quests, activity feed | ✅ |
| `/business-center` | Business Center (coming soon) | ✅ |
| `/education-center` | Education Center (coming soon) | ✅ |
| `/invention-center` | Invention Center (coming soon) | ✅ |
| `/charity-center` | Charity missions & impact stats | ✅ |
| `/town-hall` | Community hub (coming soon) | ✅ |
| `/luma-ai` | Luma AI showcase + download links | ✅ |
| `/info/roadmap` | Road Map (under Info dropdown) | ✅ |

## 🎨 Design System

**Colors** (CSS variables in `globals.css`):
- `--void`: #03020a — Page background
- `--gold`: #f5c842 — Primary accent
- `--neon` / `--neon2`: #7c3aed / #a855f7 — Purple neon
- `--cyan`: #06b6d4 — Luma AI / cyan
- `--green`: #22c55e — Charity / success

**Fonts**:
- `Cinzel Decorative` — Headings / display
- `Rajdhani` — Body text
- `Exo 2` — UI labels / buttons

## 📋 Environment Variables

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

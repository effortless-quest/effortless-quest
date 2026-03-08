import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel Decorative', 'serif'],
        body: ['Rajdhani', 'sans-serif'],
        ui: ['Exo 2', 'sans-serif'],
      },
      colors: {
        void: '#03020a',
        deep: '#070514',
        'eq-card': '#110e24',
        'eq-border': '#2a1f4e',
        gold: '#f5c842',
        neon: '#7c3aed',
        'neon2': '#a855f7',
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Metadata } from 'next';
import { UserProvider } from '@/context/UserContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Effortless Quest — Gamify Your Life',
  description: 'A gamified platform for personal development, business growth, and community impact.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}

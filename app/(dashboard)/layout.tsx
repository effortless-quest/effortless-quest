import DashboardNav from '@/components/dashboard/DashboardNav';
import StarField from '@/components/shared/StarField';
import CustomCursor from '@/components/shared/CustomCursor';
import ProtectedRoute from '@/context/ProtectedRoute';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <CustomCursor />
      <StarField />
      <DashboardNav />
      {/* Main content offset for sidebar */}
      <main className="md:ml-64 pt-16 md:pt-0 min-h-screen relative z-10" style={{ background: 'var(--void)' }}>
        {children}
      </main>
    </ProtectedRoute>
  );
}

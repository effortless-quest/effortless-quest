import PublicNav from '@/components/public/PublicNav';
import PublicFooter from '@/components/public/PublicFooter';
import StarField from '@/components/shared/StarField';
import CustomCursor from '@/components/shared/CustomCursor';


export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StarField />
      <CustomCursor />
      <PublicNav />
      <main className="relative z-10">
        {children}
      </main>
      <PublicFooter />
    </>
  );
}

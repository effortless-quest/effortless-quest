import LumaSection from '@/components/public/LumaSection';
export default function LumaAIPage() {
  return (
    <div className="p-6 max-w-6xl">
      <div className="mb-4">
        <p className="text-xs font-bold tracking-[4px] uppercase mb-2" style={{ fontFamily: 'var(--font-ui)', color: 'var(--cyan)' }}>AI Partner</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--gold)' }}>Luma AI Hub ⬡</h1>
      </div>
      <LumaSection />
    </div>
  );
}

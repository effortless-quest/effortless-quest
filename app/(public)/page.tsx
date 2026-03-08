import HeroSection from '@/components/public/HeroSection';
import XPBanner from '@/components/shared/XPBanner';
import HowToPlaySection from '@/components/public/HowToPlaySection';
import CentersPreview from '@/components/public/CentersPreview';
import LumaSection from '@/components/public/LumaSection';
import RoadmapSection from '@/components/public/RoadmapSection';
import CTASection from '@/components/public/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <XPBanner />
      <HowToPlaySection />
      <CentersPreview />
      <LumaSection />
      <RoadmapSection />
      <CTASection />
    </>
  );
}

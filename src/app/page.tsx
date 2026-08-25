import { buildPageMetadata } from '@/lib/metadataHelpers';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { ClosingSection } from '@/components/home/ClosingSection';
import { HeroSection } from '@/components/home/HeroSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { SpecialtiesSection } from '@/components/home/SpecialtiesSection';
import { ProviderPromoCard } from '@/components/promocoes/ProviderPromoCard';

export const metadata = buildPageMetadata({
  title: 'Início',
  ogTitle: 'ChamadoPro',
  description:
    'Pare de perder tempo procurando indicações. Fale o serviço que precisa e o ChamadoPro cuida do resto — com pagamento protegido.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <section className="home-section border-b border-gray-100 bg-cp-background">
        <div className="home-container">
          <ProviderPromoCard featured />
        </div>
      </section>
      <SpecialtiesSection />
      <ClosingSection />
    </>
  );
}

import { buildPageMetadata } from '@/lib/metadataHelpers';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { ClosingSection } from '@/components/home/ClosingSection';
import { HeroSection } from '@/components/home/HeroSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { SpecialtiesSection } from '@/components/home/SpecialtiesSection';

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
      <SpecialtiesSection />
      <ClosingSection />
    </>
  );
}

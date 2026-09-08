import { buildPageMetadata } from '@/lib/metadataHelpers';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { ClosingSection } from '@/components/home/ClosingSection';
import { HeroSection } from '@/components/home/HeroSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { SpecialtiesSection } from '@/components/home/SpecialtiesSection';

export const metadata = buildPageMetadata({
  title: 'ChamadoPro — Encontre Profissionais e Receba Orçamentos',
  ogTitle: 'ChamadoPro | Encontre Profissionais e Receba Orçamentos',
  description:
    'Precisa de reformas, eletricista, encanador, pintura ou limpeza? Publique seu pedido gratuitamente no ChamadoPro e receba orçamentos de profissionais da sua região com pagamento protegido.',
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

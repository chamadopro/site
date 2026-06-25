import { CategoryGrid, CtaSection, HeroSection } from '@/components/home/HomeSections';
import { fetchCatalogo } from '@/lib/catalog';

export default async function HomePage() {
  const categorias = await fetchCatalogo();

  return (
    <>
      <HeroSection />
      <CategoryGrid categorias={categorias} />
      <CtaSection />
    </>
  );
}

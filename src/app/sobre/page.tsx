import { ContentSection, PageHero } from '@/components/layout/PageShell';
import { buildPageMetadata } from '@/lib/metadataHelpers';

export const metadata = buildPageMetadata({
  title: 'Sobre',
  description:
    'Conheça o ChamadoPro: marketplace de serviços que conecta clientes e prestadores com transparência e segurança.',
  path: '/sobre',
});

export default function SobrePage() {
  return (
    <>
      <PageHero
        title="Sobre o ChamadoPro"
        description="Construímos uma forma mais segura e transparente de contratar serviços locais — para quem precisa resolver algo em casa ou no negócio, e para quem vive do seu ofício."
      />
      <ContentSection narrow>
        <div className="page-body space-y-6">
          <p>
            O ChamadoPro nasceu da necessidade de organizar a contratação de serviços: menos
            incerteza sobre preço, mais clareza no que será feito e maior proteção no pagamento.
          </p>
          <p>
            Clientes publicam pedidos; prestadores enviam orçamentos; a plataforma facilita a
            escolha, o pagamento e a avaliação. Tudo pensado para reduzir atrito e aumentar a
            confiança entre as partes.
          </p>
          <p>
            Estamos em crescimento e evoluindo o produto com feedback de clientes, prestadores e
            parceiros. Nossa missão é tornar serviços locais mais acessíveis, profissionais e
            confiáveis.
          </p>
        </div>
      </ContentSection>
    </>
  );
}

import { ContentSection, PageHero } from '@/components/layout/PageShell';
import { siteContact } from '@/config/appLinks';
import { buildPageMetadata } from '@/lib/metadataHelpers';

export const metadata = buildPageMetadata({
  title: 'Parceiros',
  description: 'Conheça parceiros do ChamadoPro e oportunidades de parceria comercial.',
  path: '/parceiros',
});

export default function ParceirosPage() {
  return (
    <>
      <PageHero
        title="Parceiros"
        description="Empresas e profissionais que colaboram com o ecossistema ChamadoPro."
      />
      <ContentSection narrow>
        <div className="rounded-2xl border border-cp-border bg-white p-5 text-center sm:p-6 lg:p-8">
          <p className="page-body">
            Em breve exibiremos aqui os parceiros em destaque, sincronizados com a plataforma.
          </p>
          <p className="page-body mt-4">
            Interessado em parceria?{' '}
            <a
              href={siteContact.mailto}
              className="font-medium text-brand-orange transition-colors hover:text-[#e85a20]"
            >
              {siteContact.email}
            </a>
          </p>
        </div>
      </ContentSection>
    </>
  );
}

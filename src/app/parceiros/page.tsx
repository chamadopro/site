import type { Metadata } from 'next';
import { ContentSection, PageHero } from '@/components/layout/PageShell';
import { siteContact } from '@/config/appLinks';

export const metadata: Metadata = {
  title: 'Parceiros',
  description: 'Conheça parceiros do ChamadoPro e oportunidades de parceria comercial.',
};

export default function ParceirosPage() {
  return (
    <>
      <PageHero
        title="Parceiros"
        description="Empresas e profissionais que colaboram com o ecossistema ChamadoPro."
      />
      <ContentSection narrow>
        <div className="rounded-cp-card border border-cp-border bg-cp-surface p-8 shadow-cp text-center">
          <p className="text-cp-text-secondary">
            Em breve exibiremos aqui os parceiros em destaque, sincronizados com a plataforma.
          </p>
          <p className="mt-4 text-sm text-cp-text-secondary">
            Interessado em parceria?{' '}
            <a href={siteContact.mailto} className="font-medium text-cp-accent hover:underline">
              {siteContact.email}
            </a>
          </p>
        </div>
      </ContentSection>
    </>
  );
}

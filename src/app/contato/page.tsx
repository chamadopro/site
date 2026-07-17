import { ContentSection, PageHero } from '@/components/layout/PageShell';
import { siteContact } from '@/config/appLinks';
import { buildPageMetadata } from '@/lib/metadataHelpers';

export const metadata = buildPageMetadata({
  title: 'Contato',
  description: 'Fale com o time ChamadoPro por e-mail.',
  path: '/contato',
});

export default function ContatoPage() {
  return (
    <>
      <PageHero
        title="Contato"
        description="Dúvidas, parcerias ou suporte? Envie uma mensagem para nossa equipe."
      />
      <ContentSection narrow>
        <div className="rounded-2xl border border-cp-border bg-white p-5 sm:p-6 lg:p-8">
          <h2 className="page-h2 text-cp-text-primary">
            E-mail
          </h2>
          <p className="page-body mt-2">
            Para atendimento geral, parcerias e dúvidas sobre a plataforma:
          </p>
          <a
            href={siteContact.mailto}
            className="mt-4 inline-block text-lg font-medium text-brand-orange transition-colors hover:text-[#e85a20]"
          >
            {siteContact.email}
          </a>
          <p className="page-body mt-6">
            Se você já tem conta, também pode acessar o suporte pelo aplicativo após o login.
          </p>
        </div>
      </ContentSection>
    </>
  );
}

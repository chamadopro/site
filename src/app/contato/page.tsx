import type { Metadata } from 'next';
import { ContentSection, PageHero } from '@/components/layout/PageShell';
import { siteContact } from '@/config/appLinks';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Fale com o time ChamadoPro por e-mail.',
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        title="Contato"
        description="Dúvidas, parcerias ou suporte? Envie uma mensagem para nossa equipe."
      />
      <ContentSection narrow>
        <div className="rounded-cp-card border border-cp-border bg-cp-surface p-8 shadow-cp">
          <h2 className="text-lg font-semibold text-cp-text-primary">E-mail</h2>
          <p className="mt-2 text-cp-text-secondary">
            Para atendimento geral, parcerias e dúvidas sobre a plataforma:
          </p>
          <a
            href={siteContact.mailto}
            className="mt-4 inline-block text-lg font-medium text-cp-accent hover:underline"
          >
            {siteContact.email}
          </a>
          <p className="mt-6 text-sm text-cp-text-secondary">
            Se você já tem conta, também pode acessar o suporte pelo aplicativo após o login.
          </p>
        </div>
      </ContentSection>
    </>
  );
}

import type { Metadata } from 'next';
import { ContentSection, CtaBlock, PageHero } from '@/components/layout/PageShell';
import { appLinks } from '@/config/appLinks';

export const metadata: Metadata = {
  title: 'Para prestadores',
  description:
    'Receba oportunidades na sua região, envie orçamentos e gerencie seus serviços pelo ChamadoPro.',
};

const benefits = [
  'Leads de clientes que já descreveram o que precisam',
  'Oportunidades filtradas por especialidade e região',
  'Fluxo de orçamento e negociação dentro da plataforma',
  'Reputação com avaliações reais de clientes',
  'Vitrine e visibilidade para destacar seu trabalho',
  'Gestão financeira integrada ao ciclo do serviço',
];

export default function ParaPrestadoresPage() {
  return (
    <>
      <PageHero
        title="Para prestadores"
        description="Amplie sua carteira de clientes com pedidos reais na sua área de atuação — sem depender apenas de boca a boca."
      />
      <ContentSection narrow>
        <ul className="space-y-4">
          {benefits.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-cp-card border border-cp-border bg-cp-surface p-4 shadow-cp"
            >
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-cp-brand-blue" />
              <span className="text-cp-text-secondary">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <CtaBlock
            title="Cadastre-se como prestador"
            description="Informe suas especialidades e comece a receber oportunidades compatíveis com o seu perfil."
            primaryHref={appLinks.cadastroPrestador}
            primaryLabel="Criar conta de prestador"
            secondaryHref="/como-funciona"
            secondaryLabel="Como funciona"
            external
          />
        </div>
      </ContentSection>
    </>
  );
}

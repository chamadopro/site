import type { Metadata } from 'next';
import { ContentSection, CtaBlock, PageHero } from '@/components/layout/PageShell';
import { appLinks } from '@/config/appLinks';

export const metadata: Metadata = {
  title: 'Para clientes',
  description:
    'Peça serviços gratuitamente, compare orçamentos e contrate profissionais com pagamento protegido no ChamadoPro.',
};

const benefits = [
  'Pedido gratuito — você só paga quando aceitar um orçamento',
  'Vários orçamentos para comparar preço, prazo e reputação',
  'Pagamento em custódia até a conclusão do serviço',
  'Avaliações de outros clientes para decidir com mais confiança',
  'Chama.AI para ajudar a descrever o problema com texto ou áudio',
  'Suporte em caso de dúvidas ou imprevistos',
];

export default function ParaClientesPage() {
  return (
    <>
      <PageHero
        title="Para clientes"
        description="Resolva reformas, reparos e serviços do dia a dia com profissionais perto de você. Solicite orçamentos pelo aplicativo ChamadoPro."
      />
      <ContentSection narrow>
        <ul className="space-y-4">
          {benefits.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-cp-card border border-cp-border bg-cp-surface p-4 shadow-cp"
            >
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-cp-accent" />
              <span className="text-cp-text-secondary">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <CtaBlock
            title="Publique seu pedido no app"
            description="Entre no ChamadoPro ou crie sua conta para solicitar serviços e receber orçamentos."
            primaryHref={appLinks.entrarParaPedirServico()}
            primaryLabel="Entrar no app"
            secondaryHref={appLinks.cadastrarCliente}
            secondaryLabel="Criar conta"
            external
          />
        </div>
      </ContentSection>
    </>
  );
}

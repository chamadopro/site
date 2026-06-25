import type { Metadata } from 'next';
import { ContentSection, CtaBlock, PageHero } from '@/components/layout/PageShell';
import { appLinks } from '@/config/appLinks';

export const metadata: Metadata = {
  title: 'Como funciona',
  description:
    'Entenda como pedir serviços e como prestar serviços no ChamadoPro: orçamentos, pagamento seguro e avaliações.',
};

const clientSteps = [
  {
    title: '1. Entre no app e publique o que precisa',
    body: 'Faça login no ChamadoPro e descreva o serviço, local e urgência. Você pode usar texto, fotos ou o Chama.AI.',
  },
  {
    title: '2. Receba orçamentos',
    body: 'Prestadores da sua região enviam propostas com valor, prazo e detalhes para você comparar.',
  },
  {
    title: '3. Escolha e pague com segurança',
    body: 'Ao aceitar um orçamento, o pagamento fica em custódia até a conclusão do serviço.',
  },
  {
    title: '4. Avalie o profissional',
    body: 'Depois do serviço, sua avaliação ajuda outros clientes e fortalece a reputação dos bons prestadores.',
  },
];

const providerSteps = [
  {
    title: '1. Cadastre-se como prestador',
    body: 'Informe suas especialidades, área de atuação e documentação para começar a receber oportunidades.',
  },
  {
    title: '2. Veja pedidos na região',
    body: 'Acesse oportunidades compatíveis com o que você faz e envie orçamentos competitivos.',
  },
  {
    title: '3. Execute e receba',
    body: 'Após a aprovação do cliente e conclusão do serviço, o repasse segue o fluxo financeiro da plataforma.',
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <PageHero
        title="Como funciona o ChamadoPro"
        description="Uma plataforma que conecta quem precisa de um serviço a profissionais da região, com orçamentos transparentes e pagamento protegido."
      />
      <ContentSection>
        <h2 className="text-2xl font-bold text-cp-text-primary">Para clientes</h2>
        <div className="mt-6 space-y-6">
          {clientSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-cp-card border border-cp-border bg-cp-surface p-5 shadow-cp"
            >
              <h3 className="font-semibold text-cp-text-primary">{step.title}</h3>
              <p className="mt-2 text-cp-text-secondary">{step.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-cp-text-primary">Para prestadores</h2>
        <div className="mt-6 space-y-6">
          {providerSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-cp-card border border-cp-border bg-cp-surface p-5 shadow-cp"
            >
              <h3 className="font-semibold text-cp-text-primary">{step.title}</h3>
              <p className="mt-2 text-cp-text-secondary">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <CtaBlock
            title="Comece no aplicativo"
            description="Crie sua conta ou entre no ChamadoPro para publicar pedidos e receber orçamentos."
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

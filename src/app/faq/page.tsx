import type { Metadata } from 'next';
import { ContentSection, CtaBlock, PageHero } from '@/components/layout/PageShell';
import { appLinks } from '@/config/appLinks';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Perguntas frequentes sobre pagamento, taxas, cadastro e suporte no ChamadoPro.',
};

const faqs = [
  {
    q: 'Posso pedir serviço por este site?',
    a: 'Não. Este site é institucional e apresenta os serviços disponíveis. Para solicitar orçamentos, entre ou cadastre-se no aplicativo ChamadoPro (app.chamadopro.com.br).',
  },
  {
    q: 'É gratuito pedir um serviço?',
    a: 'Sim. Criar conta e publicar um pedido no app é gratuito para clientes. Você paga apenas quando aceitar um orçamento.',
  },
  {
    q: 'Como funciona o pagamento seguro?',
    a: 'Ao aceitar um orçamento, o valor é processado e fica em custódia até a conclusão do serviço, conforme as regras da plataforma.',
  },
  {
    q: 'Quais taxas a plataforma cobra?',
    a: 'As taxas aplicáveis são informadas de forma transparente no fluxo de pagamento e nos termos de uso, antes da confirmação.',
  },
  {
    q: 'Como me cadastro como prestador?',
    a: 'Acesse o cadastro de prestador no app, informe suas especialidades, documentação e área de atuação para começar a receber oportunidades.',
  },
  {
    q: 'E se houver um problema com o serviço?',
    a: 'Entre em contato pelo suporte da plataforma. Temos fluxos para mediação conforme os termos de uso.',
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Perguntas frequentes"
        description="Respostas rápidas sobre como usar o ChamadoPro como cliente ou prestador."
      />
      <ContentSection narrow>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-cp-card border border-cp-border bg-cp-surface p-5 shadow-cp"
            >
              <summary className="cursor-pointer list-none font-semibold text-cp-text-primary marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-cp-text-secondary">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10">
          <CtaBlock
            title="Ainda com dúvidas?"
            description="Acesse o app ou fale com nosso time pelo e-mail de contato."
            primaryHref={appLinks.login}
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

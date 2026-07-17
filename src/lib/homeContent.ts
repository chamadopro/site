/** Copy e dados estáticos da home — refatoração landing (vitrine → app). */

export const homeCtas = {
  client: 'Preciso de um profissional',
  provider: 'Sou um profissional',
  start: 'Começar agora',
} as const;

export const homeHero = {
  headline: 'Pare de perder tempo procurando indicações.',
  lead: 'Basta falar o serviço que precisa. O ChamadoPro cuida do resto.',
} as const;

export const homeHowItWorks = {
  title: 'Como funciona',
  steps: [
    {
      step: '01',
      color: 'orange' as const,
      icon: 'speak' as const,
      title: 'Fale ou escreva o serviço',
    },
    {
      step: '02',
      color: 'blue' as const,
      icon: 'organize' as const,
      title: 'O ChamadoPro organiza sua solicitação',
    },
    {
      step: '03',
      color: 'green' as const,
      icon: 'notify' as const,
      title: 'Profissionais da região recebem',
    },
    {
      step: '04',
      color: 'orange' as const,
      icon: 'choose' as const,
      title: 'Compare orçamentos e escolha',
    },
    {
      step: '05',
      color: 'blue' as const,
      icon: 'pay' as const,
      title: 'Pague com segurança pelo ChamadoPro',
    },
  ],
} as const;

export type HomeHowItWorksStepColor =
  (typeof homeHowItWorks.steps)[number]['color'];

export const homeBenefits = {
  client: {
    title: 'Para clientes',
    items: [
      'Publicação gratuita',
      'Profissionais qualificados',
      'Pagamento protegido',
      'Avaliações reais',
    ],
  },
  provider: {
    title: 'Para prestadores',
    items: [
      'Cadastro gratuito',
      'Oportunidades qualificadas',
      'Publicidade gratuita',
      'Recebimento protegido',
    ],
  },
} as const;

export const homeSpecialtyTags = {
  title: 'Atendemos centenas de especialidades',
  tags: [
    'Eletricista',
    'Encanador',
    'Pedreiro',
    'Pintor',
    'Diarista',
    'Jardinagem',
    'Ar-condicionado',
    'Chaveiro',
    'Informática',
    '+200 especialidades',
  ],
  catalogLink: 'Ver catálogo completo',
} as const;

export const homeSecurity = {
  title: 'Contrate com segurança',
  items: [
    {
      icon: 'shield' as const,
      title: 'Pagamento protegido',
    },
    {
      icon: 'star' as const,
      title: 'Avaliações',
    },
    {
      icon: 'map' as const,
      title: 'Profissionais da região',
    },
    {
      icon: 'check' as const,
      title: 'Contratação segura',
    },
  ],
} as const;

export const homeClosing = {
  title: 'Pronto para encontrar o profissional certo?',
  body: 'Publique gratuitamente sua necessidade e receba orçamentos de profissionais da sua região.',
  cta: 'Começar agora',
} as const;

/** Fluxo completo (7 passos) — reservado para /como-funciona ou uso futuro. */
export const homeFullFlow = {
  title: 'Do pedido ao pagamento protegido',
  subtitle: 'Para qualquer serviço. Para qualquer necessidade.',
  steps: [
    {
      step: '01',
      color: 'orange' as const,
      icon: 'publish' as const,
      title: 'Você publica o serviço',
      body: 'Conte o que precisa com texto, foto ou voz. É rápido e fácil.',
    },
    {
      step: '02',
      color: 'blue' as const,
      icon: 'notify' as const,
      title: 'Profissionais são avisados',
      body: 'Quem tem a especialidade certa recebe o pedido e pode te atender.',
    },
    {
      step: '03',
      color: 'green' as const,
      icon: 'quotes' as const,
      title: 'Você recebe orçamentos',
      body: 'Compare preços, prazos, avaliações e escolha o melhor.',
    },
    {
      step: '04',
      color: 'blue' as const,
      icon: 'shield' as const,
      title: 'Você escolhe e paga com segurança',
      body: 'O pagamento fica protegido pelo ChamadoPro até a conclusão do serviço.',
    },
    {
      step: '05',
      color: 'orange' as const,
      icon: 'work' as const,
      title: 'O profissional realiza o serviço',
      body: 'O trabalho é executado com qualidade e compromisso.',
    },
    {
      step: '06',
      color: 'green' as const,
      icon: 'approve' as const,
      title: 'Cliente e prestador confirmam a entrega do serviço',
      body: 'Os dois lados validam que tudo ficou certo antes da liberação do pagamento.',
    },
    {
      step: '07',
      color: 'blue' as const,
      icon: 'payout' as const,
      title: 'Pagamento liberado ao profissional',
      body: 'O ChamadoPro libera o pagamento de forma segura e automática.',
    },
  ],
} as const;

export type HomeFullFlowStepColor =
  (typeof homeFullFlow.steps)[number]['color'];

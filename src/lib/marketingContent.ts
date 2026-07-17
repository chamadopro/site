/**
 * Copy de marketing público — narrativa rede social ChamadoPro.
 * Não exportar menções à marca Chama.AI neste arquivo.
 */

export const heroCopy = {
  eyebrow: 'Você chegou no lugar certo',
  title: 'Poste o que precisa.\nA região responde.',
  subtitle:
    'O ChamadoPro é a rede da sua cidade para resolver serviços — como uma timeline, mas para encanador, pintor, diarista e muito mais.',
  composerPlaceholder: 'O que está acontecendo aí em casa?',
  composerHint: 'Toque para publicar — texto, áudio ou foto',
  ctaPrimary: 'Fazer minha publicação',
  ctaProvider: 'Criar meu perfil profissional',
  flowAnchor: 'Como funciona depois do post',
} as const;

export const trustPills = [
  { label: 'Grátis para publicar' },
  { label: 'Pagamento protegido' },
  { label: 'Avaliações reais' },
] as const;

export const feedPreviewPosts = [
  {
    id: 'client',
    author: 'Maria',
    meta: 'Campinas, SP · há 2 h',
    body: 'Torneira vazando embaixo da pia — alguém indica um encanador bom?',
    stat: '3 orçamentos · 12 visualizações',
    accent: 'client' as const,
  },
  {
    id: 'provider',
    author: 'João Encanamentos',
    meta: 'Prestador · Campinas',
    body: 'Antes e depois — banheiro reformado em 3 dias. Orçamento sem compromisso.',
    stat: '★ 4,9 · 28 trabalhos',
    accent: 'provider' as const,
  },
] as const;

/** Home: 4 momentos — detalhe completo em /como-funciona. */
export const homeFlowSteps = [
  {
    title: 'Você publica',
    description: 'Conte o problema como num post — texto, áudio ou foto.',
  },
  {
    title: 'Aparece no feed',
    description: 'Profissionais e vizinhos da região veem e podem indicar.',
  },
  {
    title: 'Recebe respostas',
    description: 'Orçamentos chegam na publicação para você comparar.',
  },
  {
    title: 'Escolhe e pronto',
    description: 'Contrata com pagamento protegido até o serviço acabar.',
  },
] as const;

export const metadataCopy = {
  home: {
    title: 'Início',
    description:
      'ChamadoPro — a rede da sua região para resolver serviços. Publique o que precisa, receba orçamentos e indicações perto de você.',
  },
  paraClientes: {
    title: 'Para clientes',
    description:
      'Publique seu pedido na comunidade ChamadoPro, receba indicações, compare orçamentos e contrate com pagamento protegido.',
  },
  paraPrestadores: {
    title: 'Para prestadores',
    description:
      'Receba oportunidades na sua região, envie orçamentos e receba pela plataforma ChamadoPro.',
  },
  comoFunciona: {
    title: 'Como funciona',
    description:
      'Entenda a jornada do cliente e do prestador na comunidade ChamadoPro: publicação, orçamentos, pagamento seguro e reputação.',
  },
} as const;

/** Jornada do cliente — /como-funciona. */
export const clientFlowStepsPage = [
  {
    title: 'Conte o que você precisa',
    body: 'Descreva o serviço por texto, áudio ou fotos.',
  },
  {
    title: 'O ChamadoPro organiza seu pedido',
    body: 'Sua solicitação fica clara e pronta para chegar aos profissionais certos.',
  },
  {
    title: 'Receba orçamentos',
    body: 'Prestadores compatíveis enviam propostas com valor, prazo e detalhes.',
  },
  {
    title: 'Compare e escolha',
    body: 'Analise propostas, perfis e avaliações para escolher o profissional.',
  },
  {
    title: 'Pague com segurança',
    body: 'Faça o pagamento pelo ChamadoPro, com proteção durante o serviço.',
  },
  {
    title: 'Acompanhe a execução',
    body: 'Converse com o prestador e acompanhe o andamento pela plataforma.',
  },
  {
    title: 'Confirme a conclusão',
    body: 'Após o serviço concluído, confirme a entrega para liberar o pagamento.',
  },
  {
    title: 'Avalie o profissional',
    body: 'Compartilhe sua experiência e ajude a fortalecer a reputação do prestador.',
  },
] as const;

export const homeSections = {
  flow: {
    title: 'Do post à escolha do profissional',
    subtitle: 'Simples como publicar numa rede — só que aqui resolve seu problema.',
  },
  provider: {
    badge: 'Para quem presta serviço',
    title: 'Seu perfil, sua vitrine',
    subtitle: 'Publique trabalhos como no Instagram — e receba pedidos da região.',
    cta: 'Criar perfil profissional',
    link: 'Saiba mais',
  },
  catalog: {
    title: 'Ou explore por categoria',
    subtitle: 'Prefere olhar antes de publicar? Veja especialidades na sua região.',
    link: 'Ver todas',
  },
  closing: {
    title: 'Entrar no ChamadoPro',
    description: 'Suas publicações e seu perfil ficam no app — gratuito para começar.',
    login: 'Já tenho conta',
    registerClient: 'Criar conta',
    registerProvider: 'Perfil profissional',
  },
} as const;

export const clientBenefitsHome = [
  'Pedido gratuito — você só paga quando aceitar um orçamento',
  'Pagamento em custódia até a conclusão do serviço',
  'Avaliações de outros clientes para decidir com confiança',
] as const;

export const clientBenefitsPage = [
  'Pedido gratuito — sem taxa para publicar ou receber propostas',
  'Descrição por texto, áudio ou fotos — o ChamadoPro organiza sua solicitação',
  'Prestadores da região são avisados quando o pedido combina com o serviço e a área',
  'Vários orçamentos para comparar preço, prazo e reputação',
  'Pagamento pela plataforma — protegido até a conclusão do serviço',
  'Avaliações reais de quem já contratou o profissional',
] as const;

export const providerPublishTypes = [
  {
    title: 'Trabalhos realizados',
    description: 'Mostre serviços concluídos na plataforma.',
  },
  {
    title: 'Antes e depois',
    description: 'Destaque a qualidade do resultado.',
  },
  {
    title: 'Ofertas e promoções',
    description: 'Divulgue condições especiais.',
  },
  {
    title: 'Serviços e disponibilidade',
    description: 'Anuncie o que você faz e onde atende.',
  },
] as const;

export const providerBenefitsPage = [
  'Cadastro com suas especialidades e área de atendimento',
  'Oportunidades na região — avisos quando clientes pedem serviços compatíveis',
  'Orçamentos pela plataforma — valor, prazo e detalhes em um só fluxo',
  'Execução acompanhada — conversa e andamento no ChamadoPro',
  'Recebimento integrado — liberação e saque após a conclusão do serviço',
  'Reputação — avaliações reais de quem já contratou você',
] as const;

export const clientJourneyPage = {
  heroTitle: 'Para clientes',
  heroDescription:
    'Reformas, reparos e serviços do dia a dia com orçamentos reais e pagamento protegido pela plataforma.',
  ctaTitle: 'Publique no app',
  ctaDescription:
    'Entre ou crie sua conta para publicar o pedido e receber orçamentos da sua região.',
} as const;

export const providerJourneyPage = {
  heroTitle: 'Para prestadores',
  heroDescription:
    'Receba oportunidades na sua região, envie orçamentos e receba pela plataforma.',
  workTitle: 'Como você trabalha no ChamadoPro',
  publishTitle: 'Também pode divulgar seu trabalho',
  ctaTitle: 'Cadastre-se como prestador',
  ctaDescription:
    'Informe suas especialidades, monte seu perfil e comece a receber oportunidades compatíveis.',
} as const;

/** Jornada do prestador — /como-funciona. */
export const providerFlowSteps = [
  {
    title: 'Cadastre-se como prestador',
    body: 'Informe seus serviços, áreas de atuação e região de atendimento.',
  },
  {
    title: 'Complete seu perfil',
    body: 'Adicione seus dados, documentos e informações para recebimento.',
  },
  {
    title: 'Receba oportunidades',
    body: 'Veja solicitações compatíveis com seus serviços e sua região.',
  },
  {
    title: 'Envie orçamentos',
    body: 'Apresente valor, prazo e detalhes do serviço ao cliente.',
  },
  {
    title: 'Seja escolhido pelo cliente',
    body: 'Após o aceite e o pagamento, o serviço é confirmado na plataforma.',
  },
  {
    title: 'Execute o serviço',
    body: 'Converse com o cliente e acompanhe o trabalho pelo ChamadoPro.',
  },
  {
    title: 'Conclua e receba',
    body: 'Após a confirmação do cliente, o valor segue para liberação e saque.',
  },
  {
    title: 'Construa sua reputação',
    body: 'Boas avaliações fortalecem seu perfil e aumentam suas oportunidades.',
  },
] as const;

export const comoFuncionaPage = {
  heroTitle: 'Como funciona',
} as const;

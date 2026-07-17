export interface FaqItem {
  question: string;
  answer: string;
}

export interface EspecialidadeSeoContent {
  paragraphs: string[];
  faq: FaqItem[];
}

/** Copy editorial por especialidade (150+ palavras cada). */
export const ESPECIALIDADE_SEO: Record<string, EspecialidadeSeoContent> = {
  pedreiro: {
    paragraphs: [
      'Contratar um pedreiro qualificado é essencial para reformas, ampliações e reparos estruturais com segurança. No ChamadoPro, você publica o escopo do serviço no aplicativo — alvenaria, reboco, contrapiso ou pequenos reparos — e recebe orçamentos de profissionais que atuam na sua região.',
      'Compare propostas com atenção ao prazo, materiais inclusos e experiência em obras semelhantes. Avaliações de outros clientes ajudam a identificar quem entrega acabamento limpo e cumpre o combinado. O pagamento fica em custódia até a conclusão.',
      'Se a obra exige mais de uma especialidade, combine pedreiro com gesseiro, azulejista ou pintor em etapas distintas. Descreva medidas, fotos do ambiente e urgência no pedido para receber orçamentos mais precisos.',
    ],
    faq: [
      {
        question: 'Como solicitar um pedreiro pelo ChamadoPro?',
        answer:
          'Entre no aplicativo, publique seu pedido descrevendo a obra e aguarde orçamentos de pedreiros da região. Você compara propostas e contrata com pagamento protegido.',
      },
    ],
  },
  encanador: {
    paragraphs: [
      'Vazamentos, troca de torneiras, instalação de louças e reparos hidráulicos pedem encanador experiente. No ChamadoPro, você descreve o problema e recebe orçamentos de profissionais que atuam na sua cidade.',
      'Fotos do local aceleram o orçamento. Compare prazos, garantia e se o profissional atende emergências. Avaliações de outros clientes indicam pontualidade e qualidade do serviço.',
      'O pagamento fica em custódia até a conclusão — ideal para quem quer resolver o problema sem pagar adiantado sem garantia. Publique o pedido no app e compare propostas com calma.',
    ],
    faq: [
      {
        question: 'Como contratar encanador pelo ChamadoPro?',
        answer:
          'Acesse o aplicativo, faça login ou cadastro, publique o pedido com descrição e local. Prestadores enviam orçamentos e você escolhe o melhor.',
      },
      {
        question: 'Encanador atende fim de semana?',
        answer:
          'Disponibilidade varia por profissional. Informe data desejada no pedido para receber quem pode atender.',
      },
    ],
  },
  diarista: {
    paragraphs: [
      'Diaristas realizam limpeza residencial pontual ou recorrente — poeira, banheiros, cozinha e organização leve. No ChamadoPro, descreva metragem, frequência desejada e se há pets ou crianças em casa.',
      'Compare orçamentos por visita ou mensalidade, produtos de limpeza inclusos e referências. Avaliações de moradores da região são especialmente úteis nesta categoria.',
      'Para primeira visita, combine escopo detalhado no app. Pagamento protegido dá tranquilidade ao experimentar um novo profissional sem pagar à vista sem garantia.',
    ],
    faq: [
      {
        question: 'Diarista leva produtos de limpeza?',
        answer:
          'Varia por profissional. Alguns incluem; outros usam os seus. Confirme em cada orçamento.',
      },
    ],
  },
  'eletricista-residencial': {
    paragraphs: [
      'Instalações e reparos elétricos residenciais devem ser feitos por profissionais qualificados para evitar riscos. No ChamadoPro, publique desde troca de tomadas até quadro de distribuição ou adequação de carga.',
      'Prestadores da região enviam orçamentos com prazo e escopo. Verifique avaliações e experiência. Com pagamento em custódia, você tem respaldo até o serviço ser testado e aprovado.',
      'Use o Chama.AI no app para descrever o problema se preferir áudio ou texto guiado. Fotos do quadro elétrico ajudam orçamentos mais precisos.',
    ],
    faq: [
      {
        question: 'Eletricista residencial atende emergência?',
        answer:
          'Muitos atendem chamados urgentes. Indique a urgência no pedido para priorizar profissionais disponíveis.',
      },
    ],
  },
  'pintor-residencial': {
    paragraphs: [
      'Uma pintura bem executada renova ambientes e protege paredes contra umidade. Contrate pintores residenciais pelo ChamadoPro informando quantidade de cômodos, tipo de tinta e se há necessidade de preparação.',
      'Receba orçamentos de pintores próximos, compare prazos e se incluem proteção de móveis. Avaliações reais orientam a escolha com mais segurança.',
      'Com pagamento em custódia, você só libera o valor após conferir o acabamento. Publique fotos das paredes para orçamentos fiéis à realidade.',
    ],
    faq: [
      {
        question: 'O pintor fornece a tinta?',
        answer:
          'Depende do profissional. Verifique cada proposta no aplicativo antes de aceitar.',
      },
    ],
  },
  desentupidor: {
    paragraphs: [
      'Ralos, pias e esgoto entupidos precisam de atendimento rápido. Desentupidores no ChamadoPro utilizam cabo espiral, hidrojato e inspeção quando necessário.',
      'Indique urgência, andar do imóvel e se é rede interna ou principal. Orçamentos variam conforme gravidade e necessidade de câmera de inspeção.',
      'Publique o pedido com prioridade alta em emergências. Pagamento protegido e avaliações ajudam a escolher quem resolve de forma definitiva.',
    ],
    faq: [
      {
        question: 'Desentupidor cobra por visita ou por serviço?',
        answer:
          'Modelos de cobrança diferem. Cada orçamento no app detalha visita, equipamento e garantia.',
      },
    ],
  },
  'instalador-ar-condicionado': {
    paragraphs: [
      'Instalação de ar condicionado split exige carga de gás, fixação segura e dreno adequado. Instaladores no ChamadoPro atendem residências e comércios com equipamento para vácuo e teste.',
      'Informe BTUs necessários, distância entre unidades e ponto elétrico. Orçamentos devem incluir suporte, tubulação e primeira carga de gás quando aplicável.',
      'Instalação incorreta reduz vida útil do aparelho. Compare avaliações e use pagamento em custódia até validar refrigeração.',
    ],
    faq: [
      {
        question: 'Instalador vende o aparelho?',
        answer:
          'Alguns oferecem equipamento + instalação. Outros só instalam unidade comprada por você.',
      },
    ],
  },
  'mudanca-residencial': {
    paragraphs: [
      'Mudanças residenciais envolvem embalagem, desmontagem, transporte e montagem. Empresas dimensionam equipe e veículo conforme inventário do imóvel.',
      'Liste cômodos, itens frágeis e necessidade de içamento. Orçamentos devem incluir seguro, materiais e data da mudança.',
      'Planeje com antecedência. No ChamadoPro, compare propostas e contrate com pagamento em custódia até tudo chegar intacto.',
    ],
    faq: [
      {
        question: 'Mudança inclui desmontagem de móveis?',
        answer:
          'Muitas empresas incluem desmontagem e montagem básica. Confirme escopo em cada orçamento.',
      },
    ],
  },
};

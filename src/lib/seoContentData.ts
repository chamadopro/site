export interface FaqItem {
  question: string;
  answer: string;
}

export interface EspecialidadeSeoContent {
  paragraphs: string[];
  faq: FaqItem[];
}

/** Copy editorial por especialidade (conteúdo aprofundado, sem thin content nem keyword stuffing). */
export const ESPECIALIDADE_SEO: Record<string, EspecialidadeSeoContent> = {
  pedreiro: {
    paragraphs: [
      'Contratar um pedreiro qualificado é essencial para reformas, ampliações e reparos estruturais com segurança. No ChamadoPro, você publica o escopo do serviço no aplicativo — alvenaria, reboco, contrapiso, demolição ou pequenos reparos — e recebe orçamentos de profissionais avaliados que atuam na sua região.',
      'Ao comparar propostas, analise a experiência do profissional em obras semelhantes, os prazos de execução e se o orçamento contempla apenas a mão de obra ou também materiais básicos. Avaliações verificadas de outros clientes ajudam a identificar quem cumpre prazos e entrega acabamento limpo. No ChamadoPro, o seu pagamento permanece retido em custódia segura até que você confirme que a etapa combinada foi entregue com qualidade.',
      'Se a sua obra envolver mais de uma etapa, você pode combinar o pedreiro com eletricista, encanador, gesseiro ou pintor. Ao publicar o pedido no app, envie fotos do local, mencione medidas aproximadas e informe a urgência para receber orçamentos fiéis e sem surpresas.',
    ],
    faq: [
      {
        question: 'Como solicitar um pedreiro pelo ChamadoPro?',
        answer:
          'Acesse o aplicativo ChamadoPro, publique seu pedido descrevendo o que precisa ser feito e aguarde as propostas. Você compara orçamentos de pedreiros da sua região e contrata com pagamento protegido.',
      },
      {
        question: 'O pedreiro fornece os materiais de construção?',
        answer:
          'Geralmente o orçamento cobre a mão de obra. No entanto, você pode combinar com o profissional na proposta se ele incluirá materiais básicos como cimento, areia e tijolos.',
      },
    ],
  },
  encanador: {
    paragraphs: [
      'Vazamentos, canos rompidos, troca de registros, instalação de louças e manutenção da rede de esgoto pedem um encanador experiente. No ChamadoPro, você descreve o problema no aplicativo e recebe orçamentos de profissionais hidráulicos que atendem o seu bairro ou cidade.',
      'Enviar fotos ou vídeos do vazamento pelo app ajuda os encanadores a diagnosticar a complexidade e enviar estimativas muito mais precisas. Verifique a pontualidade, histórico de avaliações e se o prestador oferece garantia pós-serviço antes de aceitar uma proposta.',
      'Com o pagamento em custódia do ChamadoPro, o valor só é repassado ao encanador após você testar o encanamento e confirmar que o vazamento foi eliminado. Publique seu pedido e receba propostas sem compromisso.',
    ],
    faq: [
      {
        question: 'Como contratar encanador pelo ChamadoPro?',
        answer:
          'Acesse o aplicativo ChamadoPro, faça login ou cadastre-se, crie a publicação informando o tipo de reparo hidráulico e sua localização. Prestadores enviam propostas diretamente no app.',
      },
      {
        question: 'Encanadores atendem chamados de emergência?',
        answer:
          'Sim. Muitos profissionais atendem chamados urgentes. Basta sinalizar a urgência no momento da publicação do pedido.',
      },
    ],
  },
  diarista: {
    paragraphs: [
      'A contratação de uma diarista confiável traz praticidade e bem-estar para o seu lar ou escritório. No ChamadoPro, você encontra profissionais para faxina pesada, limpeza de rotina, organização de armários ou manutenção periódica.',
      'Na publicação do pedido, informe o tamanho do imóvel (número de quartos e banheiros), a frequência desejada (única, semanal ou quinzenal) e se há necessidades especiais, como limpeza de janelas altas ou cuidados com animais de estimação. Compare orçamentos detalhados e veja a reputação deixada por outros contratantes da sua comunidade.',
      'O pagamento protegido do ChamadoPro garante tranquilidade: você só libera o pagamento após a conclusão satisfatória da diária.',
    ],
    faq: [
      {
        question: 'A diarista leva os produtos de limpeza?',
        answer:
          'O padrão do mercado é o cliente fornecer os produtos e utensílios, mas alguns profissionais oferecem o serviço completo com produtos inclusos mediante acerto prévio na proposta.',
      },
      {
        question: 'Posso contratar diárias recorrentes?',
        answer:
          'Sim. Você pode publicar pedidos para diárias avulsas ou combinar visitas regulares com o profissional escolhido através da plataforma.',
      },
    ],
  },
  'eletricista-residencial': {
    paragraphs: [
      'Instalações e manutenções elétricas exigem capacitação técnica e rigor com normas de segurança para evitar curtos-circuitos, sobrecargas e riscos de incêndio. No ChamadoPro, você publica desde serviços simples, como troca de tomadas e instalação de chuveiros, até reformas completas do quadro de distribuição.',
      'Profissionais qualificados da sua região enviam propostas com escopo bem definido. Analise as qualificações do eletricista, as avaliações de outros moradores e o prazo proposto. O pagamento protegido do ChamadoPro assegura que você só libera o valor após a realização dos testes elétricos.',
      'Você pode utilizar fotos do quadro de luz ou dos aparelhos a serem instalados para que os eletricistas compreendam a dimensão da fiação e enviem orçamentos precisos rapidamente.',
    ],
    faq: [
      {
        question: 'Eletricista residencial atende emergência?',
        answer:
          'Muitos eletricistas cadastrados atendem chamados urgentes para quedas de energia e curto-circuitos. Sinalize a urgência ao publicar o chamado no app.',
      },
      {
        question: 'É necessário trocar a fiação antiga ao reformar?',
        answer:
          'Depende da idade do imóvel e da carga dos novos aparelhos. Um eletricista qualificado avaliará a bitola dos fios e a capacidade do disjuntor geral.',
      },
    ],
  },
  'eletricista-comercial': {
    paragraphs: [
      'Empresas, lojas e escritórios demandam infraestrutura elétrica estável para manter servidores, máquinas e iluminação comercial funcionando sem interrupções. No ChamadoPro, você contrata eletricistas comerciais para manutenção preventiva, aumento de carga, laudos técnicos e cabeamento elétrico trifásico.',
      'Receba propostas de profissionais habituados às normas regulamentadoras (como NR-10) e aptos a emitir notas e relatórios técnicos. O pagamento via custódia da plataforma dá segurança financeira tanto para a empresa contratante quanto para o prestador.',
      'Descreva a potência dos equipamentos e o cronograma desejado para receber propostas alinhadas aos horários de funcionamento do seu comércio.',
    ],
    faq: [
      {
        question: 'O eletricista comercial atende fora do horário comercial?',
        answer:
          'Sim. Muitos profissionais realizam manutenções noturnas ou aos fins de semana para não interromper as operações do seu estabelecimento.',
      },
    ],
  },
  'pintor-residencial': {
    paragraphs: [
      'Uma pintura bem planejada renova a estética dos ambientes, protege as paredes contra mofo e intempéries e valoriza o imóvel. No ChamadoPro, você contrata pintores residenciais experientes em pintura látex, acrílica, esmalte sintético, texturas, aplicação de massa corrida e impermeabilização de paredes.',
      'Ao avaliar os orçamentos, confira se o serviço inclui lixamento prévio, isolamento de pisos, rodapés e móveis, e aplicação de fundo preparador. Avaliações reais de clientes anteriores são um ótimo indicativo do capricho e da limpeza deixada pelo pintor.',
      'Com o pagamento protegido do ChamadoPro, você tem a segurança de conferir todo o acabamento e a cobertura da tinta antes da liberação final do valor acordado.',
    ],
    faq: [
      {
        question: 'O pintor fornece as tintas e materiais?',
        answer:
          'Geralmente o cliente adquire as tintas conforme a marca e cor de sua preferência, e o pintor pode incluir lixas, fitas e rolos na proposta. Isso fica claro no orçamento recebido.',
      },
      {
        question: 'Quantas demãos de tinta são necessárias?',
        answer:
          'Na maioria dos casos são necessárias de 2 a 3 demãos para cobertura uniforme, dependendo da cor anterior e do estado da parede.',
      },
    ],
  },
  'montador-moveis': {
    paragraphs: [
      'A montagem correta de móveis comprados na internet ou em lojas físicas garante durabilidade, estabilidade e segurança para a sua família. No ChamadoPro, você encontra montadores de móveis profissionais para montar ou desmontar guarda-roupas, camas, mesas, painéis de TV, armários de cozinha e estações de trabalho.',
      'Montadores experientes utilizam ferramentas adequadas como parafusadeiras com controle de torque, nível a laser e fixadores resistentes para alvenaria ou drywall, evitando danos às peças de MDP/MDF. Compare orçamentos transparentes e veja as recomendações de quem já contratou na sua cidade.',
      'Vai se mudar? O montador também pode cuidar da desmontagem no endereço antigo e da remontagem na casa nova. Todo o pagamento fica em custódia até você testar gavetas, dobradiças e portas alinhadas.',
    ],
    faq: [
      {
        question: 'Quanto tempo leva para montar um guarda-roupa?',
        answer:
          'Guarda-roupas médios de 4 a 6 portas levam entre 2 e 5 horas, dependendo do número de gavetas e portas de correr. O montador informa a estimativa na proposta.',
      },
      {
        question: 'O montador fixa painéis de TV na parede?',
        answer:
          'Sim. Os profissionais realizam a fixação de painéis e nichos utilizando buchas e parafusos adequados para o tipo de parede (alvenaria ou drywall).',
      },
    ],
  },
  marceneiro: {
    paragraphs: [
      'Para projetos sob medida, aproveitamento inteligente de espaços ou restauração de móveis nobres, a marcenaria especializada é insubstituível. No ChamadoPro, você publica o que deseja fabricar ou consertar e recebe orçamentos de marceneiros qualificados.',
      'Os profissionais trabalham com madeira maciça, MDF naval, compensados, lâminas e ferragens de alta durabilidade com amortecimento. Analise fotos de projetos anteriores executados pelo marceneiro e compare prazos de entrega e condições de acabamento.',
      'O pagamento em etapas ou custódia pelo ChamadoPro oferece a segurança necessária para projetos de marcenaria personalizada.',
    ],
    faq: [
      {
        question: 'O marceneiro faz visita técnica para tirar medidas?',
        answer:
          'Sim. Após o alinhamento inicial do orçamento pelo aplicativo, o marceneiro pode agendar uma visita para medição exata do ambiente antes da produção.',
      },
    ],
  },
  chaveiro: {
    paragraphs: [
      'Ficar trancado para fora de casa ou do carro, perder chaves ou precisar trocar o segredo de uma fechadura são situações urgentes que pedem um chaveiro confiável. No ChamadoPro, você publica sua emergência e recebe respostas de chaveiros que atendem prontamente na sua região.',
      'Os chaveiros cadastrados realizam abertura de portas residenciais e automotivas sem danificar a estrutura, confecção de cópias de chaves codificadas, instalação de travas de segurança e fechaduras eletrônicas digitais.',
      'O pagamento protegido dá transparência ao valor do serviço e deslocamento acordados antes da execução.',
    ],
    faq: [
      {
        question: 'O chaveiro atende 24 horas?',
        answer:
          'Muitos chaveiros atendem chamados de plantão 24 horas. Descreva a urgência na publicação para receber contato imediato.',
      },
      {
        question: 'Chaveiro instala fechadura digital?',
        answer:
          'Sim. Eles possuem ferramentas para fazer o corte e a furação precisa na porta de madeira, alumínio ou ferro.',
      },
    ],
  },
  desentupidor: {
    paragraphs: [
      'Pias, ralos, vasos sanitários e caixas de gordura entupidos causam mau cheiro, refluxo e transtornos imediatos. No ChamadoPro, você contrata especialistas em desentupimento residencial, predial e comercial com equipamentos profissionais.',
      'Os desentupidores utilizam máquinas rotativas de mola, hidrojateamento de alta pressão e sondas especiais que desobstruem a tubulação sem quebrar pisos ou azulejos. Ao publicar, informe o tipo de ralo ou encanamento afetado para receber propostas precisas.',
      'Com o pagamento em custódia do ChamadoPro, você só confirma a liberação após testar o escoamento completo da água.',
    ],
    faq: [
      {
        question: 'O desentupimento quebra o piso?',
        answer:
          'Na grande maioria dos casos não é necessário quebrar nada. O maquinário moderno entra pela própria tubulação para remover o bloqueio.',
      },
    ],
  },
  'instalador-ar-condicionado': {
    paragraphs: [
      'A instalação correta do ar condicionado é fundamental para garantir a eficiência energética, a vazão de refrigeração e a vida útil do compressor. No ChamadoPro, você contrata técnicos qualificados para instalação e desinstalação de modelos split, hi-wall, cassete e inverter.',
      'O serviço técnico inclui furação correta com inclinação para dreno, fixação dos suportes da condensadora, flangeamento da tubulação de cobre, vácuo no sistema com bomba especializada e teste de estanqueidade contra vazamento de gás refrigerante.',
      'Compare avaliações e verifique se o orçamento já contempla a metragem de tubulação de cobre necessária. Seu pagamento fica seguro no app até o teste de refrigeração ser concluído.',
    ],
    faq: [
      {
        question: 'A instalação inclui a tubulação de cobre e o suporte?',
        answer:
          'Geralmente o técnico especifica a metragem padrão de tubulação inclusa (por exemplo, até 3 metros) e os suportes. Detalhes são alinhados na proposta.',
      },
    ],
  },
  'mudanca-residencial': {
    paragraphs: [
      'Fazer uma mudança residencial exige organização, cuidado com móveis e eletrodomésticos e veículos adequados. No ChamadoPro, você recebe propostas de empresas de mudança e transportadores que atuam na sua cidade e interestadual.',
      'Informe a lista aproximada de móveis, se há necessidade de equipe de ajudantes para carregamento e se os prédios possuem elevador ou exigem içamento. As propostas detalham se o serviço inclui materiais de proteção como plástico bolha, papelão e mantas.',
      'O pagamento fica em custódia na plataforma ChamadoPro até que todos os itens cheguem em segurança ao destino.',
    ],
    faq: [
      {
        question: 'A empresa de mudança faz embalagem dos pertences?',
        answer:
          'Sim, muitas empresas oferecem o serviço completo de embalagem de louças, roupas e móveis mediante solicitação na publicação.',
      },
    ],
  },
  jardineiro: {
    paragraphs: [
      'Manter o jardim saudável e bonito exige podas sazonais, controle de pragas, adubação equilibrada e corte de grama regular. No ChamadoPro, você encontra jardineiros dedicados a residências, condomínios e chácaras.',
      'Na publicação, informe a área aproximada do jardim e os serviços necessários (como poda de árvores, limpeza de folhas, corte de grama ou plantio de mudas). Os profissionais levam roçadeiras, tesouras de poda e ferramentas de jardinagem completas.',
      'O pagamento protegido assegura a entrega do jardim limpo e bem cuidado conforme combinado.',
    ],
    faq: [
      {
        question: 'O jardineiro retira os resíduos de poda?',
        answer:
          'Muitos profissionais ensacam e providenciam o descarte ecológico dos resíduos verdes. Confirme essa inclusão na proposta.',
      },
    ],
  },
  vidraceiro: {
    paragraphs: [
      'Instalação de boxes de banheiro em vidro temperado, espelhos sob medida, fechamento de sacadas e tampos de mesa demandam precisão milimétrica e vidro de segurança certificado pela ABNT. No ChamadoPro, você recebe propostas de vidraceiros experientes.',
      'Envie medidas aproximadas e fotos do vão a ser envidraçado pelo aplicativo para orçamentos mais rápidos. Compare opções de perfis de alumínio (preto, branco, cromado) e espessuras de vidro recomendadas.',
      'O pagamento em custódia do ChamadoPro garante que a instalação do vidro seja testada quanto ao alinhamento e vedação antes do repasse ao profissional.',
    ],
    faq: [
      {
        question: 'Qual o prazo de entrega de um box de vidro?',
        answer:
          'Após a medição final no local, a têmpera e montagem costumam levar entre 3 e 7 dias úteis.',
      },
    ],
  },
  'caca-vazamentos': {
    paragraphs: [
      'Contas de água altas sem motivo aparente ou manchas de umidade em paredes e lajes indicam vazamentos ocultos. O serviço de caça-vazamentos utiliza tecnologia não destrutiva para identificar o ponto exato da ruptura.',
      'Profissionais no ChamadoPro utilizam geofone eletrônico de escuta ultrassônica, termografia infravermelha e manômetros de pressão, apontando o local do problema para que o conserto seja feito com mínima quebra de alvenaria.',
      'Contrate especialistas com emissão de laudo técnico para contestação junto à concessionária de água da sua região.',
    ],
    faq: [
      {
        question: 'O profissional emite laudo para a companhia de água?',
        answer:
          'Sim, a maioria dos especialistas em caça-vazamentos emite laudo técnico detalhando o conserto para solicitação de desconto na fatura de água.',
      },
    ],
  },
};

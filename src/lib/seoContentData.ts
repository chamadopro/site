export interface FaqItem {
  question: string;
  answer: string;
}

export interface EspecialidadeSeoContent {
  paragraphs: string[];
  faq: FaqItem[];
  /** H1 opcional, usado quando a página precisa de copy mais alinhada à intenção de busca. */
  h1?: string;
  /** Title SEO opcional (sem sufixo de marca — o layout já aplica o template). */
  metaTitle?: string;
  /** Meta description opcional (idealmente 140–160 caracteres). */
  metaDescription?: string;
}

/** Copy editorial por especialidade (conteúdo aprofundado, sem thin content nem keyword stuffing). */
export const ESPECIALIDADE_SEO: Record<string, EspecialidadeSeoContent> = {
  pedreiro: {
    h1: 'Contrate pedreiro para reforma e alvenaria',
    metaTitle: 'Pedreiro para Reforma — Orçamento com Pagamento Seguro',
    metaDescription:
      'Encontre pedreiro para reforma, alvenaria, reboco ou demolição. Publique o pedido, compare orçamentos na sua região e pague com proteção no ChamadoPro.',
    paragraphs: [
      'Quando a parede precisa subir, o reboco está irregular, o contrapiso falhou ou a reforma exige demolição controlada, o caminho mais seguro é contratar um pedreiro com escopo claro. No ChamadoPro você descreve o serviço no app, informa a localização e recebe orçamentos de profissionais que atendem a sua região — sem taxa para comparar propostas.',
      'Para um orçamento mais fiel, diga se o trabalho é alvenaria, reboco, contrapiso, abertura de vão, reparo de fissura ou demolição; envie fotos e medidas aproximadas. Na comparação, veja o que entra na proposta (mão de obra ou também materiais), o prazo por etapa e a experiência em obras parecidas com a sua.',
      'O pagamento fica em custódia até você confirmar a entrega da etapa combinada. Se a reforma também precisar de elétrica, hidráulica, gesso ou pintura, publique pedidos complementares e acompanhe tudo no mesmo fluxo do aplicativo.',
    ],
    faq: [
      {
        question: 'Como pedir orçamento de pedreiro no ChamadoPro?',
        answer:
          'Publique o pedido no app com o tipo de serviço, localização e fotos do local. Pedreiros da região enviam propostas para você comparar e contratar com pagamento protegido.',
      },
      {
        question: 'O pedreiro leva os materiais da obra?',
        answer:
          'Em geral o orçamento cobre a mão de obra. Você pode combinar na proposta se o profissional incluirá cimento, areia, tijolos ou outros materiais básicos.',
      },
      {
        question: 'O que influencia o preço do pedreiro?',
        answer:
          'Área, complexidade, acesso ao local e se há materiais inclusos. Solicitar orçamento no ChamadoPro é gratuito; você só paga ao aceitar a proposta.',
      },
    ],
  },
  encanador: {
    h1: 'Contrate encanador para vazamento e reparo hidráulico',
    metaTitle: 'Encanador para Vazamento — Orçamento com Pagamento Seguro',
    metaDescription:
      'Contrate encanador para vazamento, torneira, registro ou instalação hidráulica. Compare orçamentos na sua região e pague com proteção no ChamadoPro.',
    paragraphs: [
      'Torneira pingando, registro emperrado, cano rompido, vaso vazando ou infiltração começando na parede? Esses problemas pedem um encanador para diagnosticar e reparar a rede hidráulica antes que o dano cresça. No ChamadoPro você publica o que está acontecendo, informa onde precisa do atendimento e recebe orçamentos de profissionais da sua região.',
      'Um vídeo curto ou fotos do ponto de vazamento ajudam a separar reparo simples de caso com risco de infiltração. Compare prazo, o que está incluso (mão de obra, peças, garantia) e só aceite depois de entender o escopo — sem pressão e sem compromisso na publicação do pedido.',
      'Com o pagamento em custódia, o valor só é liberado depois que você testa a instalação e confirma que o defeito foi corrigido. Ideal para quem quer contratar encanador com transparência e sem combinações frágeis por mensagem.',
    ],
    faq: [
      {
        question: 'Como contratar encanador pelo ChamadoPro?',
        answer:
          'Descreva o reparo (vazamento, troca de peça, instalação), informe a localização e anexe fotos se puder. Encanadores da região enviam orçamentos no app.',
      },
      {
        question: 'Encanador atende emergência hidráulica?',
        answer:
          'Sim. Muitos profissionais atendem urgências. Marque o pedido como urgente para priorizar propostas compatíveis.',
      },
      {
        question: 'Peças e conexões entram no orçamento?',
        answer:
          'Depende da proposta. Alguns cobrem só a mão de obra; outros incluem registros, sifões ou conexões. Peça o detalhamento antes de aceitar.',
      },
    ],
  },
  diarista: {
    h1: 'Contrate diarista para limpeza e faxina',
    metaTitle: 'Diarista para Faxina — Orçamento com Pagamento Seguro',
    metaDescription:
      'Contrate diarista para faxina ou limpeza de rotina. Informe o tamanho do imóvel, compare orçamentos na sua região e pague com proteção no ChamadoPro.',
    paragraphs: [
      'Casa bagunçada depois de reforma, limpeza pesada de fim de semana ou rotina semanal que não dá para manter sozinho? Contratar diarista pelo ChamadoPro começa com um pedido simples: você informa o tamanho do imóvel, a frequência desejada e a localização, e recebe orçamentos de profissionais que atendem a sua região.',
      'Quanto mais detalhe, melhor o orçamento: número de quartos e banheiros, se é faxina pesada ou limpeza de manutenção, e se há janelas altas, fogão embutido ou pets. Assim a profissional estima o tempo real antes de enviar a proposta.',
      'Você compara valores e avaliações, escolhe quem combina com a sua necessidade e só libera o pagamento após a diária concluída. O fluxo evita combinações informais e pagamento em dinheiro sem registro.',
    ],
    faq: [
      {
        question: 'A diarista leva os produtos de limpeza?',
        answer:
          'O mais comum é o cliente fornecer produtos e utensílios. Algumas profissionais incluem produtos mediante acerto prévio na proposta.',
      },
      {
        question: 'Dá para contratar diária toda semana?',
        answer:
          'Sim. Você pode pedir uma diária avulsa ou combinar visitas semanais ou quinzenais com a profissional escolhida no app.',
      },
      {
        question: 'Como saber o valor justo da diária?',
        answer:
          'O preço varia com o tamanho do imóvel, o tipo de limpeza e a região. Peça orçamentos gratuitos no ChamadoPro e compare antes de decidir.',
      },
    ],
  },
  'eletricista-residencial': {
    h1: 'Contrate eletricista residencial com orçamento seguro',
    metaTitle: 'Eletricista Residencial — Orçamento com Pagamento Seguro',
    metaDescription:
      'Contrate eletricista para tomada, chuveiro, quadro de luz ou curto-circuito. Compare orçamentos na sua região e pague com proteção no ChamadoPro.',
    paragraphs: [
      'Disjuntor desarmando, tomada sem energia, chuveiro para instalar, interruptor queimado ou quadro de luz precário? Serviço elétrico residencial exige cuidado para evitar sobrecarga e risco de curto-circuito. No ChamadoPro você descreve o problema, informa a localização e recebe orçamentos de eletricistas que atendem a sua região.',
      'Fotos do quadro de distribuição ou do ponto a instalar ajudam o profissional a estimar fiação, carga e tempo de serviço. Na comparação dos orçamentos, veja o que está incluso (mão de obra, materiais e testes), o prazo e as avaliações — e só aceite quando o escopo estiver claro.',
      'O pagamento protegido só é liberado depois que você confere o funcionamento das instalações. Em emergência (queda de energia, cheiro de queimado ou curto), marque a urgência no pedido para receber propostas mais rápidas.',
    ],
    faq: [
      {
        question: 'Eletricista residencial atende emergência?',
        answer:
          'Muitos profissionais atendem urgências como queda de energia e curto-circuito. Sinalize a urgência ao publicar o chamado.',
      },
      {
        question: 'Preciso trocar a fiação antiga na reforma?',
        answer:
          'Depende da idade do imóvel e da carga dos aparelhos novos. O eletricista avalia bitola dos fios e capacidade do disjuntor geral antes de indicar a troca.',
      },
      {
        question: 'Como pedir orçamento de eletricista no ChamadoPro?',
        answer:
          'Publique instalação, reparo ou manutenção, informe a localização e anexe fotos se possível. Compare propostas e contrate com pagamento em custódia.',
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
    h1: 'Contrate pintor para pintura interna e externa',
    metaTitle: 'Pintor Residencial — Orçamento com Pagamento Seguro',
    metaDescription:
      'Contrate pintor para pintura interna ou externa, massa corrida e acabamento. Compare orçamentos na sua região e pague com proteção no ChamadoPro.',
    paragraphs: [
      'Quer renovar a cor dos ambientes, cobrir mancha de umidade, aplicar massa corrida ou pintar fachada e portas? Um pintor residencial cuida do preparo da superfície e do acabamento para o resultado ficar uniforme. No ChamadoPro você publica o que precisa pintar, a metragem aproximada e a localização, e recebe orçamentos de profissionais da região.',
      'Na comparação, confira se entram lixamento, fundo preparador, proteção de pisos e móveis, e quantas demãos estão previstas. Deixe claro se a tinta será sua ou se o orçamento deve incluir material — isso muda o valor final.',
      'Com o pagamento em custódia, você confere cobertura e acabamento antes de liberar o valor. Em pintura externa, informe acesso (escada ou andaime) e o estado das paredes para propostas mais precisas.',
    ],
    faq: [
      {
        question: 'O pintor fornece tinta e materiais?',
        answer:
          'Em geral o cliente escolhe e compra a tinta; o pintor pode incluir lixas, fitas e rolos. Combine isso no orçamento antes de aceitar.',
      },
      {
        question: 'Quantas demãos costumam ser necessárias?',
        answer:
          'Na maioria dos casos são 2 a 3 demãos para cobertura uniforme, conforme a cor anterior e o estado da parede.',
      },
      {
        question: 'Como pedir orçamento de pintura no ChamadoPro?',
        answer:
          'Descreva os ambientes, a metragem aproximada e se a pintura é interna ou externa. Anexe fotos se puder e compare as propostas com pagamento protegido.',
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

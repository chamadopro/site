import type { Cidade } from '@/lib/cidades';
import { cidadeLabel } from '@/lib/cidades';
import { ESPECIALIDADE_SEO, type EspecialidadeSeoContent, type FaqItem } from '@/lib/seoContentData';

export type { FaqItem, EspecialidadeSeoContent };

function buildFallbackContent(
  nome: string,
  descricao: string | null | undefined,
  categoriaNome: string
): EspecialidadeSeoContent {
  const n = nome.toLowerCase();
  const resumo = descricao ?? `serviços especializados de ${n}`;

  return {
    paragraphs: [
      `Contratar ${n} com segurança e garantia começa por definir o escopo do que precisa ser feito: ${resumo}, dentro da categoria de ${categoriaNome}. No ChamadoPro, você publica seu pedido gratuitamente e recebe orçamentos detalhados de profissionais qualificados que atendem a sua região — sem taxas para comparar propostas.`,
      `Analise cada orçamento quanto a prazo, materiais inclusos, garantia e avaliações verificadas de outros clientes. O pagamento permanece protegido em custódia até você confirmar que o serviço foi entregue conforme combinado, eliminando riscos em contratações presenciais.`,
      `Descreva detalhes, envie fotos do ambiente ou do problema e informe a urgência para receber propostas fiéis. Se precisar de serviços complementares em ${categoriaNome.toLowerCase()}, explore as especialidades relacionadas ou utilize o suporte no aplicativo.`,
    ],
    faq: [
      {
        question: `Como solicitar ${n} pelo ChamadoPro?`,
        answer:
          'Acesse o aplicativo ChamadoPro, publique seu pedido com descrição do serviço e sua localização. Prestadores compatíveis enviam propostas para você comparar e contratar com pagamento protegido.',
      },
      {
        question: `Como funciona o pagamento seguro para ${n}?`,
        answer:
          'Ao aceitar uma proposta, o pagamento fica retido em custódia na plataforma ChamadoPro. O valor só é liberado para o profissional após você conferir e aprovar o serviço finalizado.',
      },
      {
        question: `Quanto custa contratar ${n}?`,
        answer:
          'O valor varia conforme a complexidade do serviço e a localidade. Solicitar orçamentos no ChamadoPro é 100% gratuito; você só paga ao aceitar a proposta ideal.',
      },
    ],
  };
}

export function getEspecialidadeContent(
  slug: string,
  nome: string,
  descricao: string | null | undefined,
  categoriaNome: string
): EspecialidadeSeoContent {
  return ESPECIALIDADE_SEO[slug] ?? buildFallbackContent(nome, descricao, categoriaNome);
}

/**
 * Gera uma meta description completa, sem corte abrupto de frases e no tamanho ideal (140-160 caracteres).
 */
export function getSpecialtyMetaDescription(
  espNome: string,
  catNome: string,
  firstParagraph?: string
): string {
  if (firstParagraph) {
    const sentenceMatch = firstParagraph.match(/^([^.!?]+[.!?])/);
    if (sentenceMatch && sentenceMatch[1].length >= 90 && sentenceMatch[1].length <= 160) {
      return sentenceMatch[1].trim();
    }
  }
  return `Contrate ${espNome} pelo ChamadoPro. Compare orçamentos gratuitos de profissionais avaliados da sua região e pague com segurança em custódia.`;
}

export interface LocalSeoContent {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  paragraphs: string[];
  faq: FaqItem[];
}

const CITY_CONTEXT: Record<string, string> = {
  'sao-paulo':
    'Na Grande São Paulo, a alta densidade de imóveis residenciais e comerciais mantém demanda constante por manutenção e reformas com agilidade e prazos bem definidos.',
  'rio-de-janeiro':
    'No Rio de Janeiro, a maresia, a umidade e a arquitetura característica dos bairros tornam essencial contratar profissionais com experiência e referências locais.',
  'belo-horizonte':
    'Em Belo Horizonte e região metropolitana, a busca por profissionais qualificados para reformas e serviços residenciais prioriza pontualidade e bom custo-benefício.',
  'brasilia':
    'No Distrito Federal, as especificidades arquitetônicas de casas e apartamentos exigem prestadores familiarizados com os padrões construtivos da capital.',
  'curitiba':
    'Em Curitiba, o clima e a organização urbana favorecem o agendamento de serviços com previsibilidade e profissionais bem avaliados pela comunidade.',
  'porto-alegre':
    'Em Porto Alegre, a diversidade de construções tradicionais e novos empreendimentos exige orçamentos transparentes antes de iniciar manutenções ou reparos.',
  salvador:
    'Em Salvador, a proximidade com o litoral acelera desgastes em instalações elétricas, pintura e ferragens — a manutenção preventiva com profissionais certos evita custos elevados.',
  recife:
    'No Recife e região metropolitana, as particularidades de cada bairro demandam profissionais com disponibilidade local para atendimento ágil e seguro.',
  fortaleza:
    'Em Fortaleza, as temperaturas elevadas e a maresia aumentam a procura por especialistas em climatização, elétrica e conservação predial.',
  campinas:
    'Em Campinas e polo regional, há forte demanda por serviços especializados para residências, condomínios e estabelecimentos comerciais.',
};

export function getLocalContent(
  slug: string,
  nome: string,
  descricao: string | null | undefined,
  categoriaNome: string,
  cidade: Cidade
): LocalSeoContent {
  const base = getEspecialidadeContent(slug, nome, descricao, categoriaNome);
  const n = nome.toLowerCase();
  const label = cidadeLabel(cidade);
  const cityCtx =
    CITY_CONTEXT[cidade.slug] ??
    `Em ${cidade.nome}, clientes buscam ${n} com agilidade, transparência de preço e profissionais recomendados na comunidade local.`;

  return {
    h1: `${nome} em ${cidade.nome} — Orçamentos com Pagamento Seguro`,
    metaTitle: `${nome} em ${cidade.nome} — Orçamentos com Pagamento Seguro`,
    metaDescription: `Contrate ${n} em ${label} pelo ChamadoPro. Compare orçamentos de profissionais da região e pague com proteção de custódia até a conclusão do serviço.`,
    paragraphs: [
      `${cityCtx} Para contratar ${n} em ${label}, publique seu pedido no aplicativo ChamadoPro: descreva sua necessidade, adicione fotos e informe seu bairro para receber propostas de profissionais que atendem a sua região.`,
      base.paragraphs[1],
      `Prestadores em ${cidade.nome} competem por reputação e excelência na plataforma. Após o término do trabalho, sua avaliação ajuda outros moradores a escolherem com total confiança.`,
    ],
    faq: [
      {
        question: `Como contratar ${n} em ${cidade.nome} pelo ChamadoPro?`,
        answer: `Abra o aplicativo ChamadoPro, informe ${label} como localização e detalhe o serviço. Prestadores locais enviarão orçamentos para você comparar e contratar com pagamento em custódia protegida.`,
      },
      {
        question: `Os profissionais atendem todos os bairros de ${cidade.nome}?`,
        answer:
          'A área de cobertura varia conforme o prestador. Ao publicar seu pedido indicando seu bairro, apenas profissionais que atendem sua área responderão.',
      },
      ...base.faq.slice(0, 2),
    ],
  };
}

/** Retorna URL amigável e canônica da categoria. */
export function categoriaPath(categoriaSlug: string): string {
  return `/servicos/${categoriaSlug}`;
}

/** Retorna URL amigável e canônica da especialidade (ex: /servicos/pedreiro). */
export function servicoPath(
  categoriaOrEspecialidade: string,
  maybeEspecialidade?: string
): string {
  const especialidade = maybeEspecialidade || categoriaOrEspecialidade;
  return `/servicos/${especialidade}`;
}

/** Retorna URL amigável e canônica da especialidade por cidade (ex: /servicos/pedreiro/sao-paulo). */
export function localServicoPath(
  categoriaOrEspecialidade: string,
  especialidadeOrCidade: string,
  maybeCidade?: string
): string {
  if (maybeCidade) {
    return `/servicos/${especialidadeOrCidade}/${maybeCidade}`;
  }
  return `/servicos/${categoriaOrEspecialidade}/${especialidadeOrCidade}`;
}

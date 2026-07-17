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
  const resumo = descricao ?? `serviços de ${n}`;

  return {
    paragraphs: [
      `Contratar ${n} com segurança começa por definir o escopo: ${resumo}, dentro de ${categoriaNome}. No ChamadoPro, você publica o pedido no aplicativo e recebe orçamentos de prestadores da sua região — sem taxa para comparar propostas.`,
      `Analise cada orçamento quanto a prazo, garantia, materiais inclusos e avaliações verificadas de outros clientes. O pagamento permanece em custódia até você confirmar que o trabalho foi entregue conforme combinado, reduzindo risco em serviços presenciais.`,
      `Descreva detalhes, envie fotos e informe urgência para propostas mais fiéis. Se precisar de especialidades relacionadas em ${categoriaNome.toLowerCase()}, explore o catálogo do site ou use o Chama.AI no app para orientação na publicação do pedido.`,
    ],
    faq: [
      {
        question: `Como solicitar ${n} pelo ChamadoPro?`,
        answer:
          'Acesse o aplicativo, faça login ou cadastro, publique o pedido com descrição e local. Prestadores compatíveis enviam orçamentos para você comparar e contratar com pagamento protegido.',
      },
      {
        question: `Quanto custa contratar ${n}?`,
        answer:
          'O valor depende do escopo e da região. Solicitar orçamentos no app é gratuito; você só paga ao aceitar uma proposta.',
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

export interface LocalSeoContent {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  paragraphs: string[];
  faq: FaqItem[];
}

const CITY_CONTEXT: Record<string, string> = {
  'sao-paulo':
    'Na Grande São Paulo, a alta densidade de imóveis residenciais e comerciais mantém demanda constante por manutenção e reformas com prazos bem definidos.',
  'rio-de-janeiro':
    'No Rio de Janeiro, umidade e infraestrutura antiga em muitos bairros tornam essencial contratar profissionais com experiência local.',
  'belo-horizonte':
    'Em Belo Horizonte, o mercado de serviços residenciais cresce em bairros consolidados e regiões metropolitanas em expansão.',
  'brasilia':
    'Em Brasília, casas e apartamentos com características próprias exigem prestadores familiarizados com o padrão construtivo da capital.',
  'curitiba':
    'Em Curitiba, clima e urbanismo organizado favorecem agendamento de serviços com previsibilidade e bons profissionais avaliados.',
  'porto-alegre':
    'Em Porto Alegre, a variedade de imóveis antigos e novos pede orçamentos detalhados antes de iniciar reparos ou reformas.',
  salvador:
    'Em Salvador, proximidade com o litoral aumenta desgaste em pintura, elétrica e hidráulica — manutenção preventiva evita custos maiores.',
  recife:
    'No Recife, bairros centrais e periféricos têm dinâmicas distintas de disponibilidade de prestadores; compare propostas pela região exata.',
  fortaleza:
    'Em Fortaleza, calor intenso eleva demanda por climatização e manutenção elétrica em residências e comércios.',
  campinas:
    'Em Campinas, polo tecnológico e residencial, há forte oferta de profissionais especializados na região metropolitana.',
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
    `Em ${cidade.nome}, clientes buscam ${n} com rapidez, transparência de preço e profissionais bem avaliados na comunidade local.`;

  return {
    h1: `${nome} em ${cidade.nome} — orçamentos com pagamento seguro`,
    metaTitle: `${nome} em ${cidade.nome} — orçamentos`,
    metaDescription: `Contrate ${n} em ${label} pelo ChamadoPro. Compare orçamentos de profissionais da região e pague com proteção até a conclusão do serviço.`,
    paragraphs: [
      `${cityCtx} Para contratar ${n} em ${label}, publique seu pedido no aplicativo ChamadoPro: descreva o problema, envie fotos e informe o bairro para receber propostas de prestadores que atendem a cidade.`,
      base.paragraphs[1],
      `Prestadores em ${cidade.nome} competem por qualidade e reputação na plataforma. Após o serviço, sua avaliação ajuda outros moradores a escolher com mais confiança. Explore também outras cidades e especialidades relacionadas nos links abaixo.`,
    ],
    faq: [
      {
        question: `Como contratar ${n} em ${cidade.nome} pelo ChamadoPro?`,
        answer: `Entre no app, publique o pedido indicando ${label} e aguarde orçamentos. Compare propostas e contrate com pagamento em custódia até a conclusão.`,
      },
      {
        question: `Os prestadores atendem todos os bairros de ${cidade.nome}?`,
        answer:
          'A cobertura varia por profissional. Informe bairro e referência no pedido para receber quem atende sua localização.',
      },
      ...base.faq.slice(0, 1),
    ],
  };
}

export function servicoPath(categoria: string, especialidade: string): string {
  return `/servicos/${categoria}/${especialidade}`;
}

export function localServicoPath(
  categoria: string,
  especialidade: string,
  cidade: string
): string {
  return `/servicos/${categoria}/${especialidade}/${cidade}`;
}

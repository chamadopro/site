export interface CatalogEspecialidade {
  id?: string;
  slug: string;
  nome: string;
  descricao?: string | null;
}

export interface CatalogCategoria {
  id?: string;
  slug: string;
  nome: string;
  descricao?: string | null;
  icone?: string | null;
  especialidades: CatalogEspecialidade[];
}

/**
 * Mapeamento de sinônimos/aliases comuns para seus slugs canônicos no ChamadoPro.
 * Garante URLs amigáveis sem duplicar conteúdo (redireciona para o canônico).
 */
export const SPECIALTY_ALIASES: Record<string, string> = {
  'eletricista': 'eletricista-residencial',
  'pintor': 'pintor-residencial',
  'montador-de-moveis': 'montador-moveis',
  'montador-de-movel': 'montador-moveis',
  'montador': 'montador-moveis',
  'ar-condicionado': 'instalador-ar-condicionado',
  'mudanca': 'mudanca-residencial',
  'cameras': 'instalacao-cameras',
  'camera-de-seguranca': 'instalador-de-camera-de-seguranca',
  'box-de-banheiro': 'instalador-de-box',
  'instalador-box': 'instalador-de-box',
  'troca-vidros': 'troca-de-vidros',
  'energia-solar': 'instalador-energia-solar',
};

/**
 * Catálogo completo de serviços (espelho das 11 categorias e 41 especialidades reais do ChamadoPro).
 * Usado como fallback robusto durante build estático e quando a API estiver indisponível.
 */
export const CATALOGO_ESTATICO: CatalogCategoria[] = [
  {
    slug: 'construcao-reforma',
    nome: 'Construção e Reforma',
    descricao: 'Obras, acabamento e reformas residenciais e comerciais',
    icone: 'Hammer',
    especialidades: [
      { slug: 'pedreiro', nome: 'Pedreiro', descricao: 'Alvenaria, reboco, contrapiso e reparos estruturais' },
      { slug: 'azulejista', nome: 'Azulejista', descricao: 'Assentamento de azulejos, pisos e cerâmicas' },
      { slug: 'gesseiro', nome: 'Gesseiro', descricao: 'Drywall, forros, sancas e acabamentos em gesso' },
      { slug: 'pintor-residencial', nome: 'Pintor Residencial', descricao: 'Pintura interna e externa de residências e apartamentos' },
      { slug: 'pintor-comercial', nome: 'Pintor Comercial', descricao: 'Pintura de lojas, galpões e empresas' },
      { slug: 'telhadista', nome: 'Telhadista', descricao: 'Construção e conserto de telhados, calhas e rufos' },
      { slug: 'impermeabilizacao', nome: 'Impermeabilização', descricao: 'Impermeabilização de lajes, telhados, piscinas e fachadas' },
      { slug: 'chaveiro', nome: 'Chaveiro', descricao: 'Abertura de portas, cópias de chaves e troca de fechaduras' },
    ],
  },
  {
    slug: 'eletrica-automacao',
    nome: 'Elétrica e Automação',
    descricao: 'Instalações elétricas, energia solar, CFTV e automação',
    icone: 'Zap',
    especialidades: [
      { slug: 'eletricista-residencial', nome: 'Eletricista Residencial', descricao: 'Instalações elétricas, quadros de luz, tomadas e disjuntores' },
      { slug: 'eletricista-comercial', nome: 'Eletricista Comercial', descricao: 'Instalações elétricas prediais, comerciais e industriais leves' },
      { slug: 'instalador-energia-solar', nome: 'Instalador de Energia Solar', descricao: 'Instalação e manutenção de painéis fotovoltaicos e inversores' },
      { slug: 'instalador-cftv', nome: 'Instalador de CFTV', descricao: 'Câmeras de vigilância e sistemas de monitoramento' },
      { slug: 'instalador-alarmes', nome: 'Instalador de Alarmes', descricao: 'Alarmes residenciais, sensores de presença e cercas elétricas' },
    ],
  },
  {
    slug: 'hidraulica-gas',
    nome: 'Hidráulica e Gás',
    descricao: 'Encanamento, desentupimento, vazamentos e aquecedores',
    icone: 'Droplet',
    especialidades: [
      { slug: 'encanador', nome: 'Encanador', descricao: 'Instalações hidráulicas, reparos de canos e registros' },
      { slug: 'desentupidor', nome: 'Desentupidor', descricao: 'Desentupimento de ralos, vasos, pias e redes de esgoto' },
      { slug: 'caca-vazamentos', nome: 'Caça Vazamentos', descricao: 'Localização eletrônica e reparo de vazamentos ocultos' },
      { slug: 'instalador-aquecedor', nome: 'Instalador de Aquecedor', descricao: 'Instalação e manutenção de aquecedores a gás e elétricos' },
    ],
  },
  {
    slug: 'moveis-marcenaria',
    nome: 'Móveis, Marcenaria e Estofaria',
    descricao: 'Montagem, fabricação sob medida, estofaria e serralheria',
    icone: 'Armchair',
    especialidades: [
      { slug: 'montador-moveis', nome: 'Montador de Móveis', descricao: 'Montagem e desmontagem de guarda-roupas, cozinhas e móveis em geral' },
      { slug: 'marceneiro', nome: 'Marceneiro', descricao: 'Móveis planejados sob medida, restauração e marcenaria fina' },
      { slug: 'estofador', nome: 'Estofador', descricao: 'Reforma, troca de tecido e tapeçaria de sofás, poltronas e cadeiras' },
      { slug: 'serralheiro', nome: 'Serralheiro', descricao: 'Portões de ferro, grades de proteção e estruturas metálicas' },
    ],
  },
  {
    slug: 'climatizacao',
    nome: 'Climatização',
    descricao: 'Instalação, manutenção e higienização de ar condicionado',
    icone: 'Wind',
    especialidades: [
      { slug: 'instalador-ar-condicionado', nome: 'Instalador de Ar Condicionado', descricao: 'Instalação de ar condicionado split, multi-split e inverter' },
      { slug: 'tecnico-ar-condicionado', nome: 'Técnico em Ar Condicionado', descricao: 'Manutenção preventiva, conserto e recarga de gás refrigerante' },
      { slug: 'higienizacao-ar-condicionado', nome: 'Higienização de Ar Condicionado', descricao: 'Limpeza e higienização profunda antibacteriana de aparelhos' },
    ],
  },
  {
    slug: 'vidros',
    nome: 'Vidros e Esquadrias',
    descricao: 'Vidros temperados, boxes de banheiro, espelhos e esquadrias',
    icone: 'Square',
    especialidades: [
      { slug: 'vidraceiro', nome: 'Vidraceiro', descricao: 'Instalação e corte de vidros temperados, laminados e espelhos' },
      { slug: 'instalador-de-box', nome: 'Instalador de Box', descricao: 'Instalação e manutenção de boxes de banheiro e portas de vidro' },
      { slug: 'troca-de-vidros', nome: 'Troca de Vidros', descricao: 'Substituição de vidros quebrados em janelas, portas e sacadas' },
    ],
  },
  {
    slug: 'limpeza-conservacao',
    nome: 'Limpeza e Conservação',
    descricao: 'Diaristas, limpeza pós-obra, comercial e de estofados',
    icone: 'Sparkles',
    especialidades: [
      { slug: 'diarista', nome: 'Diarista', descricao: 'Limpeza residencial de rotina, faxina completa e organização' },
      { slug: 'limpeza-pos-obra', nome: 'Limpeza Pós-Obra', descricao: 'Limpeza técnica pesada para entrega de reformas e construções' },
      { slug: 'limpeza-comercial', nome: 'Limpeza Comercial', descricao: 'Conservação e limpeza periódica de escritórios, consultórios e lojas' },
      { slug: 'limpeza-estofados', nome: 'Limpeza de Estofados', descricao: 'Higienização e lavagem a seco de sofás, colchões e tapetes' },
    ],
  },
  {
    slug: 'jardinagem',
    nome: 'Jardinagem e Áreas Externas',
    descricao: 'Jardinagem, poda de árvores, paisagismo e corte de grama',
    icone: 'Flower2',
    especialidades: [
      { slug: 'jardineiro', nome: 'Jardineiro', descricao: 'Manutenção de canteiros, adubação e cuidados gerais com plantas' },
      { slug: 'paisagista', nome: 'Paisagista', descricao: 'Projetos de paisagismo, criação de jardins e áreas verdes' },
      { slug: 'corte-de-grama', nome: 'Corte de Grama', descricao: 'Corte, roçada e aparação de gramados residenciais e comerciais' },
    ],
  },
  {
    slug: 'mudancas-transporte',
    nome: 'Mudanças e Transporte',
    descricao: 'Mudanças residenciais, comerciais, fretes e pequenos carretos',
    icone: 'Truck',
    especialidades: [
      { slug: 'frete', nome: 'Frete', descricao: 'Transporte de cargas, eletrodomésticos e entregas de mercadorias' },
      { slug: 'mudanca-residencial', nome: 'Mudança Residencial', descricao: 'Mudanças completas de casas e apartamentos com equipe' },
      { slug: 'carreto', nome: 'Carreto', descricao: 'Carretos rápidos para pequenas cargas e distâncias curtas' },
    ],
  },
  {
    slug: 'tecnologia',
    nome: 'Tecnologia',
    descricao: 'Suporte de informática, redes, cabeamento e câmeras',
    icone: 'Computer',
    especialidades: [
      { slug: 'tecnico-informatica', nome: 'Técnico de Informática', descricao: 'Formatação, remoção de vírus e manutenção de computadores e notebooks' },
      { slug: 'instalacao-redes', nome: 'Redes e Cabeamento', descricao: 'Cabeamento estruturado, roteadores, Wi-Fi e fibra óptica' },
      { slug: 'instalacao-cameras', nome: 'Instalação de Câmeras', descricao: 'Configuração de câmeras IP, DVR e visualização no celular' },
      { slug: 'instalador-de-camera-de-seguranca', nome: 'Instalador de Câmera de Segurança', descricao: 'Instalação física e cabeamento de sistemas de segurança' },
    ],
  },
  {
    slug: 'assistencia-tecnica',
    nome: 'Assistência Técnica',
    descricao: 'Conserto de aquecedores a gás e eletrodomésticos',
    icone: 'Wrench',
    especialidades: [
      { slug: 'assistencia-tecnica-para-aquecedor-a-gas', nome: 'Assistência Técnica para Aquecedor a Gás', descricao: 'Manutenção, conserto e revisão preventiva de aquecedores a gás' },
      { slug: 'assistencia-tecnica-para-equipamentos-domesticos', nome: 'Assistência Técnica para Equipamentos Domésticos', descricao: 'Reparo e conserto de lavadoras, geladeiras, fogões e micro-ondas' },
    ],
  },
];

const apiBase =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, '') ||
  'https://app.chamadopro.com.br/api';

export async function fetchCatalogo(): Promise<CatalogCategoria[]> {
  try {
    const res = await fetch(`${apiBase}/public/categorias`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return CATALOGO_ESTATICO;
    const json = (await res.json()) as { success?: boolean; data?: CatalogCategoria[] };
    if (!json.success || !Array.isArray(json.data) || json.data.length === 0) {
      return CATALOGO_ESTATICO;
    }
    // Merge live data with our curated static descriptions and icons
    return json.data.map((cat) => {
      const fallbackCat = CATALOGO_ESTATICO.find((c) => c.slug === cat.slug);
      return {
        ...cat,
        descricao: cat.descricao || fallbackCat?.descricao || null,
        icone: cat.icone || fallbackCat?.icone || null,
        especialidades: cat.especialidades.map((esp) => {
          const fallbackEsp = fallbackCat?.especialidades.find((e) => e.slug === esp.slug);
          return {
            ...esp,
            descricao: esp.descricao || fallbackEsp?.descricao || null,
          };
        }),
      };
    });
  } catch {
    return CATALOGO_ESTATICO;
  }
}

export function findCategoria(
  catalogo: CatalogCategoria[],
  slug: string
): CatalogCategoria | undefined {
  return catalogo.find((c) => c.slug === slug);
}

export function isCategorySlug(catalogo: CatalogCategoria[], slug: string): boolean {
  return catalogo.some((c) => c.slug === slug);
}

export function findEspecialidade(
  catalogo: CatalogCategoria[],
  categoriaSlug: string,
  especialidadeSlug: string
): { categoria: CatalogCategoria; especialidade: CatalogEspecialidade } | undefined {
  const categoria = findCategoria(catalogo, categoriaSlug);
  const resolvedSlug = SPECIALTY_ALIASES[especialidadeSlug] || especialidadeSlug;
  const especialidade = categoria?.especialidades.find((e) => e.slug === resolvedSlug);
  if (!categoria || !especialidade) return undefined;
  return { categoria, especialidade };
}

/**
 * Encontra uma especialidade diretamente pelo slug dela (ou por alias),
 * localizando automaticamente a categoria a que pertence.
 */
export function findEspecialidadeBySlug(
  catalogo: CatalogCategoria[],
  slug: string
): { categoria: CatalogCategoria; especialidade: CatalogEspecialidade; isAlias?: boolean; canonicalSlug?: string } | undefined {
  const resolvedSlug = SPECIALTY_ALIASES[slug] || slug;
  for (const categoria of catalogo) {
    const especialidade = categoria.especialidades.find((e) => e.slug === resolvedSlug);
    if (especialidade) {
      return {
        categoria,
        especialidade,
        isAlias: slug !== especialidade.slug,
        canonicalSlug: especialidade.slug,
      };
    }
  }
  return undefined;
}

export function getAllSpecialties(catalogo: CatalogCategoria[]): Array<{
  categoria: CatalogCategoria;
  especialidade: CatalogEspecialidade;
}> {
  return catalogo.flatMap((cat) =>
    cat.especialidades.map((esp) => ({
      categoria: cat,
      especialidade: esp,
    }))
  );
}

export function getAllEspecialidadePaths(catalogo: CatalogCategoria[]): Array<{
  categoria: string;
  especialidade: string;
}> {
  return catalogo.flatMap((cat) =>
    cat.especialidades.map((esp) => ({
      categoria: cat.slug,
      especialidade: esp.slug,
    }))
  );
}

export function getAllLocalPaths(
  catalogo: CatalogCategoria[],
  cidadeSlugs: string[]
): Array<{ categoria: string; especialidade: string; cidade: string }> {
  return getAllEspecialidadePaths(catalogo).flatMap(({ categoria, especialidade }) =>
    cidadeSlugs.map((cidade) => ({ categoria, especialidade, cidade }))
  );
}

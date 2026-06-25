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

/** Catálogo Fase 1 (espelho do backend) — fallback quando a API não está disponível no build. */
export const CATALOGO_ESTATICO: CatalogCategoria[] = [
  {
    slug: 'construcao-reforma',
    nome: 'Construção e Reforma',
    descricao: 'Obras, acabamento e reformas residenciais e comerciais',
    icone: 'Hammer',
    especialidades: [
      { slug: 'pedreiro', nome: 'Pedreiro', descricao: 'Alvenaria, reboco e reparos estruturais' },
      { slug: 'azulejista', nome: 'Azulejista', descricao: 'Assentamento de azulejos e cerâmicas' },
      { slug: 'gesseiro', nome: 'Gesseiro', descricao: 'Drywall, gesso e sancas' },
      { slug: 'pintor-residencial', nome: 'Pintor Residencial', descricao: 'Pintura de ambientes residenciais' },
      { slug: 'pintor-comercial', nome: 'Pintor Comercial', descricao: 'Pintura de lojas e empresas' },
      { slug: 'telhadista', nome: 'Telhadista', descricao: 'Telhados, calhas e coberturas' },
      { slug: 'impermeabilizacao', nome: 'Impermeabilização', descricao: 'Impermeabilização de lajes, telhados e fachadas' },
    ],
  },
  {
    slug: 'eletrica-automacao',
    nome: 'Elétrica e Automação',
    descricao: 'Instalações elétricas, solar, CFTV e automação',
    icone: 'Zap',
    especialidades: [
      { slug: 'eletricista-residencial', nome: 'Eletricista Residencial', descricao: 'Instalações e reparos elétricos residenciais' },
      { slug: 'eletricista-comercial', nome: 'Eletricista Comercial', descricao: 'Instalações elétricas comerciais e industriais leves' },
      { slug: 'instalador-energia-solar', nome: 'Instalador de Energia Solar', descricao: 'Painéis solares e inversores' },
      { slug: 'instalador-cftv', nome: 'Instalador de CFTV', descricao: 'Câmeras e monitoramento' },
      { slug: 'instalador-alarmes', nome: 'Instalador de Alarmes', descricao: 'Alarmes e sensores' },
    ],
  },
  {
    slug: 'hidraulica-gas',
    nome: 'Hidráulica e Gás',
    descricao: 'Encanamento, desentupimento, vazamentos e aquecedores',
    icone: 'Droplet',
    especialidades: [
      { slug: 'encanador', nome: 'Encanador', descricao: 'Instalações hidráulicas e reparos' },
      { slug: 'desentupidor', nome: 'Desentupidor', descricao: 'Desentupimento de ralos, pias e esgoto' },
      { slug: 'caca-vazamentos', nome: 'Caça Vazamentos', descricao: 'Localização e reparo de vazamentos ocultos' },
      { slug: 'instalador-aquecedor', nome: 'Instalador de Aquecedor', descricao: 'Aquecedores a gás e elétricos' },
    ],
  },
  {
    slug: 'climatizacao',
    nome: 'Climatização',
    descricao: 'Ar condicionado e higienização',
    icone: 'Wind',
    especialidades: [
      { slug: 'instalador-ar-condicionado', nome: 'Instalador de Ar Condicionado', descricao: 'Instalação de splits e aparelhos' },
      { slug: 'tecnico-ar-condicionado', nome: 'Técnico em Ar Condicionado', descricao: 'Manutenção e reparo' },
      { slug: 'higienizacao-ar-condicionado', nome: 'Higienização de Ar Condicionado', descricao: 'Limpeza e higienização de aparelhos' },
    ],
  },
  {
    slug: 'vidros',
    nome: 'Vidros e Esquadrias',
    descricao: 'Vidros, boxes e envidraçamento',
    icone: 'Square',
    especialidades: [
      { slug: 'vidraceiro', nome: 'Vidraceiro', descricao: 'Corte, instalação e reparo de vidros' },
      { slug: 'instalador-box', nome: 'Instalador de Box', descricao: 'Boxes de banheiro e vidros temperados' },
      { slug: 'troca-vidros', nome: 'Troca de Vidros', descricao: 'Substituição de vidros e espelhos' },
    ],
  },
  {
    slug: 'limpeza-conservacao',
    nome: 'Limpeza e Conservação',
    descricao: 'Limpeza residencial, comercial e pós-obra',
    icone: 'Sparkles',
    especialidades: [
      { slug: 'diarista', nome: 'Diarista', descricao: 'Limpeza residencial recorrente ou pontual' },
      { slug: 'limpeza-pos-obra', nome: 'Limpeza Pós-Obra', descricao: 'Limpeza pesada após reformas' },
      { slug: 'limpeza-comercial', nome: 'Limpeza Comercial', descricao: 'Limpeza de escritórios e lojas' },
      { slug: 'limpeza-estofados', nome: 'Limpeza de Estofados', descricao: 'Higienização de sofás e estofados' },
    ],
  },
  {
    slug: 'jardinagem',
    nome: 'Jardinagem e Áreas Externas',
    descricao: 'Jardins, poda e paisagismo',
    icone: 'Flower2',
    especialidades: [
      { slug: 'jardineiro', nome: 'Jardineiro', descricao: 'Manutenção de jardins e plantas' },
      { slug: 'paisagista', nome: 'Paisagista', descricao: 'Projeto e execução de paisagismo' },
      { slug: 'corte-de-grama', nome: 'Corte de Grama', descricao: 'Corte e conservação de gramados' },
    ],
  },
  {
    slug: 'mudancas-transporte',
    nome: 'Mudanças e Transporte',
    descricao: 'Fretes, carretos e mudanças',
    icone: 'Truck',
    especialidades: [
      { slug: 'frete', nome: 'Frete', descricao: 'Transporte de cargas e volumes' },
      { slug: 'mudanca-residencial', nome: 'Mudança Residencial', descricao: 'Mudanças de casa e apartamento' },
      { slug: 'carreto', nome: 'Carreto', descricao: 'Carretos rápidos e pequenos fretes' },
    ],
  },
  {
    slug: 'tecnologia',
    nome: 'Tecnologia',
    descricao: 'Informática, redes e câmeras',
    icone: 'Computer',
    especialidades: [
      { slug: 'tecnico-informatica', nome: 'Técnico de Informática', descricao: 'Suporte, manutenção e redes domésticas' },
      { slug: 'instalacao-redes', nome: 'Redes e Cabeamento', descricao: 'Cabeamento estruturado e Wi-Fi' },
      { slug: 'instalacao-cameras', nome: 'Instalação de Câmeras', descricao: 'Câmeras IP e monitoramento' },
    ],
  },
];

const apiBase =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, '') ||
  'https://app.chamadopro.com.br/api';

export async function fetchCatalogo(): Promise<CatalogCategoria[]> {
  try {
    const res = await fetch(`${apiBase}/public/categorias`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return CATALOGO_ESTATICO;
    const json = (await res.json()) as { success?: boolean; data?: CatalogCategoria[] };
    if (!json.success || !Array.isArray(json.data) || json.data.length === 0) {
      return CATALOGO_ESTATICO;
    }
    return json.data;
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

export function findEspecialidade(
  catalogo: CatalogCategoria[],
  categoriaSlug: string,
  especialidadeSlug: string
): { categoria: CatalogCategoria; especialidade: CatalogEspecialidade } | undefined {
  const categoria = findCategoria(catalogo, categoriaSlug);
  const especialidade = categoria?.especialidades.find((e) => e.slug === especialidadeSlug);
  if (!categoria || !especialidade) return undefined;
  return { categoria, especialidade };
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

export interface Cidade {
  slug: string;
  nome: string;
  uf: string;
}

/** Fase 1 local SEO — principais mercados (espelho referência GetNinjas). */
export const CIDADES_FASE_1: Cidade[] = [
  { slug: 'sao-paulo', nome: 'São Paulo', uf: 'SP' },
  { slug: 'rio-de-janeiro', nome: 'Rio de Janeiro', uf: 'RJ' },
  { slug: 'belo-horizonte', nome: 'Belo Horizonte', uf: 'MG' },
  { slug: 'brasilia', nome: 'Brasília', uf: 'DF' },
  { slug: 'curitiba', nome: 'Curitiba', uf: 'PR' },
  { slug: 'porto-alegre', nome: 'Porto Alegre', uf: 'RS' },
  { slug: 'salvador', nome: 'Salvador', uf: 'BA' },
  { slug: 'recife', nome: 'Recife', uf: 'PE' },
  { slug: 'fortaleza', nome: 'Fortaleza', uf: 'CE' },
  { slug: 'campinas', nome: 'Campinas', uf: 'SP' },
];

export function findCidade(slug: string): Cidade | undefined {
  return CIDADES_FASE_1.find((c) => c.slug === slug);
}

export function cidadeLabel(cidade: Cidade): string {
  return `${cidade.nome}, ${cidade.uf}`;
}

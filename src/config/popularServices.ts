/** Especialidades populares — chips na home e links no footer. */
export const POPULAR_SERVICES = [
  { categoria: 'hidraulica-gas', especialidade: 'encanador', label: 'Encanador' },
  { categoria: 'limpeza-conservacao', especialidade: 'diarista', label: 'Diarista' },
  {
    categoria: 'eletrica-automacao',
    especialidade: 'eletricista-residencial',
    label: 'Eletricista',
  },
  { categoria: 'construcao-reforma', especialidade: 'pintor-residencial', label: 'Pintor' },
  { categoria: 'construcao-reforma', especialidade: 'pedreiro', label: 'Pedreiro' },
  {
    categoria: 'climatizacao',
    especialidade: 'instalador-ar-condicionado',
    label: 'Ar condicionado',
  },
  { categoria: 'hidraulica-gas', especialidade: 'desentupidor', label: 'Desentupidor' },
  {
    categoria: 'mudancas-transporte',
    especialidade: 'mudanca-residencial',
    label: 'Mudança',
  },
] as const;

export const DEFAULT_CITY_SLUG = 'sao-paulo';

export function popularServiceLocalPath(
  categoria: string,
  especialidade: string,
  cidade = DEFAULT_CITY_SLUG
): string {
  return `/servicos/${categoria}/${especialidade}/${cidade}`;
}

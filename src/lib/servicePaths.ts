import { servicoPath } from '@/lib/seoContent';

/** Caminho de serviço conforme localização escolhida (cidade ou Brasil). */
export function servicePathForLocation(
  categoria: string,
  especialidade: string,
  cidadeSlug: string | null | undefined
): string {
  if (cidadeSlug) {
    return `/servicos/${categoria}/${especialidade}/${cidadeSlug}`;
  }
  return servicoPath(categoria, especialidade);
}

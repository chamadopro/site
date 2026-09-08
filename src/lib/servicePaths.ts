import { localServicoPath, servicoPath } from '@/lib/seoContent';

/** Caminho amigável de serviço conforme localização escolhida (cidade ou nacional). */
export function servicePathForLocation(
  categoria: string,
  especialidade: string,
  cidadeSlug: string | null | undefined
): string {
  if (cidadeSlug) {
    return localServicoPath(categoria, especialidade, cidadeSlug);
  }
  return servicoPath(categoria, especialidade);
}

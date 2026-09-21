import type { Metadata } from 'next';
import { pageContainerClass, pageSectionClass } from '@/components/layout/PageShell';
import { ButtonLink } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className={pageSectionClass}>
      <div className={`${pageContainerClass} max-w-xl py-10 sm:py-14`}>
        <p className="text-sm font-semibold text-brand-orange">404</p>
        <h1 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-cp-text-primary sm:text-3xl">
          Página não encontrada
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-cp-text-secondary sm:text-base">
          Este endereço não existe ou foi movido. Use o menu ou volte ao início para encontrar o
          serviço que você procura.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/">Ir para o início</ButtonLink>
          <ButtonLink href="/servicos" variant="outline">
            Ver serviços
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

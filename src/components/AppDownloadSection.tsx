'use client';

import { usePathname } from 'next/navigation';
import { AppDownloadLinks } from '@/components/AppDownloadLinks';

export function AppDownloadSection() {
  const pathname = usePathname();

  // Na home, o download já aparece no CTA final.
  if (pathname === '/') return null;

  return (
    <section className="border-t border-cp-border bg-cp-surface-muted">
      <div className="home-container flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:py-10">
        <div className="max-w-lg">
          <h2 className="text-lg font-bold tracking-[-0.02em] text-cp-text-primary sm:text-xl">
            Leve o ChamadoPro com você
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-cp-text-secondary sm:text-[0.9375rem]">
            Baixe o aplicativo para Android. A versão para iPhone estará disponível em breve.
          </p>
        </div>
        <AppDownloadLinks className="shrink-0" />
      </div>
    </section>
  );
}

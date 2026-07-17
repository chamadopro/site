import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { HomeButtonLink } from '@/components/home/HomeButton';
import {
  PageHero,
  pageContainerClass,
  pageSectionClass,
} from '@/components/layout/PageShell';
import { appLinks } from '@/config/appLinks';
import { buildPageMetadata } from '@/lib/metadataHelpers';
import {
  clientBenefitsPage,
  clientJourneyPage,
  metadataCopy,
} from '@/lib/marketingContent';

export const metadata = buildPageMetadata({
  title: metadataCopy.paraClientes.title,
  description: metadataCopy.paraClientes.description,
  path: '/para-clientes',
});

function splitBenefit(item: string): { title: string; detail?: string } {
  const separator = ' — ';
  const index = item.indexOf(separator);
  if (index === -1) return { title: item };
  return {
    title: item.slice(0, index),
    detail: item.slice(index + separator.length),
  };
}

export default function ParaClientesPage() {
  return (
    <>
      <PageHero
        title={clientJourneyPage.heroTitle}
        description={clientJourneyPage.heroDescription}
      />

      <div className={pageSectionClass}>
        <div className={pageContainerClass}>
          <section>
            <h2 className="page-h2 text-brand-orange">
              Por que usar o ChamadoPro
            </h2>

            <ul className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:gap-5">
              {clientBenefitsPage.map((item) => {
                const { title, detail } = splitBenefit(item);

                return (
                  <li
                    key={item}
                    className="flex gap-3 rounded-2xl border border-brand-orange-border/40 bg-white p-4 sm:gap-3.5 sm:p-5"
                  >
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange-light text-brand-orange">
                      <Check size={16} strokeWidth={2.5} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="page-card-title">
                        {title}
                      </h3>
                      {detail ? (
                        <p className="page-body mt-1">
                          {detail}
                        </p>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          <p className="page-body mt-6 sm:mt-8">
            Quer ver a sequência completa?{' '}
            <Link
              href="/como-funciona"
              className="font-medium text-brand-orange transition-colors hover:text-[#e85a20]"
            >
              Confira como funciona
            </Link>
            .
          </p>

          <section className="mt-8 rounded-2xl border border-cp-border bg-white p-5 sm:mt-10 sm:p-6 lg:mt-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-8">
            <div className="max-w-xl">
              <h2 className="page-h2 text-cp-text-primary">
                {clientJourneyPage.ctaTitle}
              </h2>
              <p className="page-body mt-2">
                {clientJourneyPage.ctaDescription}
              </p>
            </div>

            <div className="mt-5 flex w-full flex-col gap-3 sm:mt-6 sm:w-auto sm:flex-row lg:mt-0 lg:shrink-0">
              <HomeButtonLink
                href={appLinks.entrarParaPedirServico()}
                variant="solid"
                size="hero"
                external
                className="sm:min-w-0 lg:px-8"
              >
                Entrar no app
                <ArrowRight size={18} strokeWidth={2.5} aria-hidden />
              </HomeButtonLink>
              <HomeButtonLink
                href={appLinks.cadastrarCliente}
                variant="primary"
                size="hero"
                external
                className="sm:min-w-0 lg:px-8"
              >
                Criar conta
              </HomeButtonLink>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

'use client';

import { PhoneMockup } from '@/components/home/PhoneMockup';
import { HomeButtonLink } from '@/components/home/HomeButton';
import { appLinks } from '@/config/appLinks';
import { homeCtas, homeHero } from '@/lib/homeContent';

export function HeroSection() {
  const { lead } = homeHero;

  return (
    <section className="relative overflow-x-hidden border-b border-gray-100 bg-white">
      <div className="home-container relative">
        <div className="grid items-center gap-8 py-8 sm:gap-10 sm:py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:py-12 xl:gap-12 xl:py-14">
          <div className="relative z-10 min-w-0">
            <h1 className="home-hero-title">
              Pare de perder tempo
              <br />
              procurando indicações.
            </h1>
            <p className="home-hero-lead">{lead}</p>

            <div className="mt-8 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-3 lg:mt-10">
              <HomeButtonLink
                href={appLinks.loginCliente}
                variant="primary"
                size="hero"
                external
                className="min-h-12 border-transparent bg-brand-orange-light py-3 text-sm sm:min-h-0 sm:py-4 sm:text-base"
              >
                {homeCtas.client}
              </HomeButtonLink>
              <HomeButtonLink
                href={appLinks.loginPrestador}
                variant="secondary"
                size="hero"
                external
                className="min-h-12 border-transparent bg-brand-blue-light py-3 text-sm sm:min-h-0 sm:py-4 sm:text-base"
              >
                {homeCtas.provider}
              </HomeButtonLink>
            </div>
          </div>

          <div className="relative order-last flex justify-center lg:order-none lg:justify-center lg:pr-8 xl:pr-12">
            {/* Mobile: fundo suave + card apertado */}
            <div
              className="pointer-events-none absolute inset-y-0 -right-4 left-4 rounded-[2rem] bg-brand-orange-light sm:left-12 lg:hidden"
              aria-hidden
            />

            {/* Desktop: glow suave atrás do aparelho — sem bloco retangular */}
            <div
              className="pointer-events-none absolute inset-0 hidden lg:block"
              aria-hidden
            >
              <div className="absolute left-1/2 top-1/2 h-[110%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-brand-orange-light/90 blur-2xl" />
              <div className="absolute left-1/2 top-1/2 h-[70%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff0eb]/70 blur-3xl" />
            </div>

            <div className="relative z-10 flex justify-center py-5 sm:py-6 lg:py-2">
              {/* Mobile card */}
              <div className="rounded-[1.6rem] bg-white/90 p-3 shadow-[0_24px_64px_rgba(13,24,36,0.14)] ring-1 ring-black/[0.05] backdrop-blur-sm sm:p-4 lg:hidden">
                <PhoneMockup
                  compact
                  className="w-[min(78vw,300px)] sm:w-[240px]"
                />
              </div>

              {/* Desktop: aparelho com bolhas internas no fluxo */}
              <div className="hidden lg:block">
                <PhoneMockup deviceFrame className="w-[260px] xl:w-[290px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

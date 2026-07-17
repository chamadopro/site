import { ArrowRight } from 'lucide-react';
import { AppDownloadLinks } from '@/components/AppDownloadLinks';
import { HomeButtonLink } from '@/components/home/HomeButton';
import { appLinks } from '@/config/appLinks';
import { homeClosing, homeCtas } from '@/lib/homeContent';

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent"
        aria-hidden
      />

      <div className="home-container home-section-tight lg:py-12 xl:py-14">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:text-left">
          <div className="max-w-xl">
            <h2 className="home-h2 text-white lg:text-[1.75rem] xl:text-2xl">
              {homeClosing.title}
            </h2>
            <p className="home-lead mt-3 text-white/60 lg:mt-4">{homeClosing.body}</p>
          </div>

          <div className="flex w-full shrink-0 flex-col items-center gap-4 sm:w-auto lg:items-end">
            <HomeButtonLink
              href={appLinks.entrarParaPedirServico()}
              variant="solid"
              size="hero"
              external
            >
              {homeCtas.start}
              <ArrowRight size={18} strokeWidth={2.5} aria-hidden />
            </HomeButtonLink>
            <AppDownloadLinks tone="dark" className="items-center lg:items-end" />
          </div>
        </div>
      </div>
    </section>
  );
}

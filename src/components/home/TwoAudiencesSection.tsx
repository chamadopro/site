import { Briefcase, Home } from 'lucide-react';
import { Check } from 'lucide-react';
import { HomeButtonLink } from '@/components/home/HomeButton';
import { HomeSectionHeader } from '@/components/home/HomeSectionHeader';
import { appLinks } from '@/config/appLinks';
import { homeBenefits, homeCtas } from '@/lib/homeContent';

/** Legado — substituído por BenefitsSection na home. Mantido para reuso. */
export function TwoAudiencesSection() {
  const { client, provider } = homeBenefits;

  return (
    <section className="home-section border-b border-gray-100 bg-white">
      <div className="home-container">
        <HomeSectionHeader title="Para clientes e prestadores" centered />

        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-2 lg:gap-6">
          <div className="home-card flex h-full flex-col border-brand-orange-border/40 bg-brand-orange-light/20 p-6 lg:p-8">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-orange-border bg-brand-orange-light">
              <Home size={22} className="text-brand-orange" aria-hidden />
            </div>
            <h3 className="home-card-title mt-4 text-base lg:text-lg">{client.title}</h3>
            <ul className="mt-4 flex-1 space-y-2.5">
              {client.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={15} className="mt-0.5 shrink-0 text-brand-orange" aria-hidden />
                  <span className="text-sm text-cp-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 lg:mt-6">
              <HomeButtonLink href={appLinks.loginCliente} external>
                {homeCtas.client}
              </HomeButtonLink>
            </div>
          </div>

          <div className="home-card flex h-full flex-col border-brand-blue-border/40 bg-brand-blue-light/30 p-6 lg:p-8">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-blue-border bg-brand-blue-light">
              <Briefcase size={22} className="text-brand-blue" aria-hidden />
            </div>
            <h3 className="home-card-title mt-4 text-base lg:text-lg">{provider.title}</h3>
            <ul className="mt-4 flex-1 space-y-2.5">
              {provider.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={15} className="mt-0.5 shrink-0 text-brand-blue" aria-hidden />
                  <span className="text-sm text-cp-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 lg:mt-6">
              <HomeButtonLink href={appLinks.loginPrestador} variant="secondary" external>
                {homeCtas.provider}
              </HomeButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

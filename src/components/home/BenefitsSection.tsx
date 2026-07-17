import { Check } from 'lucide-react';
import { HomeSectionHeader } from '@/components/home/HomeSectionHeader';
import { cn } from '@/lib/cn';
import { homeBenefits } from '@/lib/homeContent';

export function BenefitsSection() {
  const { client, provider } = homeBenefits;

  return (
    <section className="home-section border-b border-gray-100 bg-white">
      <div className="home-container">
        <HomeSectionHeader title="Benefícios" centered />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:gap-6">
          <div className="rounded-2xl border border-brand-orange-border/40 bg-brand-orange-light/20 p-6 lg:p-7">
            <h3 className="home-card-title text-base lg:text-lg">{client.title}</h3>
            <ul className="mt-5 space-y-3">
              {client.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-brand-orange"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span className="text-sm text-cp-text-secondary lg:text-[0.9375rem]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-blue-border/40 bg-brand-blue-light/30 p-6 lg:p-7">
            <h3 className="home-card-title text-base lg:text-lg">{provider.title}</h3>
            <ul className="mt-5 space-y-3">
              {provider.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check
                    size={16}
                    className={cn('mt-0.5 shrink-0 text-brand-blue')}
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span className="text-sm text-cp-text-secondary lg:text-[0.9375rem]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

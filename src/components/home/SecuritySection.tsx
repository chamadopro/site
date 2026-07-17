import { CircleCheck, MapPin, ShieldCheck, Star } from 'lucide-react';
import { HomeSectionHeader } from '@/components/home/HomeSectionHeader';
import { homeSecurity } from '@/lib/homeContent';

const securityIcons = {
  shield: ShieldCheck,
  star: Star,
  map: MapPin,
  check: CircleCheck,
} as const;

export function SecuritySection() {
  const { title, items } = homeSecurity;

  return (
    <section className="home-section border-b border-gray-100 bg-white">
      <div className="home-container">
        <HomeSectionHeader title={title} centered />

        <ul className="mt-10 grid grid-cols-2 gap-5 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {items.map((item) => {
            const Icon = securityIcons[item.icon];

            return (
              <li
                key={item.title}
                className="flex flex-col items-center rounded-2xl border border-gray-100 bg-cp-surface-muted/50 p-6 text-center lg:p-7"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue">
                  <Icon size={20} strokeWidth={2} aria-hidden />
                </div>
                <p className="home-card-title mt-4">{item.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

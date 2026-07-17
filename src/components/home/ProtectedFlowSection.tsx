import {
  Banknote,
  BellRing,
  CircleCheck,
  FileText,
  ShieldCheck,
  Smartphone,
  Wrench,
} from 'lucide-react';
import { HomeSectionHeader } from '@/components/home/HomeSectionHeader';
import { cn } from '@/lib/cn';
import {
  homeFullFlow,
  type HomeFullFlowStepColor,
} from '@/lib/homeContent';

const stepIcons = {
  publish: Smartphone,
  notify: BellRing,
  quotes: FileText,
  shield: ShieldCheck,
  work: Wrench,
  approve: CircleCheck,
  payout: Banknote,
} as const;

const stepStyles: Record<
  HomeFullFlowStepColor,
  { badge: string; icon: string }
> = {
  orange: {
    badge: 'bg-brand-orange text-white',
    icon: 'text-brand-orange bg-brand-orange-light',
  },
  blue: {
    badge: 'bg-brand-blue text-white',
    icon: 'text-brand-blue bg-brand-blue-light',
  },
  green: {
    badge: 'bg-brand-green text-white',
    icon: 'text-brand-green bg-brand-green-light',
  },
};

export function ProtectedFlowSection() {
  const { title, subtitle, steps } = homeFullFlow;

  return (
    <section className="home-section border-b border-gray-200/80 bg-cp-background">
      <div className="home-container">
        <HomeSectionHeader title={title} subtitle={subtitle} centered />

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5">
          {steps.map((step, index) => {
            const Icon = stepIcons[step.icon];
            const style = stepStyles[step.color];

            return (
              <li
                key={step.step}
                className={cn(
                  'home-card flex flex-col p-5 lg:p-6',
                  index === steps.length - 1 &&
                    'sm:col-span-2 lg:col-span-1 xl:col-span-1'
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={cn(
                      'inline-flex h-10 w-10 items-center justify-center rounded-full lg:h-11 lg:w-11',
                      style.icon
                    )}
                  >
                    <Icon size={20} strokeWidth={2} aria-hidden />
                  </div>
                  <span
                    className={cn(
                      'inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-xs font-semibold tabular-nums',
                      style.badge
                    )}
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="home-card-title mt-4">{step.title}</h3>
                <p className="home-card-body mt-2 flex-1">{step.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

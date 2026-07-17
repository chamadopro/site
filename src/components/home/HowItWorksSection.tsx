import { BellRing, FileText, Mic, ShieldCheck, Sparkles } from 'lucide-react';
import { HomeSectionHeader } from '@/components/home/HomeSectionHeader';
import { cn } from '@/lib/cn';
import { homeHowItWorks, type HomeHowItWorksStepColor } from '@/lib/homeContent';

const stepIcons = {
  speak: Mic,
  organize: Sparkles,
  notify: BellRing,
  choose: FileText,
  pay: ShieldCheck,
} as const;

const stepStyles: Record<HomeHowItWorksStepColor, string> = {
  orange: 'text-brand-orange bg-brand-orange-light',
  blue: 'text-brand-blue bg-brand-blue-light',
  green: 'text-brand-green bg-brand-green-light',
};

export function HowItWorksSection() {
  const { title, steps } = homeHowItWorks;

  return (
    <section className="home-section border-b border-gray-200/80 bg-cp-background">
      <div className="home-container">
        <HomeSectionHeader title={title} centered />

        <ol className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-5 lg:gap-4">
          {steps.map((step) => {
            const Icon = stepIcons[step.icon];

            return (
              <li
                key={step.step}
                className="home-card flex items-center gap-4 p-4 sm:flex-col sm:items-center sm:gap-0 sm:p-6 sm:text-center lg:p-7"
              >
                <div
                  className={cn(
                    'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12',
                    stepStyles[step.color]
                  )}
                >
                  <Icon size={22} strokeWidth={2} aria-hidden />
                </div>
                <div className="min-w-0 sm:mt-4 sm:flex sm:flex-col sm:items-center">
                  <span className="home-meta font-semibold tabular-nums text-cp-text-disabled">
                    {step.step}
                  </span>
                  <h3 className="home-card-title mt-0.5 sm:mt-2">{step.title}</h3>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

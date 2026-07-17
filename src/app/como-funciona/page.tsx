import {
  PageHero,
  pageContainerClass,
  pageSectionClass,
} from '@/components/layout/PageShell';
import { buildPageMetadata } from '@/lib/metadataHelpers';
import {
  clientFlowStepsPage,
  comoFuncionaPage,
  metadataCopy,
  providerFlowSteps,
} from '@/lib/marketingContent';
import { cn } from '@/lib/cn';

export const metadata = buildPageMetadata({
  title: metadataCopy.comoFunciona.title,
  description: metadataCopy.comoFunciona.description,
  path: '/como-funciona',
});

function JourneyColumn({
  title,
  steps,
  accent,
}: {
  title: string;
  steps: readonly { title: string; body: string }[];
  accent: 'orange' | 'blue';
}) {
  const isOrange = accent === 'orange';

  return (
    <section
      className={cn(
        'rounded-2xl border p-5 sm:p-6 lg:p-7',
        isOrange
          ? 'border-brand-orange-border/40 bg-brand-orange-light/15'
          : 'border-brand-blue-border/40 bg-brand-blue-light/25'
      )}
    >
      <h2
        className={cn(
          'page-h2',
          isOrange ? 'text-brand-orange' : 'text-brand-blue'
        )}
      >
        {title}
      </h2>

      <ol className="mt-5 space-y-0 sm:mt-6">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <li key={step.title} className="relative flex gap-3 sm:gap-4">
              {!isLast ? (
                <span
                  className={cn(
                    'absolute left-[15px] top-8 bottom-0 w-px sm:left-[17px]',
                    isOrange ? 'bg-brand-orange/20' : 'bg-brand-blue/20'
                  )}
                  aria-hidden
                />
              ) : null}

              <span
                className={cn(
                  'relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums sm:h-9 sm:w-9',
                  isOrange
                    ? 'bg-brand-orange-light text-brand-orange'
                    : 'bg-brand-blue-light text-brand-blue'
                )}
              >
                {index + 1}
              </span>

              <div className={cn('min-w-0 pb-5 sm:pb-6', isLast && 'pb-0 sm:pb-0')}>
                <h3 className="page-card-title">{step.title}</h3>
                <p className="page-body mt-1">{step.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default function ComoFuncionaPage() {
  return (
    <>
      <PageHero title={comoFuncionaPage.heroTitle} />

      <div className={pageSectionClass}>
        <div className={pageContainerClass}>
          <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:items-start lg:gap-8">
            <JourneyColumn
              title="Jornada do cliente"
              steps={clientFlowStepsPage}
              accent="orange"
            />
            <JourneyColumn
              title="Jornada do prestador"
              steps={providerFlowSteps}
              accent="blue"
            />
          </div>
        </div>
      </div>
    </>
  );
}

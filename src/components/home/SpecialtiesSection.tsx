import Link from 'next/link';
import { HomeSectionHeader } from '@/components/home/HomeSectionHeader';
import { homeSpecialtyTags } from '@/lib/homeContent';

export function SpecialtiesSection() {
  const { title, items, catalogLink } = homeSpecialtyTags;

  return (
    <section className="home-section border-b border-gray-200/80 bg-cp-background">
      <div className="home-container">
        <HomeSectionHeader title={title} centered />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5 lg:mt-12 lg:gap-3">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-cp-text-primary transition-all hover:border-brand-orange/60 hover:text-brand-orange hover:shadow-xs"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <p className="mt-6 text-center lg:mt-8">
          <Link
            href="/servicos"
            className="text-sm font-medium text-brand-blue hover:underline lg:text-base inline-flex items-center gap-1.5"
          >
            <span>{catalogLink}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}

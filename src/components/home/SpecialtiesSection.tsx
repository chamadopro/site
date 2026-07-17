import Link from 'next/link';
import { HomeSectionHeader } from '@/components/home/HomeSectionHeader';
import { homeSpecialtyTags } from '@/lib/homeContent';

export function SpecialtiesSection() {
  const { title, tags, catalogLink } = homeSpecialtyTags;

  return (
    <section className="home-section border-b border-gray-200/80 bg-cp-background">
      <div className="home-container">
        <HomeSectionHeader title={title} centered />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5 lg:mt-12 lg:gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-cp-text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-6 text-center lg:mt-8">
          <Link
            href="/servicos"
            className="text-sm font-medium text-brand-blue hover:underline lg:text-base"
          >
            {catalogLink} →
          </Link>
        </p>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { useCity } from '@/context/CityContext';
import { POPULAR_SERVICES } from '@/config/popularServices';
import { CIDADES_FASE_1 } from '@/lib/cidades';
import { servicePathForLocation } from '@/lib/servicePaths';
import { audienceClasses } from '@/lib/audienceColors';
import { cn } from '@/lib/cn';

const sectionPadding = 'py-12 sm:py-14';
const client = audienceClasses.client;

export function CitiesHubSection() {
  const { mode, cidade } = useCity();

  return (
    <section className={cn('bg-cp-surface', sectionPadding)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <MapPin className={cn('h-5 w-5', client.text)} />
          <h2 className="text-2xl font-bold text-cp-text-primary sm:text-3xl">
            Principais cidades
          </h2>
        </div>
        <p className="mt-2 max-w-2xl text-cp-text-secondary">
          {mode === 'brasil'
            ? 'Escolha uma cidade para ver serviços com foco local ou use o seletor no topo da página.'
            : `Você está vendo ${cidade?.nome ?? 'sua região'}. Explore outras cidades abaixo:`}
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {CIDADES_FASE_1.map((c) => {
            const isActive = mode === 'city' && cidade?.slug === c.slug;
            return (
              <div
                key={c.slug}
                className={cn(
                  'rounded-cp-card border bg-cp-background p-4',
                  isActive ? 'border-cp-accent/40 ring-1 ring-cp-accent/20' : 'border-cp-border'
                )}
              >
                <h3 className="font-semibold text-cp-text-primary">
                  {c.nome}, {c.uf}
                  {isActive && (
                    <span className="ml-1 text-xs font-normal text-cp-accent">(sua cidade)</span>
                  )}
                </h3>
                <ul className="mt-2 space-y-1">
                  {POPULAR_SERVICES.slice(0, 3).map((item) => (
                    <li key={`${c.slug}-${item.especialidade}`}>
                      <Link
                        href={servicePathForLocation(
                          item.categoria,
                          item.especialidade,
                          c.slug
                        )}
                        className={cn('text-xs hover:underline', client.text)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

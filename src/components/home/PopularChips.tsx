'use client';

import Link from 'next/link';
import { useCity } from '@/context/CityContext';
import { POPULAR_SERVICES } from '@/config/popularServices';
import { servicePathForLocation } from '@/lib/servicePaths';
import { audienceClasses } from '@/lib/audienceColors';
import { cn } from '@/lib/cn';

const client = audienceClasses.client;

export function PopularChips() {
  const { mode, cidade } = useCity();

  const chipsLabel =
    mode === 'brasil'
      ? 'Atalhos populares no Brasil:'
      : cidade
        ? `Atalhos em ${cidade.nome}:`
        : 'Atalhos populares:';

  return (
    <div>
      <p className="text-xs font-medium text-cp-text-secondary">{chipsLabel}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {POPULAR_SERVICES.map((item) => (
          <Link
            key={`${item.categoria}-${item.especialidade}`}
            href={servicePathForLocation(
              item.categoria,
              item.especialidade,
              mode === 'city' ? cidade?.slug : null
            )}
            className={cn(
              'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
              client.badge,
              'hover:bg-cp-accent hover:text-white'
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

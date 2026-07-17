'use client';

import { CityProvider } from '@/context/CityContext';
import type { ReactNode } from 'react';

export function ClientProviders({ children }: { children: ReactNode }) {
  return <CityProvider>{children}</CityProvider>;
}

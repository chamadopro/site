/**
 * Cores por público — regra da marca ChamadoPro:
 * - Laranja (cp-accent): jornada do cliente — "Chamado"
 * - Azul (cp-brand-blue): jornada do prestador — "Pro"
 */
export type Audience = 'client' | 'provider' | 'neutral';

export const audienceClasses = {
  client: {
    badge:
      'border border-cp-accent/20 bg-cp-accent-soft text-cp-accent',
    icon: 'bg-cp-accent-soft text-cp-accent',
    iconInteractive:
      'bg-cp-accent-soft text-cp-accent group-hover:bg-cp-accent group-hover:text-white',
    text: 'text-cp-accent',
    textHover: 'hover:text-cp-accent',
    borderHover: 'hover:border-cp-accent/30',
    sectionBg: 'bg-cp-accent-soft/50',
  },
  provider: {
    badge:
      'border border-cp-brand-blue/20 bg-cp-brand-blue-soft text-cp-brand-blue',
    icon: 'bg-cp-brand-blue-soft text-cp-brand-blue',
    iconInteractive:
      'bg-cp-brand-blue-soft text-cp-brand-blue group-hover:bg-cp-brand-blue group-hover:text-white',
    text: 'text-cp-brand-blue',
    textHover: 'hover:text-cp-brand-blue',
    borderHover: 'hover:border-cp-brand-blue/30',
    sectionBg: 'bg-cp-brand-blue-soft/50',
  },
  neutral: {
    badge: 'border border-cp-border bg-cp-surface text-cp-text-secondary',
    icon: 'bg-cp-surface-muted text-cp-text-primary',
    iconInteractive:
      'bg-cp-surface-muted text-cp-text-primary group-hover:bg-cp-border/60',
    text: 'text-cp-text-primary',
    textHover: 'hover:text-cp-text-primary',
    borderHover: 'hover:border-cp-border',
    sectionBg: 'bg-cp-background',
  },
} as const;

export function navHoverClass(href: string): string {
  if (href === '/para-clientes') return 'hover:text-cp-accent';
  if (href === '/para-prestadores') return 'hover:text-cp-brand-blue';
  return 'hover:text-cp-text-primary';
}

export function linkHoverClass(audience?: Audience): string {
  if (audience === 'client') return 'hover:text-cp-accent';
  if (audience === 'provider') return 'hover:text-cp-brand-blue';
  return 'hover:text-cp-text-primary';
}

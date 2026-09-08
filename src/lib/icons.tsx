import {
  Armchair,
  Computer,
  Droplet,
  Flower2,
  Hammer,
  Key,
  LucideIcon,
  Sparkles,
  Square,
  Truck,
  Wind,
  Wrench,
  Zap,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Hammer,
  Zap,
  Droplet,
  Wind,
  Square,
  Sparkles,
  Flower2,
  Truck,
  Computer,
  Wrench,
  Armchair,
  Key,
};

export function getCategoryIcon(name?: string | null): LucideIcon {
  if (!name) return Hammer;
  return ICON_MAP[name] ?? Hammer;
}

export function CategoryIcon({
  name,
  className,
}: {
  name?: string | null;
  className?: string;
}) {
  switch (name) {
    case 'Zap':
      return <Zap className={className} aria-hidden />;
    case 'Droplet':
      return <Droplet className={className} aria-hidden />;
    case 'Wind':
      return <Wind className={className} aria-hidden />;
    case 'Square':
      return <Square className={className} aria-hidden />;
    case 'Sparkles':
      return <Sparkles className={className} aria-hidden />;
    case 'Flower2':
      return <Flower2 className={className} aria-hidden />;
    case 'Truck':
      return <Truck className={className} aria-hidden />;
    case 'Computer':
      return <Computer className={className} aria-hidden />;
    case 'Wrench':
      return <Wrench className={className} aria-hidden />;
    case 'Armchair':
      return <Armchair className={className} aria-hidden />;
    case 'Key':
      return <Key className={className} aria-hidden />;
    case 'Hammer':
    default:
      return <Hammer className={className} aria-hidden />;
  }
}

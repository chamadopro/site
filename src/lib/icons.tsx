import {
  Computer,
  Droplet,
  Flower2,
  Hammer,
  LucideIcon,
  Sparkles,
  Square,
  Truck,
  Wind,
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
};

export function getCategoryIcon(name?: string | null): LucideIcon {
  if (!name) return Hammer;
  return ICON_MAP[name] ?? Hammer;
}

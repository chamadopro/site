import { CreditCard, Check, Star } from 'lucide-react';

const icons = {
  check: Check,
  star: Star,
  card: CreditCard,
} as const;

interface HomePillProps {
  label: string;
  icon: keyof typeof icons;
  color: 'orange' | 'blue';
}

export function HomePill({ label, icon, color }: HomePillProps) {
  const Icon = icons[icon];
  const iconColor = color === 'orange' ? '#FF6B35' : '#185FA5';

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200/80 bg-white px-3 py-1.5 text-[11px] text-gray-600 lg:text-xs">
      <Icon size={11} color={iconColor} aria-hidden />
      {label}
    </span>
  );
}

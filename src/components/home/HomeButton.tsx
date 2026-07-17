import Link from 'next/link';
import { cn } from '@/lib/cn';

type HomeButtonVariant = 'primary' | 'secondary' | 'solid' | 'brand';
type HomeButtonSize = 'default' | 'hero';

const variants: Record<HomeButtonVariant, string> = {
  primary:
    'border-2 border-brand-orange bg-white text-brand-orange hover:bg-brand-orange-light',
  secondary:
    'border-2 border-brand-blue bg-white text-brand-blue hover:bg-brand-blue-light',
  solid:
    'border-2 border-transparent bg-brand-orange text-white hover:bg-[#e85a20] shadow-[0_8px_24px_rgba(255,107,53,0.35)] hover:shadow-[0_12px_32px_rgba(255,107,53,0.4)]',
  brand:
    'border-2 border-transparent bg-brand-blue text-white hover:bg-[#134a82] shadow-[0_8px_24px_rgba(24,95,165,0.3)] hover:shadow-[0_12px_32px_rgba(24,95,165,0.35)]',
};

const sizes: Record<HomeButtonSize, string> = {
  default: 'px-5 py-2.5 text-sm font-medium',
  hero: 'w-full px-8 py-4 text-base font-semibold sm:w-auto sm:min-w-[17.5rem] lg:px-10',
};

const focusRings: Record<HomeButtonVariant, string> = {
  primary: 'focus-visible:ring-brand-orange/40',
  secondary: 'focus-visible:ring-brand-blue/40',
  solid: 'focus-visible:ring-brand-orange/50',
  brand: 'focus-visible:ring-brand-blue/50',
};

interface HomeButtonLinkProps {
  href: string;
  variant?: HomeButtonVariant;
  size?: HomeButtonSize;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function HomeButtonLink({
  href,
  variant = 'primary',
  size = 'default',
  external,
  className,
  children,
}: HomeButtonLinkProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full transition-all',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    sizes[size],
    variants[variant],
    focusRings[variant],
    className
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

import Link from 'next/link';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-cp-accent text-white hover:bg-[var(--cp-accent-hover)] shadow-sm border border-transparent',
  secondary: 'bg-cp-surface-muted text-cp-text-primary hover:bg-cp-border/40 border border-cp-border',
  outline:
    'border border-cp-border bg-cp-surface text-cp-text-primary hover:bg-cp-surface-muted',
  ghost: 'bg-transparent text-cp-text-primary hover:bg-cp-surface-muted',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-sm min-h-[40px]',
  md: 'h-11 px-5 text-sm min-h-[44px]',
  lg: 'h-12 px-6 text-base min-h-[48px]',
};

const baseClasses =
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cp-accent/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

export function buttonClassName({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
}

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>,
    ButtonBaseProps {}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClassName({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  external?: boolean;
}

export function ButtonLink({
  href,
  external,
  variant = 'primary',
  size = 'md',
  className,
  children,
}: ButtonLinkProps) {
  const classes = buttonClassName({ variant, size, className });

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

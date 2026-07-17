import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  href?: string;
  textClassName?: string;
}

const sizeClasses = {
  sm: 'h-11 w-11',
  md: 'h-[3.3rem] w-[3.3rem]',
  lg: 'h-[4.4rem] w-[4.4rem]',
} as const;

const textSizeClasses = {
  sm: 'text-[0.9375rem]',
  md: 'text-xl',
  lg: 'text-[1.65rem]',
} as const;

export function Logo({
  size = 'md',
  showText = true,
  className,
  href = '/',
  textClassName,
}: LogoProps) {
  const content = (
    <div className={cn('flex items-center gap-2', className)}>
      <div className={cn(sizeClasses[size], 'relative shrink-0')}>
        <Image
          src="/logo.png"
          alt="ChamadoPro"
          fill
          sizes="64px"
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span className={cn('font-bold leading-none', textClassName ?? textSizeClasses[size])}>
          <span className="text-cp-accent">Chamado</span>
          <span className="text-cp-brand-blue">Pro</span>
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex hover:opacity-90 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}

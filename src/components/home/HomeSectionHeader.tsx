import type { ReactNode } from 'react';

interface HomeSectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  centered?: boolean;
}

export function HomeSectionHeader({
  title,
  subtitle,
  action,
  centered = false,
}: HomeSectionHeaderProps) {
  return (
    <div
      className={
        centered
          ? 'text-center'
          : 'flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between'
      }
    >
      <div className={centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}>
        <h2 className="home-h2">{title}</h2>
        {subtitle && <p className="home-lead mt-1.5 lg:mt-2">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

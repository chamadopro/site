import { Download } from 'lucide-react';
import { appLinks } from '@/config/appLinks';
import { cn } from '@/lib/cn';

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.2.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
    </svg>
  );
}

interface AppDownloadLinksProps {
  className?: string;
  /** Visual para fundo escuro (closing da home). */
  tone?: 'light' | 'dark';
}

export function AppDownloadLinks({
  className,
  tone = 'light',
}: AppDownloadLinksProps) {
  const isDark = tone === 'dark';

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <p
        className={cn(
          'text-xs font-medium',
          isDark ? 'text-white/50' : 'text-cp-text-secondary'
        )}
      >
        Baixe o app
      </p>
      <div className="flex flex-wrap gap-2.5">
        <a
          href={appLinks.apkAndroid}
          download
          className={cn(
            'inline-flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 transition-colors',
            isDark
              ? 'border-white/15 bg-white/10 text-white hover:bg-white/15'
              : 'border-cp-border bg-white text-cp-text-primary hover:border-gray-300 hover:bg-gray-50'
          )}
        >
          <AndroidIcon className="h-5 w-5 shrink-0" />
          <span className="min-w-0 text-left leading-tight">
            <span className="block text-[10px] opacity-70">Android</span>
            <span className="flex items-center gap-1 text-sm font-semibold">
              Baixar APK
              <Download size={14} strokeWidth={2.5} aria-hidden />
            </span>
          </span>
        </a>

        <span
          className={cn(
            'inline-flex cursor-not-allowed items-center gap-2.5 rounded-xl border px-3.5 py-2.5 opacity-60',
            isDark
              ? 'border-white/10 bg-white/5 text-white'
              : 'border-cp-border bg-gray-50 text-cp-text-secondary'
          )}
          title="Em breve"
          aria-disabled="true"
        >
          <AppleIcon className="h-5 w-5 shrink-0" />
          <span className="min-w-0 text-left leading-tight">
            <span className="block text-[10px] opacity-70">iPhone</span>
            <span className="block text-sm font-semibold">Em breve</span>
          </span>
        </span>
      </div>
    </div>
  );
}

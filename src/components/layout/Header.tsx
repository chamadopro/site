'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Menu, UserPlus, X } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { CitySelector } from '@/components/location/CitySelector';
import { appLinks } from '@/config/appLinks';
import { cn } from '@/lib/cn';

const primaryNav = [
  { href: '/', label: 'Início' },
  { href: '/como-funciona', label: 'Como funciona' },
  { href: '/para-clientes', label: 'Para clientes' },
  { href: '/para-prestadores', label: 'Para prestadores' },
] as const;

const extraNav = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && headerRef.current && !headerRef.current.contains(target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/90"
    >
      <div className="home-container flex h-14 items-center justify-between gap-6 lg:h-16">
        <Logo
          size="sm"
          textClassName="text-base font-bold tracking-tight min-[380px]:text-lg lg:text-xl"
        />

        <nav className="hidden items-center gap-7 lg:flex xl:gap-9" aria-label="Principal">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-[13px] font-medium transition-colors lg:text-sm',
                pathname === item.href
                  ? 'text-brand-orange'
                  : 'text-gray-500 hover:text-cp-text-primary'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <CitySelector compact />
          <a
            href={appLinks.login}
            className="text-sm font-medium text-gray-600 hover:text-cp-text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar
          </a>
          <a
            href={appLinks.register}
            className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-cp-text-primary transition-colors hover:border-gray-300 hover:bg-gray-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cadastrar-se
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-1 lg:hidden">
          <Link
            href="/"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-cp-text-primary transition-colors hover:bg-gray-50"
            aria-label="Ir para o início"
          >
            <Home className="h-[19px] w-[19px]" />
          </Link>
          <a
            href={appLinks.register}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-cp-text-primary transition-colors hover:bg-gray-50"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cadastrar"
          >
            <UserPlus className="h-[19px] w-[19px]" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-cp-text-primary transition-colors hover:bg-gray-50"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'grid overflow-hidden border-gray-100 bg-white transition-[grid-template-rows,opacity,border-color] duration-300 ease-out lg:hidden',
          open
            ? 'grid-rows-[1fr] border-t opacity-100'
            : 'grid-rows-[0fr] border-t-0 opacity-0'
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="home-container mx-auto flex flex-col gap-1 py-3" aria-label="Mobile">
            <div className="mb-2 border-b border-gray-100 pb-2">
              <CitySelector />
            </div>
            {[...primaryNav, ...extraNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'text-brand-orange'
                    : 'text-cp-text-primary hover:bg-gray-50'
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2 border-t border-gray-100 pt-3">
              <a
                href={appLinks.login}
                className="rounded-lg border border-gray-200 px-4 py-2.5 text-center text-sm font-medium transition-colors hover:bg-gray-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

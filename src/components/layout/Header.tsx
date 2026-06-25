'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { ButtonLink } from '@/components/ui/Button';
import { appLinks } from '@/config/appLinks';
import { cn } from '@/lib/cn';

const navItems = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/como-funciona', label: 'Como funciona' },
  { href: '/para-clientes', label: 'Para clientes' },
  { href: '/para-prestadores', label: 'Para prestadores' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cp-surface shadow-sm border-b border-cp-border">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Logo
          size="sm"
          textClassName="text-[11px] leading-none tracking-tight sm:text-sm md:text-xl"
        />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-cp-text-secondary transition-colors hover:bg-cp-surface-muted hover:text-cp-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <ButtonLink href={appLinks.login} variant="outline" size="sm" external>
            Entrar
          </ButtonLink>
          <ButtonLink href={appLinks.cadastrarCliente} variant="primary" size="sm" external>
            Cadastrar-se
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cp-border text-cp-text-primary lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          'border-t border-cp-border bg-cp-surface lg:hidden',
          open ? 'block' : 'hidden'
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-cp-text-primary hover:bg-cp-surface-muted"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 grid gap-2 border-t border-cp-border pt-3">
            <ButtonLink href={appLinks.login} variant="outline" size="md" external>
              Entrar no app
            </ButtonLink>
            <ButtonLink href={appLinks.cadastrarCliente} variant="primary" size="md" external>
              Cadastrar-se
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

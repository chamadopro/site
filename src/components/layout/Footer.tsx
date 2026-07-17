import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { appLinks, siteContact } from '@/config/appLinks';
import type { Audience } from '@/lib/audienceColors';
import { linkHoverClass } from '@/lib/audienceColors';

type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
  audience?: Audience;
};

const footerLinks = {
  produto: [
    { href: '/servicos', label: 'Serviços', audience: 'client' },
    { href: '/como-funciona', label: 'Como funciona' },
    { href: '/faq', label: 'FAQ' },
  ] satisfies FooterLink[],
  empresa: [
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' },
  ] satisfies FooterLink[],
  legal: [
    { href: appLinks.politicaPrivacidade, label: 'Privacidade', external: true },
    { href: appLinks.termosCliente, label: 'Termos do cliente', audience: 'client', external: true },
    {
      href: appLinks.termosPrestador,
      label: 'Termos do prestador',
      audience: 'provider',
      external: true,
    },
  ] satisfies FooterLink[],
} as const;

function FooterColumn({ title, links }: { title: string; links: readonly FooterLink[] }) {
  return (
    <div className="min-w-0 lg:min-w-[8.5rem]">
      <h3 className="text-sm font-semibold text-cp-text-primary">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                className={`text-sm leading-snug text-cp-text-secondary transition-colors ${linkHoverClass(link.audience)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className={`text-sm leading-snug text-cp-text-secondary transition-colors ${linkHoverClass(link.audience)}`}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-cp-border bg-cp-surface">
      <div className="home-container py-10 lg:py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-sm">
            <Logo size="sm" href="/" />
            <p className="mt-4 text-sm leading-relaxed text-cp-text-secondary">
              Praticidade para quem contrata, oportunidade para quem trabalha.
            </p>
            <p className="mt-4 text-sm">
              <a
                href={siteContact.mailto}
                className="text-cp-text-secondary transition-colors hover:text-cp-text-primary"
              >
                {siteContact.email}
              </a>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 sm:gap-8 lg:flex lg:gap-14 xl:gap-20">
            <FooterColumn title="Produto" links={footerLinks.produto} />
            <FooterColumn title="Empresa" links={footerLinks.empresa} />
            <FooterColumn title="Legal" links={footerLinks.legal} />
          </div>
        </div>

        <div className="mt-10 border-t border-cp-border pt-6 text-center text-sm text-cp-text-secondary lg:mt-12 lg:text-left">
          © {new Date().getFullYear()} ChamadoPro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { appLinks, siteContact } from '@/config/appLinks';
import type { Audience } from '@/lib/audienceColors';
import { linkHoverClass } from '@/lib/audienceColors';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-1.24.325a1.54 1.54 0 0 1-1.745-.913 1.55 1.55 0 0 1-.086-.746l.324-1.225-.215-.36a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

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
            <div className="mt-5">
              <p className="text-sm font-semibold text-cp-text-primary">Quer saber mais</p>
              <ul className="mt-2.5 space-y-2">
                <li>
                  <a
                    href={siteContact.mailto}
                    className="text-sm text-cp-text-secondary transition-colors hover:text-cp-text-primary"
                  >
                    {siteContact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={siteContact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cp-text-secondary transition-colors hover:text-[#25D366]"
                    aria-label="Falar no WhatsApp"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
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

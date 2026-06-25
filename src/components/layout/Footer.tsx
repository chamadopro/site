import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { appLinks, siteContact } from '@/config/appLinks';

const footerLinks = {
  produto: [
    { href: '/servicos', label: 'Serviços' },
    { href: '/como-funciona', label: 'Como funciona' },
    { href: '/faq', label: 'FAQ' },
  ],
  publico: [
    { href: '/para-clientes', label: 'Para clientes' },
    { href: '/para-prestadores', label: 'Para prestadores' },
    { href: '/parceiros', label: 'Parceiros' },
  ],
  empresa: [
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' },
  ],
  legal: [
    { href: appLinks.politicaPrivacidade, label: 'Privacidade', external: true },
    { href: appLinks.termosCliente, label: 'Termos do cliente', external: true },
    { href: appLinks.termosPrestador, label: 'Termos do prestador', external: true },
  ],
} as const;

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ href: string; label: string; external?: boolean }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-cp-text-primary">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                className="text-sm text-cp-text-secondary hover:text-cp-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-sm text-cp-text-secondary hover:text-cp-accent transition-colors"
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
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo size="sm" href="/" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cp-text-secondary">
              Marketplace de serviços com orçamentos, pagamento seguro e profissionais
              verificados na sua região.
            </p>
            <p className="mt-4 text-sm text-cp-text-secondary">
              <a href={siteContact.mailto} className="hover:text-cp-accent transition-colors">
                {siteContact.email}
              </a>
            </p>
          </div>
          <FooterColumn title="Produto" links={footerLinks.produto} />
          <FooterColumn title="Público" links={footerLinks.publico} />
          <FooterColumn title="Empresa" links={[...footerLinks.empresa, ...footerLinks.legal]} />
        </div>
        <div className="mt-10 border-t border-cp-border pt-6 text-sm text-cp-text-secondary">
          © {new Date().getFullYear()} ChamadoPro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

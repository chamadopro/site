import { SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/siteConfig';

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl('/logo.png'),
    description:
      'Plataforma que conecta clientes que precisam de serviços a profissionais autônomos com orçamentos e pagamento protegido.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-92614-2121',
      email: 'contato@chamadopro.com.br',
      contactType: 'customer service',
      availableLanguage: ['Portuguese'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Encontre profissionais qualificados e receba orçamentos para reformas, elétrica, hidráulica, climatização, limpeza e mais com pagamento protegido.',
    inLanguage: 'pt-BR',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface ServiceJsonLdProps {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}

export function ServiceJsonLd({ name, description, path, areaServed }: ServiceJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(areaServed
      ? {
          areaServed: {
            '@type': 'City',
            name: areaServed,
          },
        }
      : {
          areaServed: {
            '@type': 'Country',
            name: 'Brasil',
          },
        }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  if (!items || items.length === 0) return null;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

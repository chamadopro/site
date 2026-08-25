import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { OrganizationJsonLd } from '@/components/seo/JsonLd';
import { AppDownloadSection } from '@/components/AppDownloadSection';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ProviderPromoBanner } from '@/components/promocoes/ProviderPromoCard';
import { ClientProviders } from '@/components/providers/ClientProviders';
import { DEFAULT_OG_IMAGE, OG_IMAGE_VERSION, SITE_NAME, SITE_URL } from '@/lib/siteConfig';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const defaultDescription =
  'Posta o que precisa e receba orçamentos de profissionais da sua região. Tudo pelo app ChamadoPro, com pagamento protegido.';

const shareImage = `${DEFAULT_OG_IMAGE}?v=${OG_IMAGE_VERSION}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ChamadoPro — Do chamado ao orçamento em minutos',
    template: '%s | ChamadoPro',
  },
  description: defaultDescription,
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: defaultDescription,
    url: SITE_URL,
    images: [
      {
        url: shareImage,
        width: 1024,
        height: 1024,
        alt: SITE_NAME,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    // Igual ao app: miniatura do logo na lateral do preview
    card: 'summary',
    title: SITE_NAME,
    description: defaultDescription,
    images: [shareImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <ClientProviders>
          <OrganizationJsonLd />
          <Header />
          <ProviderPromoBanner />
          <main className="flex-1">{children}</main>
          <AppDownloadSection />
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}

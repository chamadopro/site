import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chamadopro.com.br'),
  title: {
    default: 'ChamadoPro — Encontre profissionais confiáveis perto de você',
    template: '%s | ChamadoPro',
  },
  description:
    'Site institucional do ChamadoPro. Conheça os serviços disponíveis e acesse o aplicativo para solicitar orçamentos com pagamento seguro.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ChamadoPro',
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

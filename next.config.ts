import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'www.chamadopro.com.br' }],
        destination: 'https://chamadopro.com.br',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.chamadopro.com.br' }],
        destination: 'https://chamadopro.com.br/:path*',
        permanent: true,
      },
      { source: '/home', destination: '/', permanent: true },
      // Aliases populares de busca direcionando com 301 para a especialidade canônica
      { source: '/servicos/eletricista', destination: '/servicos/eletricista-residencial', permanent: true },
      { source: '/servicos/pintor', destination: '/servicos/pintor-residencial', permanent: true },
      { source: '/servicos/montador-de-moveis', destination: '/servicos/montador-moveis', permanent: true },
      { source: '/servicos/montador', destination: '/servicos/montador-moveis', permanent: true },
      { source: '/servicos/ar-condicionado', destination: '/servicos/instalador-ar-condicionado', permanent: true },
      { source: '/servicos/mudanca', destination: '/servicos/mudanca-residencial', permanent: true },
      { source: '/servicos/instalador-box', destination: '/servicos/instalador-de-box', permanent: true },
      { source: '/servicos/troca-vidros', destination: '/servicos/troca-de-vidros', permanent: true },
      { source: '/servicos/box-de-banheiro', destination: '/servicos/instalador-de-box', permanent: true },
      // Redirecionamento 301 de URLs legadas de 4 níveis para a nova estrutura limpa
      { source: '/servicos/:cat/:esp/:cidade', destination: '/servicos/:esp/:cidade', permanent: true },
    ];
  },
};

export default nextConfig;

/**
 * Links para o aplicativo ChamadoPro (app.chamadopro.com.br).
 * O site institucional não processa pedidos — apenas direciona para login/cadastro no app.
 */
const appUrl =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/+$/, '') ||
  'https://app.chamadopro.com.br';

/** Rotas canônicas no app (espelho de createPostNavigation.ts no monorepo social). */
export const APP_PATHS = {
  pedirServico: '/posts/create?fluxo=chama-ai',
} as const;

function loginWithRedirect(path: string): string {
  return `${appUrl}/login?redirect=${encodeURIComponent(path)}`;
}

export const appLinks = {
  /** URL base do aplicativo */
  home: appUrl,

  /** Entrar no app (sem redirecionamento pós-login) */
  login: `${appUrl}/login`,

  /** Cadastro geral */
  register: `${appUrl}/register`,

  /** Cadastro de cliente — fluxo para quem quer solicitar serviços */
  cadastrarCliente: `${appUrl}/register-cliente`,

  /** Cadastro de prestador */
  cadastroPrestador: `${appUrl}/cadastro-prestador`,

  /**
   * Entrar no app e, após autenticação, abrir o fluxo de pedido (Chama.AI).
   * O pedido é feito dentro do aplicativo, não no site.
   */
  entrarParaPedirServico: () => loginWithRedirect(APP_PATHS.pedirServico),

  /** Alias semântico — mesmo fluxo do pedido via Chama.AI após login */
  entrarChamaAi: () => loginWithRedirect(APP_PATHS.pedirServico),

  politicaPrivacidade: `${appUrl}/politica-de-privacidade`,
  termosCliente: `${appUrl}/termos-de-uso-cliente`,
  termosPrestador: `${appUrl}/termos-de-uso-prestador`,
} as const;

export const siteContact = {
  email: 'contato@chamadopro.com.br',
  mailto: 'mailto:contato@chamadopro.com.br',
} as const;

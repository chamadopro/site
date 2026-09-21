import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const APEX_HOST = 'chamadopro.com.br';
const WWW_HOST = 'www.chamadopro.com.br';

/** www e apex no mesmo conteúdo: o Google classifica como cópia sem canônico. */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase();
  if (host !== WWW_HOST) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.protocol = 'https:';
  url.hostname = APEX_HOST;
  url.port = '';
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};

import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const isAuthPage = request.nextUrl.pathname.startsWith('/login');

  if (!isAuthPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|static).*)'],
};

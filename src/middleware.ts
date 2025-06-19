import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const publicPaths = ['/login', '/registration'];
  const pathname = request.nextUrl.pathname;

  const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

  if (!isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|static).*)'],
};

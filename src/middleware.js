import { NextResponse } from 'next/server';
import { reviewToken } from './utilities/handleToken';

export async function middleware(req) {
  const validUser = await reviewToken();
  const authRoutes = ['/signin'];
  const currentUrl = req.nextUrl.pathname;
  if (validUser && authRoutes.includes(currentUrl))
    return NextResponse.redirect(new URL('/dashboard', req.url));

  if (!validUser && !authRoutes.includes(currentUrl))
    return NextResponse.redirect(new URL('/signin', req.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

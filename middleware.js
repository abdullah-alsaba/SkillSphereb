import { NextResponse } from "next/server";

export function middleware(request) {
  const session = request.cookies.get("better-auth.session_token");
  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/profile", "/courses/"];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/courses/:path*"],
};

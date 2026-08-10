import { NextResponse } from "next/server";

export function middleware(request) {
  const session = request.cookies.get("better-auth.session_token");
  const { pathname } = request.nextUrl;

  const isProtected =
    pathname.startsWith("/profile") || /^\/courses\/[^/]+$/.test(pathname);

  if (isProtected && !session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/courses/:path+"],
};

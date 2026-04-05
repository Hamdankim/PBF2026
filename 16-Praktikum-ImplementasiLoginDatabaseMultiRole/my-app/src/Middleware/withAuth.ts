import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

const hanyaAdmin = ["/admin"];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = [],
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    const isProtectedRoute = requireAuth.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`),
    );
    const isAdminRoute = hanyaAdmin.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`),
    );

    if (isProtectedRoute) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      if (!token) {
        const loginUrl = new URL("/auth/login", req.url);
        loginUrl.searchParams.set(
          "callbackUrl",
          `${req.nextUrl.pathname}${req.nextUrl.search}`,
        );
        return NextResponse.redirect(loginUrl);
      }

      if (token.role !== "admin" && isAdminRoute) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
    return middleware(req, next);
  };
}
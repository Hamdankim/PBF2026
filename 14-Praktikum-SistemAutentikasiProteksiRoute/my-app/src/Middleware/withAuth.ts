import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = [],
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    const isProtected = requireAuth.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`),
    );

    if (isProtected) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });
      if (!token) {
        const loginUrl = new URL("/", req.url);
        return NextResponse.redirect(loginUrl);
      }
    }

    const response = await middleware(req, next);
    return response ?? NextResponse.next();
  }
}
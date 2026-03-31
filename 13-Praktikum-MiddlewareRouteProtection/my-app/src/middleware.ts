import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Simulasi status login (nantinya bisa diganti dengan pengecekan token/cookie)
  const isLogin = true;

  if (!isLogin) {
    // Jika tidak login, redirect ke halaman login
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Jika login, izinkan akses ke halaman yang dituju
  return NextResponse.next();
}

// Menentukan rute mana saja yang akan diproteksi oleh middleware ini
export const config = {
  matcher: ["/produk/:path*", "/about/:path*"],
};
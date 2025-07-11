import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default async function middleware(request: any) {
  const session = await auth()
  const { pathname } = request.nextUrl

  const publicRoutes = ["/", "/auth/signin", "/auth/register"]
  const adminRoutes = ["/dashboard"]
  const isPublicRoute = publicRoutes.includes(pathname)
  const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route))

  if (isPublicRoute) {
    if (session?.user && (pathname === "/auth/signin" || pathname === "/auth/register")) {
      return NextResponse.redirect(new URL("/", request.url))
    }
    return NextResponse.next()
  }

  if (!session?.user) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  if (isAdminRoute && session.user.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}

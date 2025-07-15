import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

function authMiddleware(request: NextRequest): NextResponse | undefined {
  const token = request.cookies.get('auth_token')?.value
  const pathname = request.nextUrl.pathname

  const localePattern = /^\/(en|pt|es)(?=\/|$)/
  const localeMatch = pathname.match(localePattern)
  const locale = localeMatch?.[1] || 'en'

  // Remove locale prefix
  const normalizedPath = pathname.replace(localePattern, '')

  const protectedPaths = ['/', 'feed']
  const isProtected = protectedPaths.some(
    (path) => normalizedPath === path || normalizedPath.startsWith(`${path}/`)
  )

  if (isProtected && !token) {
    const loginUrl = new URL(`/${locale}/login`, request.url)
    return NextResponse.redirect(loginUrl)
  }
}

export function middleware(request: NextRequest) {
  const authResponse = authMiddleware(request)
  if (authResponse) return authResponse

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/', '/(en|pt-BR|es)/:path*']
}

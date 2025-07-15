import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'pt', 'es'],
  defaultLocale: 'pt',
  localeDetection: true,
  localePrefix: 'always',

  pathnames: {
    '/feed': {
      en: '/feed',
      pt: '/feed',
      es: '/feed'
    },
    '/privacy-policy': {
      pt: '/politica-de-privacidade',
      es: '/politica-de-privacidad'
    },
    '/cookie-policy': {
      pt: '/politica-de-cookies',
      es: '/politica-de-cookies'
    },
    '/terms-of-service': {
      pt: '/termos-de-servico',
      es: '/terminos-del-servicio'
    },
    '/create-account': {
      pt: '/criar-conta',
      es: '/crear-cuenta'
    },
    '/login': {
      pt: '/entrar',
      es: '/iniciar-sesion'
    }
  }
})

export type Locale = (typeof routing.locales)[number]
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)

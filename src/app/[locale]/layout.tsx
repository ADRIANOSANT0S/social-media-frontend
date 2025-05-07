import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

import { routing, type Locale } from '@/i18n/routing'
import './globals.css'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { ThemeProvider } from '@/components/provider'

interface IRootLayout {
  children: ReactNode
  params: Promise<{ locale: Locale }>
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Twitter',
  description: 'Twitter the best social media'
}

export default async function RootLayout({ children, params }: IRootLayout) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) return notFound()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable}
      antialiased`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

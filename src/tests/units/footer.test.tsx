import type { IInternalLinks } from '@/types'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Footer from '../../shared/components/Footer'

// ✅ Corrige o mock do Link para evitar recursão infinita
vi.mock('@/i18n/routing', () => ({
  Link: ({ href, children }: IInternalLinks) => <a href={href}>{children}</a>
}))

// ✅ Mock do hook useMediaQuery
vi.mock('../../shared/hooks/useMediaQuery', () => ({
  useMediaQuery: () => ({ tablet: false, desktop: false })
}))

describe('Footer component', () => {
  it('renderiza todos os links corretamente com tradução', () => {
    const mockTranslate = vi.fn((value) => `translated(${value})`)

    const mockLinks: IInternalLinks[] = [
      {
        id: 1,
        href: '/feed',
        title: 'feed_title',
        children: 'feed_label'
      },
      {
        id: 2,
        href: '/privacy-policy',
        title: 'privacy_policy_title',
        children: 'privacy_policy_label'
      }
    ]

    render(<Footer links={mockLinks} translate={mockTranslate} />)

    expect(screen.getByText('translated(feed_label)')).toBeInTheDocument()
    expect(
      screen.getByText('translated(privacy_policy_label)')
    ).toBeInTheDocument()

    expect(
      screen.getByText('translated(feed_label)').closest('a')
    ).toHaveAttribute('href', '/feed')
    expect(
      screen.getByText('translated(privacy_policy_label)').closest('a')
    ).toHaveAttribute('href', '/privacy-policy')

    expect(mockTranslate).toHaveBeenCalledWith('feed_title')
    expect(mockTranslate).toHaveBeenCalledWith('feed_label')
    expect(mockTranslate).toHaveBeenCalledWith('privacy_policy_title')
    expect(mockTranslate).toHaveBeenCalledWith('privacy_policy_label')

    expect(mockTranslate).toHaveBeenCalledTimes(4)
  })
})

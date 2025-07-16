import { vi } from 'vitest'

export const translateMock = (translations: Record<string, string>) => vi.fn((key: string) => translations[key] ?? '')

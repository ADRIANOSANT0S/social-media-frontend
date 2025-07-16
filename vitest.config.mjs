import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    setupFiles: './vitest.setup.ts',
    globals: true,
    environment: 'jsdom',
    server: {
      deps: {
        inline: ['next-intl']
      }
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: 'test-unit-coverage',
      reportOnFailure: 'test-unit-errors'
    }
  }
})

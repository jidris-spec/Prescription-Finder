/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: [
        { find: '@/components', replacement: path.resolve(__dirname, 'src/shared/components') },
        { find: '@', replacement: path.resolve(__dirname, 'src') },
      ],
    },
    server: {
      port: 3000,
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/test/setup.js'],
      alias: [
        { find: '@/components', replacement: path.resolve(__dirname, 'src/shared/components') },
        { find: '@', replacement: path.resolve(__dirname, 'src') },
      ],
    },
    build: {
      target: 'es2020',
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Firebase v9+ stores real code in @firebase/* scoped packages.
            // Must catch both firebase/* barrel paths AND @firebase/* internals
            // to actually split the bundle (works for both npm and pnpm layouts).
            if (id.includes('@firebase/auth') || id.includes('/firebase/auth')) return 'firebase-auth'
            if (id.includes('@firebase/firestore') || id.includes('/firebase/firestore')) return 'firebase-firestore'
            if (id.includes('node_modules/@firebase') || id.includes('node_modules/firebase')) return 'firebase-core'

            // Radix — separate heavy overlay components from lightweight primitives
            if (
              id.includes('@radix-ui/react-dialog') ||
              id.includes('@radix-ui/react-select') ||
              id.includes('@radix-ui/react-dropdown-menu') ||
              id.includes('@radix-ui/react-popover') ||
              id.includes('@radix-ui/react-alert-dialog')
            ) return 'ui-overlays'
            if (id.includes('node_modules/@radix-ui')) return 'ui-primitives'

            if (id.includes('node_modules/recharts') || id.includes('node_modules/d3-')) return 'charts'
            if (id.includes('node_modules/react-day-picker') || id.includes('node_modules/date-fns')) return 'datepicker'
            if (id.includes('node_modules/embla-carousel')) return 'carousel'
            if (id.includes('node_modules/cmdk')) return 'cmdk'

            if (id.includes('node_modules/react-router')) return 'router'
            if (id.includes('node_modules/lucide-react')) return 'icons'

            // Forms & validation
            if (
              id.includes('node_modules/react-hook-form') ||
              id.includes('node_modules/@hookform') ||
              id.includes('node_modules/zod')
            ) return 'forms'

            // Drawer / feedback primitives
            if (
              id.includes('node_modules/vaul') ||
              id.includes('node_modules/sonner') ||
              id.includes('node_modules/next-themes') ||
              id.includes('node_modules/input-otp')
            ) return 'ui-feedback'

            // Layout helpers
            if (id.includes('node_modules/react-resizable-panels')) return 'panels'

            // React core — use exact boundary (/react/ not /react-router/)
            if (
              id.includes('/node_modules/react/') ||
              id.includes('/node_modules/react-dom/') ||
              id.includes('/node_modules/scheduler/')
            ) return 'react'

            if (id.includes('node_modules')) return 'vendor'
          },
        },
      },
    },
  }
})

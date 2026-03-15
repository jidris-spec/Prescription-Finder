/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // Only expose VITE_-prefixed vars to the client bundle
  const clientEnv = Object.fromEntries(
    Object.entries(env)
      .filter(([key]) => key.startsWith('VITE_'))
      .map(([key, val]) => [`import.meta.env.${key}`, JSON.stringify(val)])
  )

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
    define: clientEnv,
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
            if (id.includes('node_modules/firebase') || id.includes('node_modules/@firebase')) return 'firebase'
            if (id.includes('node_modules/@radix-ui')) return 'ui-vendor'
            if (id.includes('node_modules/lucide-react')) return 'icons'
            if (id.includes('node_modules/recharts') || id.includes('node_modules/d3-')) return 'charts'
            if (id.includes('node_modules/react-router')) return 'router'
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'react'
            if (id.includes('node_modules')) return 'vendor'
          },
        },
      },
    },
  }
})

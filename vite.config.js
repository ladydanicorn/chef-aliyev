import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/about$/, to: '/index.html' },
        { from: /^\/services$/, to: '/index.html' },
        { from: /^\/events$/, to: '/index.html' },
        { from: /^\/gallery$/, to: '/index.html' },
        { from: /^\/contact$/, to: '/index.html' }
      ]
    }
  }
})
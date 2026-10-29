import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  port: 5173,
  server: {
    allowedHosts: ['frontend', 'localhost', '127.0.0.1'],
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api': {
        target: 'http://back-end:3000',
        changeOrigin: true,
        secure: false
      },
    }
  },
})

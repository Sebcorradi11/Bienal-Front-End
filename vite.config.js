import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      },
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Bienal de Chaco',
        short_name: 'Bienal',
        description: 'Bienal de chaco',
        theme_color: '#000',
        icons: [
          {
            src: '/logo_bienal.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logo_bienal.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      }
    }),
  ],
server: {
    proxy: {
      '/api/*': {
        target: 'https://bienal-backend.ddns.net',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})

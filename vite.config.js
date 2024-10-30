import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate', // Actualiza el servicio cada vez que detecte un cambio
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
            src: 'public/logo_bienal.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'public/logo_bienal.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],

})

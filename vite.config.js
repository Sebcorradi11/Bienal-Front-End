import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  build: {
    outDir: 'dist', // Asegúrate de que el directorio de salida sea correcto
    rollupOptions: {
      input: './index.html', // Punto de entrada del proyecto
    },
  },
});

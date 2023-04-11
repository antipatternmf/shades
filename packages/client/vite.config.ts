import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { VitePWA } from 'vite-plugin-pwa';
import { resolve } from 'path';

dotenv.config();

function createVitePWAConfig() {
  if (process.env.WITHOUT_SW) {
    return undefined;
  }

  return VitePWA({
    manifest: {
      name: 'Shades.',
      short_name: 'Shades.',
      description: 'Drawing game',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'icon-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icon-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    },
  });
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    SERVER_PORT: process.env.SERVER_PORT || 3001,
  },
  resolve: {
    alias: {
      api: resolve(__dirname, 'src', 'api'),
      assets: resolve(__dirname, 'src', 'assets'),
      components: resolve(__dirname, 'src', 'components'),
      hocs: resolve(__dirname, 'src', 'hocs'),
      hooks: resolve(__dirname, 'src', 'hooks'),
      pages: resolve(__dirname, 'src', 'pages'),
      reducers: resolve(__dirname, 'src', 'reducers'),
      store: resolve(__dirname, 'src', 'store'),
      constants: resolve(__dirname, 'src', 'constants'),
      utils: resolve(__dirname, 'src', 'utils'),
    },
  },
  plugins: [react(), createVitePWAConfig()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});

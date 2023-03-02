import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    SERVER_PORT: process.env.SERVER_PORT,
  },
  resolve: {
    alias: {
      api: '/src/api',
      assets: '/src/assets',
      components: '/src/components',
      hocs: '/src/hocs',
      hooks: '/src/hooks',
      pages: '/src/pages',
      reducers: '/src/reducers',
      store: '/src/store',
    },
  },
  plugins: [react()],
});

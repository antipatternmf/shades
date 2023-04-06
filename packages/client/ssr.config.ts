import { config } from 'dotenv';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { resolve } from 'path';

config();

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/ssr.tsx'),
      name: 'Client',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        dir: 'ssr-dist',
      },
    },
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
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});

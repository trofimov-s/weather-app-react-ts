import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@UI': path.resolve(__dirname, './src/components/UI'),
      "@models": path.resolve(__dirname, './src/models'),
      "@enums": path.resolve(__dirname, './src/enums'),
      "@store": path.resolve(__dirname, './src/store'),
      "@utils": path.resolve(__dirname, './src/utils'),
      "@api": path.resolve(__dirname, './src/api'),
      "@styles": path.resolve(__dirname, './src/styles'),
      "@constants": path.resolve(__dirname, './src/constants'),
    },
  },
});

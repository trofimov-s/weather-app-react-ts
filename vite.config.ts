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
      "@store": path.resolve(__dirname, './src/store'),
      "@api": path.resolve(__dirname, './src/api'),
      "@styles": path.resolve(__dirname, './src/styles'),
    },
  },
});

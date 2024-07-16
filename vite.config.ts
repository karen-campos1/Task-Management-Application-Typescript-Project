import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    hmr: {
      overlay: false,
    },
  },
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
});

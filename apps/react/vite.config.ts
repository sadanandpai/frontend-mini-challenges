import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 6013,
    host: true,
    strictPort: true,
  },
  base: '/frontend-mini-challenges/react/',
  logLevel: 'silent',
});

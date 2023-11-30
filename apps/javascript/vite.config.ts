import { defineConfig } from 'vite';
import { challenges } from './src/helpers/challenges';

const challengesPath = challenges
  .filter((challenge) => challenge.link !== '#')
  .map((challenge) => `./src/challenges/${challenge.link}/index.html`);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: ['./index.html', './src/helpers/navbar.js', ...challengesPath],
    },
  },
  server: {
    port: 6011,
    strictPort: true,
  },
  base: '/frontend-mini-challenges/javascript/',
});

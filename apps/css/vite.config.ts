import { defineConfig } from 'vite';
import { cssChallenges } from '../../shared/data/content/index';

const challengesPath = [...cssChallenges.values()].map(
  (challenge) => `./src/challenges/${challenge.link}/index.html`
);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: ['./src/helpers/navbar.ts', ...challengesPath],
    },
  },
  server: {
    port: 6011,
    host: true,
    strictPort: true,
  },
  base: '/frontend-mini-challenges/css/',
  logLevel: 'silent',
});

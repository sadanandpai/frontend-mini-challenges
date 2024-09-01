import { defineConfig } from 'vite';
import { jsChallenges } from '../../shared/data/content/index';

const challengesPath = [...jsChallenges.values()].map(
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
    port: 6012,
    host: true,
    strictPort: true,
  },
  base: '/frontend-mini-challenges/javascript/',
  logLevel: 'silent',
});

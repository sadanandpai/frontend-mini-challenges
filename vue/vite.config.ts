import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/frontend-mini-challenges/vue/dist/",
});

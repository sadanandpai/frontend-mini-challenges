import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/frontend-mini-challenges/react/dist/",
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // Needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173, // You can replace this port with any port
  }
});

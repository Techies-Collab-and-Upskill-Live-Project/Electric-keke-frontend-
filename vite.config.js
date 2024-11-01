import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://35.246.47.129", // Insecure endpoint
        // target: "https://electric-keke-backend.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api/v1"),
        ws: true,
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "setups/test.setup.js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true, // Enable source maps
  },
});

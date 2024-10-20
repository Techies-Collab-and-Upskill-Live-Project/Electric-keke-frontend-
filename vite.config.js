import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://electric-keke-backend.vercel.app",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, "/api/v1"),
  //     },
  //   },
  // },
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
  }
});

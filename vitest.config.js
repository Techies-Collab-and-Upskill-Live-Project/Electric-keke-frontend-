import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ['tests/components/**/*.test.js'],
    sourcemap: true, // Add this line
  },
});

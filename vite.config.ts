import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// vite.config.ts

// Check if we're in a GitHub Codespace/development environment
const isDevEnvironment = process.env.NODE_ENV === 'development';

export default defineConfig({
  // Use root path for development, "/SAS/" for production
  base: isDevEnvironment ? "/" : "/SAS/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});

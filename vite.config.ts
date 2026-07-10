import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path matches the GitHub Pages project URL: https://<user>.github.io/meridianHealth/
// Override at build time with `VITE_BASE_PATH=/custom/` if deploying elsewhere.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ?? '/meridianHealth/',
});

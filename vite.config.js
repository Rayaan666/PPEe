import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'vite-plugin-prerender',
      closeBundle() {
        // Prevent running prerendering during the SSR (server) build to avoid recursion
        if (!process.env.VITE_SSR_BUILD) {
          console.log('Vite client build complete. Triggering prerendering...');
          execSync('node prerender.mjs --skip-client-build', { stdio: 'inherit' });
        }
      }
    }
  ],
  server: {
    host: true,
    port: 5156
  }
})

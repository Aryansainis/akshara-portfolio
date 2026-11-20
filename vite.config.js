import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project sites are served from a sub-path (e.g. /repo-name/).
// Set BASE_PATH=/repo-name/ in the deploy workflow, or leave it empty for
// a user/organisation page (https://user.github.io/) or local preview.
const base = process.env.BASE_PATH || '/'

// The static build renders the app twice: once as a client bundle and
// once as a server bundle used to prerender each route. The server build
// externalises React, so it must not try to group it into a chunk.
const isServerBuild = process.env.SSR_BUILD === 'true'

/**
 * Split React into its own chunk so the router and app code can be
 * cached independently of it.
 *
 * Vite 8 (rolldown) only accepts the function form of `manualChunks`;
 * the object form was removed. Returning undefined leaves a module to
 * the default chunking behaviour.
 */
function manualChunks(id) {
  if (!id.includes('node_modules')) return undefined
  if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react'
  if (/node_modules\/(react-router|react-router-dom)\//.test(id)) return 'router'
  return undefined
}

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    cssCodeSplit: false,
    rollupOptions: isServerBuild ? {} : { output: { manualChunks } },
  },
  server: {
    port: 5173,
    host: true,
  },
})

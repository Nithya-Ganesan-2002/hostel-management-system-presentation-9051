import { defineConfig } from 'vite'

// Note: Slidev auto-loads CSS via frontmatter or direct import in slides.
// We keep the server config and rely on slides importing styles.css in frontmatter.
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['.kavia.ai'],
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    watch: { usePolling: true },
  },
})

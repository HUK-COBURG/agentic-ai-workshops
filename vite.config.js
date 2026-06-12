import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // GitHub Pages liefert unter /<repo-name>/ aus – via PAGES_BASE in der Action gesetzt
  base: process.env.PAGES_BASE || '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cms: resolve(__dirname, 'cms/index.html'),
        cmsPreview: resolve(__dirname, 'cms/preview.html'),
        agenticAiWorkshop: resolve(__dirname, 'courses/agentic-ai-workshop/index.html'),
        effizientMitAiTools: resolve(__dirname, 'courses/effizient-mit-ai-tools/index.html'),
      },
    },
  },
})

import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
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

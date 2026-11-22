import { defineConfig } from 'vite'

// two pages: the landing and the standalone /planes (Vercel cleanUrls serves planes.html at /planes)
export default defineConfig({
  build: { rolldownOptions: { input: ['index.html', 'planes.html'] } },
})

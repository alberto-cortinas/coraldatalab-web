import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist/server',
    emptyOutDir: false,
    lib: {
      entry: 'src/worker.js',
      formats: ['es'],
      fileName: () => 'index.js',
    },
  },
})

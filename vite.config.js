import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist/client',
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        neuralgraph: resolve(import.meta.dirname, 'neuralgraph/index.html'),
        neuralgraphThanks: resolve(import.meta.dirname, 'neuralgraph/gracias/index.html'),
        privacy: resolve(import.meta.dirname, 'privacidad/index.html'),
      },
    },
  },
})

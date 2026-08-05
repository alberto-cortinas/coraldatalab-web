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
        neuralgraphCa: resolve(import.meta.dirname, 'neuralgraph/ca/index.html'),
        neuralgraphEn: resolve(import.meta.dirname, 'neuralgraph/en/index.html'),
        neuralgraphThanks: resolve(import.meta.dirname, 'neuralgraph/gracias/index.html'),
        neuralgraphThanksCa: resolve(import.meta.dirname, 'neuralgraph/ca/gracies/index.html'),
        neuralgraphThanksEn: resolve(import.meta.dirname, 'neuralgraph/en/thanks/index.html'),
        privacy: resolve(import.meta.dirname, 'privacidad/index.html'),
        privacyCa: resolve(import.meta.dirname, 'privacidad/ca/index.html'),
        privacyEn: resolve(import.meta.dirname, 'privacidad/en/index.html'),
      },
    },
  },
})

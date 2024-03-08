import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'docs')

export default defineConfig({
  root,
  plugins: [react(),
  ],
  base: '/raise_hand/',
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir,
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      input: {
        "index": resolve(root, 'index.html'),
      }
    }
  }
})
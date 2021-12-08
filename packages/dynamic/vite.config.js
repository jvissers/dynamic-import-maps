import { defineConfig } from 'vite'
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'extension-dynamic',
      formats: ["es"],
      fileName: (format) => `extension-dynamic.${format}m.js`
    },
    rollupOptions: {
      external: ['moment'],
      output: {
        globals: {
          'moment': 'moment'
        }
      }
    }
  }
})

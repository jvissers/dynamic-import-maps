import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '^/ext/.*': {
        target: 'http://127.0.0.1:5500/remote-extensions',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ext/, '')
      }
    }
  }
})

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api/atcoder': {
        target: 'https://atcoder.jp',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/atcoder/, ''),
        headers: {
          'Referer': 'https://atcoder.jp',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
        }
      }
    }
  }
});

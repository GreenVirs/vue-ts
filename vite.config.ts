import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const isDev = process.env.NODE_ENV !== 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  css: {
    modules: {
      generateScopedName: isDev ? '[local]_[hash:base64:4]' : '_[hash:base64:4]',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          hello: ['./src/components/HelloWorld.vue'],
          home: ['./src/views/Home.vue'],
          about: ['./src/views/About.vue'],
          'store-counter': ['./src/stores/counter.ts']
        }
      }
    }
  }
})

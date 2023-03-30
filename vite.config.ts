import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteTsconfigPaths()],

  server: {
    open: true,
    port: 7777,
  },
})

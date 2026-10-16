import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { copyFile } from 'node:fs/promises';

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'copy-event-file',
      async closeBundle() {
        await copyFile('event.txt', 'dist/event.txt');
      }
    }
  ],
  base: '/school-calc/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});

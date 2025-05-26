import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      fs: false,
      path: false,
      os: false,
      crypto: false
    }
  }
});

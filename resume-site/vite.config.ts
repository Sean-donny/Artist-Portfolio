import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          if (id.includes('react-router')) return 'router-vendor';
          if (id.includes('react') || id.includes('scheduler')) {
            return 'react-vendor';
          }
          if (id.includes('three/examples')) return 'three-extras-vendor';
          if (id.includes('/three/')) return 'three-core-vendor';
          if (id.includes('gsap')) return 'gsap-vendor';
          if (id.includes('firebase')) return 'firebase-vendor';
          if (id.includes('stripe')) return 'stripe-vendor';

          return 'vendor';
        },
      },
    },
  },
});

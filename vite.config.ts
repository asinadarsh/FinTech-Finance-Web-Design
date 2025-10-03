import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/FinTech-Finance-Web-Design/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

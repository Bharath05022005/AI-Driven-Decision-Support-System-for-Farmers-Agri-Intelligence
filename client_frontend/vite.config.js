import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/, // Tells Vite to read .js files as JSX
    exclude: [],
  },
  server: {
    host: true,       // Expose on all network interfaces (0.0.0.0)
    port: 5173,       // Keep the default port
    strictPort: true, // Fail if port is already in use
    allowedHosts: [
      'manmade-undusted-salad.ngrok-free.dev',  // ngrok tunnel domain
    ],
    proxy: {
      // Proxy all backend routes to Flask (use 127.0.0.1, NOT localhost — Node.js resolves localhost as IPv6 ::1)
      '/api': 'http://127.0.0.1:5000',
      '/predict': 'http://127.0.0.1:5000',
      '/login': 'http://127.0.0.1:5000',
      '/signup': 'http://127.0.0.1:5000',
      '/profile': 'http://127.0.0.1:5000',
    },
  },
});
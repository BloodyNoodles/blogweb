import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost", // instead of 127.0.0.1
    port: 5174,
  },
});


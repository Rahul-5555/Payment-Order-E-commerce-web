import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Specify the port you want to use (change as needed)
    // host: true, // Uncomment this if you want to expose the server to your local network
    cors: {
      origin: 'http://localhost:5174', // Allow CORS requests from this origin
      methods: ['GET', 'POST'], // Specify allowed methods if needed
    },
  },
})

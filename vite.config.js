import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Opsional: Untuk memastikan server Vite dapat diakses dari jaringan selain localhost
    host: '0.0.0.0', 
    // Penting untuk Ngrok dengan HTTPS: 
    // Mengatur port klien HMR ke 443 (port standar HTTPS)
    hmr: {
      clientPort: 443, 
    },
    allowedHosts: [
      'localhost', // Sudah termasuk secara default, tapi tidak ada salahnya
      '127.0.0.1', // Sudah termasuk secara default
      'nola-noninterpolating-jadiel.ngrok-free.dev' // <-- HOST BARU ANDA
    ],
  },
})

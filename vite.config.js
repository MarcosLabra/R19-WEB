// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/R19-WEB/',  // 👈 el nombre de tu repo con las barras
  plugins: [react()],
})

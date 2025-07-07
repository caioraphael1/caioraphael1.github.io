import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-caio/', // talvez isso precise ser alterado quando for publicado
  plugins: [react()],
})

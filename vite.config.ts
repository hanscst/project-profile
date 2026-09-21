import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    allowedHosts: [
      '.playdev.online',
      '.skos-labs.playdev.online',
      '94ido-testing2.skos-labs.playdev.online'
    ]
  }
})

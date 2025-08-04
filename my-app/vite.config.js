import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/git101/",
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
})


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ครอบคลุม App.jsx และไฟล์อื่นๆใน src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


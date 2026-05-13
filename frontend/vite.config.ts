import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// Rails API (option 2: separate origins). Vite proxies /api in dev so fetch("/api/…") stays same-origin to :5173.
export default defineConfig({
  plugins: [react()],
  server: {
    // Listen on all local interfaces so http://127.0.0.1:5173 and http://localhost:5173 both work.
    host: true,
    port: 5173,
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
      },
    },
  },
})

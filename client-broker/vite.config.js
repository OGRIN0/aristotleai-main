import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // vite.config.js
  proxy: {
    "/api": {
      target: "https://demo.dashboardpack.com/architectui-html-free/main.css", // your API server address
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""), // remove /api prefix when forwarding request
    },
  },
});

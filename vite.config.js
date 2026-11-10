import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function serveSourceEntry() {
  return {
    name: "serve-source-entry",
    apply: "serve",
    transformIndexHtml(html) {
      return html
        .replace(/<script type="module" crossorigin src="\/assets\/[^"]+"><\/script>\s*/g, "")
        .replace(/<link rel="stylesheet" crossorigin href="\/assets\/[^"]+">\s*/g, "")
        .replace("</body>", '  <script type="module" src="/src/main.jsx"></script>\n  </body>');
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), serveSourceEntry()],
  build: {
    outDir: "docs",
  },
  server: {
    port: 5173,
    host: "127.0.0.1",
  },
});

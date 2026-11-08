import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function serveSourceEntry() {
  return {
    name: "serve-source-entry",
    apply: "serve",
    transformIndexHtml(html) {
      return html
        .replace(/<script type="module" crossorigin src="\/call-switch\/assets\/[^"]+"><\/script>\s*/g, "")
        .replace(/<link rel="stylesheet" crossorigin href="\/call-switch\/assets\/[^"]+">\s*/g, "")
        .replace('href="/call-switch/favicon.svg"', 'href="/favicon.svg"')
        .replace("</body>", '  <script type="module" src="/src/main.jsx"></script>\n  </body>');
    },
  };
}

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/call-switch/" : "/",
  plugins: [react(), serveSourceEntry()],
  build: {
    outDir: "docs",
  },
  server: {
    port: 5173,
    host: "127.0.0.1",
  },
}));

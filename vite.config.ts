import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-styled-components", { displayName: true }]],
      },
    }),
    viteTsconfigPaths(),
    svgr(),
  ],
  server: { port: 8080 },
  build: { outDir: "build" },
});

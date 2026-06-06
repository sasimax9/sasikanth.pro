import path from "path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        server: path.resolve(__dirname, "src/server.ts"),
      },
    },
  },
});
import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 42003,
  },

  resolve: {
    alias: [
      {
        find: /^~@darekkay\/styles/,
        replacement: resolve(__dirname, "node_modules/@darekkay/styles"),
      },
    ],
  },

  define: {
    "import.meta.env.PACKAGE_VERSION": `"${process.env.npm_package_version}"`,
  },

  build: {
    outDir: "build",

    rollupOptions: {
      output: {
        // https://github.com/facebook/regenerator/issues/378
        intro: "window.regeneratorRuntime = undefined;",

        // use a single chunk for inlining
        // https://github.com/rollup/rollup/issues/2756#issuecomment-821838231
        manualChunks: {},
      },
    },
  },

  plugins: [react()],
});

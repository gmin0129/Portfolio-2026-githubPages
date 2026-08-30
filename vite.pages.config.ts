import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/Portfolio-2026-githubPages/",
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
        failOnError: true,
        filter: ({ path }) => !path.startsWith("/Portfolio-2026-githubPages/assets/"),
      },
    }),
    viteReact(),
    tailwindcss(),
  ],
});

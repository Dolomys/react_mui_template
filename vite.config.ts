import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import { fileURLToPath } from "url";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "src/_utils/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@svgs": path.resolve(__dirname, "src/assets/svg"),
      "@components": path.resolve(__dirname, "src/components"),
      "@router": path.resolve(__dirname, "src/router"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@screnns": path.resolve(__dirname, "src/screens"),
      "@store": path.resolve(__dirname, "src/store"),
      "@themes": path.resolve(__dirname, "src/themes"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@services/*": path.resolve(__dirname, "src/services"),
    },
  },
});

import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    open: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // 类名转为驼峰
      generateScopedName: '[name]__[local]___[hash:base64:5]' // 自定义类名格式
    }
  },
  build: {
    cssMinify: true,
  }
});

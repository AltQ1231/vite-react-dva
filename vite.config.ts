import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        // modifyVars: {
        //   "@primary-color": "#e",
        // },
      },
      scss: {
        // 自动导入全局样式
        additionalData: "@import '@/styles/base.less';",
      },
    },
  },
  server: {
    port: 3300,
    proxy: {
      "/api": {
        target: "http://10.8.104.7:3400",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

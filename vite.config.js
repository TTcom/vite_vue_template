import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path'
console.log(11111111)
console.log("process.envvvvvv",process.env)
import { viteMockServe } from 'vite-plugin-mock';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  plugins: [
    vue(),
    eslintPlugin({fix:true}),
    styleImport({
      resolves: [VantResolve()],
    }),
    viteMockServe({
      mockPath: 'mock',
      injectCode: `
        import { setupMockServer } from '../mock';
        setupMockServer();
      `,
    }) 
  ],
  base: process.env.VUE_APP_LOCAL_ENV === "true" ? './' : "/servename/", // 设置打包路径
  server: {
    // host: '0.0.0.0',
    port: 8085, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    https: false,
    cors: true // 允许跨域
  }
})

import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default {
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'soul-plus',
          ensureStyleFile: true,
          // 自定义样式文件转换
          resolveStyle: name => {
            return `soul-plus/es/${name}.css`;
          },
          resolveComponent: name => {
            return `soul-plus/es/${name}`;
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      assets: resolve('src/assets'),
      style: resolve('src/style'),
      packages: resolve('packages')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'packages/style/var';`
      }
    }
  },
  build: {
    input: {
      main: path.resolve(__dirname, 'index.html')
    },
    rollupOptions: {}
  }
};

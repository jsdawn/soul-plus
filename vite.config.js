import vue from '@vitejs/plugin-vue';
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src'),
      packages: resolve('packages'),
      style: resolve('src/style')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'style/variable.scss';`
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

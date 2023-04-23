const path = require('path');
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
  },
  css:{
    loaderOptions:{
     /*  less:{
        additionalData: '@import "@/assets/style/common.less";'
      } */
      scss:{
        additionalData: '@import "@/assets/style/global.scss";'
      }
    }
  },
  devServer: {
    port: 5200,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
});

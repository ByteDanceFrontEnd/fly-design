const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    // set svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/assets/icons/svg')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
})

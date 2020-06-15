module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      fs: 'fs',
      path: 'path',
      electron: 'electron',
    },
  },
}

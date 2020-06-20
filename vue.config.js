module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      fs: 'fs',
      path: 'path',
      child_process: 'child_process',
      electron: 'electron',
    },
  },
}

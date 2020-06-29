module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      events: 'events',
      fs: 'fs',
      os: 'os',
      path: 'path',
      child_process: 'child_process',
      electron: 'electron',
    },
  },
}

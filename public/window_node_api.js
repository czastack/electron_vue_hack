/**
 * 使用的node相关api先在此处引入挂载到window,然后再使用
 * 一般来说，系统级的操作优先和main进程通信，由main进程完成后回传结果给UI层
 */
(function () {
  if (!window.require) {
    return
  }
  const path = require('path')
  const electron = require('electron')

  const appPath = electron.remote.app.getAppPath()
  module.paths.unshift(path.join(appPath, 'dist'))

  window.appPath = appPath
})()

/**
 * 使用的node相关api先在此处引入挂载到window,然后再使用
 * 一般来说，系统级的操作优先和main进程通信，由main进程完成后回传结果给UI层
 */
(function () {
  if (!window.require) {
    return
  }
  const electron = require('electron')
  const appPath = electron.remote.app.getAppPath()
  const externals = {
    electron,
    appPath,
  }
  const modules = [
    'events',
    'fs',
    'os',
    'path',
    'child_process',
  ]
  for (const item of modules) {
    externals[item] = require(item)
  }

  Object.assign(window, externals)
  module.paths.unshift(process.cwd())
})()

/**
 * 使用的node相关api先在此处引入挂载到window,然后再使用
 * 一般来说，系统级的操作优先和main进程通信，由main进程完成后回传结果给UI层
 */
(function () {
  const NODE = {
    require,
    path: require('path'),
    electron: require('electron'),
    fs: require('fs'),
    fsPromises: require('fs').promises,
  }

  NODE.appPath = NODE.electron.remote.app.getAppPath()
  module.paths.unshift(NODE.path.join(NODE.appPath, 'dist'))

  Object.assign(window, NODE)
})()

/**
 * 使用的node相关api先在此处引入挂载到window,然后再使用
 * 一般来说，系统级的操作优先和main进程通信，由main进程完成后回传结果给UI层
 */
window.path = require('path')
window.electron = require('electron')
window.fs = require('fs')
window.fsPromises = require('fs').promises
window.ws = require('ws')

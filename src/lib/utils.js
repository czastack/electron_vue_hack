export default {
  sleep(timeout) {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve()
      }, timeout)
    })
  },
}

/**
 * 自动组件安装
 * @param {require.context} requireComponent
 */
export function componentInstaller(requireComponent) {
  const namePartten = /^\.\/([\w-]+)\.vue$/

  return function install(Vue, options) {
    for (const filename of requireComponent.keys()) {
      const component = requireComponent(filename).default
      let name = component.name
      if (!name) {
        name = filename.match(namePartten)[1]
      }
      Vue.component(name, component)
    }
  }
}

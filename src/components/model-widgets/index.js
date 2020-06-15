import ModelInput from './model-input.vue'
import ModelSelect from './model-select.vue'
import ModelSwitch from './model-switch.vue'

const components = [
  ModelInput,
  ModelSelect,
  ModelSwitch,
]

export default {
  install(Vue, options) {
    for (const component of components) {
      Vue.component(component.name, component)
    }
  }
}

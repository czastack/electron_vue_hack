import ModelWidgetLayout from './model-widget-layout.vue'
import ModelInput from './model-input.vue'
import ModelInputNumber from './model-input-number.vue'
import ModelSelect from './model-select.vue'
import ModelSwitch from './model-switch.vue'
import ModelCheckbox from './model-checkbox.vue'
import ModelFlags from './model-flags.vue'

const components = [
  ModelWidgetLayout,
  ModelInput,
  ModelInputNumber,
  ModelSelect,
  ModelSwitch,
  ModelCheckbox,
  ModelFlags,
]

export default {
  install(Vue, options) {
    for (const component of components) {
      Vue.component(component.name, component)
    }
  }
}

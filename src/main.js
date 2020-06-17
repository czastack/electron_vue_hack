import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import grid from './components/grid.vue'
import utils from '@/lib/utils'

Vue.config.productionTip = false
Vue.prototype.$utils = utils
Vue.use(ElementUI)

Vue.component(grid.name, grid)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

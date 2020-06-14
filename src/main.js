import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import grid from './components/grid.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.component(grid.name, grid)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

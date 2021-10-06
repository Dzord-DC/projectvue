import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
import model from './plugins/modalWindow'

Vue.config.productionTip = false
Vue.use(model)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

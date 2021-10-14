import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
import model from './plugins/modalWindow'
import context from './plugins/contextMenu'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(model)
Vue.use(context)

new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount('#app')

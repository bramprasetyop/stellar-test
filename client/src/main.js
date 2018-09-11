import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VueResources from 'vue-resource'
Vue.use(VueResources)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

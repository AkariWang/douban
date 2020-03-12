import Vue from 'vue'
import App from './App.vue'
import axios from './libs/axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import config from './config'
import router from './router'
require('@/api/mock.js')


Vue.prototype.$http = axios
Vue.prototype.$config = config
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
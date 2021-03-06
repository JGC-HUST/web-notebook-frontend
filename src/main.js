import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './plugins/ant-design-vue.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

// Vue.use(VueAxios, axios)
// Vue.axios.defaults.baseURL = 'https://api-demo.websanova.com/api/v1'

// Vue.use(VueResource)
// Vue.http.options.root = 'https://api-demo.websanova.com/api/v1'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

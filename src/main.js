import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'


Vue.config.productionTip = false
// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'https://pokeapi.co/api/v2/pokemon/'
// Vue.http.headers.common['Access-Control-Request-Method'] = '*'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

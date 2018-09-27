import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import service from './services/pokemon.service'

service.query()
  .then(pokemons => console.log(pokemons))
  .catch(err => console.log(err))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

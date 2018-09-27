import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import service from './services/pokemon.service'

<<<<<<< HEAD
service.query()
  .then(pokemons => console.log(pokemons))
  .catch(err => console.log(err))

=======
>>>>>>> 1adf7ef2f17feab5bac29572e3fbe20dd8baa9e0
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

import Vue from 'vue'
import Router from 'vue-router'
import Team from './views/Team'
import List from '@/components/PokemonList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/team',
      name: 'Team',
      component: Team,
    },
  ]
})

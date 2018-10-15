import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Message from './views/Message.vue'
import Cards from './views/Cards.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        console.log('触发home Component钩子')
        next()
      }
    },
    {
      path: '/message',
      name: '/message',
      component: Message
    },
    {
      path: '/cards',
      name: '/cards',
      component: Cards
    },
    {
      path: '/login',
      name: 'login',
      components: {
        Login: Login
      }
    }
  ]
})

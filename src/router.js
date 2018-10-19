import Vue from 'vue'
import Router from 'vue-router'
import MainContent from './views/MainContent.vue'
import Message from './views/Message.vue'
import Cards from './views/Cards.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: MainContent,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/message',
          name: 'message',
          component: Message
        },
        {
          path: '/cards',
          name: 'cards',
          component: Cards
        },
      ]
      // beforeEnter: (to, from, next) => {
      //   console.log('触发home Component钩子')
      //   next()
      // }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

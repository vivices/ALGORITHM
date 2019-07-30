import Vue from 'vue';
import Router from 'vue-router';
import MainContent from './views/MainContent.vue';
import Message from './views/Message.vue';
import Euclidean from './views/Algorithm/Euclidean.vue';
import Login from './views/Login.vue';
import Home from './views/Home.vue';

Vue.use(Router)

const routers = new Router({
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: MainContent,
      redirect:'/home',
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
          path: '/euclidean',
          name: 'euclidean',
          component: Euclidean
        },
        // {
        //   path: '/cards/select2',
        //   name: 'cards',
        //   component: Cards
        // },
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
});

routers.beforeEach((to, from, next) => {
  //登陆拦截判断
  let cookie = Vue.prototype._getCookie();
  let path = to.path;
  if (path === '/login') {
    next()
    return
  }
  if(!cookie) {
    next('/login')
  }else {
    next()
  }
})

export default routers;
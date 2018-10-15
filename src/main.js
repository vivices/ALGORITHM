import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((from, to, next) => {
  console.log('触发前置全局钩子')
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

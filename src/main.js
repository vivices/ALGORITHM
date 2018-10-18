import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Icon, Input, Button} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import '../public/element-variables.scss'

Vue.config.productionTip = false
Vue.use(Icon);
Vue.use(Input);
Vue.use(Button);


router.beforeEach((from, to, next) => {
  // console.log('触发前置全局钩子')
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

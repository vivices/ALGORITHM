import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import Element from 'element-ui';
import {Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import '../public/element-letiables.scss'

Vue.config.productionTip = false

Vue.use(Element);

//注册全局方法
Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

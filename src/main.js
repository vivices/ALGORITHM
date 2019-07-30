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
//设置cookie
Vue.prototype._setCookie = (c_name, c_pwd, exdays = 7) => {
  let exdate = new Date(); //获取时间
  exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
  //字符串拼接cookie
  window.document.cookie = "username" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
  window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
}
//读取cookie
Vue.prototype._getCookie = () => {
  if (document.cookie.length > 0) {
    let userInfoArr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出查看
    let username = userInfoArr[0].split('='), userPwd = userInfoArr[1].split('=')
    // console.log(username, userPwd)
    if(username[0] === 'username' && userPwd[0] === 'userPwd') {
      return {  
        username: username[1],
        userPwd: userPwd[1]
      }
    }else {
      return false
    }
  } else {
    return false
  }
}
//清除cookie
Vue.prototype._clearCookie = () => {
  Vue.prototype._setCookie ("", "", -1); //修改2值都为空，天数为负1天就好了
  Vue.prototype._getCookie();
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

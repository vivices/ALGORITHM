import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: '第一条vuex数据'
  },
  mutations: {
    operate (state) {
      state.msg = '第一次处理vuex数据'
    }
  },
  actions: {

  }
})

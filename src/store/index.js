import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginuser:'',
      productlist:[]
  },
  mutations: {
    setLoginUser(state,obj){
      state.loginuser=obj;
    },
      setProdList(state,obj){
      state.prodlist=[];
      state.prodlist=obj;
      }
  },
  actions: {
  },
  modules: {
  }
})

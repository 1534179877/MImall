import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);

const state ={
  username:'',
  cartCount:-11
}
//Vue.store导出
export default new Vuex.Store({
  state,
  mutations,
  actions
})
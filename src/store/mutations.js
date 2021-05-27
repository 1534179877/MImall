//Vuex-mutations
export default {
  saveUserName(state,username){
    state.username = username; // 变更状态
  },
  saveCartCount(state,cartCount){
    state.cartCount = cartCount;
  },

}

//提交mutation,可以包含异步操作
export default {
  saveUserName(context,username){
    context.commit('saveUserName',username);
  },
  saveCartCount(context,cartCount){
    context.commit('saveCartCount',cartCount);
  }
}
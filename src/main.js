import Vue from 'vue'
import router from './router.js'
import axios from "axios"
import App from './App.vue'
import env from './env'

Vue.config.productionTip = false
Vue.prototype.axios = axios;

// a/b => /api/a/b => a/b  代理中切掉
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 5000;//超时
axios.defaults.baseURL = env.baseURL;

//接口错误拦截
axios.interceptors.response.use(function (response){
  let res = response.data;
  //通过状态码进行拦截
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10) {
    window.location.href='/#/login';
  }else{
    alert(res.msg);
  }
});

new Vue({
  router,
  axios,
  render: h => h(App),
}).$mount('#app')

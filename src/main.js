import Vue from 'vue'
import router from './router.js'
import axios from "axios"
import App from './App.vue'
import VueLazyload from "vue-lazyload"
import { Message } from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import VueCookie from 'vue-cookie'
import store from './store'
//import env from './env'


Vue.config.productionTip = false
Vue.prototype.axios = axios; //原型挂载
Vue.use(VueLazyload,{
  loading:'../public/imgs/loading-svg/loading-bars.svg'
})

Vue.use(VueCookie);
Vue.prototype.$message = Message;


// a/b => /api/a/b => a/b  代理中切掉
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 5000;//超时
//接口错误拦截
axios.interceptors.response.use(function (response){
  let res = response.data;
  let path = location.hash;
  //通过状态码进行拦截
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10) {
    if(path!='#/index'){
      window.location.href='/#/login';
    }
  }else{
    Message.error(res.msg);
    return Promise.reject(res);
  }
});

new Vue({
  router,
  axios,
  store, // 挂载再实例上
  render: h => h(App),
}).$mount('#app')

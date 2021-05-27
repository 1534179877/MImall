import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'

Vue.use(Router);
//按需懒加载
//导出
export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:Home,
      redirect:'/index',
      children:[
        {
          path:'/index',
          name:'index',
          component:Index
        }, {
          path:'/product/:id',
          name:'product',
          //按需路由加载
          component:() => import('./pages/product/product')
        }, {
          path:'/detail/:id',
          name:'detail',
          component:() => import('./pages/product/detail')
        }
      ]
    },
    {
      path:'/cart',
      name:'cart',
      component:() => import('./pages/cart')
    },
    {
      path:'/login',
      name:'login',
      //通过import函数实现路由
      component: () => import('./pages/login')
    },
    {
      path:'/order',
      name:'order',
      component:() => import('./pages/order'),
      children:[
        {
          path: 'list',
          name:'order-list',
          component:() => import('./pages/orderList')
        },{
          path: 'pay',
          name:'order-pay',
          component:() => import('./pages/orderPay')
        },{
          path: 'zfbpay',
          name:'zfb-pay',
          component:() => import('./pages/zfbpay')
        }
        ,{
          path: 'confirm',
          name:'order-confirm',
          component:() => import('./pages/orderConfirm')
      }

      ]
    }
  ]
});
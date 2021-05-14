import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product/product'
import Detail from './pages/product/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import ZfbPay from './pages/zfbpay'
import Login from './pages/login'


Vue.use(Router);

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
          component:Product
        }, {
          path:'/detail/:id',
          name:'detail',
          component:Detail
        }, {
          path:'/index',
          name:'index',
          component:Index
        }
      ]
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/order',
      name:'order',
      component:Order,
      children:[
        {
          path: 'list',
          name:'order-list',
          component: OrderList,
        },{
          path: 'pay',
          name:'order-pay',
          component: OrderPay,
        },{
          path: 'zfbpay',
          name:'zfb-pay',
          component: ZfbPay,
        }
        ,{
          path: 'confirm',
          name:'order-confirm',
          component: OrderConfirm,
        }

      ]
    }
  ]
});
<template>
<div>
  <order-header :title="title">
    <template v-slot:tip>
      <span>{{tip}}</span>
    </template>
  </order-header>
  <router-view></router-view>
  <service-bar></service-bar>
  <nav-footer></nav-footer>
</div>
</template>

<script>
import OrderHeader from "../components/orderHeader";
import NavFooter from "../components/navFooter";
import ServiceBar from "../components/serviceBar";
export default {
  name: "order",
  data(){
    return{
      title:'',
      tip:''
    }
  },
  components: {NavFooter, OrderHeader,ServiceBar},
  mounted() {
    let path = this.$route.path
    if(path == '/order/confirm'){
      this.title = '订单确认'
      this.tip = '注意收货地址'
    }else if(path == 'order/list'){
      this.title = '订单列表'
      this.tip = '警方钓鱼链接或诈骗电话'
    }else if(path == 'order/pay'){
      this.title = '订单支付'
      this.tip = '警方钓鱼链接或诈骗电话'
    }
  }
}
</script>

<style scoped>

</style>
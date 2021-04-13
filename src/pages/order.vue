<template>
<div>
  order
  <order-header></order-header>
  <router-view></router-view>
  <nav-footer></nav-footer>
</div>
</template>

<script>
import OrderHeader from "../components/orderHeader";
import NavFooter from "../components/navFooter";
export default {
name: "order",
  components: {NavFooter, OrderHeader}
}
</script>

<style scoped>

</style>
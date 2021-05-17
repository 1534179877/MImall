<template>
<div>
  <router-view></router-view>
  <service-bar></service-bar>
  <nav-footer></nav-footer>
</div>
</template>

<script>

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
  components: {NavFooter,ServiceBar},

}
</script>

<style scoped>

</style>
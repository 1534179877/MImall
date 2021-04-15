<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>

</template>

<script>
import NavHeader from "../components/navHeader";
import NavFooter from "../components/navFooter";
export default {
name: "home",
  components: {NavFooter, NavHeader}
}
</script>

<style scoped>

</style>
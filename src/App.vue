<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
//import storage from './storage'
export default {
  name: 'App',
  components: {

  },
  data(){
    return{}
  },
  mounted() {
    //storage.setItem('a',1);
  }
}
</script>

<style>
@import "./assets/sass/reset.scss";
</style>

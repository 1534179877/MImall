<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  components: {

  },
  data(){
    return{}
  },
  mounted() {
    axios.get();
  }
}
</script>

<style>
@import "./assets/sass/reset.scss";
</style>

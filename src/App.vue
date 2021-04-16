<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
//import storage from './storage'
import axios from 'axios'
//import jsonp from 'jsonp'
export default {
  name: 'App',
  components: {

  },
  data(){
    return{}
  },
  mounted() {
    //storage.setItem('a',1);
    axios.get();
  }
}
</script>

<style>
@import "./assets/sass/reset.scss";
</style>

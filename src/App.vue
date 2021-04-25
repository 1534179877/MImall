<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
//import axios from 'axios'
export default {
  name: 'App',
  components: {
  },
  data(){
    return{

    }
  },
  mounted() {
    this.getUsers();
    this.getCartCount();
  },
  methods:{
    getUsers(){
      this.axios.get('/user').then((res)=>{
        this.$store.dispatch('saveUserName',res.username)
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        this.$store.dispatch('saveCartCount',res)
      })
    }
  }
}
</script>

<style lang="scss">

@import "./assets/sass/reset.scss";
@import "./assets/sass/config.scss";
@import "./assets/sass/mixin.scss";
@import "./assets/sass/base.scss";
</style>

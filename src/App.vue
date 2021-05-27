<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
//import axios from 'axios'
import storage from './storage/index'
export default {
  name: 'App',
  components: {
  },
  data(){
    return{

    }
  },

  mounted() {
    if(this.$cookie.get('userId')){
      this.getUsers();
      this.getCartCount();
    //  this.saveState();
    }


  },
  created() {
    window.addEventListener('unload', this.saveState); //sessionStorage
  },
  methods:{
    getUsers(){
      this.axios.get('/user').then((res)=>{

        this.$store.dispatch('saveUserName',res.username)
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        this.$store.dispatch('saveCartCount',res.cartCount)
      })
    },
    saveState () {
      storage.setItem('userandcart',this.$store.state)
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

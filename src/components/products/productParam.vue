<template>
  <div class="nar-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">
        {{ title }}
      </div>
      <div class="pro-param">
        <a href="">概述</a><span>|</span>
        <a href="">参数</a><span>|</span>
        <a href="">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productParam",
  props:{
    title:String
  },
  data(){
    return {
      isFixed:false
    }
  },
  mounted() {
    window.addEventListener('scroll',this.initHeight);
  },
  methods:{
    initHeight(){
      let scrollTop = window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop ;
      this.isFixed =  scrollTop>125? true:false;
    }
  },
  destroyed() {
    window.removeEventListener('scroll',this.initHeight,false)
    //冒泡销毁
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/mixin";
@import "../../assets/sass/config";
.nar-bar{
  height: 70px;
  line-height: 70px;
  border-top: 1px solid #e5e5e5;
  background-color: $colorJ;

  &.is_fixed{
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 5px 2px $colorE;
  }
  .container{
    @include flex();
    .pro-title{
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    .pro-param{
      font-size: $fontJ;
      a{
        color: $colorC;
      }
      span{
        margin: 0 10px;
      }
    }
  }
}
</style>
<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:">小米商城</a>
          <a href="javascript:">MIUI</a>
          <a href="javascript:">云服务</a>
          <a href="javascript:">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:" v-if="username">{{ username }}</a>
          <a href="javascript:" v-else @click="login">登录</a>
          <a href="javascript:" v-if="username" @click="logout">退出</a>
          <a href="javascript:" v-if="username" @click="gotoorderlist">我的订单</a>

          <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车({{cartCount}})</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="head-logo">
          <a href="/#/index"></a>
        </div>
        <div class="head-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phonelist" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi</span>
              <div class="children">
                <ul>
                  <li class="product">
                    <a href="javascript:" target="_blank">
                      <div class="pro-img">
                        <img src="require('../../public/imgs/nav-img/nav-2.png')" alt="">
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">￥2999</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img src="require('../../public/imgs/nav-img/nav-1.png')" alt="">
                      </div>
                      <div class="pro-name">小米11</div>
                      <div class="pro-price">￥5999</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img src="require('../../public/imgs/nav-img/nav-2.png')" alt="">
                      </div>
                      <div class="pro-name">小米11pro</div>
                      <div class="pro-price">￥4999</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img src="../../public/imgs/nav-img/nav-3.png" alt="">
                      </div>
                      <div class="pro-name">小米MIX FOLD</div>
                      <div class="pro-price">￥9999</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img src="../../public/imgs/nav-img/nav-4.png" alt="">
                      </div>
                      <div class="pro-name">小米MIX FOLD pro</div>
                      <div class="pro-price">￥12999</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img src="../../public/imgs/nav-img/nav-5.png" alt="">
                      </div>
                      <div class="pro-name">小米CC9 pro</div>
                      <div class="pro-price">￥5999</div>
                    </a>
                  </li>
                </ul>
              </div>


          </div>
          <div class="item-menu">
            <span>小米电视</span>

              <div class="children">
                <ul>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img src="../../public/imgs/nav-img/nav-3-6.png" alt="">
                      </div>
                      <div class="pro-name">小米电视大师</div>
                      <div class="pro-price">￥2999</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img src="../../public/imgs/nav-img/nav-3-1.jpg" alt="">
                      </div>
                      <div class="pro-name">小米电视大屏</div>
                      <div class="pro-price">￥5999</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img src="../../public/imgs/nav-img/nav-3-2.jpg" alt="">
                      </div>
                      <div class="pro-name">小米电视至尊纪念版</div>
                      <div class="pro-price">￥4999</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img src="../../public/imgs/nav-img/nav-3-3.png" alt="">
                      </div>
                      <div class="pro-name">小米电视无敌好看</div>
                      <div class="pro-price">￥9999</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img src="../../public/imgs/nav-img/nav-3-4.jpg" alt="">
                      </div>
                      <div class="pro-name">小米电视蓝光超超清</div>
                      <div class="pro-price">￥12999</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img">
                        <img src="../../public/imgs/nav-img/nav-3-5.jpg" alt="">
                      </div>
                      <div class="pro-name">小米电视青春版</div>
                      <div class="pro-price">￥5999</div>
                    </a>
                  </li>
                </ul>
              </div>

          </div>
        </div>
        <div class="head-search">
          <div class="wrapper">
            <input type="text">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name: "navHeader",
  data(){
    return{
      //username:this.$store.state.username,
      phonelist:[],
      redphonelist:[]
    }
  },
  computed:{
  //为什么使用计算属性 因为是先渲染后再请求，就会有延迟，而计算属性可以再count变化的时候冲洗计算泵更新dom
  // 最直接的就是通过计算属性return一个状态
    /*username(){
      return this.$store.state.username;
    },
    cartCount(){
      return this.$store.state.cartCount;
    }*/
    //这里使用的mapstate函数 可以解决重复冗余的问题
    ...mapState(['username','cartCount'])
    // 映射 this.username 为 store.state.username
  },
  filters:{
    currency(val){
      if(!val) return '0.00';
      return '￥' +val.toFixed(2) + '起';
    }
  },
  mounted() {
    this.getProductList();
    let params = this.$route.params;
    if(params && params.from=='login'){
      this.getCartCount();
    }

  },
  methods:{
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        this.$store.dispatch('saveCartCount',res)
      })
    },
    getProductList(){
      this.axios.get('/products',{
        params:{
          categoryId:'100012',
          pageSize : 6
        }
      }).then((res)=>{
        if(res.list.length>=6){
          this.phonelist = res.list.slice(0,6);
          this.redphonelist = res.list.slice(7,13);
        }
      })
    },
    goToCart(){
      this.$router.push('/Cart');
    },
    login(){
      this.$router.push('/login');

    },
    logout(){
      this.axios.post('/user/logout').then(()=>{
        this.$message.success("退出成功");
        //清除cookie
        this.$cookie.set('userId','',{expires:-1});
        this.$store.dispatch('saveUserName','');
        this.$store.dispatch('saveCartCount','0');
      })

    },
    gotoorderlist(){
      this.$router.push('/order/list')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/sass/config';
@import '../assets/sass/mixin';
@import '../assets/sass/base';
.header{
  .nav-topbar{
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #B0B0B0;

    .container{
      @include flex();
    }
    a{
      display: inline-block;
      color: #B0B0B0;
      margin-right: 17px;
      &:last-child{
        margin-right: 0;
      }
    }
    .my-cart{
      width: 110px;
      background-color: #FF6600;
      text-align: center;
      color: #ffffff;

      .icon-cart{
        @include bacImg(16px,16px,'../../public/imgs/icon-cart-checked.png');
        margin-right: 4px;
      }
    }
  }

  .nav-header{
    .container{
      height: 112px;
      @include flex();
      position: relative;

      .head-menu{
        display: inline-block;
        width: 643px;
        padding-left: 209px;
          .item-menu{
            display: inline-block;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-left: 20px;
            span{
              cursor: pointer;
            }
            &:hover{
              color: $colorA;
              .children{
                height: 220px;
                opacity: 1;
              }
            }
            .children{
              position: absolute;
              top: 112px;
              overflow: hidden;
              left: 0;
              width: 1226px;
              border-top: 1px solid #e5e5e5;
              box-shadow: 0 7px 6px 0 rgba(0,0,0,.11);
              background-color: #ffffff;
              z-index: 10;
              height: 0;
              opacity: 0;
              transition: all .5s;
              .product{
                position: relative;
                float: left;
                width: 16.6%;
                height: 111px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                &:before{
                  content: ' ';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child:before{
                  display: none;
                }
                a{
                  display: inline-block;
                }
                img{
                  width: auto;
                  height: 111px;
                  margin-top: 26px;
                }
                .pro-img{

                }
                .pro-name{
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price{
                  color: $colorA;
                }

              }
            }
          }

      }

      .head-search{
        width: 320px;
        .wrapper{
          height: 50px;
          border: 1px solid #E0E0E0;
          display: flex;
          align-items: center;
          input{
            border: none;
            border-right: 1px solid #E0E0E0;
            width: 264px;
            box-sizing: border-box;
            height: 50px;
            padding-left: 10px;
          }
        }
        a{
          @include bacImg(18px,18px,"../../public/imgs/icon-search.png");
          margin-left: 18px;
        }
      }
    }
  }
}
</style>

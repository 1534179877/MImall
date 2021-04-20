<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <nav-menu></nav-menu>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a :href="'/#/product/'+item.id">
              <img v-bind:src="item.img" alt="">
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img :src="item.img" alt="">
        </a>
      </div>
      <div class="product-box">
        <h2>手机 :</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img src="../../public/imgs/mix-alpha.jpg" alt="">
            </a>
          </div>
          <div class="banner-list" >
            <div class="list" v-for="(items,index) in phoneList" :key="index">
              <div class="item" v-for="(item,i) in items" :key="i">
                <span>新品</span>
                <div class="item-img">
                  <img :src="item.img" alt="">
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.text }}</p>
                  <p class="price">{{ item.price }}</p>
                </div>
              </div>
            </div>
           </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>

import ServiceBar from './../components/serviceBar'
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import NavMenu from "../components/navMenu";
export default {
  name: "index",
  components:{NavMenu, SwiperSlide,Swiper,ServiceBar},
  data(){
    return{
      swiperOption:{
        autoplay:true,
        loop:true,
        effect:'cube',
        cubeEffect:{

          shadowOffset:100,
          shadowScale:0.9
        },
        pagination:{
          el:'.swiper-pagination',
          clickable:true
        },
        navigation:{
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev'
        }
      },
      slideList:[
        {
          id:'42',
          img:require('../../public/imgs/slider/slide-1.jpg'),
        },
        {
          id:'45',
          img:require('../../public/imgs/slider/slide-2.jpg'),
        },
        {
          id:'46',
          img:require('../../public/imgs/slider/slide-3.jpg'),
        },
        {
          id:'46',
          img:require('../../public/imgs/slider/slide-4.jpg'),
        },
        {
          id:'46',
          img:require('../../public/imgs/slider/slide-5.jpg'),
        },
      ],
      adsList:[
        {
          id: 33,
          img:require('../../public/imgs/ads/ads-1.png')
        },
        {
          id: 48,
          img:require('../../public/imgs/ads/ads-2.jpg')
        },
        {
          id: 45,
          img:require('../../public/imgs/ads/ads-3.png')
        },{
          id: 47,
          img:require('../../public/imgs/ads/ads-4.jpg')
        }
      ],
      phoneList:[
          [{
            id:32,
            img: require('../../public/imgs/item-box-1.png'),
            name:'小米11',
            price:2399,
            text:'超级牛'
          },{
            id:32,
            img: require('../../public/imgs/item-box-1.png'),
            name:'小米11',
            price:2399,
            text:'超级牛'
          },{
            id:32,
            img: require('../../public/imgs/item-box-1.png'),
            name:'小米11',
            price:2399,
            text:'超级牛'
          },{
            id:32,
            img: require('../../public/imgs/item-box-1.png'),
            name:'小米11',
            price:2399,
            text:'超级牛'
          }],[{
          id:32,
          img: require('../../public/imgs/item-box-1.png'),
          name:'小米11',
          price:2399,
          text:'超级牛'
        },{
          id:32,
          img: require('../../public/imgs/item-box-1.png'),
          name:'小米11',
          price:2399,
          text:'超级牛'
        },{
          id:32,
          img: require('../../public/imgs/item-box-1.png'),
          name:'小米11',
          price:2399,
          text:'超级牛'
        },{
          id:32,
          img: require('../../public/imgs/item-box-1.png'),
          name:'小米11',
          price:2399,
          text:'超级牛'
        }]
      ]
    }
  },
  methods:{

  }
}
</script>

<style scoped lang="scss">
@import "src/assets/sass/mixin";
@import "src/assets/sass/base";
@import "src/assets/sass/config";
  .index{
    .swiper-box{
     /* margin-left: 145px;
      margin-right: 145px;*/
      .swiper-container{
        height: 461px;
        .swiper-button-prev{
          left: 264px;
          &:hover{
            background-color: #666666;
          }
        }
        .swiper-button-next{
          &:hover{
            background-color: #666666;
          }
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .ads-box{
      @include flex();
      margin-top: 14px;
      margin-bottom: 31px;
      a{
        width: 296px;
        height: 127px;
      }
    }
    .product-box{
      background-color: $colorJ;
      padding: 30px 0 10px;
      h2{
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }
      .wrapper{
        display: flex;
        .banner-left{
          margin-left: 16px;
          img{
            width: 224px;
            height: 619px;
          }
        }
        .banner-list{
          .list{
            @include flex();
            width: 986px;
            margin-bottom: 14px;
            margin-left: 10px;
            &:last-child{
              margin-bottom: 0;
            }
            .item{
              width: 236px;
              height: 306px;
              background-color: $colorG;
              text-align: center;
              &:hover{
                box-shadow:  5px 5px 5px rgba(210,210,210, .5);
              }
              span{

              }
              .item-img{
                img{
                  height: 195px;
                }
              }
              .item-info{
                h3{
                  font-size: $fontJ;
                  color: $colorB;
                  line-height: $fontJ;
                  font-weight: bold;
                }
                p{
                  color: $colorD;
                  line-height: 13px;
                  margin: 13px auto 13px;
                }
                .price{
                  color: #F20A0A;
                  font-size: $fontJ;
                  font-weight: bold;
                  cursor: pointer;
                  &:after{
                    content: ' ';
                    @include bacImg(22px,22px,'../../public/imgs/icon-cart-hover.png');
                    margin-left: 5px;
                  }
                }
              }
            }
          }
        }

      }
    }
  }
</style>
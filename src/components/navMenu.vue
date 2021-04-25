<template>
  <div class="nav-menu">
    <ul class="menu-wrap">
      <li class="menu-item">
        <a href="">手机 电话卡</a>
        <div class="children">
          <ul v-for="(item,index) in menuList" :key="index">
            <li v-for="(subs,i) in item" :key="i">
              <a :href="subs?'/#/product/'+subs.id:''">
                <img :src="subs?subs.img : require('../../public/imgs/item-box-2.png')" alt="">
                {{subs?subs.name:'小米9'}}
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="menu-item">
        <a href="">电视 盒子</a>
        <div class="children">
          <ul v-for="(item,index) in menuList" :key="index">
            <li v-for="(subs,i) in item" :key="i">
              <a :href="subs?'/#/product/'+subs.id:''">
                <img :src="subs?subs.img : require('../../public/imgs/item-box-2.png')" alt="">
                {{subs?subs.name:'小米9'}}
              </a>
            </li>
          </ul>
x`
        </div>
      </li>
      <li class="menu-item">
        <a href="">笔记本 平板</a>
        <div class="children">
          <ul v-for="(item,index) in menuList" :key="index">
            <li v-for="(subs,i) in item" :key="i">
              <a :href="subs?'/#/product/'+subs.id:''">
                <img :src="subs?subs.img : require('../../public/imgs/item-box-2.png')" alt="">
                {{subs?subs.name:'小米9'}}
              </a>
            </li>
          </ul>

        </div>
      </li>
      <li class="menu-item">
        <a href="">家电 插线板</a>
        <div class="children">
          <ul v-for="(item,index) in menuList" :key="index">
            <li v-for="(subs,i) in item" :key="i">
              <a :href="subs?'/#/product/'+subs.id:''">
                <img :src="subs?subs.img : require('../../public/imgs/item-box-2.png')" alt="">
                {{subs?subs.name:'小米9'}}
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="menu-item">
        <a href="">出行 穿戴</a>
        <div class="children">
          <ul v-for="(item,index) in menuList" :key="index">
            <li v-for="(subs,i) in item" :key="i">
              <a :href="subs?'/#/product/'+subs.id:''">
                <img :src="subs?subs.img : require('../../public/imgs/item-box-2.png')" alt="">
                {{subs?subs.name:'小米9'}}
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="menu-item">
        <a href="">智能 路由器</a>
        <div class="children">
          <ul v-for="(item,index) in menuList" :key="index">
            <li v-for="(subs,i) in item" :key="i">
              <a :href="subs?'/#/product/'+subs.id:''">
                <img :src="subs?subs.img : require('../../public/imgs/item-box-2.png')" alt="">
                {{subs?subs.name:'小米9'}}
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="menu-item">
        <a href="">电源 配件</a>
        <div class="children">
          <ul v-for="(item,index) in menuList" :key="index">
            <li v-for="(subs,i) in item" :key="i">
              <a :href="subs?'/#/product/'+subs.id:''">
                <img :src="subs?subs.img : require('../../public/imgs/item-box-2.png')" alt="">
                {{subs?subs.name:'小米9'}}
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="menu-item">
        <a href="">生活 箱包</a>
        <div class="children">
          <ul v-for="(item,index) in menuList" :key="index">
            <li v-for="(subs,i) in item" :key="i">
              <a :href="subs?'/#/product/'+subs.id:''">
                <img :src="subs?subs.img : require('../../public/imgs/item-box-2.png')" alt="">
                {{subs?subs.name:'小米9'}}
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "nav-menu",
  data(){
    return{
      menuList:[
          [
            {
              img:require('../../public/imgs/item-box-2.png'),
              name:'小米CC8',
              id:30,
            },
            {
              img:require('../../public/imgs/item-box-3.jpg'),
              name:'小米8青春版',
              id:31,
            },
            {
              img:require('../../public/imgs/item-box-1.png'),
              name:'小米11',
              id:30,
            },
            {
              img:require('../../public/imgs/item-box-4.jpg'),
              name:'小米8',
              id:30,
            }
          ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/sass/mixin";
@import "src/assets/sass/config";
  .nav-menu{
    position: absolute;
    width: 264px;
    height: 461px;
    z-index: 6;
    padding: 26px 0;
    background-color: #55585a7a;
    box-sizing: border-box;
    .menu-wrap{
      .menu-item{
        height: 50px;
        line-height: 50px;
        .children{
          display: none;
          width: 962px;
          height: 461px;
          background-color: $colorG;
          position: absolute;
          top: 0;
          left: 264px;
          border: 1px solid $colorH;
          ul{
            display: flex;
            justify-content: space-between;
            height: 75px;
            li{
              height: 75px;
              line-height: 75px;
              width: 241px;
              flex: 1;
              padding-left: 23px;
            }
            a{
              color: $colorB;
              font-size: 14px;
            }
            img{
              width: 42px;
              height: 35px;
              vertical-align: middle;
            }
          }
        }
        a{
          display: block;
          position: relative;
          color: #E0E0E0;
          font-size: 16px;
          padding-left: 30px;
          &:after{
            content: ' ';
            position: absolute;
            top: 17.5px;
            right: 30px;
            @include bacImg(10px,10px,'../../public/imgs/icon-arrow.png');
          }
        }
        &:hover{
          background-color: #FF6600;
          .children{
            display: block;
          }
        }
      }
    }

  }
</style>
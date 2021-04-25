<template>
<div class="right-memu">
  <a href="" class="phoneapp">
    <div class="icon">
      <img src="https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png" alt="">
      <img src="https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png" alt="">
    </div>
    <div class="icon-text">
      <span>手机APP</span>
    </div>
    <div class="children">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/78c30d4f259ed43ab20e810a522a6249.png" alt="">
     <span>
       扫码领取新人百元礼包
     </span>


    </div>
  </a>
  <a href="">
    <div class="icon">
      <img src="https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png" alt="">
      <img src="https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png" alt="">
    </div>
    <div class="icon-text">
      <span>个人中心</span>
    </div>
  </a>
  <a href="">
    <div class="icon">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png" alt="">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png" alt="">

    </div>
    <div class="icon-text">
      <span>售后服务</span>
    </div>
  </a>
  <a href="">
    <div class="icon">
      <img src="https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png" alt="">
      <img src="https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png" alt="">

    </div>
    <div class="icon-text">
       <span>人工客服</span>
    </div>
  </a>
  <a href="">
    <div class="icon">
      <img src="https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png" alt="">
      <img src="https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png" alt="">

    </div>
    <div class="icon-text">
      <span>购物车</span>
    </div>
  </a>
 
</div>
</template>

<script>
export default {
name: "rightMemu"
}
</script>

<style scoped lang="scss">
  .right-memu{
    position: fixed;
    right: 0;
    z-index: 9;
    //background-color: #FF6600;
    //border: 1px solid #666666;
    top: auto;
    a{
      &:hover{
        .icon{
          img{
            &:last-child{
              display: block;
              //z-index: 99;
            }
          }
        }
        .icon-text{
          span{
            color: #FF6600;
          }
        }
      }
      position: relative;
      display: block;
      width: 82px;
      height: 90px;
      margin-top: -1px;
      background-color: #fff;
      border: 1px solid #F5F5F5;
      text-align: center;
      .icon{
        position: relative;
        width: 30px;
        height: 30px;
        margin: 0 auto 8px;
        padding-top: 18px;
        img{
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 30px;
          transition: opacity .3s;

          &:last-child{
            display: none;
          }
        }
      }
      .icon-text{
        span{
          display: block;
          width: 82px;
          text-align: center;
          margin: 14px auto 0;
          color: #757575;
        }
      }
    }
    .phoneapp{
      .children{
        background-color: #ffffff;
        display: none;
        right: 82px;
        top: 10px;

        position: absolute;
        img{
          width: 100px;
          height: 100px;
          padding: 5px;

        }
        span{
          color: #666666;
          text-align: center;
          margin: 14px auto 0;
        }
      }

      &:hover{
        .children{
          display: block;
        }
      }
    }
  }
</style>
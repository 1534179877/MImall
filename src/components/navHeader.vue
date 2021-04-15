<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span>
            购物车</a>
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
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>RedMi</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>小米电视</span>
            <div class="children"></div>
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
export default {
name: "navHeader"
}
</script>

<style scoped lang="scss">
@import '../assets/sass/base';
@import '../assets/sass/mixin';
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
    }
    .my-cart{
      width: 100px;
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

      .head-logo{
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #FF6600;
        a{
          display: inline-block;

          width: 110px;
          height: 55px;
          &:before{
            content: ' ';

            @include bacImg(55px,55px,"../../public/imgs/mi-logo.png");
            transition: margin .5s;
          }
          &:after{
            content: ' ';/*占位*/
            @include bacImg(55px,55px,"../../public/imgs/mi-home.png");
          }
          &:hover:before{
            margin-left: -55px;
            transition: .5s;
          }

        }
      }

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
              &:hover{

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

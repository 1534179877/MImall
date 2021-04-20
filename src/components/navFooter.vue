<template>
  <div>
    <div class="footer">
      <div class="footer-logo">
        <img src="../../public/imgs/logo-footer.png" alt="">
        <p>小米商城</p>
      </div>

      <div class="foot-link">
        <a href=""> 请再等一下丶首页</a><span>|</span>
        <a href="">Vue学习项目</a><span>|</span>
        <a href="">html\css\javascript学习</a>
      </div>
      <div  class="copyright">Copyright © 2021- 2021 <span>pxy.mi.mall.com</span> All Rights Reserved.
        pxy 版权所有</div>
    </div>
  </div>
</template>

<script>
export default {
name: "navFooter"
}
</script>

<style scoped lang="scss">
.footer{
  height: 234px;
  border:1px solid #FF7301;
  color: #999999;
  font-size: 16px;
  text-align: center;
  background-color: #333333;
  .footer-logo{
    margin-top: 46px;
    margin-bottom: 51px;
    img{
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .foot-link{
    margin-bottom: 15px;
    span{
      margin: 0 15px;
    }
    a{
      color: #999999;
      display: inline-block;
    }
  }
  .copyright{
    span{
      color: #FF6600;
      margin: 0 10px;
    }
  }
}
</style>
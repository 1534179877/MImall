<template>
  <div class="login-form">
    <h3>
      <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
    </h3>
    <div class="input">
      <input type="text" placeholder="请输入帐号" v-model="username">
    </div>
    <div class="input">
      <input type="password" placeholder="请输入密码" v-model="password">
    </div>
    <div class="btn-box">
      <a href="javascript:;" class="btn" @click="login">登录</a>
    </div>
    <div class="tips">
      <div class="sms" @click="register">手机短信登录/注册</div>
      <div class="reg">立即注册<span>|</span>忘记密码？</div>
    </div>
  </div>
</template>

<script>
export default {
name: "loginForm"
}
</script>

<style scoped lang="scss">
.login-form{
  margin-top: 20px;
  box-sizing: border-box;
  padding-left: 31px;
  padding-right: 31px;
  width:410px;
  height:510px;
  background-color:#ffffff;
  position:absolute;
  top: auto;
  right:0;
h3{
  line-height:23px;
  font-size:24px;
  text-align:center;
  margin:40px auto 49px;
.checked{
  color:#FF6600;
}
.sep-line{
  margin:0 32px;
}
}
.input{
  display:inline-block;
  width:348px;
  height:50px;
  border:1px solid #E5E5E5;
  margin-bottom:20px;
input{
  width: 100%;
  height: 100%;
  border: none;

}
}
.btn{
  display: block;
  width:100%;
  line-height:50px;
  margin-top:10px;
  font-size:16px;
  background-color: #FF6600;
  text-align: center;
  color: #F5F5F5;
}


.tips{
  margin-top:14px;
  display:flex;
  justify-content:space-between;
  font-size:14px;
  cursor:pointer;
.sms{
  color:#FF6600;
}
.reg{
  color:#999999;
span{
  margin:0 7px;
}
}
}
}

</style>
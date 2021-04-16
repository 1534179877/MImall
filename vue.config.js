/*
*
*接口代理
*
*/
module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    //代理
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
          //在拦截到api后将其重置为空
        }
      }
    }

}
}

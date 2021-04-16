/*
*
*接口代理
*
*/
module.export = {
  devServer:{
    host:'localhost',
    port:8080,
    //代理
    proxy:{
      '/api':{
        target:'https://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
          //在拦截到api后将其重置为空
        }
      }
    }

}
}

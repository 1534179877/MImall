/*
*
*接口代理
*
*/
module.exports = {
  devServer:{
    host:'localhost',
    port:8081,
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
  },

  chainWebpack:(config)=>{//防止一次性全部拉取文件
    config.plugins.delete('prefetch');
  }
}

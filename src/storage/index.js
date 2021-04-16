/*
*storage封装
*/
/*
const STORAGE_KEY = 'mall';
export  default {
  //存储值
  setItem(key,value,module_name){
    //提供模块名进行递归添加
    //console.log('yes');
    if(module_name){
      //console.log("mod");
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name,val);
    }else{
      //console.log('json');
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
    }
  },
  //获取某个模块下面的属性 或者直接获取属性
  getItem(key,module_name){
    if(module_name){
      let val = this.getItem(module_name);
      if(val) return val[key];
    }
    return this.getStorage()[key];
  },
  getStorage(){
    //获取缓存信息
    console.log(JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)||'{}'));
    JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)||'{}');
  },
  //清除单个
  clear(key,module_name){
    let val = this.getStorage(); // 获取整个session
    if(module_name){
      delete val[module_name][key];
    }else{
      delete val[key];
    }
    this.setItem(val);


  }
}*/

/**
 * Storage封装
 */
const  STORAGE_KEY = 'mall';
export default{
  // 存储值
  setItem(key,value,module_name){
    if (module_name){

      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    }else{
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  // 获取某一个模块下面的属性user下面的userName
  getItem(key,module_name){
    if (module_name){
      let val = this.getItem(module_name);
      if(val) return val[key];
    }
    return this.getStorage()[key];
  },
  getStorage(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  clear(key, module_name){
    let val = this.getStorage();
    if (module_name){

      if (!val[module_name])return;
      delete val[module_name][key];
    }else{
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}

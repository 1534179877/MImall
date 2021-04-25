<template>
  <transition name="slide">
    <div class="modal" v-show="isshow">
      <div class="mask"></div>
      <div class="model-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:" class="btn" v-if="btn==1" @click="$emit('submit')">{{ sureText }}</a>
          <a href="javascript:" class="btn" v-if="btn==2" @click="$emit('cancel')">{{ cancelText }}</a>
          <div class="btn-group" v-else>
            <a href="javascript:" class="btn" @click="$emit('submit')">{{ sureText }}</a>
            <a href="javascript:" class="btn btn-default" @click="$emit('cancel')">{{ cancelText }}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modalWindow",
  props:{
    modalType:{
      type:String,
      default:'form'
    },
    //标题
    title:String,
    //按钮类型
    btn:String,
    sureText:{
      type:String,
      default: '确定'
    },
    cancelText:{
      type:String,
      default: '取消'
    },
    isshow:Boolean


  },
  methods:{

  }
}
</script>

<style scoped lang="scss">
@import "../../src/assets/sass/mixin";
@import "../../src/assets/sass/config";
@import "../../src/assets/sass/base";
@import "../../src/assets/sass/modal";
</style>
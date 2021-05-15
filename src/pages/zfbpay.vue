<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from "../components/Loading";
export default {
  name: "zfbpay",
  components:{Loading},
  data(){
    return{
      orderId:this.$route.query.orderNo,
      content:'',
      loading:true
    }
  },
  mounted() {
    this.paySubmit();
  },
  methods:{
    paySubmit(){
      this.axios.post('/pay',{
        orderId:this.orderId,
        orderName:'MIMALL',
        amount:0.01,
        payType:1
      }).then((res)=>{
        this.content = res.content;
        setTimeout(()=>{
          document.forms[0].submit();
        },100)
      })
    }
  }
}
</script>

<style scoped>

</style>
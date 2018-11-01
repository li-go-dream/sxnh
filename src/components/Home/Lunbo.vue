<template>
    <div class="page-swipe">
      <mt-swipe :auto="4000">
         <mt-swipe-item  class="slide1" v-for="item in swipData" :key="item.id">
            <img :src="item.url" alt="" style="width:100%"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
export default {
  name: 'Swipper',
     data () {
      return{
        swipData:{}
      }
      
    },
    mounted(){
      this.$ajax.getLunbo()
      .then((resp)=>{
        this.swipData=resp.data.data
       
      })
    }
}
</script>

<style>
  .page-swipe{
      height: 200px;
  }
 .mint-swipe-items-wrap{
    height: 200px;
  }
  @component-namespace page {
   
    @component swipe {
      @descendent desc {
        text-align: center;
        color: #666;
        margin-bottom: 5px;
      }
      .mint-swipe {
        height: 200px !important;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }
      .mint-swipe-item {
        line-height: 200px;
        width:375px;
        height: 200px;
      }

      .slide1 {
        background-color: #0089dc;
        color: #fff;
        width:375px;
        height: 200px;
       
      }
      .is-active{
        height:200px !important;
      }
      .slide2 {
        background-color: #ffd705;
        color: #000;
        width:375px;
        height: 200px;
      }
      .slide3 {
        background-color: #ff2d4b;
        color: #fff;
        width:375px;
        height: 200px;
      }
    }
  }
</style>

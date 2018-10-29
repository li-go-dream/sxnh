<template>
  <div>
    <div class="page-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="slide1"><img src="http://pic30.nipic.com/20130605/7447430_151725918000_2.jpg" style="width:100%"/></mt-swipe-item>
        <mt-swipe-item class="slide1"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540723664009&di=debc817917c42babb2a4f52e7012b0e2&imgtype=0&src=http%3A%2F%2Fpic29.photophoto.cn%2F20131111%2F0036036844942752_b.jpg" style="width:100%"/></mt-swipe-item>
        <mt-swipe-item class="slide1"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540723691056&di=7aa027cdadd04ebf07f357aba541fb47&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F811b81cc70375d7f6e7edbeb73d5c7371289fe0a48fb6-dA5oBr_fw658" style="width:100%"/></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="nav">
      <ul>
        <li>排行榜</li>
        <li>活动</li>
        <li>优惠券</li>
        <li>新华优选</li>
        <li>新用户</li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  name: 'home',
 
}
</script>

<style lang="scss">
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
  .nav{
    height:100px;
    
  }
  .nav ul{
    padding: 10px 0;
    display: flex;
    justify-content: space-around ;

  }
  .nav ul li{
   width: 60px;
   height: 60px;
   background: rgb(161, 4, 4);
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
   border-bottom-left-radius: 10px;
   border-bottom-right-radius: 10px;
   font-size: 12px;
   text-align: center;
   line-height: 140px;

  
  }
</style>

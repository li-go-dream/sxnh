<template>
    <div class="page-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="slide1"><img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1540955873&di=f9c8191787e6270feaf910a01e26a66b&src=http://img1.ph.126.net/-hZoeSoDUqVrDaU291ooNw==/6608758674771356737.jpg" style="width:100%"/></mt-swipe-item>
        <mt-swipe-item class="slide1"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540965996232&di=edb49eb5e613962660ba18746eb2dbb9&imgtype=0&src=http%3A%2F%2Fimg0.ph.126.net%2FGPtUwQY7H0SttDO_PsEAgw%3D%3D%2F6608208918958600530.jpg" style="width:100%"/></mt-swipe-item>
        <mt-swipe-item class="slide1"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540966030171&di=a1fa588050d5bdf66d1cc24968a1e6e7&imgtype=0&src=http%3A%2F%2Fwww.goumin.com%2Fattachments%2Fphoto%2F0%2F0%2F111%2F28610%2F7324204.jpg" style="width:100%"/></mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
export default {
    name: "slide"
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
    }
  }
</style>

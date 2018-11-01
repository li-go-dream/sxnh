<template>
     <div class="quality">
      <h3>品质推荐</h3>
      <ul>
        <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541081444574&di=0cfb2723bca7882fb7202b7ee65abce8&imgtype=0&src=http%3A%2F%2Fimg.qzone.la%2Fhtml%2Fupload%2F20141114%2F14159281741184.jpg"/><p>天成地久：给美君</br>的信</p><p class="money">￥55.10</p></li>
        <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541081444574&di=d679612e47261cb04bb235ed1bccab73&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-10-15%2F055521739.jpg"/><p>一只特立独行的猪</p><p class="money money2">￥35.10</p></li>
        <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541081444564&di=a7760ed5d4696f83b39720a5cd5e56c9&imgtype=0&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F170830%2F014019E25-9.jpg"/><p>运营之光：我</br>的互联网运营</p><p class="money">￥99.00</p></li>
      </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.quality{
    width: 100%;
    height: 160px;
    background: white;
  &>h3{
    font-size: 14px;
    font-weight: 600;
  }
  &>ul{
   display: flex;
   justify-content: space-around;
   margin-top:5px;
   
  &>li{

  &>p{
    font-size: 12px;
  }
  &>img{
    width: 70px;
    height: 80px;
  }
  &>.money{
    color: rgb(212, 9, 9);
  }
  &>.money2{
    margin-top:17px;
  }
  }
  }
  }
</style>

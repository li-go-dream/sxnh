<template>
    <div class="nav">
      <ul>
        <li>排行榜</li>
        <li>活动</li>
        <li>优惠券</li>
        <li>新华优选</li>
        <li>新用户</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" >
  .nav{
    height:100px;
    background: white;
    margin-bottom: 5px;
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

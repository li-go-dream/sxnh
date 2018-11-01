<template>
    <div class="today">
      <h3>今日推荐</h3>
      <div class="item">
        <img :src="TodayData.url"/>
        <div class="words">
          <h4>{{TodayData.title}}</h4>
          <span>{{TodayData.des}}</span>
          <p class="price">￥{{TodayData.price}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Today',
  data () {
    return {
      TodayData: {}
    }
  },
  mounted () {
    this.$ajax.gettoday()
      .then((resp) => {
        this.TodayData = resp.data.data
      })
  }
}
</script>

<style lang="scss">
.today{
    width: 100%;
    height: 150px;
    background: white;
    margin-bottom: 10px;
  &>h3{
    font-size: 14px;
    font-weight: 600;
  }
  &>.item{
    margin-top:16px;
    display: flex;
    justify-content:space-around;
  img{
    width: 100px;
    height: 80px;
  }
  &>.words{
    font-size: 12px;
  &>h4{
    font-size: 13px;
    margin-bottom: 10px;
  }
  &>span{
    color: #a8a4a4;
    font-size: 12px;
  }
  &>.price{
    color: rgb(202, 8, 8);
    margin-left: 171px;
    margin-top:21px;
  }
  }
  }
  }
</style>

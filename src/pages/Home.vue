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
    <div class="today">
      <h3>今日推荐</h3>
      <div class="item">
        <img src="http://pic30.nipic.com/20130605/7447430_151725918000_2.jpg"/>
        <div class="words">
          <h4>小猪佩奇我有好习惯行为引导系列</h4>
          <span>"小猪佩奇"系列故事幽默活泼，形象风靡<br>全世界，深受小粉丝们的追捧喜爱</span>
          <p class="price">￥114.00</p>
        </div>
      </div>
    </div>
    <div class="quality">
      <h3>品质推荐</h3>
      <ul>
        <li><img src="http://pic30.nipic.com/20130605/7447430_151725918000_2.jpg"/><p>天成地久：给美君<br>的信</p><p class="money">￥55.10</p></li>
        <li><img src="http://pic30.nipic.com/20130605/7447430_151725918000_2.jpg"/><p>一只特立独行的猪</p><p class="money money2">￥35.10</p></li>
        <li><img src="http://pic30.nipic.com/20130605/7447430_151725918000_2.jpg"/><p>运营之光：我<br>的互联网运营</p><p class="money">￥99.00</p></li>
      </ul>
    </div>
     <div class="page-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="slide1"><img src="http://pic30.nipic.com/20130605/7447430_151725918000_2.jpg" style="width:100%"/></mt-swipe-item>
        <mt-swipe-item class="slide1"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540723664009&di=debc817917c42babb2a4f52e7012b0e2&imgtype=0&src=http%3A%2F%2Fpic29.photophoto.cn%2F20131111%2F0036036844942752_b.jpg" style="width:100%"/></mt-swipe-item>
        <mt-swipe-item class="slide1"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540723691056&di=7aa027cdadd04ebf07f357aba541fb47&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F811b81cc70375d7f6e7edbeb73d5c7371289fe0a48fb6-dA5oBr_fw658" style="width:100%"/></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="books">
      <h3>党政读物</h3>
      <ul>
        <li><img src="http://pic30.nipic.com/20130605/7447430_151725918000_2.jpg"/><p>习近平的七年知青</p><span class="money">￥123.00</span></li>
        <li><img src="http://pic30.nipic.com/20130605/7447430_151725918000_2.jpg"/><p>习近平的七年知青</p><span  class="money">￥123.00</span></li>
        <li><img src="http://pic30.nipic.com/20130605/7447430_151725918000_2.jpg"/><p>习近平的七年知青</p><span  class="money">￥123.00</span></li>
        <li><img src="http://pic30.nipic.com/20130605/7447430_151725918000_2.jpg"/><p>习近平的七年知青</p><span  class="money">￥123.00</span></li>
        <li><img src="http://pic30.nipic.com/20130605/7447430_151725918000_2.jpg"/><p>习近平的七年知青</p><span  class="money">￥123.00</span></li>
        <li><img src="http://pic30.nipic.com/20130605/7447430_151725918000_2.jpg"/><p>习近平的七年知青</p><span  class="money">￥123.00</span></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style lang="scss">
  body{
    background: #ecebeb;
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
  .books{
    width: 100%;
    height: 280px;
    background: white;
    &>h3{
      font-size: 14px;
      font-weight: 600;
    }
    &>ul{
    display: flex;
    justify-content: space-around;
    margin-top:5px;
    flex-wrap: wrap;
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
          font-size: 12px;
        }
      }
    }
  }

</style>

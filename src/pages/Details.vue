<template>
  <div class="detail">
    <dl>
      <dt><img :src="currentdata.img" alt=""></dt>
      <dd>
        <h3>￥{{currentdata.price}}</h3>
        <h4>{{currentdata.name}}</h4>
        <h5>{{currentdata.desc}}</h5>
        <h6>作者：{{currentdata.author}}</h6>
      </dd>
    </dl>
    <div>
      <span>联系客服</span>
      <span @click="addcart">加入购物车</span>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'detail',
  data () {
    return {
      currentdata: []
    }
  },
  mounted () {
    this.getDetail(this.$route.params.id)
  },
  beforeRouteUpdate (to, from, next) {
    this.getDetail(to.params.id)
    next()
  },
  methods: {
    ...mapMutations(['addtocart']),
    getDetail (id) {
      this.$ajax.getDetail(id)
        .then((resp) => {
          this.currentdata = resp.data.data
        })
    },
    addcart () {
      this.addtocart(this.currentdata)
    }
  }
}
</script>

<style  lang="scss" scoped>
  .detail{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    &>dl{
      width: 95%;
      height: 90%;
      &>dt{
        height: 70%;
        text-align: center;
        padding-top: 10px;
        &>img{
          display: inline-block;
          width: 95%;
          height: 95%;
        }
      }
      &>dd{
        &>h3{
          font-size: 25px;
          height: 40px;
          color: red;
        }
        &>h4{
          padding: 5px;
          font-size: 16px;
          color: #050202;
        }
        &>h5{
          font-size: 15px;
          color: #4e4e4e;
          padding: 5px;
          padding-bottom: 10px;
        }
        &>h6{
          font-size: 16px;
          padding: 5px;
        }
      }
    }
    &>div{
      display: flex;
      width: 95%;
      height: 10%;
      justify-content: space-around;
      &>span{
        display: inline-block;
        text-align: center;
        color: white;
        width: 100px;
        height: 35px;
        line-height: 35px;
        border-radius: 2.1333333rem;
        margin-top: 15px;
      }
      &>span:nth-child(1){
        background-color: rgb(223, 226, 62);
      }
      &>span:nth-child(2){
        background-color: red;
      }
    }
  }
</style>

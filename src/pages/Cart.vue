<template>
  <div>
    <ul>
      <li
      v-for="item in cart"
      :key="item.id"
      >
        <div>
          <input type="checkbox" v-model="checkItems" :value="item.id">
        </div>
        <img :src="item.img" alt="">
        <div class="d1">
          <span>{{item.name}}</span>
          <span>￥{{item.price}}</span>
        </div>
        <div class="d2">
          <span @click="reducecount(item.id)">-</span>
          <span>{{item.count}}</span>
          <span @click="addcount(item.id)">+</span>
        </div>
      </li>
    </ul>
    <div class="total">
      <div class="check">
          <input type="checkbox" v-model="isAllcheck">
          <span>全选</span>
        </div>
      <div class="price-count">
        <span>总价：{{totalPrice | tofixed}}</span>
      </div>
      <div class="shopping">
        <span>购买</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex'

export default {
  name: 'cart',
  data () {
    return {
      checkItems: []
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalCount']),
    // count() {
    //   return this.$store.state.count;
    // }
    totalPrice () {
      return this.$store.state.cart.reduce((result, item) => {
        if (this.checkItems.includes(item.id)) {
          result += item.price * item.count
        }
        return result
      }, 0)
    },
    isAllcheck: {
      get () {
        return this.checkItems.length === this.$store.state.cart.length
      },
      set (e) {
        if (e) {
          this.checkItems = this.$store.state.cart.map(item => item.id)
        } else {
          this.checkItems = []
        }
      }
    }
  },
  filters: {
    tofixed (p) {
      return p.toFixed(2)
    }
  },
  methods: {
    // addcount() {
    //   this.$store.commit('addcount');
    // }
    ...mapMutations(['addcount', 'reducecount'])
  }
}
</script>

<style lang="scss" scoped>
  div{
    &>ul{
      &>li{
        margin: 3px;
        &>div{
          display: inline-block;
          width: 5%;
          height: 100%;
          text-align: center;
          vertical-align: top;
          padding: 40px 0;
          &>input{
            display: inline-block;
            width: 15px;
            height: 15px;
          }
        }
        &>.d1{
          width: 35%;
          &>span:nth-child(1){
            font-size: 18px;
            color: rgb(95, 65, 65);
          }
          &>span:nth-child(2){
            font-size: 16px;
            color: red;
          }
        }
        &>.d2{
          width: 30%;
          &>span{
            display: inline-block;
            width: 28%;
            height: 25px;
            line-height: 25px;
            border: 1px solid red;
          }
        }
        height: 100px;
        border: 1px solid red;
        &>img{
          display: inline-block;
          height: 90px;
          width: 25%;
          border: 1px solid blue;
          margin-top: 3px;
        }
      }
    }
    &>.total{
      position: fixed;
      right: 0;
      left: 0;
      bottom: 70px;
      height: 50px;
      line-height: 50px;
      display: flex;
      font-size: 15px;
      justify-content: space-between;
      border: 1px solid red;
      margin: 0 3px;
      &>.check{
        &>input{
          display: inline-block;
          width: 15px;
          height: 15px;
          vertical-align: middle;
        }
      }
      &>.price-count{
        width: 50%;
        display: flex;
        justify-content: space-between;
      }
      &>.shopping{
        margin-right: 5px;
        &>span{
          display: inline-block;
          color: white;
          background-color: red;
          width: 70px;
          text-align: center;
        }
      }
    }
  }
</style>

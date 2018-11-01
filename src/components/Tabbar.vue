<template>
    <div class="sx-tabber">
      <router-link
      v-for="item in routes"
      :key="item.name"
      :to="item.path"
      tag="div"
      >
      <span v-if="item.path === '/cart'">{{totalCount | maxnumber}}</span>
      <i :class="`icon iconfont icon-${item.name}`"></i>
      <span>{{item.text}}</span>
      </router-link>
    </div>
</template>

<script>
import routes from '@/router/routes'
import {mapGetters} from 'vuex'
export default {
  name: 'tabbar',
  data () {
    return {
      routes: routes.filter(item => item.isTabbar === true)
    }
  },
  computed: {
    ...mapGetters(['totalCount'])
  },
  filters: {
    maxnumber (m) {
      return m < 99 ? m : '99+'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import url('./icon/iconfont.scss');
  .sx-tabber{
    display: flex;
    border-top: 1px solid #cccccc;
    &>div{
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      flex: 1;
      height: 64px;
      line-height: 32px;
      color: rgb(124, 121, 121);
      background-color: #eeeeee;
      position: relative;
      &>i{
        display: inline-block;
        height: 30px;
      }
      &>span{
        font-size: 16px;
      }
      &>span:nth-child(1){
        position: absolute;
        top: -10px;
        left: 60px;
        width: 30px;
        height: 25px;
        color: white;
        font-size: 13px;
        text-align: center;
        line-height: 25px;
        border-radius: 50%;
        background-color: red;
      }
    }
    .router-link-exact-active,
      .router-link-active{
        color: red;
      }
  }
</style>

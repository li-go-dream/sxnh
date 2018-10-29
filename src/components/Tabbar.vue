<template>
    <div class="sx-tabber">
      <router-link
      v-for="item in routes"
      :key="item.name"
      :to="item.path"
      tag="div"
      >
      <i :class="`icon iconfont icon-${item.name}`"></i>
      <span>{{item.text}}</span>
      </router-link>
    </div>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'tabbar',
  data () {
    return {
      routes: routes.filter(item => item.isTabbar === true)
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
      &>i{
        display: inline-block;
        height: 30px;
      }
      &>span{
        font-size: 16px;
      }
    }
    .router-link-exact-active,
      .router-link-active{
        color: red;
      }
  }
</style>

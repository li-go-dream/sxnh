<template>
  <div class="sx-body">
    <Header></Header>
    <router-view class="sx-body-content"></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Tabbar,
    Header
  }
}
</script>

<style lang="scss">
@import url('./reset/reset.scss');
.sx-body{
  height: 100%;
  display: flex;
  flex-direction: column;
  &-content{
   
  }
}
.sx-body-content{
 flex: 1;
}
</style>

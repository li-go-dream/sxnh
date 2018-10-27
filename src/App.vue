<template>
  <div>
    <Header></Header>
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
</style>

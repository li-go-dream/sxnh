<template>
  <div class="navbar">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
      <mt-tab-item id="4">选项</mt-tab-item>
      <mt-tab-item id="5">选项</mt-tab-item>
      <mt-tab-item id="6">选项</mt-tab-item>
      <mt-tab-item id="7">选项一</mt-tab-item>
      <mt-tab-item id="8">选项二</mt-tab-item>
      <mt-tab-item id="9">选项三</mt-tab-item>
      <mt-tab-item id="10">选项三</mt-tab-item>
  </mt-navbar>
    <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1">
      <mt-cell v-for="n in 10" :title="'内容 ' + n" />
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
      <mt-cell v-for="n in 4" :title="'测试 ' + n" />
    </mt-tab-container-item>
    <mt-tab-container-item id="3">
      <mt-cell v-for="n in 6" :title="'选项 ' + n" />
    </mt-tab-container-item>
</mt-tab-container>
  </div>
</template>

<script>
import routes from '@/router/routes'
import { Navbar, TabItem, TabContainer } from 'mint-ui'
export default {
  name: 'mall',
  data () {
    return {
      selected: '1',
      routes: routes.filter(item => item.name === 'mall')  
    }
  }
}

</script>

<style>
  .mint-navbar{
    display: inline-block;
    flex-direction: column;
    width: 25%;
    height: 100%;
    background-color: #eeeeee;
  }
  .mint-tab-container{
    display: inline-block;
    width: 70%;
    vertical-align: top
  }
</style>

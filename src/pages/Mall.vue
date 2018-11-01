<template>
  <div class="navbar">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">文学艺术</mt-tab-item>
      <mt-tab-item id="2">人文社科</mt-tab-item>
      <mt-tab-item id="3">少儿童书</mt-tab-item>
      <mt-tab-item id="4">教育考试</mt-tab-item>
      <mt-tab-item id="5">经济金融</mt-tab-item>
      <mt-tab-item id="6">生活休闲</mt-tab-item>
      <mt-tab-item id="7">科学技术</mt-tab-item>
      <mt-tab-item id="8">文化用品</mt-tab-item>
      <mt-tab-item id="9">生活用品</mt-tab-item>
      <mt-tab-item id="10">书香定制</mt-tab-item>
  </mt-navbar>
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1">
       <Literature/>
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
      <Humanities/>
    </mt-tab-container-item>
    <mt-tab-container-item id="3">
      <Children/>
    </mt-tab-container-item>
    <mt-tab-container-item id="4">
      <Education/>
    </mt-tab-container-item>
    <mt-tab-container-item id="5">
      <Financial/>
    </mt-tab-container-item>
    <mt-tab-container-item id="6">
      <Leisure/>
    </mt-tab-container-item>
    <mt-tab-container-item id="7">
      <Science/>
    </mt-tab-container-item>
    <mt-tab-container-item id="8">
      <Culture/>
    </mt-tab-container-item>
    <mt-tab-container-item id="9">
      <Life/>
    </mt-tab-container-item>
    <mt-tab-container-item id="10">
      <Custom/>
    </mt-tab-container-item>
  </mt-tab-container>
  </div>
</template>

<script>
const Literature = () => import('@/pages/mall_pages/Literature')
const Humanities = () => import('@/pages/mall_pages/Humanities')
const Children = () => import('@/pages/mall_pages/Children')
const Education = () => import('@/pages/mall_pages/Education')
const Financial = () => import('@/pages/mall_pages/Financial')
const Leisure = () => import('@/pages/mall_pages/Leisure')
const Science = () => import('@/pages/mall_pages/Science')
const Culture = () => import('@/pages/mall_pages/Culture')
const Life = () => import('@/pages/mall_pages/Life')
const Custom = () => import('@/pages/mall_pages/Custom')

export default {
  name: 'mall',
  data () {
    return {
      selected: '1'
    }
  },
  components: {
    Literature,
    Humanities,
    Children,
    Education,
    Financial,
    Leisure,
    Science,
    Culture,
    Life,
    Custom
  }
}

</script>

<style lang="scss">
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
    vertical-align: top;
    &>.mint-tab-container-wrap h6{
      text-align: center;
      height: 40px;
      line-height: 40px;
    }
    &>.mint-tab-container-wrap .container ul{
      width: 100%;
      min-height: 80px;
      display: flex;
      flex-wrap: wrap;
      &>li{
        // float: left;
        margin:15px 10px;
        display: flex;
        flex-direction: column;
        &>span{
          display: inline-block;
          font-size: 13px;
          color: rgb(41, 40, 40);
          padding: 2px;
          text-align: center;
        }
        &>img{
          width: 55px;
          height: 55px;
          vertical-align: middle;
        }
      }
    }
  }
</style>

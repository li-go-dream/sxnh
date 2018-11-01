<template>
  <div>
   <Lunbo/>
   <Nav/>
   <Today/>
   <Quality/>   
    
     <div class="page-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="slide1"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541081312827&di=350a916adc86505c637bf51c505ccf52&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180803%2F20%2F1533299303-YxLnezOFQZ.jpg" style="width:100%"/></mt-swipe-item>
        <mt-swipe-item class="slide1"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541081312827&di=1d5984d69453b03ddbff330a1f113d62&imgtype=0&src=http%3A%2F%2Fbaiducdn.pig66.com%2Fuploadfile%2F2017%2F0511%2F20170511080341223.jpg" style="width:100%"/></mt-swipe-item>
        <mt-swipe-item class="slide1"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541081312820&di=721da174ee3f2006907610f49907f3eb&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20170121%2F3661391484963119.jpg" style="width:100%"/></mt-swipe-item>
      </mt-swipe>
    </div>
     <Books/>
    
  </div>
</template>

<script>
import Lunbo from '@/components/Home/Lunbo'
import Nav from '@/components/Home/Nav'
import Today from '@/components/Home/Today'
import Quality from '@/components/Home/Quality'
import Books from '@/components/Home/Books'
export default {
  name: 'home',
  data(){
    return{

    }
  },
  components:{
    Lunbo,
    Nav,
    Today,
    Quality,
    Books
  }
}
</script>
<style lang="scss">
</style>

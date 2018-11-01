<template>
  <div>
    <div class="sx-top">
       <p>欢迎:<span class="user">{{username}}</span></p>
    </div>
    <div class="sx-middle">
      <ul class="ul1">
        <li><i class="icon iconfont icon-daifukuan"></i><span>待付款</span></li>
        <li><i class="icon iconfont icon-daifahuo"></i><span>待发货</span></li>
        <li><i class="icon iconfont icon-daifahuo"></i><span>待收货</span></li>
      </ul>
      <ul class="ul2">
        <li><i class="icon iconfont icon-daipingjia"></i><span>待评价</span></li>
        <li><i class="icon iconfont icon-shouhou"></i><span>售后</span></li>
        <li><span>全部订单</span><i class="icon iconfont icon-icondayu"></i></li>
      </ul>
    </div>
    <button class="sx-btn" @click="logout1">退出登录</button>
    <div class="sx-like">
      <h4>猜你喜欢</h4>
        <ul>
          <li v-for="item in myList" :key="item.id"><img :src="item.url"/><p>{{item.title}}</p><span>￥{{item.price}}</span></li>
        </ul>
    </div>
  </div>
</template>

<script>
import{mapMutations} from 'vuex'
export default {
  name: 'my',
  data(){
    return{
      myList:[],
      username: ''
    }
  },
  mounted() {
   this.$ajax.getMylist()
   .then((resp)=>{
     this.myList = resp.data.data;
    
   })
  this.username=window.localStorage.getItem('username')
  },
  methods:{

    ...mapMutations(['logout']),
    logout1(){     
      this.logout();
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('./my-icon/myicon.scss');
.user{
  font-size: 25px;
  color: deepskyblue;
}
.sx-top{
  width: 100%;
  height: 150px;
  background: pink;
  overflow: hidden;
&>p{
  font-size: 15px;
  margin-left: 139px;
  margin-top: 60px;
}
}
.sx-middle{
  width: 90%;
  height: 90px;
  
  margin: 10px 17px;
  &>.ul1{
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  &>li{
   &>span{
     margin:0 8px;
   }
  }
   
  }
  &>.ul2{
    display: flex;
    justify-content: space-between;
   &>li{
   &>span{
     margin:0 4px;
   }
  }
  } 
}
.sx-btn{
  border-style: none;
  width: 90%;
  height: 40px;
  background: red;
  color: white;
  font-size: 15px;
  margin-top:100px;
  margin-left: 17px;

}
.sx-like{
 &>h4{
   font-weight: 600;
   margin:10px;
   margin-left: 15px;
 }
 &>ul{
    display: flex;
     justify-content: space-around;
     flex-wrap:wrap;
   &>li{
      &>img{
        width: 170px;
        height: 140px;
      }
  &>span{
    color: red;
    font-size: 12px;
    margin-top:5px;
  }
   }
 }

}
</style>

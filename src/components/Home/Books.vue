<template>
    <div class="books">
      <h3>党政读物</h3>
      <ul>
        <li v-for="item in BooksData" :key="item.id"><img :src="item.url"/><p>{{item.title}}</p><span class="money">￥{{item.price}}</span></li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'books',
  data(){
    return{
      BooksData:{}
    }
  },
  mounted() {
    this.$ajax.getbooks()
    .then((resp)=>{
      this.BooksData = resp.data.data
      
    })
  },
}
</script>

<style lang="scss" >
.books{
    width: 100%;
    height: 280px;
    background: white;
  &>h3{
    font-size: 14px;
    font-weight: 600;
  }
  &>ul{
   display: flex;
   justify-content: space-around;
   margin-top:5px;
   flex-wrap: wrap;
  &>li{

  &>p{
    font-size: 12px;
  }
  &>img{
    width: 70px;
    height: 80px;
  }
  &>.money{
    color: rgb(212, 9, 9);
    font-size: 12px;
  }
  }
  }
  }
</style>

<template>
  <div class="container">
      <div v-for="item in list" :key="item.heade">
        <h6>{{item.heade}}</h6>
        <ul>
          <!-- <li v-for="n in item.items" :key="n.id"><img :src="n.img" alt=""><span>{{n.text}}</span></li> -->
          <router-link
            v-for="n in item.items"
            :key="n.id"
            :to="`list/${n.id}`"
            tag="li"
          >
          <img :src="n.img" alt="">
          <span>{{n.text}}</span>
          </router-link>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'literature',
  data () {
    return {
      list: [
        {
          heade: '小说',
          items: [{
            id: 1,
            img: 'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/90d8/90d870d58669a66f3bf01b13f8b43496_0_0_0_0.jpg',
            text: '中国小说'
          },
          {
            id: 2,
            img: 'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/90d8/90d870d58669a66f3bf01b13f8b43496_0_0_0_0.jpg',
            text: '外国小说'
          }
          ]
        },
        {
          heade: '文学',
          items: [{
            id: 3,
            img: 'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/90d8/90d870d58669a66f3bf01b13f8b43496_0_0_0_0.jpg',
            text: '中国文学'
          },
          {
            id: 4,
            img: 'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/90d8/90d870d58669a66f3bf01b13f8b43496_0_0_0_0.jpg',
            text: '外国文学'
          },
          {
            id: 5,
            img: 'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/90d8/90d870d58669a66f3bf01b13f8b43496_0_0_0_0.jpg',
            text: '诗词曲赋'
          },
          {
            id: 6,
            img: 'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/90d8/90d870d58669a66f3bf01b13f8b43496_0_0_0_0.jpg',
            text: '纪实文学'
          },
          {
            id: 7,
            img: 'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/90d8/90d870d58669a66f3bf01b13f8b43496_0_0_0_0.jpg',
            text: '文学理论'
          }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>

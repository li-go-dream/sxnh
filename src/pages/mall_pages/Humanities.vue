<template>
  <div class="container">
      <div v-for="item in list" :key="item.heade">
        <h6>{{item.heade}}</h6>
        <ul>
          <li v-for="n in item.items" :key="n.id"><img :src="n.img" alt=""><span>{{n.text}}</span></li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'humanities',
  data () {
    return {
      list: [
        {
          heade: '历史',
          items: [{
            id: 8,
            img: 'http://img3m2.ddimg.cn/58/13/23440882-1_x_3.jpg',
            text: '世界历史'
          },
          {
            id: 9,
            img: 'http://img3m2.ddimg.cn/58/13/23440882-1_x_3.jpg',
            text: '中国史'
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

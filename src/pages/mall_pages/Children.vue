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
  name: 'children',
  data () {
    return {
      list: [
        {
          heade: '儿童文学',
          items: [
            {
              id: 10,
              img: 'http://img3m0.ddimg.cn/43/36/23301970-1_x_2.jpg',
              text: '中国儿童文学'
            },
            {
              id: 11,
              img: 'http://img3m0.ddimg.cn/43/36/23301970-1_x_2.jpg',
              text: '外国儿童文学'
            }
          ]
        },
        {
          heade: '动漫绘本',
          items: [{
            id: 12,
            img: 'http://img3m0.ddimg.cn/43/36/23301970-1_x_2.jpg',
            text: '儿童绘本'
          }]
        },
        {
          heade: '启蒙益智',
          items: [{
            id: 13,
            img: 'http://img3m0.ddimg.cn/43/36/23301970-1_x_2.jpg',
            text: '益智游戏'
          },
          {
            id: 14,
            img: 'http://img3m0.ddimg.cn/43/36/23301970-1_x_2.jpg',
            text: '书画绘本'
          },
          {
            id: 15,
            img: 'http://img3m0.ddimg.cn/43/36/23301970-1_x_2.jpg',
            text: '艺术培养'
          },
          {
            id: 16,
            img: 'http://img3m0.ddimg.cn/43/36/23301970-1_x_2.jpg',
            text: '识字说话'
          },
          {
            id: 17,
            img: 'http://img3m0.ddimg.cn/43/36/23301970-1_x_2.jpg',
            text: '科普百科'
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

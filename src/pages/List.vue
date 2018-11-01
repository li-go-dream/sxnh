<template>
  <div>
    <ul class="sx-list">
      <router-link
      v-for="item in pagedata"
      :key="item.id"
      tag="li"
      :to="`/details/${item.id}`"
      >
        <a href="javascript:;">
          <div class="sx-img">
            <img :src="item.img">
          </div>
            <h6>{{item.name}}</h6>
            <p class="p1">{{item.author}}</p>
            <p class="p2">￥{{item.price}}</p>
        </a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      pageid: 0,
      pagedata: {}
    }
  },
  mounted () {
    this.getDetail(this.$route.params.id)
  },
  beforeRouteUpdate (to, from, next) {
    this.getDetail(to.params.id)
    next()
  },
  methods: {
    getDetail (id) {
      this.$ajax.getDetailList(id)
        .then((resp) => {
          this.pagedata = resp.data.data
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .sx-list{
    display: flex;
    flex-wrap: wrap;
    background-color: #ece9e9;
    &>li{
      width: 45%;
      height: 200px;
      border: 1px solid red;
      background-color: #fff;
      padding: 10px 12px;
      margin: 2.5%;
      &>a{
        display: block;
        text-decoration: none;
        &>div{
          width: 100%;
          height: 124px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        &>h6{
          font-size: 13px;
          color: #0a0a0a;
        }
        &>.p1{
          font-size: 12px;
          padding-top: 2px;
          color: #9e9b9b;
        }
        &>.p2{
          font-size: 20px;
          color: red;
        }
      }
    }
  }
</style>

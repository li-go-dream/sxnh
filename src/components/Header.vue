<template>
     <mt-header title="书香年华"  :class="navBarFixed == true ? 'navBarWrap' :''">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        
        <mt-button @click="handleClose">关闭</mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
</template>

<script>
export default {
  
  data() {
    return {
      navBarFixed:false
    };
  },
  methods: {
    handleClose() {
      alert('close this page');
    },
    watchScroll () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 49) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
     }
  },
  mounted () {
      // 事件监听滚动条
      window.addEventListener('scroll', this.watchScroll)
    },
    
};
</script>

<style lang="css">
  @component-namespace page {
    @component header {
      @descendent main {
        margin-top: 50px;
        min-height: 120vh;
        > * {
          margin-bottom: 15px;
        }
      }
    }
  }
  .navBarWrap {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
   
  }
  
</style>
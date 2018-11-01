<template>
    <div>
        <img src="./img/login.gif" style="width:100%"/>
        <mt-field label="用户名" v-model="username" placeholder="请输入用户名"></mt-field>
        <mt-field label="密码"  placeholder="请输入密码" v-model="password" type="password"></mt-field>
        <p class="forget">忘记密码</p>
        <mt-button type="danger" class="btn" @click="login">登录</mt-button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['postLogin']),
    login () {
      if (this.username === '' || this.password === '') {
        alert('请输入正确的信息')
      } else {
        this.postLogin({username: this.username, password: this.password})
        window.localStorage.setItem('username', this.username)
        this.$router.push('/Home')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.log{
    background: white;
    width: 360px;
    height: 120px;
     margin-left: 10px;
&>.user{
    width: 350px;
    height: 60px;
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    font-size: 15px;
    padding-left: 10px;
    position: relative;
}
&>.psd{
    width: 350px;
    height: 60px;
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    font-size: 15px;
    padding-left: 10px;
    position: relative
}
}
.forget{
    font-size: 15px;
    margin-top:20px;
     margin-left: 25px;
}
.btn{
    border-style: none;
    background: #c62f2e;
    width: 95%;
    height: 40px;
    margin-left: 10px;
    color: white;
    font-size: 16px;
    margin-top:50px;

}
.username{
    color: #c62f2e;
    font-size: 12px;
    position: absolute;
    left: 293px;
    top:211px;
    display: none
}
.password{
    color: #c62f2e;
    font-size: 12px;
    position: absolute;
    left: 293px;
    top:270px;
    display: none;
}
</style>

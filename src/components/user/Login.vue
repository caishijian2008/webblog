<template>
  <div class="app">
    <div class="login">
      <div class="login-top">
        <h2>欢迎</h2>
        <h3>{{ msg }}</h3>
      </div>
      <div class="login-bottom">
        <form class="form-horizontal" id="loginform" role="form">
          <div class="user form-group">
            <label for="username" class="col-sm-2 control-label">账 号</label>
            <input type="text" id="username" name="username" class="col-sm-10 form-control" placeholder="用户名" v-model.trim="userName">
          </div>
          <div class="user-in form-group">
            <label for="password" class="col-sm-2 control-label">密 码</label>
            <input type="password" id="password" name="password" class="col-sm-10 form-control" placeholder="密码" v-model.trim="passWord">
          </div>
          <div class="keepme">
            <label class="checkbox"><input type="checkbox" id="keepon" name="keepon" v-model="keepOn">记住我</label>
            <div class="keep-loginbutton">
              <input type="button" id="signin" value="登录" @click="userLogin">
            </div>
            <div class="clear"> </div>
          </div>
        </form>
        <div class="forgot">
          <p><a href="#">忘记密码?</a></p>
          <div class="forgot-register">
            <!--<p>还没有注册? <a href="register.html">点击注册</a></p>-->
            <p>还没有注册? <router-link to="register">点击注册</router-link></p>
          </div>
          <div class="clear"> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// Vue.prototype.$http = axios

import {accountLogin} from '@/service/getData'
export default {
  name: 'login',
  data () {
    return {
      msg: '登录',
      userName: '',
      passWord: '',
      keepOn: false
    }
  },
  mounted: function () {
    // let body = document.getElementsByTagName('body')[0]
    // body.style.backgroundColor = '#18bb9b'
  },
  computed: {
    // 判断用户名
    isUserName: function () {
      return /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/gi.test(this.userName)
    },
    // 判断密码
    isPassword: function () {
      return /^[a-zA-Z]\w{4,15}$/gi.test(this.passWord)
    }
  },
  methods: {
    userLogin () {
      if (!this.isUserName) {
        alert('用户名不正确！')
        return
      } else if (!this.isPassword) {
        alert('密码不正确！')
        return
      }
      accountLogin(this.userName, this.passWord, this.keepOn)
    }
  }
}
</script>

<style scoped>
@import url("../../components/common/css/reglogin.css");
</style>


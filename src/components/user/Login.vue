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
            <input type="password" id="password" name="password" class="col-sm-10 form-control" placeholder="密码" v-model="passWord">
          </div>
          <div class="keepme">
            <label class="checkbox"><input type="checkbox" id="keepon" name="keepon" v-model="keepOn">记住我</label>
            <div class="keep-loginbutton">
              <input type="submit" id="signin" value="登录" @click="userLogin"/>
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
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      msg: '登录',
      userName: null,
      passWord: null,
      keepOn: false
    }
  },
  methods: {
    userLogin () {
      alert(this.userName)
      let param = 'http://localhost:8080/blogserv/loginServlet?action=login'
      axios.post(param, {
        username: this.userName,
        password: this.passWord
      })
      .then(function (response) {
        console.log('response*: ' + response)
      })
      .catch(function (error) {
        console.log('error*: ' + error)
      })
    }
  }
}
</script>

<style scoped>
@import url("../../components/common/css/reglogin.css");
</style>


<template>
  <div class="app">
    <div class="login">
      <div class="login-top">
        <h2>欢迎</h2>
        <h3>{{ msg }}</h3>
      </div>
      <div class="login-bottom">
          <form class="form-horizontal" id="signupform" role="form">
              <div class="user form-group">
                  <label for="username" class="col-sm-2 control-label">邮 箱</label>
                  <input type="text" class="col-sm-10 form-control" id="email" name="email" placeholder="邮箱" v-model.trim="eMail">
              </div>
              <div class="user form-group">
                  <label for="username" class="col-sm-2 control-label">账 号</label>
                  <input type="text" class="col-sm-10 form-control" id="username" name="username" placeholder="用户名" v-model.trim="userName">
              </div>
              <div class="user-in form-group">
                  <label for="username" class="col-sm-2 control-label">密 码</label>
                  <input type="password" class="col-sm-10 form-control" id="password" name="password" placeholder="密码" v-model.trim="passWord">
              </div>
              <div class="user-in form-group">
                  <label for="username" class="col-sm-2 control-label" style="width: 20%;">确认密码</label>
                  <input type="password" class="col-sm-10 form-control" id="repassword" name="repassword" placeholder="确认密码" style="width: 80%;" v-model.trim="repassWord">
              </div>
              <div class="keepme">
                  <div class="regist">
                      <input type="button" id="signup" class="btn btn-danger" value="注册" @click="userRegist"/>
                  </div>
                  <div class="clear"> </div>
              </div>
          </form>
      </div>
      <div class="backon">
        <!--<p><a href="login.html">&lt;&lt; 返回登陆</a></p>-->
        <p><router-link to="login">&lt;&lt; 返回登陆</router-link></p>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
<script>
import {userRegister} from '@/service/getData'
import { setStorage } from '@/config/myutils'
export default {
  name: 'register',
  data () {
    return {
      msg: '注册',
      userInfo: null,
      eMail: '',
      userName: '',
      passWord: '',
      repassWord: ''
    }
  },
  computed: {
    // 判断邮箱
    isEmail: function () {
      return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/gi.test(this.eMail)
    },
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
    userRegist () {
      if (!this.isEmail) {
        alert('邮箱地址不正确！')
        return
      } else if (!this.isUserName) {
        alert('用户名不正确！')
        return
      } else if (!this.isPassword) {
        alert('密码不正确！')
        return
      } else if (this.passWord !== this.repassWord) {
        alert('密码不一致！')
        return
      }
      this.userInfo = userRegister(this.eMail, this.userName, this.passWord)
      setStorage('user_id', this.userName)
      setStorage('user_pass', this.passWord)
      console.log('this.userInfo: ' + this.userInfo)
      this.userInfo.then((res) => {
        alert(res.msg)
        this.$router.go(-1)
      }).catch(function (err) {
        alert('注册失败：' + err.status)
      })
    }
  }
}
</script>
<style scoped>
/*@import url("../../../node_modules/bootstrap/dist/css/bootstrap.min.css");*/
@import url("../../components/common/css/reglogin.css");
</style>

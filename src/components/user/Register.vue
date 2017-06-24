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
                  <input type="text" class="col-sm-10 form-control" id="email" name="email" placeholder="邮箱">
              </div>
              <div class="user form-group">
                  <label for="username" class="col-sm-2 control-label">账 号</label>
                  <input type="text" class="col-sm-10 form-control" id="username" name="username" placeholder="用户名">
              </div>
              <div class="user-in form-group">
                  <label for="username" class="col-sm-2 control-label">密 码</label>
                  <input type="password" class="col-sm-10 form-control" id="password" name="password" placeholder="密码">
              </div>
              <div class="user-in form-group">
                  <label for="username" class="col-sm-2 control-label" style="width: 20%;">确认密码</label>
                  <input type="password" class="col-sm-10 form-control" id="repassword" name="repassword" placeholder="确认密码" style="width: 80%;">
              </div>
              <div class="keepme">
                  <div class="regist">
                      <input type="submit" id="signup" class="btn btn-danger" value="注册" />
                  </div>
                  <div class="clear"> </div>
              </div>
          </form>
      </div>
      <div class="backon">
        <!--<p><a href="login.html">&lt;&lt; 返回登陆</a></p>-->
        <p><router-link to="/login">&lt;&lt; 返回登陆</router-link></p>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      msg: '注册'
    }
  }
}
</script>
<style scoped>
/*@import url("../../../node_modules/bootstrap/dist/css/bootstrap.min.css");*/
@import url("../../components/common/css/reglogin.css");
</style>

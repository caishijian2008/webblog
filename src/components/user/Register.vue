<template>
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
      <p><a href="login.html">&lt;&lt; 返回登陆</a></p>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'  // 变成全局都应用的样式了！！
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
* {
  margin: 0;
  padding: 0;
  border: 0;
}
body {
   background:#18bb9b;
   padding:50px 0px 30px 0px;
   font-family: sans-serif;
   font-size: 100%;
}
h1 {
  font-size: 34px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  margin: 0px 0px 25px 0px;
}
.login {
  width: 33%;
  margin: 0 auto;
  background: #F8F8F8;
  border-radius: 4px;
}
.login-top{
  background: #E9E9E9;
  border-radius: 4px 4px 0px 0px;
  padding: 11px 0px;
  text-align: center;
}
.login-top h2 {
  font-size: 30px;
  font-weight: 700;
  color: #7A7A7A;
}
.login-top h3 {
  font-size: 15px;
  font-weight: 600;
  color: #7A7A7A;
}
span.log {
  font-size: 16px;
  font-weight: 600;
  display: block;
}
.login-bottom {
  padding: 23px 23px 23px 23px;
}
.login-bottom h3 {
  font-size: 15px;
  font-weight: 600;
  color: #737373;
  margin: 10px 0px 10px 0px;
}

.login-bottom .form-horizontal .form-group {
  margin-right: 0;
  margin-left: 0;
}
.user,.user-in {
 border: 1px solid #EDEDED;
  border-top: 2px solid #EDEDED;
  background:#fff;
  border-radius: 5px;
  margin-bottom: 1em;
}
.user input[type="text"],.user-in input[type="password"] {
  background: none;
  outline: none;
  font-size: 15px;
  font-weight: 600;
  /* color: #BBBBBB; */
  padding: 17px 15px 17px 15px;
  border: none;
  width: 83%;
  height: 18%; /*inherit*/
  -webkit-appearance: none;
}

.user .error, .user-in .error {
  color: red;
  
}

.user label,.user-in label {
  font-weight: bold;
  color: #7a7a7a;
  height: 25px;
  line-height: 25px;
}

label.checkbox {
  float: left;
}
.keep-loginbutton {
  float: right;
}

.keepme .checkbox input[type="checkbox"] {
  position: inherit;
  margin-left: 0;
  margin: 0;
}

.keepme.checkbox input {
	position: absolute;
	left: -9999px;
}
.keepme.checkbox i {
	border-color: #fff;
	transition: border-color 0.3s;
	-o-transition: border-color 0.3s;
	-ms-transition: border-color 0.3s;
	-moz-transition: border-color 0.3s;
	-webkit-transition: border-color 0.3s;
	
}
.keepme.checkbox i:hover {
	border-color:red;
	
}
.keepme i:before {
	background-color: #2da5da;	
}

.keepme .checkbox {
	padding: 5px 0px 0px 5px;
	font-size: 15px;
   font-weight: 600;
	line-height: 5px;
	color:#737373;
	cursor: pointer;
	position: relative;
	display: block;
	float: left;
}
.keepme .checkbox:hover {
	text-decoration: none;
}
.keepme  .checkbox i {
  position: absolute;
  top: 9px;
  left: 0px;
  display: block;
  width: 15px;
  height: 15px;
  outline: none;
  border: 1px solid #B3B2B2;
  border-radius: 4px;
  background: #fff;
}
.keepme  .checkbox input + i:after {
	position: absolute;
	opacity: 0;
	transition: opacity 0.1s;
	-o-transition: opacity 0.1s;
	-ms-transition: opacity 0.1s;
	-moz-transition: opacity 0.1s;
	-webkit-transition: opacity 0.1s;
}
.keepme .checkbox input + i:after {
	color: #2da5da;
}
.keepme.checkbox input:checked + i,
.keepme  input:checked + i {
	border-color: #2da5da;	
}
.keepme .rating input:checked ~ label {
	color: #2da5da;	
}

.keepme .checkbox input:checked + i:after {
	opacity: 1;
}
.keep-loginbutton input[type="submit"] {
  color: #FFF;
  font-size: 17px;
  font-weight: 600;
  width: 93%;
  padding: 8px 26px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -o-border-radius: 5px;
  margin: 0px 0px 0px 0px;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: none;
 background: #e21b1b; 
}
.keep-loginbutton input[type="submit"]:hover {
 background: #6b6b6b;
 transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
}
.keepme {
  padding: 6px 0px;
  width: 100%;
}
.keepme .regist {
  font-size: 17px;
  font-weight: 600;
  width: 100%;
  padding: 8px 26px;
  margin: 0;
  display: inline-block;
  outline: none;
  border: none;
  text-align: center !important;
}

.keepme .regist input[type="submit"] {
  width: 80%;
  font-size: 17px;
  font-weight: 600;
}
.forgot {
  padding: 15px 0px;
}
.forgot p {
  float: left;
  font-size: 14px;
  font-weight: 600;
  color: #878787;
}
.forgot p a{
  font-size: 14px;
  font-weight: 600;
  color: #000;
}
.forgot p a:hover{
	color:#878787;
	transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
}
.forgot-register {
  float: right;
}
.forgot-register p {
  font-size: 14px;
  font-weight: 600;
  color: #878787;
}
.forgot-register p a {
  color: #000;
}
.forgot-register p a:hover {
  color: #e33838;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
}
.backon {
  /* margin-left: -23px;
  margin-right: -23px; */
  background-color: #398439;
  padding: 10px 0;
}
.backon p, .backon p a {
  color: #fff;
  text-align: center !important;
  border-radius: 0px 0px 5px 5px;
}
span.login-line {
  background: #EFEDED;
  width: 460px;
  height: 2px;
  display: block;
  margin: 20px auto;
}
.copyright {
  padding: 110px 0px 0px 0px;
  text-align: center;
}
.copyright p {
  font-size: 15px;
  font-weight: 400;
  color: #fff;
}
.copyright p a{
  font-size: 15px;
  font-weight: 400;
  color:  #E21B1B;
}
.copyright p a:hover{
	color: #fff;
	 transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
}
/*--login form end here--*/
/*--meadia quiries start here--*/
@media(max-width:1440px){
  .keep-loginbutton input[type="submit"] {
    width: 91%;
  }
}

@media(max-width:1366px){
.login {
  width: 39%;
}

@media(max-width:1280px){
.login {
  width: 40%;
}

h1 {
  font-size: 30px;
}
body {
  padding: 30px 0px 30px 0px;
}
.copyright {
  padding: 55px 0px 0px 0px;
}

.keep-loginbutton input[type="submit"] {
  width: 96%;
}

  }
@media(max-width:1024px){
.login {
  width: 50%;
}

body {
  padding: 28px 0px 30px 0px;
}
h1 {
  font-size: 30px;
}
.login-top h2 {
  font-size: 24px;
}
}
@media(max-width:768px){
.login {
  width: 67%;
}	
body {
  padding: 88px 0px 105px 0px;
}
.copyright {
  padding: 160px 0px 0px 0px;
}
}
@media(max-width:736px){
span.login-line {
  width: 410px;	
}

.forgot p a {
  font-size: 13px;
}
.forgot-register p {
  font-size: 13px;
}
}
@media(max-width:667px){
span.login-line {
  width: 390px;
}


.forgot-register p {
  font-size: 12px;
}
.forgot p a {
  font-size: 12px;
}

}
@media (max-width: 667px){

.user input[type="text"], .user-in input[type="password"] {
  width: 82%;
}
}
@media(max-width:640px){
.login {
  width: 80%;
}	
.login h2 {
  font-size: 26px;	
}

body {
  padding: 50px 0px 40px 0px;
}

.copyright {
  padding: 115px 0px 0px 0px;
}

}

@media(max-width:480px){

span.login-line {
  width: 350px;
}

.login {
  width: 86%;
}
.forgot p a{
  font-size: 11px;
}
.forgot-register p {
  font-size: 11px;
  padding: 6px 0px 0px 0px;
}
.keep-para .checkbox {
  font-size: 12px;
}

h1 {
  font-size: 27px;
}
.keep-loginbutton input[type="submit"] {
  width: 99%;
}
.user input[type="text"], .user-in input[type="password"] {
  width: 81%;
}
}

@media(max-width:414px){

.user input[type="text"], .user-in input[type="password"] {
  width: 75%;
}

.forgot p {
  float: none;
  text-align: center;
}
.forgot-register {
  float: none;
}

}
@media(max-width:384px){

span.login-line {
  width: 268px;
}
}

@media(max-width:320px){
.login {
  width: 96%;
}
span.login-line {
  width: 240px;
}
.login h2 {
  font-size: 18px;
}
span.log {
  font-size: 14px;
}
span.login-line {
  margin: 10px auto;
}

.keep-para .checkbox {
  font-size: 10px;
}
.keep-loginbutton input[type="submit"] {
  font-size: 12px;
  width: 100%;
  padding: 6px 15px;
}
.forgot-register p {
 font-size: 12px;
 padding: 5px 0px 0px 0px;
}
.forgot p {
  float: none;
  text-align: center;
}
.forgot-register {
  float: none;
}
.forgot p a{
  font-size: 11px;
}
.login-bottom h3 {
  font-size: 11px;
  margin: 0px 0px 8px 0px;
}
.copyright {
  padding: 25px 0px 0px 0px;
}
body {
  padding: 15px 0px 30px 0px;
}

.forgot {
  padding: 5px 0px;
}
.keepme .checkbox {
  padding: 10px 0px 0px 25px;
  font-size: 12px;
}
.keepme .checkbox i {
  top: 3px;
}
.copyright p {
  font-size: 13px;
}
.copyright p a{
  font-size: 13px;
}
h1 {
  font-size: 22px;
  margin: 0px 0px 16px 0px;
}
.login-top {
  padding: 6px 0px;
}

.user input[type="text"], .user-in input[type="password"] {
  width: 72%;
    padding: 12px 15px 12px 15px;
}
}}
</style>

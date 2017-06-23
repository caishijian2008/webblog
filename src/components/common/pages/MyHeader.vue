<template>
  <header>
    <div class="leftheader">
      <h1>爆发吧，我的小宇宙</h1>
      <h2>每个人都有自己的小宇宙，只是有的人被发挥到极致，有的人还没完全发挥出来而已。</h2>
    </div>
    <div class="rightheader">
      <h5 class="inout">
        <a href="./login.html">登陆</a>&nbsp;|&nbsp;
        <a href="./register.html">注册</a>
        <!--<router-link to="/register">注册</router-link>-->
      </h5>
      <h5 class="logout" style="display: none;">
        <a href="javascript:;">注销(<span id="uname"></span>)</a>
      </h5>
    </div>
    <!-- 导航 -->
  </header>
</template>

<script>
// import $ from 'jquery' // 测试用
export default {
  name: 'myheader'
}
// alert($('.leftheader h2').text())  // 测试用
</script>

<style>
header {
    position: relative;
    background: transparent;
}

header h1 {
    padding: 15px 0 0 80px;
    font-size: 22px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
}

header h2 {
    margin: 20px 80px;
    color: #8e8d8d;
}

header .leftheader {
    float: left;
    width: 73%;
}

header .rightheader {
    float: right; 
    width: 27%; 
    color: #fff; 
}

header .rightheader h5 {
    text-align: center;
    padding: 15px 0 15px;
    background-color: #222;
}

header .rightheader h5 a:link, 
header .rightheader h5 a:visited {
    color: #fff;
}
</style>


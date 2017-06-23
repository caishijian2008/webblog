<template>
  <!-- <div class="logo"><a href="index.html"></a></div> -->
  <nav id="topnav">
    <a href="index.html">首页</a>
    <a href="newlist.html">博文</a>
    <a href="photo.html">相册</a>
    <a href="about.html">关于我</a>
  </nav>
</template>

<script>
export default {
  name: 'mynav'
}
/* 导航当前页高亮 */
window.onload = () => {
  var obj = null
  var topnav = document.getElementById('topnav').getElementsByTagName('a')
  obj = topnav[0]
  for (var i = 1; i < topnav.length; i++) {
    if (window.location.href.indexOf(topnav[i].href) >= 0) {
      obj = topnav[i]
    }
  }
  obj.id = 'topnav_current'
}
</script>

<style>
/* 导航 */
nav {
    background: rgba(0, 0, 0, 0.8);
    height: 48px;
    line-height: 48px;
    padding-left: 80px;
}
nav a {
    display: inline-block;
    font-size: 18px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    color: #fff;
    padding: 0 30px;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}

nav a:hover {
    background: #e41635;
}

#topnav {
    clear: both;
}

#topnav_current {
    background: #e41635
}

</style>


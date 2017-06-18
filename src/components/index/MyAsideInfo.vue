<template>
  <div>
    <div class="avatar"><a href="about.html"><span>关于张三李四</span></a></div>
    <div class="topspaceinfo">
      <h1>执子之手，与子私奔</h1>
      <p>于千万人之中，我遇见了......咦？人呢？</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myasideinfo'
}
</script>

<style>
/* 右侧栏个人档案 */
.avatar {
    margin: 10px auto;
    width: 160px;
    height: 160px;
    border-radius: 100%;
    overflow: hidden;
}

.avatar a {
    display: block;
    padding-top: 100px;
    width: 160px;
    background: url(../../assets/images/photos.jpg) no-repeat;
    background-size: 160px 160px;
}

.avatar a span {
    display: block;
    margin-top: 63px;
    padding-top: 8px;
    width: 160px;
    height: 55px;
    text-align: center;
    line-height: 20px;
    color: #fff;
    background: rgba(0, 0, 0, .5);
    -webkit-transition: margin-top .2s ease-in-out;
    -moz-transition: margin-top .2s ease-in-out;
    -o-transition: margin-top .2s ease-in-out;
    transition: margin-top .2s ease-in-out;
}

.avatar a:hover span {
    display: block;
    margin-top: 0;
}

.topspaceinfo {
    background: #e41635;
    padding: 40px 20px;
    color: #fff;
    text-shadow: 1px 1px rgba(0, 0, 0, .3);
}

.topspaceinfo h1 {
    font-size: 16px;
    line-height: 40px;
    font-weight: bold;
}

</style>


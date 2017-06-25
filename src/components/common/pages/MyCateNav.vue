<template>
  <div class="rnav">
    <li class="rnav1 "><a href="#">动漫</a></li>
    <li class="rnav2 "><a href="#">欣赏</a></li>
    <li class="rnav3 "><a href="#">程序人生</a></li>
    <li class="rnav4 "><a href="#">经典语录</a></li>
  </div>
</template>

<script>
export default {
  name: 'mycatenav'
}
</script>

<style>
.rnav {
    width: 120px;
    margin: 20px auto;
    overflow: hidden;
}

.rnav li {
    width: 120px;
    text-align: center;
    display: inline-block;
    margin-bottom: 2px;
    height: 40px;
    line-height: 40px;
}

.rnav li a {
    color: #FFF;
    display: block;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}

.rnav1 {
    background: #e41637;
}

.rnav2 {
    background: #f16b17;
}

.rnav3 {
    background: #0f9c7c;
}

.rnav4 {
    background: #46ce14;
}

.rnav li a:hover {
    background: rgba(255, 255, 255, 0.2);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
}
</style>

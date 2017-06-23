<template>
  <div class="totop-btn">
    <a id="gotop" href="javascript:void(0)" title="返回顶部"></a>
  </div>
</template>

<script>
export default {
  name: 'totopbtn'
}
</script>

<style>
/* 返回顶部 */
.totop-btn {
    position: fixed;
    right: 1%;
    bottom: 5%;
    width: 40px;
    height: 40px;
    text-align: center;
    border: 1px solid #eee;
    z-index: 1040;
    background: #fff url(../../../assets/images/gotop.png) no-repeat 10px 10px;
    cursor: pointer;
    border-radius: 6px;
    display: block;
}
</style>

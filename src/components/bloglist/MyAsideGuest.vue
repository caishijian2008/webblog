<template>
  <div>
    <h2>
      <p>{{msg}}</p>
    </h2>
    <ul>
      <img src="images/vis.jpg"><!-- 直接使用“多说”插件的调用代码 -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myasideguest',
  data () {
    return {
      msg: '最近访客'
    }
  }
}
</script>

<style>

</style>

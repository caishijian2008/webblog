<template>
  <div>
    <h2>
      <p>{{msg}}</p>
    </h2>
    <ul class="listt">
      <li class="rnav2">我的资料</li>
      <li class="rnav4">我的博客</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myaboutafterlogin',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
.listt li {
  padding: 5px;
  margin: 5px 0 5px 0;
  width: 14em;
  text-align: center;
  font-weight: bold;
}
</style>

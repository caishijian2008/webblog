<template>
  <aside>
    <mycatenav></mycatenav>
    <myasideall></myasideall>
    <mycopyright></mycopyright>
  </aside>
</template>

<script>
import mycatenav from '@/components/common/pages/mycatenav'
import myasideall from '@/components/bloglist/myasideall'
import mycopyright from '@/components/common/pages/MyCopyright'
export default {
  name: 'myblogaside',
  components: {
    mycatenav,
    myasideall,
    mycopyright
  }
}
</script>

<style>
aside {
    width: 27%;
    background: transparent;
    float: right;
}

</style>

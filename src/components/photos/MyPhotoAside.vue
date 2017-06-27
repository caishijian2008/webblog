<template>
  <aside>
    <myasideinfo></myasideinfo>
    <myasideall></myasideall>
    <myasideLink></myasideLink>
    <mycopyright></mycopyright>
  </aside>
</template>

<script>
import myasideinfo from '@/components/common/pages/MyAsideInfo'
import myasideall from '@/components/bloglist/myasideall'
import myasideLink from '@/components/common/pages/MyAsideLink'
import mycopyright from '@/components/common/pages/MyCopyright'
export default {
  name: 'myphotoaside',
  components: {
    myasideinfo,
    myasideall,
    myasideLink,
    mycopyright
  }
}
</script>

<style scoped>
aside {
    width: 27%;
    background: transparent;
    float: right;
}
</style>

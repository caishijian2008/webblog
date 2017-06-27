<template>
  <aside>
    <myasideinfo></myasideinfo>
    <mycommguest></mycommguest>
    <myasideLink></myasideLink>
    <mycopyright></mycopyright>
  </aside>
</template>

<script>
import myasideinfo from '@/components/common/pages/MyAsideInfo'
import mycommguest from '@/components/about/mycommguest'
import myasideLink from '@/components/common/pages/MyAsideLink'
import mycopyright from '@/components/common/pages/MyCopyright'
export default {
  name: 'myaboutaside',
  components: {
    myasideinfo,
    mycommguest,
    myasideLink,
    mycopyright
  }
}
</script>

<style scoped>

</style>

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

<style>
aside {
    width: 27%;
    /* background: url(../images/ibodybg.png) -170px -147px no-repeat #000; */
    background: transparent;
    float: right;
}

</style>

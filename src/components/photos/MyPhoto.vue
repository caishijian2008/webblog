<template>
  <div>
    <div class="ibody">
      <myheader></myheader>
      <mynav></mynav>
      <myaboutarticle></myaboutarticle>
      <myaboutaside></myaboutaside>
      <totopbtn></totopbtn>
      <div class="clear"></div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@/components/common/pages/myheader'
import mynav from '@/components/common/pages/mynav'
import myaboutaside from '@/components/about/myaboutaside'
import myaboutarticle from '@/components/about/myaboutarticle'
import totopbtn from '@/components/common/pages/totopbtn'
import myfooter from '@/components/common/pages/myfooter'
export default {
  name: 'myphoto',
  components: {
    myheader,
    mynav,
    myaboutaside,
    myaboutarticle,
    totopbtn,
    myfooter
  }
}
</script>

<style scoped>

</style>

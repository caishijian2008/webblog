<template>
  <div>
    <div class="ibody">
      <myheader></myheader>
      <mynav></mynav>
      <!--<myarticle></myarticle>-->
      <myaside></myaside>
      <totopbtn></totopbtn>
      <div class="clear"></div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@/components/common/pages/myheader'
import mynav from '@/components/common/pages/mynav'
import myaside from '@/components/index/myindexaside'
// import myarticle from '@/components/index/myarticle'
import totopbtn from '@/components/common/pages/totopbtn'
import myfooter from '@/components/common/pages/myfooter'
export default {
  name: 'mybloglist',
  components: {
    myheader,
    mynav,
    myaside,
    // myarticle,
    totopbtn,
    myfooter
  }
}
</script>

<style scoped>

</style>

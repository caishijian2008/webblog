<template>
  <div>
    <div class="ibody">
      <myheader></myheader>
      <mynav></mynav>
      <mylistarticle></mylistarticle>
      <myblogaside></myblogaside>
      <totopbtn></totopbtn>
      <div class="clear"></div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@/components/common/pages/myheader'
import mynav from '@/components/common/pages/mynav'
import myblogaside from '@/components/bloglist/myblogaside'
import mylistarticle from '@/components/bloglist/mylistarticle'
import totopbtn from '@/components/common/pages/totopbtn'
import myfooter from '@/components/common/pages/myfooter'
export default {
  name: 'mybloglist',
  components: {
    myheader,
    mynav,
    myblogaside,
    mylistarticle,
    totopbtn,
    myfooter
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <div class="ibody">
      <myheader></myheader>
      <mynav></mynav>
      <myphotoarticle></myphotoarticle>
      <myphotoaside></myphotoaside>
      <totopbtn></totopbtn>
      <div class="clear"></div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@/components/common/pages/myheader'
import mynav from '@/components/common/pages/mynav'
import myphotoaside from '@/components/photos/myphotoaside'
import myphotoarticle from '@/components/photos/myphotoarticle'
import totopbtn from '@/components/common/pages/totopbtn'
import myfooter from '@/components/common/pages/myfooter'
export default {
  name: 'myphoto',
  components: {
    myheader,
    mynav,
    myphotoaside,
    myphotoarticle,
    totopbtn,
    myfooter
  }
}
</script>

<style scoped>

</style>

<template>
  <article>
    <mybanner></mybanner>
    <myblogs></myblogs>
    <!--<router-view class="view" name="mybanner"></router-view>
    <router-view class="view" name="myblogs"></router-view>-->
  </article>
</template>

<script>
import mybanner from '../../components/index/MyBanner'
import myblogs from '../../components/index/MyBlogs'
export default {
  name: 'myarticle',
  components: {
    mybanner,
    myblogs
  }
}

</script>

<style scoped>
article {
    width: 73%;
    float: left;
    background: transparent;
}
</style>

<template>
  <article>
    <mybanner></mybanner>
    <myindexblogs></myindexblogs>
    <!--<router-view class="view" name="mybanner"></router-view>
    <router-view class="view" name="myblogs"></router-view>-->
  </article>
</template>

<script>
import mybanner from '../../components/index/MyBanner'
import myindexblogs from '../../components/index/MyIndexBlogs'
export default {
  name: 'mylistarticle',
  components: {
    mybanner,
    myindexblogs
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

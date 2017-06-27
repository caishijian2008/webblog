<template>
  <article>
    <h2 class="about_h">您现在的位置是：<router-link to="/">首页</router-link>&gt;<router-link to="/about">关于我</router-link></h2>
    <myarticle></myarticle>
    <!--<div class="page"><b>1</b><a href="#">2</a><a href="#">3</a><a href="#">4</a><a href="#">5</a><a href="#">&gt;</a><a href="#">&gt;&gt;</a></div>-->
  </article>
</template>

<script>
import myarticle from '@/components/about/myarticle'
export default {
  name: 'myaboutarticle',
  components: {
    myarticle
  }
}

</script>

<style scoped>
/*article {
    width: 73%;
    float: left;
    background: transparent;
}*/

.about_h {
    font-size: 12px;
    color: #666;
    line-height: 30px;
    height: 30px;
    border-bottom: #d7d7d7 1px solid;
    padding-left: 60px;
    margin: 20px;
    background: url(../../assets/images/5849.png) 40px 5px no-repeat;
}

.about_h a {
    color: #666;
    margin: 0 5px;
}

.about_h a:hover {
    color: #e41635;
}

.page {
    margin: 20px 0;
    text-align: center;
    width: 100%;
    overflow: hidden;
}

.page a b {
    color: #999;
}

.page>b,
.page a {
    margin: 0 2px;
    height: 26px;
    line-height: 26px;
    border-radius: 50%;
    width: 26px;
    text-align: center;
    display: inline-block;
}

.page a {
    margin: 0 2px;
    height: 26px;
    line-height: 26px;
    border-radius: 50%;
    width: 26px;
    text-align: center;
    display: inline-block;
}

.page>b,
.page a:hover {
    background: #333;
    color: #FFF;
}

.page a {
    color: #F33;
    border: #999 1px solid;
}
</style>

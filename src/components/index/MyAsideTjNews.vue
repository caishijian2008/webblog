<template>
  <div class="tj_news">
    <myasidehotnews></myasidehotnews>
    <myasideintronews></myasideintronews>
  </div>
</template>

<script>
import myasidehotnews from '@/components/index/MyAsideHotNews'
import myasideintronews from '@/components/index/MyAsideIntroNews'
export default {
  name: 'myasidetjnews',
  components: {
    myasidehotnews,
    myasideintronews
  }
}
</script>

<style>
/* 右侧栏 */
.tj_news {
    margin-top: 20px;
}

/* 右侧推荐信息列表 */
.tj_news h2,
.links h2 {
    font-size: 16px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    color: #FFF;
}

.tj_news h2 p,
.links h2 p {
    height: 40px;
    line-height: 40px;
    width: 100px;
    padding: 0 0 0 30px;
    border-radius: 0 20px 20px 0;
    text-shadow: rgba(0, 0, 0, .65) 1px 1px;
}

.tj_t1 {
    background: #0f9c7c
}

.tj_t2 {
    background: #b0e516
}

.tj_news ul {
    margin: 20px 0 20px 20px
}

.tj_news ul li a:hover,
.links ul li a:hover {
    text-decoration: underline;
    color: #FFF
}

.tj_news ul li {
    height: 25px;
    line-height: 25px;
    clear: both;
    padding-left: 5px;
    overflow: hidden;
    padding-left: 15px;
    background: url(../../assets/images/li.jpg) no-repeat left center;
}

.tj_news ul li a,
.links ul li a {
    color: #bbbbbb;
}

/* 友情链接 */
.links h2 p {
    background: #222
}

.links ul {
    margin: 20px 0
}

.links ul li {
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-bottom: #333 1px dashed;
    margin: 0 40px;
}

</style>

<template>
  <aside>
    <myasideinfo></myasideinfo>
    <myasidetjnews></myasidetjnews>
    <myasideLink></myasideLink>
    <div class="copyright">
      <ul>
        <p> Design by <a href="#">Zhangsan</a></p>
        <p>粤ICP备111111111号-1</p>
        </p>
      </ul>
  </div>
  </aside>
</template>

<script>
import myasideinfo from '../components/index/MyAsideInfo'
import myasidetjnews from '../components/index/MyAsidetjNews'
import myasideLink from '../components/MyAsideLink'
export default {
  name: 'myaside',
  components: {
    myasideinfo,
    myasidetjnews,
    myasideLink
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

/* 版权信息 */
.copyright {
    background: #0d0d0d;
    border-radius: 50%;
    text-align: center;
    color: #d8d8d8;
    padding: 20px;
    margin: 60px 20px 0 20px;
    border: #1b1a1a 1px solid;
}

.copyright p {
    line-height: 26px;
    text-shadow: #000 1px 1px 1px
}

.copyright p a {
    color: #d8d8d8;
}

</style>

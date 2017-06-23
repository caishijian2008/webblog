<template>
<div>
  <div class="ibody">
    <!--<router-view name="myheader"></router-view>
    <router-view name="mynav"></router-view>
    <router-view name="myarticle"></router-view>
    <router-view name="myaside"></router-view>
    <router-view name="totopbtn"></router-view>-->
    <!--<router-view></router-view>-->
    <myheader></myheader>
    <mynav></mynav>
    <myarticle></myarticle>
    <myaside></myaside>
    <totopbtn></totopbtn>
    <div class="clear"></div>
  </div>
  <!--<router-view name="myfooter"></router-view>-->
  <myfooter></myfooter>
</div>
</template>

<script>
import myheader from '@/components/common/pages/myheader'
import mynav from '@/components/common/pages/mynav'
import myaside from '@/components/common/pages/myaside'
import myarticle from '@/components/index/myarticle'
import totopbtn from '@/components/common/pages/totopbtn'
import myfooter from '../../components/common/pages/myfooter'
export default {
  name: 'myindex',
  components: {
    myheader,
    mynav,
    myaside,
    myarticle,
    totopbtn,
    myfooter
  }
}

</script>

<style>
* {
    margin: 0;
    padding: 0
}

img {
    border: 0;
    display: block
}

ul {
    list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
    font-weight: normal;
}

a {
    outline: none;
}

a:link,
a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

.ibody {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font: 16px "宋体", 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
  background: url(../../assets/images/bg.png) repeat-y;
  width: 1000px;
  margin: auto;
  box-shadow: -2px -1px 5px #666;
}

.clear {
  clear: both;
}
</style>

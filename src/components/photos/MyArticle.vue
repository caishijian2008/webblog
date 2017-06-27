<template>
  <div class="temp">
    <h3>
      <p>个人<span>相册</span></p>
      <a href="javascript:;" class="more">更多&gt;&gt;</a></h3>
    <ul>
      <li><a href="javascript:;"><img src="../../assets/images/list/01.jpg"></a><span>《嫌疑人x的献身》曝新款预告片</span></li>
      <li><a href="javascript:;"><img src="../../assets/images/list/001.jpg"></a><span>日本综艺节目惊现可以带人上天的无人机</span></li>
      <li><a href="javascript:;"><img src="../../assets/images/list/002.jpg"></a><span>《X战警》暴风女或拍独立电影</span></li>
      <li><a href="javascript:;"><img src="../../assets/images/list/003.jpg"></a><span>元祖高达被拆成最后一击造型</span></li>
      <li><a href="javascript:;"><img src="../../assets/images/list/004.jpg"></a><span>《金刚：骷髅岛》孤岛惊魂片段公开</span></li>
      <li><a href="javascript:;"><img src="../../assets/images/list/005.jpg"></a><span>《航海王》中的谁才是最苦情的角色？</span></li>
      <li><a href="javascript:;"><img src="../../assets/images/list/006.jpg"></a><span>VR福利游戏将毁掉整个日本民族！</span></li>
      <li><a href="javascript:;"><img src="../../assets/images/list/01.jpg"></a><span>《嫌疑人x的献身》曝新款预告片</span></li>
      <li><a href="javascript:;"><img src="../../assets/images/list/007.jpg"></a><span>《神偷奶爸3》新预告公开</span></li>
      <li><a href="javascript:;"><img src="../../assets/images/list/008.jpg"></a><span>《蓝精灵3》新预告公开</span></li>
      <li><a href="javascript:;"><img src="../../assets/images/list/001.jpg"></a><span>日本综艺节目惊现可以带人上天的无人机</span></li>
      <li><a href="javascript:;"><img src="../../assets/images/list/002.jpg"></a><span>《X战警》暴风女或拍独立电影</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myarticle'
}

</script>

<style scoped>
.temp {
  margin: 0 10px 0 10px;
}

.temp h3 {
    border-bottom: #333 2px solid;
    width: 100%;
    overflow: hidden;
    font-size: 14px;
    font-family: "΢���ź�";
    display: block;
    clear: both;
    margin-bottom: 10px;
    position: relative;
}

.temp h3 p {
    background: #474645;
    width: 180px;
    height: 25px;
    line-height: 25px;
    color: #fff;
    text-align: center;
    box-shadow: #999 4px 5px 1px;
}

.temp h3 p span {
    color: #38b3d4;
}

.temp ul li {
    margin: 3px;
    float: left;
    display: block;
    padding: 5px 5px 6px 5px;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}

.temp li img {
    width: 142px;
    height: 80px;
    background: #FFF;
    padding: 4px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, .5);
    display: block;
}

.temp li span {
    color: #fff;
    display: block;
    text-align: center;
    margin-top: 5px;
    width: 142px;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 14px;
}

.temp li:hover {
    background: #666;
    padding: 5px 5px 6px 5px;
}

a.more {
    position: absolute;
    right: 0;
    top: 4px;
    color: #666;
    font-size: 12px;
}
</style>

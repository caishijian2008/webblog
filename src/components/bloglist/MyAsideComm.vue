<template>
  <div>
    <h2>
      <p>{{msg}}</p>
    </h2>
    <ul class="pl_n">
      <dl>
        <dt><img src="images/006.jpg"> </dt>
        <dt> </dt>
        <dd>KaKayou
          <time>49分钟前</time>
        </dd>
        <dd><a href="#">元祖高达的拆卸应该也是有意为之，据现场粉丝所说，这也是大家期盼已久的造型！</a></dd>
      </dl>
      <dl>
        <dt><img src="images/005.jpg"> </dt>
        <dt> </dt>
        <dd>Hanazawa
          <time>2小时前</time>
        </dd>
        <dd><a href="#">东野圭吾的同名小说改编的悬疑电影...</a></dd>
      </dl>
      <dl>
        <dt><img src="images/002.jpg"> </dt>
        <dt> </dt>
        <dd>Kobayashi
          <time>3月7日</time>
        </dd>
        <dd><a href="#">我极其希望有暴风女的独立电影，《X战警》动画片伴随着我成长</a></dd>
      </dl>
      <dl>
        <dt><img src="images/003.jpg"> </dt>
        <dt> </dt>
        <dd>DanniceWu
          <time>43分钟前</time>
        </dd>
        <dd><a href="#">应该是罗宾吧，之前司法岛事件的时候我真的差点被虐哭了。 </a></dd>
      </dl>
      <dl>
        <dt><img src="images/002.jpg"> </dt>
        <dt> </dt>
        <dd>Lisa
          <time>5小时前</time>
        </dd>
        <dd><a href="#">各位眼前所见的是一只怪兽，它属于某个消逝的年代。</a></dd>
      </dl>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myasidecomm',
  data () {
    return {
      msg: '最新评论'
    }
  }
}
</script>

<style>
.pl_n dl {
    display: block;
    overflow: hidden;
    margin-bottom: 12px;
    color: #cdcbcb;
}

.pl_n dd {
    line-height: 22px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.pl_n dd a {
    color: #555454;
}

.pl_n time {
    color: #066;
    margin-left: 10px;
}

.pl_n dt {
    float: left;
}

.pl_n dt img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    transition: all 1s;
}

.pl_n dt img:hover {
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    -moz-transform: rotate(30deg);
    -o-transform: rotate(30deg);
    transform: rotate(30deg);
}
</style>

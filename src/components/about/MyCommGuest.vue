<template>
  <div class="ph_news">
    <myasidecomm></myasidecomm>
    <myasideguest></myasideguest>
  </div>
</template>

<script>
import myasidecomm from '@/components/bloglist/myasidecomm'
import myasideguest from '@/components/bloglist/myasideguest'
export default {
  name: 'mycommguest',
  components: {
    myasidecomm,
    myasideguest
  }
}
</script>

<style>
.ph_news h2 {
    font-size: 16px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    color: #FFF;
}

.ph_news h2 p {
    height: 40px;
    line-height: 40px;
    width: 100px;
    padding: 0 0 0 30px;
    border-radius: 0 20px 20px 0;
    text-shadow: rgba(0, 0, 0, .65) 1px 1px;
    background: #0f9c7c;
}

.ph_news ul {
    margin: 10px;
}

.ph_news li {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    color: #cdcbcb;
    line-height: 24px;
    height: 24px;
}

.ph_news li a {
    color: #cdcbcb;
}

.ph_news li a:hover,
.pl_n dd a:hover {
    text-decoration: underline;
}

.ph_n li span {
    margin-right: 10px;
    font-family: "sans-serif";
    color: #FFF;
    background: #404040;
    padding: 0 5px;
}

.ph_n li span.num1,
.ph_n li span.num2,
.ph_n li span.num3 {
    background: #f16b17;
}

</style>

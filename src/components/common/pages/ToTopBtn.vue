<template>
  <div id="totop-btn">
    <a id="gotop" href="javascript:void(0);" title="返回顶部"></a>
  </div>
</template>

<script>
export default {
  name: 'totopbtn',
  mounted: function () {
    var obtn = document.getElementById('totop-btn')  // 获取回到顶部按钮的ID
    var clientHeight = document.documentElement.clientHeight // 获取可视区域的高度
    var timer = null // 定义一个定时器
    var isTop = true // 定义一个布尔值，用于判断是否到达顶部
    window.onscroll = function () { // 滚动条滚动事件
      // 获取滚动条的滚动高度
      var osTop = document.documentElement.scrollTop || document.body.scrollTop
      if (osTop >= clientHeight) { // 如果滚动高度大于可视区域高度，则显示回到顶部按钮
        obtn.style.display = 'block'
      } else {
        obtn.style.display = 'none'
      }
      // 主要用于判断当点击回到顶部按钮后滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
      if (!isTop) {
        clearInterval(timer)
      }
      isTop = false
    }
    obtn.onclick = function () { // 回到顶部按钮点击事件
      // 设置一个定时器
      timer = setInterval(function () {
        // 获取滚动条的滚动高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop
        // 用于设置速度差，产生缓动的效果
        var speed = Math.floor(-osTop / 6)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + speed
        isTop = true  // 用于阻止滚动事件清除定时器
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    }
  }
}
// window.onload = () => {
//   var obtn = document.getElementById('totop-btn')  // 获取回到顶部按钮的ID
//   var clientHeight = document.documentElement.clientHeight // 获取可视区域的高度
//   var timer = null // 定义一个定时器
//   var isTop = true // 定义一个布尔值，用于判断是否到达顶部
//   window.onscroll = function () { // 滚动条滚动事件
//     // 获取滚动条的滚动高度
//     var osTop = document.documentElement.scrollTop || document.body.scrollTop
//     if (osTop <= clientHeight) { // 如果滚动高度大于可视区域高度，则显示回到顶部按钮
//       obtn.style.display = 'none'
//     } else {
//       obtn.style.display = 'block'
//     }
//     // 主要用于判断当点击回到顶部按钮后滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
//     if (!isTop) {
//       clearInterval(timer)
//     }
//     isTop = false
//   }
//   obtn.onclick = function () { // 回到顶部按钮点击事件
//     // 设置一个定时器
//     timer = setInterval(function () {
//       // 获取滚动条的滚动高度
//       var osTop = document.documentElement.scrollTop || document.body.scrollTop
//       // 用于设置速度差，产生缓动的效果
//       var speed = Math.floor(-osTop / 6)
//       document.documentElement.scrollTop = document.body.scrollTop = osTop + speed
//       isTop = true  // 用于阻止滚动事件清除定时器
//       if (osTop === 0) {
//         clearInterval(timer)
//       }
//     }, 30)
//   }
// }
</script>

<style>
/* 返回顶部 */
#totop-btn {
    position: fixed;
    right: 1%;
    bottom: 5%;
    width: 40px;
    height: 40px;
    text-align: center;
    border: 1px solid #eee;
    z-index: 1040;
    background: #fff url(../../../assets/images/gotop.png) no-repeat 10px 10px;
    cursor: pointer;
    border-radius: 6px;
    display: none;
}
</style>

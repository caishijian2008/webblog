<template>
  <div class="banner">
      <ul class="texts">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat itaque </p>
        <p>嘛~嘛~，说的是什么话呢......</p>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'mybanner'
}
</script>

<style scoped>
.banner {
    background: url(../../assets/images/banner.jpg) no-repeat center;
    height: 290px;
    margin: 10px auto;
    width: 100%;
    font-size: 16px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
}

.texts {
    line-height: 36px;
    padding: 90px 0 0 20px;
    text-shadow: 1px 1px rgba(255, 255, 255, 0.3);
}

.texts p {
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
    -webkit-transform: translate(60px);
    -moz-transform: translate(60px);
    -o-transform: translate(60px);
    -ms-transform: translate(60px);
    transform: translate(60px);
}

.texts p:hover {
    padding-left: 20px
}

.texts p:nth-child(1) {
    -webkit-animation: animations 3s ease-out 1s backwards;
    -moz-animation: animations 3s ease-out 1s backwards;
    -o-animation: animations 3s ease-out 1s backwards;
    -ms-animation: animations 3s ease-out 1s backwards;
    animation: animations 3s ease-out 1s backwards;
}

.texts p:nth-child(2) {
    -webkit-animation: animations 3s ease-out 4s backwards;
    -moz-animation: animations 3s ease-out 4s backwards;
    -o-animation: animations 3s ease-out 4s backwards;
    -ms-animation: animations 3s ease-out 4s backwards;
    animation: animations 3s ease-out 4s backwards;
}

@-webkit-keyframes animations {
    0% {
        -webkit-transform: translate(0);
        opacity: 0;
    }
    50% {
        -webkit-transform: translate(30px);
        opacity: .5;
    }
    100% {
        -webkit-transform: translate(60px);
        opacity: 1;
    }
}

@-moz-keyframes animations {
    0% {
        -moz-transform: translate(0);
        opacity: 0;
    }
    50% {
        -moz-transform: translate(30px);
        opacity: .5;
    }
    100% {
        -moz-transform: translate(60px);
        opacity: 1;
    }
}

@-o-keyframes animations {
    0% {
        -o-transform: translate(0);
        opacity: 0;
    }
    50% {
        -o-transform: translate(30px);
        opacity: .5;
    }
    100% {
        -o-transform: translate(60px);
        opacity: 1;
    }
}

@-ms-keyframes animations {
    0% {
        -ms-transform: translate(0);
        opacity: 0;
    }
    50% {
        -ms-transform: translate(30px);
        opacity: .5;
    }
    100% {
        -ms-transform: translate(60px);
        opacity: 1;
    }
}

@keyframes animations {
    0% {
        transform: translate(0);
        opacity: 0;
    }
    50% {
        transform: translate(30px);
        opacity: .5;
    }
    100% {
        transform: translate(60px);
        opacity: 1;
    }
}

</style>

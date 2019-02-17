<template>
  <div class="willerce">
    <div class="sydlogo">
      <img class="avatar" width="128" height="128" src="../assets/img/huihui.jpg">
    </div>
    <h1 class="indexcolor">Crazy huihui</h1>
    <p class="indexcolor nav">
      Specializing in front-end development for more than 4 years @ ShenZhen .
      More
      <span>About Me</span>
    </p>
    <p class="indexcolor dizhi">ShenZhen · China</p>
    <p class="nav">
      <span>About</span>
      <span>Archives</span>
      <span>Tags</span>
      <span>Chat</span>
      <span>Service</span>
    </p>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
.indexcolor,
.willerce a {
  color: #0a0a0a !important;
}
.indexcolor.dizhi {
  height: 24px;
  line-height: 24px;
  margin: 15px 0;
}
* {
  margin: 0;
  padding: 0;
}
body {
  font: 400 16px/1.62 "pop", "Microsoft JhengHei", sans-serif;
  color: #535353;
  overflow: hidden;
}
.willerce {
  text-align: center;
  margin: 100px auto auto auto;
  max-width: 500px;
  padding: 0 20px;
}
.willerce a {
  color: #535353;
  text-decoration: underline;
}
.willerce a:link,
.willerce a:visited {
  text-decoration: underline;
}
h1 {
  font-size: 26px;
  color: #424242;
  margin-bottom: 20px;
}
.avatar {
  border-radius: 64px;
}
.nav span {
  padding: 0 6px 0 6px;
  text-decoration: underline;
}
.nav span:hover {
  cursor: pointer;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.willerce {
  animation: fade-in;
  animation-duration: 1s;
  -webkit-animation: fade-in 1s;
}
.sydlogo {
  position: relative;
  width: 128px;
  height: 128px;
  margin: 0 auto;
  margin-bottom: 35px;
}
.zjgx {
  position: absolute;
  background: #f00;
  font-size: 16px;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  top: 0px;
  right: 0px;
  border-radius: 20px;
  color: #fff;
}
</style>

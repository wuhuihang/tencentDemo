<template>
  <div class="willerce">
    <div class="sydlogo">
      <img class="avatar" width="128" height="128" src="../assets/img/huihui.jpg">
    </div>
    <h1 class="indexcolor">Crazy huihui</h1>
    <p class="indexcolor nav">
      Specializing in front-end development for more than 10 years @ ShenZhen .
      More
      <router-link to="/About">About Me</router-link>
    </p>
    <p class="indexcolor dizhi">ShenZhen · China</p>
    <p class="nav">
      <router-link to="/About">About</router-link>
      <router-link to="/Archives">Archives</router-link>
      <router-link to="/Tags">Tags</router-link>
      <router-link to="/Chat">Chat</router-link>
      <router-link to="/About">Service</router-link>
    </p>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted () {
    // console.log(this.$services.$Utils.getCurdate(3))
  },
  components: {
  }
}
</script>

<style scoped>
body {
  font: 400 16px/1.62 "Microsoft JhengHei", sans-serif;
  color: #535353;
  overflow: hidden;
}
.indexcolor {
  color: #0a0a0a;
}
.indexcolor.dizhi {
  height: 24px;
  line-height: 24px;
  margin: 15px 0;
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
</style>

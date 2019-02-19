<template>
  <div class="frame">
    <div class="nav">
      <router-link to="/" tag="div">
        <img class="avatar" width="26" height="26" src="../assets/img/huihui.jpg">
      </router-link>
      <div class="navBody">
        <router-link to="/About">About</router-link>
        <span>·</span>
        <router-link to="/Archives">Archives</router-link>
        <span>·</span>
        <router-link to="/Tags">Tags</router-link>
        <span>·</span>
        <router-link to="/Chat">Chat</router-link>
        <span>·</span>
        <router-link to="/About">Service</router-link>
      </div>
    </div>
    <router-view></router-view>
    <footer>Copyright ©2019 huihui Powered by whh</footer>
  </div>
</template>

<script>

export default {
  name: 'frame',
  mounted () {

  },
  components: {
  }
}
</script>

<style scoped>
.nav {
  margin-top: 40px;
  margin-bottom: 60px;
  text-align: left;
  position: relative;
}
.nav img {
  position: absolute;
  top: 0;
  left: 0;
}
.nav .router-link-active {
  cursor: pointer;
}
.navBody {
  display: inline-block;
  margin-left: 43px;
}
.navBody > * {
  display: inline-block;
  color: #111;
  height: 26px;
  line-height: 26px;
}
.navBody span {
  padding: 0 10px;
}
footer {
  margin-top: 50px;
  padding-bottom: 10px;
  color: #888;
  font-size: 13px;
}
</style>

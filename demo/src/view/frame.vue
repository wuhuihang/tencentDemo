<template>
  <div class="frame centerBody">
    <header>
      <router-link to="/About" tag="div">
        <img class="logo" width="56" height="56" src="../assets/img/header.jpg">
      </router-link>
      <div class="router">
        <router-link to="/Blogs">Blogs</router-link>
        <span>·</span>
        <a href="https://github.com/wuhuihang?tab=repositories" target="_blank">GitHub</a>
        <!-- <span>·</span>
        <a href="http://www.yidingan.com/" target="_blank">yidingan</a>-->
        <span>·</span>
        <router-link to="/login">Admin</router-link>
      </div>
    </header>
    <router-view></router-view>
    <footer>Copyright ©2019 wuhuihang All Rights Reserved. Record No. 粤ICP备19016435号-1</footer>
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
.frame header {
  margin-top: 40px;
  margin-bottom: 60px;
  height: 56px;
  position: relative;
  font: 400 16px/1.7 "pop", "Microsoft JhengHei", sans-serif;
}
.logo {
  float: left;
  border-radius: 28px;
  cursor: pointer;
}
.router {
  height: 56px;
  line-height: 56px;
  float: left;
  margin-left: 28px;
}
.router a,
.router a:link {
  color: #111;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  text-decoration: none;
  position: relative;
}
.router a:hover {
  color: #555;
}
.router a:after {
  content: "";
  width: 0;
  height: 1px;
  background: #555;
  position: absolute;
  bottom: 0;
  left: 50%;
  transition: all 0.5s;
}
.router a:hover:after,
.router a:active:after {
  left: 0%;
  width: 100%;
}
.router span {
  padding: 0 10px;
}
footer {
  width: 100%;
  padding: 12px 0;
  font-size: 12px;
  line-height: 24px;
  color: #888;
}
</style>

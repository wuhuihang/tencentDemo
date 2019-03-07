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
        <router-link to="/Blogs">Blogs</router-link>-->
        <span>·</span>
        <router-link to="/Login">Admin</router-link>
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
.router a {
  color: #111;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  text-decoration: none;
}
.router a:hover {
  color: #555;
  text-decoration: underline;
}
.router span {
  padding: 0 10px;
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  color: #888;
  font-size: 13px;
  background: #fff;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 -2px 3px -1px #888;
}
</style>

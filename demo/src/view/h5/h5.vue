<template>
  <article class="h5list">
    <div class="h5list-name">h5</div>
    <ul>
      <router-link :to="{path:'/responsive'}" tag="li">vw 搭配 rem</router-link>
    </ul>
  </article>
</template>

<script>

export default {
  name: 'h5list',
  components: {
  }
}
</script>

<style lang="less" scoped>
@import "~@@/mixin.less";
.h5list {
  margin: 16px 0;
  padding-left: 40px;
}
.h5list-name {
  color: #999;
  font-family: pop, microsoft jhenghei, sans-serif;
}
.h5list li {
  line-height: 30px;
  margin-bottom: 2px;
}
.h5list li {
  color: #111;
  word-wrap: break-word;
  -moz-text-decoration-color: rgba(0, 0, 0, 0.4);
  text-decoration-color: rgba(0, 0, 0, 0.4);
  text-decoration: underline;
}
.h5list li:hover {
  cursor: pointer;
  color: #555;
  -moz-text-decoration-color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.6);
}
</style>

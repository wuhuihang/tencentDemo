<template>
  <article class="responsive">
    <div class="slide">750x340</div>
    <div class="banner">
      <img>
    </div>
    <nav class="flex">
      <a>
        <div>80x80</div>
        <div class="name">导航1</div>
      </a>
      <a>
        <div>80x80</div>
        <div class="name">导航2</div>
      </a>
      <a>
        <div>80x80</div>
        <div class="name">导航3</div>
      </a>
      <a>
        <div>80x80</div>
        <div class="name">导航4</div>
      </a>
      <a>
        <div>80x80</div>
        <div class="name">导航5</div>
      </a>
    </nav>
    <div class="sale">750x286</div>
  </article>
</template>

<script>

export default {
  name: 'responsive',
  components: {
  }
}
</script>

<style lang="less" scoped>
@import "~@@/mixin.less";
.slide {
  height: 170 / @r;
  background: #ccc;
  text-align: center;
  .ft(25 / @r, 170 / @r, #666);
}
.banner {
  .wh(100%, 0);
  position: relative;
  background: #eee;
  padding-top: 13.33333%;
  img {
    .wh(100%, 100%);
    position: absolute;
    left: 0;
    top: 0;
  }
}
.flex {
  display: flex;
  padding: 10 / @r;
  font-size: 12 / @r;
  text-align: center;
  a {
    flex: 1;
    display: block;
    div:first-child {
      .wh(40 / @r, 40 / @r);
      background: #cbcbcb;
      margin: 0 auto;
      line-height: 40 / @r;
    }
    .name {
      font-size: 12 / @r;
      text-align: center;
    }
  }
}
.sale {
  height: 143 / @r;
  background: #eee;
  text-align: center;
  .ft(25 / @r, 143 / @r, #666);
}
</style>

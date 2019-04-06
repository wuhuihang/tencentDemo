<template>
  <article class="responsive h5">
    <div class="slide">vw搭配rem 750x340</div>
    <div class="banner">
      <img src="~@assets/img/banner.png">
    </div>
    <nav class="flex">
      <router-link :to="{path:'/about'}" tag="div">
        <div>
          <img src="~@assets/img/home.png">
        </div>
        <div class="name">主页</div>
      </router-link>
      <router-link :to="{path:'/comming'}" tag="div">
        <div>
          <img src="~@assets/img/lottery.png">
        </div>
        <div class="name">抽奖</div>
      </router-link>
      <router-link :to="{path:'/comming'}" tag="div">
        <div>
          <img src="~@assets/img/redEnvelope.png">
        </div>
        <div class="name">红包</div>
      </router-link>
      <router-link :to="{path:'/comming'}" tag="div">
        <div>
          <img src="~@assets/img/ranking.png">
        </div>
        <div class="name">排名</div>
      </router-link>
      <router-link :to="{path:'/comming'}" tag="div">
        <div>
          <img src="~@assets/img/chat.png">
        </div>
        <div class="name">评论</div>
      </router-link>
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
  div {
    flex: 1;
    div:first-child {
      .wh(40 / @r, 40 / @r);
      margin: 0 auto;
      line-height: 40 / @r;
      img {
        width: 100%;
      }
    }
    .name {
      font-size: 12 / @r;
      color: #222;
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

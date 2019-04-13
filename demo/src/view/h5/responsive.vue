<template>
  <article class="responsive h5">
    <div class="slide">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background: rgb(51,149,224);">如鱼饮水，冷暖自知。</div>
        <div class="swiper-slide" style="background: rgb(201,231,255);">身体常动，内心常静。</div>
        <div class="swiper-slide" style="background: rgb(182,224,255);">时间太瘦，指缝太宽。</div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="banner">
      <img @click="goAbout" src="~@assets/img/banner.png">
    </div>
    <nav class="flex">
      <router-link :to="{path:'/animation'}" tag="div">
        <div>
          <img src="~@assets/img/animation.png">
        </div>
        <div class="name">动画</div>
      </router-link>
      <router-link :to="{path:'/lottery'}" tag="div">
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
    <div class="sale">vw搭配rem实现自适应</div>
    <div class="blogs">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item,index) in lastestBlogs"
          :key="index"
          @click="goBlog(item.id)"
        >{{item.title}}</div>
        <div class="swiper-slide">1</div>
        <div class="swiper-slide">2</div>
        <div class="swiper-slide">3</div>
      </div>
    </div>
    <div class="section">
      <div class="section-left" style="background: rgb(161,222,201);">未完待续</div>
      <div class="section-right">
        <div class="section-top" style="background: rgb(240,170,160);">no end</div>
        <div class="section-bottom" style="background: rgb(247,214,107);">to be continue</div>
      </div>
    </div>
    <div class="ends">______ 我是有底线的 ______</div>
  </article>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
export default {
  name: 'responsive',
  data () {
    return {
      lastestBlogs: []
    }
  },
  created () {
    this.$HttpServer.get('/api/h5blogs', {}).then(data => {
      this.lastestBlogs = data.list
    })
  },
  mounted () {
    new Swiper('.slide', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      }
    })
    new Swiper('.blogs', {
      loop: true,
      direction: 'vertical',
      autoplay: true
    })
  },
  methods: {
    goAbout () {
      this.$router.push({ path: "/about" })
    },
    goBlog (id) {
      this.$router.push({ path: '/blog', query: { id: id } })
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@@/mixin.less";
.slide {
  position: relative;
  overflow: hidden;
}
.slide .swiper-slide {
  .ft(25 / @r, 170 / @r, #fff);
  height: 170 / @r;
  background: #ccc;
  text-align: center;
  text-align: center;
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
  background: rgb(242, 241, 239);
  text-align: center;
  .ft(25 / @r, 143 / @r, #666);
}
.blogs {
  .wh(auto, (50 / @r));
  background: url("~@assets/img/notice.png") no-repeat (15 / @r) center;
  background-size: (30 / @r) (30 / @r);
  padding-left: (60 / @r);
  overflow: hidden;
}
.blogs-container {
  .wh(100%, (50 / @r));
  color: #fff;
}
.blogs .swiper-slide {
  line-height: 50 / @r;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.section {
  .wh(100%, 160 / @r);
  line-height: (160 / @r);
  text-align: center;
  font-size: (18 / @r);
  .section-left {
    float: left;
    .wh(50%, 160 / @r);
    line-height: (160 / @r);
  }
  .section-right {
    float: right;
    .wh(50%, 160 / @r);
    div {
      height: 50%;
      line-height: (80 / @r);
    }
  }
}
.ends {
  .wh(100%, 72 / @r);
  .ft(14 / @r, 72 / @r, #666);
  text-align: center;
}
</style>

<template>
  <article class="animation h5">
    <div class="demo">
      <div class="cube show-default show-left">
        <div class="cube-face is-top">Top</div>
        <div class="cube-face is-bottom">Bottom</div>
        <div class="cube-face is-left">Left</div>
        <div class="cube-face is-right">Right</div>
        <div class="cube-face is-back">Back</div>
        <div class="cube-face is-front">Front</div>
      </div>
    </div>
  </article>
</template>

<script>

export default {
  name: 'animation',
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import "~@@/mixin.less";
@side: 200px;
@radius: @side / 2;
@keyframes top {
  from {
    transform: rotateX(0);
  }
  to {
    transform: rotateX(90deg) translateZ(@radius);
    background: #a0eee1;
  }
}
@keyframes bottom {
  from {
    transform: rotateX(0);
  }
  to {
    transform: rotateX(-90deg) translateZ(@radius);
    background: #bee7e9;
  }
}
@keyframes left {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(-90deg) translateZ(@radius);
    background: #beedc7;
  }
}
@keyframes right {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(90deg) translateZ(@radius);
    background: #e6ceac;
  }
}
@keyframes back {
  from {
    transform: translateZ(0);
  }
  to {
    transform: translateZ(-@radius);
    background: #ecad9e;
  }
}
@keyframes front {
  from {
    transform: translateZ(0);
  }
  to {
    transform: translateZ(@radius);
    background: #f4606c;
  }
}
@keyframes autoRotate {
  0%,
  100% {
    transform: rotateX(0);
  }
  16.5% {
    transform: rotateX(-180deg);
  }
  33% {
    transform: rotateY(90deg);
  }
  49.5% {
    transform: rotateY(-90deg);
  }
  66% {
    transform: rotateX(-90deg);
  }
  82.5% {
    transform: rotateX(90deg);
  }
}
.animation {
  .wh(100%, 100%);
  background: #eee;
}
.demo {
  width: @side;
  height: @side;
  perspective: 800px;
  position: relative;
  margin: 100px auto;
}
.cube {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  font-size: 36px;
  position: absolute;
  animation: autoRotate ease 18s 12s infinite;
  &-face {
    border: 2px solid #000;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    opacity: 0.6;
    text-align: center;
    line-height: @side;
    backface-visibility: visible;
    background: #fff;
    &.is-top {
      animation: top ease 2s 1 forwards;
    }
    &.is-bottom {
      animation: bottom ease 2s 2s 1 forwards;
    }
    &.is-left {
      animation: left ease 2s 4s 1 forwards;
    }
    &.is-right {
      animation: right ease 2s 6s 1 forwards;
    }
    &.is-back {
      animation: back ease 2s 8s 1 forwards;
    }
    &.is-front {
      animation: front ease 2s 10s 1 forwards;
    }
  }
  img {
    width: 100%;
  }
}
</style>

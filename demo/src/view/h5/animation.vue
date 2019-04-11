<template>
  <article class="animation h5">
    <div class="demo">
      <div class="cube show-default show-left">
        <div class="cube-face is-front">1</div>
        <div class="cube-face is-back">2</div>
        <div class="cube-face is-right">3</div>
        <div class="cube-face is-left">4</div>
        <div class="cube-face is-top">5</div>
        <div class="cube-face is-bottom">6</div>
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
@cube-size: 200px;
@cube-radius: @cube-size / 2;
@keyframes autoRotate {
  // show-front
  0%,
  100% {
    transform: translateZ(-@cube-radius);
  }
  // show-back
  16.5% {
    transform: translateZ(-@cube-radius) rotateX(-180deg);
  }
  // show-left
  33% {
    transform: translateZ(-@cube-radius) rotateY(90deg);
  }
  // show-right
  49.5% {
    transform: translateZ(-@cube-radius) rotateY(-90deg);
  }
  // show-top
  66% {
    transform: translateZ(-@cube-radius) rotateX(-90deg);
  }
  // show-bottom
  82.5% {
    transform: translateZ(-@cube-radius) rotateX(90deg);
  }
}
.animation {
  .wh(100%, 100%);
}
.test {
  .wh(100px, 100px);
  border: 1px solid #000;
  margin: 30px auto;
  transform: rotateX(30deg);
}
.demo {
  width: @cube-size;
  height: @cube-size;
  perspective: 1000px;
  position: relative;
  margin: 100px auto;
}
.cube {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  font-size: 36px;
  position: absolute;
  animation: autoRotate ease 18s alternate infinite;
  &-face {
    border: 2px solid #000;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    opacity: 0.6;
    text-align: center;
    line-height: @cube-size;
    backface-visibility: visible;
    background: #fff;
    &.is-front {
      transform: translateZ(@cube-radius);
    }
    &.is-back {
      transform: rotateX(-180deg) translateZ(@cube-radius);
    }
    &.is-right {
      transform: rotateY(90deg) translateZ(@cube-radius);
    }
    &.is-left {
      transform: rotateY(-90deg) translateZ(@cube-radius);
    }
    &.is-top {
      transform: rotateX(90deg) translateZ(@cube-radius);
    }
    &.is-bottom {
      transform: rotateX(-90deg) translateZ(@cube-radius);
    }
  }
  img {
    width: 100%;
  }
}
</style>

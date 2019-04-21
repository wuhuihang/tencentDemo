<template>
  <transition name="fade">
    <div class="message" :class="type" v-show="show">
      <i class="icon"></i>
      <span class="text">{{text}}</span>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'message',
  props: {
    type: {
      type: String,
      default: 'info',
      validator: val => ['info', 'success', 'warning', 'error'].includes(val)
    },
    text: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@@/mixin.less";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.message {
  background: #fff;
  position: fixed;
  top: 30px;
  left: 50%;
  width: 200px;
  height: 30px;
  transform: translateX(-100px);
  z-index: 10000000;
  text-align: center;
  line-height: 30px;
  border-radius: 4px;
}
.info {
  background: rgba(0, 162, 255, 0.897);
}
.success {
  background: #2fff74;
}
.warning {
  background: #ffac2ff3;
}
.error {
  background: rgb(231, 58, 46);
}
</style>
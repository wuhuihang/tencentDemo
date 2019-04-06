<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  date: () => {
    return {}
  },
  components: {
  },
  created () {
    // let htmlWidth = document.documentElement.cilentWidth || document.body.clientWidth;
    // document.documentElement.style.fontSize = htmlWidth / 10 + 'px';
  }
}
</script>

<style lang="less">
@import "~@@/index.less";
</style>

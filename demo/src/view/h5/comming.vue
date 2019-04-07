<template>
  <article class="comming h5">
    <div class="ctt">
      <img @click="goback" src="~@assets/img/back.png">
      <img src="~@assets/img/comming.png">
    </div>
  </article>
</template>

<script>

export default {
  name: 'comming',
  methods: {
    goback () {
      this.$router.push({ path: "/responsive" })
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@@/mixin.less";
.comming {
  .wh(100%, 100%);
  .ctt {
    img:first-child {
      cursor: pointer;
    }
    text-align: center;
  }
}
</style>

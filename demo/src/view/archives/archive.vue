<template>
  <article>
    <header v-text="archive.title"></header>
    <div v-html="archive.content"></div>
    <!-- <div></div> -->
    <div class="sxwk">
      <div v-if="archive&&archive.nextArchive&&archive.nextArchive.title">下一篇：
        <router-link
          :to="{path:'/Archive',query:{id:archive.nextArchive.id}}"
        >{{archive.nextArchive.title}}</router-link>
      </div>
      <div v-if="archive&&archive.prevArchive&&archive.prevArchive.title">上一篇：
        <router-link
          :to="{path:'/Archive',query:{id:archive.prevArchive.id}}"
        >{{archive.prevArchive.title}}</router-link>
      </div>
    </div>
  </article>
</template>

<script>
import archives from '../../service/archives.js'
export default {
  name: 'archive',
  data () {
    return {
      archive: {}
    }
  },
  watch: {
    $route () {
      this.archive = archives[this.$route.query.id]
    }
  },
  mounted () {
    this.archive = archives[this.$route.query.id]
  }
}
</script>

<style>
header {
  font-size: 30px;
  margin-bottom: 60px;
}
p {
  margin-top: 0;
  margin-bottom: 20px;
}
.code {
  background: #48484a;
  padding: 20px 20px 20px;
  margin-bottom: 30px;
  list-style: none;
  word-break: break-all;
  line-height: 20px;
  word-wrap: break-word;
  color: #fff;
  font-size: 14px;
}
.sxwk {
  list-style-type: none;
  padding: 20px 0;
  border-bottom: 1px solid #f2f2f2;
  border-top: 1px solid #f2f2f2;
}
.sxwk a {
  color: #111;
  word-wrap: break-word;
  -moz-text-decoration-color: rgba(0, 0, 0, 0.4);
  text-decoration-color: rgba(0, 0, 0, 0.4);
}
</style>

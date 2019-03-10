<template>
  <article class="article">
    <header v-text="blog.title"></header>
    <div v-html="blog.content"></div>
    <!-- <div></div> -->
    <div class="article-router">
      <div v-if="blog&&blog.nextBlog&&blog.nextBlog.title">下一篇：
        <router-link :to="{path:'/blog',query:{id:blog.nextBlog.id}}">{{blog.nextBlog.title}}</router-link>
      </div>
      <div v-if="blog&&blog.prevBlog&&blog.prevBlog.title">上一篇：
        <router-link :to="{path:'/blog',query:{id:blog.prevBlog.id}}">{{blog.prevBlog.title}}</router-link>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      blog: {}
    }
  },
  watch: {
    $route () {
      this.getBlog()
    }
  },
  mounted () {
    this.getBlog()
  },
  methods: {
    getBlog () {
      this.$HttpServer.get('/api/outblogs/' + this.$route.query.id).then(blog => {
        this.blog = blog
      })
    }
  }
}
</script>

<style>
</style>

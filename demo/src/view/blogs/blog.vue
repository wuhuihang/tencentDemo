<template>
  <article class="article">
    <header v-text="blog.title"></header>
    <div v-html="blog.content"></div>
    <!-- <div></div> -->
    <div class="article-router">
      <div v-if="blog&&blog.nextBlog&&blog.nextBlog.title">下一篇：
        <router-link :to="{path:'/Blog',query:{id:blog.nextBlog.id}}">{{blog.nextBlog.title}}</router-link>
      </div>
      <div v-if="blog&&blog.prevBlog&&blog.prevBlog.title">上一篇：
        <router-link :to="{path:'/Blog',query:{id:blog.prevBlog.id}}">{{blog.prevBlog.title}}</router-link>
      </div>
    </div>
  </article>
</template>

<script>
// import blogs from '../../service/blogs.js'
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
      let self = this
      self.$HttpServer.get('/api/blogs/' + self.$route.query.id).then(blog => {
        self.blog = blog
      }).catch(err => {
        console.log('err', err)
      })
    }
  }
}
</script>

<style>
</style>

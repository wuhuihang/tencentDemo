<template>
  <article class="article blog">
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
.article-router {
  list-style-type: none;
  padding: 20px 0;
  border-bottom: 1px solid #f2f2f2;
  border-top: 1px solid #f2f2f2;
}
.article-router a {
  color: #111;
  word-wrap: break-word;
  -moz-text-decoration-color: rgba(0, 0, 0, 0.4);
  text-decoration-color: rgba(0, 0, 0, 0.4);
}
.article blockquote {
  border-left: 4px solid #ccc;
  margin-bottom: 20px;
  margin-top: 5px;
  padding-left: 16px;
  margin-left: 0;
}
.blog img {
  width: 100%;
  margin: 14px 0 30px;
}
</style>

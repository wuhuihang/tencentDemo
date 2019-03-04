<template>
  <article>
    <header v-text="blog.title"></header>
    <div v-html="blog.content"></div>
    <!-- <div></div> -->
    <div class="sxwk">
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
header {
  font-size: 30px;
  margin-bottom: 60px;
}
p {
  margin-top: 0;
  margin-bottom: 20px;
}
pre,
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

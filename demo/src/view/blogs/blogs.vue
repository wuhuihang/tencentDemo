<template>
  <article>
    <div v-for="(item, index) in blogs" :key="index">
      <div class="blog-year">{{item.year}}</div>
      <ul class="blog-list">
        <li v-for="(item2, index2) in item.blogList" :key="index2">
          <time class="blog-time">{{item2.publishTime}}</time>
          <span>&nbsp;-&nbsp;</span>
          <router-link :to="{path:'/blog',query:{id:item2.id}}">{{item2.title}}</router-link>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
// import blogs from '../../service/blogs.js'
export default {
  name: 'blogs',
  data () {
    return {
      blogs: []
    }
  },
  mounted () {
    let newBlogs = []
    let newIndex = 0
    this.$HttpServer.get('/api/blogs').then(blogs => {
      console.log(blogs)
      blogs.forEach((item, index) => {
        if (index === 0) {
          newBlogs[newIndex] = {}
          newBlogs[newIndex].year = item.year
        } else {
          if (newBlogs[newIndex].year !== item.year) {
            newIndex++
            newBlogs[newIndex] = {}
            newBlogs[newIndex].year = item.year
          }
        }
        !newBlogs[newIndex].blogList && (newBlogs[newIndex].blogList = [])
        newBlogs[newIndex].blogList.push(item)
      })
      this.blogs = newBlogs
    }).catch(err => {
      console.log('err', err)
    })
  }
}
</script>

<style>
.blog-year {
  color: #999;
  font-family: pop, microsoft jhenghei, sans-serif;
}
.blog-list {
  margin: 16px 0;
  padding-left: 40px;
}
.blog-list li {
  line-height: 30px;
  margin-bottom: 2px;
}
.blog-list li a {
  color: #111;
  word-wrap: break-word;
  -moz-text-decoration-color: rgba(0, 0, 0, 0.4);
  text-decoration-color: rgba(0, 0, 0, 0.4);
}
.blog-list li a:hover {
  cursor: pointer;
  color: #555;
  -moz-text-decoration-color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.6);
}
.blog-time {
  color: #666;
  font-family: pop, microsoft jhenghei, sans-serif;
  font-size: 14px;
}
.bg {
  width: 100%;
}
</style>

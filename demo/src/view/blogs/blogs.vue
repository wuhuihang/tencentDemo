<template>
  <article>
    <div class="mod-blog__item" v-for="(item, index) in blogs" :key="index">
      <div class="mod-blog__year">{{item.year}}</div>
      <ul class="mod-blog__list">
        <li v-for="(item2, index2) in item.blogList" :key="index2">
          <time class="mod-blog__time">{{item2.publishTime}}</time>
          <span>&nbsp;-&nbsp;</span>
          <router-link :to="{path:'/Blog',query:{id:item2.id}}">{{item2.title}}</router-link>
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
.mod-blog__year {
  color: #999;
  font-family: pop, microsoft jhenghei, sans-serif;
}
.mod-blog__list {
  margin: 16px 0;
  padding-left: 40px;
}
.mod-blog__list li {
  line-height: 30px;
  margin-bottom: 2px;
}
.mod-blog__list li a {
  color: #111;
  word-wrap: break-word;
  -moz-text-decoration-color: rgba(0, 0, 0, 0.4);
  text-decoration-color: rgba(0, 0, 0, 0.4);
}
.mod-blog__list li a:hover {
  cursor: pointer;
  color: #555;
  -moz-text-decoration-color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.6);
}
.mod-blog__time {
  color: #666;
  font-family: pop, microsoft jhenghei, sans-serif;
  font-size: 14px;
}
</style>

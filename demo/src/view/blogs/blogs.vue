<template>
  <article>
    <div v-for="(value, key, index) in blogs" :key="index">
      <div class="blog-year">{{key}}</div>
      <ul class="blog-list">
        <li v-for="(item2, index2) in value" :key="index2">
          <time class="blog-time">{{item2.publishTime}}</time>
          <span>&nbsp;-&nbsp;</span>
          <router-link :to="{path:'/blog',query:{id:item2.id}}">{{item2.title}}</router-link>
        </li>
      </ul>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagesize"
      :layout="layoutList"
      :total="total"
    ></el-pagination>
  </article>
</template>

<script>
// import blogs from '../../service/blogs.js'
export default {
  name: 'blogs',
  data () {
    return {
      currentPage: 1,
      pagesize: 10,
      total: 0,
      layoutList: this.$Methods.isMobile() ? "total, sizes, jumper" : "total, sizes, prev, pager, next, jumper",
      blogs: []
    }
  },
  created () {
    this.getBlogs()
  },
  methods: {
    handleSizeChange (val) {
      this.pagesize = val
      this.getBlogs()
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getBlogs()
    },
    getBlogs () {
      let newBlogs = {}
      this.$HttpServer.get('/api/outblogs', { currentPage: this.currentPage, pagesize: this.pagesize }).then(data => {
        data.list.forEach((item, index) => {
          (index === 0 || (index !== 0 && !newBlogs.hasOwnProperty(item.category))) && (newBlogs[item.category] = [])
          newBlogs[item.category].push(item)
        })
        this.blogs = newBlogs
        this.total = data.count
      })
    }
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
</style>

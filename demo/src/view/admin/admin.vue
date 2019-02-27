<template>
  <article>admin
    <div class="publish">
      <el-date-picker
        v-model="blog.publishTime"
        type="date"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"
      ></el-date-picker>
      <el-input v-model="blog.title" placeholder="请输入标题"></el-input>
      <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 4}"
        placeholder="请输入内容"
        v-model="blog.content"
      ></el-input>
    </div>
    <el-button round @click="publish">默认按钮</el-button>
  </article>
</template>

<script>

export default {
  name: 'admin',
  data () {
    return {
      blog: {
        publishTime: '',
        title: '',
        content: ''
      }
    }
  },
  components: {
  },
  methods: {
    publish () {
      this.$HttpServer.post('/api/blogs', this.blog).then(data => {
        console.log(data)
        this.$router.push({ path: '/Blogs' })
      }).catch(err => {
        console.log('err', err)
      })
    }
  }
}
</script>

<style scoped>
.publish > div {
  margin: 10px 0;
}
</style>

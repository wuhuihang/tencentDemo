<template>
  <div class="blogList">
    <el-table :data="blogs" style="width: 100%">
      <el-table-column label="标题" prop="title"></el-table-column>
      <el-table-column label="标签" prop="category"></el-table-column>
      <el-table-column label="时间" prop="publishTime"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑博客" :visible.sync="editFlag">
      <edit-blog :blog="blog" @editSuccess="editSuccess"></edit-blog>
    </el-dialog>
  </div>
</template>

<script>
import editBlog from "./edit"

export default {
  name: 'blogList',
  data () {
    return {
      editFlag: false,
      blog: {},
      blogs: []
    }
  },
  mounted () {
    this.initData()
  },
  components: {
    editBlog
  },
  methods: {
    initData () {
      this.$HttpServer.get('/api/blogs').then(blogs => {
        this.blogs = blogs
      })
    },
    handleEdit (index, item) {
      this.blog = Object.assign({}, item)
      this.editFlag = true
    },
    handleDelete (index, item) {
      this.$HttpServer.delete('/api/blogs/' + item.id).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功'
        });
        this.initData()
      }).catch(() => {
        this.$message({
          type: 'error',
          message: '删除失败'
        });
      })
    },
    editSuccess (isCancel) {
      this.editFlag = false
      !isCancel && this.initData()
    }
  }
}
</script>

<style scoped>
</style>

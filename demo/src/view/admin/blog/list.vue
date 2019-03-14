<template>
  <div class="blogList">
    <el-table :data="blogs" style="width: 100%">
      <el-table-column label="标题" prop="title"></el-table-column>
      <el-table-column label="标签" prop="category"></el-table-column>
      <el-table-column label="时间" prop="publishTime"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
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
      currentPage: 1,
      pagesize: 10,
      total: 0,
      blogs: []
    }
  },
  mounted () {
    this.getBlogs()
  },
  components: {
    editBlog
  },
  methods: {
    getBlogs () {
      this.$HttpServer.get('/api/blogs', { params: { currentPage: this.currentPage, pagesize: this.pagesize } }).then(data => {
        this.blogs = data.list
        this.total = data.count
      })
    },
    handleSizeChange (val) {
      this.pagesize = val
      this.getBlogs()
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getBlogs()
    },
    handleEdit (item) {
      this.$HttpServer.get('/api/blogs/' + item.id).then(blog => {
        this.blog = blog
        this.editFlag = true
      })
    },
    handleDelete (item) {
      this.$HttpServer.delete('/api/blogs/' + item.id).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功'
        });
        this.initData()
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

<template>
  <div class="blogList">
    <el-table :data="blogs" style="width: 100%">
      <el-table-column label="标题" prop="title"></el-table-column>
      <el-table-column label="时间" prop="publishTime"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑博客" :visible.sync="editBlog">
      <el-date-picker
        v-model="blog.publishTime"
        type="date"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"
      ></el-date-picker>
      <el-input v-model="blog.title" placeholder="请输入标题"></el-input>
      <!-- <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 4}"
        placeholder="请输入内容"
        v-model="blog.content"
      ></el-input>-->
      <quill-editor ref="myTextEditor" v-model="blog.content" :config="editorOption"></quill-editor>
      <div>
        <el-button @click="editBlog = false">取 消</el-button>
        <el-button type="primary" @click="editConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"
import 'quill/dist/quill.js';

export default {
  name: 'blogList',
  data () {
    return {
      editBlog: false,
      blog: {},
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike']
            // ,['blockquote', 'code-block']
          ]
        }
      },
      blogs: []
    }
  },
  mounted () {
    this.initData()
  },
  components: {
    quillEditor
  },
  computed: {
  },
  methods: {
    initData () {
      this.$HttpServer.get('/api/blogs').then(blogs => {
        this.blogs = blogs
      })
    },
    handleEdit (index, item) {
      this.blog = Object.assign({}, item)
      this.editBlog = true
      console.log(item.id)
    },
    handleDelete (index, item) {
      this.$HttpServer.delete('/api/blogs/' + item.id).then(() => {
        this.$message({
          type: 'success',
          message: '删除博客成功'
        });
        this.initData()
      }).catch(err => {
        console.log('err', err)
      })
    },
    editConfirm () {
      this.$HttpServer.put('/api/blogs/' + this.blog.id, this.blog).then(data => {
        this.$message({
          type: 'success',
          message: '修改博客成功'
        });
        this.editBlog = false
        this.initData()
      }).catch(err => {
        console.log('err', err)
      })
    }
  }
}
</script>

<style scoped>
</style>

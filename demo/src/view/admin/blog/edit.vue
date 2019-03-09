<template>
  <div class="editBlog">
    <el-form :model="blog" :rules="rules" ref="editBlogForm">
      <hh-form-item prop="category">
        <el-input v-model="blog.category" placeholder="请输入类别"></el-input>
      </hh-form-item>
      <hh-form-item prop="publishTime">
        <el-date-picker
          v-model="blog.publishTime"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </hh-form-item>
      <hh-form-item prop="title">
        <el-input v-model="blog.title" placeholder="请输入标题"></el-input>
      </hh-form-item>
    </el-form>
    <quill-editor v-model="blog.content" :options="editorOption"></quill-editor>
    <div>
      <el-button @click="editCancel">取 消</el-button>
      <el-button type="primary" @click="editConfirm">确 定</el-button>
    </div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"
import 'quill/dist/quill.js';

export default {
  name: 'editBlog',
  data () {
    return {
      rules: {
        category: [
          { required: true, message: '请输入类别', trigger: ['blur', 'change'] },
        ],
        publishTime: [
          { required: true, message: '请选择时间', trigger: ['blur', 'change'] },
        ],
        title: [
          { required: true, message: '请输入标题', trigger: ['blur', 'change'] },
        ]
      },
      editorOption: {
        placeholder: '请输入内容',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'color': [] }, { 'background': [] }]
          ]
        }
      }
    }
  },
  components: {
    quillEditor
  },
  props: [
    'blog'
  ],
  methods: {
    editConfirm () {
      this.$refs['editBlogForm'].validate((valid) => {
        if (valid) {
          this.$HttpServer.put('/api/blogs/' + this.blog.id, this.blog).then(() => {
            this.$message({
              type: 'success',
              message: '修改博客成功'
            });
            this.$emit('editSuccess')
          }).catch(err => {
            console.log('err', err)
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    editCancel () {
      this.$emit('editSuccess', true)
    }
  }
}
</script>

<style lang="less" scoped>
.editBlog > div {
  margin: 10px 0;
}
.editBlog .el-input {
  width: 220px;
}
</style>

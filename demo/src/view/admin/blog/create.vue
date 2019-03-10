<template>
  <div class="createBlog">
    <el-form :model="blog" :rules="rules" ref="createBlogForm">
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
    <quill-editor
      ref="myTextEditor"
      v-model="blog.content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    ></quill-editor>
    <el-button type="primary" @click="publish">提交</el-button>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"
import 'quill/dist/quill.js';

export default {
  name: 'createBlog',
  data () {
    return {
      blog: {
        category: '',
        publishTime: '',
        title: '',
        content: ''
      },
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
            // [{ 'header': 1 }, { 'header': 2 }],
            // [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            // [{ 'script': 'sub' }, { 'script': 'super' }],
            // [{ 'indent': '-1' }, { 'indent': '+1' }],
            // [{ 'direction': 'rtl' }],
            // [{ 'size': ['small', false, 'large', 'huge'] }],
            // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            // [{ 'font': [] }],
            // [{ 'align': [] }],
            // [{ 'clean': '源码编辑' }],
            // ['link', 'image', 'video']
            ['image']
            // ,['sourceEditor']     //新添加的工具
          ]
        }
      }
    }
  },
  components: {
    quillEditor
  },
  mounted () {
    console.log('this is my editor', this.editor)
  },
  computed: {
    editor () {
      return this.$refs.myTextEditor.quillEditor
    }
  },
  methods: {
    onEditorBlur (editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    publish () {
      this.$refs['createBlogForm'].validate((valid) => {
        if (valid) {
          this.$HttpServer.post('/api/blogs', this.blog).then(data => {
            console.log(data)
            this.$router.push({ path: '/manage/blogList' })
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.createBlog {
  max-width: 700px;
  margin: 40px auto;
}
.createBlog > div {
  margin: 10px 0;
}
.createBlog .el-input {
  width: 220px;
}
</style>

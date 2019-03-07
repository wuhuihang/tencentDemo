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
      <!-- <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 4}"
        placeholder="请输入内容"
        v-model="blog.content"
      ></el-input>-->
      <quill-editor
        ref="myTextEditor"
        v-model="blog.content"
        :config="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
      ></quill-editor>
    </div>
    <el-button round @click="publish">默认按钮</el-button>
  </article>
</template>

<script>
import { quillEditor } from "vue-quill-editor"
import 'quill/dist/quill.js';

export default {
  name: 'admin',
  data () {
    return {
      blog: {
        publishTime: '',
        title: '',
        content: ''
      },
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike']
            // ,['blockquote', 'code-block']
          ]
        }
      },
      components: {
        quillEditor
      }
    }
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
    onEditorChange ({ editor, html, text }) {
      console.log('editor change!', editor, html, text)
      this.content = html
    },
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

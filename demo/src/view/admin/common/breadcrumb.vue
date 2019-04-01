<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/manage/dashboard' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta.breadcrumb" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="primary" class="quit" @click="quit">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  methods: {
    quit () {
      this.$HttpServer.post('/api/signOut').then(() => {
        this.$message({
          type: 'success',
          message: '退出成功'
        });
        this.$router.push('/login')
        sessionStorage.setItem('HH_BLOG_TOKEN', '')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.breadcrumb {
  background-color: #eff2f7;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;
}
.quit {
  margin-right: 10px;
}
</style>

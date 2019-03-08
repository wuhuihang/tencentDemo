<template>
  <div>
    <el-menu :default-active="defaultActive" style="min-height: 100%;" router>
      <el-menu-item index="dashboard">
        <i class="el-icon-menu"></i>首页
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>数据管理
        </template>
        <el-menu-item index="blogList">博客列表</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-plus"></i>添加数据
        </template>
        <el-menu-item index="createBlog">添加博客</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'menuLeft',
  computed: {
    defaultActive: function () {
      return this.$route.path.split('/')[2];
    }
  }
}
</script>

<style lang="less" scoped>
</style>

<template>
  <div class="fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="4" style="min-height: 100%;">
        <menu-left></menu-left>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <keep-alive>
          <div>
            <breadcrumb></breadcrumb>
            <router-view></router-view>
          </div>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Breadcrumb from './breadcrumb';
import menuLeft from './menu';
export default {
  components: {
    breadcrumb: Breadcrumb,
    menuLeft: menuLeft
  }
}
</script>

<style lang="less" scoped>
// @import "../../../../public/mixin";
.fillcontain {
  width: 100%;
  height: 100%;
}
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
</style>

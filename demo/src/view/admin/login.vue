<template>
  <div class="login">
    <div class="login-box">
      <div class="login-header">登录</div>
      <div class="login-item">
        <span class="login-name">
          <i class="el-icon-service"></i>
        </span>
        <input class="login-input" v-model="userName" placeholder="输入账号" type="text">
      </div>
      <div class="login-item">
        <span class="login-name">
          <i class="el-icon-goods"></i>
        </span>
        <input class="login-input" v-model="userPassword" placeholder="输入密码" type="password">
      </div>
      <el-button round @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      userName: '',
      userPassword: ''
    }
  },
  mounted () {
  },
  methods: {
    login () {
      if (this.userName === 'admin') {
        this.$router.push('/admin')
      }
    }
  }
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/img/bg.jpg") fixed center center;
}
.login-box {
  width: 280px;
  height: 490px;
  padding: 35px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -175px;
}
.login-header {
  text-align: center;
  height: 20px;
  font-size: 20px;
  color: #ffffff;
  height: 20px;
  line-height: 20px;
  padding: 0 0 35px 0;
}
.login-item {
  height: 46px;
  padding: 0 5px;
  margin-bottom: 20px;
  border-radius: 50px;
  position: relative;
  border: rgba(255, 255, 255, 0.2) 2px solid;
}
.login-name {
  width: 25px;
  height: 25px;
  background-position: -125px 0;
  color: #fff;
  position: absolute;
  margin: 12px 13px;
  line-height: 20px;
  text-align: center;
}
.login-input {
  width: 220px;
  height: 46px;
  outline: none;
  display: inline-block;
  font-size: 14px;
  margin-left: 50px;
  border: none;
  background: none;
  line-height: 46px;
  color: #ffffff;
}
input::-webkit-input-placeholder {
  color: #ffffff;
}
.el-button.is-round {
  width: 100%;
  background: #0096e6;
  color: #ffffff;
  height: 46px;
  border: 1px solid #0096e6;
}
</style>

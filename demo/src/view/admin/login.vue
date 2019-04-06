<template>
  <div class="login">
    <transition name="form-fade" mode="in-out">
      <div class="login-box" v-show="showLogin">
        <div class="login-header">后台管理系统</div>
        <el-form :model="loginData" :rules="rules" ref="loginForm">
          <hh-form-item prop="username">
            <el-input v-model="loginData.username" type="text" placeholder="用户名"></el-input>
          </hh-form-item>
          <hh-form-item prop="password">
            <el-input v-model="loginData.password" type="password" placeholder="密码"></el-input>
          </hh-form-item>
          <el-button type="primary" @click="login" class="login-button">登陆</el-button>
        </el-form>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      loginData: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: ['blur', 'change'] },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] },
        ]
      },
      showLogin: false
    }
  },
  mounted () {
    this.showLogin = true
  },
  methods: {
    login () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.$HttpServer.post('/api/login', this.loginData).then(data => {
            sessionStorage.setItem('HH_BLOG_TOKEN', data.token)
            this.$router.push('/manage')
          })
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@@/mixin.less";
.login {
  background-size: cover;
  .wh(100%, 100%);
  .bis("~@assets/img/bg.jpg");
  .el-input {
    width: 270px;
  }
}
.login-box {
  .wh(320px, 210px);
  box-sizing: border-box;
  padding: 25px 0 25px 25px;
  border-radius: 5px;
  background: hsla(0, 0%, 100%, 0.3);
  .ctt();
}
.login-header {
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
  text-align: center;
  font-size: 34px;
  color: #ccc;
}
.login-button {
  width: 270px;
  font-size: 16px;
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>
<style>
.login .el-form-item__content {
  text-align: left;
}
</style>

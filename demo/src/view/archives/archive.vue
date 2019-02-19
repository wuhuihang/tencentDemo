<template>
  <article>
    <header>CentOS 7，短时间就断线的处理</header>
    <div>
      <p>编辑一下CentOS的: /etc/ssh/sshd_config</p>
      <p class="code">#TCPKeepAlive yes
        <br>#ClientAliveInterval 0
      </p>
      <p>去掉前面的#号，并将0改为3
        <br>然后重启service sshd restart
      </p>
    </div>
    <div class="sxwk">上一篇：
      <router-link to="/About">LNMP FTP 一直连不上</router-link>
    </div>
  </article>
</template>

<script>

export default {
  name: 'archive',
  components: {
  }
}
</script>

<style>
header {
  font-size: 30px;
  margin-bottom: 60px;
}
p {
  margin-top: 0;
  margin-bottom: 20px;
  word-break: break-all;
}
.code {
  background: #48484a;
  padding: 30px 30px 30px;
  margin-bottom: 30px;
  list-style: none;
  word-break: break-all;
  line-height: 30px;
  word-wrap: break-word;
  color: #fff;
  font-size: 14px;
}
.sxwk {
  list-style-type: none;
  padding: 20px 0;
  border-bottom: 1px solid #f2f2f2;
  border-top: 1px solid #f2f2f2;
}
.sxwk a {
  color: #111;
  word-wrap: break-word;
  -moz-text-decoration-color: rgba(0, 0, 0, 0.4);
  text-decoration-color: rgba(0, 0, 0, 0.4);
}
</style>

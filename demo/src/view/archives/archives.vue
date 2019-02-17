<template>
  <article>
    <div class="mod-archive__item">
      <div class="mod-archive__year">CentOS</div>
      <ul class="mod-archive__list">
        <li>
          <time class="mod-archive__time" datetime="2017-12-04 10:38:26">2017-12-04</time>
          <span>—</span>
          <a href="http://www.wpke.net/334.html" title="CentOS 7，短时间就断线的处理">http://www.wpke.net/tags</a>
        </li>
      </ul>
    </div>
    <div class="mod-archive__item">
      <div class="mod-archive__year">WordPress</div>
      <ul class="mod-archive__list">
        <li>
          <time class="mod-archive__time" datetime="2017-01-12 10:31:12">2017-01-12</time>
          <span>—</span>
          <a href="http://www.wpke.net/146.html" title="WordPress 性能优化收费服务">WordPress 性能优化收费服务</a>
        </li>
      </ul>
    </div>
    <div class="mod-archive__item">
      <div class="mod-archive__year">WordPress 性能优化</div>
      <ul class="mod-archive__list">
        <li>
          <time class="mod-archive__time" datetime="2017-01-12 10:31:12">2017-01-12</time>
          <span>—</span>
          <a href="http://www.wpke.net/146.html" title="WordPress 性能优化收费服务">WordPress 性能优化收费服务</a>
        </li>
      </ul>
    </div>
    <div class="mod-archive__item">
      <div class="mod-archive__year">工作</div>
      <ul class="mod-archive__list">
        <li>
          <time class="mod-archive__time" datetime="2015-06-22 12:15:08">2015-06-22</time>
          <span>—</span>
          <a href="http://www.wpke.net/30.html" title="告别“才疏不能胜任，薪酬不能持家”的工作吧">告别“才疏不能胜任，薪酬不能持家”的工作吧</a>
        </li>
      </ul>
    </div>
    <div class="mod-archive__item">
      <div class="mod-archive__year">感情</div>
      <ul class="mod-archive__list">
        <li>
          <time class="mod-archive__time" datetime="2015-04-30 10:19:53">2015-04-30</time>
          <span>—</span>
          <a href="http://www.wpke.net/99.html" title="最舒服的感情">最舒服的感情</a>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>

export default {
  name: 'archives',
  components: {
  }
}
</script>

<style>
.mod-archive__year {
  color: #999;
  font-family: pop, microsoft jhenghei, sans-serif;
}
.mod-archive__list {
  margin: 16px 0;
  padding-left: 40px;
}
.mod-archive__list li {
  line-height: 30px;
  margin-bottom: 2px;
}
.mod-archive__list li a {
  color: #111;
  word-wrap: break-word;
  -moz-text-decoration-color: rgba(0, 0, 0, 0.4);
  text-decoration-color: rgba(0, 0, 0, 0.4);
}
.mod-archive__list li a:hover {
  cursor: pointer;
  color: #555;
  -moz-text-decoration-color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.6);
}
.mod-archive__time {
  color: #666;
  font-family: pop, microsoft jhenghei, sans-serif;
  font-size: 14px;
}
</style>

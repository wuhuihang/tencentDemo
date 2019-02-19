<template>
  <article>
    <div class="mod-archive__item">
      <div class="mod-archive__year">2018</div>
      <ul class="mod-archive__list">
        <li>
          <time class="mod-archive__time">2017-12-04</time>
          <span>&nbsp;-&nbsp;</span>
          <router-link to="/Archive">http://www.wpke.net/tags</router-link>
        </li>
      </ul>
    </div>
    <div class="mod-archive__item">
      <div class="mod-archive__year">2017</div>
      <ul class="mod-archive__list">
        <li>
          <time class="mod-archive__time">2017-01-12</time>
          <span>&nbsp;-&nbsp;</span>
          <router-link to="/Archive">WordPress 性能优化收费服务</router-link>
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

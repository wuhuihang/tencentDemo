<template>
  <article>
    <div class="mod-archive__item" v-for="(item, index) in archives" :key="index">
      <div class="mod-archive__year">{{item.year}}</div>
      <ul class="mod-archive__list">
        <li v-for="(item2, index2) in item.archiveList" :key="index2">
          <time class="mod-archive__time">{{item2.publishTime}}</time>
          <span>&nbsp;-&nbsp;</span>
          <router-link :to="{path:'/Archive',query:{id:item2.id}}">{{item2.title}}</router-link>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import archives from '../../service/archives.js'
export default {
  name: 'archives',
  data () {
    return {
      archives: []
    }
  },
  mounted () {
    let newArchives = []
    let newIndex = 0
    archives.forEach((item, index) => {
      if (index === 0) {
        newArchives[newIndex] = {}
        newArchives[newIndex].year = item.year
      } else {
        if (newArchives[newIndex].year !== item.year) {
          newIndex++
          newArchives[newIndex] = {}
          newArchives[newIndex].year = item.year
        }
      }
      !newArchives[newIndex].archiveList && (newArchives[newIndex].archiveList = [])
      newArchives[newIndex].archiveList.push(item)
    })
    this.archives = newArchives
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

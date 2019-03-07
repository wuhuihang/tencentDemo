<template>
  <div class="home">
    <div>
      <header>
        <div class="centerBody">
          <div class="router">
            <router-link to="/About">About</router-link>
            <router-link to="/Blogs">Blogs</router-link>
            <router-link to="/Admin">Admin</router-link>
          </div>
        </div>
      </header>
      <img class="bg" src="../assets/img/bg.jpg">
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted () {

  },
  components: {
  }
}
</script>

<style scoped>
</style>

<template>
  <div id="app">
    <header>
      <div class="header">My personal costs</div>
    </header>
    <main><PaymantDisplay /></main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: { },
  data: () => ({}),
  methods: {}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  color: red;
}
</style>

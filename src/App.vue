<template>
  <div id="app">
    <header class="header">
      <router-link to="/dashboard">dashboard</router-link>
      <router-link to="/about">about</router-link>
      <div @click="goToPage('NotFound')">404</div>
      <a class="quickadd" href="/add/payment/Food?value=200">Food</a>
      <a class="quickadd" href="/add/payment/Transport">Transport</a>
      <a class="quickadd" href="/add/payment/?value=300">Sport</a>
      <!-- <a href="dashboard">dashboard</a>
      <a href="about" >about</a>
      <a href="notfound" >not found</a>-->
    </header>
    <main>
      <router-view />
      <!-- <Dashboard v-if="page === 'dashboard'" />
      <About v-if="page === 'about'"/>
      <NotFound v-if="page === 'notfound'"/> -->
      </main>
  </div>
</template>

<script>
// import About from './views/About.vue'
// import Dashboard from './views/Dashboard.vue'
// import NotFound from './views/NotFound.vue'

export default {
  name: 'App',
  components: {
    // Dashboard,
    // NotFound,
    // About
  },
  data: () => ({
    // page: 'dashboard'
  }),
  computed: {
  },
  methods: {
    goToPage (namePage) {
      this.$router.push({
        name: namePage
      })
    },
    setPage () {
      // this.page = location.pathname.slice(1)
    }
  },
  mounted () {
    /* const links = document.querySelectorAll('a')
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
        history.pushState({}, '', link.href)
        this.setPage()
      })
    })
    this.setPage()
    window.addEventListener('popstate', () => {
      this.setPage()
    }) */
  },
  created () {
    this.$store.dispatch('fetchData', 1)
    this.$store.dispatch('fetchCategoryList')
  }
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
  & a {
  text-decoration: none;
  padding: 20px;
  }
}
</style>

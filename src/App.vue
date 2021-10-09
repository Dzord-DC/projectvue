<template>
  <div id="app">
    <header class="header">
      <router-link to="/dashboard">dashboard</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/notfound">notFound</router-link>
      <br>
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
      <transition name="fade">
      <modal-window-add-payment @close="onModelClose" v-if="modalIsShow" :settings="modalSettings"/>
      <contex-menu @closeContext="onContextClose" v-if="contextShow" :id="id"/>
      </transition>
  </div>
</template>

<script>
import ContexMenu from './components/ContexMenu.vue'
// import About from './views/About.vue'
// import Dashboard from './views/Dashboard.vue'
// import NotFound from './views/NotFound.vue'
// import ModalWindowAddPayment from './components/ModalWindowAddPayment.vue'

export default {
  name: 'App',
  components: {
    ModalWindowAddPayment: () => import('./components/ModalWindowAddPayment.vue'),
    ContexMenu
  },
  data: () => ({
    modalSettings: {},
    modalIsShow: false,
    contextShow: false,
    id: 0
  }),
  computed: {
  },
  methods: {
    goToPage (namePage) {
      this.$router.push({
        name: namePage
      })
    },
    onModelClose () {
      this.modalIsShow = false
    },
    setPage () {
      // this.page = location.pathname.slice(1)
    },
    onShown (settings) {
      this.modalSettings = settings
      this.modalIsShow = true
    },
    onHide () {
      this.modalIsShow = false
      this.modalSettings = {}
    },
    onContextShow (idItem) {
      this.contextShow = true
      this.id = idItem
    },
    onContextClose () {
      this.contextShow = false
    }
  },
  mounted () {
    this.$modal.EventBus.$on('onShown', this.onShown)
    this.$modal.EventBus.$on('onHide', this.onHide)
    this.$context.EventBus.$on('openContext', this.onContextShow)
    this.$context.EventBus.$on('closeContext', this.onContextClose)
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
    console.log(this.$model)
    this.$modal.show()
    this.$modal.hide()
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
  margin: 20px;
  }
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
     opacity: 0;
  }
</style>

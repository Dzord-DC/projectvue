<template>
  <div id="app">
    <header>
      <div class="header">My personal costs</div>
    </header>
    <main>
      Total Price: {{getFPV}}
      <add-paymant-form @emitName="addNewPayment" :lastID="id" :categoryList="getCategoryList"/>
      <PaymantDisplay
        :items="paymantsList"
        @idCreated="idCreated"
        @idUpdate="idUpdate"
        :numberPage="selectPage"
      />
      <Pagination @selectPage="newSelectPage"/>
    </main>
  </div>
</template>

<script>
import PaymantDisplay from './components/PaymantDisplay.vue'
import AddPaymantForm from './components/AddPaymantForm.vue'
import Pagination from './components/Pagination.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymantDisplay,
    AddPaymantForm,
    Pagination
  },
  data: () => ({
    id: 0,
    selectPage: 1
  }),
  computed: {
    ...mapGetters([
      'getPaymentsList',
      'getCategoryList'
    ]),
    getFPV () {
      return this.$store.getters.getPaymentsListFullPrice
    },
    paymantsList () {
      return this.$store.getters.getPaymentsList
    }
  },
  methods: {
    ...mapMutations({
      addData: 'setPaymontListData'
    }),
    methodName (date) {
      this.$store.commit('addDataToPaymentsList', date)
    },
    addNewPayment (date) {
      this.paymantsList.push(date)
    },
    newSelectPage (namberPage) {
      this.$store.dispatch('fetchData', namberPage)
      this.selectPage = namberPage
    },
    idCreated (idItem) {
      this.id = idItem + 1
    },
    idUpdate (idItem) {
      this.id = idItem + 1
    }
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
}
</style>

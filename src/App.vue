<template>
  <div id="app">
    <header>
      <div class="header">My personal costs</div>
    </header>
    <main>
      <add-paymant-form @emitName="addNewPayment" :lastID="id" />
      <PaymantDisplay
        :items="paymantList"
        @idCreated="idCreated"
        @idUpdate="idUpdate"
      />
    </main>
  </div>
</template>

<script>
import PaymantDisplay from './components/PaymantDisplay.vue'
import AddPaymantForm from './components/AddPaymantForm.vue'
export default {
  name: 'App',
  components: {
    PaymantDisplay,
    AddPaymantForm
  },
  data: () => ({
    paymantList: [],
    id: 0
  }),
  methods: {
    fetchData () {
      return [
        {
          id: 1,
          date: '28.03.2020',
          type: 'Food',
          amount: 169
        },
        {
          id: 2,
          date: '24.03.2020',
          type: 'Transport',
          amount: 360
        },
        {
          id: 3,
          date: '24.03.2020',
          type: 'Food',
          amount: 532
        }
      ]
    },
    addNewPayment (date) {
      this.paymantList.push(date)
    },
    idCreated (idItem) {
      this.id = idItem + 1
    },
    idUpdate (idItem) {
      this.id = idItem + 1
    }
  },
  created () {
    this.paymantList = this.fetchData()
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

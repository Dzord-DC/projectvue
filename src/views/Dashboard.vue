<template>
  <div>
      <div class="header">My personal costs</div>
       Total Price: {{getFPV}}
      <add-paymant-form @emitName="addNewPayment" :lastID="id" :categoryList="getCategoryList"/>
      <PaymantDisplay
        :items="paymantsList"
        @idCreated="idCreated"
        @idUpdate="idUpdate"
        :numberPage="selectPage"
      />
      <Pagination @selectPage="newSelectPage"/>
  </div>
</template>

<script>
import AddPaymantForm from '../components/AddPaymantForm.vue'
import Pagination from '../components/Pagination.vue'
import PaymantDisplay from '../components/PaymantDisplay.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: { AddPaymantForm, Pagination, PaymantDisplay },
  name: 'Dashboard',
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

<style>

</style>

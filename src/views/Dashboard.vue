<template>
<v-container>
  <v-row>
    <v-col>
      <div class="text-h5 text-sm-h3"> My personal costs</div>
       <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on }">
        <v-btn color="teal" dark v-on="on" @click="dialog=!dialog"> Add new cost<v-icon> mdi-plus</v-icon></v-btn>
        </template>
        <v-card>
          <add-paymant-form :lastID="id"/>
        </v-card>
      </v-dialog>
      <PaymantDisplay show-items :items="paymantsList" @idCreated="idCreated"
        @idUpdate="idUpdate"
        :numberPage="selectPage"
      />
    </v-col>
  </v-row>
  <Pagination @selectPage="newSelectPage" :filterNum="filterNum"/>
</v-container>
</template>

<script>
// import AddPaymantForm from '../components/AddPaymantForm.vue'
import Pagination from '../components/Pagination.vue'
import PaymantDisplay from '../components/PaymantDisplay.vue'
import { mapGetters, mapMutations } from 'vuex'
import AddPaymantForm from '../components/AddPaymantForm.vue'

export default {
  components: { Pagination, PaymantDisplay, AddPaymantForm },
  name: 'Dashboard',
  data: () => ({
    dialog: false,
    id: 0,
    selectPage: 1
  }),
  computed: {
    ...mapGetters([
      'getPaymentsList'
      // 'getCategoryList'
    ]),
    paymantsList () {
      return this.$store.getters.getPaymentsList
    },
    filterNum () {
      return Math.floor(this.paymantsList.length / 3 + 1)
    }
  },
  methods: {
    ...mapMutations({
      addData: 'setPaymontListData'
    }),
    addNewPayment (date) {
      this.paymantsList.push(date)
    },
    newSelectPage (namberPage) {
      // this.$store.dispatch('fetchData', namberPage)
      this.selectPage = namberPage
    },
    idCreated (idItem) {
      this.id = idItem + 1
    },
    idUpdate (idItem) {
      this.id = idItem + 1
    },
    addPayment () {
      this.$modal.show({ title: 'Add Payment Form', content: 'addPaymentForm' })
    }
  },
  created () {
    // this.$store.dispatch('fetchData', 1)
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCategoryList')
  }
}
</script>

<style>

</style>

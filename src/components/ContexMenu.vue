<template>
<div>
  <div class="over" @click="closeContext"> </div>
  <div class="context-menu">
    <div class="context">

    </div>
      <button @click="redit">Редактировать</button>
      <div v-if="reditShow">
        <input type="text" v-model="reditData.date">
        <input type="text" v-model="reditData.type">
        <input type="text" v-model="reditData.amount">
        <button @click="reditSave">Сохранить</button>
      </div>
      <button @click="deletePayment">Удалить</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ContextMenu.vue',
  props: {
    id: Number
  },
  data: () => ({
    reditData: {},
    reditShow: false
  }),
  methods: {
    ...mapMutations([
      'deleteDataToPaymentlist',
      'reditDateToPaymentList'
    ]),
    closeContext () {
      this.$emit('closeContext')
    },
    redit () {
      this.reditShow = true
      this.reditData = this.paymantsList[this.id]
      console.log(this.reditData)
      // this.$emit('closeContext')
    },
    reditSave () {
      // this.reditDateToPaymentList(this.id, this.reditData)
      this.$emit('closeContext')
    },
    deletePayment () {
      this.deleteDataToPaymentlist(this.id)
      this.$emit('closeContext')
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
    paymantsList () {
      return this.$store.getters.getPaymentsList
    }
  }
}
</script>

<style>
.over{
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0;
}
.context-menu{
    position: absolute;
    z-index: 100;
    top: 140px;
    left: 75%;
}
</style>

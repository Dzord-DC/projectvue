<template>
<div class="text-center">
    <v-pagination color="teal"
      v-model="page"
      :length="filterNum"
      @click="filterItems(page)"
    ></v-pagination>
  </div>
</template>
<!--<v-app-bar app flat color="teal" v-if="filterNum > 1">
  <v-btn  :ripple="false" plain>&#60;</v-btn>
  <v-btn v-for="n in filterNum" :key="n" @click="filterItems(n)" >
        {{ n }}
      </v-btn>
  <v-btn :ripple="false" plain>&#62;</v-btn>
    </v-app-bar>-->

<script>
export default {
  name: 'Pagination',
  props: {
    itemsLength: {
      type: Number
    },
    filterNum: Number
  },
  data () {
    return {
      idItem: 0,
      page: 1
    }
  },
  methods: {
    /* filterItems (page) {
      console.log(page)
      this.$emit('selectPage', page)
    } */
  },
  updated () {
    this.$emit('selectPage', this.page)
  }
}
</script>

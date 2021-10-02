<template>
    <div v-if="filterNum > 1">
      &#60;
      <button v-for="n in filterNum" :key="n" @click="filterItems(n)">
        {{ n }}
      </button>
      &#62;
    </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    itemsLength: {
      type: Number
    }
  },
  data () {
    return {
      idItem: 0,
      filterNum: 4
    }
  },
  methods: {
    filterItems (n) {
      const namberPage = n
      this.$emit('selectPage', namberPage)
    }
  }
}
</script>

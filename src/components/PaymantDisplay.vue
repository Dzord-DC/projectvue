<template>
  <div>
    <div v-if="showItems">Передали пропс true</div>
    <div class="contents">
      <div class="item-cont">#id</div>
      <div class="item-cont">Дата</div>
      <div class="item-cont">Котегория</div>
      <div class="item-cont">Значение</div>
    </div>
    <div v-for="(item, idx) in items" :key="idx">
      <div class="contents" v-if="idx >= min && idx < max">
        <div class="item-cont">{{ item.id }}</div>
        <div class="item-cont">{{ item.date }}</div>
        <div class="item-cont">{{ item.type }}</div>
        <div class="item-cont">{{ item.amount }}</div>
      </div>
    </div>
    <div v-if="filterNum > 1">
      &#60;
      <button v-for="n in filterNum" :key="n" @click="filterItems(n)">
        {{ n }}
      </button>
      &#62;
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymantDisplay',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    showItems: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      idItem: 0,
      filterNum: 0,
      quantityItem: 5,
      min: 0,
      max: 5
    }
  },
  methods: {
    filterItems (n) {
      this.max = this.quantityItem * n
      this.min = this.max - this.quantityItem
    }
  },
  created () {
    this.idItem = this.items[this.items.length - 1].id
    this.$emit('idCreated', this.idItem)
    this.filterNum = Math.floor(this.items.length / 5) + 1
  },
  mounted () {
  },
  updated () {
    this.idItem = this.items[this.items.length - 1].id
    this.$emit('idUpdate', this.idItem)
    this.filterNum = Math.floor(this.items.length / 5) + 1
  }
}
</script>

<style lang="scss">
.contents {
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px black;
}
.item-cont {
  width: -webkit-fill-available;
  padding: 2px;
}
</style>

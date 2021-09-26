<template>
  <div>
    <div v-if="showItems">Передали пропс true</div>
    <div class="contents">
      <div class="item-cont">#id</div>
      <div class="item-cont">Дата</div>
      <div class="item-cont">Котегория</div>
      <div class="item-cont">Значение</div>
    </div>
    <div v-for="(item, idx) in items" :key="idx" class="contents">
      <div class="item-cont">{{ item.id }}</div>
      <div class="item-cont">{{ item.date }}</div>
      <div class="item-cont">{{ item.type }}</div>
      <div class="item-cont">{{ item.amount }}</div>
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
      idItem: 0
    }
  },
  created () {
    this.idItem = this.items[this.items.length - 1].id
    console.log(this.idItem)
    this.$emit('idCreated', this.idItem)
  },
  updated () {
    this.idItem = this.items[this.items.length - 1].id
    console.log(this.idItem)
    this.$emit('idUpdate', this.idItem)
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

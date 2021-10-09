<template>
  <div>
    <div v-if="showItems">Передали пропс true</div>
    <div class="contents">
      <div class="item-cont">#id</div>
      <div class="item-cont">Дата</div>
      <div class="item-cont">Котегория</div>
      <div class="item-cont">Значение</div>
      <div class="item-cont">Опции</div>
    </div>
    <div v-for="(item, idx) in items.slice(this.numberPage * 3 - 3, this.numberPage * 3)" :key="idx" class="contents">
        <div class="item-cont">{{ item.id }}</div>
        <div class="item-cont">{{ item.date }}</div>
        <div class="item-cont">{{ item.type }}</div>
        <div class="item-cont">{{ item.amount }}</div>
        <div class="item-cont context-but" @click="openContextMenu(item.id)">
          <p class="punt">&#8226;</p><p class="punt">&#8226;</p><p class="punt">&#8226;</p>
          </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  name: 'PaymantDisplay',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    showItems: {
      type: Boolean,
      default: false
    },
    numberPage: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      idItem: 0,
      filterNum: 0,
      filterItem: ''
    }
  },
  methods: {
    openContextMenu (id) {
      this.contextShow = true
      const idArray = this.items.findIndex(el => el.id === id)
      console.log(idArray)
      this.$context.openContext(idArray)
    }
  },
  created () {
    // this.idItem = this.items[this.items.length - 1].id
    this.$emit('idCreated', this.idItem)
    this.filterItem = this.items.slice(this.numberPage * 3 - 3, this.numberPage * 3)
  },
  mounted () {
  },
  updated () {
    // this.idItem = this.items[this.items.length - 1].id
    this.$emit('idUpdate', this.idItem)
    this.filterItem = this.items.slice(this.numberPage * 3 - 3, this.numberPage * 3)
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
.cuntext-but{
  display: flex;
  line-height: 7px;
}
.punt{
  line-height: 7px;
    margin: 0;
}
</style>

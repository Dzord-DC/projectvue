<template>
  <div>
    <button @click="show = !show" class="button b-show">
      Добавить запись +
    </button>
    <div class="form" v-if="show">
      <input class="form-item" placeholder="Amount" v-model="amount" />
      <select class="form-item" v-model="type" placeholder="Type">
        <option v-for="option in categoryList" :key="option">
          {{option}}
        </option>
      </select>
      <input class="form-item" placeholder="Date" v-model="date" />
      <button @click="onSaveClick" class="button">Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPaymantForm',
  props: {
    lastID: {
      type: Number,
      default: 0
    },
    categoryList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      id: '',
      amount: '',
      type: '',
      date: '',
      show: false
    }
  },
  computed: {
    getCurrentDate () {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  methods: {
    onSaveClick () {
      const data = {
        id: this.lastID,
        amount: this.amount,
        type: this.type,
        date: this.date || this.getCurrentDate
      }
      this.$emit('emitName', data)
    }
  }
}
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button {
  color: white;
  background-color: #64c4a4;
  border: none;
  border-radius: 2px;
  margin: 5px;
}
.form-item {
  margin: 2px;
  width: 200px;
  height: 25px;
  border: rgb(199, 196, 196) 1px solid;
  outline: aqua solid 1px;
}
.b-show {
  height: 25px;
}
</style>

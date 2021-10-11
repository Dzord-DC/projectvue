<template>
  <div>
      <input type="text" v-model="propComp" name="test">
      <button @click="onSave">Save</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TextVuex',
  data () {
    return {
      propComp: ''
    }
  },
  methods: {
    ...mapActions(['addData']),
    onSave () {
      const { propComp } = this
      this.addData(propComp)
    }
  }
}
</script>

<style>

</style>

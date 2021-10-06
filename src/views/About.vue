<template>
  <div>
      About
      <button @click="openModelAuth">Open Auth</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    openModelAuth () {
      this.$modal.show({ title: 'Auth', content: 'auth' })
    }
  }
}
</script>

<style>

</style>

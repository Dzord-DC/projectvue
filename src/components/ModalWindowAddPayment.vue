<template>
  <div class="wrapper">
      <div class="overlay"></div>
      <div class="header">{{settings.title}}</div>
      <div class="content">
        <add-paymant-form v-if="settings.content === 'addPaymentForm'"/>
        <auth v-if="settings.content === 'auth'"/>
        <div class="footer">
          <button @click="onCloseClick">Close</button>
      </div>
      </div>
  </div>
</template>

<script>
import AddPaymantForm from './AddPaymantForm.vue'
import Auth from './Auth.vue'
export default {
  components: { AddPaymantForm, Auth },
  name: 'ModelWindowAddPayment.vue',
  props: {
    settings: Object
  },
  methods: {
    onCloseClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.wrapper {
    border: 1px solid red;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    & .overlay {
        z-index: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(128, 128, 128, 0.5);
    }
    & .content {
        position: relative;
        z-index: 100;
    }
}
</style>

export default {
  install (Vue) {
    if (this.installed) {
      return
    }
    this.installed = true

    Vue.prototype.$context = {
      EventBus: new Vue(),
      openContext (id) {
        this.EventBus.$emit('openContext', id)
        console.log('openContext')
      },
      closeContext () {
        console.log('closeContext')
        this.EventBus.$emit('closeContext')
      }
    }
  }
}

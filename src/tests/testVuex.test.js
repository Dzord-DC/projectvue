import 'regenerator-runtime/runtime'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TestVuex from '../tests/TestVuex.vue'
import Vuex from 'vue'

const localVue = createLocalVue()
localVue.use(Vuex)

descride('Test Actions', () => {
  let actions
  let store
  beforeEach(() => {
    actions = {
      addData: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })
  it('run action onSave', async () => {
    const wrapper = shallowMount(TestVuex, {
      store, localVue
    })
    const input = wrapper.find('input')
    input.setValue('123')

    const btn = wrapper.find('button')
    btn.trigger('click')

    expect(actions.addData).toHaveBeenCalled()
  })
})

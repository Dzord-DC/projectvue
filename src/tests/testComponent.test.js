import { mount } from '@vue/test-utils'
import TestComponent from './TestComponent.vue'

describe('TestComponent testing', () => {
  test('Test content', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        message: 'Hello World!'
      }
    })

    expect(wrapper.text()).toEqual('The message is: Hello World!')
  })
})

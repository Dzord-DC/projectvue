import { mount } from '@vue/test-utils'
import { it } from '@jest/globals'
import Calc from '../components/Calc.vue'

describe('Test Calc', () => {
  it('Test first input', () => {
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('1')
    // operand1.element.value = '1'
    // operand1.trigger('input')

    expect(wrapper.vm.op1).toBe(1)
  })

  it('Test second input', () => {
    const wrapper = mount(Calc)
    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')
    // operand1.element.value = '1'
    // operand1.trigger('input')

    expect(wrapper.vm.op2).toBe(2)
  })

  it('Test method sum', () => {
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('1')

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')

    const methodSum = wrapper.find('button[name="+"]')
    methodSum.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })

  it('Test method min', () => {
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('4')

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')

    const methodSum = wrapper.find('button[name="-"]')
    methodSum.trigger('click')

    expect(wrapper.vm.result).toBe(2)
  })
})

import 'regenerator-runtime/runtime'
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

  it('Test method multi', () => {
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('2')

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')

    const methodMul = wrapper.find('button[name="*"]')
    methodMul.trigger('click')

    expect(wrapper.vm.result).toBe(4)
  })

  it('Test method deg', () => {
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('2')

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')

    const methodDeg = wrapper.find('button[name="^"]')
    methodDeg.trigger('click')

    expect(wrapper.vm.result).toBe(4)
  })

  it('Test method deg2', () => {
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('2')

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('0')

    const methodDeg = wrapper.find('button[name="^"]')
    methodDeg.trigger('click')

    expect(wrapper.vm.result).toBe(1)
  })

  it('Test method showKey', async () => {
    const wrapper = mount(Calc)

    const check = wrapper.find('input[name=showKey]')
    check.setChecked(true)

    const radio2 = wrapper.find('input[name=switch2]')
    radio2.setChecked(true)

    const but2 = wrapper.find('button[name=key2]')
    but2.trigger('click')

    const but6 = wrapper.find('button[name=key6]')
    but6.trigger('click')
    but6.trigger('click')

    const but10 = wrapper.find('button[name=key10]')
    but10.trigger('click')

    const methodDeg = wrapper.find('button[name="/"]')
    methodDeg.trigger('click')

    expect(wrapper.vm.op2).toBe(26)
  })

  it('Test method showKey', async () => {
    const wrapper = mount(Calc)

    const check = wrapper.find('input[name=showKey]')
    check.setChecked(true)

    const radio1 = wrapper.find('input[name=switch1]')
    radio1.setChecked(true)

    const but2 = wrapper.find('button[name=key2]')
    but2.trigger('click')

    const but6 = wrapper.find('button[name=key6]')
    but6.trigger('click')

    const but11 = wrapper.find('button[name=key11]')
    but11.trigger('click')

    expect(wrapper.vm.op1).toBe('')
  })
})

it('Test method div', async () => {
  const wrapper = mount(Calc)
  const operand1 = wrapper.find('input[name=operand1]')
  operand1.setValue('4')

  const operand2 = wrapper.find('input[name=operand2]')
  operand2.setValue('2')

  await wrapper.vm.$nextTick()

  const methodSum = wrapper.find('button[name="/"]')
  methodSum.trigger('click')

  expect(wrapper.vm.result).toBe(2)
})

it('Test method divFloor', async () => {
  const wrapper = mount(Calc)
  const operand1 = wrapper.find('input[name=operand1]')
  operand1.setValue('5')

  const operand2 = wrapper.find('input[name=operand2]')
  operand2.setValue('2')

  await wrapper.vm.$nextTick()

  const methodSum = wrapper.find('button[name="//"]')
  methodSum.trigger('click')

  expect(wrapper.vm.result).toBe(2)
})

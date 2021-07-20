

import { shallowMount } from '@vue/test-utils'
import Header from '../../coms/Header.vue'
import findTestWrapper from '../../../../../utils/testUtils.js'
/**
 * 1. 测试是否存在input框
 * 2. 初始内容为空
 * 3. 数据动态变化
 * 4. 回车事件: 有输入值、无输入值、事件触发后的效果
 */
describe('Header 组件', () => {
  it(' 样式发生改变，做提示', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot()
  })
  it('input框存在', () => {
    const wrapper = shallowMount(Header)
    // const input = wrapper.find('[data-test="input"]')
    const input = findTestWrapper(wrapper, 'input')
    // exists vue/test-utils 检查input(dom)元素是否存在
    expect(input.exists()).toBe(true)
  })
  it('input 框初始内容为空', () => {
    const wrapper = shallowMount(Header)
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('')
  })
  it('input 数据动态变化', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('测试')
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('测试')
  })
  
  it('nput 回车事件无内容不通过', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('')
    input.trigger('keyup.enter')
    // 回车会增加一个数据，当没有内容时不应该向外面触发事件
    // toBefalsy() 测试不通过
    // toBeTruthy() 测试通过
    expect(wrapper.emitted().add).toBeFalsy()
  })
  
  it('input 回车事件有内容通过', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('测试')
    input.trigger('keyup.enter')
    // toBefalsy() 测试不通过
    // toBeTruthy() 测试通过
    expect(wrapper.emitted().add).toBeTruthy()
  })
  
  it('input 回车事件,清空inputValue', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('测试')
    input.trigger('keyup.enter')
    // 回车会增加一个数据，当没有内容时不应该向外面触发事件
    // toBefalsy() 测试不通过
    // toBeTruthy() 测试通过
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.$data.inputValue).toBe('')
  })
})

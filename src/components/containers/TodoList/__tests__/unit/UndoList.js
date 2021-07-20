import { shallowMount } from '@vue/test-utils'
import UndoList from '../../coms/UndoList.vue'
import findTestWrapper from '../../../../../utils/testUtils.js'

describe('UndoList 组件', () => {
  it('初始化', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [] }
    })
    const countEle = findTestWrapper(wrapper, 'count')
    const ListEle = findTestWrapper(wrapper, 'list')
    expect(countEle.at(0).text()).toEqual('0')
    expect(ListEle.length).toEqual(0)
  })
  
  it('list默认有数据', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [1, 2, 3] }
    })
    const countEle = findTestWrapper(wrapper, 'count')
    const ListEle = findTestWrapper(wrapper, 'list')
    expect(countEle.at(0).text()).toEqual('3')
    expect(ListEle.length).toEqual(3)
  })
  
  
  it('list有数据且存在删除按钮', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [1, 2, 3] }
    })
    const countEle = findTestWrapper(wrapper, 'count')
    const ListEle = findTestWrapper(wrapper, 'list')
    const delateBtns = findTestWrapper(wrapper, 'delete-button')
    expect(countEle.at(0).text()).toEqual('3')
    expect(ListEle.length).toEqual(3)
    expect(delateBtns.length).toEqual(3)
  })

  it('删除事件触发', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [1, 2, 3] }
    })
    const deleteButton = findTestWrapper(wrapper, 'delete-button').at(1)
    deleteButton.trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
    expect(wrapper.emitted().delete[0][0]).toBe(1)
  })
})

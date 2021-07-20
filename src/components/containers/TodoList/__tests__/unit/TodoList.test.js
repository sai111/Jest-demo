

import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import UndoList from '../../coms/UndoList.vue'

describe('TodoList组件', () => {
  it('初始化时，undoList 应该为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })
  
  it('调用undoList,传递list参数', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.findComponent(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })
  
  it('删除', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2, 3]
    })
    wrapper.vm.handleDelete(1)
    expect(wrapper.vm.$data.undoList).toEqual([1, 3])
  })
  
  it('新增', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2, 3]
    })
    wrapper.vm.handleAdd(4)
    expect(wrapper.vm.$data.undoList).toEqual([1, 2, 3, 4])
  })
  
  it('监听header 中的add事件', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2, 3]
    })
    wrapper.vm.handleAdd(4)
    expect(wrapper.vm.$data.undoList).toEqual([1, 2, 3, 4])
  })
})


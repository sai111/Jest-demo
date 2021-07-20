
// import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//  it('renders props.msg when passed', () => {
//    const root = document.createElement('div')
//    root.className = 'root'
//    document.body.appendChild(root)
//    new Vue({
//      render: h => h(HelloWorld, {
//        props: {
//          msg: '测试文件'
//        }
//      })
//    }).$mount('.root')
//    console.log(document.body.innerHTML, '11')
//    expect(document.getElementsByClassName('hello').length).toBe(1)
//  })
// })
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = '测试文件'
    // mount 集成测绘，性能低
    // shallowMount 浅渲染
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.props('msg')).toEqual(msg)
    //expect(wrapper.findAll('.mmm').length).toBe(1)
    wrapper.setProps({ msg: 'hello' })
    // expect(wrapper.text()).toMatch(msg)
    // expect(wrapper.props('msg')).toEqual('hello')
  })
})
    

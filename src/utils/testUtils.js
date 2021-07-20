/**
 * 
 * @param {*} wrapper 父级的wrapper
 * @param {*} tag 选择器的tag
 */
const findTestWrapper = (wrapper, tag) => {
  return wrapper.findAll(`[data-test="${tag}"]`)
}

export default findTestWrapper

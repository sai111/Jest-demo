// 初始
const math = require('./math.js')
const { add, minus, multi }  = math
test('测试加法 3 + 3', () => {
  expect(add(3, 3)).toBe(9)
})
test('测试减法 3 - 3', () => {
  expect(minus(3, 3)).toBe(0)
})
test('测试乘法 3 * 3', () => {
  expect(multi(3, 3)).toBe(9)
})



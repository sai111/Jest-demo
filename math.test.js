// 初始
const result1 = add(3, 7)
const expected1 = 10
if (result1 !== 10) {
  throw Error(`3 + 7 应该等于 ${expected1}, 结果为 ${result1}`)
}

const result2 = minus(7, 7)
const expected2 = 0
if (result2 !== 10) {
  throw Error(`7 - 7 应该等于 ${expected2}, 结果为 ${result2}`)
}


// 升级
function expect(result) {
  return {
    toBe: (actual) => {
      if (result !== actual) {
        throw new Error(`error, 预期=>${actual}, 实际=>${result}`)
      } else {
        return 'success'
      }
    }
  }
}

expect(add(3, 3)).toBe(6)

// 升级2
function expect(result) {
  return {
    toBe: (actual) => {
      if (result !== actual) {
        throw new Error(`error, 预期=>${actual}, 实际=>${result}`)
      } else {
        return 'success'
      }
    }
  }
}
function test(desc, fn) {
  try {
    fn()
    console.log(`${desc}通过测试`)
  } catch(e) {
    console.log(`${desc}没有通过测试 ${e}`)
  }
}
test('测试加法 3 + 3', () => {
  expect(add(3, 3)).toBe(6)
})
test('测试减法 3 - 3', () => {
  expect(add(3, 3)).toBe(6)
})
// tip：bug错误提示，错误位置



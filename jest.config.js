module.exports = {
  // 告诉jest需要解析的文件
  moduleFileExtensions: [ 'js', 'jsx', 'json', 'vue' ],
  // 告诉jest去哪里找模块资源，同webpack中的modules
  moduleDirectories: [
    'src',
    'node_modules'
  ],
  // 告诉jest针对不同类型的文件如何转义
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  // 别名，同webpack中的alias，模块映射
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^block(.*)$': '<rootDir>/src/components/block/$1',
    '^toolkit(.*)$': '<rootDir>/src/components/toolkit/$1'
  },
  // 对快照-文件格式化
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  // 告诉jest去哪里找我们编写的测试文件
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)'
  ],
  // 测试地址
  testURL: 'http://localhost/',
  // 测试忽视文件
  testPathIgnorePatterns: [
    '.eslintrc.js'
  ],
  // todo
  // watchPlugins: [
  //  'jest-watch-typeahead/filename',
  //  'jest-watch-typeahead/testname',
  // ],
  // todo
  preset: '@vue/cli-plugin-unit-jest'
}

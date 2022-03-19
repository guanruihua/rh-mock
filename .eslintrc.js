module.exports = {
  parser: '@typescript-eslint/parser', // 使用 ts 解析器
  extends: [
    'eslint:recommended', // eslint 推荐规则
    'plugin:@typescript-eslint/recommended' // ts 推荐规则
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'no-prototype-builtins': 'off',
    // '@typescript-eslint/no-unused-vars':'off',
    // '@typescript-eslint/no-inferrable-types': 'off',
    // 'prefer-const': 'off',
    'no-dupe-keys': 'error', // 禁止对象字面量中出现重复的 key
    // 'no-duplicate-case': 'error', // 禁止出现重复的 case 标签
    'prefer-rest-params': 'off',
    curly: 'error', // 强制所有控制语句使用一致的括号风格
    // '@typescript-eslint/no- inferable -types': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  } // 自定义
}

module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': 'off'
  }
};

module.exports = {
    "root": true,
    "env": {
      "node": true,
      "browser": true
    },
    extends: [
      'vue-global-api',
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      'prettier',
      '@vue/prettier'
    ],
    plugins: ['prettier'],
    "parserOptions": {
      parser: 'babel-eslint',
      ecmaVersion: 2017
    },
    "rules": {
      "no-undef":"off",
      "no-const-assign":"off"
    },
  }

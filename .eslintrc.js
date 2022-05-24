module.exports = {
    "root": true,
    "env": {
      "node": true,
      "browser": true
    },
    extends: [
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
      "vue/no-setup-props-destructure":"off",
      "no-const-assign":"off",
      "no-import-assign":"off",
    },
  }

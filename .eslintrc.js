module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [],
  root: true,
  // add your custom rules here
  rules: {
    'no-console': 'off',
    semi: [2, 'never'],
    'sort-keys': ['error', 'asc'],
    'vue/attributes-order': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          component: 'always',
          normal: 'always',
          void: 'always',
        },
      },
    ],
  },
}

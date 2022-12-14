module.exports = {
  root: true,
  extends: '@meteorlxy/prettier',
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      extends: '@meteorlxy/prettier-typescript-vue',
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
    {
      files: ['dev/**/*.vue'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
};

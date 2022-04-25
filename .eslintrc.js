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
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['docs/.vuepress/**/*.ts', 'vite.config.ts'],
          },
        ],
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

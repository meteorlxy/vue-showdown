module.exports = {
  root: true,
  extends: '@meteorlxy/prettier',
  overrides: [
    {
      files: ['*.ts'],
      extends: '@meteorlxy/prettier-typescript',
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
      files: ['*.vue'],
      extends: '@meteorlxy/prettier-typescript-vue',
    },
  ],
};
